var report = function (feet, miles) {
    document.getElementById("result").innerHTML =
        feet + " feet = " + miles + " mile(s).";
};

document.getElementById("m_to_f").onclick = function (miles) {
    var miles = document.getElementById("distance").value;
    report((miles*5280).tofixed(2), miles.tofixed(2));
};

document.getElementById("f_to_m").onclick = function (feet) {
    var feet = document.getElementById("distance").value;
    report(feet.tofixed(2), (feet/5280).tofixed(2));
};
