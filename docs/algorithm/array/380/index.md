# 380. O(1) 时间插入、删除和获取随机元素

这道题要求实现一个类，满足插入、删除和获取随机元素操作的平均时间复杂度为 O(1)。

变长数组可以在 O(1) 的时间内完成获取随机元素操作，但是由于无法在 O(1) 的时间内判断元素是否存在，因此不能在 O(1) 的时间内完成插入和删除操作。哈希表可以在 O(1) 的时间内完成插入和删除操作，但是由于无法根据下标定位到特定元素，因此不能在 O(1) 的时间内完成获取随机元素操作。为了满足插入、删除和获取随机元素操作的时间复杂度都是 O(1)，需要将变长数组和哈希表结合，变长数组中存储元素，哈希表中存储每个元素在变长数组中的下标。

插入操作时，首先判断 val 是否在哈希表中，如果已经存在则返回 false，如果不存在则插入 val，操作如下：

1. 在变长数组的末尾添加 val；

2. 在添加 val 之前的变长数组长度为 val 所在下标 index，将 val 和下标 index 存入哈希表；

3. 返回 true。

删除操作时，首先判断 val 是否在哈希表中，如果不存在则返回 false，如果存在则删除 val，操作如下：

1. 从哈希表中获得 val 的下标 index；

2. 将变长数组的最后一个元素 last 移动到下标 index 处，在哈希表中将 last 的下标更新为 index；

3. 在变长数组中删除最后一个元素，在哈希表中删除 val；

4. 返回 true。

删除操作的重点在于将变长数组的最后一个元素移动到待删除元素的下标处，然后删除变长数组的最后一个元素。该操作的时间复杂度是 O(1)，且可以保证在删除操作之后变长数组中的所有元素的下标都连续，方便插入操作和获取随机元素操作。

获取随机元素操作时，由于变长数组中的所有元素的下标都连续，因此随机选取一个下标，返回变长数组中该下标处的元素。

```js
var RandomizedSet = function() {
    this.nums = [];
    this.indices = new Map();
};

RandomizedSet.prototype.insert = function(val) {
    if (this.indices.has(val)) {
        return false;
    }
    let index = this.nums.length;
    this.nums.push(val);
    this.indices.set(val, index);
    return true;
};

RandomizedSet.prototype.remove = function(val) {
    if (!this.indices.has(val)) {
        return false;
    }
    let id = this.indices.get(val);
    // 把最后一位赋值给 id位置的值, 然后这个时候 id 位置上的初始值没有了,
    // 然后我们数组有两个最后位置的值, 我们直接pop一个 
    this.nums[id] = this.nums[this.nums.length - 1];
    this.indices.set(this.nums[id], id);// 同时重置下map数据
    this.nums.pop();
    this.indices.delete(val);
    return true;
};

RandomizedSet.prototype.getRandom = function() {
    const randomIndex = Math.floor(Math.random() * this.nums.length);
    return this.nums[randomIndex];
};

```
