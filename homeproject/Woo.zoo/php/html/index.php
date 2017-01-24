<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" href="http://fonts.googleapis.com/earlyaccess/nanumgothic.css" type="text/css">
  <link rel="stylesheet" href="/css/style.css">
  <link rel="stylesheet" media="mediatype and|not|only(media feature)"href="css/mobile_index.css">
  <link rel="stylesheet" href="/css/mobile_index.css">
  <title>Document</title>
</head>
<body>
  <header>
    <ul>
      <li>
        <a target="_blank" href="join.html">join</a>
      </li>
      <li>
        <a target="_blank" href="https://github.com/wooyeonhui">github</a>
      </li>
      <li>
        <a target="_blank" href="https://www.instagram.com/woo_yeon_hui/">instagram</a>
      </li>
      <li>
        <a target="_blank" href="#none">kakao</a>
      </li>
    </ul>
  </header>
  <!-- target nav -->
    <nav >
      <a href="#none" class="menu">Main Menu</a>
      <ul>
         <?php
         $content = file_get_contents('pages/nav_list.txt');
           echo $content;
         ?>
      </ul>
    </nav>

      <article>
         <?php
           if( empty($_GET['id']) == false){
             echo file_get_contents($_GET['id'].".txt");
           }
         ?>
      </article>
      <div class="endpage">
        이 홈페이지는 HTML,CSS,Javascript,Php를 사용했습니다.
      </div>
      <footer>
        <div><span>ⓒ 2017 Accidently Woo I ALL rights reserved</span>
          <br/><span>Powered by KMC & BHS</span>
        </div>
      </footer>
      <!-- 바디 전체 구상(feat. http://cms.woo-zoo.webnode.kr/)
          - 오른쪽 상단 네비 픽스드 애니메이션
          1. 첫화면 전체 와타시큰사진 + 이름(간단한 닉네임)
          2. ABOOT ME

    section-logo에 a 태그넣기
     -->


</body>
</html>
