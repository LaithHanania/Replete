const { google } = require("googleapis");
const requireLogin = require("../middlewares/requireLogin");
const keys = require("../config/keys");

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
    const result = await calendar.events.list({
      calendarId: "primary",
      timeMin: new Date().toISOString,
      maxResults: 10,
      singleEvents: true,
      orderBy: "startTime",
    });

    res.send(result);
  });
};
