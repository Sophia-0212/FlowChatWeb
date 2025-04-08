import {WKApp} from '@tsdaodao/base'
import { IModule } from '@tsdaodao/base'
import React from 'react'
import Login from './login'
import Register from './register'

export default  class LoginModule implements IModule {

    id(): string {
        return "LoginModule"
    }
    init(): void {
        console.log("【LoginModule】初始化")
        WKApp.route.register("/login",(param:any):JSX.Element =>{
            return <Login />
        })
        WKApp.route.register("/register",(param:any):JSX.Element =>{
            return <Register />
        })
    }
}