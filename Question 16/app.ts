let Guest = ["Haseeb","Ateeq","Arsalan"];
console.log(`Mr ${Guest[0]}, You Are Invited For A Dinner!!`);
console.log(`Mr ${Guest[1]}, You Are Invited For A Dinner!!`);
console.log(`Mr ${Guest[2]}, You Are Invited For A Dinner!!`);
console.log(`Unfortunately ${Guest[1]} Is Not Coming Due To Some Reason!`);
Guest[1]="Faique";
console.log(`Mr ${Guest[1]}, You Are Invited For A Dinner!!`);
console.log("Hy guys, I Found a bigger dinner table!!");
Guest.unshift("Mohammad");
console.log(Guest);
Guest.splice(2,0,"Sanwal");
console.log(Guest)
Guest.push("Ali");
console.log(Guest);
console.log(`Mr ${Guest[0]}, You Are Invited For A Dinner!!`);
console.log(`Mr ${Guest[2]}, You Are Invited For A Dinner!!`);
console.log(`Mr ${Guest[1]}, You Are Invited For A Dinner!!`);
console.log(`Mr ${Guest[4]}, You Are Invited For A Dinner!!`);
console.log(`Mr ${Guest[3]}, You Are Invited For A Dinner!!`);
console.log(`Mr ${Guest[5]}, You Are Invited For A Dinner!!`);
