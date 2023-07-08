import './App.css';
import CounterActions from './components/CounterActions';
import CounterValueWrapper from './components/CounterValueWrapper';

function App() {
  return (
    <>
      <header>
        <h1>
          Tiendita Feliz Redux
        </h1>
        <CounterActions />
        <CounterValueWrapper />
      </header>
    </>
  )
}

export default App
