var fruit;
var quantity;
var numPerBox;
var result;

fruit = prompt("무슨 과일인가요?");
quantity = prompt("과일이 총 몇 개 있나요?");
numPerBox = prompt("한 박스당 과일을 몇 개 담을까요?");
result = Math.floor(quantity / numPerBox);
remain = quantity % numPerBox;

document.write("과일은 총 " + result + "박스가 나오고, " + remain + "개가 남았습니다.");