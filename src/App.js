import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import './App.css'
import Blog from "./components/Blog/Blog";

import Header from "./components/Header"
import Footer from "./components/Footer"

import ScrollToTop from './components/ScrollToTop'

import Inicio from "./pages/Inicio"
import Studies from "./pages/Studies"
import Uxcases from "./pages/Uxcases"
import Mindset from "./pages/Mindset"
import Portfolio from "./pages/Portfolio"
import Article from "./pages/Article"


import CaseA from "./pages/cases/CaseA"
import CaseB from "./pages/cases/CaseB"
import CaseC from "./pages/cases/CaseC"
import CaseD from "./pages/cases/CaseD"
import CaseE from "./pages/cases/CaseE"
import CaseF from "./pages/cases/CaseF"


import SingleBlog from "./components/SingleBlog/SingleBlog";



function App() {
  return (

    <div>
      <Router>
      <ScrollToTop/>
        <Header/>
          <Routes>
            <Route exact path='/' element={<Inicio/>}/>
            <Route exact path='/studies' element={<Studies/>}/>
            <Route exact path='/uxcases' element={<Uxcases/>}/>
            <Route exact path='/mindset' element={<Mindset/>}/>
            <Route exact path='/portfolio' element={<Portfolio/>}/>

            <Route exact path='/allergies' element={<CaseA/>}/>
            <Route exact path='/visualizer' element={<CaseB/>}/>
            <Route exact path='/event' element={<CaseC/>}/>
            <Route exact path='/cyclists' element={<CaseD/>}/>
            <Route exact path='/recruitment' element={<CaseE/>}/>
            <Route exact path='/delivery' element={<CaseF/>}/>

            <Route exact path='/article' element={<Article/>}/>
            <Route exact path="/article/:id" element={SingleBlog}/>

          </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
