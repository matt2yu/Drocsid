export const convertDateString = (date) => {
  const msgDate = new Date(date);
  const msgYear = msgDate.getFullYear();
  const msgMonth = (msgDate.getMonth() + 1);
  const msgDay = msgDate.getDate();
  const newDate = `${msgMonth}/${msgDay}/${msgYear}`; // "05/19/2021"
  
  let hr = msgDate.getHours();
  let min = msgDate.getMinutes();
  let AMPM = 'AM';

  if (hr > 12) {
    hr -= 12;
    AMPM = 'PM'
  } else if (hr == 0) {
    hr += 12;
  }
  if (min < 10) {
    min = "0" + min
  }
  const msgTime = `${hr}:${min} ${AMPM}`

  const currDate = new Date();
  const currYear = currDate.getFullYear();
  const currMonth = (currDate.getMonth() + 1);
  const currDay = currDate.getDate();

  if ((currYear === msgYear) && 
    (currMonth === msgMonth) && 
    (currDay === msgDay)){
    return `Today at ${msgTime}`
  }

  if ((currYear === msgYear) && 
    (currMonth === msgMonth) && 
    (currDay === msgDay+1)){
    return `Yesterday at ${msgTime}`
  }

  return newDate;
}