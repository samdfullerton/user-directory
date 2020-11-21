import React, { useState, useEffect } from 'react'
import employeeData from "../utils/Api.js"
import TableRow from "./TableRow.js"

const Table = () => {
    const [employees, setEmployees] = useState([])
    useEffect(() => {
        setEmployees(employeeData)
    }, [employees])

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Birthdate</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                </tr>
                </thead>
                <tbody>
                    {employees.map((employee, index) => {
                        return <TableRow employee={employee} key = {index} />
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table
