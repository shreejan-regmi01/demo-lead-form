import { Flex } from 'antd';
import logo from '../assets/logo.svg';
import { PhoneFilled } from '@ant-design/icons';
export default function AppHeader() {
  return (
    <Flex justify="space-between" align="center">
      <div className="w-24">
        <img src={logo} alt="logo" />
      </div>
      <div>
        <PhoneFilled /> 984 248 5455
      </div>
    </Flex>
  );
}
