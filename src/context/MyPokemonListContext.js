import React, { useEffect, useState, createContext } from 'react';

export const MyPokemonListContext = createContext();

export const MyPokeListProvider = (props) => {

    const [pokeDex, setPokeDex] = useState([]);

    useEffect(() => {
        const pokeDexStore = JSON.parse(localStorage.getItem('pokepediaAppLocalStorage'))
        if(pokeDexStore) {
            setPokeDex(pokeDexStore);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('pokepediaAppLocalStorage', JSON.stringify(pokeDex))
    }, [pokeDex]);
    
    return(

        <MyPokemonListContext.Provider value={[pokeDex, setPokeDex]}>
            {props.children}
        </MyPokemonListContext.Provider>
        
    );

}