import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await axios.get('http://localhost:5100/api/items');
            setItems(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Items:</h1>
           
        </div>
    );
};

export default App;
