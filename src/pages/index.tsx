import AddTask from "../components/AddTask/AddTask";
import CreatedTasks from "../components/ZoneTask/CreatedTasks";
import Header from "../components/Header/Header";
import Task from "../components/ZoneTask/Task";

// const tasks = [{
//   description: "Fazer exercício de JS",
// },
// {
//   description: "Outro",
// }]



export default function Home() {
  return (
    <div>
      <Header />
      <AddTask />
      {/* <CreatedTasks /> */}
      </div>
  )
}