// const constante = "hola const";
// let variableLet = "hola let";

// variableLet = "modificada";

// console.log('La constante es:', constante);
// console.log('La variable es:', variableLet);

// const valor = null;
// if (valor) {
//     console.log('El valor es truthy');
// } else {
//     console.log('El valor es falsy');
// }

// let array1 = [{ attr: { valor: "VALOR!", fn: () => "Valor de fn" } }];
// console.log(array1 && array1[0] && array1[0].attr && array1[0].attr.fn());
// console.log(array1 && array1[0]?.attr?.fn());

// let valor1 = "Rojo";
// console.log(valor1 || "valor-por-defecto");


// let valor1 = "";
// let respuesta = (valor1 ? valor1 : "es falsy");
// console.log(respuesta);
// console.log(valor1 || "es falsy");
// const loguear = () => console.log("w");
// const cantidad = 23;
// const valor = 28778;

// const curso1 = {
//     nombre: 'Curso Nodejs',
//     cantidad,
//     valor,
//     loguear,
//     entradas: [ 1, 2, 3, 4, 5, 6 ],
//     obj2: {
//         valorInterno1: 'Interno1', 
//     },
//     calcularTotal: () => curso1.cantidad * curso1.valor,
//     superCalculador: () => {
//         const total = curso1.calcularTotal();

//     }
// };


// console.log(curso1);

// console.log('Nombre del curso:', curso1.nombre);

// console.log('Total de curso:', curso1.calcularTotal());



// curso
// console.log('Object.keys', Object.keys(curso));
// console.log('Object.values', Object.values(curso));
// console.log('Object.entries', Object.entries(curso));

// const curso2 = { ...curso1, nombre: 'Curso 2!' };

// curso1.valor = 0;
// curso1.cantidad = 0;

// console.log('curso2', curso2);

// const arr = [];

// const originalUsers = [
//     {
//         id: 1,
//         name: 'Mauri',
//     },
//     {
//         id: 2,
//         name: 'Agus',
//     },
// ];

// const originalPosts = [
//   {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//   },
//   {
//     "userId": 1,
//     "id": 2,
//     "title": "qui est esse",
//     "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//   },
//   {
//     "userId": 1,
//     "id": 3,
//     "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//     "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
//   },
//   {
//     "userId": 1,
//     "id": 4,
//     "title": "eum et est occaecati",
//     "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
//   },
//   {
//     "userId": 1,
//     "id": 5,
//     "title": "nesciunt quas odio",
//     "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
//   },
//   null,
//   {
//     "userId": 2,
//     "id": 7,
//     "title": "magnam facilis autem",
//     "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
//   },
//   {
//     "userId": 5,
//     "id": 8,
//     "title": "dolorem dolore est ipsam",
//     "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
//   },
//   {
//     "userId": 2,
//     "id": 9,
//     "title": "nesciunt iure omnis dolorem tempora et accusantium",
//     "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
//   },
//   {
//     "userId": 1,
//     "id": 10,
//     "title": "optio molestias id quia eum",
//     "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
//   },
// ];


// .find
// const desiredPost = originalPosts.find(post => post?.id === 8)
// console.log('desired post:', desiredPost);

// .filter

// const word = 'sunt78';
// const desiredPosts = originalPosts.filter(post => {
//     const titleIncluded = post?.title?.includes(word);
//     const bodyIncluded = post?.body?.includes(word);
//     return (titleIncluded || bodyIncluded);
// });

// console.log('desired posts:', desiredPosts);

// console.log('index 4:', originalPosts[4]);

const transformedPosts = originalPosts.map(post => {
    const user = originalUsers.find(user => user?.id === post?.userId);
    return {
        title: post?.title,
        userName: user?.name,
    };
});

console.log('tranformed posts:', transformedPosts);
console.log('original posts lenth:', originalPosts.length);
console.log('transformed posts lenth:', transformedPosts.length);