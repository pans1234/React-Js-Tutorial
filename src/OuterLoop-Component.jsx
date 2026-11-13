import { InnerLoopJsx } from './InnerLoopJsx'
const OuterLoopComponent = ({ college }) => {
    return (
        <>
            <div style={{
                color: "#000",
                borderBottom: "blue",
                width: "400px",
                backgroundColor: "#ccc",
                padding: "10px"
            }}>
                <h1>{college.name}</h1>
                <ul>
                    <li>{college.city}</li>
                    <li>{college.website}</li>
                    <table border="1">
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Age</td>
                            </tr>
                        </thead>
                        {
                            college.student.map((stuObj, index) => {
                                return (
                                    <>
                                        <tbody>
                                            <InnerLoopJsx key={index} student={stuObj} />
                                        </tbody>
                                    </>
                                )
                            })
                        }
                    </table>
                </ul>
            </div>
            <hr />
            <br />
        </>
    )
}

export default OuterLoopComponent;
