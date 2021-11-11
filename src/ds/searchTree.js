import { SearchTree } from "@dsyd/com";
import { FolderOutlined, FileTextOutlined } from '@ant-design/icons';

const treeData = [
    {
      key: '1',
      title: '父文件1',
      children: [
        { key: '1-1', title: '子文件1' },
        { key: '1-2', title: '子文件2' },
      ],
    },
    {
      key: '2',
      title: '父文件2',
      children: [
        {
          key: '2-1',
          title: '子文件3',
          folder: true,
          children: [{ key: '2-1-1', title: '子文件5' }],
        },
        {
          key: '2-2',
          title: '子文件4',
        },
      ],
    },
  ];
  

<SearchTree treeData={treeData} iconRender={() => <FolderOutlined />} />