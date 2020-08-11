// fs stands for: file system
const fs = require('fs')

//  fs.readFile takes two arguments
// 1 is the location of the file we are reading
// 2 is the callback function that we can run once the file is read

fs.readFile('./docs/blog1.txt', (err, data) => {
    // if there's an error, tell us what the error is
    if (err) {
        // console.log(err)
    }
    // console.log(data.toString())
})
// fs.readFile is asynchronous
// console.log('this line of code is after fs.readFile')

fs.writeFile('./docs/blog1.txt', 'pew pow pam', () => {
    // console.log('file was written')
})
// fs.writeFile takes three methods
// 1 the location to write the file
// 2 what to write in the file
// 3 a callback function to fire once written

fs.writeFile('./docs/blog2.txt', 'hello again!', () => {
    // console.log('another file was written')
    fs.readFile('./docs/blog2.txt', (err, data)=> {
        // console.log(data.toString())
    })
})

// mkdir: make directory

//  fs.mkdir allows us to make folders
// fs.mkdir('./assets', (err) => {
//     if (err){
//         console.log(err)
//     }
//     console.log('folder created')
// })

// rmdir: remove directory

// fs.rmdir('./assets', (err) => {
//     if (err){
//         console.log(err)
//     }
//     console.log('folder deleted')
// })

if(fs.existsSync('./assets')){
    fs.rmdir('./assets', (err) => {
            if (err){
                console.log(err)
            }
            console.log('folder deleted')
        })
} else {
    
fs.mkdir('./assets', (err) => {
    if (err){
        console.log(err)
    }
    console.log('folder created')
})
}