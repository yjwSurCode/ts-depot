function sayHelloWorld() {
    console.log("hello world");
}
//  标准时间转日期格式：dateFormat("YYYY-mm-dd HH:MM:SS", new Date())  //2022-06-01 11:22:30
const dateFormat = (fmt, date) => {
    if (!fmt) {
        throw console.error("fmt:YYYY-mm-dd HH:MM:SS");
    }
    let ret;
    const opt = {
        "Y+": date.getFullYear().toString(),
        "m+": (date.getMonth() + 1).toString(),
        "d+": date.getDate().toString(),
        "H+": date.getHours().toString(),
        "M+": date.getMinutes().toString(),
        "S+": date.getSeconds().toString(), // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        console.log(ret, "ret");
        if (ret) {
            fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0"));
        }
    }
    return fmt;
};
export { dateFormat, sayHelloWorld };
