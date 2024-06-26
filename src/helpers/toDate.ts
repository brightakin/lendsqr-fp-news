const toDate = (timestamp: any) => {
  // Convert to a Date object
  let date = new Date(timestamp);

  // Extract the date components
  let year = date.getUTCFullYear();
  let month = date.getUTCMonth() + 1; // Months are zero-based, so add 1
  let day = date.getUTCDate();

  // Format the date as a string
  let formattedDate =
    year +
    '-' +
    (month < 10 ? '0' + month : month) +
    '-' +
    (day < 10 ? '0' + day : day);

  return formattedDate;
};

export default toDate;
