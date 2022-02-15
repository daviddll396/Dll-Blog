import {Link} from 'react-router-dom';


const Navbar = () => {

    return ( 

        <nav className="navbar">
            <h1>The Dll Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create"> New Article</Link>
            </div>
        </nav>


     );
}
 
export default Navbar;