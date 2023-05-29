// Función para obtener el clima de una ciudad utilizando la API de OpenWeatherMap
async function obtenerClima(ciudad) {
  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`;
  
    try {
      const respuesta = await fetch(url);
      const datos = await respuesta.json();
  
      if (respuesta.ok) {
        const clima = {
          ciudad: datos.name,
          temperatura: datos.main.temp,
          descripcion: datos.weather[0].description,
        };
  
        return clima;
      } else {
        throw new Error(datos.message);
      }
    } catch (error) {
      throw new Error("Error al obtener el clima: " + error.message);
    }
  }
  
  const ciudad = "Barcelona";
  
  obtenerClima(ciudad)
    .then((clima) => {
      console.log("Datos del clima:", clima);
      console.log("Temperatura en", clima.ciudad, "es", clima.temperatura + "°C");
      console.log("Descripción:", clima.descripcion);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
