import { TaskBar } from "./components/TaskBar";
import { DescriptionCard } from "./components/DescriptionCard";

function App() {
  return (
    <div className="max-w-2xl mx-auto">
      <TaskBar color="red" />
      <DescriptionCard />
    </div>
  );
}

export default App;
