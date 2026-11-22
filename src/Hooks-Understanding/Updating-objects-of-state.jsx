import { useState } from 'react'

function UpdateObjState() {
    const [dataObj, updateObj] = useState({
        name: 'Payal',
        address: {
            city: 'Kolkata',
            country: 'India'
        }
    })
    const handleUpdateName = (updatedName) => {
        // updateObj({name:updatedName}) --> it will destroy teh entire Objects
        dataObj.name = updatedName;
        updateObj({ ...dataObj })
    }

    const handleUpdateCity = (cityName) => {
        dataObj.address.city = cityName;
        updateObj({ ...dataObj, address: { ...dataObj.address, cityName } })
    }
    return (
        <>
            <h1>Updaing Object of Object of teh state!</h1>
            <input type="text" placeholder="Enter Name to Update..." onChange={(e) => handleUpdateName(e.target.value)} />
            <br /><br />
            <input type="text" placeholder="Enter City to Update..." onChange={(e) => handleUpdateCity(e.target.value)} />

            <h4>Name: {dataObj.name}</h4>
            <h4>City: {dataObj.address.city}</h4>
            <h4>Country: {dataObj.address.country}</h4>

        </>
    )
}
export default UpdateObjState;