let colorVar=prompt('choose a color:');

function checkColor(color){
    switch(color.toUpperCase()){
        case 'YELLOW':
        case 'PINK':
        case 'ORANGE':
            return 'light color';
        break;
        case 'BLUE':
        case 'PURPLE':
        case 'BROWN':
            return 'dark color';
        break;
        default:
            return 'Unknown color';
    }
}
 console.log(checkColor(colorVar));