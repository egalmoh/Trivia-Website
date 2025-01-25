// ADD: Add code to check answers to questions
document.addEventListener('DOMContentLoaded', function() {

    // Buttons

    // multiple choice questions 1
    document.querySelectorAll('.mc-button').forEach(function(button) {
        button.addEventListener('click', function(e) {
            // Prevent form submission
            e.preventDefault();


            // Creating icon tag
            let icon = document.createElement('i');
            icon.className = 'fas fa-exclamation-circle';

            let div_ = document.querySelector('#div_');

            // Checking if the button-text is valid
            if (button.textContent == '8.2 billion human beings') {

                // Changing other buttons color to default if they are not
                document.querySelector('#b1').style.backgroundColor = '#d9edff';
                document.querySelector('#b2').style.backgroundColor = '#d9edff';
                document.querySelector('#b3').style.backgroundColor = '#d9edff';
                document.querySelector('#b4').style.backgroundColor = '#d9edff';

                div_.style.color = 'green';

                document.querySelector('#correct').style.backgroundColor = '#94f394';

                div_.innerHTML = 'Correct.';
            } else {

                // When one button is clicked it changes color and the others change to their default
                if (button.id === 'b1') {
                    document.querySelector('#b2').style.backgroundColor = '#d9edff';
                    document.querySelector('#b3').style.backgroundColor = '#d9edff';
                    document.querySelector('#b4').style.backgroundColor = '#d9edff';
                    document.querySelector('#b1').style.backgroundColor = '#ffb6b6';
                } else if (button.id === 'b2') {
                    document.querySelector('#b4').style.backgroundColor = '#d9edff';
                    document.querySelector('#b3').style.backgroundColor = '#d9edff';
                    document.querySelector('#b1').style.backgroundColor = '#d9edff';
                    document.querySelector('#b2').style.backgroundColor = '#ffb6b6';
                } else if (button.id === 'b3') {
                    document.querySelector('#b4').style.backgroundColor = '#d9edff';
                    document.querySelector('#b1').style.backgroundColor = '#d9edff';
                    document.querySelector('#b2').style.backgroundColor = '#d9edff';
                    document.querySelector('#b3').style.backgroundColor = '#ffb6b6';
                } else if (button.id === 'b4') {
                    document.querySelector('#b1').style.backgroundColor = '#d9edff';
                    document.querySelector('#b2').style.backgroundColor = '#d9edff';
                    document.querySelector('#b3').style.backgroundColor = '#d9edff';
                    document.querySelector('#b4').style.backgroundColor = '#ffb6b6';
                }
                document.querySelector('#correct').style.backgroundColor = '#d9edff';
                div_.innerHTML = '';
                div_.appendChild(icon);
                div_.style.color = 'red';
                div_.append(' Incorrect.');
            }
        });
    });

    // multiple choice questions 2
    document.querySelectorAll('.mc-b').forEach(function(button) {
        button.addEventListener('click', function(ev) {

            // Creating icon tag
            let icon = document.createElement('i');
            icon.className = 'fas fa-exclamation-circle';

            let div_1 = document.querySelector('#div_1');

            // Checking if the button-text is valid
            if (button.textContent == 'Aden Adde') {

                // Changing other buttons color to default if they are not
                document.querySelector('#bb1').style.backgroundColor = '#d9edff';
                document.querySelector('#bb2').style.backgroundColor = '#d9edff';
                document.querySelector('#bb3').style.backgroundColor = '#d9edff';
                document.querySelector('#bb4').style.backgroundColor = '#d9edff';
                div_1.style.color = 'green';
                document.querySelector('#correct1').style.backgroundColor = '#94f394';
                div_1.innerHTML = 'Correct.';
            } else {

                // When one button is clicked it changes color and the others change to their default
                if (button.id === 'bb1') {
                    document.querySelector('#bb2').style.backgroundColor = '#d9edff';
                    document.querySelector('#bb3').style.backgroundColor = '#d9edff';
                    document.querySelector('#bb4').style.backgroundColor = '#d9edff';
                    document.querySelector('#bb1').style.backgroundColor = '#ffb6b6';
                } else if (button.id === 'bb2') {
                    document.querySelector('#bb4').style.backgroundColor = '#d9edff';
                    document.querySelector('#bb3').style.backgroundColor = '#d9edff';
                    document.querySelector('#bb1').style.backgroundColor = '#d9edff';
                    document.querySelector('#bb2').style.backgroundColor = '#ffb6b6';
                } else if (button.id === 'bb3') {
                    document.querySelector('#bb4').style.backgroundColor = '#d9edff';
                    document.querySelector('#bb1').style.backgroundColor = '#d9edff';
                    document.querySelector('#bb2').style.backgroundColor = '#d9edff';
                    document.querySelector('#bb3').style.backgroundColor = '#ffb6b6';
                } else if (button.id === 'bb4') {
                    document.querySelector('#bb1').style.backgroundColor = '#d9edff';
                    document.querySelector('#bb2').style.backgroundColor = '#d9edff';
                    document.querySelector('#bb3').style.backgroundColor = '#d9edff';
                    document.querySelector('#bb4').style.backgroundColor = '#ffb6b6';
                }
                document.querySelector('#correct1').style.backgroundColor = '#d9edff';

                div_1.innerHTML = '';
                div_1.appendChild(icon);
                div_1.style.color = 'red';
                div_1.append(' Incorrect.');
            }
        });
    });

    // Free response question 0
    document.querySelector('#form').addEventListener('submit', function(event) {
        // Prevent form submission
        event.preventDefault();
        let s = document.querySelector('#cell').value;

        // Creating icon tag
        let icon = document.createElement('i');
        icon.className = 'fas fa-exclamation-circle';

        let div = document.querySelector('#div');

        // Checking if the answer is correct
        if (s != 'Switzerland') {
            div.innerHTML = '';
            div.style.color = 'red';
            div.appendChild(icon);
            div.append(' Incorrect.');
            document.querySelector('#cell').style.backgroundColor = '#ffb6b6';
        } else {
            div.innerHTML = '';
            div.style.color = 'green';
            div.innerHTML = 'Correct.';
            document.querySelector('#cell').style.backgroundColor = '#94f394';
        }
    });

    // Free response question 1
    document.querySelector('#form1').addEventListener('submit', function(event) {
        // Prevent form submission
        event.preventDefault();
        let s = document.querySelector('#cell1').value;

        // Creating icon tag
        let icon = document.createElement('i');
        icon.className = 'fas fa-exclamation-circle';

        let div = document.querySelector('#div1');

        // Checking if the answer is correct
        if (s != 'Russia') {
            div.innerHTML = '';
            div.style.color = 'red';
            div.appendChild(icon);
            div.append(' Incorrect.');
            document.querySelector('#cell1').style.backgroundColor = '#ffb6b6';
        } else {
            div.innerHTML = '';
            div.style.color = 'green';
            div.innerHTML = 'Correct.';
            document.querySelector('#cell1').style.backgroundColor = '#94f394';
        }
    });

    // Free response question 2
    document.querySelector('#form2').addEventListener('submit', function(event) {
        // Prevent form submission
        event.preventDefault();
        let s = document.querySelector('#cell2').value;

        // Creating icon tag
        let icon = document.createElement('i');
        icon.className = 'fas fa-exclamation-circle';

        let div = document.querySelector('#div2');

        // Checking if the answer is correct
        if (s != '5 times a day') {
            div.innerHTML = '';
            div.style.color = 'red';
            div.appendChild(icon);
            div.append(' Incorrect.');
            document.querySelector('#cell2').style.backgroundColor = '#ffb6b6';
        } else {
            div.innerHTML = '';
            div.style.color = 'green';
            div.innerHTML = 'Correct.';
            document.querySelector('#cell2').style.backgroundColor = '#94f394';
        }
    });

    // Free response question 3
    document.querySelector('#form3').addEventListener('submit', function(event) {
        // Prevent form submission
        event.preventDefault();
        let s = document.querySelector('#cell3').value;

        // Creating icon tag
        let icon = document.createElement('i');
        icon.className = 'fas fa-exclamation-circle';

        let div = document.querySelector('#div3');

        // Checking if the answer is correct
        if (s != '1453') {
            div.innerHTML = '';
            div.style.color = 'red';
            div.appendChild(icon);
            div.append(' Incorrect.');
            document.querySelector('#cell3').style.backgroundColor = '#ffb6b6';
        } else {
            div.innerHTML = '';
            div.style.color = 'green';
            div.innerHTML = 'Correct.';
            document.querySelector('#cell3').style.backgroundColor = '#94f394';
        }
    });

    // Free response question 4
    document.querySelector('#form4').addEventListener('submit', function(event) {
        // Prevent form submission
        event.preventDefault();
        let s = document.querySelector('#cell4').value;

        // Creating icon tag
        let icon = document.createElement('i');
        icon.className = 'fas fa-exclamation-circle';

        let div = document.querySelector('#div4');

        // Checking if the answer is correct
        if (s != 'Mehmed II') {
            div.innerHTML = '';
            div.style.color = 'red';
            div.appendChild(icon);
            div.append(' Incorrect.');
            document.querySelector('#cell4').style.backgroundColor = '#ffb6b6';
        } else {
            div.innerHTML = '';
            div.style.color = 'green';
            div.innerHTML = 'Correct.';
            document.querySelector('#cell4').style.backgroundColor = '#94f394';
        }
    });
});
