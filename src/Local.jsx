// import React, { useEffect, useState } from "react";
// // import { json } from "react-router-dom";


// export default function Local(props)
// {

//     const[data, setdatas] = useState([]);
//     const[nqty,setnqty] = useState("1")
//     useEffect(()=>
//     {
//         const localdata = localStorage.getItem("product")

//         if(localdata)
//             {
//                 const abc = JSON.parse(localdata)
//                 setdatas(abc);
//             }
       
//     },[props])

//     const rem = (id) =>
//         {
//             const ritem = data.filter((item) => item.id !== id)
//             setdatas(ritem)
//             props.removedata(ritem)
             
//         }

//         const updateqty = (e,id,price)=>
//             {

//                 setnqty(e.target.value);


//                 const fillter = data.findIndex((item) => item.id == id)
                
//                  const newdata =[...data];

                  
                
//                  newdata[fillter] = {
//                     ...newdata[fillter] ,
//                     qty : parseInt(nqty),
//                     price: parseInt(price) * parseInt(nqty)
//                  }


 
//                  props.update(newdata)


                 


//             }
//     return(
//         <div>
//             <table>
//                 <tr>
//                     <th>slno</th>
//                     <th>Product Image</th>
//                     <th>Product Name</th>
//                     <th>Product Price</th>
//                     <th>Product QTY</th>
//                     <th>Product Total</th>
//                     <th>Action</th>
//                 </tr>
//        {data.map((data,index) => (

//             <tr>
//                 <td>{index +1}</td>
//                 <td><img src={data.image} width={50} height={50} /></td>
//                 <td>{data.name}</td>
//                 <td>{data.price}</td>
//                 <td><input type="number" value={data.qty} onChange={(e) => updateqty(e , data.id, data.price)} /></td>
//                 <td>{data.price}</td>
//                 <td onClick={() => rem(data.id)}><img  src={require('./img/remove.png')} width={30} height={30} /></td>

//             </tr>



//        ))}
        
//         </table>
//     </div>
//     )
// }




// import React from 'react';
// import { FcFullTrash } from "react-icons/fc";

// export default function Local(props) {
//   const handleRemove = (id) => {
//     const removeItemData = props.productinfo.filter((item) => item.id !== id);
//     props.removedata(removeItemData);
//   };

//   const getTotalAmount = () => {
//     return props.productinfo.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   return (
//     <div>
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th scope="col">S.No</th>
//             <th scope="col">Image</th>
//             <th scope="col">Name</th>
//             <th scope="col">Price</th>
//             <th scope="col">Quantity</th>
//             <th scope="col">Total</th>
//             <th scope="col">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {props.productinfo.map((item, index) => (
//             <tr key={index}>
//               <td>{index + 1}</td>
//               <td><img src={item.image} alt={item.name} style={{ width: '50px', height: '50px' }} /></td>
//               <td>{item.name}</td>
//               <td>{item.price}</td>
//               <td>
//                 <button onClick={() => props.handleDecreaseQuantity(item.id)}>-</button>
//                 {item.quantity}
//                 <button onClick={() => props.handleIncreaseQuantity(item.id)}>+</button>
//               </td>
//               <td>{item.price * item.quantity}</td>
//               <td>
//                 <p onClick={() => handleRemove(item.id)} style={{ cursor: 'pointer', color: 'red' }}>
//                   <FcFullTrash /> remove
//                 </p>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div>
//         <h3>Total Amount: {getTotalAmount()}</h3>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import { FcFullTrash } from "react-icons/fc";

export default function Local(props) {
  const handleRemove = (id) => {
    const removeItemData = props.productinfo.filter((item) => item.id !== id);
    props.removedata(removeItemData);
  };

  const getTotalAmount = () => {
    return props.productinfo.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {props.productinfo.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td><img src={item.image} alt={item.name} style={{ width: '50px', height: '50px' }} /></td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => props.handleQuantityChange(item.id, e.target.value)}
                  min="1"
                />
              </td>
              <td>{item.price * item.quantity}</td>
              <td>
                <p onClick={() => handleRemove(item.id)} style={{ cursor: 'pointer', color: 'red' }}>
                  <FcFullTrash /> remove
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h3>Total Amount: {getTotalAmount()}</h3>
      </div>
    </div>
  );
}
