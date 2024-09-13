/**
 * A function to convert a date to string format: dd.mm.yyyy
 * @param date - Date in string format
 * @returns ```Date in string format: dd.mm.yyyy```
 */
export function convertDate(date: string): string {
  const dateObj = new Date(date);
  const day =
    dateObj.getDate() < 10 ? '0' + dateObj.getDate() : dateObj.getDate();
  const month =
    dateObj.getMonth() + 1 < 10
      ? '0' + (dateObj.getMonth() + 1)
      : dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();

  return `${day}.${month}.${year}`;
}
