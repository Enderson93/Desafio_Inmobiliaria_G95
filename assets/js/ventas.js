const ventas = [
{
nombre: 'Departamento frente al rio',
src: 'https://cdn.pixabay.com/photo/2018/09/08/18/26/oslo-3663028_1280.jpg',
descripcion: 'Estilo moderno con la mas agradable de las ubicaciones frente al rio',
ubicacion: 'Buenos Aires',
habitaciones: 3,
costo: 220000,
smoke: true,
pets: false,
},

{
nombre: 'Moderno departamento',
src: 'https://cdn.pixabay.com/photo/2020/02/23/21/12/forward-4874668_1280.jpg',
descripcion: 'Diseño ultra moderno con espacios de concepto abierto',
ubicacion: 'Bilbao',
habitaciones: 4,
costo: 340000,
smoke: true,
pets: true,
},

{
nombre: 'Casa con negocio',
src: 'https://cdn.pixabay.com/photo/2018/10/05/11/07/latvia-3725678_1280.jpg',
descripcion: 'Casa con permiso e instalaciones de restaurante en el primer piso',
ubicacion: 'Barcelona',
habitaciones: 5,
costo: 520000,
smoke: true,
pets: false,
},

{
nombre: 'Casa Pareada',
src: 'https://cdn.pixabay.com/photo/2015/12/06/18/00/facades-1079800_1280.jpg',
descripcion: 'Acogedora casa con muro compartido con vecino, buenas instalaciones en barrio residencial',
ubicacion: 'Londres',
habitaciones: 6,
costo: 620000,
smoke: true,
pets: true,
}
]

const cardVenta = document.querySelector("#cardVenta")

for (let venta of ventas){
    cardVenta.innerHTML += `          
    <div  class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${venta.src}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${venta.nombre}
                </h5>
                <p class="card-text">
                  ${venta.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${venta.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${venta.habitaciones} Habitaciones
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${venta.costo}</p>
                <p class="text-danger">
                  <i class="fas fa-smoking-ban"></i> ${venta.smoke}
                </p>
                <p class="text-success">
                  <i class="fas fa-paw"></i> ${venta.pets}
                </p>
              </div>
            </div>
          </div>`
}