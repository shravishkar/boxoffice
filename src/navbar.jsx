import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="navbar">
            <h3>New IMDB</h3>
            <div >
                <Link to = "/">Home</Link>
            </div>
        </div>
     );
}
 
export default Navbar;