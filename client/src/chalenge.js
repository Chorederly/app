function correctTitle(str) {
  const words = ["and", "of", "the", "in"]
  let arr = str.toLowerCase().split(" ")
  return arr.map(word => {
      //word = word.replace(/-([^"and", "of", "the", "in"])/g, char => char.toUpperCase())
      return word.replace(/^[^"and", "of", "the", "in"]|\s+[^"and", "of", "the", "in"]|-[^"and", "of", "the", "in"]/, char => char.toUpperCase())}).join(" ")
}
console.log(correctTitle('mance rayder, King-beyond-the-wall.'))