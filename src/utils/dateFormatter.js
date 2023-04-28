export default function dateFormatter(postDate) {
  const currentDate = new Date();
  const currentTimestamp = currentDate.getTime();
  const datePost = new Date(postDate);
  const postTimestamp = datePost.getTime();

  const secondsNow = Math.floor(currentTimestamp / 1000);
  const postSeconds = Math.floor(postTimestamp / 1000);

  const difference = secondsNow - postSeconds;
  
  let dateMessage = ``;

  if (difference < 60) {
    dateMessage = 'Less than one minute ago'

  } else if (difference < 3600) {
    const minutes = Math.floor(difference / 60)
    const checkIfIsPlural = minutes == 1 ? 'minute' : 'minutes'
    dateMessage = `${minutes} ${checkIfIsPlural} ago`;

  } else if (difference < 86400) {
    const hours = Math.floor(difference / 3600)
    const checkIfIsPlural = hours == 1 ? 'hour' : 'hours'
    dateMessage = `${hours} ${checkIfIsPlural} ago`;

  } else if (difference < 2620800) {
    const days = Math.floor(difference / 86400)
    const checkIfIsPlural = days == 1 ? 'day' : 'days'
    dateMessage = `${days} ${checkIfIsPlural} ago`;

  } else if (difference < 31449600) {
    const months = Math.floor(difference / 2620800)
    const checkIfIsPlural = months == 1 ? 'month' : 'months'
    dateMessage = `${months} ${checkIfIsPlural} ago`;
    
  } else {
    const years = Math.floor(difference / 31449600)
    const checkIfIsPlural = years == 1 ? 'year' : 'years'
    dateMessage = `${years} ${checkIfIsPlural} years ago`;
  }
  
  return dateMessage
}
