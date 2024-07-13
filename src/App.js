import "./App.css";
import {
  ResponsiveContainer,
  CartesianGrid,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
} from "recharts";
const langdata = [
  {
    Programming_Language: "Java",
    Market_Share: 15.52,
    Trend: 0.6,
  },
  {
    Programming_Language: "Python",
    Market_Share: 28.11,
    Trend: 0.6,
  },
  {
    Programming_Language: "JavaScript",
    Market_Share: 8.57,
    Trend: 0.6,
  },
  {
    Programming_Language: "PHP",
    Market_Share: 4.57,
    Trend: 0.6,
  },
  {
    Programming_Language: "TypeScript",
    Market_Share: 2.78,
    Trend: -0.0,
  },
  {
    Programming_Language: "C#",
    Market_Share: 6.73,
    Trend: -0.1,
  },
  {
    Programming_Language: "Rust",
    Market_Share: 2.23,
    Trend: -0.3,
  },
  {
    Programming_Language: "Dart",
    Market_Share: 0.98,
    Trend: -0.2,
  },
];

function App() {
  return (
    <>
      <div className="text-cyan-950 text-2xl text-center">Chart View</div>
      <ResponsiveContainer width="100%" aspect={3} className="p-10">
        <LineChart data={langdata}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="Programming_Language"
            tickFormatter={(value) => value + " Programing"}
          />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: "#FDFEFE" }} />
          <Legend />
          <Line dataKey="Market_Share" stroke="green" activeDot={{ r: 7 }} />
          <Line dataKey="Trend" stroke="blue" activeDot={{ r: 7 }} />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default App;
