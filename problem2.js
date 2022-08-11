// Problem-02: Check Whether The Given File Name Is A JavaScript File Or Not
function isJavaScriptFile(fileName) {
    if (typeof fileName !== 'string') {
        return 'Please Enter a String';
    }
    const result = fileName.endsWith('.js');
    return result;
}

const str1 = isJavaScriptFile('image.jpg.js');
console.log(str1);