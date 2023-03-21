let details1 =
{
  "1283378222": [{
    "mobile_number": 9882234567,
    "account_holder_name": "Prakash",
    "account_status": "Active",
    "last_deposite_date": "2023-1-1",
    "last_withdraw_date": "2023-1-1",
    "current_balance_amount": 56700
  }],
  "1283374321": [{
    "mobile_number": "9882232007",
    "account_holder_name": "Sujatha Rao",
    "account_status": "Active",
    "last_withdraw_date": "2023-1-1",
    "last_deposite_date": "2023-1-1",
    "current_balance_amount": 67000
  }]
}
let details2 = {
  "9882234567": [{
    "account_number": 1283378222,
    "account_holder_name": "Prakash",
    "account_status": "Active",
    "last_deposite_date": "2023-1-1",
    "current_balance_amount": 56700
  }],
  "9882232007": [{
    "account_number": 1283374321,
    "account_holder_name": "Sujatha Rao",
    "account_status": "Active",
    "last_deposite_date": "2023-1-1",
    "current_balance_amount": 67000
  }]
}

let map1 = new Map();
let map2 = new Map();


for (let key in details1) {
  map1.set(key, details1[key][0]);
}

for (let key in details2) {
  map2.set(key, details2[key][0]);
}





const mar4 = () => {

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${year}-${month}-${day}`;
  console.log("Today's Date =", currentDate);

  let display = document.getElementById("display");
  let accnum = document.getElementById("accountnumber").value;
  //let phonum = document.getElementById("phonenumber").value;
  let depositeamount = document.getElementById("depositeamount").value;
  let withdrawamount = document.getElementById("withdrawamount").value;
  let deposite = document.getElementById("radio1");
  let withdraw = document.getElementById("radio2");

  let lastdepositedate = map1.get(accnum).last_deposite_date;
  console.log("last_deposite_date=", lastdepositedate);
  let lastwithdrawdate = map1.get(accnum).last_withdraw_date;
  console.log("last_withdraw_date=", lastdepositedate);


  //let jsObject1 = JSON.parse(JSON.stringify(details1));
  // let map1 = new Map();
  // for (let key in jsObject1) {
  //   map1.set(key, jsObject1[key]);
  // }

  // //console.log("Details1",map1);

  // let jsObject2 = JSON.parse(JSON.stringify(details2));
  // let map2 = new Map();
  // for (let key in jsObject2) {
  //   map2.set(key, jsObject2[key]);
  // }

  // //console.log("Details2",map2);
  // console.log(map2.values());


  //console.log(map1.get(accnum)); 
  //console.log(map2.get(phonum).account_number);
  if (deposite.checked) {

    if (accnum != "") {

      if (map1.get(accnum).account_status == "Active") {

        if (currentDate != lastdepositedate) {

          if (depositeamount != "") {
            let balance = parseInt(map1.get(accnum).current_balance_amount) + parseInt(depositeamount);

            let change_date = map1.get(accnum);
            change_date.last_deposite_date = currentDate;
            map1.set(accnum, change_date);

            let result = map1.get(accnum);
            result.current_balance_amount = balance;
            map1.set(accnum, result);

            let account = map1.get(accnum);
            display.innerHTML = "Dear &nbsp;" + account.account_holder_name + " &nbsp; your Account balance is &nbsp;" + account.current_balance_amount + "<br><br>" + "<span calss=sp1>Thank you for visiting our bank :)</span>";
            console.log("-----------------", map1.get(accnum), "--------------");
          }
          else {
            console.log("Enter some deposite amount");
          }
        }
        else {
          let account = map1.get(accnum);
          display.innerHTML = "Sorry &nbsp;" + account.account_holder_name + " &nbsp; you reach your daily limits :( &nbsp;" + "<br><br>" + "<span class=sp2 >Thank you for visiting our bank</span>";
          console.log("you reach daily limits");
        }
      }
      else {
        console.log(" acc is blocked contact the Bank ")
      }
    }
    else { console.log("--------enter your account number---------------"); }
    console.log(lastdepositedate);
  }
  
  else if (withdraw.checked) {
    if (accnum != "") {

      if (map1.get(accnum).account_status == "Active") {

        if (currentDate != lastwithdrawdate) {

          if (withdrawamount != "") {
            let balance = parseInt(map1.get(accnum).current_balance_amount) - parseInt(withdrawamount);

            let result = map1.get(accnum);
            result.current_balance_amount = balance;
            map1.set(accnum, result);

            let change_date = map1.get(accnum);
            change_date.last_withdraw_date = currentDate;
            map1.set(accnum, change_date);

            let account = map1.get(accnum);
            console.log("-----------------", map1.get(accnum), "--------------");
            display.innerHTML = "Hi &nbsp;" + account.account_holder_name + " &nbsp; your Account balance is &nbsp;" + account.current_balance_amount + "<br><br>" + "<span calss=sp1>Thank you for visiting our bank :)</span>";
          }
          else {
            console.log("Enter some withdraw amount");
          }
        }
        else {
          let account = map1.get(accnum);
          display.innerHTML = "Sorry &nbsp;" + account.account_holder_name + " &nbsp; you reach your daily limits  &nbsp;" + "<br><br>" + "<span class=sp2 >Thank you for visiting our bank :(</span>";
          console.log("you reach daily limits");
        }
      }
      else {
        console.log(" acc is blocked contact the Bank ")
      }
    }
    else { console.log("--------enter your account number---------------"); }
  }

  else {
    console.log("please click any one of the function");
  }


}
