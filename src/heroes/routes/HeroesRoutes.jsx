import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { MarvelPages,DcPages, SearchPage, HeroPages } from "../pages"


export const HeroesRoutes = () => {
  return (
    <>
     <Navbar/>
     <div className="container">
        <Routes>
            <Route path='marvel' element={<MarvelPages/>}/>
            <Route path='dc' element={<DcPages/>}/>  
            <Route path='search' element={<SearchPage/>}/>
            <Route path='hero/:id' element={<HeroPages/>}/>    


            <Route path='/' element={<Navigate to='/marvel'/>}/>       
        </Routes> 
     </div>
    </>
  )
}


