import React, { Component } from 'react';
import Oval from '../images/oval.png';
import iphone from "../images/i-phone-body.jpg";
import Path from "../images/path.png";
import logo_1 from "../images/logo-1.jpg";
import logo_2 from "../images/logo-2.jpg";
import logo_3 from "../images/logo-3.jpg";
import logo_4 from "../images/logo-4.jpg";
import logo_5 from "../images/logo-5.jpg";
import bg2 from "../images/bg2.png";
import layout_11 from "../images/layout-11.png";
import sidebar from "../images/sidebar.png";
import chat from "../images/chat-content.png";
import curve from "../images/white-curve-1.png";
import rectangle from "../images/rectangle.png";
import image from "../images/img.png";

class Header extends Component {
  render() {
    return (
     
      <header>
        <div className="Landing-1">

        <div className="Oval">
           <img src={Oval}/> 
           <div className="Omega">Omega</div>   
           <div className="BG">
                <div className="Get-Started">Get Started</div>
           </div>
           <div className="Support"><b>Support</b></div>
           <div className="Pages"><b>Pages</b></div>
           <div className="Bitmap"></div>
           <div className="Demo"><b>Demo</b></div>
        </div>


        {/* <div className="form-1">
            <div className="Redesigned-how-you">Redesigned,<br/> how you build landing page!</div>
            <div className="Create-custom-landin">Create custom landing pages with Omega that convert more <br/>visitors than any website. With lots of unique blocks, you can <br/>easily build a page without coding.</div>
            <div className="BG_2">
                <div className="Get-Started_2">Get Started</div>
            </div>
            <div className="Watch-the-intro-vide"><b>Watch the intro video</b></div>
            <div className="Path">
                <img src={Path}/>
            </div>
            <div className="iPhone-Body">
                <img src={iphone}/>
            </div>
  
            <div className="Popular-teams-who-us">Popular teams who use Omega for appoinments </div>
            <div className="logo-1">
                   <img src={logo_1}/>
            </div>
            <div className="logo-2">
                   <img src={logo_2}/>
            </div>
            <div className="logo-3">
                  <img src={logo_3}/>
            </div>
            <div className="logo-4">
                  <img src={logo_4}/>
            </div>
            <div className="logo-5">
                  <img src={logo_5}/>
            </div>
        </div>

        <div className="form-2">
            <div className="bg2">
                  <img src={bg2}/>
            </div>
            <div className="bg_box1"></div>
            <div className="Oval_box1"></div>
            <div className="layout-11">
                   <img src={layout_11}/>
            </div>
            <div className="Multiple-Layouts">
            Multiple Layouts
            </div>
            <div className="With-lots-of-unique">
            With lots of unique blocks,<br/> you can easily build a page<br /> without coding.
            </div>
            <div className="bg_box2"></div>
            <div className="Oval_box2"></div>
            <div className="sidebar">
                 <img src={sidebar}/>
            </div>
            <div className="Fully-Responsive">
            Fully-Responsive
            </div>
            <div className="With-lots-of-unique-2">
            With lots of unique blocks,<br/> you can easily build a page<br /> without coding.  
            </div> 
            <div className="bg_box3"></div>
            <div className="Oval_box3"></div>
            <div className="Path_box3"></div>
            <div className="Well-Documented">
              Well Documented
            </div>
            <div className="With-lots-of-unique-3">
            With lots of unique blocks,<br/> you can easily build a page<br /> without coding.
            </div>
            <div className="bg_box4"></div>
            <div className="Oval_box4"></div>
            <div className="chat-content">
              <img src={chat}/>
            </div>
            <div className="Great-Support">
              Great Support
            </div>
            <div className="With-lots-of-unique-4">
            With lots of unique blocks,<br/> you can easily build a page<br /> without coding.
            </div>
            <div className="Build-a-perfect-land">Build a perfect landing page fast.</div>
            <div className="Create-custom-landin">Create custom landing pages with Omega that converts <br/>more visitors than any website. With lots of unique blocks, <br/>you can easily build a page without coding.</div>
            <div className="bg_form2"></div>
            <div className="Check-all-features">Check all features</div>
            <div className="white-curve">
                <img src={curve}/>
            </div>
        </div>

        
         */}



        

        
       </div>
      </header>
      
    );
  } 
}

export default Header;