/*
 * @CreatDate: 2021-11-11 09:48:52 
 * @Describe: xxx 
 */

import { useEffect, useState } from "react";
import { connect } from "umi";
import { Modal } from "antd";
// import service from './service'; 
// import style from './index.less'; 

const HookModal = ({configMap}) => {
	const [modalVisible, setModalVisible] = useState(false);
	const [modalItem, setModalItem] = useState(false);

	useEffect(() => {
		init();
	}, []);

	const init = () => {
		console.log("init function");
	};

	const onOk = () => { };
	const onCancel = () => { };
	const afterClose = () => { };

	return (
		<div className="hook-modal">
			<Modal
				title="HOOK弹窗"
				visible={modalVisible}
				onOk={onOk}
				onCancel={onCancel}
				afterClose={afterClose}
			>

			</Modal>
		</div>
	);
};

export default connect(({ global }) => ({
    configMap: global?.configMap
}))(Page);
