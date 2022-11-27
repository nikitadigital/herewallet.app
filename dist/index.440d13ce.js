const page = document.getElementsByClassName("page-background")[0];
const header = document.getElementsByClassName("header")[0];
const news = document.getElementsByClassName("news")[0];
const updateScroll = ()=>{
    let pad = window.innerWidth < 1600 ? 44 : 88;
    pad = window.innerWidth < 1200 ? 12 : pad;
    let tophold = window.innerWidth < 800 ? 260 : 620;
    let scroll = Math.max(0, this.scrollY - tophold) * 0.005;
    let offset = Math.max(pad * (1 - scroll), 0);
    page.style.left = offset + "px";
    page.style.right = offset + "px";
    header.classList.toggle("active", this.scrollY > 0);
    const { y: newsY , height: newsHeight  } = news.getBoundingClientRect();
    console.log(newsY, newsHeight, 1 - (newsY - 100) / (newsHeight + 100));
    let opacity = 1 - (newsY - 100) / newsHeight;
    opacity = opacity > 1 ? 2 - opacity : opacity;
    news.style.backgroundColor = `rgba(175, 115, 230, ${opacity})`;
};
document.addEventListener("scroll", updateScroll);
updateScroll();
Array.from(document.querySelectorAll(".ask-block")).forEach((el)=>{
    el.addEventListener("click", ()=>{
        const { height  } = el.querySelector(".ask-block-body").getBoundingClientRect();
        el.classList.toggle("open");
        el.style.height = el.classList.contains("open") ? `${91 + height}px` : "91px";
    });
});
const btn = document.querySelector(".header-action");
const headerBody = document.querySelector(".header-body");
let isOpen = false;
btn.addEventListener("click", ()=>{
    btn.classList.toggle("open");
    headerBody.style.height = `${window.innerHeight - 72}px`;
    headerBody.classList.toggle("open");
    isOpen = !isOpen;
    document.body.style.overflow = isOpen ? "hidden" : "";
});

//# sourceMappingURL=index.440d13ce.js.map
