import React from 'react'

const statistics = ({stat}) => {
  return (
    <div className='flex flex-col items-center justify-center bg-white text-white rounded-lg shadow-xl w-4/5 h-80 gap-3 self-center'>
      <h2 className='text-xl font-semibold bg-[#2277ff] w-2/5 rounded-lg text-left p-2 hover:p-3 ease-in-out transition-all hover:cursor-pointer'>Total Users: {stat.t_usr}</h2>
      <h2 className='text-xl font-semibold bg-[#2277ff] w-2/5 rounded-lg text-left p-2 hover:p-3 ease-in-out transition-all hover:cursor-pointer'>Active Users:{stat.active_usr}</h2>
      <h2 className='text-xl font-semibold bg-[#2277ff] w-2/5 rounded-lg text-left p-2 hover:p-3 ease-in-out transition-all hover:cursor-pointer'>New Users:{stat.new_usr}</h2>
      <h2 className='text-xl font-semibold bg-[#2277ff] w-2/5 rounded-lg text-left p-2 hover:p-3 ease-in-out transition-all hover:cursor-pointer'>Progreass: {stat.progress}%</h2>
      <div className='progress-bar h-8 w-96 bg-[#e0e0e0] rounded-xl'>
        <div className='progress h-8 w-72 bg-gradient-to-tr from-[#2277ff] to-black rounded-xl'>

        </div>
      </div>
    </div>
  )
}

export default statistics