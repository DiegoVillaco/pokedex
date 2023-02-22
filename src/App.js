
import './App.css';
import { useEffect, useState } from 'react';
import MediaCard from './components/MediaCard';

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
                {/*head container*/}
                <div>
                  <label>{pokemon.name}</label>
                </div>
                {/*ScreeContainer*/}
                <div>
                  <MediaCard
                  
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
                  />
                
                </div>
                {/*Info Container*/}
                
                <div>
                  <button onClick={() => getPokemon(currentId - 1)}>Prev  </button>
                  <button onClick={() => getPokemon(currentId + 1)}>Next</button>
                  
                  
                  <div>
                    --Abilities--
                    {pokemon.abilities.map((ab,index)=>{
                      
                      return <p key={index}>{ab.ability.name}</p>
                    })}
                  </div>
                  <div>
                    --Type--
                    {pokemon.types.map((ty,index)=>{
                      return <p key={index}>{ty.type.name}</p>
                    })}
                  </div>
                  
                </div>

              </div>
            )
        }

      </header>
    </div>
  );
}

export default App;
