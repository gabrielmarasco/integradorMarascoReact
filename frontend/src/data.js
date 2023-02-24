const data = {
  products: [
    {
      id: 1,
      marc: 'VolksWagen',
      model: 'Nivus Highline',
      year: '2023',
      category: 'SUV',
      description:
        'El integrante de la familia Volkswagen que reúne la mezcla exacta entre modernidad, potencia y tecnología. Y cada vez estás más cerca de tenerlo. VW Nivus viene con Motor TSI, VW Play y el diseño más innovador.',
      img: '/images/nivus-1.jpg',
    },
    {
      id: 2,
      marc: 'VolksWagen',
      model: 'Taos Hero',
      year: '2023',
      category: 'SUV',
      description:
        'Taos es el nuevo integrante de nuestra familia de SUVW y podemos decir orgullosos que lo fabricamos en Argentina para todas las familias de Latinoamérica. Es sinónimo de confort, seguridad, conectividad y diseño. Llegó Taos, tu próximo SUVW',
      img: '/images/taos-1.jpg',
    },
    {
      id: 3,
      marc: 'VolksWagen',
      model: 'T-Cross TSI',
      year: '2023',
      category: 'SUV',
      description:
        'El T-Cross de siempre viene más recargado que nunca con la incorporación de su nuevo motor 200 TSI. Aportándole una mayor eficiencia y una mejor autonomía al vehículo. Ofrece un consumo más económico y una elevada potencia en toda la curva de aceleración. ',
      img: '/images/tcross-1.jpg',
    },
    {
      id: 4,
      marc: 'VolksWagen',
      model: 'Vento Highline',
      year: '2023',
      category: 'Sedan',
      description:
        'El T-Cross de siempre viene más recargado que nunca con la incorporación de su nuevo motor 200 TSI. Aportándole una mayor eficiencia y una mejor autonomía al vehículo. Ofrece un consumo más económico y una elevada potencia en toda la curva de aceleración. Sus detalles hacen que el Vento sea perfecto. Disfrutá sus 10 colores de iluminación ambiental LED y su butaca con regulación eléctrica.',
      img: '/images/vento-1.jpg',
    },
    {
      id: 5,
      marc: 'BMW',
      model: '135i Pack M',
      year: '2023',
      category: 'Hachback',
      description:
        'El BMW 135i Coupé tiene un motor gasolina de 2979 cc con 6 cilindros ubicados en línea que alcanza una potencia máxima de 306 CV a 5800 rpm y par máximo de 400 nm a 1200-5000 rpm. Se trata por consiguiente de una mecánica con una potencia concreta de 306 CV, con alimentación inyección directa.',
      img: '/images/135-1.jpg',
    },
    {
      id: 6,
      marc: 'BMW',
      model: 'X6 Pack M',
      year: '2023',
      category: 'SUV',
      description:
        'El BMW X6 es un SUV coupé, del segmento E, fabricado por la marca alemana BMW desde 2008. Actualmente se comercializa la tercera generación, el BMW X6 2020, presentada en 2019.',
      img: '/images/x6-1.jpg',
    },
    {
      id: 7,
      marc: 'Ford',
      model: 'Mondeo Titanium',
      year: '2023',
      category: 'Sedan',
      description:
        'El Ford Mondeo es una de los sedan más conocidas de su segmento. Su apuesta en el mercado se desmarca de sus rivales por ofrecer un amplio abanico de tecnologías y posibilidades de equipamiento, si bien su gama de motores se ha ido reduciendo bastante con el paso del tiempo.',
      img: '/images/mondeo-1.jpg',
    },
    {
      id: 8,
      marc: 'Ford',
      model: 'F-150 Raptor',
      year: '2023',
      category: 'Pick-Up',
      description:
        'La nueva F-150 Raptor, fue pensada para hacer frente a todo tipo de desafíos y desempeñarse en los contextos más extremos. Cuenta con una capacidad off-road única e inigualable.',
      img: '/images/f150-1.jpg',
    },
    {
      id: 9,
      marc: 'Toyota',
      model: 'Hilux GR Sport',
      year: '2023',
      category: 'Pick-Up',
      description:
        'La nueva Hilux GR-Sport posee un motor 2,8l de 224 CV y 550 Nm* de torque máximo con caja automática de 6 velocidades y levas al volante. ​Además incorpora amortiguadores telescópicos monotubo GR que brindan una puesta a punto deportiva en la suspensión.',
      img: '/images/hilux-1.jpg',
    },
    {
      id: 10,
      marc: 'Toyota',
      model: 'SW4 Diamante',
      year: '2023',
      category: 'SUV',
      description:
        'Nuevo diseño frontal y trasero con faros delanteros Full-LED y luces intermitentes secuenciales, que le otorgan una figura más sofisticada y dinámica. Su nuevo diseño bitono para los colores blanco perlado y plata metalizado, junto con sus exclusivas llantas de aleación de 18” logran un estilo moderno y único.',
      img: '/images/sw4-1.jpg',
    },
    {
      id: 11,
      marc: 'Audi',
      model: 'A1 Sportback ',
      year: '2023',
      category: '',
      description:
        'El nuevo A1 ofrece un manejo ágil y una experiencia de conducción deportiva y equilibrada. Conocé todas las características; Aceleración, Datos Técnicos, Colores, Fotos. Potencia y Rendimiento. Innovador y Tecnológico. Deportivo y Elegante. Motores TFSI y TDI.',
      img: '/images/a1-1.jpg',
    },
    {
      id: 12,
      marc: 'Audi',
      model: 'Q8 Etron Sportbak ',
      year: '',
      category: '',
      description:
        'La apariencia deportiva del Audi Q8 apunta claramente al futuro con su nuevo Singleframe en diseño octogonal. En el interior, el MMI Navegación plus opcional con MMI touch response, el Audi virtual cockpit opcional y muchos otros sistemas de comunicación y entretenimiento como Audi music interface o Audi phone box² se lanzan hacia el futuro digital. Además, la suspensión y el motor ofrecen agilidad y confianza.',
      img: '/images/q8-1.jpg',
    },
    {
      id: 13,
      marc: 'Mercedes-Benz',
      model: 'GT-C ',
      year: '',
      category: '',
      description:
        'El Mercedes AMG GT C cuenta con un motor delantro longitudinal ocho cilindros en V sobrealimentado que desarolla un par máximo de 680 Nm desde 1900 rpm y una potencia máxima de 557 CV a 5750 rpm transmitida a las ruedas traseras de 20 pulgadas a través una transmisión automática de 7 velocidades.',
      img: '',
    },
    {
      id: 14,
      marc: 'Peugeot',
      model: '208 Feline',
      year: '2023',
      category: 'Hachback',
      description:
        'El diseño del 208 adopta el nuevo lenguaje de diseño de la marca Peugeot, con la nueva firma lumínica que se asemeja a los colmillos del León. En el frente, aparece el nombre del modelo para un toque distintivo y moderno. En el lateral, el juego de sombras le da un perfil dinámico. Y en la parte posterior, las luces traseras con forma de garra completan un diseño armonioso.',
      img: '/images/208-1.jpg',
    },
    {
      id: 15,
      marc: 'Peugeot',
      model: '5008 Feline',
      year: '2023',
      category: 'SUV',
      description:
        'El nuevo SUV PEUGEOT 5008 es totalmente modular para adaptarse a cualquier situación, como viajar con hasta 7 personas gracias a su tercer fila de asientos. De esta manera, nadie se queda afuera y todos disfrutan del viaje.',
      img: '/images/5008-1.jpg',
    },
  ],
};
export default data;
