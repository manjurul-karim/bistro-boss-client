import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaUsers, FaWallet, FaTruck } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Sector,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const AdminHome = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin"],
    queryFn: async () => {
      const res = await axiosSecure("/admin-stats");
      return res.data;
    },
  });

  const { data: chartData = [] } = useQuery({
    queryKey: ["chart-data"],
    queryFn: async () => {
      const res = await axiosSecure("/order-stats");
      return res.data;
    },
  });

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  //   pie chart

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div className="w-full m-4">
      <h2 className="text-3xl">
        hi! Welcome Back!{" "}
        <span className="font-bold underline shadow-xl">
          {user.displayName}
        </span>
      </h2>

      <div className="mx-auto space-x-3 mt-4">
        <div className="stats shadow rounded-md text-white  bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF]">
          <div className="stat w-[200px]">
            <div className="flex items-center justify-around gap-2">
              <div className="text-[40px]">
                <FaWallet></FaWallet>
              </div>
              <div>
                {" "}
                <div className="">${stats.revenue}</div>
                <div className="">Revenue</div>
              </div>
            </div>
          </div>
        </div>
        <div className="stats shadow rounded-md  text-white  bg-gradient-to-r from-[#D3A256] to-[#FDE8C0]">
          <div className="stat w-[200px]">
            <div className="flex items-center justify-around gap-2">
              <div className="text-[40px]">
                <FaUsers></FaUsers>
              </div>
              <div>
                {" "}
                <div className="">{stats.users}</div>
                <div className="">Users</div>
              </div>
            </div>
          </div>
        </div>
        <div className="stats shadow rounded-md  text-white  bg-gradient-to-r from-[#FE4880] to-[#FECDE9]">
          <div className="stat w-[200px]">
            <div className="flex items-center justify-around gap-2">
              <div className="text-[40px]">
                <ImSpoonKnife></ImSpoonKnife>
              </div>
              <div>
                {" "}
                <div className="">{stats.products}</div>
                <div className="">Menu Item</div>
              </div>
            </div>
          </div>
        </div>
        <div className="stats shadow rounded-md  text-white  bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF]">
          <div className="stat w-[200px]">
            <div className="flex items-center justify-around gap-2">
              <div className="text-[40px]">
                <FaTruck></FaTruck>
              </div>
              <div>
                {" "}
                <div className="">{stats.orders}</div>
                <div className="">Orders</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2">
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="total"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div className="w-1/2">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Legend/>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="count"
              >
                {chartData.map((entry, index) => (
                  <Cell name={entry.category}
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
