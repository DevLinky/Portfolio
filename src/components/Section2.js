import Skill from "./Skill";
import Navigation from "./Navigation";
import MobileNav from "./MobileNav";

const Section2 = (props) => {
    return (
        <>
            <MobileNav selectedTab={props.selectedTab} setSelectedTab={props.setSelectedTab} language={props.language} setLanguage={props.setLanguage} langFile={props.langFile} />
            <Navigation language={props.language} setLanguage={props.setLanguage} langFile={props.langFile} />
            <section className="section2">
                <h2 className="skills-text">{props.langFile.navigation.skills}</h2>
                <div className="skills-container">
                    <Skill language={props.language} />
                </div>
                <div className="empty-space">sqd</div>
            </section>
            
        </>
    )
}

export default Section2;