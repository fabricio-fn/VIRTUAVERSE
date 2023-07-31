import "./button.scss"

export default function Button({ icon, text }) {
    return(
        <button class="btn">
            {icon}
            {text}
        </button>
    )
}