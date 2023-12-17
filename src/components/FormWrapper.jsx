import { Typography } from 'antd';
import kateImage from '../assets/kate.png';

export default function FormWrapper({ children, message }) {
  return (
    <div className="mt-8 mx-auto max-w-[460px]">
      <div className="flex justify-center items-start gap-4">
        <div>
          <img src={kateImage} alt="" width="45px" />
        </div>
        <div className="w-full">
          <div className="bg-lightpurple p-4 rounded-md">
            <Typography.Title level={1}>Kate</Typography.Title>
            {message}
          </div>
          <div className="mt-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
