const url = "https://jsonplaceholder.org/posts/1";
getApi = fetch(url)
getApi.then(res=>res.json()).then(data=>{console.log(data)}).catch(error=>console.log(error))