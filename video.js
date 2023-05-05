(() => {
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