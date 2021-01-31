const generator = require("generate-password");


exports.getPassword = (req, res, next) => {
  res.render("index", { passwords: [] });
};

exports.getGeneratedPassword = (req, res, next) => {
  const length = req.body.generator;

  const passwords = generator.generateMultiple(5, {
    length: +length,
    numbers: true,
    uppercase: true,
  });



  res.render("index", {
    passwords: passwords,
  });
};
