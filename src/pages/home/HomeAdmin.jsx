import React from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import useGetData from '../../hooks/useGetData'
import usePutData from '../../hooks/usePutData'
import Loader from '../../components/Loader'
import Error from '../../components/Error'

const HomeAdminEdit = () => {


  const {_id} = useParams() // id på det der skal rettes - fra url

  const {error, loading, data, getData} = useGetData()
  const {error: errorPut, loading: loadingPut, data: dataPut, putData} = usePutData()


  useEffect(() => {
      
    getData("http://localhost:5023/aboutus")

}, [])

const handleSubmit = (e) => {
  e.preventDefault() // Forhindre reload af siden


  putData("http://localhost:5023/aboutus/admin/",
  {"Content-Type": "application/x-www-form-urlencoded"})

}



  return (
    <div>


    <h1 className='display-2 my-4 text-cetner'>ADMIN indkøbsliste fra LOCALHOST</h1>

    {(error || errorPut) && <Error/>}
    {(loading || loadingPut) && <Loader/>}

    {data && <h2>Forside {data.name} Er nu rettet</h2>}

    <div className="row">
        <div className="col">
            {
                data &&
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 mt-3">
                        <label htmlFor="inpVare" className='form-label'>Overskrift Ændring:</label>
                        <input defaultValue={data.title} type="text" name='name' className="form-control" id='inpVare'/>
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="inpVare" className='form-label'>Beskrivelse ændring:</label>
                        <input defaultValue={data.content} type="text" name='name' className="form-control" id='inpVare'/>
                    </div>
                    <button type='submit' className='btn btn-primary'> ret vare </button>
                </form>
            }
        </div>
    </div>


    </div>
  )
}

export default HomeAdminEdit