export function verifyUser(user:object){
    return new Promise((resolve,reject)=>{
        const arr = ["name","email","password"];
        for(let i = 0; i < arr.length; i++){
            if(user.hasOwnProperty(arr[i]) == false){
                reject(null)
            }
        }
        resolve(true)
    });
}