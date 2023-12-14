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
            bodyBg: 'red',
            footerBg: 'blue',
          },
        },
        token: {
          fontFamily: "'Poppins', sans-serif",
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
