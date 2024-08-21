import CompC from "./CompC";

function CompB(){
    return(
        <div className='comp-b'>
            <h1>Comp2</h1>
            <CompC/>
        </div>
    );
};
export default CompB;



// // For Prop drilling
// function CompB({data2}){
//     return(
//         <div className='comp-b'>
//             <div>Comp2</div>
//             <CompC data3={data2}/>
//         </div>
//     );
// };
// export default CompB;