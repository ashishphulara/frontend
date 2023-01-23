import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import Header from "../header/header";




const Form=()=>{
    const navigate =useNavigate();

    const [details, setDetails] = useState({
        author:"",location:"", description:""
    })
    const [image,setImage] = useState("");
    const [imageURL,setimageURL] = useState("");


    const loadFile = (event) => {
        const output = document.getElementById('output');
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = () => {
          URL.revokeObjectURL(output.src) // free memory
        }
    }

     const getAll =(e)=>{
      setDetails({...details,[e.target.name]:e.target.value})
    }
    useEffect(()=>{
        if(imageURL){
            fetch("https://good-slacks-clam.cyclic.app/user",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                  userName:details.author,
                    location:details.location,
                    description:details.description,
                    file : imageURL
                })
            })
    .then(res => res.json()).then(data =>{
        if(data.error){}
        else{
          console.log(data)
          navigate('/main_page')
        }} ).catch(err => console.log(err))
    }
}
    ,[imageURL])



    const createPost=()=>{
    const data = new FormData();
    data.append("file", image)

    //append from server 
    data.append("upload_preset", "instapreset")
    data.append("cloud_name", "ashishthegreat")

    //url for fecting the data from cloudinary server
    fetch("https://api.cloudinary.com/v1_1/ashishthegreat/image/upload", {
      method: "post",
      body: data
    })
      .then(res => res.json())
      //send url to contant
      .then(data => setimageURL(data.url))
      .catch(err => console.log(err))
    }


  return (
    <div className="formContainer">
    <Header/>
    <div className='formMain'>
      
    <div className='formData'>
        <label  htmlFor='name' ><u>Name</u></label>
        <input type="text" name= "author" placeholder='Author' onChange={getAll}/>

        <label htmlFor='location' ><u>Location</u></label>
        <input type="text" name='location' placeholder='location' onChange={getAll}/>
        
        <label htmlFor='description' ><u>Description</u></label>
        <textarea placeholder='description' name='description' onChange={getAll}></textarea>
        
        <img id='output' src='https://t4.ftcdn.net/jpg/02/17/88/73/360_F_217887350_mDfLv2ootQNeffWXT57VQr8OX7IvZKvB.jpg' alt="picImage" className='image'/>
        <label htmlFor='file' ><u>Upload File</u></label>
        <input type="file"  name='file' onChange={(e)=>{loadFile(e); setImage(e.target.files[0])}} 
        accept= "image/*"/>
        
        <button onClick={createPost}>Post</button>
    </div>
    </div>
    </div>
  )

}
export default Form


//  "https://good-slacks-clam.cyclic.app/user

//https://api.cloudinary.com/v1_1/ashishthegreat/image/upload"

//https://png.pngtree.com/element_our/20190528/ourmid/pngtree-photo-icon-image_1128397.jpg

//  formData.append("upload_preset","instapreset");
// formData.append("cloud_name","ashishthegreat");