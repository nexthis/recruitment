export function isValidDate(d: Date) {
    return d instanceof Date && !isNaN(d);
}

export function inScope(check: Date, from: Date, to: Date)  {
  return check.setHours(0, 0, 0, 0) <= to.setHours(0, 0, 0, 0) && check.setHours(0, 0, 0, 0) >= from.setHours(0, 0, 0, 0)
}

export function readableDate(d: Date ){
  return new Intl.DateTimeFormat('pl-PL').format(d)
}