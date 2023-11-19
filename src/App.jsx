import Header from "./components/Header"
import Footer from "./components/Footer"
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      {/* Step 5 : import and include header/outlet/footer components here */}
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
