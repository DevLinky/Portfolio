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
                <br />
                <SocialNetwork />
                <br />
                <button>CONTACT</button>
                <TypedMessage />
            </section>
        </>
    )
}

export default Section1;