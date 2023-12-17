import { Select } from 'antd';

export default function BaseSelect({ options, placeholder = 'Select', ...rest }) {
  return <Select className="text-center" size="large" options={options} placeholder={placeholder} {...rest} />;
}
