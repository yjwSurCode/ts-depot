/* 两个时间戳相隔时间  ${days}天${hours}时${minutes}分${scends}秒 */
function intervalTime(startTime: number, endTime: number) {
  var timeDiff = endTime - startTime; //时间差
  let days = Math.floor(timeDiff / (24 * 3600 * 1000)); // 计算出天数
  let leavel1 = timeDiff % (24 * 3600 * 1000); // 计算天数后剩余的时间
  let hours = Math.floor(leavel1 / (3600 * 1000)); // 计算天数后剩余的小时数
  let leavel2 = timeDiff % (3600 * 1000); // 计算剩余小时后剩余的毫秒数
  let minutes = Math.floor(leavel2 / (60 * 1000)); // 计算剩余的分钟数
  let leavel3 = timeDiff % (3600 * 1000); // 计算剩余分钟后剩余的毫秒数
  let scends = Math.floor(leavel3 / (60 * 1000));

  return { days, hours, minutes, scends };
}

console.log("11111");

export default intervalTime;
