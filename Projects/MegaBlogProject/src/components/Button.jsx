// if some one didn't gave any value to button component then it will will take these properties by default

function Button({
    text,
    type= "button",
    bgColor = "bg-blue-500",
    textColor = "text-white",
    className = "",
    ...props
}){
    return(
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {Text}
        </button>
    )
}

export default Button;