import "./buttonlink.scss"

export default function ButtonLink({href, text, icon}) {
    return (
        <a className="buttonLink" href={href}>
            {text}
            {icon}
        </a>
    )
}