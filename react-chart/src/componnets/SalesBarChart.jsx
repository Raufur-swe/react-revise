import React from 'react'
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'
import { salesData } from '../salesData'

const SalesBarChart = () => {
    return (
        <div>
            <BarChart width={600} height={300} data={salesData} >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#37346e" />
                <Bar dataKey="profit" fill="#8884d8" />
            </BarChart>
        </div>
    )
}

export default SalesBarChart