var templeObject = new XMLHttpRequest();
templeObject.open('GET', 'https://casswylie.github.io/json/temples.json', true);

templeObject.send();

templeObject.onload = function() {
    var templeInfo = JSON.parse(templeObject.responseText);
    console.log(templeInfo);



    //anchorage
    document.getElementById('ak').innerHTML = templeInfo.temple[0].name;
    console.log(templeInfo.temple[0].name);
    document.getElementById('akstreet').innerHTML = templeInfo.temple[0].street;
    console.log(templeInfo.temple[0].street);
    document.getElementById('akcity').innerHTML = templeInfo.temple[0].city;
    console.log(templeInfo.temple[0].city);
    document.getElementById('akphone').innerHTML = templeInfo.temple[0].phone;
    console.log(templeInfo.temple[0].phone);

    document.getElementById('akmonday').innerHTML = templeInfo.temple[0].endowment[1];
    console.log(templeInfo.temple[0].endowment[1]);
    document.getElementById('aktuesday').innerHTML = templeInfo.temple[0].endowment[2];
    console.log(templeInfo.temple[0].endowment[2]);
    document.getElementById('akwednesday').innerHTML = templeInfo.temple[0].endowment[3];
    console.log(templeInfo.temple[0].endowment[3]);
    document.getElementById('akthursday').innerHTML = templeInfo.temple[0].endowment[4];
    console.log(templeInfo.temple[0].endowment[4]);
    document.getElementById('akfriday').innerHTML = templeInfo.temple[0].endowment[5];
    console.log(templeInfo.temple[0].endowment[5]);
    document.getElementById('aksaturday').innerHTML = templeInfo.temple[0].endowment[6];
    console.log(templeInfo.temple[0].endowment[6]);
    

    document.getElementById('akclosures0').innerHTML = templeInfo.temple[0].closures[0];
    console.log(templeInfo.temple[0].closures[0]);
    document.getElementById('akclosures1').innerHTML = templeInfo.temple[0].closures[1];
    console.log(templeInfo.temple[0].closures[1]);
    document.getElementById('akclosures2').innerHTML = templeInfo.temple[0].closures[2];
    console.log(templeInfo.temple[0].closures[2]);
    document.getElementById('akclosures3').innerHTML = templeInfo.temple[0].closures[3];
    console.log(templeInfo.temple[0].closures[3]);
    document.getElementById('akclosures4').innerHTML = templeInfo.temple[0].closures[4];
    console.log(templeInfo.temple[0].closures[4]);
    document.getElementById('akclosures5').innerHTML = templeInfo.temple[0].closures[5];
    console.log(templeInfo.temple[0].closures[5]);




//gilbert
    document.getElementById('az').innerHTML = templeInfo.temple[1].name;
    console.log(templeInfo.temple[1].name);
    document.getElementById('azstreet').innerHTML = templeInfo.temple[1].street;
    console.log(templeInfo.temple[1].street);
    document.getElementById('azcity').innerHTML = templeInfo.temple[1].city;
    console.log(templeInfo.temple[1].city);
    document.getElementById('azphone').innerHTML = templeInfo.temple[1].phone;
    console.log(templeInfo.temple[1].phone);

    document.getElementById('azmonday').innerHTML = templeInfo.temple[1].endowment[0];
    console.log(templeInfo.temple[1].endowment[0]);
    document.getElementById('aztuesday').innerHTML = templeInfo.temple[1].endowment[1];
    console.log(templeInfo.temple[1].endowment[1]);
    document.getElementById('azwednesday').innerHTML = templeInfo.temple[1].endowment[2];
    console.log(templeInfo.temple[1].endowment[2]);
    document.getElementById('azthursday').innerHTML = templeInfo.temple[1].endowment[3];
    console.log(templeInfo.temple[1].endowment[3]);
    document.getElementById('azfriday').innerHTML = templeInfo.temple[1].endowment[4];
    console.log(templeInfo.temple[1].endowment[4]);
    document.getElementById('azsaturday').innerHTML = templeInfo.temple[1].endowment[5];
    console.log(templeInfo.temple[1].endowment[5]);

    
    document.getElementById('azclosures0').innerHTML = templeInfo.temple[1].closures[0];
    console.log(templeInfo.temple[1].closures[0]);
    document.getElementById('azclosures1').innerHTML = templeInfo.temple[1].closures[1];
    console.log(templeInfo.temple[1].closures[1]);
    document.getElementById('azclosures2').innerHTML = templeInfo.temple[1].closures[2];
    console.log(templeInfo.temple[1].closures[2]);
    document.getElementById('azclosures3').innerHTML = templeInfo.temple[1].closures[3];
    console.log(templeInfo.temple[1].closures[3]);
    document.getElementById('azclosures4').innerHTML = templeInfo.temple[1].closures[4];
    console.log(templeInfo.temple[1].closures[4]);
    document.getElementById('azclosures5').innerHTML = templeInfo.temple[1].closures[5];
    console.log(templeInfo.temple[1].closures[5]);



//manhattan
    document.getElementById('ny').innerHTML = templeInfo.temple[2].name;
    console.log(templeInfo.temple[2].name);
    document.getElementById('nystreet').innerHTML = templeInfo.temple[2].street;
    console.log(templeInfo.temple[2].street);
    document.getElementById('nycity').innerHTML = templeInfo.temple[2].city;
    console.log(templeInfo.temple[2].city);
    document.getElementById('nyphone').innerHTML = templeInfo.temple[2].phone;
    console.log(templeInfo.temple[2].phone);
    document.getElementById('nymonday').innerHTML = templeInfo.temple[3].endowment[0];
    console.log(templeInfo.temple[3].endowment[0]);
    document.getElementById('nytuesday').innerHTML = templeInfo.temple[3].endowment[1];
    console.log(templeInfo.temple[3].endowment[1]);
    document.getElementById('nywednesday').innerHTML = templeInfo.temple[3].endowment[2];
    console.log(templeInfo.temple[3].endowment[2]);
    document.getElementById('nythursday').innerHTML = templeInfo.temple[3].endowment[3];
    console.log(templeInfo.temple[3].endowment[3]);
    document.getElementById('nyfriday').innerHTML = templeInfo.temple[3].endowment[4];
    console.log(templeInfo.temple[3].endowment[4]);
    document.getElementById('nysaturday').innerHTML = templeInfo.temple[3].endowment[5];
    console.log(templeInfo.temple[3].endowment[5]);

    document.getElementById('nyclosures0').innerHTML = templeInfo.temple[2].closures[0];
    console.log(templeInfo.temple[2].closures[0]);
    document.getElementById('nyclosures1').innerHTML = templeInfo.temple[2].closures[1];
    console.log(templeInfo.temple[2].closures[1]);
    document.getElementById('nyclosures2').innerHTML = templeInfo.temple[2].closures[2];
    console.log(templeInfo.temple[2].closures[2]);
    document.getElementById('nyclosures3').innerHTML = templeInfo.temple[2].closures[3];
    console.log(templeInfo.temple[2].closures[3]);
    document.getElementById('nyclosures4').innerHTML = templeInfo.temple[2].closures[4];
    console.log(templeInfo.temple[2].closures[4]);
    document.getElementById('nyclosures5').innerHTML = templeInfo.temple[2].closures[5];
    console.log(templeInfo.temple[2].closures[5]);
    document.getElementById('nyclosures6').innerHTML = templeInfo.temple[2].closures[6];
    console.log(templeInfo.temple[2].closures[6]);
    document.getElementById('nyclosures7').innerHTML = templeInfo.temple[2].closures[7];
    console.log(templeInfo.temple[2].closures[7]);



//winter quarters
    document.getElementById('wq').innerHTML = templeInfo.temple[3].name;
    console.log(templeInfo.temple[3].name);
    document.getElementById('wqstreet').innerHTML = templeInfo.temple[3].street;
    console.log(templeInfo.temple[3].street);
    document.getElementById('wqcity').innerHTML = templeInfo.temple[3].city;
    console.log(templeInfo.temple[3].city);
    document.getElementById('wqphone').innerHTML = templeInfo.temple[3].phone;
    console.log(templeInfo.temple[3].phone);

    document.getElementById('wqmonday').innerHTML = templeInfo.temple[3].endowment[0];
    console.log(templeInfo.temple[3].endowment[0]);
    document.getElementById('wqtuesday').innerHTML = templeInfo.temple[3].endowment[1];
    console.log(templeInfo.temple[3].endowment[1]);
    document.getElementById('wqwednesday').innerHTML = templeInfo.temple[3].endowment[2];
    console.log(templeInfo.temple[3].endowment[2]);
    document.getElementById('wqthursday').innerHTML = templeInfo.temple[3].endowment[3];
    console.log(templeInfo.temple[3].endowment[3]);
    document.getElementById('wqfriday').innerHTML = templeInfo.temple[3].endowment[4];
    console.log(templeInfo.temple[3].endowment[4]);
    document.getElementById('wqsaturday').innerHTML = templeInfo.temple[3].endowment[5];
    console.log(templeInfo.temple[3].endowment[5]);
    /*document.getElementById('wqbaptism').innerHTML = templeInfo.temple[3].baptism;
    console.log(templeInfo.temple[3].baptism);
    document.getElementById('wqinitiatory').innerHTML = templeInfo.temple[3].initiatory;
    console.log(templeInfo.temple[3].initiatory);
    document.getElementById('wqendowment').innerHTML = templeInfo.temple[3].endowment;
    console.log(templeInfo.temple[3].endowment);
    document.getElementById('wqsealing').innerHTML = templeInfo.temple[3].sealing;
    console.log(templeInfo.temple[3].sealing);
    document.getElementById('wqservices').innerHTML = templeInfo.temple[3].services;
    console.log(templeInfo.temple[3].services);
    document.getElementById('wqmilestones').innerHTML = templeInfo.temple[3].milestones;
    console.log(templeInfo.temple[3].milestones);*/
    document.getElementById('wqclosures0').innerHTML = templeInfo.temple[3].closures[0];
    console.log(templeInfo.temple[3].closures[0]);
    document.getElementById('wqclosures1').innerHTML = templeInfo.temple[3].closures[1];
    console.log(templeInfo.temple[3].closures[1]);
    document.getElementById('wqclosures2').innerHTML = templeInfo.temple[3].closures[2];
    console.log(templeInfo.temple[3].closures[2]);
    document.getElementById('wqclosures3').innerHTML = templeInfo.temple[3].closures[3];
    console.log(templeInfo.temple[3].closures[3]);
    document.getElementById('wqclosures4').innerHTML = templeInfo.temple[3].closures[4];
    console.log(templeInfo.temple[3].closures[4]);
    document.getElementById('wqclosures5').innerHTML = templeInfo.temple[3].closures[5];
    console.log(templeInfo.temple[3].closures[5]);
}