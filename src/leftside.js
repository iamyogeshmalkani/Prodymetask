import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';


export default function Leftside() {
  const [clickedimage,setclickedimage] = useState("");
  const images=["https://images.unsplash.com/photo-1644982648774-83312909bbef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1647296020395-6393d3b293fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1647347164828-6338090dba05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1647395983377-6b3e1b72b318?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
]
function imagehandler(str){
  setclickedimage(str);
}
  return (
    <div style={{width: "30%",backgroundColor: "#DDE8EA",textAlign: "left"}}>
      <div style={{float: "right",width: "80%",}}>
        <Typography variant="body2" style={{marginTop: "1rem"}}>Home/ <b>Product details page</b></Typography>
        <Typography variant="body1" style={{marginTop: "2rem"}}>Tags:</Typography>
        <div style={{display: "flex",flexDirection: "row",flexWrap: "wrap",gap: "1rem",marginTop: "1rem"}}>
        <Button disabled style={{backgroundColor: "white",color: "black",borderRadius: "1rem",paddingLeft: "1rem",paddingRight: "1rem"}}>Kitchen</Button>
        <Button disabled style={{backgroundColor: "white",color: "black",borderRadius: "1rem",paddingLeft: "1rem",paddingRight: "1rem"}}>L-Shaped</Button>
        <Button disabled style={{backgroundColor: "white",color: "black",borderRadius: "1rem",paddingLeft: "1rem",paddingRight: "1rem"}}>Sustainable</Button>
        </div>
        <div style={{display: "flex",flexDirection: "column",marginTop: "1rem"}}>
         {images.map((image)=>{
           return(
             <>
             <img style={{width:"6rem",marginTop: "1rem",borderRadius: "0.5rem",border: "1px solid #ddd"}} onClick={()=>imagehandler(image)} src={image}/>
            
               </>
           )
         })}
          <img style={{position: "relative",borderRadius: "0.5rem",border: "1px solid #ddd",bottom: "19rem",left: "7.3rem",height: "19rem"}} src={clickedimage} />

        </div>
       


      </div>

    </div>
  )
}
