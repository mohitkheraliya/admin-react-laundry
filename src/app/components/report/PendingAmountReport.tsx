import React, { useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { useGetPendingAmountData } from "../../hooks";

const PendingAmountReport: React.FC = () => {
  const { pendingAmountData, fetchPendingAmountData } =
    useGetPendingAmountData();

  useEffect(() => {
    fetchPendingAmountData();
  }, []);

  const totalAmounts = pendingAmountData?.reduce(
    (sum: number, item: any) => sum + item.total_amount,
    0
  ) || 0;

  const pendingAmounts = pendingAmountData?.reduce(
    (sum: number, item: any) => sum + item.pending_amount,
    0
  ) || 0;
  
  const chartOptions = {
    chart: {
      type: "pie",
    },
    labels: ["Total Amount", "Pending Amount"],
    colors: ["#34a853", "#fbbc04"],
    legend: {
      position: "bottom",
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: (value: number) => `${value}`,
      },
    },
  };

  const chartSeries = [totalAmounts, pendingAmounts];

  return (
    <div className="col-span-2">
      <div className="card w-full">
        <div className="card-header">
          <h3 className="card-title">Pending Amount Report</h3>
        </div>

        <div className="card-body grid gap-1">
          <ReactApexChart
            options={chartOptions}
            series={chartSeries}
            type="pie"
            height={250}
          />
        </div>
      </div>
    </div>
  );
};

export default PendingAmountReport;
