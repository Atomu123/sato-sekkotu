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
      redirectUrl('https://line.me/R/ti/p/@384ztggt?oat_content=url&ts=08192005');

});
document.getElementById("instagram").addEventListener("click", function() {
  redirectUrl('https://www.instagram.com/sekkotsuin_sato/');
});
document.getElementById("tel-icon").addEventListener("click", function() {
      redirectUrl('tel:0172785010');
  
});
// document.getElementById("tel-icon").remove();

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


const images = [
  "image/center-image.jpg",
  "image/center-image2.jpg",
  "image/Medical.jpg",

];

let currentIndex = 0;
const slide = document.getElementById("slide");
const indicators = document.getElementById("indicators");

// 初期スタイル
slide.style.opacity = 0;
slide.style.transition = "opacity 1s ease";
slide.style.width = "100%";

// インジケーター生成
function createIndicators() {
  indicators.innerHTML = "";
  images.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.textContent = i === currentIndex ? "●" : "〇";
    dot.style.margin = "0 10px";
    
    indicators.appendChild(dot);
  });
}

// スライド表示＋インジケーター更新
function showSlide(index) {
  slide.style.opacity = 0;

  setTimeout(() => {
    slide.src = images[index];
    slide.style.opacity = 0.8;
    createIndicators();
  }, 1000);
}

// 自動再生
function startSlideshow() {
  showSlide(currentIndex);

  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
  }, 4000);
}

startSlideshow();
