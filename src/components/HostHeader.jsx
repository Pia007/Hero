import { NavLink } from 'react-router-dom';

const HostHeader = (props) => {
    return (
        <NavLink to="/home" >
            <p className='host-header my-1 ml-1 pl-2 '>H<img src="assets/images/new-logo.svg"  alt="logo" className="nav-logo-sm" />st a <br />
                Healthcare Hero
            </p>
        </NavLink>
    )
};

export default HostHeader;