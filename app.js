const http = new easyHTTP();

http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts){
    if(err) {
        alert(err);
    } else {
        console.log(posts);
    }
});

