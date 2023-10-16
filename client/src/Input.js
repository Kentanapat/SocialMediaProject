import React, {useState,useEffect} from "react";
import PropTypes from 'prop-types';

function Input({addPost}){
    const[input, setInput] = useState('');
    const [images, setImages] = useState([]);
    const [imagesURLs, setImagesURLs] = useState([]);

    function onChange(event){
        setInput(event.target.value);
    }

    function onKeyDown(event){
        const title = event.target.value;

        if(event.key == 'Enter' && title){
            addPost(title);
            setInput('');
        }
    }
    
return (
    <div className="Input">
        <div className="Input-header">Create Post</div>
        <input className="Input-field"  
        type="text" value={input} onChange={onChange}
        onKeyDown={onKeyDown}/>
    </div>
)
function Imgpost(){
    
    useEffect(()=>{
     if(images.length < 1) return;
     const newImageUrls = [];
     images.forEach(image => newImageUrls.push(URL.createObjectURL(image)))
     setImagesURLs(newImageUrls);
    }, [images]);
 
    function onImageChange(e){
     setImages([...e.target.files]);
    }
 
    console.log("Images : ", images);
    console.log("imageURLs : ", imagesURLs);
     return (
         <div className="Imgpost">
             <input type="file" multiple accept="image/*" onChange={onImageChange} />
             {imagesURLs.map(imageSrc => <img  width="640" height="360"src={imageSrc} />)}
         </div>
     )
   }
}

export default Input;