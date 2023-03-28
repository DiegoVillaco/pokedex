import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import { yellow } from '@mui/material/colors';
import { useDispatch } from 'react-redux';
import * as favoriteActions from '../redux/actions/favoriteAction';
import { useStore } from 'react-redux';
import { useEffect, useState } from 'react';

export default function FavoritePokemon ({pokemon}){
    const dispatch =useDispatch();
    let myRedux=useStore();
    const[showFavorite,setShowFavorite]=useState(false);

    useEffect(() =>{
        
        const myFavoritesList = myRedux.getState().favorites;
        const isFavoritePokemon=myFavoritesList.find((pokefavorite)=>pokefavorite.id==pokemon.id);
        if (isFavoritePokemon) {setShowFavorite(true)}
        else {setShowFavorite(false)}


    }, [myRedux.getState().favorites]);
    
    
    
    
    function HandleAddFavorite(){
        
        dispatch(favoriteActions.addFavorite({name: pokemon.name, id: pokemon.id, types: pokemon.types}))
    }
    function HandleDeleteFavorite(){
        dispatch(favoriteActions.deleteFavorite(pokemon.id))
    }
    return (
        <div>
            {
                showFavorite ? 
                (
                    <StarIcon sx={{ color: yellow[500] }} fontSize="large" onClick={() => HandleDeleteFavorite()} />
                ):
                (<StarOutlineIcon fontSize="large" onClick={() => HandleAddFavorite()} /> )
            }
            
            
        </div>
        
        
    )
}