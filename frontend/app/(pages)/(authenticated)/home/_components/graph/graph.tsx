import { MyInvesmentsChartComponent } from "./my-invesment";
import { MonthlyActivityChartComponent } from "./monthly-activity";
import { ExpensesChartComponent } from "./expenses";

export function GraphComponent() {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full'>
      <MonthlyActivityChartComponent />
      <MyInvesmentsChartComponent />
      <ExpensesChartComponent />
    </section>
  );
}
