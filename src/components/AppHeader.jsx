import { Flex } from 'antd';
import logo from '../assets/logo.svg';
import { PhoneFilled } from '@ant-design/icons';
export default function AppHeader() {
  return (
    <Flex justify="space-between" align="center" className="px-28">
      <div className="w-24">
        <img src={logo} alt="logo" />
      </div>
      <div>
        <PhoneFilled className="text-primary text-lg" /> <span className="text-sm">984 248 5455</span>
      </div>
    </Flex>
  );
}
