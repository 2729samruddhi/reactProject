import './App.css';
import { BioProvider } from './ContextApi';
import { Home } from './ContextApi/Home';

function App() {
  return (
  <BioProvider>
    <Home/>
  </BioProvider>
  )
}

export default App;
