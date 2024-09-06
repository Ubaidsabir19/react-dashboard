import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import studentData from '../data/playersAge.json';

const PieChartComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(studentData);
  }, []);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF66C4'];

  return (
    <div className="bg-white border rounded-lg p-4 flex flex-col items-center justify-center w-full sm:w-80">
      <h3 className="text-md font-semibold mb-4">Players Age Distribution</h3>
      <PieChart width={300} height={270} className="w-full">
        <Pie data={data} dataKey="value" outerRadius={80} fill="#8884d8" label>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default PieChartComponent;
