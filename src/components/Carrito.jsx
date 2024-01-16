// haremos mapeo de los cart (productos en carrito)}
import useCarrito from "../hooks/useCarrito"
const Carrito = () => {
  const {cart,removeFromCart,toggleCarrito,carritoOpen,addTocart,clearCart,subOne} = useCarrito()
  return (
     carritoOpen ? (
      <aside className="bg-indigo-900 p-12 opacity-100 fixed w-96 h-full top-0 left-0 overflow-auto">
          <header className="flex justify-around relative top-0 items-center w-full">
           <svg  onClick={()=>toggleCarrito()}
          xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" className="bi bi-x-octagon hover:cursor-pointer fixed top-2 left-6" viewBox="0 0 16 16">
             <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1z"/>
           <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
          </svg>
          <button onClick={()=>clearCart()} className='bg-red-200 text-black p-3 w-full  mb-6 font-bold rounded-full '>Vaciar Carrito</button>


      </header>
      
          <h2 className="text-center w-full mt-2 font-bold text-2xl">Carrito de compras</h2>
    

         {cart && cart.map(item=>(
             <div key={item.id} className='w-full  flex flex-col items-center justify-between p-5 '>
             <h2 className='text-2xl font-bold text-blue-200'>{item.title}</h2>
             <img width={'100px'} src={item.images[0]} alt="" />
             <h4 className='text-xl'>Price: <span className='text-red-600 font-bold text-xl'>{item.price}$</span></h4> 
             <p>Cantidad: {item.cantidad}</p>
             <footer className="w-full flex justify-around m-2">
             <svg  onClick={()=>subOne(item)}  xmlns="http://www.w3.org/2000/svg"   height="24" fill="red" className="bi bi-dash-lg hover:cursor-pointer" viewBox="0 0 16 16">
                   <path  d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"/>
             </svg>
             <svg  onClick={()=>addTocart(item)}  xmlns="http://www.w3.org/2400/svg"   height="20" fill="green" className="bi bi-plus-lg hover:cursor-pointer" viewBox="0 0 16 16">
                 <path  d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
             </svg>
                
             </footer>
             <button onClick={()=>removeFromCart(item)} className='bg-red-500 p-3 font-bold rounded-full mt-2'>Eliminar Item</button>
    
           </div>
         ))}
         {cart.length>0 && <footer className="bg-indigo-600 text-blue-300 p-3 rounded w-full text-center font-bold text-2xl">Total Items: {cart.length}</footer>}
     </aside>

     ) : (null)
   
   )
}

export default Carrito