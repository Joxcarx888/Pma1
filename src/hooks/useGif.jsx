import { useState } from "react"

export const useGif = () => {

    const [gif, setGif] = useState('')

    const reqGif = async() =>{
        await fetch('http://api.giphy.com/v1/gifs/random?api_key=AWnTQUIxE7YOvZDBkIHbcl0vPv2PS9M6').then(async(resp) =>{
            await resp.json().then(({data})=>{
                setGif(data.images.original.url)
            })
        }).catch(console.error)
    }
    
    const handleGetGif = () => {
        reqGif()
    }


    return {
        handleGetGif,
        gif

    }
}