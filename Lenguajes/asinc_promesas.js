function hacerAsyc(t) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const n = Math.random()
            if(n > 0.5) {
                let user = 'Pepe'
                resolve(user)                
            } else {
                reject(n)
            }
        }, t)        
    })
}

/* function render(data) {
    console.log(`Hola ${data}`)
}

hacerAsyc(1000, render) */

hacerAsyc(1000).then(
    resp => console.log(`Hola ${resp}`)
).catch(
    err => console.log(`Error ${err}`)
)

hacerAsyc(1100).then(
    data => console.log(`Adios ${data}`)
).catch(
    err => console.log(`Error ${err}`)
)


async function main () {
    try {
        const resp =  await hacerAsyc(2000)
        console.log(`Hola ${resp}`)
    } catch (err) {
        console.log(`Error ${err}`)
    }
}

main()