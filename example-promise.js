//openweathermap api.org/data/2.5/weather?q=Leeds,uk,&units=metric&appid=6a47cd743d68ba4365f097da43f798b8



// function getTempPromise(location) {
//     return new Promise(function(resolve, reject) {
//         // setTimeout(function() {
//             resolve(80);
//             reject('City not found');
//         // }, 1000);
//     });
// }

function addPromise(a,b){
  return new Promise(function(resolve,reject){

    if(typeof a==='number' && typeof b==='number')
    {
    resolve (a+b);
  }
    reject('there was an error');
  });
}


// getTempPromise('Leeds').then(function(temp) {
//     console.log('promise success', temp);
// }, function(err) {
//     console.log('promise error',err);
// })



addPromise(1234567899,2).then(function(sum){
    console.log('sum',sum);
},
function (err){
  console.log('promise error',err);
})
