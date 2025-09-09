import { v2 as cloudinary } from 'cloudinary';
import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { PrismaClient } from '@prisma/client/extension';

// global configuration of prisma
const prisma = new PrismaClient()

// Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


interface CloudinaryUploadResult {
  public_id: string;
  bytes: number;
  duration?: number;
  [key: string]: any;
}


export async function POST(request: NextRequest) {
    // todo to check user 
    //   const { userId } = await auth();

    //   if (!userId) {
    //     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    //   }
  
  try {
     if(
        ! process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET 
    ){
            return NextResponse.json({error: "cloudinary credentials not found"}, { status: 500})
    }

    // get the data from reques size 
    const formdata = await request.formData();
    const file = formdata.get("file") as File | null;
    const title = formdata.get("title")as string ;
    const description = formdata.get("description") as string;
    const originalSize = formdata.get("originalSize") as string;

    if (!file) {
      return NextResponse.json({ error: "File not found" }, { status: 400 });
    }

    const byte = await file.arrayBuffer();
    const buffer = Buffer.from(byte);

    const Result = await new Promise<CloudinaryUploadResult>((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { 
            resource_type: "video",
            folder: "video-upload",
            transformation: [
                {
                    quality: "auto", fetch_format: "mp4"
                }
            ]
         }, 
         // auto-detects image/video
        (error, result) => {
          if (error) reject(error);
          else resolve(result as CloudinaryUploadResult);
        }
      ).end(buffer);
    });

    // return NextResponse.json({ publicId: Result.public_id }, { status: 200 });

    const video = await prisma.video.create({
        data: {
            title,
            description,
            publicId: Result.public_id,
            originalSize: originalSize,
            CompressedSize: String(Result.bytes),
            duration: Result.duration || 0
        }
    })
    return NextResponse.json(video)

  } catch (error: any) {
    console.log("upload video failed ", error)
    return NextResponse.json(
      { error: error.message || "Upload video failed" },
      { status: 500 }
    );
  }
  finally{
    await prisma.$disconnect()
  }
}
