<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

//전체 동의 하기
function goAllAgree(){
if(document.getElementById("allCheck").checked)
{
document.getElementById("agree1").checked=true;
document.getElementById("agree2").checked=true;
document.getElementById("agree3").checked=true;
document.getElementById("agree4").checked=true;
}
else{
document.getElementById("agree1").checked=false;
document.getElementById("agree2").checked=false;
document.getElementById("agree3").checked=false;
document.getElementById("agree4").checked=false;
}}
//jquery 로
$(document).ready(function()

$("#allCheck").click(function(){
if($("#allCheck").is(":checked"))
{
   $(".checkagree").prop("checked",true)

}else{
    $(".checkagree").prop("checked",false)

}
})
})
function goSend1()
{
//var frm = document.myform;
var frm = document.forms[0];
if( document.myform.hpYn.value==1)
{
  if( frm.phone.value.length<11)
  {
   alert("휴대폰 번호를 입력하세요");
   frm.phone.focus();
   return false;
  }
  //전화번호 입력형식이 맞는지 체크한다
if (isPhoneValid(frm.phone.value)==false)
  {
   alert("전화번호 형식에 맞게 입력하세요");
   frm.phone.focus();
   return false;
  }

  if( frm.name1.value.length<2)
  {
   alert("이름은 2글자 이상으로 입력하세요");
   frm.name1.focus();
   return false;
  }
  alert('성공');
 }
 else
 {
   if(frm.email1.value.length<2)
   {
   alert("이메일을 입력하세요")

frm.email1.focus();
return false;
}
if(frm.email2.value.length<2)
{
alert("도메인을 선택하세요")
frm.email2.focus();
return false;
}


 if( frm.name2.value.length<2)
{
 alert("이름은 2글자 이상으로 입력하세요");
 frm.name2.focus();
 return false;
}
}

if( document.getElementById("agree1").checked==false)
{
alert("이용약관에 동의해 주십시요");
document.getElementById("agree1").focus();
return false;
}
if( document.getElementById("agree2").checked==false)
{
alert("유료서비스에 동의해 주십시요");
document.getElementById("agree2").focus();
return false;
}
if( document.getElementById("agree3").checked==false)
{
alert("개인정보 수빈 및 이용에 동의해 주십시요");
document.getElementById("agree3").focus();
return false;
}
//서버로 전송하기

frm.method="post";
//회원가입-보안을 요하기 때문에 꼭 post로 보내야한다.
frm.action="join2.jsp";
frm.submit(); //서버로 전송하기

}

function goCerti(value)
{
document.myform.hpYn.value=value;
}
