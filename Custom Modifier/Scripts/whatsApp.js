
let bannerDeleted = false;
async function deleteElement() {
    let banner = document.querySelector("#side > span > div > div");
    if (banner) {
        banner = document.querySelector("#side > span > div")
        if ("Get notified of new messages" === document.querySelector("#side > span > div > div > div._1Yy79 > div._2z7gr").textContent)
            banner.remove();
        bannerDeleted = true;

    }
    if (!bannerDeleted)
        setTimeout(deleteElement, 600);
    else
        setTimeout(deleteElement, 3000)

}


let widthIncreased;
async function increaseWidth(){

    // let styleTag = document.querySelector ("head > link:nth-child(15)");
    // let sheet = styleTag.sheet ? styleTag.sheet : styleTag.styleSheet;
    //
    // if (sheet.cssRules) { // all browsers, except IE before version 9
    //     for (let i=0; i<sheet.cssRules.length; i++) {
    //         if (sheet.cssRules[i].selectorText === '.app-wrapper-web ._1XkO3') {
    //             //console.log(sheet.cssRules[i]);
    //             sheet.deleteRule (i);
    //         }
    //     }
    // }

    let container = document.querySelector("#app > div._1ADa8._3Nsgw.app-wrapper-web.os-win > div._1XkO3.two");
    if (container) {
        container.style["width"] = "100%";
        widthIncreased = true;
    }
    if (!widthIncreased)
        setTimeout(increaseWidth, 600);
}
increaseWidth()
deleteElement()
