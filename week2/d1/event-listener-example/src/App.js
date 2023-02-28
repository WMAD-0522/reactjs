import './App.css';

function App() {

  function handleClick() {
    console.log("I am clicking..");
  }

  function handleOnMouseOver(){
    console.log("I am mouse overing..");
  }

  const arrowOnClick = () => console.log("I am clicking..");
  

  return (
    <div className="App">
      <div className='container'>
        <img onMouseOver={handleOnMouseOver} width={400} src="https://images.unsplash.com/photo-1677504210148-e39caba87b4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4528&q=80" alt="" />
        <button onClick={arrowOnClick}>Click me</button>
      </div>
    </div>
  );
}

export default App;