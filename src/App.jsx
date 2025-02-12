import Footer from "./components/Footer"
import Main from "./components/Main"
import SideBar from "./components/SideBar"
import { useState } from 'react'

function App() {

  const [showModal, setShowModal] = useState(false)

  function handleToggleModal(){
    setShowModal(!showModal)
  }

  return (
    <>
      <Main />
      {showModal&&(<Sidebar handleToggleModal={handleToggleModal}/>)}
      <Footer handleToggleModal={handleToggleModal} />
    </>
  )
}

export default App
