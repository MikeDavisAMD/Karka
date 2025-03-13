console.log("Order food");
const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function serveFood() {
    await delay(3000); 
    console.log(" Serve food");
}

async function main() {
    console.log("Do other work while waiting...");
    await serveFood(); 
    console.log(" Eat food");
}
main()