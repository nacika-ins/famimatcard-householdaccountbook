if (location.href == "https://wis.pocketcard.co.jp/ft/do/pc/limitAmountRefFwd") {
    var money = $("td.td_momey:eq(1)").html().replace("円", "").replace(" ", "").replace(",","").replace(/\n/g, "");
    var time = new Date();
    var timeText = time.getFullYear()+"-"+time.getHours()+"-"+time.getDate();
    localStorage[timeText] = money;
    console.log("現在のご利用可能額を記録しました");
    
    console.log("---------------------------");
    var arr = [];
    for ( var i in localStorage) {
        arr.push(i+"\t"+localStorage[i]);
    }
    console.log(arr.join("\n"));
    console.log("---------------------------");
    
}
else {
    console.log("ご利用可能額ページを表示してください");
    location.href = "https://wis.pocketcard.co.jp/ft/do/pc/limitAmountRefFwd";
}

