import FirstGraph from './first-graph';
import SecondGraph from './second-graph';
import ThirdGraph from './third-graph';


export default function RisksTab() {
  return (
    <div className='mt-5 flex flex-row gap-4'>
      <FirstGraph />
      <SecondGraph />
      <ThirdGraph />
    </div>
  );
}
