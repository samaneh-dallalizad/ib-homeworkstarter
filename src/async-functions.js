module.exports.giveItBackLater=(param,callback)=>{
    setTimeout(function(){
        callback(param)
    },100);
}
module.exports.addSomePromises=(promise)=>{
    return promise.then(()=>{
        return Promise.resolve('successsuccess')
    }).catch(() => {
        return Promise.resolve('failurefailurefailure')
    })
}
module.exports.promiseToGiveItBackLater=(param)=>{
    return Promise.resolve(param)
}