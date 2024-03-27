setInterval(()=>{
let ne = new Date();		
let pk = document.getElementById("result");
pk.innerText =
ne.getHours()+":"+
ne.getMinutes()+":"+
ne.getSeconds();
},1000);	
