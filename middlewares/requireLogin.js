module.exports = (req, res, next) => {
  if (!req.user?.id) {
    return res.status(401).send({ error: "You must log in!" });
  }

  next();
};
