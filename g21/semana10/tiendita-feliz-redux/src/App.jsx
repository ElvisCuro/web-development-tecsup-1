import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import CounterActions from './components/CounterActions';
import CounterValueWrapper from './components/CounterValueWrapper';
import { readProducts } from './redux/thunks/counterThunk';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
