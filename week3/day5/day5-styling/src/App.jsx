import './App.css'
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <div className="container">
      <Header />
      <Hero />
      <Main />
      <Footer />
    </div>
  )
}

export default App
