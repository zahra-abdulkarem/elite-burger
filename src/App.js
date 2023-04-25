import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"
import {Header , Home, Menu, About, Reviews, Contact, Footer, Container} from './components/index-export-file.js'
const App = () => {
    return(
        <>
        <Router>
        <Header/>
        <Container>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Menu-container" element={<Menu/>}/>
        <Route path="/About-container" element={<About/>}/>
        <Route path="/Reviews-container" element={<Reviews/>}/>
        <Route path="/Contact-container" element={<Contact/>}/>
    </Routes>
        </Container>
        <Footer/>
        </Router>
        </>
    )
}
export default App