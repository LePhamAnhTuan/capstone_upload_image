import React, { useState } from 'react'
import { upload } from '../api/upload';

type Props = {}

export default function Addnew({}: Props) {
  const [ files, setFiles] = useState<any>(null)
  const uploadFiles= () => { 
    console.log('files: ', files);
    upload(files[0])
    
   }
    const handleSubmit =async (e:any) => { 
        e.preventDefault()
        try {
         await uploadFiles()
 
          
        } catch (error) {
          
        }
        const files=e.target.file
        console.log('files: ', files);

     }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <p>thêm mới</p>
        <input type="file" accept='*' multiple onChange={(e) => { setFiles(e.target.files)
        }}/>
        <button type="submit">gui</button>
        </form>
    </div>
  )
}