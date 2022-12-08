```js
var NumArray = function (nums) {
    // container数组中的每一位记录的是 前一位的值 + 之前的和
    // container [i] 是 container [0...i-1] 的和
    let container = [0];
    for (let i = 1; i <= nums.length; i++) {
        container[i] = nums[i - 1] + container[i - 1];
    }
    return container;
};

/**

* @param {number} left
* @param {number} right
* @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    let rightValue = NumArray.prototype.container[right + 1];
    let leftValue = NumArray.prototype.container[left];
    return rightValue - leftValue;
};

let temp = new NumArray([-2, 0, 3, -5, 2, -1]);
```
