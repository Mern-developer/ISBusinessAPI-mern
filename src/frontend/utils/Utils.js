export const localDateTimeZone=(time)=>{
  const date =new Date(time * 1000);
  const dateTime = date?.toLocaleString();
  const onlyDate = dateTime?.split(',');
  return onlyDate[0];
}

export const textTurncate=(words)=>{
const wlength = words;
const turncate = wlength?.length > 100 ? wlength?.slice(0,100)+"..." : wlength;
return turncate;
}