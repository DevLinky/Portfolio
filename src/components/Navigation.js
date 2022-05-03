import { useNavigate } from "react-router";

const Navigation = () => {
const navigate = useNavigate();

    return(
        <ul className="nav-container">
            <li onClick={() => { navigate('/contact') }}>Contact</li>
            <li onClick={() => { navigate('/projects') }}>Projects</li>
            <li onClick={() => { navigate('/skills') }}>Skills</li>
            <li onClick={() => { navigate('/') }}>Home</li>
        </ul>
    )
}

export default Navigation;