import Skill from "./Skill";
import Navigation from "./Navigation";

const Section2 = (props) => {
    return(
        <>
        <Navigation language={props.language} setLanguage={props.setLanguage} langFile={props.langFile} />
        <section className="section2">
        <h2 className="skills-text">{props.langFile.navigation.skills}</h2>
            <div className="skills-container">
                
                <Skill language={props.language}/>
                
            </div>
        </section>
        </>
    )
}

export default Section2;