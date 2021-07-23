function display(e) {
  console.log('클래스추가');
  let clickTarget = e;
  // console.log(clickTarget)
  let btnClass = clickTarget.getElementsByClassName('bf_btn')
  let inputClass = clickTarget.getElementsByClassName('trans')
  let lineClass = clickTarget.getElementsByClassName('line')
  // console.log(inputClass)
  btnClass[0].className += ' bf_text'
  inputClass[0].className += ' powertag'
  lineClass[0].className += ' c-line'
  clickTarget.getElementsByClassName('trans')[0].focus()
  // console.log(clickTarget.getElementsByTagName('input'))

}

function recovery() { 
 console.log('외부클릭');
  let btnClass = document.getElementsByClassName('bf_btn')
  let inputClass = document.getElementsByClassName('trans')
  let lineClass = document.getElementsByClassName('line')
  for (let i = 0; i < btnClass.length; i++) {
    btnClass[i].className = 'bf_btn'
    inputClass[i].className = 'trans'
    lineClass[i].className = 'line'
  }
}
document.getElementsByTagName('body')[0].addEventListener('click',recovery,true);