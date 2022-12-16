import React from 'react'
import useGetData from "../../hooks/useGetData"
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import parse from "html-react-parser"
import "../../scss/Haveservice.scss"


const Home = () => {


  const navigate = useNavigate()

  
  const {error, loading, data, getData} = useGetData()
  const {error: errorGet, loading: loadingGet, data: dataGet, getData: getDataGet} = useGetData()
  
  useEffect(() => {
    getData("http://localhost:5023/aboutus",
    {"Content-Type": "application/json"})
  }, [])
  useEffect(() => {
    getDataGet("http://localhost:5023/services",
    {"Content-Type": "application/json"})
  }, [])
  
  return (
    <div>
      <div className="haveservice-grid">
        {data && 
        <h1 className='big'>{parse(data.title)}</h1>
        }
        {
          data && 
          <div className="aboutus">
            <div className='aboutus-text'>{parse(data.content)}</div>

            <button onClick={() => navigate("/ViborgHaveservice1")} className='bggreen'>SE ALLE YDELSER</button>
          </div>
        }
        <div className="artcontainer">
        {
          dataGet && dataGet.slice(0,2).map((d,index) =>

          <div className={"art" + index} key={index}>
                  <img src={" http://localhost:5023/images/" + dataGet[index].image} alt="" />
                <div className="text">
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

export default Home