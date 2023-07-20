function compareArrays(arr1, arr2) { 
    let result;
	result = arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index]);
	return result;   
}

function getUsersNamesInAgeRange(users, gender) {
    if(users.length === 0){
        return 0;
    } else if (gender === "мужской" || gender === "женский"){
        return users.filter(item => item.gender === gender).reduce((acc, item, idx, arr) => {
        acc += item.age;
        if (idx === arr.length - 1){
            return acc/ arr.length;
        } else {
            return acc;
        }
  }, 0);} else{
            return 0;
        }

}