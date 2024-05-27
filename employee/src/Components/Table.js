import React from 'react'
import "./Table.css"
const Table = ({employees}) => {
  return (
      <table className="table">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Designation</th>
          <th>No. of hours worked</th>
          <th>Changes</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <tr key={index}>
            <td>{employee.rank}</td>
            <td>{employee.name}</td>
            <td>{employee.des}</td>
            <td>{employee.hoursWorked}</td>
            <td>{employee.changes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
