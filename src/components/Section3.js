import Navigation from "./Navigation";
import Project from "./Project";
import JaniakCreation from '../assets/Janiak-Creation.png';
import QuestionMark from '../assets/Question-Mark.png'
import MobileNav from "./MobileNav";

const Section3 = (props) => {
    return (
        <>
            <MobileNav selectedTab={props.selectedTab} setSelectedTab={props.setSelectedTab} language={props.language} setLanguage={props.setLanguage} langFile={props.langFile} />
            <Navigation language={props.language} setLanguage={props.setLanguage} langFile={props.langFile} />
            <section className="section3">
                <Project img={JaniakCreation} title='Janiak-Creation' link="https://janiak-creation.herokuapp.com/" />
                <Project img={QuestionMark} title={props.langFile.more} link="#" />
            </section>
        </>
    )
}

export default Section3;