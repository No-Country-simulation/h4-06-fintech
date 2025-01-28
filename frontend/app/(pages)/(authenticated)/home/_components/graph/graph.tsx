import { MyInvesmentsChartComponent } from "./my-invesment";
import { MonthlyActivityChartComponent } from "./monthly-activity";
import { ExpensesChartComponent } from "./expenses";

export function GraphComponent() {
  return (
    <section className='w-full flex justify-center flex-row gap-10'>
      <MonthlyActivityChartComponent />
      <MyInvesmentsChartComponent />
      <ExpensesChartComponent />
    </section>
  );
}
