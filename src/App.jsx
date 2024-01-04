import { Outlet } from 'react-router-dom';
import { ConfigProvider, notification } from 'antd';
import DefaultLayout from './layout/DefaultLayout';
import './custom.css';
import { createContext } from 'react';

export const NotificationContext = createContext(null);

function App() {
  const [notificationApi, contextHolder] = notification.useNotification();
  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            headerBg: 'white',
            bodyBg: 'white',
            footerBg: 'white',
          },
          Form: {
            labelFontSize: '12px',
          },
          Input: {
            paddingBlockLG: '8px',
          },
          Button: {
            paddingInlineLG: '28px',
            fontWeight: 500,
            fontSizeLG: 14,
          },
        },
        token: {
          fontSizeHeading1: '14',
          fontFamily: "'Poppins', sans-serif",
          colorPrimary: '#7100da',
        },
      }}
    >
      <NotificationContext.Provider value={{ notificationApi, contextHolder }}>
        {contextHolder}
        <DefaultLayout>
          <Outlet />
        </DefaultLayout>
      </NotificationContext.Provider>
    </ConfigProvider>
  );
}

export default App;
