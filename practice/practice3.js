// var http=require("http")
// server=http.createServer((request,response)=>{
//     if(response)
//     response.end("Hello World\n");
// })
// var port=5001;
// server.listen(port,()=>{
//  console.log("server is running on port "+port)
// })

// var http=require("http")
// server=http.createServer((request,response)=>{
//         const data = {
//               title: "test user",
//             };

//             request=fetch("https://fakestoreapi.com/products", {
//               method: "POST",
//               body: JSON.stringify(data),
//               headers: {
//                 "Content-Type": "application/json",
//               },
//             })
//             .then(response => {
//           if (!response.ok) {
//             throw new Error('Network response was not ok');
//           }
//           return response.json();
//         })
//         .then(data => {
//           console.log(data);
//         })
//         .catch(error => {
//           console.error('There has been a problem with your fetch operation:', error);
//         });
// })
// var port=5005;
// server.listen(port,()=>{
//  console.log("server is running on port "+port)
// })

// var http = require("http");
// var url=require("url")
// var server = http.createServer((request, response) => {
//   var parsedUrl = url.parse(request.url,true);
//   console.log(parsedUrl)
//   var query = parsedUrl.query;
//   let str=query.split("&");
//   Obj={};
//   for(i of str){
//       let g=i.split("=");
//       Obj[g[0]]=g[1]
//   }
//   console.log(Obj)
// })
// var port=5000
// server.listen(port,()=>{
//   console.log("server is running on port "+port)
// })

// var http = require("http");
// var server = http.createServer((request, response) => {
//   var a=[
//       {
//         "id": 1,
//         "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//         "price": 109.95,
//         "description": "Your perfect pack for everyday use and walks in the forest. Simply throw it on your back and go.",
//         "category": "men's clothing",
//         "image": "https://fakestoreapi.com/img/1.jpg"
//       },
//       {
//         "id": 2,
//         "title": "Mens Casual Premium Slim Fit T-Shirts",
//         "price": 22.3,
//         "description": "Slim-fitting style, with a tapered leg and a great range of movement. Soft, stretchy fabric for all-day comfort.",
//         "category": "men's clothing",
//         "image": "https://fakestoreapi.com/img/2.jpg"
//       },
//       {
//         "id": 3,
//         "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Bracelet",
//         "price": 695,
//         "description": "From the Legends Collection, the Naga was created to be a symbol of love and abundance.",
//         "category": "jewelery",
//         "image": "https://fakestoreapi.com/img/3.jpg"
//       },
//       {
//         "id": 4,
//         "title": "Lulu Laptop Sleeve",
//         "price": 25.99,
//         "description": "A slim and light sleeve for your laptop, with soft padding to keep your device safe.",
//         "category": "electronics",
//         "image": "https://fakestoreapi.com/img/4.jpg"
//       },
//       {
//         "id": 5,
//         "title": "Smartphone Stand for Desk",
//         "price": 19.99,
//         "description": "A flexible, adjustable phone stand perfect for watching videos, reading, or video calls.",
//         "category": "electronics",
//         "image": "https://fakestoreapi.com/img/5.jpg"
//       }
//   ]
//   a.sort((a,b)=>{
//     return b.price-a.price
//   })

//   response.writeHead(200, {"Content-Type": "application/json"});
//   response.end(JSON.stringify(a));

//   }).listen(3000, () => {
//     console.log('Server running at http://localhost:3000/');
//     });


