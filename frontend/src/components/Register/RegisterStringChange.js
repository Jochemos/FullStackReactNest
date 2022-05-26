const RegisterStringChange = (props) => {

    const string = props.string;

    const lastIndex = string.lastIndexOf('"');
    const labelName = string.slice(1, lastIndex);

    let left;
    const right = [];


    let array = labelName.split('');

    for(let i=1; i<array.length; i++){

        if(array[i] === array[i].toUpperCase()){
            for(let g=i; g<array.length; g++){
                right.push(array[g]);
            }
        }
    }


    for(let i=0; i<array.length; i++){

        if(array[i] === array[i].toUpperCase()){
            right.unshift(' ');
            left = array.splice(0,i);
            left[0] = left[0].toUpperCase();
        }

    }

    let firstWord;

    if(left === undefined){
        firstWord =  labelName.replace(labelName[0], labelName[0].toUpperCase());
    }else {
        firstWord =  left.concat(right).join('');
    }

    const otherWords = string.slice(lastIndex+2);

    const allWords = firstWord + ' ' + otherWords;

    return allWords;
};

export default RegisterStringChange;
