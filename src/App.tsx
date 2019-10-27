import React from 'react';
import './App.css';
// import { ThemeProvider, makeStyles } from '@material-ui/styles';
// import { Theme, theme } from './theme';
import ShortsOrPants from './core/ShortsOrPants';
import { SecretSauce } from './utils/secretSauce';
import { Tabs, PageHeader, Button, Descriptions } from 'antd';
import Day from './core/Day';

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
  return (
    <PageHeader
      ghost={false}
      title="Shorts or Pants"
      extra={[
      ]}
    >

      <Tabs defaultActiveKey="1" >
        <TabPane tab="Today" key="1">
          <Day />
        </TabPane>
        <TabPane tab="Tomorrow" key="2">
          <ShortsOrPants
            clothing={SecretSauce.Shorts} />
        </TabPane>
        <TabPane tab="Week" key="3">
          <ShortsOrPants
            clothing={SecretSauce.Shorts} />
        </TabPane>
      </Tabs>
    </PageHeader>

  );
}

export default App;
