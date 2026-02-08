
import Card from './components/Card'
import products from './productsDetails'
const App = () => {
  
  return (
    <div className='parent' >
  {products.map((e,i)=>{
    return <div key={i} >
      <Card title ={e.title}  tags={e.tags} desc={e.description} toppings={e.toppings} price={e.price} delivery={e.delivery}  />
    </div>
  })}
    </div>
  )
}

export default App