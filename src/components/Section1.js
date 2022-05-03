import SocialNetwork from "./SocialNetworks";
import Particles from 'react-tsparticles';
import ParticlesBG from "./ParticlesBG";
import Navigation from "./Navigation";
import TypedMessage from "./TypedMessage";

const Section1 = () => {
    return (
        <>
            <Navigation />
            <section className="section1">
                <h1 className="title">DevLinky</h1>
                {/* <div className="text"><h2>Hi, I'm a freelance developper</h2></div>
                <Typed
                    strings={["WEB DEV", "REACT FAN", "GEEK"]}
                    typeSpeed={70}
                    backSpeed={70}
                    backDelay={1000}
                    loop
                    smartBackspace
                    loop >
                    <input type="text" disabled />
                </Typed> */}
                <br />
                <SocialNetwork />
                {/* <div className="imageContainer">
                    <img src={logo} alt="logo" className="logo" />
                </div> */}
                <br />
                <button>CONTACT</button>
                <TypedMessage />
            </section>
        </>
    )
}

export default Section1;