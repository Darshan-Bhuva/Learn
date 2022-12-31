const pobj1 = new Promise(function(resolve, reject){
    setTimeout(()=>{
        let roll_no = [1,2,3,4,5]
        resolve(roll_no)
    },2000)
})
const getBiodata = (indexdata)=>{
    return new Promise((resolve, reject)=>{
        setTimeout((indexdata)=>{
            let biodata = {
                name:"Anonymous",
                age:100
            }
            resolve(`My name is ${biodata.name} and I am ${biodata.age} year old.`)
        },2000,indexdata)
    })
}
async function getData(){

}
