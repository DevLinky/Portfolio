import { useNavigate } from "react-router";


const Navigation = (props) => {
const navigate = useNavigate();

    return(
        <ul className="nav-container">
            <li onClick={() => { navigate('/contact') }}>{props.langFile.navigation.contact}</li>
            <li onClick={() => { navigate('/projects') }}>{props.langFile.navigation.projects}</li>
            <li onClick={() => { navigate('/skills') }}>{props.langFile.navigation.skills}</li>
            <li onClick={() => { navigate('/') }}>{props.langFile.navigation.home}</li>
            <li className="language" onClick={() => {props.setLanguage(!props.language)}}>{props.language? "EN" : "FR"}</li>
        </ul>
    )
}

export default Navigation;