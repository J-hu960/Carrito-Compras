import { useState,createContext,useReducer } from "react"
const CarritoContext = createContext()
// eslint-disable-next-line react/prop-types
const OPTIONS={
  ADD_TO_CART:'ADD_TO_CART',
  REMOVE_FROM_CART:'REMOVE_FROM_CART',
  CLEAR_CART:'CLEAR_CART',
  SUB_ONE:'SUB_ONE'
}
const initial_state = []
function reducer(state,action){
  switch(action.type){
    case OPTIONS.ADD_TO_CART:{
      const {product} = action.payload
      {
       if (state.some(fav => fav.id === product.id)) {
           const newList = state.map(fav => {
             if (fav.id === product.id) {
               return { ...fav, cantidad: (fav.cantidad || 0) + 1 };
             } else {
               return fav;
             }
           })
         return newList
       } else {
         return[
           ...state,
           {
            ...product,
             cantidad:1
           }
         ]
       }
     }

    }
    case OPTIONS.REMOVE_FROM_CART:{
      const {product} = action.payload
      return state.filter(item=>item.id!==product.id)

    }
    case OPTIONS.CLEAR_CART: return initial_state

    case OPTIONS.SUB_ONE:{
      const {product} = action.payload
      const newList = state.map(item=>{
        if(item.id === product.id){
          return {
            ...item,
            cantidad : product.cantidad -1
          }
        }
        else{return {...item}}
      })
      return newList
    }
  }
   
}

// eslint-disable-next-line react/prop-types
const CarritoProvider = ({children}) => {

  const [state,dispatch]=useReducer(reducer,initial_state)
  const [carritoOpen,setCarritoOpen] = useState(false)

    

    const addTocart = product =>dispatch({
      type:'ADD_TO_CART',
      payload:{product:product}
    })

    const removeFromCart = product=>dispatch({
      type:'REMOVE_FROM_CART',
      payload:{product:product}
    })
    const clearCart = ()=>dispatch({type:'CLEAR_CART'})
    

    const toggleCarrito =()=>{
      setCarritoOpen(!carritoOpen)
    }

    const subOne=(product)=>{
      if (product.cantidad>1){
        dispatch({type:OPTIONS.SUB_ONE,payload:{product:product}})
      }else{
        alert(`Desea eliminar " ${product.title} " del carrito`)
        if(alert){
          removeFromCart(product)
        }
      }

    }




  
  return (
    <CarritoContext.Provider value={{
        cart:state,
        addTocart,
        removeFromCart,
        clearCart,
        toggleCarrito,
        carritoOpen,
        subOne
        

    }}>
        {children}

    </CarritoContext.Provider>
  )
}
export{
    CarritoProvider
}
export default CarritoContext
