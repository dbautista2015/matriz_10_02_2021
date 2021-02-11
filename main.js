// const array =[
//     ["Enero", "Lunes"],
//     ["Febrero"],
//     ["Marzo"],
//     ["Abril"],

// ];

const matriz = [];
let bandera = true;
for (let i = 0; i <= 10; i++) {
    let data = new Array(11).fill("Mayo",0,11);
    //let data2 = new Array(9).fill("Julio",0,11);
    for (let j = 0; j <= 10; j++) {
        if(i==3 && bandera){
            data = new Array(5).fill("Febrero",0,6);
            //data2= new Array(2).fill("Agosto",0,5);
            data.unshift(null,"Diana","Bautista",38,false,"Carrera 2F");
            bandera = false;
        }
    }
    matriz[i] = data;
}
console.log(matriz); 