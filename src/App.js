import './App.css';
import Ballot from './Components/Ballot/Ballot';

function App() {
  // Feel free to remove the contents of the header tag to make more room for your code
  return (
    <div className="App">
      <div className='App-header'>
        Movie Award 2021
      </div>
      <div className='App-notes'>
        Please pick your choice for each category winner !
      </div>
      <Ballot />
    </div>
  );
}

export default App;
