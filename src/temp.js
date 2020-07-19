fetch('https://www.metaweather.com/api/location/search/?lattlong=50.068,-5.316')
.then(res=>res.json())
.then(data=>console.log(data))
.catch(err=>console.log(err));