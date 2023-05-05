(() => {
    function create_button() {
        try {
            document.querySelector('body').addEventListener('contextmenu', (e) => {
                document.querySelectorAll('li.option').forEach(option => {
                    if ( option.contains(e.target) ) {
                        option.classList.toggle('riscar-texto')
                        option.classList.toggle('bg-gray')
                        option.classList.toggle('border-round')
                        option.lastChild.classList.toggle('opacity-texto')
                        e.preventDefault()
                    }
                })
            })

            clearInterval(loopBtn)
        } catch {
            contBtn++
            console.log('error in btn -', contBtn)
        } finally {
            if (contBtn == 10) {
                clearInterval(loopBtn)
            }
        }
    }

    let contBtn = 0
    let loopBtn = setInterval(create_button, 1000);
})()