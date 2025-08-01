const contactosData = [
  {
    id: 1,
    nombre: "Programador 1",
    descripcion: "Programador de aplicaciones web",
    avatar: "/image/persona1.png",
    ultima_conecion: "Ahora",
    conecion: "En linea",
    messages: [
      {
        emisor: "YO",
        hora: "23:15",
        id: 1,
        texto: "¡Hola! ¿Cómo has estado?",
        status: "visto",
      },
      {
        emisor: "OTRO",
        hora: "23:16",
        id: 2,
        texto: "Todo bien, ¿y tú?",
        status: "visto",
      },
      {
        emisor: "YO",
        hora: "23:17",
        id: 3,
        texto: "Me alegra escuchar eso.",
        status: "visto",
      },
    ],
  },
  {
    id: 2,
    nombre: "Programador 2",
    descripcion: "Programador Backend",
    avatar: "/image/persona2.png",
    ultima_conecion: "Ahora",
    conecion: "En linea",
    messages: [
      {
        emisor: "YO",
        hora: "10:10",
        id: 1,
        texto: "¡Hola! ¿Qué tal tu día?",
        status: "visto",
      },
      {
        emisor: "OTRO",
        hora: "10:15",
        id: 2,
        texto: "Todo bien, trabajando en un proyecto nuevo.",
        status: "visto",
      },
    ],
  },
  {
    id: 3,
    nombre: "Programador 3",
    descripcion: "Programador de WordPress",
    avatar: "/image/persona3.png",
    ultima_conecion: "Hoy a las 15:30",
    conecion: "Desconectado",
    messages: [
      {
        emisor: "YO",
        hora: "15:05",
        id: 1,
        texto: "¡Hola! ¿Cómo va el trabajo?",
        status: "no visto",
      },
      {
        emisor: "OTRO",
        hora: "15:15",
        id: 2,
        texto: "Todo en orden, gracias. ¿Y tú?",
        status: "no visto",
      },
    ],
  },
  {
    id: 4,
    nombre: "Programador 4",
    descripcion: "Programador de inteligencia artificial",
    avatar: "/image/persona4.png",
    ultima_conecion: "Ayer a las 22:30",
    conecion: "Desconectado",
    messages: [
      {
        emisor: "YO",
        hora: "22:05",
        id: 1,
        texto: "Hola, ¿qué tal tu día?",
        status: "no visto",
      },
      {
        emisor: "OTRO",
        hora: "22:10",
        id: 2,
        texto: "Bien, estoy aprendiendo algo nuevo.",
        status: "no visto",
      },
    ],
  },
];
export const getContactList = () => {
  return contactosData;
};
export const getContactById = (id) => {
  return contactosData.find((contact) => contact.id === id) || null;
};
