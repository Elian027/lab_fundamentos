const login = (username,password)=>{
    if(!username && !password) return console.log("You are not autorized")
    console.log(`Welcome ${username}`)
}

export default login

import login from "./module.js";

login()

const login1 = (username,password)=>{
    if(!username && !password) return console.log("You are not autorized")
    console.log(`Welcome ${username}`)
}

export {
    login1
}

import {login2} from "./module.js";

login2()

export const login3 = (username,password)=>{
    if(!username && !password) return console.log("You are not autorized")
    console.log(`Welcome ${username}`)
}

import {login3} from "./module.js";

login3()