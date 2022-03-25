import {
   imgCarousel_1,
   imgCarousel_2,
   imgCarousel_3,
   imgCarousel_4,
   imgCarousel_5,
   imgCarousel_6,
   catTelevisores,
   catCelulares,
   catClimatizacion,
   catColchonesSommiers,
   catLavarropasLavavajillas,
   catNotebook,
   catHeladeras,
   catHerrElectricas,
   catAguaCaliente,
   catCocinas,
   catPequenosElec,
   catCuidadoPersonal,
} from './images';

const slideImages = [
   imgCarousel_1,
   imgCarousel_2,
   imgCarousel_3,
   imgCarousel_4,
   imgCarousel_5,
   imgCarousel_6,
];

const categoriesData = [
   {
      nombre: 'Televisores',
      img: catTelevisores,
   },
   {
      nombre: 'Celulares',
      img: catCelulares,
   },
   {
      nombre: 'Climatizacion',
      img: catClimatizacion,
   },
   {
      nombre: 'Colchones y Sommiers',
      img: catColchonesSommiers,
   },
   {
      nombre: 'Lavarropas y Lavavajillas',
      img: catLavarropasLavavajillas,
   },
   {
      nombre: 'Notebooks',
      img: catNotebook,
   },
   {
      nombre: 'Heladeras, Freezers y Cavas',
      img: catHeladeras,
   },
   {
      nombre: 'Herramientas Eléctricas',
      img: catHerrElectricas,
   },
   {
      nombre: 'Agua Caliente',
      img: catAguaCaliente,
   },
   {
      nombre: 'Cocinas y Hornos',
      img: catCocinas,
   },
   {
      nombre: 'Pequeños Electrodomésticos',
      img: catPequenosElec,
   },
   {
      nombre: 'Cuidado Personal',
      img: catCuidadoPersonal,
   },
];

export { slideImages, categoriesData };
