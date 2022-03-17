import React from 'react';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DescTable from './table'; 

export default function Description() {
  return (
    <div  className="description" style={{ maxHeight: "500px",overflowY: "scroll",width: "70%",float:"right",textAlign: "left",paddingRight: "5rem",marginTop: "2rem"}} >
        <Typography variant= "h6" ><b>Product Description</b></Typography>
        
        <Typography style={{marginTop: "1rem",color: "gray"}} variant="body2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
        <div style={{display: 'flex',flexDirection: 'row',justifyContent: "space-between",gap: "5rem",marginTop: "3rem"}}>
            <p>Available Online <b>189</b></p>
            <div style={{display: "flex",flexDirection: "row"}}>
            <p>Quantity</p>
            <p style={{paddingLeft: "0.5rem"}}>
            <AddIcon style={{color: "#F07732",hieght: "20px"}}/>
            <span style={{position: "relative",bottom: "5px",backgroundColor: "white",paddingLeft: "0.5rem",paddingRight: "0.5rem"}}>1</span>
            <RemoveIcon style={{color: "#F07732"}}/>
            
            </p>
            
            </div>
            
            <Button  variant="contained" style={{height: "2.5rem",backgroundColor:'#F07732',borderRadius: "1.5rem"}}>Add to Cart</Button>
            

        </div>
        <DescTable />
    </div>
  )
}
