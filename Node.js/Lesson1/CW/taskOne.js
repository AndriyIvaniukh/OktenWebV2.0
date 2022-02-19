const path = require('path');
const fs = require('fs');

function start(textForTest, basicWay) {

    fs.mkdir(path.join(basicWay, 'Task1'), (err => {
        if (err) {
            throw err;
        }

        fs.writeFile(path.join(basicWay, 'Task1', 'task1.txt'), textForTest, (err) => {
            if (err) {
                console.log(err);
                throw err;
            }

            fs.readFile(path.join(basicWay, 'Task1', 'task1.txt'), "utf-8", (err, data) => {
                if (err) {
                    console.log(err);
                    throw err;
                }

                fs.writeFile(path.join(basicWay, 'Task1', 'task1SecondFile.txt'), data, (err) => {
                    if (err) {
                        console.log(err);
                        throw err;
                    }
                });

            })

        });
    }));
}

module.exports = {start};