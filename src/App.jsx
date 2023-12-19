import { Outlet } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import DefaultLayout from './layout/DefaultLayout';
import './custom.css';
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
      <DefaultLayout>
        <Outlet />
      </DefaultLayout>
    </ConfigProvider>
  );
}

export default App;
