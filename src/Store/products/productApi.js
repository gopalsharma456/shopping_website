import axios from "axios";
import { API_ENDPOINTS } from "../../shared/constants"
  
const productData = async (pagination) => {
  try {
    const res = await axios.get(`${API_ENDPOINTS.productApi}?offset=0&limit=${pagination}`)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export {productData}