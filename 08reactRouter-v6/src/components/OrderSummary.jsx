import {useNavigate} from "react-router-dom"

const OrderSummary = () =>{
    const navigate = useNavigate()
    return(
        <>
        <div>Order confirmed</div>

        {/* implementing a back button programmatically is  also done with (useNavigate) Hook. */}
        <button onClick={() => navigate(-1)}>Go back</button>
        </>
    )
}
export default OrderSummary;