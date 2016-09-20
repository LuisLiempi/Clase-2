// var num1 = 18; //mayoria de edad
// //var edad = 15; //ingresa el usuario
// var edad = parseInt(prompt("Ingrese su edad"));

// if (edad >= num1 ) {
// 	// Si es mayor igual a 18
// 	alert ('Puedes ingresar');
// } else {
// 	// No es mayor igual a 18
// 	alert ('No puedes ingresar');
// }

// var nomUser = prompt("Ingrese su Nombre:")
// var num1 = 18; //mayoria de edad
// var edad = parseInt(prompt("Ingrese su edad:"));

// if (edad >= num1) {
// 	// Si es mayor igual a 18
// 	var inter = prompt("Eres interdicto (y/n):");
// 	var interY = "y";
// 	if (inter == interY) {
// 		// Si es mayor igual a 18 y ademas no es interdicto
// 		var msgT = "Hola!\n" + nomUser + ".\n" + "Tu puedes votar.";
// 		alert(msgT);
// 	}
// 	else {
// 		var msgF = "Hola!\n" + nomUser + ".\n" + "Tu no puedes votar.";
// 		alert(msgF);
// 	}

// } else {
// 	// No es mayor igual a 18
// 	var msgF = "Hola!\n" + nomUser + ".\n" + "Tu no puedes votar.";
// 	alert(msgF);
// }



// //NEGACION
// var edad = 17;

// if (!(edad >= 18)) {
// 	//alert("El resultado es Verdadero");
// 	resultado = true;
// }
// else {
// 	//alert("El resultado es Falso");
// 	resultado = false;
// }

// if (!resultado){
// 	alert ("No cumples con los requerimientos")
// }


// //CICLOS
// for (num = 2; num <= 20; num++) {
// 	document.write("num=" + num + "<br>")
// }


// //CICLOS CON ARRAY
// var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]

// for (i = 0; i <= 4; i++) {
// 	document.write("num=" + dias[i] + "<br>")
// }


// //CICLOS CON ARRAYDE MESES
// var meses = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"]
// //for (i = 0; i <= 11; i++) {
// //for (i = 0; i <= meses.length; i++) { //cuando desconozco la cantidad de variables
// for (i in meses) { // for (varialble in arreglo)

// 	if (meses[i] == "ene" || meses[i] == "dic") {
// 		document.write(meses[i] + "<br>")
// 	}	
// }


// //CICLOS CON ARRAYDE MESES
// var meses = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"]

// while (i < meses.length) {

// 	if (meses[i] == "mar" || meses[i] == "dic") {
// 		document.write(meses[i] + "<br>")
// 	}	
// 	i++;
// }


//CICLOS CON ARRAYDE MESES
 var meses = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"]

// for (i in meses) {

// 	if (meses[i] == "mar") {
// 		alert ("primer mes")
// 	}
// 	if (meses[i] == "jun") {
// 		alert ("sexto mes")
// 	}
// 	if (meses[i] == "dic") {
// 		alert ("duodecimo mes")
// 	}	
// }

for (i in meses) {

	switch (meses[i]) {
		case "ene":
			alert ("primer mes");
			break;
		case "jun":
			alert ("sexto mes");
			break;
		case "dic":
			alert ("duodecimo mes");
			break;
		default:
			alert ("defecto mes");
			break;

	}

	
}

