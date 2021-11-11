/*
 * @CreatDate: 2021-10-19 09:03:02
 * @Describe: tabs模板
 */

import { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import StopCollect from './StopCollect';
import ResumeCollect from './ResumeCollect';
import { getProjectList } from './service';

const { TabPane } = Tabs;

const Page = ({ location }) => {
  const [projectList, setProjectList] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const getProject = () => {
    getProjectList().then(res => {
      if (res?.success) {
        let data = [];
        res?.data?.forEach(k => {
          data.push({
            label: k.label,
            value: k.code
          });
        });
        setProjectList(data);
      }
    });
  };

  useEffect(() => {
    getProject();

    const refresh = (e) => {
      if (e === location?.pathname) {
        setRefresh(true);
        setTimeout(() => {
          setRefresh(false);
          getProject();
        });
      }
    };
    window.eventEmitter.on('tabRefresh', refresh);

    return () => {
      window.eventEmitter.off('tabRefresh', refresh);
    };
  }, []);

  return (
    <Tabs defaultActiveKey='1' className='g-tabs'>
      {
        !refresh &&
        <>
          <TabPane tab='停催' key='1'>
            <StopCollect location={location} projectList={projectList} />
          </TabPane>
          <TabPane tab='复催' key='2'>
            <ResumeCollect location={location} projectList={projectList} />
          </TabPane>
        </>
      }
    </Tabs>
  );
};

export default Page;
