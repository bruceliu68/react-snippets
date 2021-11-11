/*
 * @CreatDate: 2021-11-11 09:42:16 
 * @Describe: xxx 
 */

import { useEffect, useState } from "react";
import { message } from "antd";
// import service from './service'; 
// import style from './index.less';  

export default () => {
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
