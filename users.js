class Users {
    
    constructor(uname, uemail) {
        this.name = uname;
        this.email = uemail;
        this.uid = 0;
    }

    insertUser() {
        let sql = `INSERT INTO users(name, email) VALUES('${this.name}','${this.email}')`;
        return sql;           
    }

    updateUser(uid) {
        let sql = `update users SET name = '${this.name}', email = '${this.email}' WHERE id = ${uid}`;
        return sql;           
    }

    static getUserById(uid) {
        let sql = `SELECT * FROM users where id = ${uid}`;
        return sql;           
    }

    static deleteUserById(uid) {
        let sql = `DELETE FROM users WHERE id = ${uid}`;
        return sql;           
    }

    static getAllUsers() {
        let sql = `SELECT * FROM users`;
        return sql;           
    }    
}

module.exports = Users;