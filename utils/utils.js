// Get Formatted Date For Todo Home
export const getFormattedDate = (input) => {
  var mS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  var today = new Date(input);
  var date = mS[today.getMonth()] + " " + today.getDate();
  var time =
    (today.getHours() > 12
      ? today.getHours() - 12
      : today.getHours() == 0
      ? 12
      : today.getHours()) +
    (today.getMinutes() < 10 ? ":0" : ":") +
    today.getMinutes();
  let x = today.getHours() > 12 ? today.getHours() - 12 : today.getHours();
  if (x < 12) {
    time = time + " PM";
  } else {
    time = time + " AM";
  }
  let dateTime = date + "- " + time;
  return dateTime;
};

// Sort Todo Items By Date (Updated At)
export const sortArrayByDateTime = (array) => {
  array.sort((a, b) => {
    return new Date(b.updatedAt) - new Date(a.updatedAt);
  });
  return array;
};

// Write a Fucntion to get the number of Days in this Month
export const getDaysInMonth = () => {
  let today = new Date();
  let month = today.getMonth();
  let year = today.getFullYear();
  let daysInMonth = new Date(year, month + 1, 0).getDate();
  return daysInMonth;
};

// 2022-04-22
// Function to compare day from today
export const compareDateByToday = (input) => {
  let newDay = new Date();
  var today =
    newDay.getFullYear() +
    "-" +
    (newDay.getMonth() + 1) +
    "-" +
    newDay.getDate();

  if (today != input) {
    return 0;
  } else {
    return 1;
  }
};

// Function to compare  day by date
export const compareDayByDate = (input, selectedDay,selectedMonth) => {

  // Today 
  var today = new Date();
  var year = today.getFullYear();


  let newDay = new Date(input);
  var date2 = newDay.getDate();
  var month2 = newDay.getMonth();
  var year2 = newDay.getFullYear();



  console.log(year2," year2 - ",year," year ",month2," month2 " , selectedMonth,"  Selected",date2," date2 ", selectedDay," selectedDay");
  if (year2>=year && month2>=selectedMonth && date2>=selectedDay    ) {
    return 1;
  } else {
    return 0;
  }
};

// Write a Function to get Number of Days Between Two Dates
export const getDaysBetweenDates = (startDate, endDate) => {
  let start = new Date(startDate);
  let end = new Date(endDate);
  let diff = end - start;
  let days = diff / 1000 / 60 / 60 / 24;
  return days;
};
