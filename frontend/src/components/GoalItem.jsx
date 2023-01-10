import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goals/goalSlice";

const GoalItem = ({ goal }) => {
  console.log("in goalitem", goal);
  const dispacth = useDispatch();
  return (
    <div className="goal">
      <div>{new Date(goal.createdAt).toLocaleString("en-IN")}</div>
      <h2>{goal.text}</h2>
      <button className="close" onClick={() => dispacth(deleteGoal(goal.id))}>
        X
      </button>
    </div>
  );
};

export default GoalItem;
