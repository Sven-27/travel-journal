import './App.css'
import Header from './components/header/Header'
import Card from './components/card/Card'
import data from './data/data'

function App() {
  return (
    <div className='app'>
      <Header />
      {
        data.map(item => (
         <Card
           image={item.img}
           country={item.country}
           date={item.date}
           place={item.place}
           description={item.description}
         />
        ))
      }
     
    </div>
  );
}

export default App;
