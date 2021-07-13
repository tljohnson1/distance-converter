var report = function (feet, miles) {
    document.getElementById("result").innerHTML =
        feet + " feet = " + miles + " mile(s).";
};

document.getElementById("m_to_f").onclick = function (miles) {
    var miles = document.getElementById("distance").value;
    miles = miles.toFixed(2);
    report(miles*5280, miles);
};

document.getElementById("f_to_m").onclick = function (feet) {
    var feet = document.getElementById("distance").value;
    feet = feet.toFixed(2);
    report(feet, feet/5280);
};
