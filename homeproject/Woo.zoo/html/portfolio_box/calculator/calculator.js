//문자 입력하기
function go(input, x){
  if(input.value == null || input.value == "0")
       input.value = x
  else
       input.value += x
}
function delete(input){
  input.value = input.value.substring(0,input.value.length - 1)
}
//substring 조사하기
function mark(input){
  if(input.value.substring(0,1)=="-")
     input.value = input.value.substring(1,input.value.length)
  else {
     input.value = "-" + input.value
  }
}
fuction calc(){

}
