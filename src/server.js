import { Server } from "miragejs";


export function getServer() {
let server =  new Server({
  routes() {
    this.namespace = "api";

    this.get("/categories", () => {
	return [
        { id: 1, name: "biryani", image: "../assets/biryani-1.jpg", count: 5},
        { id: 2, name: "burgers", image: "../assets/burger-1.jpg", count: 5},
        { id: 3, name: "chaat", image: "../assets/chaat-1.jpg", count: 5},
	{ id: 4, name: "noodles", image: "../assets/noodles-1.jpg", count: 5},
	{ id: 5, name: "pasta", image: "../assets/pasta-1.jpg", count: 5},
	{ id: 6, name: "pizza", image: "../assets/pizza-1.jpg", count: 5}
      ];
    });


    this.get("/categories/:id", () => {
	return [
        { id: 1, name: "Sharma Restaurant", image: "../assets/biryani-1.jpg", open: true, rating: 3.1},
        { id: 2, name: "Behrooz Biryani", image: "../assets/biryani-2.jpg", open: true, rating: 4.1},
        { id: 3, name: "Aroma House", image: "../assets/biryani-1.jpg", open: false, rating: 4.2},
	{ id: 4, name: "New Hyderabad House", image: "../assets/biryani-2.jpg", open: false, rating: 4.0},
	{ id: 5, name: "Punjabi Rasoi", image: "../assets/biryani-1.jpg", open: true, rating: 3.2}
      ];
    });
  }
});

return server;
}
