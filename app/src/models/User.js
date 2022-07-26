"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    async login() {
        const client = this.body;
        try {
            const { id, psword, name } = await UserStorage.getUserInfo(client.id);

            if(id) {
                if(id === client.id && psword == client.psword) {
                    return { success: true, msg: `환영합니다 ${name}님!` };
                }
                return { success: false, msg: "로그인에 실패하셨습니다!" }
            }
            return { success: false, msg: "존재하지 않는 아이디입니다!" }
        } catch(err) {
            console.log(err);
            return { success: false, msg: err };
        }
    }

    async register() {
        const client = this.body;
        try {
            const response = await UserStorage.save(client);
            return response;
        } catch(err) {
            return { success: false, msg: err }
        }
    }
       
}

module.exports = User;