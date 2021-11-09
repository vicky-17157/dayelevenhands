document.getElementById("nav03").innerHTML =
"<ul id='menu'>" +
"<li><a href='description.html'>Description</a></li>" +
"<li><a href='services.html'>Service</a></li>" +
"<li><a href='aboutus.html'>About us</a></li>" +
"<li><a href='contact.html'>Contact us</a></li>"
"</ul>";
const service={name:"decorations treatement",cost: 10000,
servicedetails:function(){
    return "Service of"+this.name+"has a total cost of"+this.cost;
}
};
let servicedata=service.servicedetails();
document.getElementById("nav2").innerHTML=servicedata;

const service1={name:"cooling indexpo",cost: 50000,
servicedetails1:function(){
    return "Service of"+this.name+"has a total cost of"+this.cost;
}
};
let servicedata1=service1.servicedetails1();
document.getElementById("nav3").innerHTML=servicedata1;

const service2={name:"lucky health card",cost: 20000,
servicedetails2:function(){
    return "Service of"+this.name+"has a total cost of"+this.cost;
}
};
let servicedata2=service2.servicedetails2();
document.getElementById("nav4").innerHTML=servicedata2;

const service3={name:"religious panzer",cost: 50000,
servicedetails3:function(){
    return "Service of"+this.name+"has a total cost of"+this.cost;
}
};
let servicedata3=service3.servicedetails3();
document.getElementById("nav5").innerHTML=servicedata3;

const mobile={name:"oneplus",cost: 50000,Description:"Snapdragon 855",display:6.41,storage:128,
mobiledetails:function(){
    return "This model of"+this.name+"with description"+this.Description+"has a total cost of"+this.cost;
}
};
let mobiledata=mobile.mobiledetails();
document.getElementById("nav6").innerHTML=mobiledata;

const laptop={name:"dell",cost: 95000,Description:"11th Generation Intel® Core™ i5-11300H Processor",
laptopdetails:function(){
    return "This model of"+this.name+"with description"+this.Description+"has a total cost of"+this.cost;
}
};
let laptopdata=mobile.mobiledetails();
document.getElementById("nav7").innerHTML=laptopdata;

const ipad={name:"apple",cost: 70000,Description:"512 MB of DDR2 RAM",
ipaddetails:function(){
    return "This model of"+this.name+"with description"+this.Description+"has a total cost of"+this.cost;
}
};
let ipaddata=ipad.ipaddetails();
document.getElementById("nav8").innerHTML=ipaddata;



