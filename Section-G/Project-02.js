const cart = [
  { id: 1, name: "Shirt", price: 20, quantity: 2 },
  { id: 2, name: "Pants", price: 50, quantity: 1 }
];

// 1. Calculate Total Cost (Price * Quantity)
const totalCost = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
console.log("Total Cost: $", totalCost); // $90

// 2. Modify Quantity (Update item id: 1 quantity to 3 immutably)
const updatedCart = cart.map(item => 
  item.id === 1 ? { ...item, quantity: 3 } : item
);
console.log("Updated Cart:", updatedCart);

// 3. Remove Item (Remove item id: 2)
const remainingCart = updatedCart.filter(item => item.id !== 2);
console.log("Cart After Removal:", remainingCart);