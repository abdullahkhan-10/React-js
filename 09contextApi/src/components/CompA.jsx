import CompB from "./CompB";

function CompA(){
    return(
        <div className='comp-a'>
            <h1>Comp1</h1>
            <CompB />
        </div>
    );
};
export default CompA;











// // For prop drilling
// function CompA({data1}){
//     return(
//         <div className='comp-a'>
//             <div>Comp1</div>
//             <CompB data2={data1}/>
//         </div>
//     );
// };
// export default CompA;