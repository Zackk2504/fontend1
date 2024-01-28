function scrollToTarget() {
  var x = document.getElementById('scrollTarget');
  x.scrollIntoView({ behavior: 'smooth' });
}

function doiND() {
  fetch('lienhe.html')
    .then(response => response.text())
    .then(data => {
      // Thay thế nội dung của div bằng nội dung mới
      document.getElementById('noidung').innerHTML = data;
    })
    .catch(error => console.error(error));

}

document.getElementById('changeContentLink').addEventListener('click', doiND);

function doiND1() {
  fetch('gioithieu.html')
    .then(response => response.text())
    .then(data => {
      // Thay thế nội dung của div bằng nội dung mới
      document.getElementById('noidung').innerHTML = data;
      scrollToTarget();
    })
    .catch(error => console.error(error));

}

// document.getElementById('noidung1').addEventListener('click',doiND1);

document.addEventListener('DOMContentLoaded', function () {
  // Đặt sự kiện lắng nghe cho các hoạt động sau khi DOM đã sẵn sàng
  document.getElementById('noidung1').addEventListener('click', doiND1);
});

function doiND2() {
  fetch('gioithieu.html')
    .then(response => response.text())
    .then(data => {
      // Thay thế nội dung của div bằng nội dung mới
      document.getElementById('noidung').innerHTML = data;

    })
    .catch(error => console.error(error));

}
document.getElementById('noidung2').addEventListener('click', doiND2);

function doiND3() {
  fetch('datphong.html')
    .then(response => response.text())
    .then(data => {
      // Thay thế nội dung của div bằng nội dung mới
      document.getElementById('noidung').innerHTML = data;

    })
    .catch(error => console.error(error));

}
document.getElementById('noidung3').addEventListener('click', doiND3);

var options = document.querySelector('.options');

        function toggleOptions() {
            options.style.display = options.style.display === 'none' ? 'block' : 'none';
        }

        function increment() {
            var input = document.querySelector('.number-selector input');
            var value = parseInt(input.value, 10) || 0;
            value += 1;
            input.value = value;
        }

        function decrement() {
            var input = document.querySelector('.number-selector input');
            var value = parseInt(input.value, 10) || 0;
            if (value > 0) {
                value -= 1;
                input.value = value;
            }
        }

        // Add event listener to the input for toggling the options
        document.querySelector('.number-selector input').addEventListener('click', toggleOptions);

        // Close the options if clicking outside the number selector
        document.addEventListener('click', function (event) {
            if (!event.target.closest('.number-selector')) {
                options.style.display = 'none';
            }
        });