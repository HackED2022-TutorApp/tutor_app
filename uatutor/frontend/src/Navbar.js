import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>UAtutor</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Sign Up</Link>
            </div>
        </nav>

    );
}
 
export default Navbar;