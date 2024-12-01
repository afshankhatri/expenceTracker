import { useState } from 'react'
import './index.css'
import HeaderComp from './components/HeaderComp'
import Balance from './components/Balance'
import IncNexp from './components/IncNexp'
import History from './components/History'
import AddNewTransaction from './components/AddNewTransaction'
import GlobalProvider from './context/expenceTrack';

function App() {

  return (
    <GlobalProvider>
      <div className='h-full w-full  flex flex-col justify-center items-center '>
        <div className='h-fit w-[500px]  flex flex-col justify-center  gap-5'>
          <HeaderComp/>
          <Balance/>
          <IncNexp/>
          <History/>
          <AddNewTransaction/>
        </div>
      </div>
    </GlobalProvider>
  )
}

export default App
