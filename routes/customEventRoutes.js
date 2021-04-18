const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const _ = require("lodash");
const EventService = require("../services/EventService");
const CustomEvent = mongoose.model("customEvent");

module.exports = (app) => {
  app.get("/api/customEvents", requireLogin, async (req, res) => {
    const customEvents = await CustomEvent.find({ _user: req.user.id });
    res.send(customEvents);
  });

  app.post("/api/customEvent", requireLogin, async (req, res) => {
    const { label, description, eventCriterias } = req.body;

    const eventService = new EventService(eventCriterias);
    eventService.cleanEventCriteriaValues();
    const netValue = eventService.calculateNetValue();

    const cleanedEventCriterias = eventService.eventCriterias;

    const customEvent = new CustomEvent({
      label,
      description,
      eventCriterias: cleanedEventCriterias,
      _user: req.user.id,
      netValue,
    });

    try {
      await customEvent.save();
      const user = await req.user.save();
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
