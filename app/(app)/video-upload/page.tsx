'use client'
import React, {useState} from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const videoUpload = () => {

      const [file, setFile] = useState<File | null>(null)
      const [title, setTitle] = useState("")
      const [description, setDescription] = useState("")
      const [isUploading, setIsUploading] = useState(false)

      const router = useRouter()

      // max file size of 670 mb
      const MAX_FILE_SIZE = 70*1024*1024;

      const handleSubmit = async (event: React.FormEvent)=>{

      }



  return (
    <div>page</div>
  )
}

export default videoUpload