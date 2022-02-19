const fs = require("fs");
const path = require("path");

function start(textForTest, basicWay) {

    fs.writeFile(path.join(basicWay, 'task2.txt'), textForTest, (err) => {
        if (err) {
            console.log(err);
            throw err;
        }
        fs.readFile(path.join(basicWay, 'task2.txt'), "utf-8", (err, data) => {
            if (err) {
                console.log(err);
                throw err;
            }

            fs.mkdir(path.join(basicWay, 'Task2'), (err) => {
                if (err) {
                    throw err;
                }
                fs.writeFile(path.join(basicWay, 'Task2', 'task2ReWrite.txt'), data, (err) => {
                    if (err) {
                        console.log(err);
                        throw err;
                    }

                    fs.unlink(path.join(basicWay, 'task2.txt'), (err) => {
                        if (err) {
                            throw err;
                        }
                    });
                });
            });
        });
    });

}

module.exports = {start}