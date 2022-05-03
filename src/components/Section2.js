import Skill from "./Skill";
import Navigation from "./Navigation";

const Section2 = () => {
    return(
        <>
        <Navigation />
        <section className="section2">
        <h2 className="skillsText">SKILLS</h2>
            <div className="skills-content">
                
                <Skill />
                
            </div>
        </section>
        </>
    )
}

export default Section2;