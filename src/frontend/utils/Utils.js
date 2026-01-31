export const localDateTimeZone=(time)=>{
  const date =new Date(time * 1000);
  const dateTime = date?.toLocaleString();
  const onlyDate = dateTime?.split(',');
  return onlyDate[0];
}