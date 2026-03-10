import React from 'react';
import { Space } from 'antd';
import { AccountBookFilled, AccountBookOutlined } from '@colelab/icons-react';

export default () => {
  return (
    <Space>
      <AccountBookFilled />
      <AccountBookOutlined spin />
    </Space>
  );
};
