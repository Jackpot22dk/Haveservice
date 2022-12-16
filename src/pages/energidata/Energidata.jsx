import React from 'react'
import useGetData from '../../hooks/useGetData'
import { useEffect } from 'react'
import Chart from 'chart.js/auto';








const Energidata = () => {
  
  
  
  const {error, loading, data, getData} = useGetData()
  
  useEffect(() => {
    
    getData("https://api.energidataservice.dk/dataset/Elspotprices?offset=0&start=2022-12-15T00:00&end=2022-12-31T00:00&filter=%7B%22PriceArea%22:[%22dk1%22,%22dk2%22]%7D&sort=HourUTC%20DESC&timezone=dk")
    
  }, [])
  
  const callAPI = () => {
    // Her sortere vi og leder efter land og derefter hvad vi søger efter og tager til sidst fat i api
    getData("https://api.energidataservice.dk/dataset/Elspotprices?offset=0&start=2022-12-15T00:00&end=2022-12-31T00:00&filter=%7B%22PriceArea%22:[%22dk1%22,%22dk2%22]%7D&sort=HourUTC%20DESC&timezone=dk")
  }

  useEffect(() => {

    callAPI()
    
    const ctx = document.getElementById('myChart');
    
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: callAPI?.records?.map(d => d),
        datasets: [{
          label: callAPI?.records?.map(d => d),
          data: data,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  
  }, [])




  


  return (
    <div>
      <canvas id='myChart' width={100} height={100}></canvas>
    </div>
  )
}

export default Energidata