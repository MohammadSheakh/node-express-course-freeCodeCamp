const { readFile, writeFile } = require("fs"); // nam er shathe sync nai ar ager moto ..
// karon eita asynchronous

console.log("start");
/**
 * asynchronous kaj e amader ke ekta callback provide korte hoy .. we run that callback when we are
 * done
 */
readFile("./content/first.txt", "utf8", (err, result) => {
    // may be its called error back pattern
    if (err) {
        console.log(err);
        return;
    }
    console.log("result ", result); // amra text pabo na .. amra buffer pabo .. ejonno encoding value
    // provide korte hobe ..
    const first = result;
    readFile("./content/second.txt", "utf8", (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile(
            "./content/result-async.txt",
            `Here is the result : ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log("done with this task");
            }
        );
    });
});
console.log("starting next task");

// alternative hocche async await ar promise use kora jete pare.. karon eita onek genjam er
