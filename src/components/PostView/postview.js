import React, { useEffect, useState } from 'react';
import Card from "../../card"
const Postview=()=> {
  const [post, setPost] = useState([]);
  useEffect(()=>{
    fetch("https://good-slacks-clam.cyclic.app/newData").then((res)=> res.json()).then((data)=>{
    setPost(data);
    }).catch((err)=>{
      if(err){
        console.log(err);
      }
    })
  },[])
  return (
    <>
      <div className='post-container'>
        {post.map((post,i)=>{
          return(
            <Card post={post} key={i}/>
          )
        })}
      </div>
    </>
  );
}
export default Postview;
