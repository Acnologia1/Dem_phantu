function find_max(arr){
    var max = arr[0];
    for(let i= 0;i<arr.length ; ++i){
        if(max <arr[i]){
            max = arr[i];
        }
    }
    return max;
}
function find_min(arr){
    var min = arr[0];
    for(let i= 0;i<arr.length ; ++i){
        if(min >arr[i]){
            min = arr[i];
        }
    }
    return min;
}
//thuật toán tìm kiếm tuyến tính
function seqSearch(arr, data) {
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] == data) {
            return true;
        }
    }
    return false;
}
//thuật toán tìm kiếm nhị phân
function binarySearch(arr,x){
    let left = 0;
    let right = arr.length -1;

    while(left <= right){
        let mid = (left +right)/2;
        if(x == arr[mid]){
            return mid;
        }
        else if(x >arr[mid]){
            left = mid+1;
        }
        else if(x <arr[mid]){
            right = mid -1;
        }
    }
    return -1;
}
//
function dispArr(arr) {
    for (var i = 0; i < arr.length; ++i) {
        document.write(arr[i] + " ");
        if(i%10==9){
            document.write("\n");
        }
    }
    if(i%10!=0){
        document.write("\n");
    }
}
//Đếm số lần xuất hiện của phần tử

function count(arr,data){
    var count = 0;
    var position = binarySearch(arr,data);
    if(position >-1){
        ++count;
        for(var i = position-1;i>0;--i){
            if(arr[i] == data){
                ++count;
            }
            else{
                break;
            }
        }
        for(var i = position+1;i<arr.length;++i){
            if(arr[i] == data){
                ++count;
            }
            else{
                break;
            }
        }
        return count;
    }
}
function sort(nums){
    var temp =0;
    for(let i =0 ; i < nums.length -1; i++){
        for(let j = i+1;j<nums.length;j++)
            if(nums[i] < nums[j]){
                temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
    }
}
function count1(arr, data) {
    var dem = 0;
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] == data) {
            dem++;
        }
    }
    return dem;
}
/*
//Tạo 1 dãy ngẫu nhiên có 100 phần tử
var nums =[];
    for(var i =0;i<100;++i){
        nums[i] = Math.floor(Math.random()*101);
    }
*/
//download Regex Buddy