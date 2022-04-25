import { Button } from 'antd';

import { PlusCircleOutlined, StopOutlined } from '@ant-design/icons';

export default function Category(): JSX.Element {
  return (
    <>
      <Button type="primary" icon={<PlusCircleOutlined />}>
        新增
      </Button>
      <Button type="primary" icon={<StopOutlined />}>
        启用
      </Button>
      <Button type="primary" icon={<PlusCircleOutlined />}>
        禁用
      </Button>
      <Button type="primary" icon={<PlusCircleOutlined />}>
        删除
      </Button>
    </>
  );
}
