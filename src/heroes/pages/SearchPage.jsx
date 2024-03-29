import { useLocation, useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components"
import queryString from 'query-string'
import { getHeroByName } from "../helpers"

export const SearchPage = () => {


  const navigate = useNavigate()
  const location = useLocation()
  const {q = ''} = queryString.parse(location.search)

  const {searchText,onInputChange} = useForm({
    searchText:q
  })

  const onSearchSubmit = (event) =>{
      event.preventDefault()

      // if (searchText.trim().length <= 1 ) {
      //   return
      // }
      navigate(`?q=${searchText}`)
      // console.log({searchText});
  }

  const heroes = getHeroByName(q)
  const showSearch = (q.length ===0) 
  const showError = (q.length > 0) && heroes.length === 0


  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">

        <form onSubmit={onSearchSubmit}>
          <input 
          type="text" 
          name="searchText"
          className="form-control" 
          placeholder="Busqueda..." 
          autoComplete="off"
          value={searchText}
          onChange={onInputChange}
          />
          <button className="btn btn-outline-primary mt-1">
            Search
          </button>
        </form>

        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {/* {
            (q === '')
            ?<div className="alert alert-primary"> Buscar..</div>: (heroes.length === 0) &&
            <div className="alert alert-danger"> Sin resultados: <b>{q}</b> </div>
          } */}
          <div className="alert alert-primary animate__animated animate__fadeIn" 
          style={{ display : showSearch ? '':'none'}}> Busqueda  </div>

          <div className="alert alert-danger animate__animated animate__fadeIn" 
          style={{display :showError ? '':'none'}}> Sin resultados: <b>{q}</b> </div>
          {
            heroes.map(hero =>(
               <HeroCard
               key={hero.id} 
               {...hero}/> 
            ))
          }

          
        </div>
      </div>
      
    </>
  )
}

