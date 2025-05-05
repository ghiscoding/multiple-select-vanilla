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

/**
 * Create an immutable clone of an array or object
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Array|Object} objectOrArray - the array or object to copy
 * @return {Array|Object} - the clone of the array or object
 */
export function deepCopy(objectOrArray: any | any[]): any | any[] {
  const cloneObj = () => {
    const clone = {}; // create new object

    // Loop through each item in the original, recursively copy it's value and add to the clone
    // eslint-disable-next-line no-restricted-syntax
    for (const key in objectOrArray) {
      if (Object.prototype.hasOwnProperty.call(objectOrArray, key)) {
        (clone as any)[key] = deepCopy(objectOrArray[key]);
      }
    }
    return clone;
  };

  // Create an immutable copy of an array
  const cloneArr = () => objectOrArray.map((item: any) => deepCopy(item));

  // Get object type
  const type = Object.prototype.toString.call(objectOrArray).slice(8, -1).toLowerCase();
  if (type === 'object') {
    return cloneObj(); // if it's an object
  }
  if (type === 'array') {
    return cloneArr(); // if it's an array
  }
  return objectOrArray; // otherwise, return it as-is, could be primitive or else
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

export function removeUndefined(obj: any) {
  Object.keys(obj).forEach(key => (obj[key] === undefined ? delete obj[key] : ''));
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
