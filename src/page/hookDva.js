/*
 * @CreatDate: 2021-11-11 09:43:40 
 * @Describe: xxx 
 */

import { useEffect, useState } from "react";
import { connect } from "umi";
import { message } from "antd";
// import service from './service'; 
// import style from './index.less';  

const Page = ({ configMap }) => {
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        getSolutionList();
    }, []);

    const getSolutionList = () => {
        // const params = {};
        // service.getSolutionList(params).then((data) => {
        //     console.log('data', data);
        // })
    };

    return (
        <div className="hook-page">
            hook page
        </div>
    );
};

export default connect(({ global }) => ({
    configMap: global?.configMap
}))(Page);
