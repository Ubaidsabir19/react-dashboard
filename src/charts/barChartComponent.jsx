import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import revenueData from '../data/revenue.json';

const BarChartComponent = () => {
  return (
    <div className="bg-white border rounded-lg p-4 flex flex-col items-center justify-center w-full">
      <h3 className="text-lg font-semibold mb-2">Monthly Revenue</h3>
      <div className="w-full">
        <BarChart
          width={window.innerWidth < 768  ? window.innerWidth - 110 : 400} 
          height={270}
          data={revenueData}
        >
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};

export default BarChartComponent;
