function scrollToTarget() {
  var x = document.getElementById('scrollTarget');
  x.scrollIntoView({ behavior: 'smooth' });
}



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
        // document.querySelector('.number-selector input').addEventListener('click', toggleOptions);

        // Close the options if clicking outside the number selector
        // document.addEventListener('click', function (event) {
        //     if (!event.target.closest('.number-selector')) {
        //         options.style.display = 'none';
        //     }
        // });