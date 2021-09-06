window.addEventListener('load', () => {
    fetch("https://api.countapi.xyz/update/ijuldev/01c71340-905b-44e0-bbc8-9d4839c8b688/?amount=1").then(res => res.json()).then(res => { console.log(res.value) });
})

const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    let mmrAwal = parseInt(document.getElementById('mmrAwal').value)
    let mmrTarget = parseInt(document.getElementById('mmrTarget').value)
    const hasil = document.querySelector('.result')

    let sisaMmr = mmrTarget - mmrAwal
    let result

    if (mmrAwal > mmrTarget) {
        alert('Jangan diturunin dong MMR nya :(')
        location.reload()
    }
    document.querySelector('.mmr-target').textContent = mmrTarget

    if (mmrAwal < 2000) {
        if(mmrTarget >= 3500) {
            var total1 = (mmrTarget - 3499) / 1
            let krg = mmrTarget - 3499
            mmrTarget -= krg
            if(mmrTarget >= 2000 && mmrTarget < 3500) {
                var total2 = (mmrTarget - 1999) / 14
                krg = mmrTarget - 1999
                mmrTarget -= krg
                if(mmrTarget < 2000) {
                    sisaMmr = mmrTarget - mmrAwal
                }
            }
            result = total1 + total2 + (sisaMmr / 25)
        } else if (mmrTarget >= 2000 && mmrTarget < 3500) {
            var total1 = (mmrTarget - 1999) / 14
            let krg = mmrTarget - 1999
            mmrTarget -= krg
            if(mmrTarget < 2000) {
                sisaMmr = mmrTarget - mmrAwal
            }
            result = total1 + (sisaMmr / 25)
        } else {
            result = sisaMmr / 25
        }
    } else if (mmrAwal >= 2000 && mmrAwal < 3500) {
        if(mmrTarget >= 3500) {
            var total1 = (mmrTarget - 3499) / 1
            let krg = mmrTarget - 3499
            mmrTarget -= krg
            if(mmrTarget >= 2000 && mmrTarget < 3500) {
                sisaMmr = mmrTarget - mmrAwal
            }
            result = total1 + (sisaMmr / 14)
        } else {
            result = sisaMmr / 14
        }
    } else if (mmrAwal >= 3500) {
        result = sisaMmr / 1
    }
    
    hasil.textContent = Math.ceil(result)
    
})
