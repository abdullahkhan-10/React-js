// we will import the myData
import { useContext } from 'react';

import {myData} from '../App'
import { personDetails } from '../App';

function CompC(){
    // 3. we will get the data through useContext Hook.
    const getName = useContext(myData)

    // second context data
    const getinfo = useContext(personDetails)

    return(
        <div className='comp-c'> 
            <h1>Comp3</h1>
            <h2>Name: {getName}</h2>
            
            <h3>City: {getinfo.city}</h3>
            <h3>Age: {getinfo.age}</h3>
        </div>
    );
};
export default CompC;







// // fro prop drilling
// function CompC({data3}){
//     return(
//         <div className='comp-c'> 
//             <div>Comp3</div>
//             <h2>{data3}</h2>

//         </div>
//     );
// };
// export default CompC;