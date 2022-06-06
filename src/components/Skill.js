import { FaReact, FaJs, FaNodeJs, FaSass, FaHtml5, FaCss3, FaGitAlt, FaDatabase } from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';
import skillsDataEN from "../data/tooltip-EN.json"
import skillsDataFR from "../data/tooltip-FR.json";


const Skill = (props) => {

    let skillsData;

    props.language? skillsData=skillsDataEN : skillsData=skillsDataFR;

    return (
        <>
        <ReactTooltip place="right" effect="solid" html={true} multiline="true" wrapper="div" id="right"/>
        <ReactTooltip place="bottom" effect="solid" html={true} multiline="true" wrapper="div" id="left"/>
            <div className="skill">
                <div className="icon-div"  data-for="right"  data-tip={skillsData.HTML5}><FaHtml5 /></div>
                <div className="icon-text" >HTML5</div>
            </div>
            <div className="skill">               
                <div className="icon-div"  data-for="left" data-tip={skillsData.CSS3}><FaCss3 /></div>
                <div className="icon-text">CSS3</div>
            </div>
            <div className="skill">
                <div className="icon-div"  data-for="right" data-tip={skillsData.REACT}><FaReact /></div>
                <div className="icon-text">REACT</div>
            </div>
            <div className="skill">
                <div className="icon-div"  data-for="left" data-tip={skillsData.JS}><FaJs /></div>
                <div className="icon-text">JavaScript</div>
            </div>
            <div className="skill">
                <div className="icon-div"  data-for="right" data-tip={skillsData.NODE}><FaNodeJs /></div>
                <div className="icon-text">Node.JS</div>
            </div>
            <div className="skill">
                <div className="icon-div"  data-for="left" data-tip={skillsData.SASS}><FaSass /></div>
                <div className="icon-text">SASS</div>
            </div>
            <div className="skill">
                <div className="icon-div"  data-for="right" data-tip={skillsData.GIT}><FaGitAlt /></div>
                <div className="icon-text">Git</div>
            </div>
            <div className="skill">
                <div className="icon-div"  data-for="left" data-tip={skillsData.MONGO}><FaDatabase /></div>
                <div className="icon-text">MongoDB</div>
            </div>
        </>
    )
}
export default Skill;