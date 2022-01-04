function calculate() {
    var price = document.forms["calform"]["price"].value;
    var year = document.forms["calform"]["year"].value;
    var interest = document.forms["calform"]["interest"].value;
    var inflation = document.forms["calform"]["inflation"].value;

    var final = price* Math.pow(1+interest/100,year);
    var PP = final/Math.pow(1+inflation/100,year);
    var RR = (Math.sqrt(PP/price,year)-1)*100;

    document.getElementsByClassName("result")[0].innerHTML = final.toFixed(2);
    document.getElementsByClassName("result")[1].innerHTML = PP.toFixed(2);
    document.getElementsByClassName("result")[2].innerHTML = RR.toFixed(2)+'%';

}