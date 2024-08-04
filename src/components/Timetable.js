import React from 'react'

const Timetable = () => {
  return (
    <div>
      <h1>TIMETABLE FOR ODD SEM (2024-2025)</h1>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Time / Day</th>
            <th scope="col">Hour 1</th>
            <th scope="col">Hour 2</th>
            <th scope="col">Hour 3</th>
            <th scope="col">Hour 4</th>
            <th scope="col">Hour 5</th>
            <th scope="col">Hour 6</th>
            <th scope="col">Hour 7</th>
            <th scope="col">Hour 8</th>
            <th scope="col">Hour 9</th>
            <th scope="col">Hour 10</th>
            <th scope="col">Hour 11</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-active">
            <th scope="row">Monday</th>
            <td className="table-primary">AOOP-E005-L</td>
            <td></td>
            <td></td>
            <td></td>
            <td className="table-primary">AIML-C321B-L</td>
            <td></td>
            <td className="table-info">MSWD-C406-L</td>
            <td></td>
            <td className="table-danger">DBMS-C410-L</td>
            <td></td>
            <td></td>
          </tr>
          <tr className="table-active">
            <th scope="row">Tuesday</th>
            <td></td>
            <td className="table-danger">DBMS-C407-L</td>
            <td></td>
            <td></td>
            <td></td>
            <td className="table-warning">PSQT-C307-L</td>
            <td></td>
            <td className="table-info">LAA-C317B-P</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="table-active">
            <th scope="row">Wednesday</th>
            <td></td>
            <td></td>
            <td className="table-primary">AIML-MCAD LAB-P</td>
            <td></td>
            <td></td>
            <td></td>
            <td className="table-warning">MSWD-C017-P</td>
            <td></td>
            <td></td>
            <td className="table-primary">AOOP-E005-S</td>
            <td className="table-primary">AOOP-E007-S</td>
          </tr>
          <tr className="table-active">
            <th scope="row">Thursday</th>
            <td></td>
            <td></td>
            <td></td>
            <td className="table-info">LAA-M304-S</td>
            <td></td>
            <td></td>
            <td className="table-primary">AOOP-C219-P</td>
            <td className="table-warning">MSWD-C406-S</td>
            <td></td>
            <td className="table-primary">AOOP-E005-L</td>
            <td className="table-secondary">SIL-FELAB</td>
          </tr>
          <tr className="table-active">
            <th scope="row">Friday</th>
            <td></td>
            <td></td>
            <td></td>
            <td className="table-success">PSQT-C506-T</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className="table-primary">AOOP-E007-S</td>
            <td></td>
            <td className="table-danger">AIML-C406-L</td>
          </tr>
          <tr className="table-danger">
            <th scope="row">Saturday</th>
            <td colSpan="11" style={{ textAlign: 'center'}}>Branch Holiday FOR CLUSTER 1 STUDENTS</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Timetable
