
/**
 * @function isEmptyObj 对象是否为空
 * @return {boolen}
 */
const isEmptyObj = (data: object) => {
  if (typeof data === "object") {
    if (Object.keys(data).length) return false
  }
  return true
}

export { isEmptyObj }