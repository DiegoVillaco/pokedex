import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import  Box  from "@mui/material/Box";

function MyFavoritePokemons ({myFavoritesList}){
    const columns = 
    [
        { field: 'id', headerName: 'ID', width: 90 },
        {field: 'name', headerName: 'Pokemon Name', width: 150, editable: true,},
        {field: 'type',headerName: 'Pokemon Type', width: 150, editable: true,}
    ];
    const rows = myFavoritesList.map((pokemon)=>({
        id: pokemon.id,
        name: pokemon.name,
        type: pokemon.types?.map(ty=>{
            return " " + ty.type.name
        }),
    }));

    return (
        <Box sx={{height:450, width: '100%'}}>
          <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
        </Box>
    )
}
export default MyFavoritePokemons;