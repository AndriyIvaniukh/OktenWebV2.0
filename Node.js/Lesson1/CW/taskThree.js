const fs = require('fs');
const path = require('path');

function start(basicWay) {
    fs.mkdir(path.join(basicWay, 'Task3'), (err) => {
        if (err) {
            throw err;
        } else {
            fs.mkdir(path.join(basicWay, 'Task3', 'foolder1'), (err) => {
                if (err) {
                    throw err;
                }
                fs.writeFile(path.join(basicWay, 'Task3', 'foolder1', 'text.txt'),
                    'Data for first foolder file',
                    (err) => {
                        if (err) {
                            throw err;
                        }
                    })
                fs.mkdir(path.join(basicWay, 'Task3', 'foolder1', '1'), (err) => {
                    if (err) {
                        throw err;
                    }
                    fs.writeFile(path.join(basicWay, 'Task3', 'foolder1', '1', 'text.txt'),
                        'Data for first foolder foolder file',
                        (err) => {
                            if (err) {
                                console.log(err);
                                throw err;
                            }
                        })
                });
            });
            fs.mkdir(path.join(basicWay, 'Task3', 'foolder2'), (err) => {
                if (err) {
                    throw err;
                }
                fs.writeFile(path.join(basicWay, 'Task3', 'foolder2', 'text.txt'),
                    'Data for second foolder file',
                    (err) => {
                        if (err) {
                            throw err;
                        }
                    })
            });
            fs.mkdir(path.join(basicWay, 'Task3', 'foolder3'), (err) => {
                if (err) {
                    throw err;
                }
                fs.writeFile(path.join(basicWay, 'Task3', 'foolder3', 'text.txt'),
                    'Data for third foolder file',
                    (err) => {
                        if (err) {
                            throw err;
                        }
                    })
            });

            const way = path.join(__dirname, 'resolvedTask', 'Task3');
            setTimeout(()=>findFiles(way),100);
        }
    });


}

function findFiles(wayPart) {
    fs.readdir(path.join(wayPart), (err, data) => {
        if (err) {
            console.log(err);
            throw err;
        }

        for (const el of data) {
            if (!el.includes('.txt')) {
                fs.rename(path.join(wayPart, el),
                    path.join(wayPart, `${el}_new`),
                    (err) => {
                        if (err) {
                            throw err;
                        }
                        const newWayPart = path.join(wayPart, `${el}_new`);
                        findFiles(newWayPart);
                    })
            } else {
                fs.writeFile(path.join(wayPart, el), '', (err) => {
                    if (err) {
                        throw err;
                    }
                })
            }
        }
    })
}

module.exports = {start};