let activate_flg = false;
let isOpen = false;
document.getElementById("instagram-desktop").addEventListener("click", function() {
  redirectUrl('https://www.instagram.com/sekkotsuin_sato/');
});
document.getElementById("line-icon-desktop").addEventListener("click", function() {
      redirectUrl('https://l.instagram.com/?u=https%3A%2F%2Flin.ee%2FwyRqoSN%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAacEltCwdTbx5mQ4LG-YhOIGeLNHSkghG_HkxNEK4H-y31XwGqN1Ry4Xs1Snaw_aem_D_XKIdXlTt8awMQZU7hjpg&e=AT0bcLOQ1P--owLDSM5TjmvZU7cdL0sEcq79i1EfkqXfJCuKPbBtGG0SFvxv2NQEZNH6vTtwwzcc4xNi_QUYwJjHu5ZVXOLh5iT1Adk');
});
document.getElementById("tel-icon-desktop").addEventListener("click", function() {
//   redirectUrl('./reservation.html#tel-no');
openDialog();
  
});
document.getElementById("line-icon").addEventListener("click", function() {
      redirectUrl('https://l.instagram.com/?u=https%3A%2F%2Flin.ee%2FwyRqoSN%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAacEltCwdTbx5mQ4LG-YhOIGeLNHSkghG_HkxNEK4H-y31XwGqN1Ry4Xs1Snaw_aem_D_XKIdXlTt8awMQZU7hjpg&e=AT0bcLOQ1P--owLDSM5TjmvZU7cdL0sEcq79i1EfkqXfJCuKPbBtGG0SFvxv2NQEZNH6vTtwwzcc4xNi_QUYwJjHu5ZVXOLh5iT1Adk');

});
document.getElementById("instagram").addEventListener("click", function() {
  redirectUrl('https://www.instagram.com/sekkotsuin_sato/');
});
document.getElementById("tel-icon").addEventListener("click", function() {
opneDialog();
    //   redirectUrl('tel:0312345678');
  
});


// Promiseベースのsleep関数
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function yoyaku_button() {
    const yoyaku_button_menu = document.getElementById("yoyaku-button-menu");

    if (!activate_flg) {
        activate_flg = true;
        yoyaku_button_menu.style.display = "block";

        // 下から上へアニメーション（0 → 10）
        for (let i = 0; i <= 10; i++) {
            yoyaku_button_menu.style.bottom = 30 * i + "px";
            await sleep(10); // 50msずつ待つ
        }

    } else {
        // 上から下へアニメーション（10 → 0）
        for (let i = 10; i >= 0; i--) {
            yoyaku_button_menu.style.bottom = 30 * i + "px";
            await sleep(10);
        }
        yoyaku_button_menu.style.display = "none";
        activate_flg = false;
    }
}

async function toggleMenu() {
    const menu = document.getElementById("menu-space");
    const menu_inner_space = document.getElementById("menu-inner-space");

    if (!isOpen) {
        isOpen = true;
        menu.style.display = "block";
        // 下から上へアニメーション（0 → 10）
        for (let i = 0; i <= 10; i++) {
            menu.style.height = 38.6 * i + "px";
            // console.log(38.6 * i + "px");
            await sleep(10); // 50msずつ待つ
        }
        menu_inner_space.style.display = "block";
    } else {
        menu_inner_space.style.display = "none";
        for (let i = 10; i >= 0; i--) {
            menu.style.height = 38.6 * i + "px";
            // console.log(38.6 * i + "px");
            await sleep(10);
        }

        menu.style.display = "none";

        isOpen = false;
    }

}
function redirectUrl(url){
    window.location.href = url

}
function openDialog(){
    alert("申し訳ございません。\r\n電話番号はただいま準備中です");
}