import Section from "../Section/Section"
import TitleSection from "../TitleSection/TitleSection"
import "./howworks.scss"

export default function HowWorks() {
    return (
        <section id="howmetaverseworks" className="howworks">
            <div className="img">
                <img src="/img/planet-11.svg" alt="" srcset="" />
            </div>

            <div className="content">
                <Section text="How Metaverse Works" />
                <TitleSection title="Get started with just a few clicks" />

                <div>
                    <span>01</span>
                    <h3>Find a world that suits you and you want to enter</h3>
                </div>
                
                <div>
                    <span>02</span>
                    <h3>Enter the world by reading basmalah to be safe</h3>
                </div>

                <div>
                    <span>03</span>
                    <h3>No need to beat around the bush, just stay on the gas and have fun</h3>
                </div>
            </div>
        </section>
    )
}