/*
 * @Author: lixiaofei05 lixiaofei05@baidu.com
 * @Date: 2025-03-26 14:16:07
 * @LastEditors: lixiaofei05 lixiaofei05@baidu.com
 * @LastEditTime: 2025-03-26 16:46:31
 * @FilePath: /TangSengDaoDaoWeb/apps/web/src/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  { BaseModule, WKApp } from '@tsdaodao/base';
import  { LoginModule } from '@tsdaodao/login';
import  { DataSourceModule } from '@tsdaodao/datasource';
import {ContactsModule} from '@tsdaodao/contacts';

const apiURL = "http://localhost:8090/v1/"

if((window as any).__TAURI_IPC__) { // tauri环境
  console.log("tauri环境")
  WKApp.apiClient.config.apiURL = apiURL
}else if((window as any)?.__POWERED_ELECTRON__){
  console.log("__POWERED_ELECTRON__环境")
  WKApp.apiClient.config.apiURL = apiURL
}else{
  if(process.env.NODE_ENV === "development") {
    WKApp.apiClient.config.apiURL = apiURL
  }else {
    WKApp.apiClient.config.apiURL = "http://localhost:8090/v1/" // 正式环境地址 (通用打包镜像，用此相对地址),打包出来的镜像可以通过API_URL环境变量来修改API地址
  }
}


WKApp.apiClient.config.tokenCallback = ()=> {
  return WKApp.loginInfo.token
}
WKApp.config.appVersion = `${process.env.REACT_APP_VERSION || "0.0.0"}`

WKApp.loginInfo.load() // 加载登录信息

WKApp.shared.registerModule(new BaseModule()); // 基础模块
WKApp.shared.registerModule(new DataSourceModule()) // 数据源模块
WKApp.shared.registerModule(new LoginModule()); // 登录模块
WKApp.shared.registerModule(new ContactsModule()); // 联系模块


WKApp.shared.startup() // app启动


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();

