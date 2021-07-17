import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <header className="navbar-header">
            <div className="logo-title">
                <h1>The Dojo Blog</h1>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Create Blog</Link>
            </div>
        </header>
     );
}
 
export default Navbar;