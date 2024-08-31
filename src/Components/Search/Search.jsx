import React, { useContext, memo } from 'react';
import Classes from './Search.module.css';
import { NewsDataContext } from '../Starter/StarterFile';


const SearchBar = () => {
    
    const {search, handleSearchInput} = useContext(NewsDataContext)

    return (
        <div className={Classes.searchContainer}>
            <input
                type="text"
                placeholder="Search News"
                value={search}
                onChange={handleSearchInput}
                className={Classes.searchInput}
            />
        </div>
    );
};

export default memo(SearchBar);
