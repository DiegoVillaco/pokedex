
import './App.css';
import { useEffect, useState } from 'react';
import MediaCard from './components/MediaCard';
import {Routes, Route} from 'react-router-dom';
import SignInComponent from './components/SingInComponent';
import PageNotFoundComponent from './components/PageNotFoundComponent';
// import { Bar } from 'react-chartjs-2';


function App() {

  const pokeApiDomain = `https://pokeapi.co/api/v2/`;
  const [currentId, setCurrentId] = useState(1);
  const [pokemon, setPokemon] = useState({ sprites: {} });
  const [isLoading, setisLoading] = useState({ isLoading: false });
  const [weakness,setWeakness]= useState([]);
  useEffect(() => {
    setisLoading(true)
    fetch(`${pokeApiDomain}pokemon/${currentId}`)
      .then(response => response.json())
      .then(pokemonData => {
        pokemonWeakness(pokemonData.types);
        setCurrentId(pokemonData.id);
        setPokemon(pokemonData);
        console.log(pokemonData)
        //console.log(pokemonData);
        setisLoading(false);
        
      })
      

  }, [currentId]);
  const pokemonWeakness=(types)=>{
    
    Promise.all(types.map((type)=>
      fetch(`${pokeApiDomain}type/${type.type.name}/`)
      .then(response => response.json())
      .then(response => response.damage_relations.double_damage_from)
    )).then((pokeweak)=>{
        
        let aux = []
        pokeweak.forEach(weak => {
          weak.forEach(element => {
           
            aux.push(element)
            
          });
         
        })
        console.log(aux);
        setWeakness(aux);
        console.log('pokeweak',pokeweak)

      })
      
    
    
  }
  
  const getPokemon = (id) => {
    setCurrentId(id);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        {
          isLoading ? (<></>)
            : (

              <div>
                <div>

                </div>
                
                <div>
                 <Routes>
                  <Route path='/' element ={<SignInComponent/>}/>
                  <Route path='/home' element={<MediaCard
                  
                    logo={pokemon.sprites.front_default} 
                    image={pokemon.sprites.other['official-artwork'].front_default} 
                    name={pokemon.name} 
                    weight={pokemon.weight} 
                    height={pokemon.height} 
                    weakness={<div className='weakness-container'>
                    {weakness?.map((wk,index)=>{
                      return <span key={index}>{wk.name}</span>
                    })}
                </div>}
                  />}></Route>
                  <Route path='*' element = {<PageNotFoundComponent/>}/>
                </Routes>
                  
                   
                
                </div>
                <div>
                  <button onClick={() => getPokemon(currentId - 1)}>Prev  </button>
                  <button onClick={() => getPokemon(currentId + 1)}>Next</button>
                  
                  
                 
                  
                </div>

              </div>
            )
        }

      </header>
    </div>  
  );
}

export default App;
