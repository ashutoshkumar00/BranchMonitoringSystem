import { format, parse} from "date-fns";

// Function to count data by month
export const countDataByMonth = (data) => {
  if (!Array.isArray(data)) {
    console.error("Data is not an array:", data);
    return {};
  }

  const counts = {};

  data.forEach((item) => {
    const startDateString = item["starttime"];
    const startDate = parse(startDateString, "dd-MM-yy", new Date());
    const startMonth = format(startDate, "MMMM"); // Format date to get month name

    if (!counts[startMonth]) {
      counts[startMonth] = 1;
    } else {
      counts[startMonth]++;
    }
  });

  return counts;
};
