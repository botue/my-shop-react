import { Button, Table, Tag, Modal, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

// 样式表
import styles from './index.module.scss';

import {
  PlusCircleFilled,
  StopOutlined,
  CloseCircleFilled,
  ExclamationCircleFilled,
  ExclamationCircleOutlined,
} from '@ant-design/icons';

export default function Index(): JSX.Element {
  const navigate = useNavigate();

  function showConfirm(type: string) {
    Modal.confirm({
      title: `你确定要${type}这些项目?`,
      icon: <ExclamationCircleOutlined />,
      cancelText: '取消',
      okText: '确定',
      // centered: true,
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

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
    {
      title: '操作',
      width: 240,
      dataIndex: 'status',
      render: (text: string) => {
        if (!text) return null;
        return (
          <Space size="middle">
            <Button type="primary">
              {text === '已禁用' ? '启用' : '禁用'}
            </Button>
            <Button danger type="primary">
              删除
            </Button>
          </Space>
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
        <Button
          onClick={() => navigate('/goods/category/add')}
          type="primary"
          icon={<PlusCircleFilled />}
        >
          新增
        </Button>
        <Button
          onClick={() => {
            showConfirm('启用');
          }}
          type="primary"
          icon={<StopOutlined />}
        >
          启用
        </Button>
        <Button
          onClick={() => {
            showConfirm('禁用');
          }}
          type="primary"
          icon={<ExclamationCircleFilled />}
        >
          禁用
        </Button>
        <Button
          onClick={() => {
            showConfirm('删除');
          }}
          type="primary"
          icon={<CloseCircleFilled />}
        >
          删除
        </Button>
      </div>
      <div className={styles.categories}>
        <Table
          // size="middle"
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
