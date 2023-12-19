import { Select } from 'antd';

export default function BaseSelect({ options, placeholder = 'Select', ...rest }) {
  return (
    <Select className="text-center max-w-[399px]" size="large" options={options} placeholder={placeholder} {...rest} />
  );
}
