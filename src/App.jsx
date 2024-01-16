import Formulario from "./components/Formulario"
import ListadoProds from "./components/ListadoProds"
import Carrito from "./components/Carrito"
import useCarrito from "./hooks/useCarrito"
function App() {
  const {toggleCarrito,carritoOpen} = useCarrito()

  return (
    <>
    <header className="flex items-center">
        <Formulario />
        {!carritoOpen && 
         <button onClick={()=>toggleCarrito()}
         className="fixed top-2 left-2 bg-green-600 rounded-full p-3 font-bold text-lg">Ver carrito</button>}

    </header>
    <main className="w-screen h-screen flex justify-center">
    <ListadoProds></ListadoProds>
    <Carrito/>
   

    </main>
   
   
    </>
   
      
  )
}

export default App
