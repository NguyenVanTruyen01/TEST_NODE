import React, { useEffect, useState } from 'react'
import './Customers.scss'
import IonIcon from '@reacticons/ionicons';

const Customers = ({ customers }) => {

    return (
        <div className='TableCustomers'>

            <div className='sort_icon'>
                <IonIcon className='icon' name="caret-up-outline" size="large" onClick={handleUp} />
                <IonIcon className='icon' name="caret-down-outline" size="large" onClick={handleDown} />
            </div>
            <table>

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Company Name</th>
                        <th>Contact Name</th>
                        <th>Contact Title</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Country</th>
                        <th>Phone</th>
                        <th>Fax</th>
                    </tr>
                </thead>

                <tbody>

                    {!customers || customers === [] ?
                        <tr> <td style={{ color: "red" }}>No data</td></tr>
                        :
                        customers.map((customer) => {
                            return <tr key={customer.customerId}>
                                <td><a href="#">{customer.customerId}</a></td>
                                <td>{customer.companyName}</td>
                                <td>{customer.contactName}</td>
                                <td>{customer.contactTitle}</td>
                                <td>{customer.address}</td>
                                <td>{customer.city}</td>
                                <td>{customer.country}</td>
                                <td>{customer.phone}</td>
                                <td>{customer.fax}</td>
                            </tr>
                        })
                    }


                </tbody>
            </table>
        </div>
    )
}

export default Customers
