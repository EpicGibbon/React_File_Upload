const express = require("express");
const fileupload = require("express-fileupload");

const app = express();

app.use(fileupload());

//Upload endpoint

app.post('/upload', (req, res) => {
    if (req.files === nule) {
        return res.status(400).json({ msg: 'no file uploaded' });
    }
    const file = req.files.file;
    file.mv(`${__dirname} / client / public / uploads / ${file.name}`, err => {
        if (err) {
            console.log(err);
            return res.status(500).send(err)
        }
        res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    });
});



app.listen(5000, () => console.log('Server started...'));
