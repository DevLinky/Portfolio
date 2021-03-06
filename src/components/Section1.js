import SocialNetwork from "./SocialNetworks";
import Navigation from "./Navigation";
import TypedMessage from "./TypedMessage";
import english from "../data/english.json";
import french from "../data/french.json";

const Section1 = (props) => {
    

    return (
        <>
        
            <Navigation  language={props.language} setLanguage={props.setLanguage} langFile={props.langFile} />
            <section className="section1">
                <h1 className="title">DevLinky</h1>
                <br />
                <SocialNetwork />
                <br />
                <button>{props.langFile.contact}</button>
                <TypedMessage langFile={props.langFile} />
            </section>
        </>
    )
}

export default Section1;