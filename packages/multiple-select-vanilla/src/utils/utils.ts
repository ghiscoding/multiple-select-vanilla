/** Compare two objects */
export function compareObjects(objectA: any, objectB: any, compareLength = false) {
  const aKeys = Object.keys(objectA);
  const bKeys = Object.keys(objectB);

  if (compareLength && aKeys.length !== bKeys.length) {
    return false;
  }

  for (const key of aKeys) {
    if (bKeys.includes(key) && objectA[key] !== objectB[key]) {
      return false;
    }
  }

  return true;
}

/** make deep copy clone of an object */
export function deepCopy<T = any>(obj: T): T {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(deepCopy) as T;
  }

  if (typeof obj === 'function') {
    return obj;
  }

  return Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, deepCopy(value)])) as T;
}

export function isDefined(val: any) {
  return val !== undefined && val !== null && val !== '';
}

/**
 * Remove all empty props from an object,
 * we can optionally provide a fixed list of props to consider for removal (anything else will be excluded)
 * @param {*} obj
 * @param {Array<String>} [clearProps] - optional list of props to consider for removal (anything else will be excluded)
 * @returns cleaned object
 */
export function objectRemoveEmptyProps(obj: any, clearProps?: string[]) {
  if (typeof obj === 'object') {
    if (clearProps) {
      return Object.fromEntries(
        Object.entries(obj).filter(([name, val]) => (!isDefined(val) && !clearProps.includes(name)) || isDefined(val)),
      );
    }
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => isDefined(v)));
  }
  return obj;
}

export function setDataKeys(data: any[]) {
  let total = 0;

  data.forEach((row, i) => {
    if (row.type === 'optgroup') {
      row._key = `group_${i}`;
      row.visible = typeof row.visible === 'undefined' ? true : row.visible;

      row.children.forEach((child: any, j: number) => {
        if (child) {
          child.visible = typeof child?.visible === 'undefined' ? true : child.visible;

          if (!child.divider) {
            child._key = `option_${i}_${j}`;
            total += 1;
          }
        }
      });
    } else {
      row.visible = typeof row.visible === 'undefined' ? true : row.visible;

      if (!row.divider) {
        row._key = `option_${i}`;
        total += 1;
      }
    }
  });

  return total;
}

export function findByParam(data: any, param: any, value: any) {
  if (Array.isArray(data)) {
    for (const row of data) {
      if (row[param] === value || (row[param] === `${+row[param]}` && +row[param] === value)) {
        return row;
      }
      if (row.type === 'optgroup') {
        for (const child of row.children) {
          if (child && (child[param] === value || (child[param] === `${+child[param]}` && +child[param] === value))) {
            return child;
          }
        }
      }
    }
  }
}

export function stripScripts(dirtyHtml: string) {
  return dirtyHtml.replace(
    /(\b)(on[a-z]+)(\s*)=([^>]*)|javascript:([^>]*)[^>]*|(<\s*)(\/*)script([<>]*).*(<\s*)(\/*)script(>*)|(&lt;|&#60;)(\/*)(script|script defer)(.*)(&#62;|&gt;|&gt;">)/gi,
    '',
  );
}

export function removeUndefined<T extends Record<string, unknown> = Record<string, unknown>>(obj: T): T {
  Object.keys(obj).forEach(key => (!isDefined(obj[key]) ? delete obj[key] : ''));
  return obj;
}

export function removeDiacritics(str: string, customParser?: (t: string) => string): string {
  if (typeof str !== 'string') {
    return str;
  }
  if (typeof customParser === 'function') {
    return customParser(str);
  }
  if (typeof str.normalize === 'function') {
    return str.normalize('NFD').replace(/[\u0300-\u036F]/g, '');
  }
  throw new Error(
    '[Multiple-Select-Vanilla] `normalize()` function is not defined, you can optionally provide a custom parser via the `diacriticParser` option.',
  );
}
