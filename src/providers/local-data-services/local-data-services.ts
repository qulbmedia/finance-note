import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';

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

  accountData = { name:"", type:"", currency:"",description:"", amount:0 , createdate:""};

  constructor(
    private sqlite: SQLite,
    private toast: Toast
  ) {
    console.log('Hello LocalDataServicesProvider Provider');
  }

  getData() {
    return new Promise((resolve, reject) => {

      this.sqlite.create({
        name: 'mypocket.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('CREATE TABLE IF NOT EXISTS account(id INTEGER PRIMARY KEY, name TEXT, type TEXT, currency TEXT, description TEXT, amount INT, createdate TEXT )', [])
        .then(res => console.log('Executed SQL'))
        .catch(e => console.log(e));
        db.executeSql('SELECT * FROM account ORDER BY id DESC',[]).then(res => {
          this.accounts = [];
          for(var i=0; i<res.rows.length; i++) {
            this.accounts.push({
              id:res.rows.item(i).id,
              name:res.rows.item(i).name,
              type:res.rows.item(i).type,
              description:res.rows.item(i).description,
              amount:res.rows.item(i).createdate
            })
          }
          resolve(this.accounts);
        })
        .catch(e => {
          console.log(e);
          reject(e);
        });
  
        // db.executeSql('SELECT SUM(amount) AS totalIncome FROM expense WHERE type="Income"', {})
        // .then(res => {
        //   if(res.rows.length>0) {
        //     this.totalIncome = parseInt(res.rows.item(0).totalIncome);
        //     this.balance = this.totalIncome-this.totalExpense;
        //   }
        // })
        // .catch(e => console.log(e));
        // db.executeSql('SELECT SUM(amount) AS totalExpense FROM expense WHERE type="Expense"', {})
        // .then(res => {
        //   if(res.rows.length>0) {
        //     this.totalExpense = parseInt(res.rows.item(0).totalExpense);
        //     this.balance = this.totalIncome-this.totalExpense;
        //   }
        // })
      }).catch(e => {
        console.log(e);
        reject(e);
      });

    });
    
  }

  saveDataAccount(DataForm) {
    console.log(DataForm);
    console.log(DataForm.value['name']);
    var dateNow = new Date();
    return new Promise((resolve, reject) => {
      this.sqlite.create({
        name: 'ionicdb.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('INSERT INTO account VALUES(NULL,?,?,?,?,?,?)',[
          this.accountData.name,
          this.accountData.type,
          this.accountData.currency,
          this.accountData.description,
          this.accountData.amount,
          // this.accountData.date
          dateNow
        ]).then(res => {
            console.log(res);
            this.toast.show('Data saved', '5000', 'center').subscribe(
              toast => {
                resolve(toast);
                console.log(toast);
              }
            );
          })
          .catch(e => {
            console.log(e);
            this.toast.show(e, '5000', 'center').subscribe(
              toast => {
                reject(toast);
                console.log(toast);
              }
            );
          });
      }).catch(e => {
        console.log(e);
        this.toast.show(e, '5000', 'center').subscribe(
          toast => {
            reject(toast);
            console.log(toast);
          }
        );
      });
    });
    
  }
  
  deleteData(rowid) {
    this.sqlite.create({
      name: 'ionicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('DELETE FROM expense WHERE rowid=?', [rowid])
      .then(res => {
        console.log(res);
        this.getData();
      })
      .catch(e => console.log(e));
    }).catch(e => console.log(e));
  }



}
