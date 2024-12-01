import React from 'react'
import { GlobalContext } from '../context/expenceTrack'
import { useContext } from 'react'


function Balance() {
  const {transaction} = useContext(GlobalContext) 
  const amount = transaction.map(txn=>txn.amount)
  // console.log(amount);
  const sum = amount.reduce((acc,curVal)=>acc+=curVal,0).toFixed(2)   //"toFixed is used to put 2 digit decimal after calculation "
  // console.log(sum);
  

  return (
    <div className='h-fit w-70% flex flex-col justify-center'>
        <div className='flex flex-col justify-center '>
            <h1 className='text-[25px]'>Your Balance:</h1>
            <b className='text-[40px]'>${sum}</b>
        </div>   
    </div>
  )
}

export default Balance