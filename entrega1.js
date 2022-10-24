let nombreCompleto = prompt("Ingresa tu Nombre Completo");
alert("Nombre ingresado: "+ nombreCompleto);

let numeroTelefonico = prompt("Ingresa tu numero para ponernos en contacto");
alert("Numero ingresado: "+ numeroTelefonico);

let tarjetaCasamiento = 500;
let tarjetaBautismo = 350;
let tarjetaCumpleanos = 500;
let opcion = mostrarMenu();
let dineroIngresado = 0;

    if(opcion!=4)
    {
      comprarTarjeta(opcion);
    }
    else
    {
      alert("GRACIAS");
    }

    function mostrarMenu()
    {
      return prompt(`Seleccione una opcion: 
                    1. casamiento (${tarjetaCasamiento}ARS)
                    2. bautismo (${tarjetaBautismo}ARS)
                    3. cumpleanos(${tarjetaCumpleanos}ARS)
                    4. terminar`);
      
    }

    function comprarTarjeta(opcion)
    {
      switch (opcion) 
      {
        case "1":
        {
            pedirDinero(tarjetaCasamiento)
            break;
        }
        case "2":
        {
            pedirDinero(tarjetaBautismo)
            break;
        }
        case "3":
        {
            pedirDinero(tarjetaCumpleanos)
            break;
        }
        default:
        {
            alert("opcion invalida")
            break;
        }
        
      }

    }
    function pedirDinero(priceProduct)
    {
            while(dineroIngresado<priceProduct)
            {
              let dinero = Number(prompt("¿Con cuanto va a pagar?"));
              
              if(dinero<priceProduct)
              {
                  alert("monto invalido")
              }
              else{
                  dineroIngresado+=dinero;
              }
            }
            
              let cambio = dineroIngresado - priceProduct;
              alert("Su cambio es: " + cambio);
              alert("Gracias, nos pondremos en contacto para la entrega de su producto");

    }

