import { DynamicFieldSet, GForm } from '@dsyd/com';

const formSet = [
  {
    type: 'input',
    name: 'name',
    props: {
      placeholder: '姓名',
    },
  },
  {
    type: 'select',
    name: 'sex',
    props: {
      placeholder: '性别',
    },
    optionsData: [
      { label: '男', value: '0' },
      { label: '女', value: '1' },
    ],
  },
  {
    type: 'datepicker',
    name: 'date',
    props: {
      placeholder: '入职日期',
    },
  },
];

export default () => {
  const formRef = useRef();

  return (
    <GForm
      column={1}
      actionRef={formRef}
      submitCall={values => {
        console.log(values);
      }}
      formSet={[
        {
          type: 'custom',
          renderChild: <DynamicFieldSet name="list" listFormSet={formSet} />,
        },
      ]}
    />
  );
};