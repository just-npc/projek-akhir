// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}


// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  const total = items.reduce((acc, item) => acc + item.price, 0);
  
  orders.push({
    id: generateUniqueId(),
    customerName: customerName,
    items: JSON.stringify(items),
    totalPrice: total,
    status: "menunggu",
  });
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  const order = orders.find(ord => ord.id === orderId);
  
  if (order) {
    order.status = status;
    console.log("succcess");
  } else {
    console.log("there's no id like that!");
  }
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  let total = 0;
  
  for (i = 0; i < orders.length; i++) {
    if (orders[i].status === "Selesai") {
      total += orders[i].totalPrice;
    }
  }
  
 return total;
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  orders = orders.filter(order => order.id !== id);
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
