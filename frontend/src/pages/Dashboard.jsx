import { useEffect, useState } from "react";
import { getDashboard } from "../api";

export default function Dashboard({ token }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    getDashboard(token).then(setData);
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {data && (
        <>
          <p>{data.message}</p>
          <p>Steps: {data.steps}</p>
          <p>Calories: {data.calories}</p>
        </>
      )}
    </div>
  );
}