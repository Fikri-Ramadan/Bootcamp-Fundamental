const Order = require('./Order.js');

const order = new Order();

order.addOrder('Pizza');
order.addOrder('Es teh');
order.addOrder('Hotdog');
order.getOrders();

order.proses();


