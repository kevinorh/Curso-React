// import { useEffect, useState } from "react"
// import { getGifs } from "../helpers/getGifs"
import { GifGridItem } from "./GifGridItem"; 
import { useFetchGifs } from "../hooks/useFetchGIfs";
import PropTypes from 'prop-types'

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);

    // const getImages = async () => {
    //     const newImages = await getGifs(category);
    //     setImages(newImages)
    // }

    // useEffect(() => {
    //     getImages();
    // }, [])
    //TODO LO DE ARRIBA SE REEMPLAZA POR UN CUSTOM HOOK AQUI ABAJO
    const {images, isLoading} = useFetchGifs(category);

    console.log({images, isLoading});


    return (
        <>
            <h3>{category}</h3>
            {
                //isLoading? <h2>Cargando..</h2>: null
                isLoading && <h2>Cargando..</h2>
            }
            
            <div className="card-grid">
                {
                    images.map((image) => (
                        // <li key={id}>
                        //     <p>{title}</p>
                        //     <img src={url} />
                        // </li>
                        <GifGridItem key={image.id}
                        //EXPARCIR ELEMENTOS
                        { ...image }
                        />
                    )
                    )
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}