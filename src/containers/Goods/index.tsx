import Header from './components/Header';
import { Table, Button, Input, Checkbox, Space } from 'antd';
import { EditOutlined } from '@ant-design/icons';

// 样式表
import styles from './index.module.scss';

export default function Index(): JSX.Element {
  const columns = [
    {
      title: '商品ID',
      dataIndex: 'id',
      width: 140,
    },
    {
      title: '商品图片',
      dataIndex: 'cover',
      width: 110,
      render: (text: string) => {
        return <img src={text} />;
      },
    },
    {
      title: '商品名称',
      dataIndex: 'name',
      width: 300,
      render: (text: string) => {
        return (
          <span title={text} className="text-overflow">
            {text}
          </span>
        );
      },
    },
    {
      title: '所属分类',
      dataIndex: 'category',
    },
    {
      title: '在售价',
      dataIndex: 'price',
    },
    {
      title: '预估收益',
      dataIndex: 'profit',
    },
    {
      title: '月销量',
      dataIndex: 'volume',
    },
    {
      title: '库存',
      dataIndex: 'stock',
    },
    {
      title: '排序',
      dataIndex: 'sort',
      width: 120,
      render: (text: string) => {
        return <Input value={text} suffix={<EditOutlined />}></Input>;
      },
    },
    {
      title: '操作',
      width: 240,
      fixed: 'right' as const,
      render: () => {
        return (
          <Space size="middle">
            <Button type="primary">上架</Button>
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
      id: '5556224520',
      name: '韩版宽松印花t恤女装夏季短袖上衣网红潮流百搭新款打底衫ins衣服',
      cover: require('../../assets/uploads/goods_1.jpg'),
      category: '女装',
      price: '21.98元',
      profit: '1.98元',
      volume: '999件',
      stock: '2858件',
      sort: 1000,
    },
    {
      key: 2,
      id: '5545454445',
      name: '2019新款超火cec短袖t恤女装夏体桖宽松韩版潮流网红ins洋气衣服',
      cover: require('../../assets/uploads/goods_2.jpg'),
      category: '女装',
      price: '21.98元',
      profit: '1.98元',
      volume: '999件',
      stock: '2858件',
      sort: 1000,
    },
    {
      key: 3,
      id: '5556224785',
      name: '气质潮流蝴蝶结系带v领短袖条纹连衣裙中长款淑女范韩版休闲女装',
      cover: require('../../assets/uploads/goods_3.jpg'),
      category: '女装',
      price: '21.98元',
      profit: '1.98元',
      volume: '999件',
      stock: '2858件',
      sort: 1000,
    },
    {
      key: 4,
      id: '5556245754',
      name: '短款卫衣女2019新款潮流宽松韩版长袖连帽上衣女春季绣花外套女装',
      cover: require('../../assets/uploads/goods_4.jpg'),
      category: '女装',
      price: '21.98元',
      profit: '1.98元',
      volume: '999件',
      stock: '2858件',
      sort: 1000,
    },
    {
      key: 5,
      id: '5553215154',
      name: '女土工装迷彩裤2019夏季新款大码女装户外休闲裤韩版潮流网红裤子',
      cover: require('../../assets/uploads/goods_5.jpg'),
      category: '女装',
      price: '21.98元',
      profit: '1.98元',
      volume: '999件',
      stock: '2858件',
      sort: 1000,
    },
    {
      key: 6,
      id: '5556252221',
      name: '欧货短袖时尚女装夏装2019新款潮流韩版丅t恤上衣服新品夏天气质',
      cover: require('../../assets/uploads/goods_6.jpg'),
      category: '女装',
      price: '21.98元',
      profit: '1.98元',
      volume: '999件',
      stock: '2858件',
      sort: 1000,
    },
    {
      key: 7,
      id: '5556554450',
      name: '短袖t恤女装2019新款夏韩版原宿风学生半袖ins潮流森女系百搭上衣',
      cover: require('../../assets/uploads/goods_7.jpg'),
      category: '女装',
      price: '21.98元',
      profit: '1.98元',
      volume: '999件',
      stock: '2858件',
      sort: 1000,
    },
    {
      key: 8,
      id: '5556224240',
      name: 'ins潮流女装上衣服2019夏装新款韩版宽松黑色短袖t恤女半袖体恤衫',
      cover: require('../../assets/uploads/goods_8.jpg'),
      category: '女装',
      price: '21.98元',
      profit: '1.98元',
      volume: '999件',
      stock: '2858件',
      sort: 1000,
    },
    {
      key: 9,
      id: '5556224520',
      name: '2019夏装新款韩版女装时尚韩版潮流雪纺黄色牛仔显瘦两件套连衣裙',
      cover: require('../../assets/uploads/goods_9.jpg'),
      category: '女装',
      price: '21.98元',
      profit: '1.98元',
      volume: '999件',
      stock: '2858件',
      sort: 1000,
    },
    {
      key: 10,
      id: '5556224520',
      name: '欧货短袖时尚女装夏装2019新款潮流韩版丅t恤上衣服新品夏天气质',
      cover: require('../../assets/uploads/goods_10.jpg'),
      category: '女装',
      price: '21.98元',
      profit: '1.98元',
      volume: '999件',
      stock: '2858件',
      sort: 1000,
    },
    {
      key: 11,
      id: '5556224620',
      name: '欧货短袖时尚女装夏装2019新款潮流韩版丅t恤上衣服新品夏天气质',
      cover: require('../../assets/uploads/goods_11.jpg'),
      category: '女装',
      price: '21.98元',
      profit: '1.98元',
      volume: '999件',
      stock: '2858件',
      sort: 1000,
    },
    {
      key: 12,
      id: '5536224520',
      name: '欧货短袖时尚女装夏装2019新款潮流韩版丅t恤上衣服新品夏天气质',
      cover: require('../../assets/uploads/goods_12.jpg'),
      category: '女装',
      price: '21.98元',
      profit: '1.98元',
      volume: '999件',
      stock: '2858件',
      sort: 1000,
    },
  ];

  return (
    <>
      <Header />
      <div className={styles.actions}>
        <span className={styles.title}>快捷操作</span>
        <Checkbox>今日入库</Checkbox>
        <Checkbox>当前页面</Checkbox>
        <Checkbox>筛选结果</Checkbox>
        <Checkbox>所有商品</Checkbox>
        <span className={styles.total}>已选中 59 件，共 8982 条数据</span>
        <Button style={{ marginLeft: 20, width: 120 }} type="primary">
          一键入库
        </Button>
      </div>
      <div className={styles.stocklist}>
        <Table
          rowSelection={{
            type: 'checkbox',
          }}
          columns={columns}
          scroll={{ x: 1400 }}
          dataSource={data}
          pagination={{
            pageSize: 3,
            position: ['bottomLeft'],
            itemRender: (_current, type, originalElement) => {
              if (type === 'prev') {
                return <Button type="primary">上一页</Button>;
              }
              if (type === 'next') {
                return <Button type="primary">下一页</Button>;
              }
              return originalElement;
            },
          }}
        />
      </div>
    </>
  );
}
