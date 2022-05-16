import React,{useContext} from 'react'
import {Navbar, Nav,Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {UserContext} from '../App'
import "./container.css"




function Navibar() {

   const {state,dispatch} = useContext(UserContext);

  const renderList=()=>{
    if(state){
      return [
       
        <Nav.Link className=" h5 px-4 navbar-font" ><Link to="/">  <i class="fas fa-home"></i></Link></Nav.Link>,
        <Nav.Link className=" h5 px-4" ><Link to="/profile"> <i class="fas fa-user"></i></Link></Nav.Link>,
        <Nav.Link className=" h5 px-4" ><Link to="/createpost"> <i class="fas fa-plus-circle"></i></Link></Nav.Link>,
        <Nav.Link 
        className=" h5 px-4" 
        onClick={()=>{
          localStorage.clear();
          dispatch({type:"LOGOUT"})
          // localStorage.removeItem('jwt')
          // localStorage.removeItem('user')
        }}
        
        
        
        ><Link to="/signin"> <i class="fas fa-sign-out-alt"></i></Link></Nav.Link>
      ]
    }else{
      return [
      <Nav.Link className="h5" ><Link to="/signup">Signup</Link> </Nav.Link>,
      <Nav.Link className="h5" ><Link to="/signin">Signin</Link></Nav.Link>
      ]
    }
  }
 
  return (
    <>

  <Navbar bg="light" variant="light" className="fixed-top  ">
    <Container className="d-flex justify-content-between">
    <Navbar.Brand className="brand-logo"> <Link to={state?'/':'/signin'}>GoSocial</Link> </Navbar.Brand>
    <Nav >
     {renderList()}
    </Nav>
    </Container>
  </Navbar>
</>
  )
}

export default Navibar