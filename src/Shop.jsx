// import React from "react";


// export default function Shop(props)
// {
//     const addprod = (e) =>
//     {
    
//         props.addtocart(props.id, props.name,props.price,props.image ,props.qty)

//     }
//     return( 
//         <>
//             <div className="card-body">
//             <img src={props.image}  width="150px" height="150px"/>

//                <p> {props.name}</p>
//                 <h3> {props.price}</h3>
//                 <button className="btn btn-success" onClick={(e) => addprod()}>Add to Cart</button>
                
//             </div>

//         </>
               
                
//     )
// }


import React from 'react'

export default function Shop(props) {
     const addprod = (e) =>{
        // alert(props.name)
        props.addtocart(props.id ,props.name, props.price , props.image, props.qty)
     }
    return (
        <>
            <div className="card text-center">
                <div className="card-body">
                <img src={props.image} style={{ height: "100px", width: "100px" }} />

                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.price}</p>
                    <button className='btn btn-success' onClick={(e) =>addprod()}>Add to cart </button>
                    <h1>{props.qty}</h1>
                </div>
            </div>
        </>
    )
}
