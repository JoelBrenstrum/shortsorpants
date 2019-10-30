import React, { useState } from "react";
import "./App.css";
// import { ThemeProvider, makeStyles } from '@material-ui/styles';
// import { Theme, theme } from './theme';
import ShortsOrPants from "./core/ShortsOrPants";
import { SecretSauce } from "./utils/secretSauce";
import { Tabs, PageHeader, Button, Descriptions } from "antd";
import Day from "./core/Day";
import { api } from "./utils/api";

const { TabPane } = Tabs;

// const useStyles = makeStyles((theme: Theme) => ({
//   root: {
//     // background: theme.palette.secondary.main,
//     fontSize: 16,
//     // color: 'white',
//     height: '100%',
//   },
// }));

const App: React.FC = () => {
    // const classes = useStyles();
    const [weather, setWeather] = useState();
    const [weatherMin, setWeatherMin] = useState();
    const [weatherMax, setWeatherMax] = useState();
    if (!weather) {
        api().then(weather => {
            setWeather(weather);
            setWeatherMax({ ...weather, temperature: weather.temp_max });
            setWeatherMin({ ...weather, temperature: weather.temp_min });
        });
    }

    return (
        <PageHeader ghost={false} title="Shorts or Pants" extra={[]}>
            Current:
            <Day weather={weather} />
            Hottest:
            <Day weather={weatherMin} />
            Coldest:
            <Day weather={weatherMax} />
            {/* <Tabs defaultActiveKey="1" >
        <TabPane tab="Today" key="1">
          <Day weather={weather} />
        </TabPane>
        <TabPane tab="Tomorrow" key="2">
          <ShortsOrPants
            clothing={SecretSauce.Shorts} />
        </TabPane>
        <TabPane tab="Week" key="3">
          <ShortsOrPants
            clothing={SecretSauce.Shorts} />
        </TabPane>
      </Tabs> */}
        </PageHeader>
    );
};

export default App;
