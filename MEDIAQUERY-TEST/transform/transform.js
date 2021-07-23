function focusOn(e) {
    console.log('포커스추가 및 클래스추가')
    let clickTarget = e;
    let block = clickTarget.getElementsByClassName('hidden')
    let hoverTitle = clickTarget.getElementsByClassName('title')
    hoverTitle[0].className += ' title-hover'
    block[0].focus()
}

function focusOff() {
    console.log('focus아웃')
    //let unBlock = document.getElementsByClassName('hidden')
    let unHoverTitle = document.getElementsByClassName('title') 
    // console.log(unBlock[0].className)
    for (let i=0; i < unHoverTitle.length; i++) {
        //unBlock[i].className = 'hidden'
        unHoverTitle[i].className = 'title' 

    }
}