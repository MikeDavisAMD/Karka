function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function test() {
    console.log("Start");
    await delay(3000);
    console.log("Waited 3 seconds");
    console.log("End");
}

test();