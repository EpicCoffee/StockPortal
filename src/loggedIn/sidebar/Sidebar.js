import React from 'react';
import '../../styling/SideBar.css' 
import molndal from '../../images/molndal.png';
import LinkComponent from '../../component/LinkComp';
import Auth from '../../routes/Authenticated';
import { NavLink} from 'react-router-dom'

const nameArr =[['Hem','fa fa-home'], 
['Min Portfölj','fa fa-briefcase'],
['Inställingar','fa fa-cogs'],
['Logga_ut','fa fa-sign-out']];

const views = ["/home","/my_portfolio","/settings","/"];

const SideBar = (props) =>{

    const logoutAction = () =>{
        Auth.logout();
    };

    const generateLinks = 
    nameArr.map(([name, iconname],index)=>{
      return  <div 
      className ="sidebar"
      key ={name +index}
      onClick= { () => name ==='Logga_ut' && logoutAction()}
      >
      <LinkComponent
      linkName ={name}
      linkID ={name}
      linkClass = "sideLink"
      linkIcon = {iconname}
      onClickLink ={views[index]}
     />
      </div>
      
    })

        return(
            <div className="sidediv">
            <NavLink to='/home'> 
            <img src={molndal} id ="sideImageLogo" alt="campusImage"></img>
            </NavLink>
            {generateLinks}
            </div>
        )
       

};


export default SideBar;