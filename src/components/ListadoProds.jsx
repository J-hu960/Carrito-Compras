import useFiltrado from '../hooks/useFiltrado'
import useCarrito from '../hooks/useCarrito'
const ListadoProds = () => {
  const {productos } = useFiltrado()
  const {addTocart} = useCarrito()
  
  
   
  return (
    <main className='grid grid-cols-1 sm:grid-cols-2 mt-24 '>
    {productos.map(producto=>(
      <div key={producto.id} className='w-full h-72 flex  flex-col items-center justify-around  p-3 gap-y-2  '>
        <h2 className='text-2xl font-bold text-blue-200'>{producto.title}</h2>
        <img width={'100px'} src={producto.images[0]} alt="" />
        <h4 className='text-xl'>Price <span className='text-indigo-300 font-bold text-xl'>{producto.price}$</span></h4>
        <button onClick={()=>addTocart(producto)} className='bg-indigo-500 p-3 font-bold rounded-full mt-2'>Añadir Carrito</button>

      </div>
      
    )
)}

  </main>
  )
}

export default ListadoProds