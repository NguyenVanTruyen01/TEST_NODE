import React from 'react'
import './Home.scss'
import Search from '../Components/Search/Search'
import Customers from '../Components/Customers/Customers'
import { useEffect, useState } from 'react'
import * as CustomersApi from '../API/CustomerApi.js';

const Home = () => {

    const [customers, setCustomers] = useState([]);
    const [optionFS, setOptionFS] = useState("customerId");
    const [keySearch, setKeySearch] = useState("");

    const handleChangeOptionFS = (option) => {
        setOptionFS(option)
    }

    const handleChangeKeySearch = (key) => {
        setKeySearch(key)
    }

    const handleSetCustomer = (customer) => {
        setCustomers(customer)
    }

    const searchCustomers = async () => {
        const { data } = await CustomersApi.getListCustomer();
        let txtSearch = keySearch.trim();
        if (txtSearch !== "") {
            if (optionFS === "customerId") {
                const cloneCustomer = data.filter((customer) => customer.customerId === txtSearch.toUpperCase());
                // const { data } = await CustomersApi.getCustomerById(keySearch.trim());
                // setCustomers([data]);
                setCustomers(cloneCustomer)
            }
            else if (optionFS === "phone") {
                // const cloneCustomer = [...customers].filter((customer) => customer.phone === txtSearch);
                const cloneCustomer = data.filter((customer) => customer.phone === txtSearch);
                setCustomers(cloneCustomer)
            }

            else if (optionFS === "address") {
                const cloneCustomer = data.filter((customer) => customer.address.indexOf(txtSearch) !== -1);
                setCustomers(cloneCustomer)
            }
            else {
                const cloneCustomer = data.filter((customer) => customer.companyName.indexOf(txtSearch) !== -1);
                setCustomers(cloneCustomer)
            }
        }
        else {
            alert("Please enter keyword search !!!")
        }


    }

    useEffect(() => {
        const fetchCustomers = async () => {
            const { data } = await CustomersApi.getListCustomer();
            setCustomers(data);
        }
        fetchCustomers()
    }, [])
    return (
        <div className='HomePage'>
            <Search
                handleChangeOptionFS={handleChangeOptionFS}
                handleChangeKeySearch={handleChangeKeySearch}
                searchCustomers={searchCustomers} />

            <Customers
                customers={customers}
                setCustomers={handleSetCustomer}
                optionFS={optionFS} />
        </div>

    )
}

export default Home
