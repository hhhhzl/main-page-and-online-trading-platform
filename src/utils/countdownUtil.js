

export const now = Math.round(new Date().getTime()).toString(); //获取当前时间
export const end = new Date("2022-06-14 00:00:00").getTime(); //设置截止时间
export const timeDifference = (() =>{
  return end - now
})