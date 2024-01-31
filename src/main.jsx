import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './Pages/About/About'
import Skill from './Pages/Skills/Skill'
import Project from './Pages/Projects/Project'
import Home from './Pages/Home/Home'
import Github from './Pages/Github/Github'
import Contact from './Pages/Contact/Contact'
import Layout from './Layout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<Layout/>}>
      <Route path = '' element = {<Home/>}/>
      <Route path = 'about' element = {<About/>}/>
      <Route path = 'skill' element = {<Skill/>}/>
      <Route path = 'project' element = {<Project/>}/>
      <Route path = 'github' element = {<Github/>}/>
      <Route path = 'contact' element = {<Contact/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
