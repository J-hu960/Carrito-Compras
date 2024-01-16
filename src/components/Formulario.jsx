import useFiltrado from "../hooks/useFiltrado"

const Formulario = () => {
    const {minPrice,setMinPrice,categoria,setCategoria} = useFiltrado()
  return (
    <form className='mt-6 flex gap-x-12 sticky left-5 top-4 ' action="">
      <div className='flex flex-col gap-y-1'>
        <label htmlFor="">Precio Mínimo: {minPrice}</label>
        <input 
        value={minPrice}
        onChange={e=>setMinPrice(e.target.value)}
      
      min={0} max={2000} step={25} type="range" />

      </div>
      <div className='flex flex-col gap-y-1'>
        <label htmlFor="">Categoria</label>
        <select 
          value={categoria}
          onChange={e=>setCategoria(e.target.value)}
        
        className='w-32 rounded-lg border-2 text-black border-gray-400' name="" id="">
          <option value="">--Seleccione--</option>
          <option value="home-decoration">Casa</option>
          <option value="smartphones">Teléfonos</option>
          <option value="laptops">Computadoras</option>
        </select>

      </div>
    

    </form>
  )
}

export default Formulario