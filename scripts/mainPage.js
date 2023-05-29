console.log("MAIN PAGE IS WORKING!");
let lecture01Button = document.getElementById('lecture01Button');
let lecture02Button = document.getElementById('lecture02Button');
let lecture03Button = document.getElementById('lecture03Button');
let lecture04Button = document.getElementById('lecture04Button');
let lecture05Button = document.getElementById('lecture05Button');
let lecture06Button = document.getElementById('lecture06Button');

lecture01Button.addEventListener("click",function(){
    window.location.replace('/lecture/lecture01');

})

lecture02Button.addEventListener("click",function(){
    window.location.replace('/lecture/lecture02');

})

lecture03Button.addEventListener("click",function(){
    window.location.replace('/lecture/lecture03');

})

lecture04Button.addEventListener("click",function(){
    window.location.replace('/lecture/lecture04');

});

lecture05Button.addEventListener("click", function(){
    window.location.replace('/lecture/lecture05');
});

lecture06Button.addEventListener("click", function(){
    window.location.replace('/lecture/lecture06');
});




