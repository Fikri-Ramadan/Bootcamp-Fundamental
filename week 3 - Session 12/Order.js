class Order {
  #orders = [];

  addOrder(order) {
    this.#orders.push(order);
    let randomSeconds = (Math.floor(Math.random() * 10) + 1) * 1000;
  }

  getOrders() {
    return console.log(this.#orders);
  }

  timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async proses() {
    console.log('proses...');
    let counter = 0;
    while (counter <= this.#orders.length) {
      let randomSeconds = (Math.floor(Math.random() * 10) + 1) * 1000;
      let queue = counter + 1;

      await this.timeout(randomSeconds);
      console.log(`Queue ${queue} Done in ${randomSeconds / 1000} seconds`);

      counter++;
    }
  }
}

module.exports = Order;
