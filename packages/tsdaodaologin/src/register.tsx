import React, { Component } from "react";
import { Button, Toast } from '@douyinfe/semi-ui';
import './login.css'
import { WKApp, Provider } from "@tsdaodao/base"
import classNames from "classnames";
import { RegisterVM } from "./register_vm";

class Register extends Component<any, any> {
    render() {
        return <Provider create={() => {
            return new RegisterVM()
        }} render={(vm: RegisterVM) => {
            return <div className="wk-login">
                <div className="wk-login-content">
                    <div className="wk-login-content-phonelogin">
                        <div className="wk-login-content-logo">
                            <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo" />
                        </div>
                        <div className="wk-login-content-slogan">
                            注册新账号
                        </div>
                        <div className="wk-login-content-form">
                            <input type="text" placeholder="昵称" onChange={(v) => {
                                vm.name = v.target.value
                            }}></input>
                            <input type="text" placeholder="手机号" onChange={(v) => {
                                vm.phone = v.target.value
                            }}></input>
                            <input type="password" placeholder="密码" onChange={(v) => {
                                vm.password = v.target.value
                            }}></input>
                            <div className="wk-login-content-form-buttons">
                                <Button loading={vm.registerLoading} className="wk-login-content-form-ok" type='primary' theme='solid' onClick={async () => {
                                    if (!vm.name) {
                                        Toast.error("昵称不能为空！")
                                        return
                                    }
                                    if (!vm.phone) {
                                        Toast.error("手机号不能为空！")
                                        return
                                    }
                                    if (!vm.password) {
                                        Toast.error("密码不能为空！")
                                        return
                                    }
                                    vm.registerLoading = true
                                    try {
                                        await WKApp.apiClient.post("/user/register", {
                                            name: vm.name,
                                            zone: "0086",
                                            phone: vm.phone,
                                            code: "123456",
                                            password: vm.password,
                                            flag: 0,
                                            device: {
                                                device_id: "test_device_001",
                                                device_name: "测试设备",
                                                device_model: "iPhone 12"
                                            },
                                            invite_code: "123456"
                                        })
                                        Toast.success("注册成功")
                                        WKApp.route.push("/login")
                                    } catch (err: any) {
                                        Toast.error(err.msg || "注册失败")
                                    } finally {
                                        vm.registerLoading = false
                                    }
                                }}>注册</Button>
                            </div>
                            <div className="wk-login-content-form-others">
                                <div className="wk-login-content-form-scanlogin" onClick={() => {
                                    WKApp.route.push("/login")
                                }}>
                                    返回登录
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wk-login-footer">
                        <ul>
                            <li onClick={() => {
                                WKApp.route.push("/login")
                            }}>去登录</li>
                            <li>隐私政策</li>
                            <li>用户协议</li>
                            {/* <li> © 北京沃兹集凯德科技有限公司</li> */}
                        </ul>
                    </div>
                </div>
            </div>
        }}>
        </Provider>
    }
}

export default Register 