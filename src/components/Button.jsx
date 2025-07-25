
const Button = (props) => {
    return (
        <button onClick={props.onClick} className="btn btn-primary">{props.value}</button>
    )
}

export default Button