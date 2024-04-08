import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
export default function Navbar(props){
    function ThemeButton (btnProps){
        return(
            <div className="setThemebtn"  >
                <button  color={btnProps.color} background ={btnProps.background} className="theme-color" style = {{backgroundColor: btnProps.background, color : btnProps.color, border:'1px solid'}} mode={btnProps.mode}onClick={props.color}></button>
            </div>
        )
    }
   
    return(
        <>
        <nav className={`navbar navbar-expand-lg navbar-${props.setTheme.mode} bg-${props.setTheme.mode}`}>
            <div className="container-fluid">
                <Link  className="navbar-brand logo" to="/">{props.title}</Link>
              
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 menues" >
                        <li className="nav-item menues">
                            <Link className="nav-link active" aria-current="page" to="/">{props.menu1}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.menu2}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/text">{props.menu3}</Link>
                        </li>
                    
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <h5 style={{padding : '10px'}} className={`text-${props.setTheme.mode==='dark'?'light':'dark'}`}> Set Theme Color</h5>
                    <div className="setTheme">
                        <ThemeButton color='black' background ='white' mode='light'/>  
                        <ThemeButton color='white' background ='rgba(8, 33, 59, 0.95)' mode='dark'/>
                        <ThemeButton color='black' background ='rgb(19 21 21 / 35%)' mode='light'/>  
                        <ThemeButton color='black' background ='rgb(131 182 222)' mode='dark'/>  
                        <ThemeButton color='black' background ='#607D8B' mode='dark'/>                      
                    </div>  
                </div>
            </div>
        </nav>
        </>
    )
}
Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    menu1 : PropTypes.string.isRequired,
    menu2 : PropTypes.string.isRequired,
} 
Navbar.defaultProps={
    title : 'TextUtils',
    menu1 : 'Home',
    menu2 : 'About' ,
    menu3 : 'Clear' ,
}