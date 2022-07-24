export const LINKS = {
  GDRIVE: 'https://drive.google.com/file/d/1WyQWJqrEMXOaKKo4v3rP5PEV6SLl14uy/view?usp=sharing',
  WHATSAPP: 'https://wa.me/5551980254545',
  GITHUB: 'https://github.com/IsraelDeorce',
  LINKEDIN: 'https://www.linkedin.com/in/israeldeorce',
}

export const TEXT = {
  MYNAME: 'Israel Deorce',
  EMAIL: 'israel.idvj@gmail.com',
  PHONE: '+55 (51) 98025-4545',
  PORTO: 'Porto Alegre'
}

const ACCESS_ARRAY_INDEX =
`const array = [1, 2, 3, 4];
array[1];`

const BINARY_SEARCH =
`function binarySearch(nums, target) {
  let lower = 0;
  let upper = nums.length - 1;
  while (lower <= upper) {
    const middle = lower + Math.round((upper - lower) / 2);
    if (nums[middle] === target) return middle;
    if (nums[middle] > target) upper = middle - 1;
    else lower = middle + 1;
  }
  return -1;
};`

const LINEAR_SEARCH =
`function linearSearch(nums = [4, 1, 5, 6, -1, 8], target = 6) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) return i;
  }
  return -1;
};`

const QUICKSORT =
`const items = [6, 5, 3, 1, 8, 7, 2, 4];

function swap(items, leftIndex, rightIndex){
  const temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}

function partition(items, left, right) {
  const pivot = items[Math.floor((right + left) / 2)], // middle element
  let i = left; // left pointer
  let j = right; // right pointer
  while (i <= j) {
    while (items[i] < pivot) i++;
    while (items[j] > pivot) j--;
    if (i <= j) {
      swap(items, i, j); // swapping two elements
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(items, left, right) {
  let index;
  if (items.length > 1) {
    index = partition(items, left, right); // index returned from partition
    if (left < index - 1) { // more elements on the left side of the pivot
      quickSort(items, left, index - 1);
    }
    if (index < right) { // more elements on the right side of the pivot
      quickSort(items, index, right);
    }
  }
  return items;
}

// first call to quick sort
const sortedArray = quickSort(items, 0, items.length - 1);
`
const NESTED_LOOP =
`function findHighestMultiplication(nums = [4, 1, 5, 6, -1, 8]) {
  let maxMultiplication = Number.MIN_VALUE;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      const result = nums[i] * nums[j];
      if (result > maxMultiplication) {
        maxMultiplication = result;
      }
    }
  }
  return maxMultiplication;
};`

const TOWER_OF_HANOI =
`function towerOfHanoi(n, from_rod,  to_rod,  aux_rod) {
  if (n == 0) return;
  towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
  towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
}

towerOfHanoi(4, 'A', 'C', 'B');`

export const ALGS = {
  ACCESS_ARRAY_INDEX,
  BINARY_SEARCH,
  LINEAR_SEARCH,
  QUICKSORT,
  NESTED_LOOP,
  TOWER_OF_HANOI,
}
