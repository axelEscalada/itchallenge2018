function isBalanced(input){
    var a = 0;
    var b = 0;
    var c = 0;
    var d = 0;

    input.forEach(function(element){
        switch(element){
            case "a":
                a++;
                break;
            case "b":
                b++;
                break;
            case "c":
                c++;
                break;
            case "d":
                d++;
                break;
            default:
                return false;
        }
    })

    var sumAC = a + c;
    var sumBD = b + d;

    var isEvenAC = sumAC % 2;
    var isEvenBD = sumBD % 2;
}