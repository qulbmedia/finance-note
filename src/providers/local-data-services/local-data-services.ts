import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the LocalDataServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocalDataServicesProvider {

  accounts: any = [];
  expenses: any = [];
  totalIncome = 0;
  totalExpense = 0;
  balance = 0;

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
          this.accounts = [];
          for(var i=0; i<res.rows.length; i++) {
            this.accounts.push({
              id:res.rows.item(i).id,
              name:res.rows.item(i).name,
              type:res.rows.item(i).type,
              description:res.rows.item(i).description,
              amount:0,
              createdate:res.rows.item(i).createdate
            })
          }
          resolve(this.accounts);
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
          console.log(res);
          resolve(res);
        })
        .catch(e => reject(e));
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
        db.executeSql('SELECT SUM(amount) AS totalExpense FROM '+table+' WHERE type=? AND accountid=?', ["in",accountid])
        .then(res => {
          console.log(res.rows.item(0).totalExpense);
          if(res.rows.length>0) {
            this.totalExpense = parseInt(res.rows.item(0).totalExpense);
            this.balance = this.totalIncome-this.totalExpense;
            console.log(this.totalExpense);
            resolve(this.totalExpense);
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
        db.executeSql('SELECT SUM(amount) AS totalExpense FROM '+table+' WHERE type="out" AND accountid=?', [accountid])
        .then(res => {
          if(res.rows.length>0) {
            this.totalExpense = parseInt(res.rows.item(0).totalExpense);
            this.balance = this.totalIncome-this.totalExpense;
            resolve(res);
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
        db.executeSql('INSERT INTO account VALUES(NULL,?,?,?,?,?,?)',[
          DataForm.value['name'],
          DataForm.value['type'],
          DataForm.value['currency'],
          DataForm.value['description'],
          0,
          dateNow
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
        db.executeSql('INSERT INTO accounttransaction VALUES(NULL,?,?,?,?,?,?,?,?,?,?,?,?)',[
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
          DataForm.value['description'],
          dateNow
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

  getDataByAccountId(table , accountid) {
    return new Promise((resolve, reject) => {
      this.sqlite.create({
        name: 'mypocket.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('SELECT * FROM '+table+' WHERE id=?', [accountid])
        .then(res => {
          console.log(res);
          resolve(res);
        })
        .catch(e => reject(e));
      }).catch(e => reject(e));
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
