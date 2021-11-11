import { GForm, AuthBtn } from '@dsyd/com';

export default () => {
  const props = {
    formSet: [
      {
        type: 'input',
        label: '用户名',
        name: 'username',
      },
      {
        type: 'password',
        label: '密码',
        name: 'password',
      },
    ],
    column: 1,
    style: { width: 400, margin: '0 auto' },
    defaultFooterBar: false,
    layout: 'vertical',
    submitCall: values => {
      console.log(values);
    },
    toolBarRender: actionRef => (
      <AuthBtn
        style={{ width: '100%' }}
        type="primary"
        onClick={() => {
          actionRef.submit();
        }}
      >
        登录
      </AuthBtn>
    ),
  };
  return <GForm {...props} />;
};