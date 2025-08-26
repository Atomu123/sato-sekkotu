let activate_flg = false;
let isOpen = false;
document.getElementById("instagram-desktop").addEventListener("click", function() {
  redirectUrl('https://www.instagram.com/sekkotsuin_sato/');
});
document.getElementById("line-icon-desktop").addEventListener("click", function() {
  redirectUrl('https://line.me/R/ti/p/@384ztggt?oat_content=url&ts=08192005');
});
document.getElementById("tel-icon-desktop").addEventListener("click", function() {
  redirectUrl('./reservation.html#tel-no');
  
});
document.getElementById("line-icon").addEventListener("click", function() {
  redirectUrl('https://www.instagram.com/sekkotsuin_sato/');
});
document.getElementById("instagram").addEventListener("click", function() {
  redirectUrl('https://line.me/R/ti/p/@384ztggtto?igsh=MXZ5NmV4ZDhsc2RpbA==');
});
document.getElementById("tel-icon").addEventListener("click", function() {
  redirectUrl('tel:0312345678');
  
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
            yoyaku_button_menu.style.bottom = 20 * i + "px";
            await sleep(10); // 50msずつ待つ
        }

    } else {
        // 上から下へアニメーション（10 → 0）
        for (let i = 10; i >= 0; i--) {
            yoyaku_button_menu.style.bottom = 20 * i + "px";
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
