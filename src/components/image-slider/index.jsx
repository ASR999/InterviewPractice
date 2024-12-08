import React from "react";
import { useState } from "react";
import './style.css'
import { useEffect } from "react";

const ImageSlider = ({url,limit= 5,page =1}) => {

    const [images,setImages] = useState([]);
    const [currentSlide,setCurrentSlide] = useState(0);
    const [errorMsg,setErrorMsg] = useState(null)
    const [loading,setLoading] = useState(false);

    async function fetchImage(getUrl) {
        try {

            setLoading(true);

            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
            const data = await fetch(response)

            if(data) {
                setImages(data)
                setLoading(false)
            }
        } catch (error) {
            setErrorMsg(error.message);
            setLoading(false)
        }
    }

    useEffect(()=> {
        if(url !== '') fetchImage(url);
    },[url])

    console.log(images);
    

    if(loading) {
        return <div>Loading, please wait!</div>
    }

    if(errorMsg !== null ) {
        return <div>Error occured! {errorMsg}</div>
    }

    return <div className="container"></div>
}

export default ImageSlider;