import React from 'react'
import Title from '../../components/Title'
import useGetData from '../../hooks/useGetData'
import { useEffect, useState } from 'react'
import Loader from '../../components/Loader'
import Error from '../../components/Error'
import { formatDistanceToNow } from 'date-fns'
import {da} from "date-fns/locale"

const Nyheder = () => {

  const {error, loading, data, getData} = useGetData()

  const [search, setSearch] = useState("money")
  const [sort, setSort] = useState("popularity")
  const [country, setCountry] = useState("en")



useEffect(() => {

  callAPI()

}, [])

  //Søg / kald API

  const handleSubmit = (e) => {
    e.preventDefault() // Forhindre reload af siden 
    // Her sortere vi og leder efter land og derefter hvad vi søger efter og tager til sidst fat i api
    getData("https://newsapi.org/v2/everything?sortBy="+ sort +"&language="+ country +"&q=" + search + "&apiKey=" + process.env.REACT_APP_NEWSAPIKEY)

  }

  const callAPI = () => {
    // Her sortere vi og leder efter land og derefter hvad vi søger efter og tager til sidst fat i api
    getData("https://newsapi.org/v2/everything?sortBy="+ sort +"&language="+ country +"&q=" + search + "&apiKey=" + process.env.REACT_APP_NEWSAPIKEY)
  }


  return (
    <div className="news container">
        <Title headline = "News - search" />

        {loading && <Loader/>}
        {error && <Error/>}

        <div className="row mb-5">
          <form onSubmit={handleSubmit}>
            <div className="col-6">

            <input className='form-select' type="text" defaultValue={search} onInput={e => setSearch(e.target.value)}/>
            </div>


            <div className="col-6">

            <select className='form-select' defaultValue={sort} onChange={e => setSort(e.target.value)}>
              <option>popularity</option>
              <option>relevancy</option>
              <option>publishedAt</option>
            </select>
            </div>

            <div className="col-6">

            <input className='form-select' list="countryList" defaultValue={country} onChange={e => setCountry(e.target.value)}/>
            <datalist id='countryList'>
                <option value="ae" />
                <option value="ar" />
                <option value="at" />
                <option value="au" />
                <option value="be" />
                <option value="bg" />
                <option value="br" />
                <option value="ca" />
                <option value="ch" />
                <option value="cn" />
                <option value="co" />
                <option value="cu" />
                <option value="cz" />
                <option value="de" />
                <option value="eg" />
                <option value="fr" />
                <option value="gb" />
                <option value="gr" />
                <option value="hk" />
                <option value="hu" />
                <option value="id" />
                <option value="ie" />
                <option value="il" />
                <option value="in" />
                <option value="it" />
                <option value="jp" />
                <option value="kr" />
                <option value="lt" />
                <option value="lv" />
                <option value="ma" />
                <option value="mx" />
                <option value="my" />
                <option value="ng" />
                <option value="nl" />
                <option value="no" />
                <option value="nz" />
                <option value="ph" />
                <option value="en" />
                <option value="pl" />
                <option value="pt" />
                <option value="ro" />
                <option value="rs" />
                <option value="ru" />
                <option value="sa" />
                <option value="se" />
                <option value="sg" />
                <option value="si" />
                <option value="sk" />
                <option value="th" />
                <option value="tr" />
                <option value="tw" />
                <option value="ua" />
                <option value="us" />
                <option value="ve" />
                <option value="za" />
            </datalist>
            <button>Søg</button>
            </div>
          </form>
        </div>




        <div className = "col">

            {
              data ? 
              (data.articles.length ? <p>antal match: {data.totalResults}</p> : <p>Desværre ingen match</p>) : null
            }
          <div className='row row-cols-1 row-cols-md-3 g-2'>
          
            {
              data && data.articles.map((art, i) => 
              <div className="col g-4"  key={"news" + i}>
                <div className='card h-100'>
                      <img src={art.urlToImage} alt={art.title} width="150" className='card-img-top' />
                    <div className="card-body">
                        <div className="title">
                            <h4 key={i}>{art.title}</h4>
                        </div>
                        <div className="card-text">
                            <p>{art.description}</p>
                            <p>{new Date(art.publishedAt).toLocaleString("da-dk", {year: "2-digit", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit"})}</p>
                            <p>{formatDistanceToNow(new Date(art.publishedAt), {locale: da, addSuffix: true})}</p>
                            <p><a href={art.url} target="_blank">Læs mere</a></p>
                            <p>Author: {art.author}</p>
                        </div>
                    </div>
                </div>
              </div>
              )
            }
          </div>

        </div>
        

    </div>
  )
}

export default Nyheder