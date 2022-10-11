import logo from './vinci.png';
import './Header.css'

const Header = (props)=> {
    return(
      <div className='Header'>
        <img src={logo} alt="" srcset="" />
        <h1>{props.name}</h1>
      </div>
    )
  }

export default Header