import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/expenceTrack'
import { useState } from 'react'

function AddNewTransaction() {

  const [text,setText] = useState("")
  const [amount,setamount] = useState(0)
  const { add_Transaction }=useContext(GlobalContext)

  const onSubmit = (e) =>{
    e.preventDefault()

    const newTransaction={
      id:Math.floor(Math.random()*100000000),
      text,
      amount :+amount
    }

    add_Transaction(newTransaction)
  }

  return (
    <div className='h-fit w-[100%] flex flex-col justify-center'>
        <b className='text-[25px] mb-2'>Add New Transaction :</b>
        <div className="border-b border-gray-600"></div>
        <div className='h-fit w-[100%]  flex flex-col justify-evenly items-center gap-3 p-3 '>
          <form onSubmit={onSubmit}  >
            <div className='h-fit w-[100%]  p-2 flex flex-col justify-center gap-2'>
                <b>Text</b>
                <input type="text" className='h-[45px] w-100% bg-blue-100 p-2' placeholder='Enter here' value={text} onChange={e=>setText(e.target.value)}/>
                <b>Amount</b>
                <input type="number" className='h-[45px] w-100% bg-blue-100 p-2' placeholder='Enter here' value={amount} onChange={e=>setamount(e.target.value)} />
                <button className='h-[40px] w-100% bg-purple-200  border border-[1px]  border-gray-600'> 
                    <b> Add Transacion </b>    
                </button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default AddNewTransaction