function showFullScreenButton() {
    let intervalId = setInterval(() => {
        try {
            let button = document.createElement("div");
            button.className = "FfiOZe";
            button.innerHTML = `
                        <div class="uD3s5c">
                            <div class="VfPpkd-xl07Ob-XxIAqe-OWXEXe-oYxtQd" data-disable-idom="true" data-is-menu-dynamic="true">
                                <div>
                                    <span data-is-tooltip-wrapper="true">
                                        <button id="fullScreenButton" class="VfPpkd-Bz112c-LgbsSe yHy1rc eT1oJ tWDL4c uaILN" data-disable-idom="true" aria-label="Present now" data-tooltip-enabled="true" data-tooltip-id="tt-c19" data-tooltip-x-position="3" data-tooltip-y-position="2" role="button" aria-expanded="false" aria-haspopup="menu" style="--mdc-ripple-fg-size:24px; --mdc-ripple-fg-scale:1.66667; --mdc-ripple-left:8px; --mdc-ripple-top:8px;">
                                            <div class="VfPpkd-Bz112c-J1Ukfc-LhBDec"></div>
                                            <i class="google-material-icons" aria-hidden="true">fullscreen</i>
                                        </button>
                                        <div class="EY8ABd-OWXEXe-TAWMXe" role="tooltip" aria-hidden="true" id="tt-c20">Present now</div>
                                    </span>
                                </div>
                            </div>
                        </div>  
                    `;
            let container = document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div")
            button.getElementsByTagName("button")[0].addEventListener("click", showFullScreen);
            container.appendChild(button);
            clearInterval(intervalId)
        } catch (e) {
            // Ignore
        }
    }, 1000)

}

function showFullScreen(){
    function requestFullScreen(element) {
        try {
            let requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

            if (requestMethod) {
                requestMethod.call(element);
            } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
                let wScript = new ActiveXObject("WScript.Shell");
                if (wScript !== null) {
                    wScript.SendKeys("{F11}");
                }
            }
        } catch (e) {
            // Ignore
        }
    }
    requestFullScreen(document.getElementsByTagName("video")[0])
}

showFullScreenButton();
