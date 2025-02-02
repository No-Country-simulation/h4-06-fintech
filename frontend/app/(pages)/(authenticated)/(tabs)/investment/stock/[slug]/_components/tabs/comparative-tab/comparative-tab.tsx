import FirstGraph from "./first-graph";
import SecondGraph from "./second-graph";
import ThirdGraph from "./third-graph";

export default function ComparativeTab() {
  return (
    <div className="flex flex-row gap-4 mt-5">
      <FirstGraph />
      <SecondGraph />
      <ThirdGraph />  
    </div>
  );
}
