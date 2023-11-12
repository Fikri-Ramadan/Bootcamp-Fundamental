const Order = require('./Order.js');

const order = new Order();

order.addOrder('order 1');
order.addOrder('order 2');
order.addOrder('order 3');
order.getOrders();

order.proses();


