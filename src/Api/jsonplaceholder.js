const url = "https://jsonplaceholder.org/posts/1";
getApi = fetch(url)
getApi.then(res=>console.log(res))