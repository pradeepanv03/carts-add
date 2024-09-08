// import React, { useEffect, useState } from "react";

// import Shop from "./Shop";
// import Cart from "./Cart";
//  import Local from "./Local";

// export default function Main()
// {
//    const[productinfo , setproductifo] = useState([]);
//    const[cart, setcart] = useState("")
//    const[error, seterror] = useState("");
 


//    useEffect(() =>
// {
//     setcart(localStorage.getItem("cart"));

//     if(cart == 0)
//         {
//             setcart("")
//         }

// },[cart])
//     const addproduct = (id,name,price,image,qty)=>
//         {

//           const exist = productinfo.find((item) => item.id == id);

//           if(!exist)
//             {
              
              
//                 setproductifo([...productinfo, {id,name,price,image,qty}])
//                  localStorage.setItem("product", JSON.stringify([...productinfo, {id,name,price,image,qty}]));
//                 localStorage.setItem("cart", productinfo.length + 1);
//                 setcart(localStorage.getItem("cart"))

//             }
//             else
//             {
//                 seterror("Already Product Added")
//             }
              
            
//         }

//         const  productdelete = (rdata) =>
//             {

//                 setproductifo(rdata)
                
//                 localStorage.setItem("product", JSON.stringify(rdata));
//                 localStorage.setItem("cart", parseInt(productinfo.length) - parseInt(1))
//                 setcart(localStorage.getItem("cart"))
//             }

//             const updatedata = (udata) =>
//                 {
//                     setproductifo(udata)
                
//                     localStorage.setItem("product", JSON.stringify(udata));
//                     localStorage.setItem("cart", parseInt(productinfo.length) - parseInt(1))
                     
//                 }

//      return(
//          <div className="containter">
           
           
//            <div className="container text-center bg-primary p-3 text-white">

//             <div className="row">
//                 <div className="col-8 text-center">
//                 <h1> Simple Shopping Site</h1>
//                 <p>{error}</p>

//                 </div>

//                 <div className="col-4 text-end">
//                 <img src={require('./img/cart.png')} width={50} height={50}/> {cart}
                
//                 </div>

//             </div>

//              </div> 

//               <div className="container   p-2">

//                 <div className="row text-center">

//                 <div className="col-4 card ">

//                         <Shop id={"1"} name={"Apple"} price={"100"} image={require('./img/apple.png')} addtocart={addproduct} qty="1"/>
//                         </div>
           
            
              
//               <div className="col-4 card">
//                         <Shop id={"2"} name={"Grape"} price={"200"} image={require('./img/grape.png')} addtocart={addproduct} qty="1"/>
//                         </div>
//               <div className="col-4 card">
//                         <Shop id={"3"} name={"Orange"} price={"300"} image={require('./img/orange.png')} addtocart={addproduct} qty="1"/>
//                         </div>
                        
//                          </div>
//               </div>
//               {/* <Cart sendcart={productinfo} removedata={productdelete}/> */}

//               <Local  sendcart={cart} removedata={productdelete} update={updatedata}/>
//           </div>

        
//     )
// }




// import React, { useState, useEffect } from 'react';
// import Shop from './Shop';
// import Local from './Local';

// export default function Main() {
//   const [productinfo, setproductinfo] = useState([]);
//   const [error, seterror] = useState("");
//   const [cart, setcart] = useState(0);

//   useEffect(() => {
//     const localData = localStorage.getItem("product");
//     if (localData) {
//       const parsedData = JSON.parse(localData);
//       // Ensure each item has a quantity field
//       const initializedData = parsedData.map(item => ({
//         ...item,
//         quantity: item.quantity || 1,
//         price: Number(item.price) // Ensure price is a number
//       }));
//       setproductinfo(initializedData);
//       updateCartCount(initializedData);
//     }
//   }, []);

//   const updateCartCount = (data) => {
//     const totalQuantity = data.reduce((total, item) => total + item.quantity, 0);
//     setcart(totalQuantity);
//   };

//   const addproduct = (id, name, price, image) => {
//     const exist = productinfo.find((item) => item.id === id);
//     if (!exist) {
//       const newProduct = { id, name, price: Number(price), image, quantity: 1 };
//       const updatedProductInfo = [...productinfo, newProduct];
//       setproductinfo(updatedProductInfo);
//       updateCartCount(updatedProductInfo);
//       localStorage.setItem("product", JSON.stringify(updatedProductInfo));
//     } else {
//       seterror("Already Product added");
//     }
//   };

//   const productdelete = (removeitemdata) => {
//     setproductinfo(removeitemdata);
//     updateCartCount(removeitemdata);
//     localStorage.setItem("product", JSON.stringify(removeitemdata));
//   };

//   const handleIncreaseQuantity = (id) => {
//     const updatedData = productinfo.map((item) => {
//       if (item.id === id) {
//         return { ...item, quantity: item.quantity + 1 };
//       }
//       return item;
//     });
//     setproductinfo(updatedData);
//     updateCartCount(updatedData);
//     localStorage.setItem("product", JSON.stringify(updatedData));
//   };

//   const handleDecreaseQuantity = (id) => {
//     const updatedData = productinfo.map((item) => {
//       if (item.id === id && item.quantity > 1) {
//         return { ...item, quantity: item.quantity - 1 };
//       }
//       return item;
//     });
//     setproductinfo(updatedData);
//     updateCartCount(updatedData);
//     localStorage.setItem("product", JSON.stringify(updatedData));
//   };

//   return (
//     <>
//       <div className='container text-center bg-primary p-3 text-white'>
//         <div className='row'>
//           <div className='col'>
//             <h1>Simple Shopping Site</h1>
//             <p>{error}</p>
//           </div>
//           <div className='col'>
//             <img src={require('./img/cart.png')} width={50} height={50} alt="Cart" />
//             <sup style={{color:""}}>{cart}</sup>
//           </div>
//         </div>
//       </div>
//       <div className='container'>
//         <div className='row'>
//           <div className='col-4'>
//             <Shop
//               id={'1'}
//               name={'Grape'}
//               price={'200'}
//               image={'https://th.bing.com/th/id/R.20f15a142361a93d08913d127d75f2cb?rik=js3SCNcUR0oUEw&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-grapesgrapeberrygrapesfruitfood-1701527227951nuwdp.png&ehk=NqaMpP2Yo4sqd6ErqBMxDHP9CvEEW2WGg%2fwIjrDG2eA%3d&risl=1&pid=ImgRaw&r=0'}
//               addtocart={addproduct}
//             />
//           </div>
//           <div className='col-4'>
//             <Shop
//               id={'2'}
//               name={'Orange'}
//               price={'200'}
//               image={'https://th.bing.com/th/id/R.a8e83d5482e46bfdbd52476546d9cdd7?rik=9sM4jdpPK7mDWQ&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f05%2fOrange-Free-PNG-Image.png&ehk=0TgvoJ62gbSTDIxL63kfKEfbm%2fAQPRrbNT%2flPXwadn4%3d&risl=1&pid=ImgRaw&r=0'}
//               addtocart={addproduct}
//             />
//           </div>
//           <div className='col-4'>
//             <Shop
//               id={'3'}
//               name={'Apple'}
//               price={'300'}
//               image={'https://th.bing.com/th/id/R.9c4d8dc9fb6e499ae567a455c6d9abcc?rik=xJzuU5VsKl%2bN8w&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2ftransparent-apple%2ftransparent-apple-21.png&ehk=0LDP56MKEPdTs%2bGgu%2fBTfq2yqFWK9CympqcCzj7GOs4%3d&risl=&pid=ImgRaw&r=0'}
//               addtocart={addproduct}
//             />
//           </div>
//         </div>
//       </div>
//       <Local
//         sendcart={cart}
//         removedata={productdelete}
//         productinfo={productinfo}
//         handleIncreaseQuantity={handleIncreaseQuantity}
//         handleDecreaseQuantity={handleDecreaseQuantity}
//       />
//     </>
//   );
// }



// import React, { useState, useEffect } from 'react';
// import Shop from './Shop';
// import Local from './Local';

// export default function Main() {
//   const [productinfo, setproductinfo] = useState([]);
//   const [error, seterror] = useState("");
//   const [cart, setcart] = useState(0);

//   useEffect(() => {
//     const localData = localStorage.getItem("product");
//     if (localData) {
//       const parsedData = JSON.parse(localData);
//       const initializedData = parsedData.map(item => ({
//         ...item,
//         quantity: item.quantity || 1,
//         price: Number(item.price)
//       }));
//       setproductinfo(initializedData);
//       updateCartCount(initializedData);
//     }
//   }, []);

//   const updateCartCount = (data) => {
//     const totalQuantity = data.reduce((total, item) => total + item.quantity, 0);
//     setcart(totalQuantity);
//   };

//   const addproduct = (id, name, price, image) => {
//     const exist = productinfo.find((item) => item.id === id);
//     if (!exist) {
//       const newProduct = { id, name, price: Number(price), image, quantity: 1 };
//       const updatedProductInfo = [...productinfo, newProduct];
//       setproductinfo(updatedProductInfo);
//       updateCartCount(updatedProductInfo);
//       localStorage.setItem("product", JSON.stringify(updatedProductInfo));
//     } else {
//       seterror("Product already added");
//     }
//   };

//   const productdelete = (removeitemdata) => {
//     setproductinfo(removeitemdata);
//     updateCartCount(removeitemdata);
//     localStorage.setItem("product", JSON.stringify(removeitemdata));
//   };

//   const handleQuantityChange = (id, quantity) => {
//     const updatedData = productinfo.map((item) => {
//       if (item.id === id) {
//         return { ...item, quantity: Number(quantity) };
//       }
//       return item;
//     });
//     setproductinfo(updatedData);
//     updateCartCount(updatedData);
//     localStorage.setItem("product", JSON.stringify(updatedData));
//   };

//   return (
//     <>
//       <div className='container text-center bg-primary p-3 text-white'>
//         <div className='row'>
//           <div className='col'>
//             <h1>Simple Shopping Site</h1>
//             <p>{error}</p>
//           </div>
//           <div className='col'>
//             <img src={require('./img/cart.png')} width={50} height={50} alt="Cart" />
//             <sup style={{color:""}}>{cart}</sup>
//           </div>
//         </div>
//       </div>
//       <div className='container'>
//         <div className='row'>
//           <div className='col-4'>
//             <Shop
//               id={'1'}
//               name={'Grape'}
//               price={'200'}
//               image={'https://th.bing.com/th/id/R.20f15a142361a93d08913d127d75f2cb?rik=js3SCNcUR0oUEw&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-grapesgrapeberrygrapesfruitfood-1701527227951nuwdp.png&ehk=NqaMpP2Yo4sqd6ErqBMxDHP9CvEEW2WGg%2fwIjrDG2eA%3d&risl=1&pid=ImgRaw&r=0'}
//               addtocart={addproduct}
//             />
//           </div>
//           <div className='col-4'>
//             <Shop
//               id={'2'}
//               name={'Orange'}
//               price={'200'}
//               image={'https://th.bing.com/th/id/R.a8e83d5482e46bfdbd52476546d9cdd7?rik=9sM4jdpPK7mDWQ&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f05%2fOrange-Free-PNG-Image.png&ehk=0TgvoJ62gbSTDIxL63kfKEfbm%2fAQPRrbNT%2flPXwadn4%3d&risl=1&pid=ImgRaw&r=0'}
//               addtocart={addproduct}
//             />
//           </div>
//           <div className='col-4'>
//             <Shop
//               id={'3'}
//               name={'Apple'}
//               price={'300'}
//               image={'https://th.bing.com/th/id/R.9c4d8dc9fb6e499ae567a455c6d9abcc?rik=xJzuU5VsKl%2bN8w&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2ftransparent-apple%2ftransparent-apple-21.png&ehk=0LDP56MKEPdTs%2bGgu%2fBTfq2yqFWK9CympqcCzj7GOs4%3d&risl=&pid=ImgRaw&r=0'}
//               addtocart={addproduct}
//             />
//           </div>
//         </div>
//       </div>
//       <Local
//         sendcart={cart}
//         removedata={productdelete}
//         productinfo={productinfo}
//         handleQuantityChange={handleQuantityChange}
//       />
//     </>
//   );
// }
// import React, { useState, useEffect } from 'react';
// import Shop from './Shop';
// import Local from './Local';

// export default function Main() {
//   const [productinfo, setproductinfo] = useState([]);
//   const [error, seterror] = useState("");
//   const [cart, setcart] = useState(null); // Initialize cart as null

//   useEffect(() => {
//     const localData = localStorage.getItem("product");
//     if (localData) {
//       const parsedData = JSON.parse(localData);
//       const initializedData = parsedData.map(item => ({
//         ...item,
//         quantity: item.quantity || 1,
//         price: Number(item.price)
//       }));
//       setproductinfo(initializedData);
//       updateCartCount(initializedData);
//     }
//   }, []);

//   const updateCartCount = (data) => {
//     const totalQuantity = data.reduce((total, item) => total + item.quantity, 0);
//     setcart(totalQuantity > 0 ? totalQuantity : null); // Set cart to null if totalQuantity is 0
//   };

//   const addproduct = (id, name, price, image) => {
//     const exist = productinfo.find((item) => item.id === id);
//     if (!exist) {
//       const newProduct = { id, name, price: Number(price), image, quantity: 1 };
//       const updatedProductInfo = [...productinfo, newProduct];
//       setproductinfo(updatedProductInfo);
//       updateCartCount(updatedProductInfo);
//       localStorage.setItem("product", JSON.stringify(updatedProductInfo));
//     } else {
//       seterror("Product already added");
//     }
//   };

//   const productdelete = (removeitemdata) => {
//     setproductinfo(removeitemdata);
//     updateCartCount(removeitemdata);
//     localStorage.setItem("product", JSON.stringify(removeitemdata));
//   };

//   const handleQuantityChange = (id, quantity) => {
//     const updatedData = productinfo.map((item) => {
//       if (item.id === id) {
//         return { ...item, quantity: Number(quantity) };
//       }
//       return item;
//     });
//     setproductinfo(updatedData);
//     updateCartCount(updatedData);
//     localStorage.setItem("product", JSON.stringify(updatedData));
//   };

//   return (
//     <>
//       <div className='container text-center bg-primary p-3 text-white'>
//         <div className='row'>
//           <div className='col'>
//             <h1>Simple Shopping Site</h1>
//             <p>{error}</p>
//           </div>
//           <div className='col'>
//             <img src={require('./img/cart.png')} width={50} height={50} alt="Cart" />
//             {cart !== null && cart > 0 && ( // Check if cart is not null and greater than 0
//               <sup style={{ color: "" }}>{cart}</sup>
//             )}
//           </div>
//         </div>
//       </div>
//       <div className='container'>
//         <div className='row'>
//           <div className='col-4'>
//             <Shop
//               id={'1'}
//               name={'Grape'}
//               price={'200'}
//               image={'https://th.bing.com/th/id/R.20f15a142361a93d08913d127d75f2cb?rik=js3SCNcUR0oUEw&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-grapesgrapeberrygrapesfruitfood-1701527227951nuwdp.png&ehk=NqaMpP2Yo4sqd6ErqBMxDHP9CvEEW2WGg%2fwIjrDG2eA%3d&risl=1&pid=ImgRaw&r=0'}
//               addtocart={addproduct}
//             />
//           </div>
//           <div className='col-4'>
//             <Shop
//               id={'2'}
//               name={'Orange'}
//               price={'200'}
//               image={'https://th.bing.com/th/id/R.a8e83d5482e46bfdbd52476546d9cdd7?rik=9sM4jdpPK7mDWQ&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f05%2fOrange-Free-PNG-Image.png&ehk=0TgvoJ62gbSTDIxL63kfKEfbm%2fAQPRrbNT%2flPXwadn4%3d&risl=1&pid=ImgRaw&r=0'}
//               addtocart={addproduct}
//             />
//           </div>
//           <div className='col-4'>
//             <Shop
//               id={'3'}
//               name={'Apple'}
//               price={'300'}
//               image={'https://th.bing.com/th/id/R.9c4d8dc9fb6e499ae567a455c6d9abcc?rik=xJzuU5VsKl%2bN8w&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2ftransparent-apple%2ftransparent-apple-21.png&ehk=0LDP56MKEPdTs%2bGgu%2fBTfq2yqFWK9CympqcCzj7GOs4%3d&risl=&pid=ImgRaw&r=0'}
//               addtocart={addproduct}
//             />
//           </div>
//         </div>
//       </div>
//       <Local
//         sendcart={cart}
//         removedata={productdelete}
//         productinfo={productinfo}
//         handleQuantityChange={handleQuantityChange}
//       />
//     </>
//   );
// }


import React, { useState, useEffect } from 'react';
import Shop from './Shop';
import Local from './Local';

export default function Main() {
  const [productinfo, setproductinfo] = useState([]);
  const [error, seterror] = useState("");
  const [cart, setcart] = useState(null); // Initialize cart as null
  const [isLocalVisible, setIsLocalVisible] = useState(false); // New state to control visibility of <Local />

  useEffect(() => {
    const localData = localStorage.getItem("product");
    if (localData) {
      const parsedData = JSON.parse(localData);
      const initializedData = parsedData.map(item => ({
        ...item,
        quantity: item.quantity || 1,
        price: Number(item.price)
      }));
      setproductinfo(initializedData);
      updateCartCount(initializedData);
    }
  }, []);

  const updateCartCount = (data) => {
    const totalQuantity = data.reduce((total, item) => total + item.quantity, 0);
    setcart(totalQuantity > 0 ? totalQuantity : null); // Set cart to null if totalQuantity is 0
  };

  const addproduct = (id, name, price, image) => {
    const exist = productinfo.find((item) => item.id === id);
    if (!exist) {
      const newProduct = { id, name, price: Number(price), image, quantity: 1 };
      const updatedProductInfo = [...productinfo, newProduct];
      setproductinfo(updatedProductInfo);
      updateCartCount(updatedProductInfo);
      localStorage.setItem("product", JSON.stringify(updatedProductInfo));
    } else {
      seterror("Product already added");
    }
  };

  const productdelete = (removeitemdata) => {
    setproductinfo(removeitemdata);
    updateCartCount(removeitemdata);
    localStorage.setItem("product", JSON.stringify(removeitemdata));
  };

  const handleQuantityChange = (id, quantity) => {
    const updatedData = productinfo.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: Number(quantity) };
      }
      return item;
    });
    setproductinfo(updatedData);
    updateCartCount(updatedData);
    localStorage.setItem("product", JSON.stringify(updatedData));
  };

  const toggleLocalVisibility = () => {
    setIsLocalVisible(!isLocalVisible); // Toggle visibility of <Local />
  };

  return (
    <>
      <div className='container text-center bg-primary p-3 text-white'>
        <div className='row'>
          <div className='col'>
            <h1>Simple Shopping Site</h1>
            <p>{error}</p>
          </div>
          <div className='col'>
            <img
              src={require('./img/cart.png')}
              width={50}
              height={50}
              alt="Cart"
              onClick={toggleLocalVisibility} // Add onClick to toggle visibility
              style={{ cursor: "pointer" }} // Change cursor to pointer to indicate clickability
            />
            {cart !== null && cart > 0 && (
              <sup style={{ color: "" }}>{cart}</sup>
            )}
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <Shop
              id={'1'}
              name={'Grape'}
              price={'200'}
              image={'https://th.bing.com/th/id/R.20f15a142361a93d08913d127d75f2cb?rik=js3SCNcUR0oUEw&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-grapesgrapeberrygrapesfruitfood-1701527227951nuwdp.png&ehk=NqaMpP2Yo4sqd6ErqBMxDHP9CvEEW2WGg%2fwIjrDG2eA%3d&risl=1&pid=ImgRaw&r=0'}
              addtocart={addproduct}
            />
          </div>
          <div className='col-4'>
            <Shop
              id={'2'}
              name={'Orange'}
              price={'200'}
              image={'https://th.bing.com/th/id/R.a8e83d5482e46bfdbd52476546d9cdd7?rik=9sM4jdpPK7mDWQ&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f05%2fOrange-Free-PNG-Image.png&ehk=0TgvoJ62gbSTDIxL63kfKEfbm%2fAQPRrbNT%2flPXwadn4%3d&risl=1&pid=ImgRaw&r=0'}
              addtocart={addproduct}
            />
          </div>
          <div className='col-4'>
            <Shop
              id={'3'}
              name={'Apple'}
              price={'300'}
              image={'https://th.bing.com/th/id/R.9c4d8dc9fb6e499ae567a455c6d9abcc?rik=xJzuU5VsKl%2bN8w&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2ftransparent-apple%2ftransparent-apple-21.png&ehk=0LDP56MKEPdTs%2bGgu%2fBTfq2yqFWK9CympqcCzj7GOs4%3d&risl=&pid=ImgRaw&r=0'}
              addtocart={addproduct}
            />
          </div>
        </div>
      </div>
      {isLocalVisible && ( // Conditionally render <Local /> based on isLocalVisible
        <Local
          sendcart={cart}
          removedata={productdelete}
          productinfo={productinfo}
          handleQuantityChange={handleQuantityChange}
        />
      )}
    </>
  );
}
