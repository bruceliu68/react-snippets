import { ModalForm } from "tntd";

const props = {
    visible,
    title: '修改密码',
    initialValues: { id: 1 },
    formSet: [
      {
        type: 'input',
        dataIndex: 'id',
        title: 'id',
        column: 0, // 占比列数为0，即可隐藏
      },
      {
        type: 'password',
        dataIndex: 'password',
        title: '密码框',
        validOptions: {
          rules: [
            {
              required: true,
              message: '不能为空',
            },
          ],
        },
      },
      {
        type: 'password',
        dataIndex: 'confirm',
        title: '密码确认',
        validOptions: {
          dependencies: ['password'],
          rules: [
            {
              required: true,
              message: '不能为空',
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('密码不一致'));
              },
            }),
          ],
        },
      },
    ],
    onCancel: () => {
      setVisible(false);
    },
    onOk: values => {
      console.log(values);
    },
    beforeRender: () => (
      <Alert
        message="表单前位置渲染"
        type="warning"
        style={{ marginBottom: 10 }}
      />
    ),
    afterRender: () => <Alert message="表单后位置渲染" />,
};

<ModalForm {...props} />

