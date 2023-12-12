// Tạo một ứng dụng web, cho phép nhập vào 2 số a và b (a<b). Hiển thị tổng các số nguyên tố trong khoảng a và b. Tạo giao diện nhập 2 số và in kết quả trên giao diện web

let primeList = []
function check(number) {
    if (number < 2) {
        return false;
    }
    for (let i=2; i < number; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}

function listed(a, b) {
    for (let i = a; i <= b; i++) {
        if (check(i)) {
            primeList.push(i);
        }
    }
}

function checkPrime(){
    let a = Number(document.getElementById('input1').value);
    let b = Number(document.getElementById('input2').value);
    // Kiểm tra điều kiện a < b
    if (a >= b) {
        alert('Vui lòng nhập a < b');
        return;
    }
    // Nếu a >=b:
    let result = listed(a,b)
    let total = 0
    for (let i = a; i <= b; i++) {
        if (check(i)) {
            total += i
        }
    }

    document.getElementById('result').innerText = 'Kết quả: ' + primeList.join('+ ') + '=' +  total;
}