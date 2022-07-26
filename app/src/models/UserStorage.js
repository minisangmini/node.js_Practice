"use strict";

const db = require("../config/db");

class UserStorage {
    static getUserInfo(id) { // primise 안에 있는 구문이 성공하면 resolved 실행, 실패하면 reject 실행
        return new Promise((resolve, reject) => { 
            const query = "SELECT * FROM users WHERE id = ?;";
            db.query(query, [id], (err, data) => {
                if(err) reject(err);
                resolve(data[0]);
            })
        });
    }

   

    static async save(userInfo) {
        return new Promise((resolve, reject) => { 
            const query = "INSERT INTO users(id, name, psword) VALUES(?, ?, ?);";
            db.query(query, 
                [userInfo.id, userInfo.name, userInfo.psword], 
                (err) => {
                if(err) reject(err);
                resolve({success: true, msg: "회원가입 성공!"});
            })
        });
    }
}


module.exports = UserStorage;