const Button = (props) => {
    return(
        <>
            <button onClick={props.handle} >{props.text}</button>
        </>
    )

}

export default Button