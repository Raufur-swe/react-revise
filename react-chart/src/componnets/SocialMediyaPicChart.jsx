import React from 'react'
import { Pie, PieChart, Tooltip } from 'recharts'
import { Screendata } from '../screenTime'


const SocialMediyaPicChart = () => {
  return (
    <div>
        <PieChart height={400} width={400} >

<Pie data={Screendata} dataKey="time" nameKey="platform" cx="50%" cy="50%" outerRadius={120} fill='#8884d8' label/>
<Tooltip/>
        </PieChart>
    </div>
  )
}

export default SocialMediyaPicChart