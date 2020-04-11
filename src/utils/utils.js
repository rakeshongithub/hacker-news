import moment from "moment";

export const dateDiff = (startTime, endTime) => {
  // calculate total duration
  var duration = moment.duration(moment(startTime).diff(moment(endTime)));
  // duration in hours
  var hours = parseInt(duration.asHours());
  var days = parseInt(duration.asDays());
  if (hours >= 24) {
    if (days >= 31) {
      var yearsMonth = days / (12 * 30);
      if (yearsMonth) {
        if (parseInt(String(yearsMonth).split(".")[0]) === 0) {
          return `${String(yearsMonth).split(".")[1].substring(0, 1)} days`;
        }
        if (parseInt(String(yearsMonth).split(".")[1].substring(0, 1)) === 0) {
          return `${String(yearsMonth).split(".")[0]} years`;
        }
        return `${String(yearsMonth).split(".")[0]} years ${String(yearsMonth)
          .split(".")[1]
          .substring(0, 1)} days`;
      }
    }
    return days + " days";
  }
  return hours + " hours";
};
