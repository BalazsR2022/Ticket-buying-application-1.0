var quantity = prompt('Add meg a darab számot!');
 var type = prompt('Add meg a jegy típusát!student/adult')

 var types = {
    student : 300,
    adult : 350,
    retired: 280,
 }


var price = types[type];
var discount = quantity > 10 ? 0.9 : 1;
alert(quantity  + ' db ' + type + ' jegy');






alert ('fizetendő : '+price * quantity * discount + ' Ft');
alert ('Köszönjük a vásárlást!')


/*

Input:
Hány jegyet kér?
Milyen típusú jegyet kér? (student|adult)

A diák jegy ára : 300Ft,
Felnőtt jegy ára: 350 Ft,
Nyugdíjas jegy ára : 280 Ft

Tíznél több jegy vásárlása esetén jár 10% kedvezmény



*/