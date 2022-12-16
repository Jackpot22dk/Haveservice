import React from 'react'
import useGetData from '../../hooks/useGetData'
import { useEffect } from 'react'
import Loader from '../../components/Loader'
import Error from '../../components/Error'
import Title from '../../components/Title'
import { useState } from 'react'

const Love = () => {
    const {error, loading, data, getData} = useGetData()


    const [mand, setMand] = useState("bob")
    const [kvinde, setKvinde] = useState("jessica")


    const handleClick = () => {
        getData("https://flames-love-calculator.p.rapidapi.com/flame/" + mand + "/" + kvinde, {
          'X-RapidAPI-Key': process.env.REACT_APP_LOVE,
          'X-RapidAPI-Host': 'flames-love-calculator.p.rapidapi.com'})
    }


  return (
    <div>
        <Title headline="Se om dig og dit Crush har en chance"/>

        {loading && <Loader/>}
        {error && <Error/>}

        <button onClick={handleClick} className='btn btn-success mt-5'>Glad eller trist? find ud af det</button>
        <input className='form-select' type="text" defaultValue={mand} onInput={e => setMand(e.target.value)}/>
        <input className='form-select' type="text" defaultValue={kvinde} onInput={e => setKvinde(e.target.value)}/>


        {
          data && <h3 className='text-center pt-5'>{data.fname} og {data.sname} er dømt til at være : {data.result}</h3>
        }


    </div>
  )
}

export default Love