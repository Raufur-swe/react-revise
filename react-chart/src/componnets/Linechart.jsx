import React from 'react'
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import { salesData } from '../data'
const Linechart = () => {
  return (
    <div >
     <LineChart width={600} height={300} data={salesData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="sales" stroke="#8884d8" />
        <Line type="monotone" dataKey="orders" stroke="#8884d8" />
      </LineChart>
    </div>
  )
}

export default Linechart