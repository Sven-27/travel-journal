import './App.css';
import data from './data/data'

function App() {
  return (
    <div className="app">
      {
        data.map(item => (
          <img key={item.id} src={item.img} alt="images" />
        ))
      }
    </div>
  );
}

export default App;
