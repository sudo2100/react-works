import './App.css'
import {
  BrowserRouter, 
  Link, 
  Routes,
  Route
} from "react-router-dom"
import Main from './pages/Main'
import SignUp from './pages/SignUp'
import SignIn from './pages/SiginIn'

function App() {

  return (
    <>
      <section className="app">
        <BrowserRouter>
          <div className='header'>
            <Link to="/">Home</Link>
            <Link to="/signup">회원가입</Link>
            <Link to="/signin">로그인</Link>
          </div>

          <div className='content'>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path='/signin' element={<SignIn />} />
            </Routes>
          </div>
        </BrowserRouter>
      </section>
    </>
  )
}

export default App
