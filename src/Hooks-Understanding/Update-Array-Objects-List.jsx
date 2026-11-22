import { useState } from "react";

function UpdateArrayObjects() {
    const [dataArr, updateDataArr] = useState(['Payal', 'Nilam', 'Aditya', 'Subin'])
    const [dataObj, updateDataObj] = useState([
        { name: 'Payal', age: 24 },
        { name: 'Nilam', age: 49 },
        { name: 'Subin', age: 55 },
        { name: 'Aditya', age: 22 },

    ]);
    const handleListUpdate = (changedName) => {
        dataArr[dataArr.length - 1] = changedName;
        updateDataArr([...dataArr]);
        // updateDataObj((prevDataObj) => {
        //     const updated = [...prevDataObj]; // 1. New array copy
        //     updated[0] = { ...updated[0], age: newAge }; // 2. New object copy at index 0
        //     return updated;
        // });
    }

    const handleArrObjUpdate = (newAge) => {
        const newDataObj = dataObj.map((itemObj, index) => {
            return index === 0 ? { ...itemObj, age: newAge } : itemObj
        })
        updateDataObj(newDataObj)
    }
    return (
        <>
            <h1>UpdateArrayObjects Understandng !</h1>
            <input type="text" placeholder="Update Name in List..." onChange={(e) => handleListUpdate(e.target.value)} />
            <h2>Display List Values:</h2>
            <ul>
                {
                    dataArr.length > 0 ?
                        dataArr.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })
                        :
                        <li>No Data I spreset in List Empty List!</li>
                }
            </ul>
            <hr />
            <h1>UpdateArrayObjects Understandng Array of Objects!</h1>
            <input type="text" placeholder="Update Name in List..." onChange={(e) => handleArrObjUpdate(e.target.value)} />
            <h2>Display Array of Object Values:</h2>
            {
                dataObj.length > 0 ?
                    dataObj.map((item, index) => {
                        return (
                            <ul key={index}>
                                <li>{item.name}</li>
                                <li>{item.age}</li>
                            </ul>
                        )
                    })
                    :
                    <li>No Data Is preset in Data Object Empty List!</li>
            }

        </>
    )
}

export default UpdateArrayObjects;