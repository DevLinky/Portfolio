import Navigation from "./Navigation";
import Project from "./Project";
import ProjectArt from "./ProjectArt";
import JaniakCreation from '../assets/Janiak-Creation.png';
import QuestionMark from '../assets/Question-Mark.png'
import MobileNav from "./MobileNav";
import Gallery1 from '../assets/gallery1.jpg';
import Gallery2 from '../assets/gallery2.jpg';
import Gallery3 from '../assets/gallery3.jpg';
import Gallery4 from '../assets/gallery4.jpg';
import Gallery5 from '../assets/gallery5.jpg';

const Section3 = (props) => {
    return (
        <>
            <MobileNav selectedTab={props.selectedTab} setSelectedTab={props.setSelectedTab} language={props.language} setLanguage={props.setLanguage} langFile={props.langFile} />
            <Navigation language={props.language} setLanguage={props.setLanguage} langFile={props.langFile} />
            <section className="section3">
                <Project className="imgSite" img={JaniakCreation} title='Janiak-Creation' link="#" />
                <ProjectArt className="imgArt" img={Gallery1} link="#" />
                <ProjectArt className="imgArt" img={Gallery2} link="#" />
                <ProjectArt className="imgArt" img={Gallery3} link="#" />
                <ProjectArt className="imgArt" img={Gallery4} link="#" />
                <ProjectArt className="imgArt" img={Gallery5} link="#" />
                <Project className="imgArt" img={QuestionMark} title={props.langFile.more} link="#" />
            </section>
        </>
    )
}

export default Section3;