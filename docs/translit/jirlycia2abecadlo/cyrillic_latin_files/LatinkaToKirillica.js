// Правила транслітерації
// 1.00

if(!Translator);
else{

var CyrillicConsonants = "бвгґѓдџђжѕзкќлмнпѱҁѯрстфѳхцчшщ";
Translator.LatinkaToBelarusian = Translator.RuleMap(Array(

Array("cz","č"),
Array("sz","š"),
Array("ż","ž"),
Array("lla","llia"),
Array("lle","llie"),
Array("llo","llio"),
Array("llu","lliu"),
Array("lli","lli"),
Array("la","lia"),
Array("le","lie"),
Array("lo","lio"),
Array("lu","liu"),
Array("li","li"),
Array("ksia","ksia"),
Array("płaks","plaks"),
Array("ks","x"),
Array("l","ľ"),
Array("ł","l"),
Array("w","v")

));

Translator.LatinkaToBelarusian.version = "1.00";

}
