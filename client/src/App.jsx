import React,{lazy} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

const Home =lazy(()=>import("./pages/Home"))
const Login =lazy(()=>import("./pages/Login"))
const Chat =lazy(()=>import("./pages/Chats"))
const Groups =lazy(()=>import("./pages/Group"))


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/chat/:chatID' element={<Chat/>}/>
          <Route path='/group' element={<Groups/>}/>
          <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App