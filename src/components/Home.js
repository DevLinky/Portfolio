import SocialNetwork from "./SocialNetworks";
import Navigation from "./Navigation";
import TypedMessage from "./TypedMessage";
import MobileNav from "./MobileNav";
import { useNavigate } from "react-router";


const Section1 = (props) => {
    const navigateContact = useNavigate();

    return (
        <>
        <MobileNav language={props.language} setLanguage={props.setLanguage} langFile={props.langFile} selectedTab={props.selectedTab} setSelectedTab={props.setSelectedTab}/>
            <Navigation  language={props.language} setLanguage={props.setLanguage} langFile={props.langFile} />
            <section className="home">
                <h1 className="title">DevLinky</h1>
                <br />
                <SocialNetwork />
                <br />
                <button onClick={() => { 
                    navigateContact('/contact');
                    props.setSelectedTab('contact');
                    }}>{props.langFile.contact}</button>
                <TypedMessage langFile={props.langFile} />
            </section>
        </>
    )
}

export default Section1;