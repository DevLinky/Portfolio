import Navigation from "./Navigation";
import MobileNav from "./MobileNav";



const Section4 = (props) => {
    function copyEmail() {
        var copyText = 'xpog.devlinky@gmail.com';
        navigator.clipboard.writeText(copyText);
        alert(props.langFile.alerts.email);
    }
    function copyNumber() {
        var copyText = '0629259099';
        navigator.clipboard.writeText(copyText);
        alert(props.langFile.alerts.number);
    }
    function copyDiscord() {
        var copyText = 'DevLinky#7352';
        navigator.clipboard.writeText(copyText);
        alert(props.langFile.alerts.discord);
    }
    
return(
    <>
    <MobileNav selectedTab={props.selectedTab} setSelectedTab={props.setSelectedTab} language={props.language} setLanguage={props.setLanguage} langFile={props.langFile} />
            <Navigation language={props.language} setLanguage={props.setLanguage} langFile={props.langFile} />
        <section className="section2">
        <div className="contact-container" onClick={() => {copyEmail()}}><h3 className="contact-text">xpog.devlinky@gmail.com</h3></div>
        <div className="contact-container" onClick={() => {copyNumber()}}><h3 className="contact-text">06.29.25.90.99</h3></div>
        <div className="contact-container"  onClick={() => {copyDiscord()}}><h3 className="contact-text">Discord: <br/><br/>DevLinky#7352</h3></div>
        </section>
    </>
)

}

export default Section4;