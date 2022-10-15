import React from 'react'
import './Search.scss'
import { UilSearch } from '@iconscout/react-unicons'
import { useState } from 'react'

const Search = ({ handleChangeOptionFS, handleChangeKeySearch, searchCustomers }) => {


    const handleChangeOption = (e) => {
        handleChangeOptionFS(e.target.value);
    }

    const handleChangeText = (e) => {
        handleChangeKeySearch(e.target.value);
    }



    return (
        <div className='Search-Sort'>
            <div className="Search">
                <input type="text" placeholder='Search'
                    onChange={(e) => handleChangeText(e)}></input>
                <div className="search-icon" onClick={searchCustomers}>
                    <UilSearch />
                </div>
            </div>

            <div className='Sort'>
                <select data-trigger=""
                    name="choices-single-defaul"
                    className='choices'
                    onChange={(e) => handleChangeOption(e)}>
                    <option value="customerId" placeholder="">ID</option>
                    <option value="companyName">Company name</option>
                    <option value="address">Address</option>
                    <option value="phone">Phone</option>
                </select>
            </div>
        </div >
    )
}

export default Search
