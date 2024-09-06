import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

// Reusable Line Chart Component
const LineChartComponent = ({ chartData, xKey, yKey1, yKey2, yKey3 }) => {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <LineChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xKey} />
        <YAxis />
        <Line type="monotone" dataKey={yKey1} stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey={yKey2} stroke="#82ca9d" />
        <Line type="monotone" dataKey={yKey3} stroke="#ffc658" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;