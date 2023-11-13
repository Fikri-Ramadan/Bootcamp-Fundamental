function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function sleep(millis) {
    await timeout(millis)
}

let t = Date.now();

sleep(100).then(() => console.log(Date.now() - t));