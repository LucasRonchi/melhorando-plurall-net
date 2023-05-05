(() => {
    function quebra_de_linha() {
        console.log('linha')
        try {
            document.querySelectorAll('.Answer_feedback__VV2bM').forEach(element => {
                element.classList.add('pre')
            })

            clearInterval(loopQuebra)
        } catch {
            contQuebra++
            console.log('error in quebra -', contQuebra)
        } finally {
            if (contQuebra == 10) {
                clearInterval(loopQuebra)
            }
        }
    }

    let contQuebra = 0
    let loopQuebra = setInterval(quebra_de_linha, 1000);
})()