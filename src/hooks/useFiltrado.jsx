import {useContext} from 'react'
import FiltradoContext from '../context/FiltradoProvider'
const useFiltrado = () => {
  return useContext(FiltradoContext)
}

export default useFiltrado