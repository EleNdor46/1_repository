const list_1 = document.getElementById('firstContent')
const list_2 = document.getElementById('secondContent')
const list_3 = document.getElementById('thirdContent')
const list_4 = document.getElementById('fourthContent')
const creater = document.getElementById('creater')
const checkerTime = document.getElementById('time') 
const checkerImportance = document.getElementById('importance')
const note = document.getElementById('inputText')

creater.onclick = function(){
    note.value = ''
    console.log(checkerTime.checked)
    checkerTime.checked  = true
    return  checkerImportance.checked = true
}
console.log(checkerImportance.checked)