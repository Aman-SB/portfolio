import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import { ScrollProgress } from './components/ScrollProgress'

export default function Layout() {
  return (
    <>
     <Header/>
     <ScrollProgress/>
     <Outlet/>
     <Footer/> 
    </>
  )
}
