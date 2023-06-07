import './index.css'
// import './App.css'
// import Home from './Home'

import Navbar from './component/Navbar'
import Banner from './component/Banner'
import Cardbody from './component/Cardbody'
import Circle from './component/Circle'
import NewCards from './component/NewCards'

function App() {

  return (
    <>
    <main className='bg-[#e4e4e4]'>
      <Navbar />
      <Banner />
      <Circle />
      {/* <Cardbody /> */}
      <NewCards />
    </main> 
    </>
  )
}

export default App
