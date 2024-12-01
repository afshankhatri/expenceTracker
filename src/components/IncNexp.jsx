import React from 'react'
import { GlobalContext } from '../context/expenceTrack'
import { useContext } from 'react'


function IncNexp() {
    const {transaction} = useContext(GlobalContext)
    const amount = transaction.map(txnPos=> txnPos.amount)
    const sum = amount.reduce((acc,curVal)=>acc+=curVal,0).toFixed(2)

    const income = amount.filter(i=>i>0).reduce((acc,curVal)=>acc+=curVal,0).toFixed(2)
    // console.log(income);
    const expence = (amount.filter(i=>i<0).reduce((acc,curVal)=>acc+=curVal,0)*-1).toFixed(2)  //ye -1 se multiply is liye kiye hai ta k value -(ve) display na ho
    // console.log(expence);
    
        
    

  return (
    <div className='h-fit w-70% flex flex-col justify-center gap-3'>
        <div className='h-[102px] w-[100%] flex justify-center items-center'>
            <div className='w-[85%] h-[90%] flex justify-center border border-[1px]  border-gray-600 '>
                <div className='h-[100%] w-[50%] bg-blue-100 flex flex-col justify-center items-center shadow-l '>
                    <b>INCOME</b>
                    <h1 className='text-[30px] text-green-500'>${income}</h1>
                </div>
                <div className="border-r border-gray-600"></div>
                <div className='h-[100%] w-[50%] bg-blue-100 flex flex-col justify-center items-center'>
                    <b>EXPENCE</b>
                    <h1 className='text-[30px] text-red-500'>${expence}</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default IncNexp