//Question 1
function question_1(){
	var x = [1,2,3,4,5,6,7];
	var n = Number(prompt("Enter the number:"));
	last(x, n);
} 

function last(x, n){
	var new_array = new Array();		
	new_array = x.reverse();
	
	var return_array = new Array();
	
	for(i=0; i<n; i++){
		return_array[i]  = new_array[i];
	}
		
	alert(return_array.reverse());	
} 

//Question 2
function question_2(){
	mycolor = ["Red", "Green", "White", "Black"];	
	
	alert(mycolor.join(","));
}

//Question 3
function question_3(){
	var myArray = [1,2,3,4,5,6];
	alert("Present array ->" + myArray);
	
	var pop = Number(prompt("Enter element to remove: "));
	
	remove_array_element(myArray,pop);
}

function remove_array_element(myArray,pop){	
	var i = myArray.indexOf(pop);
	if(i>-1){
		myArray.splice(i,1);
	}
	
	alert("Modified Array ->"+ myArray);
}


//Question 4
function question_4(){
	var email_address= prompt("Enter your email address-> ");
	protect_email(email_address);
}

function protect_email(email){
    var new_email = "";
	
    for(var i=0;i<4;i++){
        new_email+=email.charAt(i);
    }
    for(i=4;i<email.length;i++){
        if(email.charAt(i)==='@'){
            for(var j=i;j<email.length;j++){
               new_email+=email.charAt(j);
            }
            break;
        }
        new_email+=".";
    }
    alert("Protected email -> "+new_email);
}


//Question 5
function question_5(){
		var string = prompt("Enter the string");
        var times = prompt("Enter times to repeat");
        repeat(string,times);
}
function repeat(string, times){
	var new_string ="";
	
	for(var i = 0;i < times;i++){
		new_string += string;
	}
	alert(new_string);
}

//Question 6
function question_6(){
	var string = prompt("Enter the string");
	var ins_string = prompt("Insert String");
	var ins_index = prompt("Index to insert");
	insert(string,ins_string,ins_index)
}

function insert(string,ins_string,ins_index){
	var new_string="";
	
    for(var i= ins_index;i< string.length;i++){
        new_string += string.charAt(i);
	}
	alert(string.replace(new_string,ins_string+new_string));
}


//Question 7
function question_7(){
	var input_date = prompt("Enter date in mm/dd/yyyy");
	month_name(input_date);
}

function month_name(input_date){
	var date = new Date(input_date);
	var month = date.getMonth()+1;
		switch(month){
			case 1:
				alert("January");
				break;
			case 2:
				alert("February");
				break;
			case 3:
				alert("March");
				break;
			case 4:
				alert("April");
				break;
			case 5:
				alert("May");
				break;
			case 6:
				alert("June");
				break;
			case 7:
				alert("July");
				break;
			case 8:
				alert("August");
				break;
			case 9:
				alert("September");
				break;
			case 10:
				alert("October");
				break;
			case 11:
				alert("November");
				break;
			case 12:
				alert("December");
				break;
		}
}


//Question 8
function question_8(){
	var input_date = prompt("Enter date in mm/dd/yyyy");
	yesterday(input_date);
}

function yesterday(input_date){
	var date = new Date(input_date);
	date.setDate(date.getDate()-1);
	alert("Yesterday's date: " + date);
}

//Question 9
function question_9(){
	var input = prompt("Enter value: ");
	check_alphanumber(input);
}

function check_alphanumber(input){
	var regex=/^[a-zA-Z0-9]+$/;
	if(input.match(regex)){
		alert("Alpha Number");
	}
	else{
		alert("Not Alpha Numeric");
	}
}

//Question 10
function question_10(){
	var string=prompt("Enter a string: ");
	upperCase(string.charAt(0));;
}

function upperCase(char){
    if(char===char.toUpperCase()){
        alert("First character is UpperCase.");
    }else{
        alert("First character isn't UpperCase.");
    }
}


//Question 11
function question_11(){
	var string=prompt("Enter a string: ");
	vowels(string);
}
function vowels(string){
    var count = 0;
    for(var i=0;i<string.length;i++){
        var char = string.charAt(i).toLowerCase();
        var vow=char==='a'||char==='e'||char==='i'||char==='o'||char==='u';

        if(vow){
            count++;
        }
    }
    alert("Total vowels-> "+count);
}