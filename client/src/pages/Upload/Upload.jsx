import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify';
import ApiContext from '../../context/ApiProvider';
import AuthContext from '../../context/AuthProvider';

const Upload = () => {
  const { isLogged } = useContext(AuthContext);
  const { saveGif } = useContext(ApiContext)
  


  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    console.log(isLogged)
    const {token} = isLogged;
    if (!token) {
      toast.warning('Sign in to save GIFs', { toastId: 'saveGifWarning '})
    } else if (token) {
      try {
        console.log(data)
        const res = await saveGif(data)
        res && toast.success('GIF saved!', { toastId: 'saveGifSuccess'})
      } catch (err) {
        toast.error('Failed to save GIF', { toastId: 'saveGifError '})
      }
    }
  }



  return (
    <>
    <section className="h-screen">
      <form id="uploadForm" className="flex gap-8 justify-center items-center  mt-16" onSubmit={handleSubmit(onSubmit)}>
        <div className='content-center flex flex-col text-left gap-8'>
        <label htmlFor="title">GIF Title:</label>
        <label htmlFor="url">URL:</label>
        <label htmlFor="category">Category:</label>
        
        </div>
        <div className='content-center flex flex-col text-left gap-8 w-2/4'>
        <input className="h-8 p-2 col-span-1 w-3/4"
          id="title"
          defaultValue="" 
          type="text"
          name="title"
          placeholder="GIF Title:"
          {...register("title", { required: true })} 
          />
        {errors.title && <span className="-mt-4 text-xs text-rose-600">Title is required</span>}
        
        
        
        <input className="h-8 p-2 w-3/4"
        id="url"
            defaultValue="" 
            type="text"
            name="URL"
            placeholder="URL:"
            {...register("url", { required: true })} 
          />
        {errors.url && <span className="-mt-4 text-xs text-rose-600">URL is required</span>}
        <select {...register("category")} id="category" className='w-1/2 h-8'>
          
          <option value="Funny">Funny</option>
          <option value="Action">Action</option>
          <option value="Animals">Other</option>
        </select>
        {errors.category && <span className="-mt-4 text-xs text-rose-600">Category is required</span>}
        </div>
        <button form="uploadForm" type="submit" className='-ml-12 h-24 w-24 rounded bg-indigo-800 border border-white hover:scale-105'>Save</button>
      </form>
      
    </section>
    </>
  )
}



export default Upload;