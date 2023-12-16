import { Typography } from 'antd';
import kateImage from '../assets/kate.png';

export default function FormWrapper({ children }) {
  return (
    <div className="flex justify-center items-start gap-4">
      <div>
        <img src={kateImage} alt="" width="45px" />
      </div>
      <div>
        <div className="bg-lightpurple p-4 rounded-md">
          <Typography.Title level={1}>Kate</Typography.Title>
          <p>Hi I&apos;m Kate. I&apos;m here to find you the best car loan options.</p>
          <p className="mt-2">Let&apos;s get started!</p>
        </div>
        {children}
      </div>
    </div>
  );
}
