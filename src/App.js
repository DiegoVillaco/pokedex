
import './App.css';
import { useEffect, useState } from 'react';

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
                  <img src={pokemon.sprites.front_default} className="App-logo" alt="logo" />
                </div>
                {/*Info Container*/}
                {console.log('renderweakness',weakness)}
                <div>
                  <button onClick={() => getPokemon(currentId - 1)}>Prev  </button>
                  <button onClick={() => getPokemon(currentId + 1)}>Next</button>
                  
                  <div>
                    ++Weight++: 
                    <label>{pokemon.weight}</label>
                  </div>
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
                  <div>
                    --weakness--
                    {weakness?.map((wk,index)=>{
                      return <p key={index}>{wk.name}</p>
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
