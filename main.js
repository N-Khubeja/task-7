// 1

function mySetTimeOut(delay){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`you waited for ${delay/1000} seconds`)
        })
    })
}

// 2

function makeToys(){
    return new Promise (( resolve, reject) => {
        if(Math.random() > 0.3){
            resolve("undefected toy")
        } else {
            reject("defected toy")
        }
    })
}

// 3

function deliverToys(status){
    return new Promise((resolve, reject) => {
        if(status === "undefected toy"){
            resolve("toy is ready for delivery")
            console.log("toy is ready for delivery")
        } else {
            reject("toy is not ready for delivery")
        }
    })
}

// 4

function sallYourToy(deliverystatus){
    return new Promise((resolve, reject) => {
        if(deliverystatus === "toy is ready for delivery"){
            resolve("toy was seccessful")
        } else {
            reject("toy was unsuccessful")
        }
    })
}

setTimeout(3000)
.then(() => {
    return makeToys()
})
then((toyStatus) => {
    console.log(toyStatus)
    return mySetTimeOut(2000)
})
.then(() => {
    console.log("waiting for delivery")
    return mySetTimeOut(1000)
})
.then(() => {
    const status = "undefected toy"
    return deliverystatus(status)
})
.then((deliverystatus) => {
    console.log(deliverystatus)
    return mySetTimeOut(1000)
})
.then(() => {
    console.log("selling the toy")
    return mySetTimeOut(1000)
})
.then(() => {
    const deliverystatus = "ready for delivery"
    return deliverystatus(deliverystatus)
})
.then((result) => {
    console.log(result)
})
.catch((err) => console.log(err))