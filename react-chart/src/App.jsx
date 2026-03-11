import React from 'react'
import Linechart from './componnets/LineChart'
import FinanceChart from './componnets/FinanceChart'
import SalesBarChart from './componnets/SalesBarChart'
import SocialMediyaPicChart from './componnets/SocialMediyaPicChart'



const App = () => {
  return (
    <>
      <h2>
        e-commerce search sales
      </h2>
  <Linechart/>
  <h2>finace tracer</h2>
  <FinanceChart/>
  <h2>sales bar charts</h2>
  <SalesBarChart/>
  <h2>pi chart</h2>
  <SocialMediyaPicChart/>
    </>
  )
}

export default App