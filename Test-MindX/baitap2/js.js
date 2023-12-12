// Vẽ hỉnh * theo yêu cầu
// function numberOneTriangle(){
//     let a = Number(document.getElementById('input1').value);
//     for (let i = 0; i <= a; i++) {
//         let stars = '';
//         for (let j = 0; j < i; j++) {
//             stars += '*';
//         }
//     }

// }
// document.getElementById('result').innerText = numberOneTriangle();

function numberOneTriangle(){
    let a = Number(document.getElementById('input1').value);
    // Kiểm tra điều kiện a
    if (a > 10) {
        alert('Vui lòng nhập từ khoảng 1-10');
        return;
    }
    let result = document.getElementById('result');
    // Xóa nội dung cũ của đoạn kết quả
    result.innerHTML = '';

    for (let i = 0; i <= a; i++) {
        let stars = '';
        for (let j = 0; j < i; j++) {
            stars += '*';
        }
        
        // Thêm nội dung mới vào đoạn kết quả
        result.innerHTML += stars + '<br>';
    }
}