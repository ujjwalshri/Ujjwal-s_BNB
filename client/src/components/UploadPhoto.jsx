import React from 'react'
import {useState} from 'react';
import axios from 'axios';
const UploadPhoto = ({addedPhotos, onChange}) => {
    const [photoLink, setPhotoLink] = useState('');
    async function uploadImageByLink(ev){
        ev.preventDefault();
      const {data:filename} =  await axios.post('/upload-by-link', {
        link : photoLink
       })
       onChange(prev => {
        return [...prev, filename];
       })
       setPhotoLink('');
      }
      
     function uploadPhoto(ev){
      const files = ev.target.files;
      const data = new FormData();
    for(var i = 0;i<files.length;i++){
      data.append('photos', files[i]);
    }
      axios.post('/upload' , data,{
        headers : {'Content-type': 'multipart/form-data'}
      }).then((response)=>{
          const  {data:filenames} = response;
          onChange(prev => {
            return [...prev,...filenames];
          })
      })
     }
  
  return (
   <>
   <h2 className='text-xl'>Add image using link</h2>
      <h2 className='text-xl'>Photos (more == better)</h2>
      <div className='flex gap-10'>
       
        <input type="text" 
        value={photoLink}
        onChange={ev=>setPhotoLink(ev.target.value)} 
        placeholder='add image using a link...' />
        <button  onClick={uploadImageByLink} className='w-1/2 bg-primary hover:bg-secondary'>ADD+</button>
      </div>
      <div className=''>
       
      <div className='w-1/2 flex gap-2'>
       {addedPhotos.length > 0 && (
        addedPhotos.map(photoLink => (
          <div className='text-black ' key={photoLink}>
            <img src={'http://localhost:2000/uploads/'+ photoLink} alt="" />
          </div>
        )
        )
       )}
       <label  className='bg-primary hover:bg-secondary border w-1/2 rounded-2xl p-2 cursor-pointer text-white'>
       <input type="file" hidden onChange={uploadPhoto}/>
         Add photos +</label>
      </div>
      </div>
   </>
  )
}

export default UploadPhoto