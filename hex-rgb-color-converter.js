// Question 3: Write a function that converts HEX to RGB.
// Then Make that function auto-dect the formats so that if you enter HEX color
// format it returns RGB and if you enter RGB color format it returns HEX.

function convertColorFormat(str) {
    // Regular Expressions for HEX and RGB strings
    const hexRe = new RegExp('^#?([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$');
    const rgbRe = new RegExp('^rgb\\((25[0-5]|2[0-4][0-9]|1[0-9]?[0-9]?|[1-9][0-9]?|[0-9]), ?(25[0-5]|2[0-4][0-9]|1[0-9]?[0-9]?|[1-9][0-9]?|[0-9]), ?(25[0-5]|2[0-4][0-9]|1[0-9]?[0-9]?|[1-9][0-9]?|[0-9])\\)$');

    // Check string against HEX and RGB Regular Expressions
    let hexVals = str.match(hexRe);
    let rgbVals = str.match(rgbRe);
    
    // Define functions for conversions
    function hexToRgb(hexVals) {
        // Inputs hex re output and returns rgb string
        const hexGroups = hexVals.slice(1, 4); // color groups from re output
        let rgbArr = [];

        // Convert each color one at a time
        for (let color of hexGroups) {
            rgbArr.push(parseInt(color, 16));
        }
        
        return `RGB(${rgbArr.join(', ')})`;
    }

    function rgbToHex(rgbVals) {
        // Inputs rgb re output and returns hex string
        const rgbGroups = rgbVals.slice(1, 4); // color groups from re output
        let hexArr = [];

        // Convert each color one at a time
        for (let color of rgbGroups) {
            let hexColor = parseInt(color).toString(16);
            // if only one digit add a 0
            if (hexColor.length === 1) {
                hexColor = '0' + hexColor;
            }
            hexArr.push(hexColor);
        }
        
        return `#${hexArr.join('')}`;
    }

    if (hexVals !== null) {
        return hexToRgb(hexVals);
    } 
    if (rgbVals !== null) {
        return rgbToHex(rgbVals);
    }
    // else no match so return error
    return 'Enter a valid HEX or RGB color string'
}

// test
console.log(convertColorFormat('rgb(255, 77, 196)'));
console.log(convertColorFormat('#ff4dc4'));
