import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the LocalDataServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocalDataServicesProvider {

  datas: any = [];
  expenses: any = [];
  totalIncome = 0;
  totalExpense = 0;
  balance = 0;

  dateNow   = ("0" + new Date().getDate()).slice(-2);
  monthNow  = ("0" + (new Date().getMonth() + 1)).slice(-2);
  yearNow   = new Date().getFullYear();

  constructor(
    private sqlite: SQLite
  ) {
    console.log('Hello LocalDataServicesProvider Provider');
  }

  createAllTable(){
    return new Promise((resolve, reject) => {
      var createTableArr = [];
      this.sqlite.create({
        name: 'mypocket.db',
        location: 'default'
      }).then((db: SQLiteObject) => {

        db.executeSql(
          'CREATE TABLE IF NOT EXISTS account(id INTEGER PRIMARY KEY, name TEXT, type TEXT, currency TEXT, description TEXT, amount INT, createdate TEXT )', []
        )
        .then(res => {
          console.log('Executed SQL :'+res);
          createTableArr.push(res);
        })
        .catch(e => console.log(e));

        db.executeSql(
          'CREATE TABLE IF NOT EXISTS accounttransaction(id INTEGER PRIMARY KEY, accountid INT, type TEXT, pay TEXT, bankname TEXT,bankaccountno TEXT,bankaccountname TEXT,category TEXT, amount INT, transactiondate TEXT, usage TEXT, description TEXT, createdate TEXT )', []
        )
        .then(res => {
          console.log('Executed SQL :'+res);
          createTableArr.push(res);
        })
        .catch(e => console.log(e));

        // db.executeSql('CREATE TABLE IF NOT EXISTS account(id INTEGER PRIMARY KEY, name TEXT, type TEXT, currency TEXT, description TEXT, amount INT, createdate TEXT )', [])
        // .then(res => console.log('Executed SQL'))
        // .catch(e => console.log(e));

        // db.executeSql('CREATE TABLE IF NOT EXISTS account(id INTEGER PRIMARY KEY, name TEXT, type TEXT, currency TEXT, description TEXT, amount INT, createdate TEXT )', [])
        // .then(res => console.log('Executed SQL'))
        // .catch(e => console.log(e));

        // db.executeSql('CREATE TABLE IF NOT EXISTS account(id INTEGER PRIMARY KEY, name TEXT, type TEXT, currency TEXT, description TEXT, amount INT, createdate TEXT )', [])
        // .then(res => console.log('Executed SQL'))
        // .catch(e => console.log(e));

        // db.executeSql('CREATE TABLE IF NOT EXISTS account(id INTEGER PRIMARY KEY, name TEXT, type TEXT, currency TEXT, description TEXT, amount INT, createdate TEXT )', [])
        // .then(res => console.log('Executed SQL'))
        // .catch(e => console.log(e));

        // db.executeSql('CREATE TABLE IF NOT EXISTS account(id INTEGER PRIMARY KEY, name TEXT, type TEXT, currency TEXT, description TEXT, amount INT, createdate TEXT )', [])
        // .then(res => console.log('Executed SQL'))
        // .catch(e => console.log(e));
        resolve(createTableArr);
      }).catch(e => {
        reject(e);
      });
    });
  }
  
  getData(table) {
    return new Promise((resolve, reject) => {
      this.sqlite.create({
        name: 'mypocket.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('SELECT * FROM '+table+' ORDER BY id DESC',[]).then(res => {
          this.datas    = [];
          for(var i=0; i<res.rows.length; i++) {
            console.log("DATA TABLE "+table+"::::");
            if(table == "account"){
              console.log(">> table is account");
              this.datas.push({
                id          :res.rows.item(i).id,
                name        :res.rows.item(i).name,
                type        :res.rows.item(i).type,
                description :res.rows.item(i).description,
                amount      :0,
                createdate  :res.rows.item(i).createdate
              })
            }else if(table == "accounttransaction"){
              console.log(">> table is accounttransaction");
              console.log(res.rows.item(i).accountid);
              this.datas.push({
                accountid   :res.rows.item(i).accountid,
                type        :res.rows.item(i).type,
                name        :res.rows.item(i).name,
                pay         :res.rows.item(i).pay,
                bankname    :res.rows.item(i).bankname,
                category    :res.rows.item(i).category,
                amount      :res.rows.item(i).amount,
                description :res.rows.item(i).description,
                createdate  :res.rows.item(i).createdate
              })
            }else{

            }
          }
          resolve(this.datas);
        })
        .catch(e => {
          console.log(e);
          reject(e);
        });
      }).catch(e => reject(e));
    });
  }

  getDataById(table , id) {
    return new Promise((resolve, reject) => {
      this.sqlite.create({
        name: 'mypocket.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('SELECT * FROM '+table+' WHERE id=?', [id])
        .then(res => {
          this.datas    = [];
          for(var i=0; i<res.rows.length; i++) {
            console.log("DATA TABLE "+table+"::::");
            if(table == "account"){
              console.log(">> table is account");
              this.datas.push({
                id:res.rows.item(i).id,
                name:res.rows.item(i).name,
                type:res.rows.item(i).type,
                description:res.rows.item(i).description,
                amount:0,
                createdate:res.rows.item(i).createdate
              })
            }else if(table == "accounttransaction"){
              console.log(">> table is accounttransaction");
              console.log(res.rows.item(i).accountid);
              this.datas.push({
                accountid:res.rows.item(i).accountid,
                type:res.rows.item(i).type,
                name:res.rows.item(i).name,
                pay:res.rows.item(i).pay,
                bankname:res.rows.item(i).bankname,
                category:res.rows.item(i).category,
                amount:res.rows.item(i).amount,
                description:res.rows.item(i).description,
                createdate:res.rows.item(i).createdate
              })
            }else{

            }
          }
          resolve(this.datas);
        })
        .catch(e => reject(e));
      }).catch(e => reject(e));
    });
  }

  getDataByAccountId(table , accountid) {
    return new Promise((resolve, reject) => {
      this.sqlite.create({
        name: 'mypocket.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('SELECT * FROM '+table+' WHERE accountid=?', [accountid])
        .then(res => {
          this.datas    = [];
          for(var i=0; i<res.rows.length; i++) {
            console.log("DATA TABLE "+table+"::::");
            if(table == "account"){
              console.log(">> table is account");
              this.datas.push({
                id:res.rows.item(i).id,
                name:res.rows.item(i).name,
                type:res.rows.item(i).type,
                description:res.rows.item(i).description,
                amount:0,
                createdate:res.rows.item(i).createdate
              })
            }else if(table == "accounttransaction"){
              console.log(">> table is accounttransaction");
              console.log(res.rows.item(i).accountid);
              this.datas.push({
                accountid:res.rows.item(i).accountid,
                type:res.rows.item(i).type,
                name:res.rows.item(i).name,
                pay:res.rows.item(i).pay,
                bankname:res.rows.item(i).bankname,
                category:res.rows.item(i).category,
                amount:res.rows.item(i).amount,
                description:res.rows.item(i).description,
                createdate:res.rows.item(i).createdate
              })
            }else{

            }
          }
          resolve(this.datas);
        })
        .catch(e => reject(e));
      }).catch(e => reject(e));
    });
  }

  getDataByType(type,accountid) {
    return new Promise((resolve, reject) => {
      this.sqlite.create({
        name: 'mypocket.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('SELECT * FROM accounttransaction WHERE type = ? AND accountid = ? ORDER BY id DESC',[type,accountid]).then(res => {
          this.datas    = [];
          for(var i=0; i<res.rows.length; i++) {
            console.log("DATA TABLE "+type+"::::");
            
            console.log(">> table is accounttransaction");
            console.log(res.rows.item(i).accountid);
            this.datas.push({
              accountid:res.rows.item(i).accountid,
              type:res.rows.item(i).type,
              name:res.rows.item(i).name,
              pay:res.rows.item(i).pay,
              bankname:res.rows.item(i).bankname,
              category:res.rows.item(i).category,
              amount:res.rows.item(i).amount,
              description:res.rows.item(i).description,
              createdate:res.rows.item(i).createdate
            })
          }
          resolve(this.datas);
        })
        .catch(e => {
          console.log(e);
          reject(e);
        });
      }).catch(e => reject(e));
    });
  }

  getDataTotalAmount(table , id) {
    return new Promise((resolve, reject) => {
      this.sqlite.create({
        name: 'mypocket.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('SELECT SUM(amount) AS totalIncome FROM accounttransaction WHERE type = "in" ', [])
        .then(res => {
          console.log(res);
          // if(res.rows.length>0) {
          //   this.totalIncome  = parseInt(res.rows.item(0).totalIncome);
          //   this.balance      = this.totalIncome-this.totalExpense;
          // }
        })
        .catch(e => reject(e));
      }).catch(e => reject(e));
    });
  }

  getDataTotalIncome(table , accountid) {
    return new Promise((resolve, reject) => {
      this.sqlite.create({
        name: 'mypocket.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('SELECT SUM(amount) AS totalIncome FROM '+table+' WHERE type=? AND accountid=?', ["in",accountid])
        .then(res => {
          console.log(res.rows.item(0).totalIncome);
          if(res.rows.item(0).totalIncome != null){
            if(res.rows.length>0) {
              this.totalIncome = parseInt(res.rows.item(0).totalIncome);
              // this.balance = this.totalIncome-this.totalIncome;
              var result = {
                message: "success",
                value:this.totalIncome
              }
              console.log(result);
              resolve(result);
            }else{
              var result = {
                message: "failed",
                value:0
              }
              console.log(result);
              resolve(result);
            }
          }else{
            var result = {
              message: "failed",
              value:0
            }
            console.log(result);
            resolve(result);
          }
        })
        .catch(e => reject(e));
      }).catch(e => reject(e));
    });
  }

  getDataTotalIncomeByDate(table , periode, accountid) {

    console.log(this.dateNow);
    console.log(this.monthNow);
    console.log(this.yearNow);

    if(periode == "year"){
      var sql   = "SELECT SUM(amount) AS totalIncome FROM "+table+" WHERE createdate BETWEEN datetime('"+this.yearNow+"-01-01 00:00:00') AND datetime('now','localtime') AND type=? AND accountid=?";
    }else if(periode == "month"){
      var sql   = "SELECT SUM(amount) AS totalIncome FROM "+table+" WHERE createdate BETWEEN datetime('"+this.yearNow+"-"+this.monthNow+"-01 00:00:00') AND datetime('now','localtime') AND type=? AND accountid=?";
    }else if(periode == "week"){
      var sql   = "SELECT SUM(amount) AS totalIncome FROM "+table+" WHERE createdate = datetime('now', '-7 day') AND type=? AND accountid=?";
    }else if(periode == "day"){
      var sql   = "SELECT SUM(amount) AS totalIncome FROM "+table+" WHERE createdate BETWEEN datetime('"+this.yearNow+"-"+this.monthNow+"-"+this.dateNow+" 00:00:00') AND datetime('now','localtime') AND type=? AND accountid=?";
    }else{

    }
    return new Promise((resolve, reject) => {
      this.sqlite.create({
        name: 'mypocket.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        console.log(sql);
        db.executeSql(sql, ['in',accountid])
        .then(res => {
          console.log(res.rows.item(0).totalIncome);
          if(res.rows.item(0).totalIncome != null){
            if(res.rows.length>0) {
              this.totalIncome = parseInt(res.rows.item(0).totalIncome);
              // this.balance = this.totalIncome-this.totalIncome;
              var result = {
                message: "success",
                value:this.totalIncome
              }
              console.log(result);
              resolve(result);
            }else{
              var result = {
                message: "failed",
                value:0
              }
              console.log(result);
              resolve(result);
            }
          }else{
            var result = {
              message: "failed",
              value:0
            }
            console.log(result);
            resolve(result);
          }
        })
        .catch(e => reject(e));
      }).catch(e => reject(e));
    });
  }

  getDataTotalExpenseByDate(table , periode , accountid) {
    if(periode == "year"){
      var sql   = "SELECT SUM(amount) AS totalIncome FROM "+table+" WHERE createdate BETWEEN datetime('"+this.yearNow+"-01-01 00:00:00') AND datetime('now','localtime') AND type=? AND accountid=?";
    }else if(periode == "month"){
      var sql   = "SELECT SUM(amount) AS totalIncome FROM "+table+" WHERE createdate BETWEEN datetime('"+this.yearNow+"-"+this.monthNow+"-01 00:00:00') AND datetime('now','localtime') AND type=? AND accountid=?";
    }else if(periode == "week"){
      var sql   = "SELECT SUM(amount) AS totalIncome FROM "+table+" WHERE createdate = datetime('now', '-7 day') AND type=? AND accountid=?";
    }else if(periode == "day"){
      var sql   = "SELECT SUM(amount) AS totalIncome FROM "+table+" WHERE createdate BETWEEN datetime('"+this.yearNow+"-"+this.monthNow+"-"+this.dateNow+" 00:00:00') AND datetime('now','localtime') AND type=? AND accountid=?";
    }else{

    }
    return new Promise((resolve, reject) => {
      this.sqlite.create({
        name: 'mypocket.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql(sql, ['out',accountid])
        .then(res => {
          console.log(res.rows.item(0).totalExpense);
          if(res.rows.item(0).totalExpense != null){
            if(res.rows.length>0) {
              this.totalExpense = parseInt(res.rows.item(0).totalExpense);
              // this.balance = this.totalIncome-this.totalExpense;
              var result = {
                message: "success",
                value:this.totalExpense
              }
              console.log(result);
              resolve(result);
            }else{
              var result = {
                message: "failed",
                value:0
              }
              console.log(result);
              resolve(result);
            }
          }else{
            var result = {
              message: "failed",
              value:0
            }
            console.log(result);
            resolve(result);
          }
        })
        .catch(e => reject(e));
      }).catch(e => reject(e));
    });
  }

  getDataTotalExpense(table , accountid) {
    return new Promise((resolve, reject) => {
      this.sqlite.create({
        name: 'mypocket.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('SELECT SUM(amount) AS totalExpense FROM '+table+' WHERE type=? AND accountid=?', ["out",accountid])
        .then(res => {
          console.log(res.rows.item(0).totalExpense);
          if(res.rows.item(0).totalExpense != null){
            if(res.rows.length>0) {
              this.totalExpense = parseInt(res.rows.item(0).totalExpense);
              // this.balance = this.totalIncome-this.totalExpense;
              var result = {
                message: "success",
                value:this.totalExpense
              }
              console.log(result);
              resolve(result);
            }else{
              var result = {
                message: "failed",
                value:0
              }
              console.log(result);
              resolve(result);
            }
          }else{
            var result = {
              message: "failed",
              value:0
            }
            console.log(result);
            resolve(result);
          }
        })
        .catch(e => reject(e));
      }).catch(e => reject(e));
    });
  }


  /*********** ACCOUNT TABLE ***********/

  saveDataAccount(DataForm) {
    var dateNow   = new Date();
    return new Promise((resolve, reject) => {
      this.sqlite.create({
        name: 'mypocket.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql("INSERT INTO account VALUES(NULL,?,?,?,?,?,datetime('now','localtime') )",[
          DataForm.value['name'],
          DataForm.value['type'],
          DataForm.value['currency'],
          DataForm.value['description'],
          0
        ]).then(res => {
          resolve(res);
        }).catch(e => {
          reject(e);
        });
      }).catch(e => {
        reject(e);
      });
    });
  }
  
  deleteData(id) {
    this.sqlite.create({
      name: 'mypocket.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('DELETE FROM account WHERE id=?', [id])
      .then(res => {
        console.log(res);
        // this.getDataAccount();
      })
      .catch(e => console.log(e));
    }).catch(e => console.log(e));
  }

  /*********** TRANSACTION TABLE ***********/

  saveDataTransaction(DataForm) {
    var dateNow   = new Date();
    return new Promise((resolve, reject) => {
      var accountid   = localStorage.getItem("AccountActive");
      var bankname, bankaccountno, bankaccountname;
      if(DataForm.value['pay'] != "transfer"){
        bankname          = "-";
        bankaccountno     = "-";
        bankaccountname   = "-";
      }else{
        bankname          = DataForm.value['bankname'];
        bankaccountno     = DataForm.value['bankaccountno'];
        bankaccountname   = DataForm.value['bankaccountname'];
      }
      this.sqlite.create({
        name: 'mypocket.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql("INSERT INTO accounttransaction VALUES ( NULL,?,?,?,?,?,?,?,?,?,?,?,datetime('now','localtime') )",[
          accountid,
          DataForm.value['type'],
          DataForm.value['pay'],
          bankname,
          bankaccountno,
          bankaccountname,
          DataForm.value['category'],
          DataForm.value['amount'],
          DataForm.value['transactiondate'],
          DataForm.value['usage'],
          DataForm.value['description']
        ]).then(res => {
          resolve(res);
        }).catch(e => {
          reject(e);
        });
      }).catch(e => {
        reject(e);
      });
    });
  }
  
  deleteDataTransaction(id) {
    this.sqlite.create({
      name: 'mypocket.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('DELETE FROM account WHERE accountid=?', [id])
      .then(res => {
        console.log(res);
        // this.getDataAccount();
      })
      .catch(e => console.log(e));
    }).catch(e => console.log(e));
  }


}
