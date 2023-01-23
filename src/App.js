import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Wrapper from "./components/Wrapper";
import leftSideMenu from "./assets/menu.png";
import weekMenu from "./assets/menu-bar.png";
import { useState } from "react";
import DetailView from "./components/DetailView";
import { useDispatch, useSelector } from "react-redux";
import { save } from "./redux/habitreducer";
import WeekView from "./components/WeekView";

function App() {
  const dispatch = useDispatch();
  useSelector((s) => console.log(s));
  const [view, setView] = useState(0);
  const habitTitle = ["Habit Tracker", "Detail View", "Week View"];
  const [habit, sethabit] = useState("");

  // habit submition
  const handleSubmit = () => {
    dispatch(save(habit));

    alert("Successfully Added");
    sethabit("");
  };
  // inital Component
  return (
    <Wrapper>
      {view != 0 && (
        <div className="back-btn" onClick={() => setView(0)}>
          Back
        </div>
      )}
      <div className="title-wrapper d-flex">
        <img
          src={weekMenu}
          alt="Week View"
          onClick={() => {
            setView(2);
          }}
        ></img>
        <h4>{habitTitle[view]}</h4>
        <img
          src={leftSideMenu}
          alt="Details View"
          onClick={() => setView(1)}
        ></img>
      </div>

        {/* for adding habits    */}
      {view == 0 && (
        <>
          <Input
            placeholder={"Enter your habit"}
            label={`Enter your habit`}
            className={"habit-input d-flex flex-column m-10"}
            value={habit}
            onChange={(e) => {
              sethabit(e.target.value);
            }}
          ></Input>
          <Button
            value={"Submit"}
            className={"habit-btn"}
            onClick={handleSubmit}
          ></Button>
        </>
      )}

      {/* for showing detail View */}
      {view == 1 && (
        <>
          <DetailView />
        </>
      )}

      {/* for showing week view */}
      {view == 2 && (
        <>
          <WeekView />
        </>
      )}
    </Wrapper>
  );
}

export default App;
