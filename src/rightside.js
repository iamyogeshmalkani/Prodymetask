import React from 'react'
import Description from './prodectdescription'
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Typography } from '@mui/material';
export default function Rightside() {
    const stars=["true","true","true","true","false"];
  return (
    <div style={{width: "70%",backgroundColor: "#F8F8F8",paddingLeft: "2rem"}}>
        <div style={{display: "flex",flexDirection: "row",gap: "8rem",marginTop: "1rem"}}>
            <Typography variant="body2">Navigation Category A</Typography>
            <Typography variant="body2">Navigation Item B</Typography>
        </div>

        <div style={{textAlign: "left",marginTop: "2.5rem"}}>
            <div>
            <Typography variant="subtitle1"  style={{fontSize: "2.5rem",fontFamily: "calibri"}}>
          Product Name ABC
          </Typography>
         <FavoriteBorderIcon style={{float: "right",height: "2rem", marginRight: "5rem", color: "#F07732",position: "relative",bottom: "2rem"}}/>

            </div>
        
        <p style={{position: "relative",bottom: "1rem"}}>Product Category Name(Plywood)</p>

        </div>
      
        <div style={{display: "flex",flexDirection: "row",justifyContent: "space-between"}}>
            <div>
            {
                stars.map((element) => {
                    return(
                        element==="true" ?<StarIcon style={{color: "#F07732"}}/> : <StarIcon  style={{color: "gray"}}/>

                    )
                    
                 
                    
                })
            }
            </div>
            <Typography variant="body2"><b>4.4</b> <span style={{color: "gray"}}>(328 reviews)</span></Typography>
            <Typography variant="body2" style={{color: "#F07732",textDecoration: "underline"}}> Build My project</Typography>
            <Typography variant="h4" style={{marginRight: "5rem"}}>₹2100.00<sub style={{fontSize: "1.1rem"}}>per sheat</sub> </Typography>


        </div>
        <Description />
        
    </div>
  )
}
