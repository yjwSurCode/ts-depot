import dateFormat from "./dateFormat";
import obtainTime from "./obtainTime";
import intervalTime from "./intervalTime";
import BinarySearch from "./BinarySearch";
import randomString from "./randomString";

import { classnames, createBEM } from "./classnames";

import { Dictionary, Res } from "./interface/index";
import { okRes, errRes } from "./interface/res";
import { ArtisanException } from "./interface/error";

/** 函数 */
export {
  dateFormat,
  obtainTime,
  intervalTime,
  BinarySearch,
  randomString,
  classnames,
  createBEM,
};

/** 类型 */
export { Dictionary, Res, ArtisanException, okRes, errRes };

// export * from "./dateFormat";
// export * from "./obtainTime";
// export * from "./intervalTime";
// export * from "./BinarySearch";
// export * from "./trace";
// export * from "./utils/core-helper";
// export * from "./utils/reflect-helper";
// export * from "./interfaces";
