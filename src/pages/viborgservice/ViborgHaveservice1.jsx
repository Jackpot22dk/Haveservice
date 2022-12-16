import React from 'react'
import { useEffect } from 'react'
import useGetData from '../../hooks/useGetData'
import Loader from '../../components/Loader'
import Error from '../../components/Error'
import "../../scss/Haveservice.scss"


const ViborgHaveservice1 = () => {

  const {error, loading, data, getData} = useGetData()


  useEffect(() => {
    getData("http://localhost:5023/services",
    {"Content-Type": "application/json"})
  }, [])


  return (
    <div>
      <div className="haveservicebackground">
        
      {(error) && <Error/>}
      {(loading) && <Loader/>}     
      <h1 className="text-center text-light ">Vores ydeleser</h1>
      <div className="box">
         <div className="whitebar"></div>
      </div>
         <div className="servicetext text-center ">
            <p>Herunder er en oversigt over alle vores services. <br /> Hvis du måtte have flere spørgsmål, er du velkommen til at kontakte os</p>
         </div>
         <div className="images">
        {
          data && data.map((d, index) =>
          <div className="icons" key={d + index}>           
              <img className='rounded-circle' src={" http://localhost:5023/images/" + data[index].image} alt="" />  
            <div className="servicesubtext">
              <h2>{d.title}</h2>
              <p>{d.content}</p>
            </div>

          </div>
              
          )
        }      
        </div>
     </div>
    </div>
  )
}

export default ViborgHaveservice1