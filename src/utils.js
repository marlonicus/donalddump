const constantArray = new Array(100).fill(undefined)

const randomRange = (min, max) => {
  const ceilMin = Math.ceil(min)
  const floorMax = Math.floor(max)
  return Math.floor(Math.random() * (floorMax - ceilMin)) + ceilMin
}

const take = amount => {
  return constantArray.slice(0, amount)
}

export { 
  randomRange, 
  take 
}