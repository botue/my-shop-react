// 导入 Ant Design 组件
import { Form, Input, Space, Select, Button, Radio, Alert } from 'antd';

import { useNavigate } from 'react-router-dom';

// 样式表
import styles from './add.module.scss';

export default function Add(): JSX.Element {
  const navigate = useNavigate();
  return (
    <>
      <Form
        style={{ marginTop: 50 }}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
      >
        <Form.Item label="一级分类" name="name" rules={[{ required: true }]}>
          <Select placeholder="请选择一级分类" allowClear>
            <Select.Option value="male">男装</Select.Option>
            <Select.Option value="female">女装</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="排序"
          name="password"
          extra={
            <Alert
              className={styles.alert}
              style={{ marginTop: 10 }}
              banner
              showIcon={false}
              message="备注说明：设置排序值越大，排名越靠前"
              type="error"
            />
          }
          rules={[{ required: true }]}
        >
          <Input placeholder="请填写排序" />
        </Form.Item>

        <Form.Item label="状态" name="status" initialValue={1}>
          <Radio.Group value={1}>
            <Radio value={1}>启用</Radio>
            <Radio value={0}>禁用</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
          <Space size={20}>
            <Button type="primary" htmlType="submit">
              保存
            </Button>
            <Button
              onClick={() => {
                navigate(-1);
              }}
              htmlType="button"
            >
              取消
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  );
}
