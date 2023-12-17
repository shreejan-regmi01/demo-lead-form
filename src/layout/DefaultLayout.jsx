import { Layout } from 'antd';
import AppHeader from '../components/AppHeader';

const { Header, Content } = Layout;

export default function DefaultLayout({ children }) {
  return (
    <Layout>
      <Header>
        <AppHeader />
      </Header>
      <Content>{children}</Content>
      {/* <Footer></Footer> */}
    </Layout>
  );
}
