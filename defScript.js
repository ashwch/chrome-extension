function shortc() {
var curr=document.form1.rolle.value;
if(curr.length!=10 &&curr.length!=0){
 alert("Error : INVALID INPUT \nPlease enter your correct 10 digit roll number or\nelse use the drop down menus");}
var str=curr.toString();
var strArray = str.split("");
var year=strArray[1];
var yearInt=parseInt(year);
var roole=strArray[7] + strArray[8] + strArray[9];
var selYear = document.getElementById('yeear');
var selBranch=document.getElementById('branche');
if(yearInt==7){selYear.selectedIndex = 3;}
else if(yearInt==8){selYear.selectedIndex =2 ;}
else if(yearInt==9){selYear.selectedIndex = 1;}
else if(yearInt==0){selYear.selectedIndex =0;}
else alert("Invalid Year code");
var branch=strArray[5]+strArray[6];
var branchInt=parseInt(branch);
//alert(branchInt);
if(branchInt==13){selBranch.selectedIndex=2;}
else if(branchInt==21){selBranch.selectedIndex=4;}
else if(branchInt==13){selBranch.selectedIndex=5;}
else if(branchInt==32){selBranch.selectedIndex=3;}
else if(branchInt==54){selBranch.selectedIndex=6;}
else if(branchInt==10 && roole>60 ){selBranch.selectedIndex=1;}
else if(branchInt==54){selBranch.selectedIndex=6;}
else if(branchInt==10 && roole<=60 ){selBranch.selectedIndex=0;}
else if(branchInt==70){selBranch.selectedIndex=8;}
else if(branchInt==14){selBranch.selectedIndex=7;}
else alert("Invalid branch code ");
  var status = document.getElementById("status");
  status.innerHTML = "Fields Changed";
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);

}