function Calculate() {
	var Salary, PTincome, TaxRate;
	
	Salary = document.getElementById("Gross").value;
	
		if ( Salary <= 9225){
		PTincome = 	Salary * 0.9;
		TaxRate = 10;	
		}
		
		else if ( Salary <= 37450 ){
		PTincome = Salary * 0.85;
		TaxRate = 15;
		}
		
		else if ( Salary <= 90750 ){
		PTincome = Salary * 0.75;
		TaxRate = 25;
		}
		
		else if ( Salary <= 189300 ) {
		PTincome = Salary * 0.72;
		TaxRate = 28;
		}
		
		else if	( Salary <= 411500 ) {
		PTincome = Salary * 0.67;
		TaxRate = 33;
		}
		
		else if ( Salary <= 413200 ) {
		PTincome = Salary * 0.65;
		TaxRate = 35;
		}
		
		else {
		PTincome = Salary * 0.604;
		TaxRate = 39.6;
		}
		
		var monthly = PTincome/12;
		
		document.getElementById("TaxRate").innerHTML = TaxRate;
		document.getElementById("yearly").innerHTML = PTincome;
		document.getElementById("monthly").innerHTML = monthly;
		document.getElementById("housing").innerHTML = monthly*0.33;
		document.getElementById("transportation").innerHTML = monthly*0.14;
		document.getElementById("food").innerHTML = monthly*0.10;
		document.getElementById("savings").innerHTML = monthly*0.10;
		document.getElementById("debt payment").innerHTML = monthly*0.10;
		document.getElementById("other").innerHTML = monthly*0.23;
		
	}