import { useState } from 'react'

function InlineCssRecat() {
    const [isDisplay, toggleGrid] = useState(true)
    const handleGridTocol = () => {
        toggleGrid(!isDisplay)

    }

    // blow is the ore cleaner as i just change thecontainer inline css and use it as an object in style property of jsx
    // style expects an object to showcase the css style

    const containerStyle = {
        display: isDisplay ? "flex" : "block",
        // Below Line is Important beacuse of this you can modify the flexDirection based upon teh row or column
        // flexDirection property both will work above line nad below line 
        // flexDirection: isDisplay ? "row" : "column",
        flexWrap: "wrap"
    }

    const cardStyle = {
        border: "2px solid red",
        margin: "10px",
        padding: "15px",
        width: "230px",
        display: "flex",
        flexWrap: "wrap"
    }

    const imgStyle = {
        width: "200px",
        height: "200px"
    }

    return (
        <>
            <div style={containerStyle}>
                <div style={cardStyle}>
                    <div>
                        <img
                            style={imgStyle}
                            src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
                            alt="image not loaded" />
                    </div>
                    <div>
                        <h4>Name: Payal jain</h4>
                        <h6>Role: SoftWare Developer</h6>
                    </div>
                </div>
                <div style={cardStyle}>
                    <div>
                        <img
                            style={imgStyle}
                            src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
                            alt="image not loaded" />
                    </div>
                    <div>
                        <h4>Name: Payal jain</h4>
                        <h6>Role: SoftWare Developer</h6>
                    </div>
                </div>
                <div style={cardStyle}>
                    <div>
                        <img
                            style={imgStyle}
                            src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
                            alt="image not loaded" />
                    </div>
                    <div>
                        <h4>Name: Payal jain</h4>
                        <h6>Role: SoftWare Developer</h6>
                    </div>
                </div>
                <div style={cardStyle}>
                    <div>
                        <img
                            style={imgStyle}
                            src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
                            alt="image not loaded" />
                    </div>
                    <div>
                        <h4>Name: Payal jain</h4>
                        <h6>Role: SoftWare Developer</h6>
                    </div>
                </div>
            </div>
            <button onClick={() => handleGridTocol()}>Toggle Grid to Colum</button>
        </>
    )
}

export default InlineCssRecat;