// a-cage-of-lies-date.js

//=====================
// mode:
// "countup"   = 已經連載 XX 日
// "countdown" = XX 日之後完結
//=====================

const startDate = new Date("2026-05-06");
const endDate = new Date("2026-11-25");

const title = document.getElementById("title");
const days = document.getElementById("days");

function update(){

    const now = new Date();
    const oneDay = 1000 * 60 * 60 * 24;

    if(now < startDate){

        // 距離開始
        const d = Math.ceil((startDate - now)/oneDay);

        title.textContent = "Coming Soon";
        days.textContent = d + " Days";

    }else if(now <= endDate){

        // 已開始
        const d = Math.floor((now - startDate)/oneDay);

        title.textContent = "Serializing";
        days.textContent = d + " Days";

    }else{

        // 已完結
        title.textContent = "Status";
        days.textContent = "Completed";

    }

}

update();
setInterval(update,1000*60*60);