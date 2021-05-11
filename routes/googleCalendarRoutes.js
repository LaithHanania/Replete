const { google } = require("googleapis");
const requireLogin = require("../middlewares/requireLogin");
const keys = require("../config/keys");
const GoogleCalendarService = require('../services/googleCalendar');

module.exports = (app) => {
  app.get("/api/google_calendar", requireLogin, async (req, res) => {
    const { accessToken } = req.user;

    const oAuth2Client = new google.auth.OAuth2(
      keys.googleClientID,
      keys.googleClientSecret,
      "/auth/google/callback"
    );
    oAuth2Client.setCredentials({ access_token: accessToken });
    const calendar = google.calendar({ version: "v3", auth: oAuth2Client });

    try {
      const result = await calendar.events.list({
        calendarId: "primary",
        timeMin: (new Date().toISOString()),
        maxResults: 10,
        singleEvents: true,
        orderBy: "startTime",
      });
      res.send(result);

      //console.log(result.data.items);

      //const googleCalendarService = new GoogleCalendarService(result?.data?.items);
      //const transformedEvents = googleCalendarService.prepareEventsForFrontend();

      //res.send(transformedEvents);
    } catch (err) {
      console.log(err);
      res.status(422).send(err);
    }
  });
};
