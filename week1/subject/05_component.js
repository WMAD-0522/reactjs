function Navbar () {
    return(
        <div className="navbar">
            <div className="navbar-left">
                <img src="./reactjs-logo.png" />
                <h4>ReactProject</h4>
            </div>
            <h4>React - Project 1</h4>
        </div>
    );
}

function MyMain(){
    return (
        <div className="main">
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            <img className="bg-image" src="./reactjs-bg.png"/>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <div>
        <Navbar />
        <MyMain />
    </div>
)