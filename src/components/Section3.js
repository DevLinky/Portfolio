import Navigation from "./Navigation";
import Project from "./Project";
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
                <Project img={JaniakCreation} title='Janiak-Creation' link="https://janiak-creation.herokuapp.com/" />
                <Project img={Gallery1} title={props.langFile.more} link="#" />
                <Project img={Gallery2} title={props.langFile.more} link="#" />
                <Project img={Gallery3} title={props.langFile.more} link="#" />
                <Project img={Gallery4} title={props.langFile.more} link="#" />
                <Project img={Gallery5} title={props.langFile.more} link="#" />
                <Project img={QuestionMark} title={props.langFile.more} link="#" />
            </section>
        </>
    )
}

export default Section3;