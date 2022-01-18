import { Fragment } from 'react';
import './App.css';
import Cards from './components/Cards';
import Navbar from './components/Navbar';


function App() {

  const comprar = () => {
    console.log("agregaste un elemento");
  };
 
  return(
   <div>
     <div className="navBar">
     <Navbar  />
     </div>
     <Cards 
     producto="Befeater" 
     ml="700" 
     precio="1500" 
     comprar={comprar}/>

     <Cards 
     producto="Bombay Sapphire" 
     ml="750" 
     precio="2700"
     comprar={comprar}
     />

     <Cards 
     producto="Nordés Gin" 
     ml="600" 
     precio="3600"
     comprar={comprar}
     />

     <Cards 
     producto="Hayman's Royal Dock" 
     ml="650" 
     precio="3400"
     comprar={comprar}
     />
   </div>
   
 );
}

export default App; 
