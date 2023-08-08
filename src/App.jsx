import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Works from "./components/Works"
import Navbar from "./components/Navbar"
import WorkContent from "./components/WorkContent"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/works" element={<Works  />}>
            <Route path="/works/:id" element={<WorkContent/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
