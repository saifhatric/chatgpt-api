import React from "react"
import { Route, Routes } from "react-router-dom"
import ContactPage from "./components/ContactPage"
import ErrorPage from "./components/ErrorPage"
import Home from "./components/Home"
import Layout from "./components/Layout"
import Navbar from "./components/Navbar"
function App() {

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/api">
            <Route path="aboutus" element />
            <Route path="contact" element={<ContactPage />} />
            <Route path="servises" element />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>


      </Routes>
    </div>
  )
}

export default App
