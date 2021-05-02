
alert("A continuación crearas a su personaje. Evita repetir atributos.")
let nombrePj = prompt("¿Cual es el nombre de tu PJ?")
let atributoPrim = prompt("Selecciona tu atributo PRIMARIO: FUE - MEN - SOC")
let atributoSec = prompt("Selecciona tu atributo SECUNDARIO: FUE - MEN - SOC")
let atributoTer = prompt("Selecciona tu atributo TERCIARIO: FUE - MEN - SOC")
let especialidad = prompt("Describe tu especialidad")
let meta= prompt("Define tu meta")


document.write(nombrePj + "<br>")
document.write(atributoPrim + " = 3d6" + "<br>");
document.write(atributoSec + " = 2d6" + "<br>");
document.write(atributoTer + " = 1d6" + "<br>");
document.write("Mi especialidad es: " + especialidad + "<br>");
document.write("Mi meta es: " + meta + "<br>")