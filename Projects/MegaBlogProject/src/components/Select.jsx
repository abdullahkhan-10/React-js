import { useId, React } from "react"
import { forwardRef } from "react"


function Select({
    options,
    label,
    className,
    ...props
}, ref){
    const id = useId()
    return(
        <div className="w-full">
            { label && <label htmlFor={id} className=""></label>}
            <select
            id={id}
            ref={ref}
            {...props}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            
            >
                {/* ? mean optional, if we  have the array (options) the run map method/loop */}
                {options?.map( (obj) =>{
                    <option key={obj.name} value={obj}>
                        {obj}
                    </option>
                })}
            </select>
        </div>
    )
}

// in Input.jsx we have done this differently which was a bit difficult, this is an easy way to use (forwardRef) Hook.
export default React.forwardRef(Select);