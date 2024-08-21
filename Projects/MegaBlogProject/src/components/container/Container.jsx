// the children can be anything that we are passing to this component, like text etc.

function Container({children}){
    return <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>;
}

export default Container;