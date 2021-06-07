let heading = document.querySelector('#heading');

heading.onclick = function() {
    heading.style.color = "red";

    // alert("hello!");

    // var reply = confirm("저장할까요?");
    // console.log(reply);

    var name = prompt("이름을 입력하세요.", "홍길동");
    console.log(name);

    document.write("<h1>" + name + "님 ㅎㅇ합니다.</h1>");
}