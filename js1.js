let arr = [3,4,7,9,10];
Array(arr)
    function Array(arr) {
        let max1 = [];
        let max2 = [];
        let max3 = [];
        for (let i = 0; i < arr.length; i++) {
            if (max1 < arr[i]) {
                max1 = arr[i]
            }

        }
        for (let i = 0; i < arr.length; i++) {
            if (max2 < arr[i] && arr[i] < max1) {
                max2 = arr[i]
            }

        }
        for (let i = 0; i < arr.length; i++) {
            if (max3 < arr[i] && arr[i] < max2) {
                max3 = arr[i]
            }
        }
        console.log(max3)
    }





