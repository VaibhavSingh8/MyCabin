import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export function SalesChart({ bookings, numberOfDays }) {
  const allDates = eachDayOfInterval({
    start: subDays(new Date(), numberOfDays - 1),
    end: new Date(),
  });

  const data = allDates?.map((date) => {
    return {
      label: format(date, "MMM dd"),
      totalSales: bookings.documents
        .filter((booking) => isSameDay(date, new Date(booking?.$createdAt)))
        .reduce((acc, curr) => acc + curr.totalPrice, 0),
      extrasSales: bookings.documents
        .filter((booking) => isSameDay(date, new Date(booking?.$createdAt)))
        .reduce((acc, curr) => acc + curr.extrasPrice, 0),
    };
  });

  const colors = {
    totalSales: { stroke: "#4f46e5", fill: "#c7d2fe" },
    extrasSales: { stroke: "#16a34a", fill: "#dcfce7" },
    text: "#374151",
    background: "#fff",
  };

  return (
    <div className=" bg-white border border-gray-100 rounded-md p-12 flex flex-col gap-10 col-span-full">
      <h2 className=" font-semibold text-xl text-[#374151]">
        Sales from {format(allDates.at(0), "MMM dd yyyy")} &mdash;{" "}
        {format(allDates.at(-1), "MMM dd yyyy")}
      </h2>
      <ResponsiveContainer height={300} width="100%">
        <AreaChart data={data}>
          <XAxis
            dataKey="label"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <YAxis
            unit="INR"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <CartesianGrid />
          <Tooltip contentStyle={{ backgroundColor: colors.background }} />
          <Area
            dataKey="totalSales"
            type="monotone"
            stroke={colors.totalSales.stroke}
            fill={colors.totalSales.fill}
            strokeWidth={2}
            name="Total Sales"
            unit=" INR"
          />
          <Area
            dataKey="extrasSales"
            type="monotone"
            stroke={colors.extrasSales.stroke}
            fill={colors.extrasSales.fill}
            strokeWidth={2}
            name="Extras Sales"
            unit=" INR"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
