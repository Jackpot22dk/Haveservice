import React from 'react'
import Title from '../../components/Title'
import useGetData from '../../hooks/useGetData'
import { useEffect, useState } from 'react'
import Loader from '../../components/Loader'
import Error from '../../components/Error'
import './weatherstyle.scss';
import {initMap, changeMapView, removeMap} from "../../helpers/leaflet"


const Vejret = () => {
    // Request-hook Openweather
    const {error, loading, data, getData} = useGetData()
    // Request-hook DAWA
    const {error: errorDAWA, loading: loadingDAWA, data: dataDAWA, getData: getDataDAWA} = useGetData()

    // State til Postkoder
    const [zip, setZip] = useState("8300")


    useEffect( () => {      
          if(zip.length === 4 && !isNaN(zip)) {

              getData("http://api.openweathermap.org/data/2.5/forecast?&units=metric&lang=da&zip=" + zip +",dk&appid=" + process.env.REACT_APP_WEATHERAPIKEY)
          } else {
            getDataDAWA("https://api.dataforsyningen.dk/postnumre/autocomplete?q=" + zip)
          }
    }, [zip])


    useEffect(() => {
      
        initMap([56,10])
      return () => {
        removeMap()
      }
    }, [])

    useEffect(() => {
      if(data) changeMapView([data.city.coord.lat, data.city.coord.lon], data.city.name)
    }, [data]) // lytter efter data fra openweather



  return (
    <div>
        <div className="vejr container">
        <Title headline="Vejret idag"/>
         {loading && <Loader/>}
         {error && <Error/>}
            <div className="row">
                <div className="col-12">
                    <input type="text" list='adresseforslag' placeholder='indtast by navn' className='form-control' defaultValue={zip} autoComplete="off" onInput={(e) => setZip(e.target.value.substring(0,4))}/>
                </div>
                <datalist id='adresseforslag'>
                {
                    dataDAWA && dataDAWA.map(adress => <option value={adress.tekst} key={adress.postnummer.nr}/>)
                }
                </datalist>

            </div>
        </div>



        {
            data &&
            <div className="">
                <h2 className='text-center mt-5'> vejret i {data.city.name}</h2>
                <div className="card">
                    <div className="card-body text-center greynation">
                        <p className='display-4'>{data.list[0].main.feels_like}&#8451;</p>
                        <p>luftfugtighed: {Math.round(data.list[0].main.humidity)}%</p>
                        <p>Luftryk: {Math.round(data.list[0].main.pressure)} hPa</p>
                        <p>Dagens udsigt: {data.list[0].weather[0].description}</p>
                        <img src={"http://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + "@4x.png"} alt="" />
                        
                    </div>
                </div>
            </div>
        }
        <div className="center">

<div id="mapcontainer" style={{height: "400px", width: "500px", backgroundColor: "black"}}>
                            
</div>
        </div>
        





    </div>
  )
}

export default Vejret