import { executeQuery } from "@/config/db";
import ErrorHandler from "@/common/errorHandler";
import registrasiValidation from "@/common/registrasiValidator";
import { IncomingForm } from "formidable";
import { promises as fs } from "fs";
var mv = require("mv");

const upload = async (req, res) => {
  const data = await new Promise((resolve, reject) => {
    const form = new IncomingForm();
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      const { originalFilename, filepath } = files.file[0];
      var oldPath = filepath;
      var newPath = `./public/uploads/${originalFilename}`;
      mv(oldPath, newPath, function (err) {});
      res.status(200).json({ status:true, messange:'upload success' });
    });
  });
};

const save = async (req, res) => {
  try {
    const result = req.body;
    const { email, username, photo, fullname, password } = result;
    let { error } = registrasiValidation(result);
    if (error) {
      res.status(400).json(error.details[0].message);
    } else {
      let idUser = Math.floor(Math.random() * (999 - 99) + 99);
      let data = await executeQuery(
        "INSERT INTO tb_users (id, email, username, photo, fullname, password) values(?,?,?,?,?,?)",
        [idUser,email, username, photo, fullname, password]
      );
      data = await executeQuery(
        `select * from tb_users where id=${data.insertId}`
      );
      res.status(201).json(data);
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

export { 
    upload,
    save 
};
