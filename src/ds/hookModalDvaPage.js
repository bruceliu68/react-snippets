/*
 * @CreatDate: 2021-10-19 09:03:02
 * @Describe: 简单列表查询模板
 */

import { useRef, useEffect } from 'react';
import {connect} from 'umi';
import { GTable, WrapKeepAlive } from '@/components';
import { queryDictList, delDict } from './service';
import EditModal from './EditModal';

const Page = ({ location, configMap, dictMap }) => {
  const actionRef = useRef();
  const modalRef = useRef();

  const handleDelete = (id) => {
    delDict({ ids: [id] }).then(res => {
      if (res?.success) {
        actionRef.current?.reload();
      }
    });
  };

  const columns = [
    {
      title: '用户账号',
      dataIndex: 'username',
      valueType: 'input'
    },
    {
      title: '用户昵称',
      dataIndex: 'nickName',
      valueType: 'input'
    },
    {
      title: '状态',
      dataIndex: 'loginStatus',
      valueType: 'select',
      valueEnum: {
        '登陆成功': { text: '登陆成功', status: 'Success' },
        '登陆失败': { text: '登陆失败', status: 'Default' }
      }
    },
    {
      title: 'IP地址',
      dataIndex: 'ipAddr',
      valueType: 'input'
    },
    {
      title: '登录时间',
      dataIndex: 'loginTime',
      type: 'dateTime',
      hideInSearch: true
    },
    {
      title: '登录时间',
      dataIndex: 'created_at',
      valueType: 'dateTimeRange',
      hideInTable: true,
      search: {
        transform: (value) => {
          return {
            loginTimeStart: value[0],
            loginTimeEnd: value[1]
          };
        }
      }
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      hideInForm: true,
      width: 70,
      fixed: 'right',
      render: (_, record) => {
        const btns = [
            {
              name: '修改',
            //   auth: isAuth('uc:dict:update'),
              auth: true,
              method: () => {
                modalRef.current?.open('修改', record);
              }
            },
            {
              name: '删除',
            //   auth: isAuth('uc:dict:del'),
              auth: true,
              method: () => {
                handleDelete(record.id);
              },
              type: 'confirm',
              confirmText: <>确定要删除<a> {record.dictName} </a>吗？</>
            }
          ];
        return (<TableBtns buttons={btns} />);
      }
    }
  ];

  useEffect(() => {
    const refresh = (e) => {
      if (e === location?.pathname) {
        actionRef.current?.reset();
      }
    };
    window.eventEmitter.on('tabRefresh', refresh);

    return () => {
      window.eventEmitter.off('tabRefresh', refresh);
    };
  }, []);

  return (
    <>
        <GTable
        headerTitle='登录日志'
        actionRef={actionRef}
        rowKey='id'
        request={queryDictList}
        columns={columns}
        toolBarRender={() => [
            <AuthBtn
            //   auth={isAuth('uc:dict:add')}
            auth={true}
              type='primary'
              onClick={() => modalRef.current?.open('新增')}
            >
              新增
            </AuthBtn>
          ]}
        />
        <EditModal
            ref={modalRef}
            onRefresh={() => actionRef.current?.reload()}
        />
    </>
  );
};

export default connect(({ global }) => ({
  configMap: global?.configMap,
  dictMap: global?.dictMap
}))((props) => (
  <WrapKeepAlive when={true} name={props?.location?.pathname}>
    <Page {...props} />
  </WrapKeepAlive>
));
