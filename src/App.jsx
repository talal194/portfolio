
    import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
    import Nav from "./sections/nav";
    import Home from "./pages/Home.jsx";
    import About from './pages/About.jsx';





function App(){

return(
    <>
    <Router>
     <header>
        <Nav/>
     </header>
     
        <main>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            </Routes>            
        </main>
        </Router>
    </>
)


}

export default App;