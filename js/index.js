function math(val){
  document.getElementById("myText").value+=val;
}
function e(){
  try{
    c(eval(document.getElementById("myText").value));
  }catch(e){
    c('Unexpected Operation')
  }
}
function c(val){
  document.getElementById("myText").value=val;
}
function back() {
    var value = document.getElementById("myText").value;
    document.getElementById("myText").value = value.substr(0, value.length - 1);
}