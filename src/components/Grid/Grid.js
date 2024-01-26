import React from 'react'

const Grid = () => {
  return (
    <div>
         <table class="table-auto border border-black p-4 m-4 mx-12">
            <thead className='p-4 m-4 border border-black bg-gray-500 text-white'>
                <tr>
                <th className='p-4 m-4 border border-black'>Song</th>
                <th className='p-4 m-4  border border-black'>Artist</th>
                <th className=' p-4 m-4 border border-black'>Year</th>
                </tr>
            </thead>
            <tbody className='p-4 m-4 border border-black'>
                <tr className='p-4 m-4 border border-black'>
                <td className='p-4 m-4 border border-black'>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td className='p-4 m-4 border border-black'>Malcolm Lockyer</td>
                <td className='p-4 m-4 border border-black'> 1961</td>
                </tr>
                <tr className='p-4 m-4 border border-black'>
                <td className='p-4 m-4 border border-black'>Witchy Woman</td>
                <td className='p-4 m-4 border border-black'>The Eagles</td>
                <td className='p-4 m-4 border border-black'>1972</td>
                </tr>
                <tr className='p-4 m-4 border border-black'>
                <td className='p-4 m-4 border border-black'>Shining Star</td>
                <td className='p-4 m-4 border border-black'>Earth, Wind, and Fire</td>
                <td className='p-4 m-4 border border-black'>1975</td>
                </tr>
            </tbody>
            </table>
    </div>
  )
}

export default Grid