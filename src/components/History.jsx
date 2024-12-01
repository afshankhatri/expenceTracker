import React from 'react'
import { GlobalContext } from '../context/expenceTrack'
import { useContext } from 'react'

function History() {
    const {transaction} = useContext(GlobalContext)  // we have used destructuring.... we can remove values directly with the help of this
    // console.log(transaction.map(txn=>typeof(txn.amount)));
    
    const {delete_Transaction} =useContext(GlobalContext)

  return (
    <div className='h-fit w-[100%] flex flex-col justify-center'>
        <b className='text-[25px] mb-2'>Record:</b>
        <div className="border-b border-gray-600"></div>
        <div className='h-fit w-[100%]  flex flex-col justify-evenly items-center gap-3 p-3 '>
            
            {transaction.map(txn=>(
                <div key={txn.id} className={`relative h-[60px] w-[100%] ${txn.amount > 0 ? 'bg-green-200' : 'bg-red-200'} flex justify-between items-center pl-2 group`}>
                    <button onClick={()=>delete_Transaction(txn.id)}
                      className="absolute -left-9 top-1/2 -translate-y-1/2 h-[30px] w-[30px] bg-red-600 text-white rounded-full flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      ×
                    </button>
                    <div className="h-[60px] w-[50%] flex items-center">
                      <h1 className="text-[20px]">{txn.text}</h1>
                    </div>
                    <div className="h-[60px] w-[50%] flex justify-end items-center gap-2">
                      <h1 className="text-[20px]">{txn.amount > 0 ? `+${txn.amount}` : txn.amount}</h1>
                      <div className={`h-[100%] w-2 ${txn.amount > 0 ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    </div>
                </div>                
            ))}
        </div>
    </div>
  )
}

export default History


            // <div className='h-[60px] w-[100%] bg-orange-500 flex justify-between items-center pl-2'>
            //     <div className='h-[60px] w-[50%] flex items-center'>
            //         <h1 className='text-[20px]'>Cash{/*Transaction type */}</h1> 
            //     </div>
            //     <div className='h-[60px] w-[50%] flex justify-end items-center gap-2'>
            //         <h1 className='text-[20px]'>+$10.4</h1>
            //         <div className='h-[100%] w-2 bg-green-500'></div>
            //     </div>
            // </div>
            // <div className='h-[60px] w-[100%] bg-orange-500 flex justify-between items-center pl-2'>
            //     <div className='h-[60px] w-[50%] flex items-center'>
            //         <h1 className='text-[20px]'>Online{/*Transaction type */}</h1> 
            //     </div>
            //     <div className='h-[60px] w-[50%] flex justify-end items-center gap-2'>
            //         <h1 className='text-[20px]'>-$2.4</h1>
            //         <div className='h-[100%] w-2 bg-red-500'></div>
            //     </div>
            // </div>



            // import React from 'react';
            // import { GlobalContext } from '../context/expenceTrack';
            // import { useContext } from 'react';
            
            // function History() {
            //   const { transaction } = useContext(GlobalContext);
            
            //   return (
            //     <div className="h-fit w-[100%] flex flex-col justify-center">
            //       <b className="text-[25px] mb-2">Record:</b>
            //       <div className="border-b border-gray-600"></div>
            //       <div className="h-fit w-[100%] flex flex-col justify-evenly items-center gap-3 p-3">
            //         {transaction.map((txn) => (
            //         <div key={txn.id} className="relative h-[60px] w-[100%] bg-orange-500 flex justify-between items-center pl-2 group">
            //             {/* Button appears on hover */}
            //             <button
            //               className="absolute left-2 top-1/2 -translate-y-1/2 h-[30px] w-[30px] bg-red-600 text-white rounded-full flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            //               onClick={() => console.log(`Delete transaction ${txn.id}`)} // Replace with your delete logic
            //             >
            //               ×
            //             </button>
            
            //             <div className="h-[60px] w-[50%] flex items-center">
            //               <h1 className="text-[20px]">{txn.text}</h1>
            //             </div>
            //             <div className="h-[60px] w-[50%] flex justify-end items-center gap-2">
            //               <h1 className="text-[20px]">{txn.amount > 0 ? `+${txn.amount}` : txn.amount}</h1>
            //               <div className={`h-[100%] w-2 ${txn.amount > 0 ? 'bg-green-500' : 'bg-red-500'}`}></div>
            //             </div>
            //         </div>
            //         ))}
            //       </div>
            //     </div>
            //   );
            // }
            
            // export default History;
            