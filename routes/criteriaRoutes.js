const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const _ = require("lodash");

const Criteria = mongoose.model("criteria");

module.exports = (app) => {
  app.get("/api/criteria", requireLogin, async (req, res) => {
    const criteria = await Criteria.find({ _user: req.user.id });
    res.send(criteria);
  });

  app.post("/api/criteria", requireLogin, async (req, res) => {
    const { label, weight, description } = req.body;

    const currentCriteria = await Criteria.find({
      _user: req.user.id,
      label: label,
    });

    if (!_.isEmpty(currentCriteria)) {
      return res.status(403).send({ error: "Criteria already exists." });
    }

    const criteria = new Criteria({
      label,
      weight,
      description,
      _user: req.user.id,
    });

    try {
      await criteria.save();
      const user = await req.user.save();
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.delete("/api/criteria", requireLogin, async (req, res) => {
    const { label } = req.body;

    await Criteria.find({
      _user: req.user.id,
      label: label,
    }).deleteOne();

    try {
      const user = await req.user.save();
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.put("/api/criteria", requireLogin, async (req, res) => {
    const { label, weight, description } = req.body.data.values;
    const { id } = req.body.data;

    const criteria = await Criteria.find({
      _user: req.user.id,
      _id: id,
    }).updateOne({ label, weight, description });

    try {
      const user = await req.user.save();
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
