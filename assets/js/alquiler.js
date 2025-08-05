const alquileres = [
{
nombre: 'Casa de Pueblo',
src: 'https://cdn.pixabay.com/photo/2017/08/16/01/40/puerto-de-la-cruze-2646236_1280.jpg',
descripcion: 'Acogedora casa de pueblo antiguo',
ubicacion: 'Altiplano',
habitaciones: 3,
costo: 150000,
smoke: false,
pets: true,
},

{
nombre: 'Habitación Alemana',
src: 'https://cdn.pixabay.com/photo/2018/10/01/16/54/honfleur-3716726_1280.jpg',
descripcion: 'Cálida habitación en casa clásica estilo aleman',
ubicacion: 'Cajón del Maipo',
habitaciones: 1,
costo: 80000,
smoke: true,
pets: false,
},

{
nombre: 'Departamento Londinense',
src: 'https://cdn.pixabay.com/photo/2017/11/18/18/37/london-2960812_1280.jpg',
descripcion: 'Departamento contemporaneo con estilo minimalista',
ubicacion: 'Gran avenida',
habitaciones: 4,
costo: 200000,
smoke: true,
pets: true,
},

{
nombre: 'Casa Residencial',
src: 'https://cdn.pixabay.com/photo/2019/03/06/20/02/houses-4038954_1280.jpg',
descripcion: 'Amplios espacios y mucha seguridad dentro de conjunto residencial con todas las comodidades',
ubicacion: 'Ciudad de los valles',
habitaciones: 6,
costo: 290000,
smoke: false,
pets: true,
}
]

const cardAlquiler = document.querySelector("#cardAlquiler")

for (let alquiler of alquileres){
    cardAlquiler.innerHTML += `          
    <div  class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${alquiler.src}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${alquiler.nombre}
                </h5>
                <p class="card-text">
                  ${alquiler.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${alquiler.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${alquiler.habitaciones} Habitaciones
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${alquiler.costo}</p>
                <p class="text-danger">
                  <i class="fas fa-smoking-ban"></i> ${alquiler.smoke}
                </p>
                <p class="text-success">
                  <i class="fas fa-paw"></i> ${alquiler.pets}
                </p>
              </div>
            </div>
          </div>`
}
