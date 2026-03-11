import React from 'react'
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import { financeData } from '../finance'

const FinanceChart = () => {
  return (
    <div>
        <LineChart width={600} height={300} data={financeData} >
            <CartesianGrid strokeDasharray='5 5'/>
            <XAxis dataKey="month"/>
            <YAxis/>
            <Tooltip/>
            <Line dataKey="food" type="monotone" stroke='#4038d4' />
            <Line dataKey="transport" type="monotone" stroke='#2e2d4d' />
            <Line dataKey="shopping" type="monotone" stroke='#118064' />
            <Line dataKey="bills" type="monotone" stroke='#bdba1b' />
            <Line dataKey="entertainment" type="monotone" stroke='#5c0d4f' />
        </LineChart>
    </div>
  )
}

export default FinanceChart