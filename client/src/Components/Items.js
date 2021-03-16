import React, { useEffect, useState } from 'react'
import axios from 'axios'



const Items =()=>{
    useEffect(()=>{
        getItems()
    },[])

    const [items, setItems] = useState([])

    const getItems = async () => {
        try{
            let res = await axios.get('/api/items')
            setItems(res.data)
        } catch(err){
            alert('error, you have made')
        }
    }

    const renderItems = () => {
        return items.map ( item => {
            return (
                <div>
                    <h1>{item.name}</h1>
                </div>
            )
        }
            )
    }
    return(
        <div>
    
    {renderItems()}    
    </div>
    )

}

export default Items