/*
 * @CreatDate: 2021-11-11 09:38:38 
 * @Describe: xxx 
 */

import React, { PureComponent } from 'react';
import { message } from "antd";
// import service from './service'; 
// import style from './index.less';  

export default class extends PureComponent {
    constructor(props) {
        super(props);
    }

    state = {
        list: []
    };

    componentDidMount() {
        // 组件已经挂载
        // 示例：执行 this 里的方法
        this.getList();
    }

    componentDidUpdate(prevProps, prevState) {
        // 组件更新
        // 示例
        // if ( prevState.flag !== this.state.flag ){}
    }

    componentWillUnmount() {
        // 组件卸载
    }

    getList = (obj) => {
        service.getUserList({
            ...this.state.params,
            ...obj
        }).then(res => {
            this.setState({
                list: res?.data?.list || []
            })
        })
    };

    render() {
        let { list = [], params = {} } = this.state;

        return (
            <div>
                hello world
            </div>
        );
    }
}
