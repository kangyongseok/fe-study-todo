export const selector = (target) => {
  return document.querySelector(target)
}

export const selectorAll = (target) => {
  return [...document.querySelectorAll(target)]
}