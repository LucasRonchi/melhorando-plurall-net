(() => {
    function create_button() {
        console.log('asd')
        try {
            document.querySelectorAll('li.option').forEach((element, index) => {
                element.addEventListener('contextmenu', (e)=>{
                    e.preventDefault()
                    element.classList.toggle('riscar-texto')
                    element.classList.toggle('bg-gray')
                    element.classList.toggle('border-round')
                    element.lastChild.classList.toggle('opacity-texto')
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