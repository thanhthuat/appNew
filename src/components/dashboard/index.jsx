import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighMaps from './HighMaps';
import { getMapDataByCountryId } from '../../api/apiConfig';
import App from './Demo';

const options = {
  title: {
    text: 'My chart',
  },
  series: [
    {
      data: [1, 2, 3],
    },
  ],
};

function Dashboard() {
    const [mapData, setMapData] = useState({});
    console.log("🚀 ~ file: index.js:21 ~ Dashboard ~ mapData", mapData)
    useEffect(() => {
        if (true) {
          getMapDataByCountryId('vn')
            .then((res) => {
              setMapData(res);
            })
            .catch((err) => console.log({ err }));
        }
      }, []);
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default Dashboard;
