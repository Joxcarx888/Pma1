import { useGif } from "../hooks/useGif"

export const GifApp = () =>{

    const {handleGetGif, gif} = useGif()
    return(
        <>
            <button onClick={handleGetGif} className="w-50 m-5 btn btn-primary"> Generar Gif</button>
            <img className="w-50 m-5" src={gif} alt='image'/>
        </>
    )

}