import React, { useState, useEffect } from 'react';
import { useMutation } from 'react-query';
import LineChart from '../../components/LineChart';
import { getCharts } from './api';
import './overview.scss';

const Overview = () => {
  const [installData, setInstallData] = useState([]);
  const [revenueData, setRevenueData] = useState([]);

  const [fetchChartData, { isSuccess, data }] = useMutation(getCharts);

  useEffect(() => {
    fetchChartData();
  }, []);

  useEffect(() => {
    if (isSuccess) {
      if (data?.installs) {
        let newInstalls = [];
        data.installs.forEach((e) => newInstalls.push([e.day, e.value]));
        setInstallData(newInstalls);
      }
      if (data?.revenue) {
        let newRevenue = [];
        data.revenue.forEach((e) => newRevenue.push([e.day, e.value]));
        setRevenueData(newRevenue);
      }
    }
  }, [isSuccess]);

  return (
    <div className="overview-chart-contaienr">
      <LineChart yAxisTitle="installs" chartData={installData} />
      <LineChart yAxisTitle="revenue" chartData={revenueData} />
    </div>
  );
};

export default Overview;
