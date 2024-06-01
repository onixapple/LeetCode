var twoSum = function(nums, target) {
    const values = {}
    for (let i = 0; i< nums.length; i++){
        const current = nums[i]
        const neededValue = target - nums[i]
         if(values[neededValue] != null){
             return [i, values[neededValue]]
         }else{
             values[current] = i
         }
    }
 };