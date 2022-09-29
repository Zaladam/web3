const Button = ({change,text,delta})=> {

    const handleClick= (e) =>{
        let deltaValue = parseInt(e.target.dataset.delta)

        return change(deltaValue)
    }

    return (
        <button onClick={handleClick} data-delta={delta}>
            {text}
        </button>
    )
}
export default Button