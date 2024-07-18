const arr = ['celsius', 'fahrenheit', 'kelvin'];
        const arrEl = new Array();

        function calcTemp(type, value){
            let resultC, resultF, resultK;
            switch(type){
                case 'celsius':
                    resultC = value;
                    resultF = (resultC * 9/5) + 32;
                    resultK = resultC + 273.15;
                    break;
                case 'fahrenheit':
                    resultF = value;
                    resultC = (resultF - 32) * 5/9;
                    resultK = (resultF - 32) * 5/9 + 273.15;
                    break;
                case 'kelvin':
                    resultK = value;
                    resultC = resultK - 273.15;
                    resultF = (resultK - 273.15) * 9/5 + 32;
                    break;
            }
            let results = [resultC, resultF, resultK];
            arrEl.forEach( (el, idx) => el.value = results[idx].toFixed(2));
        }
        
        arr.forEach( element => {
            let temp = document.getElementById(element);
            arrEl.push(temp);
            temp.addEventListener('change', e => {
                calcTemp(e.target.name, +e.target.value);
            });
        });
        