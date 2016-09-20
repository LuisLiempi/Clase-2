



// - Debera poder ingresar un dia de la semana
// - Debera poder compararlo con todos los dias de la semana
// - Debera evaluar si es un dia de semana y fin de semana mediante un mensaje similar a 'El dia es habil' sino 'El dia es fin de semana';
// - En caso de cnontrar el dia utilizar la sentencia break y terminar el for




//CICLOS CON ARRAYDE MESES


var day = prompt("Ingrese su dia:")

var dayWeek = ["lun", "mar", "mier", "jue", "vie", "sab", "dom"]

for (day in dayWeek) {

	switch (dayWeek[i]) {
		case "lun":
			alert ("primer mes");
			break;
		case "mar":
			alert ("sexto mes");
			break;
		case "mier":
			alert ("duodecimo mes");
			break;
		default:
			alert ("defecto mes");
			break;

	}

	
}