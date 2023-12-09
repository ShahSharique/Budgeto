function onLoadingAnotherHtml() {
  const budgetValue = Number(localStorage.budgetValue);
  document.getElementById("budget_amount").innerHTML = budgetValue;
}

function showBudget(budgetValue) {
  if (budgetValue === 0 || budgetValue < 0) {
    alert("Enter a valid input");
  } else {
    document.getElementById("budget_amount").innerHTML = budgetValue;
    localStorage.setItem("budgetValue", budgetValue);
    console.log(budgetValue);
  }
}

let list = [];
if (
  localStorage.getItem("expenseAmount") != null ||
  localStorage.getItem("expenseAmount") != NaN
) {
  let check = localStorage.getItem("expenseAmount").split(",");
  for (i = 0; i < check.length; i++) {
    list.push(parseInt(check[i]));
    newelement();
  }
  console.log(list);
}

function expenses(expenseAmount) {
  if (expenseAmount === 0 || expenseAmount < 0) {
    alert("Enter a valid input");
  } else {
    document.getElementById("expense_amount").innerHTML = expenseAmount;
    list.push(expenseAmount);
    //list.push(Number(expenseAmount));
    localStorage.setItem("expenseAmount", list);
    console.log(list);
    this.showBalance();
    newelement();
  }

  console.log(list);
}

function showBalance() {
  let total = 0;
  for (let i = 0; i < list.length; i++) {
    total += Number(list[i]);
  }
  console.log("total" + total);
  this.__total = total;

  const balanceAmount = localStorage.budgetValue - total;
  document.getElementById("balance_amount").innerHTML = balanceAmount;
  localStorage.setItem("balanceAmount", balanceAmount);
  this.updateExpense();
}

function updateExpense() {
  document.getElementById("expense_amount").innerHTML = this.__total;
}

// Click on a close button to hide the current list item
function removevalfromlist(value) {
  for (i = 0; i < list.length; i++) {
    if (list[i] == value && list.length > 1) {
      list.splice(i, 1);
      localStorage.setItem("expenseAmount", list);
    } else if (list.length <= 1) {
      list = []
      localStorage.removeItem("expenseAmount");
    }
    console.log(list.length);
  }
  newelement();
  console.log(value);
  console.log(list);
}

function newelement() {
  if (list.length != 0) {
    document.getElementById("myUL").innerHTML = "";
    for (j = 0; j < list.length; j++) {
      document.getElementById("myUL").innerHTML +=
        "<li>" +
        list[j] +
        "<span class='close' onclick=\"removevalfromlist('" +
        list[j] +
        "')\">X</span></li>";
    }
    showBalance();
  }else{
    document.getElementById("myUL").innerHTML = "";
  }
}

