function groupAdultsByAgeRange(arr){

    return arr.reduce((groups,item)=>{
        if(item.age < 18)
            return groups;

        let group = "" 
        if(item.age < 21)
            group = "20 and younger" 
        else if(item.age < 31)
            group = '21-30'
        else if(item.age < 41)
            group = '31-40'
        else if(item.age < 51)
            group = '41-50'
        else
            group = '51 and older'
        
        if(!groups.hasOwnProperty(group)){
            groups[group] = []
        }
           
        groups[group].push(item)
        return groups
    },{})

}
module.exports = {groupAdultsByAgeRange,}