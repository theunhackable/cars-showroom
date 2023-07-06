"use client"
import React, { useEffect } from 'react'
import SearchManufacturer from './SearchManufacturer ';
import { useState } from 'react';

const SearchBar = () => {

    const [manufacturer, setManufacturer] = useState('');
    const handleSearch = () => {

    }
  return (
    <form action="" onSubmit={handleSearch} className="serachbar">
        <div className="searchbar__item">
            <SearchManufacturer
                manufacturer={manufacturer}
                setManufacturer={setManufacturer}
            />
        </div>
    </form>
  )
}

export default SearchBar