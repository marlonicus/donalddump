const constantArray = new Array(100).fill(undefined)

const randomRange = (min, max) => {
  const ceilMin = Math.ceil(min)
  const floorMax = Math.floor(max)
  return Math.floor(Math.random() * (floorMax - ceilMin)) + ceilMin
}

const take = amount => {
  return constantArray.slice(0, amount)
}

const map = (obj, fn) => {
  return Object.keys(obj).reduce((prev, curr) => {
    prev[curr] = fn(obj[curr])
    return prev
  }, {})
}

export { 
  randomRange, 
  take 
}