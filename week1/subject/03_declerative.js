// JSX is syntax extension to JavaScript.
const element = <h1 className="header">Hello React</h1>
console.log(element);
/*
{
    type: "h1", 
    key: null, 
    ref: null, 
    props: {
        className: "header", 
        children: "Hello React"
    }, 
    _owner: null, 
    _store: {}
}
*/
ReactDOM.render(element, document.getElementById("root"))