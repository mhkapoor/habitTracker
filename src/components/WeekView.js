import React from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { weekSelect } from "../redux/habitreducer";

const WeekView = () => {
  // hooks  
  const { list, week } = useSelector((s) => s.habit);
  const dispatch = useDispatch();

  // dropdown for selecting the three states-- done/not done/None
  function dropDownMenu(item, index, iName) {
    const handleChange = (e) => {
      let data = [];
      if (
        week[iName] == undefined ||
        Object.keys(week).length == 0 ||
        week == undefined
      ) {
        data[index] = e.target.value;
        dispatch(weekSelect({ ...(week || {}), [iName]: data }));
      } else {
        data = [...week[iName]];
        console.log(data);
        data[index] = e.target.value;
        dispatch(weekSelect({ ...week, [iName]: data }));
      }
    };
    return (
      <select
        name={item}
        id={item}
        defaultValue={week[iName] && week[iName][index]}
        onChange={(e) => handleChange(e)}
      >
        <option value="Done">Done</option>
        <option value="Not done">Not done</option>
        <option value="None">None</option>
      </select>
    );
  }
  const weeks = ["sun", "mon", "tues", "wed", "thur", "fri", "sat"];
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sun</th>
          <th>Mon</th>
          <th>Tues</th>
          <th>Wed</th>
          <th>Thur</th>
          <th>Fri</th>
          <th>Sat</th>
        </tr>
      </thead>
      <tbody>
        {list?.map((item) => {
          return (
            <>
              <td>{item}</td>
              <tr>
                {weeks?.map((doc, index) => {
                  return (
                    <td key={index} id={doc}>
                      {dropDownMenu(doc, index, item)}
                    </td>
                  );
                })}
              </tr>
            </>
          );
        })}
      </tbody>
    </Table>
  );
};

export default WeekView;
