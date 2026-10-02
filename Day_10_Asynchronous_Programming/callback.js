// Both work perfectly when ran on node env

setTimeout(() => console.log("Come Again"),500);

setTimeout(function(){
    console.log('Welcome Back!');
},3000);