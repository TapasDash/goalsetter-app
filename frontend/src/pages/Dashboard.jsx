import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import GoalForm from "../components/GoalForm";
import GoalItem from "../components/GoalItem";
import Spinner from "../components/Spinner";
import { getGoals, reset } from "../features/goals/goalSlice";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { goals, isError, isLoading, message } = useSelector(
    (state) => state.goals
  );
  useEffect(() => {
    if (isError) console.error(message);

    if (!user) navigate("/login");

    dispatch(getGoals());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, dispatch]);

  if (isLoading) return <Spinner />;
  console.log(goals, "jj");
  return (
    <>
      <section className="heading">
        <h1> Welcome {user && user.name}</h1>
      </section>
      <GoalForm />
      <section className="content">
        {goals.length > 0 ? (
          goals.map((goal) => <GoalItem key={goal.id} goal={goal} />)
        ) : (
          <h2>You do have set any goals!</h2>
        )}
      </section>
    </>
  );
};

export default Dashboard;
