import React from 'react'

const TableRow = ({employee}) => {
    return (
        <tr>
            <td>{employee.name.first}</td>
            <td>{employee.name.last}</td>
            <td>{employee.dob.date.slice(0,10)}</td>
            <td>{employee.email}</td>
            <td>{employee.phone}</td>
        </tr>
    )
}

export default TableRow
