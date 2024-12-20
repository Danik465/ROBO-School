const phoneInput = document.getElementById('discount__form-input-tel');

        phoneInput.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\D/g, '');
            let formattedValue = '';

            if (value.length > 0) {
                formattedValue += '+7 ';
            }
            if (value.length > 1) {
                 formattedValue += '(' + value.substring(1, 4)
            }

            if (value.length > 4) {
                formattedValue += ') ' + value.substring(4, 7)
            }

            if (value.length > 7) {
                formattedValue += '-' + value.substring(7, 9)
            }
             if (value.length > 9) {
                formattedValue += '-' + value.substring(9, 11)
            }

            phoneInput.value = formattedValue;
        });

        phoneInput.addEventListener('focus', function(){
             if(this.value == ''){
                this.value = '+7 ';
            }
        })

        phoneInput.addEventListener('blur', function(){
            if(this.value == '+7 '){
                 this.value = ''
            }
        })