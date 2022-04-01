import Header from "./components/Header";
import Button from "./components/Button";
import Tasks from "./components/Tasks";

function App() {
  let tasks = [
    {
      id: 1,
      text: "Doctor's appointment",
      time: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Board meeting",
      time: "May 8th at 7:40pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Church fellowship",
      time: "Sep 3rd at 11:00pm",
      reminder: false,
    },
  ];

  // function clicked() {
  //   // if (this.reminder) {
  //   //   this.reminder = !this.reminder;
  //   //   return;
  //   // }
  //   console.log("clicked");
  // }

  return (
    <div className="container">
      <div className="header">
        <Header /> <Button color="green" text="Add" />
      </div>

      <Tasks allTasks={tasks} />
    </div>
  );
}

export default App;
