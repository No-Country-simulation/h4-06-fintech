export function generateMonthOptions(selectedMonths: number) {
  const options = [selectedMonths];

  // Add options based on the selected months
  if (selectedMonths >= 24) {
    options.push(selectedMonths - 6);
    options.push(selectedMonths - 12);
  } else if (selectedMonths >= 12) {
    options.push(selectedMonths - 4);
    options.push(selectedMonths - 8);
  } else if (selectedMonths >= 9) {
    options.push(selectedMonths - 3);
    options.push(selectedMonths - 6);
  } else if (selectedMonths >= 6) {
    options.push(selectedMonths - 2);
    options.push(selectedMonths - 4);
  } else if (selectedMonths >= 3) {
    options.push(selectedMonths - 1);
    options.push(selectedMonths - 2);
  }

  // Sort options in descending order and remove duplicates
  return [...new Set(options)].sort((a, b) => b - a);
}
