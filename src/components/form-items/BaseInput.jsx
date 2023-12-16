import { Input } from 'antd';

export default function BaseInput({ placeholder, prefix }) {
  return <Input placeholder={placeholder} prefix={prefix} size="large" className="rounded-full text-sm" />;
}
