import { Outlet } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import DefaultLayout from './layout/DefaultLayout';
function App() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            headerBg: 'white',
            bodyBg: 'white',
            footerBg: 'white',
          },
          Typography: {},
        },
        token: {
          fontSizeHeading1: '14',
          fontFamily: "'Poppins', sans-serif",
          colorPrimary: '#8d33e1',
          // fontSize: '12',
          // colorPrimary: 'red',
        },
      }}
    >
      <DefaultLayout>
        <Outlet />
      </DefaultLayout>
    </ConfigProvider>
  );
}

export default App;
