function lilly([arg1,arg2,arg3]){
  let age = Number(arg1);
  let washingMachinePrice = Number(arg2);
  let toyPrice = Number(arg3);
  let toys = 0;
  let bonusEven = 0;
  let moneyFromBirthdays = 0;
  //odd
  for(let i = 1; i <= age; i+=2){
    toys ++
  }
  //even
  for(let i = 1+1; i <= age; i+=2){
    bonusEven += 10;
    moneyFromBirthdays += bonusEven-1;
    //bonus = 0+10=10, 10+10=20, 20+10=30, 30+10=40, 40+10=50
    //money = 0+10=10, 10+20=30, 30+30=60, 60+40=100, 100+50=150
  }
  let money = moneyFromBirthdays + (toys * toyPrice);

  if(money > washingMachinePrice){
    console.log('Yes! ' + (money - washingMachinePrice).toFixed(2) + "lv left");
  } else {
    console.log('No! ' + (washingMachinePrice - money).toFixed(2) + "lv needed");
  }
}

lilly([10,170,6]);
