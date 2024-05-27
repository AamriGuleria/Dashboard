import React from 'react'
import "./MonthlyEmployee.css"
const MonthlyEmployee = ({employee}) => {
  return (
      <div className="monthly-employee">
      <img className="employee-image"  src="https://imgs.search.brave.com/1L3VxGJM_FS3YPFqQaQGksUgXFrPsUBXiIWk8-SFMc8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9paDEu/cmVkYnViYmxlLm5l/dC9pbWFnZS4yNTQz/MTM3OTMxLjgzMTcv/c3NyY28sYmFzZWJh/bGxfY2FwLG1lbnMs/QjdCNEI4OjI1Yzhm/YzZhNGMsZnJvbnRf/dGhyZWVfcXVhcnRl/cix0YWxsX3BvcnRy/YWl0LDc1MHgxMDAw/LWJnLGY4ZjhmOC51/Ni5qcGc" />
      <h2 >Employee of the Month</h2>
      <p>{employee.name}</p>
      <span>{employee.designation}</span>
    </div>
  )
}

export default MonthlyEmployee
