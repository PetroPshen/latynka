// Правила транслітерації
// 1.01 Додано апостроф.
if(!Translator);
else{

var CyrillicConsonants = "бвгґѓдџђжѕзкќлмнпѱҁѯрстфѳхцчшщ";
Translator.BelarusianToLatinka = Translator.RuleMap(Array(

Array("č","cz"),
Array("š","sz"),
Array("ž","ż"),
Array("llia","lla"),
Array("llie","lle"),
Array("llio","llo"),
Array("lliu","llu"),
Array("lli","lli"),
Array("lia","la"),
Array("lie","le"),
Array("lio","lo"),
Array("liu","lu"),
Array("li","li"),
Array("ľ","l"),
Array("l","ł"),
Array("x","ks"),
Array("v","w")

));

Translator.BelarusianToLatinka.version = "1.01";

}
