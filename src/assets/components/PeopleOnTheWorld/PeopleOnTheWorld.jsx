import TitleSection from "../TitleSection/TitleSection"
import Section from "../Section/Section"
import "./peopleontheworld.scss"

export default function PeopleOnTheWorld() {
    return (
        <section id="peopleontheworld" className="peopleontheworld">
            <Section text="People on the World" />
            <TitleSection title="Track friends around you and invite them to play together in the same world"/>
            
            <img src="/img/map.svg" alt="" srcset="" />
        </section>
    )
}