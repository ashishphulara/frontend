import React, { useState ,useEffect } from 'react'

const Showpost = () => {
    const [severresponse , setServerResponse] = useState(null);

    const fetchAllPost= async ()=>{
        const resp = await fetch("http://localhost:6969/newData")
        setServerResponse(await resp.json())
    }
    useEffect(()=>{
        fetchAllPost()
    },[])
    if(severresponse == null){
        return (
            <h2>loading....</h2>
        )
    }
  return (
    <div>
        {
            severresponse?.result?.map?.((post,index)=>{
                return (
                    <img width={100} height={100} style={{border: '2px solid red'}} src={`http://localhost:6969/images/${post.file}`} key={index} alt="imgae"/>
                )
            })
        }
    </div>
  )
}

export default Showpost