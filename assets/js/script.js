
const cardEle = document.querySelector('.producto');
const iCantidad = document.querySelector("#i1");
const iColor = document.querySelector("#i2");
const valor = document.querySelector("#valor");
const btn = document.querySelector("#calcular");

const total = document.querySelector("#total")
const cantidad = document.querySelector("#cantidad")
const color = document.querySelector("#color")

cardEle.style.backgroundColor = "#7ba238"
cardEle.style.borderRadius = "2.5%"

const precio = 400000;

btn.addEventListener("click",() =>{

    
    const totalCompra = precio * +iCantidad.value;
    valor.textContent = totalCompra.toLocaleString('es-CL');
    total.textContent = totalCompra.toLocaleString('es-CL');
    cantidad.textContent = iCantidad.value;
    color.style.backgroundColor = iColor.value;
        
} )  



