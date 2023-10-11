const twoSum = (nums: number[], target: number) => {
    let ans = [0, 0];
    nums.forEach((n, i) => {
        nums.forEach((m, j) => {
            if (n + m === target && i !== j) {
                ans = [j, i];
                 
            }
        })
    });

    return ans;
}

twoSum([3, 3], 6);
