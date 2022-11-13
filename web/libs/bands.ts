export let randomSortedBands = []

export function getRandomSortedBands() {
  return randomSortedBands
}

// 型定義ができるまではanyで対応
export function updateRandomSortedbands(sortedBands: any) {
  randomSortedBands = sortedBands
}
