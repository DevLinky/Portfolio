import Navigation from "./Navigation";

const Section4 = (props) => {
return(
    <>
    <Navigation language={props.language} setLanguage={props.setLanguage} langFile={props.langFile} />
        <section>
            <h1>Bienvenue sur la page CONTACT</h1>
        </section>
    </>
)

}

export default Section4;