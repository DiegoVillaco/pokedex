import { useStore } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box'
import MyFavoritePokemons from './Grid';





function PageNotFoundComponent() {
    let myRedux = useStore();
    const myFavoritesList = myRedux.getState().favorites;


    console.log(Array.from(myFavoritesList));
    return (
        <>

            <h1>

                My Favorites
            </h1>
            
            <div>
               
               
                <MyFavoritePokemons myFavoritesList={myFavoritesList}/>
            </div>
        </>
    )
}
export default PageNotFoundComponent;
