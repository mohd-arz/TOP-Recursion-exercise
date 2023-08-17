/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */

function mergeSort(arr, first, last) {
  if (first >= last) return;

  const mid = Math.floor((first + last) / 2);
  mergeSort(arr, first, mid);
  mergeSort(arr, mid + 1, last);
  merge(arr, first, mid + 1, last);
}

// Here we are updating the same array.
function merge(arr, first, mid, last) {
  // Assigning first value to i for looping
  let i = first;
  // same goes for j
  let j = mid;
  // temp variable for swapping
  let temp;
  while (i <= mid) {
    // if [4,2] then swapping
    if (arr[i] > arr[j]) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    // regarless of outcome incrementing the j by 1;
    j++;

    // If the j exceeds the last then increment the i (ex)[2,4]|[3,5]
    //  i.e after visits 2 -> with both 3 and 5 then inc by 1 so 4 -> with 3,5 .
    if (j > last) {
      i++;
      // resetting the j , i.e after 2-> [3,5] then 4->[3,5]
      j = mid;
    }
  }
}

const unsortedarr = [2, 4, 5, 3, 7, 6, 9, 1];
mergeSort(unsortedarr, 0, unsortedarr.length - 1);
console.log(unsortedarr);
