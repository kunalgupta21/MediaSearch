import axios from 'axios';

const UNSPLASH=import.meta.env.VITE_UNSPLASH_KEY;
const KLIPY=import.meta.env.VITE_KLIPY_KEY;
const PEXELS=import.meta.env.VITE_PEXELS_KEY;

export const fetchPhotos=(async (query,page=1,per_page=8)=>{
  const res=await axios.get('https://api.unsplash.com/search/photos',{
    params:{query,page,per_page},
    headers:{Authorization:`Client-ID ${UNSPLASH}`}
  }
  )
  // console.log(res.data);
  return res.data;

})
export const fetchVideos=(async (query,per_page=8)=>{
  const res=await axios.get('https://api.pexels.com/videos/search',{
    params:{query,per_page},
    headers:{Authorization:PEXELS}
  }
  )
  return res.data;

})
export const fetchGIF=(async (query,page=1,per_page=8)=>{
  const res=await axios.get( `https://api.klipy.com/api/v1/${KLIPY}/gifs/search`,{
    params:{q:query,page,per_page}
  })
  return res.data;
})