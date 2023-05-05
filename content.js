(() => {
    function create_button() {
        try {
            document.querySelectorAll('li.option').forEach((element, index) => {
                console.log(index)
                element.lastChild.addEventListener('contextmenu', (e)=>{
                    e.preventDefault()
                    element.classList.toggle('riscar-texto')
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


    function style_video() {
        try {
            const container = document.querySelector('.Answer_resolution-video__2ycmK')
            container.classList.add('container-video-responsive')
            container.firstChild.classList.add('iframe-video-responsive')

            clearInterval(loopVideo)
        } catch {
            contVideo++
            console.log('error in video -', contVideo)
        } finally {
            if (contVideo == 10) {
                clearInterval(loopVideo)
            }
        }
    }


    let contVideo = 0
    let loopVideo = setInterval(style_video, 1000);

})()