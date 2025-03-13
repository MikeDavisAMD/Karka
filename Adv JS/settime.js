const a=setInterval(() => {
    console.log("Hello")
},2000)
setTimeout(() => {
    clearInterval(a)
    console.log("stop")
}, 5000);