import React from 'react'
import Header from '../header/Header'
import { Home } from './home'

export const Pages = () => {
  return (<>
  <Header/>
  <div className='py-7'>
  <Home/>
  </div>
  </>)
}
