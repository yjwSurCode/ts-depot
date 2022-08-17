/*标准时间转日期格式：dateFormat("YYYY-mm-dd HH:MM:SS", new Date())   2022-06-01 11:22:30  */
const dateFormat = (fmt: string, date: Date) => {
  if (!fmt) {
    throw console.error("fmt:YYYY-mm-dd HH:MM:SS");
  }
  let ret: RegExpExecArray | null;
  const opt: any = {
    "Y+": date.getFullYear().toString(), // 年
    "m+": (date.getMonth() + 1).toString(), // 月
    "d+": date.getDate().toString(), // 日
    "H+": date.getHours().toString(), // 时
    "M+": date.getMinutes().toString(), // 分
    "S+": date.getSeconds().toString(), // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };

  for (let k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    console.log(ret, "ret");
    if (ret) {
      fmt = fmt.replace(
        ret[1],
        ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0")
      );
    }
  }
  return fmt;
};

export default dateFormat;
