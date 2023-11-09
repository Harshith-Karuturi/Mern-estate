import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import About from './pages/about';
import Profile from './pages/Profile';
import Header from './Components/Header';
 

export default function App(){
  return(
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Sign-in" element={<Signin/>}/>
      <Route path="/Sign-up" element={<Signup/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/Profile" element={<Profile/>}/>
    </Routes>
     </BrowserRouter>
  )
}