import React from "react";

function Square(prop){

   

   

    return(
        
        <>
        <div>

        <button className="btn" onClick={() => prop.onClick()}>{prop.value}</button>

        </div>
        

    


            
        </>




    );



}

export default Square;