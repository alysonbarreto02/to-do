import AddTask from "../components/AddTask/AddTask";
import CreatedTasks from "../components/ZoneTask/CreatedTasks";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <AddTask />
      <CreatedTasks />
    </div>
  )
}