import React, { useState, useEffect } from 'react';
import { useMutation } from 'react-query';
import { Spinner } from 'reactstrap';
import LineChart from '../../components/LineChart';
import { getCampagins } from './api';
import './campaigns.scss';

const Overview = () => {
  const [installData, setInstallData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [noData, setNoData] = useState(false);

  const [fetchChartData, { isSuccess, data, isLoading }] = useMutation(
    getCampagins
  );

  useEffect(() => {
    fetchChartData();
  }, []);

  useEffect(() => {
    if (isSuccess) {
      if (data[0]?.id) {
        let newData = [];
        data[0].installs.forEach((e) => newData.push([e.day, e.value]));
        setInstallData(newData);
        const dataLocalStorage = localStorage.getItem('newCampaigns');
        let newDataStorage = [];
        if (dataLocalStorage) {
          dataLocalStorage.split(',').forEach((item) =>
            newDataStorage.push({
              id: item,
              name: item,
            })
          );
        }
        setAllData([...data, ...newDataStorage]);
      }
    }
  }, [isSuccess]);

  const handleChangeData = (id) => {
    const index = data.findIndex((x) => x.id === id);
    if (index !== -1) {
      let newData = [];
      data[index].installs.forEach((e) => newData.push([e.day, e.value]));
      setInstallData(newData);
      setNoData(false);
    } else {
      setNoData(true);
    }
  };

  if (isLoading) return <Spinner color="dark" />;
  return (
    <div>
      <select
        className="select-campaign"
        onChange={(e) => handleChangeData(e.target.value)}
      >
        {allData?.map(({ name, id }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
      {noData ? (
        <h1 className="no-data">No Data</h1>
      ) : (
        <LineChart yAxisTitle="installs" chartData={installData} />
      )}
    </div>
  );
};

export default Overview;
