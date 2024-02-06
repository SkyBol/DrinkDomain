import { Link } from "react-router-dom";


const Homepage = () => {
    return (
        <div>
            <Link to={"/login"}>Login</Link><br/>
            <Link to={"/users/"}>User List</Link><br/>
            <Link to={"/users/add"}>User Add</Link><br/>
        </div>
    )
}

export default Homepage;