class EventService {
  constructor(eventCriterias) {
    this.eventCriterias = eventCriterias;
  }

  calculateNetValue() {
    if (!this.eventCriterias || this.eventCriterias.length === 0) return 0;

    const sum = this.eventCriterias.reduce(function (prev, curr) {
      return prev + curr.value;
    }, 0);

    return sum;
  }

  cleanEventCriteriaValues() {
    this.eventCriterias?.forEach((criteria) => {
      criteria.value = parseFloat(criteria.value);
    });
  }
}

module.exports = EventService;
