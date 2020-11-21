import React, { useState, useEffect } from 'react'
import employeeData from "../utils/Api.js"
import TableRow from "./TableRow.js"
import Search from "./Search.js"

const Table = () => {
    const [searchWord, setSearchWord] = useState("")

    const [employees, setEmployees] = useState([])
    useEffect(() => {
        setEmployees(employeeData)
    }, [])

    const filterEmployees = (term, event)=> {
    event.preventDefault()
     let result = employees.filter(employee => {
           return employee.name.firstç === term || employee.name.last === term     
        })
        setEmployees(result)
    };
    return (
        <div>
        <Search 
        searchWord = {searchWord} setSearchWord = {setSearchWord} 
        filterEmployees = {filterEmployees}/>

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
