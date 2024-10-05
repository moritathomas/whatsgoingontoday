// src/App.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchItems = async () => {
	    setIsLoading(true)
            const response = await axios.get('http://localhost:8000/');
            console.log(response.data)
	    setItems(response.data);
	    setIsLoading(false)
        };

        fetchItems();
    }, []);

    return (
        <div>
            <h1>Whatsgoingonto.day</h1>
	    {
		    isLoading 
		    ? 
		    "loading..." 
		    : 
		    <ul>
		    	{items.map((item) => (
				<li key={item.id}>{item.title}</li>
			    ))}
		    </ul>
	    }
        </div>
    );
}

export default App;

