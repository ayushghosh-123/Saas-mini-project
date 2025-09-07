import { v2 as cloudinary } from 'cloudinary';
import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';


// Configuration
cloudinary.config({ 
        cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
    });

interface CloudinaryUploadResult{
         public_id: string,
         [key: string]: any
    }

export async function POST(request: NextRequest){
    const {userId} = await auth();
    if(!userId)
    {
        return NextResponse.json({error: "Unautherized"}, {status: 401})
    }

    try {
        const formdata = await request.formData()
        const file = formdata.get('file') as File | null;

        if(!file){
            return NextResponse.json({error: "File not fount"}, {status: 400})
        }

        const byte = await file.arrayBuffer()
        const buffer = Buffer.from(byte)

        const uploadResult = await new Promise<CloudinaryUploadResult>((resolve, reject) => {
            cloudinary.uploader.upload_stream(
                { resource_type: 'auto' },
                (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result as CloudinaryUploadResult);
                    }
                }
            ).end(buffer);
        });
    } catch (error) {
        
    }

}