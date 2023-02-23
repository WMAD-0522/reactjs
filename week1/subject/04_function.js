// const header = (
//     <div>
//         <h1>Hello Developer</h1>
//         <p>Minim sint consequat nisi ullamco ex ut eiusmod cupidatat quis sint et voluptate sunt. Labore Lorem deserunt dolor eiusmod pariatur. Exercitation amet aliqua enim dolor irure dolore dolore ea ullamco mollit do. Enim in magna labore ad reprehenderit commodo eiusmod do aute dolor. Occaecat qui qui ad ad mollit do laborum.</p>
//         <button>Discover</button>
//     </div>
// );

function Nav(){
    return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
                </li>
                <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    )
}

function Header(){
    return (
    <div>
        <h1>Hello Developer</h1>
        <p>Minim sint consequat nisi ullamco ex ut eiusmod cupidatat quis sint et voluptate sunt. Labore Lorem deserunt dolor eiusmod pariatur. Exercitation amet aliqua enim dolor irure dolore dolore ea ullamco mollit do. Enim in magna labore ad reprehenderit commodo eiusmod do aute dolor. Occaecat qui qui ad ad mollit do laborum.</p>
        <button className="btn btn-dark">Discover</button>
    </div>
    )
}

function Loader(){
    return (
    <div className="text-center pt-5">
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
    )
}

// ReactDOM.render(<div>
//     <Header />
// </div>, document.getElementById("root"))

ReactDOM.createRoot(document.getElementById("root")).render(
<div>
    <Nav />
    <Header />
    <Loader />
</div>)