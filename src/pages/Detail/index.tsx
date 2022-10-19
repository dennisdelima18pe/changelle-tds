import {useEffect,useState} from 'react'
import './style/index.scss';
import {BiLeftArrowAlt} from 'react-icons/bi'
import {CgArrowDown,CgArrowUp} from 'react-icons/cg'
import { weatherCurrent } from '../../Services'
import { useNavigate, useParams } from 'react-router-dom';
const Detail = ()=>{

  const [data,setData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const params = useParams()
  const navigate = useNavigate()

  const getData = async ()=>{

    setLoading(true)

    try{
      const response  = await weatherCurrent(String(params?.city))
      
      if(response.status === 200){
          setData(response.data)
      }
    }catch(error){
       navigate('/')
    }
    setLoading(false)
  }
  
    useEffect(() => {
      getData()
    },[])
  
  const DayWeatherForecastItem = ({tempHours})=>{
         
    const CardTime = ({data,title})=>{
        
      return (
        <div className='day-weather-forecast-item'>
         <div>{title}</div> 
         <img src={data?.condition?.icon} alt="" />
         <div>{data?.temp_c}°C</div>
        </div>
        )
      }

      const date = new Date(tempHours?.time)
      
      const hoursAndMinutes =  date.getHours()+":"+ String(date.getMinutes()).padStart(2, '0')
   
      switch(hoursAndMinutes){
       case '3:00':
         return (
              <>
                <CardTime data={tempHours} title="dawn" />
              </>
          )
       case '9:00':

         return (
            <>
              <CardTime data={tempHours} title="morning" />

            </>
        )
       case '15:00':

         return (
          <>
            <CardTime data={tempHours} title="afternoon" />
          </>
         )
       case '21:00':

        return (
           <>
             <CardTime data={tempHours} title="night" />
            </>
          )
      }
    
      return (
        <>
        </>
      )
    }

   const DayWeatherForecast  = ()=>{

      return(
        <div id="day-weather-forecast">
          {data?.forecast?.forecastday[0]?.hour.map((tempHours,index)=>(
          <div key={index}><DayWeatherForecastItem  tempHours={tempHours}/> </div> )
          )}
        </div>
       
      )
   }

   const CardTemp = ({title,value}:any)=>{
     
     return (
        <div className="card-temp">
          <div className="title-card-temp">{title}</div>
          {value}
        </div>
     )
   }

   const Content = ()=>{

     if(loading){
        return (
          <div id="loading">Carregando...</div>
        )
      }

    return (
      <main>
       <div id='title-location'>{data?.location?.name?.toUpperCase()}</div>
       <div id="condition-temp">{data?.current?.condition?.text?.toLowerCase()}</div>
       <div id="current-temp">
         {data?.current?.temp_c} 
         <div>
          °C
          <div id='area-temp-max-min'>
           <div>
            <CgArrowUp size={18} /> 
            {data?.forecast?.forecastday[0]?.day?.maxtemp_c}°
           </div> 
           <div>
            <CgArrowDown size={18} /> 
            {data?.forecast?.forecastday[0]?.day?.mintemp_c}°
           </div>
          </div>
         </div>   
       </div> 
       <img id="img-temp" src={data?.current?.condition?.icon} alt="" />
       <DayWeatherForecast />
       <div id="area-cards-temp">
         <CardTemp  title="wind speed" value={`${data?.current?.wind_kph} m/s`} />
         <CardTemp  title="humidity" value={`${data?.current?.humidity}%`} />
         <CardTemp  title="sunrise" value={data?.forecast?.forecastday[0]?.astro?.sunrise} />
         <CardTemp  title="sunsent" value={data?.forecast?.forecastday[0]?.astro?.sunset} />
       </div>
    </main>
    )
   }

    return (
      <div id='background-area-detail' data-testid="detail-temp">
       <a href="/" ><BiLeftArrowAlt size={28} style={{color:'white'}} /></a>
       <div id='area-detail'>
         <Content />
       </div>
      </div>
    )
}
export default Detail