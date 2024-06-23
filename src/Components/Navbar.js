import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Styles/logow.png';
import head from '../Styles/sidepic.JPG';
import './Navbar.css'
import { FaMoneyBill } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa6";
import { GrAppsRounded } from "react-icons/gr";
import { BiSolidUserPin } from "react-icons/bi";
const Navbar = () => {
  return (
    <div>
               
        <div className="container-fluid">
    <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg">
            <div style={{ color: 'white' }} className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-whit min-vh-100">
                <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-whit text-decoration-none">
               
                    <span className="fs-5 d-none d-sm-inline">  
                         < img src={logo} className="navimage" /></span>
                    <br/>
                    <br/>
                    <br/>
                    
                     <br/>
                     <div className="input-group mb-3">
  <input type="search" onClick={null} className="form-control adjust col-sm-6 searchh" placeholder="🔍 Search..." 
         />
  <div className="input-group-append">
  </div>
</div>
     
                 <div className="d-flex justify-content-end align-items-center iconsright">
        <i className="fa-solid fa-calendar mx-2"></i>
        <i className="fa-solid fa-bell mx-2 position-relative">
  <span className="badge">
    4
  </span>
</i>

<i className="fa-solid fa-envelope mx-2 position-relative">
  <span className="badge">
    2
  </span>
</i>
        <img src={head} className="rounded-circle mx-2" width="20" height="20" />
          <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle  "/>
                    
           
         <div >

  <a class="namepos"> &nbsp;   &nbsp;   John</a>
  <br/>
  <a class="desipos"> &nbsp;   &nbsp;   Manager</a>
 
</div>
        <div className="dropdown pb-4 iconsrightt">
                    <a href="#" className="d-flex align-items-center text-whit text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a className="dropdown-item" href="#">New project...</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        
                    </ul>
                           </a>
                   
                </div>
      </div>
         <div className="linee">
         </div>
                </a>
                 <div className="line2">
         </div>
         <div className='bg2'>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center 
                 align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <a href="#" className="nav-link align-middle px-0">
                            <i className="fs-4 bi-house"></i> <span  className="ms-1 d-none d-sm-inline text-whit"><GrAppsRounded />&nbsp;Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline text-whit"><FaMoneyBill />&nbsp;Expense Register</span> </a>
                        
                    </li>
                    <li>
                        <a href='/contact' className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline text-whit"><BiSolidUserPin />&nbsp;Contact Us</span></a>
                    </li>
                    <li>
                        <a href='/guide'  className="nav-link px-0 align-middle ">
                            <i className="fs-4 bi-bootstrap"></i> <span className="ms-1 d-none d-sm-inline text-whit"><FaUserGraduate />&nbsp;Learn to use</span></a>
                       
                    </li>
           <li className="nav-item mt-auto signoutposi text-whit">
    <a href='/sign' className="nav-link align-middle px-0">
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" color="white" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
  <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
</svg>
        <span className="ms-1 text-whit">Sign Out</span>
    </a>
</li>            
                </ul>
                </div>
                <hr/>
                
            </div>
        </div>
        
    </div>
</div>



    </div>
  )
}

export default Navbar