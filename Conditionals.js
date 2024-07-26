//Exercise: Practice conditional statements

/*Complete the following steps to create: Are You Old Enough? 
Declare a variable age using the var keyword and set it to the number 10.
Add an if statement that checks if the value of the age variable is greater 
than or equal to the number 65. Inside the if block, console.log the sentence: 
"You get your income from your pension".
Add an "else if",  where you'll check if the value of the age is less than 65 
and greater than or equal to 18. Inside this "else if" block, 
type "console.log" and then "Each month you get a salary".
Add another "else if", and this time check if the value of the age is under 18. 
Inside the "else if" block, "type console.log" and then "You get an allowance".
Add an "else" statement to capture any other value. 
Inside the block, 
type "console.log" and then "The value of the age variable is not numerical".*/

var age = 10;
if(age>= 65){
    console.log("You get your income from your pension");
} else if(65>age>=18){
    console.log("Each month you get a salary");
} else if(0<=age<18){
    console.log("You get an allowance");
} else{
    console.log("The value of the age variable is not numerical");
}

/*Code the days of the week program as a switch statement
On the next line, define a new variable, name it day, and set its value to "Sunday".
Start coding a switch statement, passing the day variable as the expression to evaluate.
Inside the switch, add cases for every day of the week, 
starting with 'Monday', and ending with 'Sunday'. Make sure to use string values for days. 
Inside each case, for now, just add a console.log('Do something'), and add a break; 
on the line below.
At the very bottom of the switch statement, 
add the default case and add a console.log('There is no such day').
Finally, update the console.log calls for each case, 
based on whatever activity you have on each of the days.*/

var days="Sunday";
  switch(days){
    case 'Monday':
        console.log("i study");
        break;
    case 'Tuesday':
        console.log("You study");
        break;
    case 'Wednesday':
        console.log("he studies");
        break;
    case 'Thursday':
        console.log("Why i studied?");
        break;
    case 'Friday':
        console.log("Why you studied?")
        break;
    case 'Saturday':
        console.log("Why he studied");
        break;
    case 'Sunday':
        console.log("I don't know");
        break;
    default:
        console.log("there is no such day exists!")
        break;
  }

  //We practiced conditional statements, if , if else and switch statements. Thank you. Good luck!