// import React, { useEffect, useState } from "react";


// export default function Cart(props)
// {
//    const[data, setdata] = useState([]);

//    useEffect( () =>
// {
//      if(props.sendcart)
//         {
//             setdata(props.sendcart)

           
//         }

        
// },[props.sendcart])


//     const rem = (id) =>
//         {
//             const ritem = data.filter((item) => item.id !== id)
//             setdata(ritem)
//             props.removedata(ritem)
             
//         }

//     return(
//         <div>
//             <table>
//                 <tr>
//                     <th>slno</th>
//                     <th>Product Image</th>
//                     <th>Product Name</th>
//                     <th>Product Price</th>
//                     <th>Action</th>
//                 </tr>
//        {data.map((data,index) => (

//             <tr>
//                 <td>{index +1}</td>
//                 <td><img src={data.image} width={50} height={50} /></td>
//                 <td>{data.name}</td>
//                 <td>{data.price}</td>
//                 <td onClick={() => rem(data.id)}><img  src={require('./img/remove.png')} width={30} height={30} /></td>

//             </tr>



//        ))}
        
//         </table>
//     </div>
//     )
// }


import React, { useEffect, useState } from 'react'
import { FcFullTrash } from "react-icons/fc";

export default function Cart(props) {
  const [data, setdata] = useState([]);
  useEffect(() => {
    if (props.sendcart) {
      setdata(props.sendcart)
    }
  }, [props.sendcart])


  const handleRemove = (id) => {
const removeitemdata = data.filter((item) => item.id !== id)
setdata(removeitemdata)
props.removedata(removeitemdata)
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
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => (
            <tr key={index}>
              <td>{data.id}</td>
              <td><img src={data.image} style={{ width: '50px', height: '50px' }} /></td>
              <td>{data.name}</td>
              <td>{data.price}</td>
              <td><FcFullTrash onClick={() => handleRemove(data.id)} style={{ cursor: 'pointer' }} /> remove</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};


