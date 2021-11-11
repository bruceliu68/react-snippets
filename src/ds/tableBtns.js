import { TableBtns } from "@dsyd/com";

const buttons = [
    {
      name: '编辑',
      auth: false,
      method: () => {
        message.success('设置点击事件');
      },
    },
    {
      type: 'confirm',
      name: '删除',
      auth: true,
      method: () => {
        message.success('删除点击事件');
      },
    },
    {
      type: 'download',
      name: '下载',
      auth: true,
      fileName: 'test.csv',
      pathname: 'http://www.baidu.com',
    },
    {
      type: 'link',
      name: '链接',
      auth: true,
      pathname: 'http://www.baidu.com',
    },
    {
      type: 'status',
      status: 1, // 默认0 1 切换
      textEnum: { 1: '授权', 0: '取消授权' },
      auth: true,
      method: v => {
        console.log(v);
      },
    },
    {
      name: '编辑1',
      auth: true,
      method: () => {
        message.success('设置点击事件');
      },
    },
    {
      type: 'confirm',
      name: '删除1',
      auth: true,
      method: () => {
        message.success('删除点击事件');
      },
    },
    {
      type: 'download',
      name: '下载1',
      auth: false,
      fileName: 'test.csv',
      pathname: 'http://www.baidu.com',
    },
    {
      type: 'link',
      name: '链接1',
      auth: true,
      pathname: 'http://www.baidu.com',
    },
    {
      type: 'status',
      status: 1, // 默认0 1 切换
      auth: true,
      method: v => {
        console.log(v);
      },
    }
  ];

<TableBtns buttons={buttons} />