import { Button, Table, Tag } from 'antd';

// 样式表
import styles from './index.module.scss';

import {
  PlusCircleFilled,
  StopOutlined,
  CloseCircleFilled,
  ExclamationCircleFilled,
} from '@ant-design/icons';

export default function Index(): JSX.Element {
  const columns = [
    {
      title: '分类名称',
      dataIndex: 'name',
      key: 'name',
      width: 200,
    },
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 200,
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render(text: string) {
        if (!text) return null;
        return (
          <Tag color={text === '已禁用' ? '#ff4d4f' : '#ffc306'}>{text}</Tag>
        );
      },
    },
  ];

  const data = [
    {
      key: 1,
      name: '女装',
      id: 1,
      children: [
        {
          key: 11,
          name: '连衣裙',
          id: 11,
          status: '已启用',
        },
        {
          key: 12,
          name: '半身裙',
          id: 12,
          status: '已启用',
        },
        {
          key: 13,
          name: 'T恤女',
          id: 13,
          status: '已禁用',
        },
        {
          key: 14,
          name: '防晒衣',
          id: 14,
          status: '已启用',
        },
      ],
    },
    {
      key: 2,
      name: '男装',
      id: 2,
      children: [
        {
          key: 21,
          name: '冲锋衣',
          id: 21,
          status: '已启用',
        },
        {
          key: 22,
          name: '直筒裤',
          id: 22,
          status: '已禁用',
        },
      ],
    },
  ];

  return (
    <>
      <div className={styles.actions}>
        <Button type="primary" icon={<PlusCircleFilled />}>
          新增
        </Button>
        <Button type="primary" icon={<StopOutlined />}>
          启用
        </Button>
        <Button type="primary" icon={<ExclamationCircleFilled />}>
          禁用
        </Button>
        <Button type="primary" icon={<CloseCircleFilled />}>
          删除
        </Button>
      </div>
      <div className={styles.categories}>
        <Table
          columns={columns}
          rowSelection={{
            type: 'checkbox',
            checkStrictly: false,
          }}
          dataSource={data}
          pagination={false}
        />
      </div>
    </>
  );
}
