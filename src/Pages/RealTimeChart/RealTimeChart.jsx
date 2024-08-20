import React, { useEffect, useRef, useState } from 'react';
import { Line } from 'react-chartjs-2';
import io from 'socket.io-client';
import 'chart.js/auto';

const socket = io('http://localhost:4000'); // Replace with your server URL

const RealTimeChart = () => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Real-Time Data',
        data: [],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
      },
    ],
  });

  const chartRef = useRef(null);

  useEffect(() => {
    socket.on('data', (newData) => {
      setData((prevData) => {
        const newLabels = [...prevData.labels, newData.time];
        const newDatasetData = [...prevData.datasets[0].data, newData.value];

        // Limit the number of data points to 20
        if (newLabels.length > 20) {
          newLabels.shift();
          newDatasetData.shift();
        }

        return {
          labels: newLabels,
          datasets: [
            {
              ...prevData.datasets[0],
              data: newDatasetData,
            },
          ],
        };
      });
    });

    return () => socket.off('data');
  }, []);

  return (
    <div>
      <Line ref={chartRef} data={data} />
    </div>
  );
};

export default RealTimeChart;
