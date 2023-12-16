import { Input } from 'antd';

export default function BaseInput({ placeholder, prefix, ...rest }) {
  return <Input placeholder={placeholder} prefix={prefix} {...rest} size="large" className="rounded-full text-sm" />;
}
