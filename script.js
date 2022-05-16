function test() {
    let num = 10;

        return function (){
        if (num >= 0) {
            alert(num);
        } else {
            alert('отсчет окончен');
        };
        num--;
    };
};

let func = test();
func();
func();
func();
func();
func();
func();
func();
func();
func();
func();
func();
func();
func();
func();