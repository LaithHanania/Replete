class GoogleCalendarService {
  constructor(events) {
    this.events = events;
  }

  prepareEventsForFrontend() {
    if (this.events) {
      const transformedEvents = this.events.map((event) => {
        const start = event.start.date
          ? new Date(`${event.start.date}T08:00:00`)
          : new Date(event.start.dateTime);
          
        const end = event.end.date
          ? new Date(`${event.start.date}T05:00:00`)
          : new Date(event.end.dateTime);

        return {
          start: start,
          end: end,
          title: event.summary,
          eventType: event.name,
          description: event.description,
          glink: event.htmlLink,
          meta: event,
        };
      });

      return transformedEvents;
    }
    return null;
  }
}

module.exports = GoogleCalendarService;
