import { Pagination as AntPagination, Button } from 'antd';

export default function Pagination(props: any): JSX.Element {
  return (
    <AntPagination
      itemRender={(_current, type, originalElement) => {
        if (type === 'prev') {
          return <Button type="primary">上一页</Button>;
        }
        if (type === 'next') {
          return <Button type="primary">下一页</Button>;
        }
        return originalElement;
      }}
      {...props}
    />
  );
}
