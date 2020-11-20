import React, {useState} from 'react'
import api from "../utils/Api.js"
import TableRow from "./TableRow.js"
const Table = () => {
    const [employees, setEmployees] = useState([])
    const getData = async () => {
        const result = await api.getRandomUser()
        setEmployees(result.data.results)
    }
    return (
        <div>
            <button onClick={getData}>Get Data</button>
            <table>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Birthdate</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                </tr>
                <tbody>
                    {employees.map(employee => {
                        return <TableRow employee = {employee}/>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table
