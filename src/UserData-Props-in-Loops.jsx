// Remember in style of jSX where we need to amke everything in string
// 2. make sure tehre wil be comma instead of semicolon
// 3. style={{then write style here}}
// 4. we use Camel case Instead of small case and no - instead all user camel Case liek border-radius use as borderRadius
const UsreDataPropsLoopJsx = ({ userObj }) => {
    return (
        <div style={{
            border: "1px solid purple",
            borderRadius: "25px",
            width: "400px",
            margin: "77px",
            padding: "14px",
        }}
        >
            <p>Name: <span style={{ color: "green" }}>{userObj.name}</span></p>
            <p>Email: <span style={{ color: "red" }}>{userObj.email}</span></p>
            <p>Age: <span style={{ color: "blue" }}>{userObj.age}</span></p>
        </div>
    )
}

export default UsreDataPropsLoopJsx;