import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>UAtutor - Time to play TFT</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Sign Up</Link>
                <Link to="/profile">TEST_PROFILE</Link>
            </div>
        </nav>

    );
}
 
export default Navbar;