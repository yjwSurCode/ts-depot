import { Dictionary } from "./interface/index";

type Mod = string | Dictionary;
type Mods = Mod | Mod[];

/**
 * const bem = createBEM('page-loading');
   className={classnames(bem(), className)}
   
 * b() // 'button'
 * b('text') // 'button__text'
 * b({ disabled }) // 'button button--disabled'
 * b('text', { disabled }) // 'button__text button__text--disabled'
 * b(['disabled', 'primary']) // 'button button--disabled button--primary'
 */

export function classnames(...classNames: any[]): string {
  let i = 0,
    tmp,
    x,
    str = "";
  while (i < arguments.length) {
    if ((tmp = classNames[i++])) {
      if ((x = toVal(tmp))) {
        str && (str += " ");
        str += x;
      }
    }
  }
  return str;
}

export function createBEM(name: string) {
  return function (el?: Mods, mods?: Mods): string {
    if (el && typeof el !== "string") {
      mods = el;
      el = "";
    }

    el = el ? `${name}__${el}` : name;

    return `${el}${gen(el, mods)}`;
  };
}

function toVal(mix: any) {
  let k,
    y,
    str = "";

  if (typeof mix === "string" || typeof mix === "number") {
    str += mix;
  } else if (typeof mix === "object") {
    if (Array.isArray(mix)) {
      for (k = 0; k < mix.length; k++) {
        if (mix[k]) {
          if ((y = toVal(mix[k]))) {
            str && (str += " ");
            str += y;
          }
        }
      }
    } else {
      for (k in mix) {
        if (mix[k]) {
          str && (str += " ");
          str += k;
        }
      }
    }
  }

  return str;
}

function gen(name: string, mods?: Mods): string {
  if (!mods) {
    return "";
  }

  if (typeof mods === "string") {
    return ` ${name}--${mods}`;
  }

  if (Array.isArray(mods)) {
    return mods.reduce<string>((ret, item) => ret + gen(name, item), "");
  }

  return Object.keys(mods).reduce(
    (ret, key) => ret + (mods[key] ? gen(name, key) : ""),
    ""
  );
}
