
class Worker {
	constructor(nume, surname, hourRate, hours){
		this.nume = nume;
		this.surname = surname;
		this.hourRate = hourRate;
		this.hours = hours;
	}
		getNume(){
		return this.nume;
		}
		getSurname(){
		return this.surname;
		}

		getHourRate(){
		return this.hourRate;
		}
		getHours(){
		return this.hours;
		}
	
	
	

	getSalary() {
		return this.hourRate*this.hours;
	}

	increaseSalary( n) {
		
		this.hourRate = n + this.getHourRate();
	} 

	setTax(k){
		this.k = this.getSalary()*(k/100);
	}   
	getSalaryNetto(){
		return (this.getSalary() - this.k); 
	} 
}

console.log('\nSarcina nr 1');
let worker = new Worker('Maria', 'Lisevici', 10, 176);
console.log(worker.nume); //afișează 'Maria' 
console.log(worker.surname); //afișează 'Lisevici' 
console.log(worker.hourRate); //afișează 10 
console.log(worker.hours); //afișează 176 
console.log(worker.getSalary()); 




console.log('\nSarcina nr 2');
let worker1 = new Worker('Daniel', 'Maga', 10, 192);
console.log(worker1.nume); //afișează 'Daniel' 
console.log(worker1.surname); //afișează 'Maga' 
console.log(worker1.hourRate); //afișează 12 
console.log(worker1.hours); //afișează 180
console.log(worker1.getSalary()); 

                  

console.log('\nSarcina nr 3');
if(worker.getSalary() > worker1.getSalary()){
	console.log(worker.nume + " are un salariu mai mare. Salariul acestuia este = " + worker.getSalary());
}	else if(worker.getSalary() < worker1.getSalary()){
	console.log(worker1.nume + " are un salariu mai mare. Salariul acestuia este = " + worker1.getSalary());
}	else {
	console.log("Acesti doi lucratori au un salariu egal.");
}





console.log('\nSarcina nr 4');
let worker3 = new Worker('Anton', 'Chiverciuc', 10, 176);
console.log(worker3.getNume()); //afișează 'Anton' 
console.log(worker3.getSurname()); //afișează 'Chiverciuc' 
console.log(worker3.getHourRate()); //afișează 10
console.log(worker3.getHours()); //afișează 176 
console.log(worker3.getSalary()); 



                                                                     
console.log('\nSarcina nr 5');
let worker4 = new Worker('Mihai', 'Crihan', 10, 176);
console.log(worker4.getNume()); //afișează 'Mihai' 
console.log(worker4.getSurname()); //afișează 'Crihan' 
console.log(worker4.getHourRate()); //afișează 10
console.log(worker4.getHours()); //afișează 176 
console.log(worker4.getSalary()); 
worker4.increaseSalary(2);
console.log(worker4.getSalary()); 


 

console.log('\nSarcina nr 6');
let worker5 = new Worker('Ilona', 'Bocancea', 10, 176);
console.log(worker5.getNume()); //afișează 'Ilona' 
console.log(worker5.getSurname()); //afișează 'Bocancea' 
console.log(worker5.getHourRate()); //afișează 10
console.log(worker5.getHours()); //afișează 176 
console.log(worker5.getSalary()); 
worker5.increaseSalary(2);
console.log(worker5.getSalary()); 
worker5.setTax(18);
console.log(worker5.getSalaryNetto().toFixed(2));





console.log('\nSarcina  nr 7');
var a = [['Denis', 'Spataru', 6, 165], ['Alexandru', 'Stavar', 13, 136], ['Igor', 'Soha', 7, 50 ]];

for(var i = 0; i < 3; i++){
	
	var vector = [];
	for(var j = 0; j < 4; j++){
		vector.push(a[i][j]);
	}
	let worker6 = new Worker(vector[0], vector[1], vector[2], vector[3]);
	console.log(worker6.getNume());
	console.log(worker6.getSurname()); 
	console.log(worker6.getHourRate()); 
	console.log(worker6.getHours()); 
	console.log(worker6.getSalary()); 
	worker6.increaseSalary(2);
	console.log(worker6.getSalary()); 
	worker6.setTax(18);
	console.log(worker6.getSalaryNetto().toFixed(2));

}

