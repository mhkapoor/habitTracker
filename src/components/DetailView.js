import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import "./button.css";
import { useSelector } from "react-redux";

const DetailView = (props) => {
  // hooks
  const habitlist = useSelector((s) => s.habit.list);

  // detail list of habits
  return (
    <Table>
      <tbody>
        {habitlist?.map((item) => {
          return (
            <tr>
              <td>
                <Form.Check type={"checkbox"} id={`default-checkbox`} />
              </td>
              <td>
                <h5>{item}</h5>{" "}
                <div className="d-flex justify-content-between">
                  <td>1 day</td>
                  <td>9 best</td>
                  <td>38/82</td>
                </div>
              </td>
              <td>10pm</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default DetailView;
