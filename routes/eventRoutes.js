const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const _ = require("lodash");
const EventService = require("../services/EventService");

const Event = mongoose.model("event");

module.exports = (app) => {
  app.get("/api/events", requireLogin, async (req, res) => {
    const events = await Event.find({ _user: req.user.id });
    res.send(events);
  });

  app.get("/api/event/:id", requireLogin, async (req, res) => {
    const event = await Event.find({ _user: req.user.id, _id: req.params.id });
    res.send(event);
  });

  app.post("/api/event", requireLogin, async (req, res) => {
    const { date, label, description, eventCriterias } = req.body;

    const eventService = new EventService(eventCriterias);
    eventService.cleanEventCriteriaValues();
    const netValue = eventService.calculateNetValue();

    const cleanedEventCriterias = eventService.eventCriterias;

    const event = new Event({
      date,
      label,
      description,
      eventCriterias: cleanedEventCriterias,
      _user: req.user.id,
      netValue,
    });

    try {
      await event.save();
      const user = await req.user.save();
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};

/*
axios.post("/api/event", {date: new Date(), label: 'first event', description: 'description', eventCriterias: [{value: 5, criterias: {label: 'dfgfd', weight: 4}}]});

*/
