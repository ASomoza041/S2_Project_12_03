"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 3

   Author: Alex A Somoza 
   Date: 2-28-19  
   
   Filename: ah_report.js
   
   Functions:
   
   calcSum(donorAmt)
      A callback function that adds the current donation amount in the array to the donationTotal variable
   
   findMajorDonors(donorAmt)
      A callback function that returns the value true only if the current donation amount in the array
      is greater than or equal to 1000
      
   donorSortDescending(a, b)
      A callback function used to sort the donation amounts from the array in descending order
      
   writeDonorRow(value)
      A callback function that writes the HTML code for each table row that provides the contact
      information for the donor
      
*/
//The variable below sets up the initial donation total to zero.
var donationTotal = 0;
donors.forEach(calcSum);
//The code below begins to create the table summary where it will tell us the total number of donators and money donated.
var summaryTable = "<table><tr><th>Donors</th><td>" + donors.length + "</td></tr><tr><th>Total Donations</th><td>$" + donationTotal.toLocaleString() + "</td></tr></table>";
//The code below takes the small table we just made and inputs it into the html file where there is the ID "donationSummary".
document.getElementById("donationSummary").innerHTML = summaryTable;
//The code below take our array and filters out all donators who donated at least $1,000 and places then into a new array.
var majorDonors = donors.filter(findMajorDonors);
//The code below takes the newly made array and sorts them in descending order.
majorDonors.sort(donorSortDescending);
//The code below begins to create the table for our array itmes.
var donorTable = "<table><caption>Major Donors</caption><tr><th>Donation</th><th>Donor ID</th><th>Date</th><th>Name</th><th>Adress</th><th>Phone</th><th>E-mail</th><tr>";
//The code below takes evert item in teh array and uses the writeDownRow function to write each item into the table. 
majorDonors.forEach(writeDonorRow);
//The code below closes the table
donorTable += "</table>";
//The code below takes the table we created and inputs into the html file.
document.getElementById("donorTable").innerHTML = donorTable;








function calcSum(donorAmt) {
      donationTotal += donorAmt[9];
}

function findMajorDonors(donorAmt) {
      return donorAmt[9] >= 1000;
}

function donorSortDescending(a, b) {
      return b[9] - a[9];
}

function writeDonorRow(value) {
      donorTable += "<tr>";
      donorTable += "<td>$" + value[9].toLocaleString() + "</td>";
      donorTable += "<td>" + value[0] + "</td>";
      donorTable += "<td>" + value[10] + "</td>";
      donorTable += "<td>" + value[2] + ", " + value[1] + "</td>";
      donorTable += "<td>" + value[3] + "<br />" + value[4] + ", " + value[5] + " " + value[6] + "</td>";
      donorTable += "<td>" + value[7] + "</td>";
      donorTable += "<td>" + value[8] + "</td>";
      donorTable += "</tr>";
}