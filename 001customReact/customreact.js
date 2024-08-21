const mainContainer = document.getElementById("myRoot")

// react treat all the element and tags like this, make the tree of their properties in key value pair like object.

// in react we write this like, <a href="https://google.com" target="_blank">Click me to visit google</a>
// we assume this element.
const reactElement = {          
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    text: 'Click me to visit google'
}

// but react follow this syntax for the above Elements,
// if we declare any variable in react component, it is also inject here 

// let companyName = "google"
// const reactElement2 = React.createElement(
//     'a',
//     {href: "https://google.com", target: '_blank'},
//     "Click me to visit",
//     companyName
// )


// react do this in behind, the render method in (react index.js) file do this in behind
function customRender(myElement, myContainer){
   /* const domElement = document.createElement(myElement.type)    // it means create anchor tag. 
    domElement.innerHTML = myElement.text;
    domElement.setAttribute("href", reactElement.props.href);
    domElement.setAttribute("target", reactElement.props.target)*/

    // To set attributes dynamically we will use for loop
    const domElement = document.createElement(myElement.type)     
    domElement.innerHTML = myElement.text;
    for (const key in myElement.props) {
        domElement.setAttribute(key, myElement.props[key])  // mean gave us key and values of props object.
    }

    myContainer.appendChild(domElement);
}

// in react we do only this, the react render the reactElement and then inject/compile in (index.html) where we have div with myRoot id, which we have grab in variable(mainContainer), and display all the element and tags on DOM/Browser. 
customRender(reactElement, mainContainer)
// mean inject reactElement in mainContainer.


// This was our custom react app hurrrahh!