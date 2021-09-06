function welcomeMsg() {
    const welcomeMsgEl = document.querySelector("#welcomeMsg");
    let array = 0;

    const erdwpeig = `<a href="https://www.instagram.com/xrlangga/" target="_blank">xrlangga</a>`;
    const erdwpeWA = `<a href="https://api.whatsapp.com/send?phone=6281392641570" target="_blank">angga</a>`;
    const linkTiktokGua = `<a href="https://www.tiktok.com/@erdwpe" target="_blank">tiktok</a>`

    const msg2 = `<p class="animation mb-0 text-truncate">IG: ${erdwpeig} / WA: ${erdwpeWA}</p>`;
    const msg3 = `<p class="animation mb-0 text-truncate">Takapedia dijamin amanah dan terpercaya</p>`;
    const msg4 = `<p class="animation mb-0 text-truncate">Follow ${linkTiktokGua} gw ya</p>`;

    let arrayEl = [msg2, msg3, msg4];
    let arrayMax = 5;
    setInterval(() => {
        welcomeMsgEl.innerHTML = arrayEl[array];

        array++;
        if (array >= arrayMax) {
            array = 0;
        }
    }, 4000);
}