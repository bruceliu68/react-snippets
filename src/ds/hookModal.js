/*
 * @CreatDate: 2021-10-18 21:04:20
 * @Describe: 新增、修改弹窗
 */

import { useState, forwardRef, useImperativeHandle, useRef } from 'react';
import { ModalForm } from '@dsyd/com';
import { addDict, updateDict } from './service';
import { emptyRule, nameRule, markRule } from '@/utils/verify';

const EditModal = ({ onRefresh }, ref) => {
  const formRef = useRef();
  const [visible, setVisiable] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState('新增');

  useImperativeHandle(ref, () => ({
    open: (mode, record) => {
      setVisiable(true);
      setMode(mode);
      if (mode !== '新增') {
        if (formRef.current) {
          formRef.current?.setFieldsValue(record);
        } else {
          setTimeout(() => {
            formRef.current?.setFieldsValue(record);
          }, 500);
        }
      }
    }
  }));

  const handleOk = async (values) => {
    let params = values;

    setLoading(true);
    let res;
    if (mode === '新增') {
      res = await addDict(params);
    } else {
      const id = params.id;
      res = await updateDict(params, id);
    }

    setLoading(false);
    if (res?.success) {
      setVisiable(false);
      onRefresh && onRefresh();
    }
  };

  const handleClose = () => {
    formRef.current?.reset();
    setMode('新增');
  };

  const formSet = [
    {
      type: 'input',
      name: 'id',
      label: 'id',
      column: 0
    },
    {
      type: 'input',
      label: '字典标识',
      dataIndex: 'dictKey',
      props: {
        disabled: mode === '修改'
      },
      validOptions: {
        rules: markRule
      }
    },
    {
      type: 'input',
      label: '字典名称',
      dataIndex: 'dictName',
      validOptions: {
        rules: nameRule
      }
    },
    {
      type: 'select',
      label: '分组',
      dataIndex: 'groups',
      optionsData: [
        { label: '系统', value: '系统' },
        { label: '表单', value: '表单' }
      ],
      validOptions: {
        rules: emptyRule
      }
    },
    {
      type: 'textarea',
      label: '字典说明',
      dataIndex: 'description',
      props: {
        showCount: true,
        maxLength: 200
      }
    }
  ];

  return (
    <ModalForm
      formProps={{autoComplete: 'off'}}
      width={650}
      title={`${mode}字典`}
      formRef={formRef}
      visible={visible}
      confirmLoading={loading}
      formSet={formSet}
      onOk={handleOk}
      onCancel={() => setVisiable(false)}
      afterClose={handleClose}
    />
  );
};

export default forwardRef(EditModal);
