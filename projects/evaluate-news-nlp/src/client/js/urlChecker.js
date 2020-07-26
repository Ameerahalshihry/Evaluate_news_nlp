const validUrl = require('valid-url')

function checkForUrl(inputText) {
    console.log("::: Running checkForUrl :::", inputText);
    if (validUrl.isUri(inputText)){
        console.log('it is url');
        
    }else{
        console.log('it is not url');
        
    }
}

export { checkForUrl }
