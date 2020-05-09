import React from 'react';
import { ConfigProvider } from 'antd';
import Table from 'antd/lib/table'
import zh_CN from 'antd/es/locale/zh_CN'
import "antd/dist/antd.css";

const dataSource = Array(20);

const defaultPagination = {
  showQuickJumper: true,
  showSizeChanger: true,
};

function App() {
  return (
    <ConfigProvider locale={zh_CN}>
      <Table dataSource={dataSource} pagination={defaultPagination}></Table>
    </ConfigProvider>
  );
}

export default App;
