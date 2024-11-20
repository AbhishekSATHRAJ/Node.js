var http = require("http");
var url = require("url");
var port = 5000;

server = http.createServer((req, res) => {
    var Products=[
              {
                "id": 1,
                "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                "price": 109.95,
                "description": "Your perfect pack for everyday use and walks in the forest. Simply throw it on your back and go.",
                "category": "men's clothing",
                "image": "https://fakestoreapi.com/img/1.jpg"
              },
              {
                "id": 2,
                "title": "Mens Casual Premium Slim Fit T-Shirts",
                "price": 22.3,
                "description": "Slim-fitting style, with a tapered leg and a great range of movement. Soft, stretchy fabric for all-day comfort.",
                "category": "men's clothing",
                "image": "https://fakestoreapi.com/img/2.jpg"
              },
              {
                "id": 3,
                "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Bracelet",
                "price": 695,
                "description": "From the Legends Collection, the Naga was created to be a symbol of love and abundance.",
                "category": "jewelery",
                "image": "https://fakestoreapi.com/img/3.jpg"
              },
              {
                "id": 4,
                "title": "Lulu Laptop Sleeve",
                "price": 25.99,
                "description": "A slim and light sleeve for your laptop, with soft padding to keep your device safe.",
                "category": "electronics",
                "image": "https://fakestoreapi.com/img/4.jpg"
              },
              {
                "id": 5,
                "title": "Smartphone Stand for Desk",
                "price": 19.99,
                "description": "A flexible, adjustable phone stand perfect for watching videos, reading, or video calls.",
                "category": "electronics",
                "image": "https://fakestoreapi.com/img/5.jpg"
              }
          ]
          let prod=JSON.stringify(Products[2])
          res.writeHead(200, {"Content-Type": "application/json"}); 
          res.write(prod)
          res.end()
});

server.listen(port, () => {

  console.log("Server is on http://localhost:" + port);
});

