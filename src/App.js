import Navbar from './Comp/Navbar';
import './app.css'
import Search from './Comp/Search';
import Carousel from './Comp/Carousel';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserSingup from './Comp/UserSingup'
import Footer from './Comp/Footer';
import UserLogin from './Comp/UserLogin';
import About from './Comp/About';
import Photo from './Detail/Photo';
import Info from './Detail/Info';
import Main from './Filter/Main'
import Member from './Detail/Member'
function App() {
  return (
    <>
  <Router>  
    <Routes>
    <Route path='/' element={<Navbar display={'hidden'} color={"text-gray-500 after:w-[50%]"}  title={['Home','About','Reach-us']}></Navbar> }/>
    <Route path='/home' element={<Navbar display={'hidden'} color={"text-gray-500 after:w-[50%]"}  title={['Home','About','Reach-us']}></Navbar> }/>
    <Route path='/login' element={<Navbar display={'hidden'} color={"text-gray-500 after:w-[50%]"}  title={['Home','About','Reach-us']}></Navbar> }/>
    <Route path='/singup' element={<Navbar display={'hidden'} color={"text-gray-500 after:w-[50%]"}  title={['Home','About','Reach-us']}></Navbar> }/>
    <Route path='/reach-us' element={<Navbar display={'hidden'} color={"text-gray-500 after:w-[50%]"}  title={['Home','About','Reach-us']}></Navbar> }/>
    <Route path='/home/Main/Search' element={<Navbar display={'hidden'} color={"text-gray-500 after:w-[50%]"}  title={['Home','About','Reach-us']}></Navbar> }/>
    <Route path='/about' element={<Navbar display={'hidden'} color={"text-gray-500 after:w-[50%]"}  title={['Home','About','Reach-us']}></Navbar> }/>
    <Route path='/home/Main/Search/MemberShip' element={<Navbar display={'hidden'} color={"text-gray-500 after:w-[50%]"}  title={['Home','About','Reach-us']}></Navbar> }/>
    <Route path='/home/Main/Search/Member' element={<Navbar display={'hidden'} color={"text-gray-500 after:w-[50%]"}  title={['Home','About','Reach-us']}></Navbar> }/>
     
    </Routes>
  <Routes>
        <Route path='/' element={ <Search/>}/>
        <Route path='/home' element={ <Search/>}/>
        {/* <Route path='/reach-us' element={ <Search/>}/> */}
        <Route path='/about'/>
        <Route path='/login' element={ <UserLogin/>}/>
        <Route path='/singup' element={<UserSingup/>}/>
   </Routes>



<Routes>
      <Route path='/home' element={  <Carousel/>} />
      <Route path='/' element={  <Carousel/>} />
</Routes>
      
     
     
<Routes>
      <Route path='/home/Main' element={<Main/>} />
</Routes>



  <Routes>
      <Route path='/home/Main/Search' element={  <Photo image1={['https://images.pexels.com/photos/38630/bodybuilder-weight-training-stress-38630.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/703012/pexels-photo-703012.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/903171/pexels-photo-903171.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1480520/pexels-photo-1480520.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://media.istockphoto.com/id/1183038884/photo/view-of-a-row-of-treadmills-in-a-gym-with-people.jpg?b=1&s=612x612&w=0&k=20&c=pCMp6rcfrfPZh7VU-dR7bSBLCTkh0ldSnT1jtHldVVQ=',
      'https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg?auto=compress&cs=tinysrgb&w=600']} />} />
 </Routes>

    <Routes>
      <Route path='/home/Main/Search' element={  <Info location={'New-Delhi'} />} />
    </Routes> 
    <Routes>
    <Route path='/home/Main/Search/Member' element={  <Member/>} />
    </Routes>
    <Routes>

    <Route path='/home/Main/Search/MemberShip' element={<UserSingup/>}/>
    </Routes>

   <Routes >
   <Route path='/' element={ <About/>}/>
   <Route path='/home' element={ <About/>}/>
   <Route path='/about' element={ <About/>}/>
   </Routes>
   <Routes >
   <Route path='/' element={ <Footer/> }/>
   <Route path='/home' element={  <Footer/>}/>
   <Route path='/reach-us' element={  <Footer/>}/>
   <Route path='/home/Main/Search' element={  <Footer/>}/>
   <Route path='/home/Main/Search/Member' element={  <Footer/>}/>
   <Route path='/home/Main/Search/MemberShip' element={  <Footer/>}/>

   </Routes>
      
  </Router>
    
    </>
     
  );
}

export default App;
