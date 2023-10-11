const removeDupesFromSorted = (nums: number[]) => {
    for (let i = 0;i < nums.length - 1;i++) {
        if (nums[i] === nums[i + 1]){
            nums.splice(i, 1)
            i = i - 1;
        }
    }
    console.log(nums.length);
    
    
    return nums.length;
};

removeDupesFromSorted([1, 1, 1, 2, 3]);
