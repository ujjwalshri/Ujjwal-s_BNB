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


    // function for deleting the photos on the form 
    function removePhoto(ev,filename) {
      ev.preventDefault();
      onChange([...addedPhotos.filter(photo => photo !== filename)]);
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
       
      <div className='w-full flex gap-1'>
       {addedPhotos.length > 0 && (
        addedPhotos.map(photoLink => (
          <div className='text-black w-1/4 ' key={photoLink}>
            <button 
            onClick={ev => removePhoto(ev,photoLink)} 
            className='absolute bg-white bg-opacity-50 rounded-xl px-1 cursor-pointer'
            >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
</svg>

            </button>
            
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