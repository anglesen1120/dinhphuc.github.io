

function pad(num, size) {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
}
function sleepCaculator(h, m, cycle, timetosleep) {

    $("#result").text("");
    $("#renderSuggest").text("");

    var timeCycle = 1.5 * cycle * 60;
    var getup = h * 60 + timeCycle + m + timetosleep;
    if (getup > 24 * 60) {
        getup = h * 60 + timeCycle + m + timetosleep - 24 * 60;
    }

   var badgeType="success";
      switch (cycle) {
        case 3:
            badgeType = "danger";
            break;
        case 4:
            badgeType = "warning";
            break;
        case 5:
            badgeType = "primary";
            break;
        case 6:
            badgeType = "success";
            break;
    }

    var s = `<p>Bạn nên thức dậy lúc </p>  <span class="badge badge-`+badgeType+`" style=" font-size: 25px; ">`+pad(Math.floor(getup / 60), 2) + ":" + pad(getup % 60, 2)+`</span>` ;
  
    $("#result").html(s);


    var c = 3;
    var renderSuggest = "";
    for (var i = 0; i < 6; i++) {
        var cyc = 1.5 * c * 60;
        var getuplst = h * 60 + cyc + m + timetosleep;
        if (getuplst > 24 * 60) {
            getuplst = h * 60 + cyc + m + timetosleep - 24 * 60;
        }

        renderSuggest += `<tr> <th scope="row">` + (i + 1) + `</th> <td>` + h + `:` + m + `</td> <td>` + pad(Math.floor(getuplst / 60), 2) + ":" + pad(getuplst % 60, 2) + `</td> <td>` + c * 1.5 + `</td> <td>` + c + `</td> </tr>`;
        c++;
    }

    $("#renderSuggest").html(renderSuggest);

}

function process() {
    var h = Number($("#hour").val());
    var m = Number($("#minutes").val());
    var cycle = Number($("#timeCycle").val());
    var timetosleep = Number($("#timeToSleep").val());
 
    sleepCaculator(h, m, cycle, timetosleep);

}

function init() {
    var today = new Date();
    $("#hour").val(today.getHours());
    $("#minutes").val(today.getMinutes());
    process();
    $("#btnProcess").click(function () {
        process();
    })

    $("#hour, #minutes, #timeCycle, #timeToSleep").change(function () {
        process();
    })
}
//////

init();




