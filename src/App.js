import Comp1 from './Comp1';
import './App.css';
import { createContext } from 'react';

export const FirstName = createContext();
export const LastName = createContext();

function App() {
  return (
    <div className='App'>
      <FirstName.Provider value="Abhishek">
      <LastName.Provider value="Chaturvedi">
        <header className='App-header'>
          <Comp1 />
        </header>
        </LastName.Provider>
      </FirstName.Provider>
    </div>
  );
}

export default App;
