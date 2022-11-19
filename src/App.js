
import './App.css';
import { Data } from "./Components/Data";
import { Card } from "./Components/cards";

function App() {
  
  const showData =  Data.map((pre) => {
    return (<Card Data={pre} />)
  });

  return (
    <div className="App">
      <header className="App-header">
        <div className='parentCard' style={{display:"flex" ,justifyContent:"center" , flexWrap:"wrap"}}>

        {showData}
        </div>
      </header>
    </div>
  );
}
export default App;

