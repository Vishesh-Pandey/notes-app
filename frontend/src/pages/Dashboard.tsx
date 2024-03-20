import axios from "axios";
import { useEffect } from "react";
import Note from "../components/Note";

function Dashboard() {
  async function getNotes() {
    const response = await axios({
      method: "get",
      url: "http://localhost:3000/api/v1/note/all",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    console.log(response);
  }

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div>
      <h1>This is dashboard</h1>
      <Note />
    </div>
  );
}

export default Dashboard;
