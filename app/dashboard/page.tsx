import demo from './demo'
const ade = function BarChart() {
  return (
    <div>
      <h1>Bar Chart</h1>
    </div>
  );
};

export default function PieChart() {
  return (
    <div>
      <div>{ade()}</div>
      {/* display demo */}
      <div>{demo()}</div>
    </div>
  );
}
