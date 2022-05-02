import IMAGES from '../components/ItemList/images'; 

const productos = [
    {idProducto: 1,
    nombre: 'Banana',
    imagen: IMAGES.image1,
    precio: '$180' ,
    linea: 'Frutas',
    detalle: 'El plátano es una fruta tropical procedente de la planta herbácea que recibe el mismo nombre o banano, perteneciente a la familia de las musáceas. Tiene forma alargada o ligeramente curvada, de 100-200 g de peso.'    
    },
    {idProducto: 2,
    nombre: 'Manzana',
    imagen: IMAGES.image2,
    precio: '$120',
    linea: 'Frutas',
    detalle: 'La manzana es una de las frutas más completas y saludables que puedes consumir, y es que tal y como indica el refrán inglés, "an apple a day keeps the doctor away", comer una manzana al día mantiene al médico lejos de ti.'
    },
    {idProducto: 3,
    nombre: 'Pera',
    imagen: IMAGES.image3,
    precio: '$100',
    linea: 'Frutas',
    detalle: 'La pera es el fruto del peral (Pyrus communis, de la familia de las Rosáceas). La pera es una fruta jugosa, carnosa, de diferente tamaño, sabor y color (del verde al amarillo, al rojo, hasta el color castaña)'
    },
    {idProducto: 4,
        nombre: 'Lechuga',
        imagen: IMAGES.image4,
        precio: '$90',
        linea: 'Verduras',
        detalle: 'Lactuca sativa, conocida comúnmente como lechuga, es una planta herbácea propia de las regiones semitempladas que se cultiva como alimento'
    }
    ];

    export default productos;