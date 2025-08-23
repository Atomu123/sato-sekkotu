let activate_flg = false;

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