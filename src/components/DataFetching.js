import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching() {

    const [data, getData] = useState([])

    useEffect(() => {
        axios
        .get('https://reqres.in/api/users')
        .then(result =>{
            console.log(result)
            getData(result.data.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
console.log(data);
    return (
            <div>
                <ul>
                    {
                        data.map(user => {
                            <li key={user.id}>{user.email}</li>
                        })
                    }
                </ul>
            </div>
    );
}

export default DataFetching;