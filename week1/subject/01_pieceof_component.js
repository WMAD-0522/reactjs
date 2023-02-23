function Navbar() {
    return (
        <ul>
            <li>
                <a href="#home">Home</a>
            </li>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    )
}

function MyMain(){
    return (
        <div>
            <h1>Hello React</h1>
            <p>Esse eiusmod magna magna proident qui reprehenderit. Exercitation sunt enim duis officia consequat culpa incididunt. Velit sit fugiat ea labore aliqua dolore. Ullamco ex non eu Lorem tempor veniam fugiat esse. Nisi labore velit nisi consectetur non nulla occaecat magna ea commodo nulla officia. Amet veniam officia ad eiusmod tempor est incididunt nisi excepteur aliqua velit.</p>
            <button>Discover</button>
        </div>
    )
}

function Footer(){
    return (
        <footer>
            &copy; by Kubilay Cakmak
        </footer>
    )
}


ReactDOM.render(
    <div>
        <Navbar />
        <MyMain />
        <Footer />
    </div>
,document.getElementById("root"))