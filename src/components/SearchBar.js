import React, {useState} from 'react';

import './SearchBar.scss';
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = ({filterProductosInput}) => {
    const [valorDelInput, setValorDelInput] = useState("")

    const handleChange = (e) => {
        setValorDelInput(e.target.value)
        filterProductosInput(e.target.value)

    }

    return (
        <div className="searchBar">
            <div className="searchBar__icon"> 
                <SearchIcon className="search"/>
            </div>
        <input 
        className="searchBar__input"
        type="text" 
        value={valorDelInput} 
        onChange={handleChange}/>

        </div>
    )
}

export default SearchBar;