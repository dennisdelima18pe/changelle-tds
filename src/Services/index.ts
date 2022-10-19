import axios from 'axios'
import {api} from './api'
export const weatherCurrent = async (cityName:string)=>{

    const response  = await axios.get(`${api}/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${cityName}&aqi=yes`)

    return response 
}
  