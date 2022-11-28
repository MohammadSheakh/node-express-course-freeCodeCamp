const { readFile, writeFile } = require("fs").promises;
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)
/**
 * two file read and then eventually write the file as well .. and i would want to do all of that
 * asynchronously .. still going to be paying .. just by using .. the promises ..
 *
 * since we are returning a promise .. if i use async await .. I can wait till promise is settled and
 * then decide what would want to do .. and the way we set that one up is creating a new function ..
 *
 */
const start = async () => {
    // shob shomoy try catch er moddhe rakhte hoy .. async await ..
    try {
        const first = await readFile("./content/first.txt", "utf8");
        const second = await readFile("./content/second.txt", "utf8");
        await writeFile(
            "./content/result-mind-grenade.txt",
            `THIS IS AWESOME : ${first} ${second}`,
            { flag: "a" }
        );
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
};

start();

// const getText = (path) => {
////  ei function theke amra ekta Promise return korbo .. Promise er moddhe amra arekta callback function
//// pass korbo .. resolve and reject nam e duita function pass korbo ..
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err) // error shob shomoy reject korbo ..
//       } else {
//         resolve(data) // data hoile resolve korbo ..
//       }
//     })
//   })
// }
// getText('./content/first.txt')
//   .then((result) => console.log(result)) // we are returning a promise .. we can have a result
//   .catch((err) => console.log(err))  // we catch the error
