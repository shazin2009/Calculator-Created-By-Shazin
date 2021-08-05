function buttonclicked(val){
    document.getElementById('screen').value+=val
}
function clr() {
    document.getElementById('screen').value = ''
}
function eql(){
   var text=document.getElementById('screen').value
   var result=eval(text)
   document.getElementById('screen').value=result
}