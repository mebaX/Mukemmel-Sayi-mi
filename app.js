mukemmelSayiMi(prompt("Bir sayı giriniz:"));
function yaz(bool = true) {
    if (bool) {
        document.getElementById("myP").innerHTML += "evet";
    }
    else if (bool == false) {
        document.getElementById("myP").innerHTML += "hayır";
    }
}
function mukemmelSayiMi(number) {
    var toplam = 1;
    for (var i = 2; i <= (number / 2); i++) {
        if (number % i == 0) {
            toplam += i;
        }
    }
    if (toplam == number ? yaz() : yaz(false));
}
