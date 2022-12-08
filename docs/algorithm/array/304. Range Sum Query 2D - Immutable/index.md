```js

/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
    // 参考303 是一个数组, 这个是多个数组
    // this.newMatrix记录的是二维数组每一个row的前缀和;
    // this.newMatrix[i][j] = this.newMatrix[i][0] + this.newMatrix[i][1] + ... + this.newMatrix[i][j]
    // this.newMatrix[i][j] 代表第 i row, 前j个元素之和
    this.newMatrix = matrix.map((row) => {
        let arrNums = [];
        let total = 0;
        row.forEach((num) => {
            total += num;
            arrNums.push(total);
        });
        return arrNums;
    });
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
    let total = 0;
    if (col1 === 0) {
        // 遍历每一个row, 然后把每一个row的前缀和相加就是总的
        for (let i = row1; i <= row2; ++i) {
            total += this.newMatrix[i][col2];
        }
    } else {
        for (let i = row1; i <= row2; ++i) {
            total += this.newMatrix[i][col2] - this.newMatrix[i][col1 - 1];
        }
    }
    return total;
};


```
