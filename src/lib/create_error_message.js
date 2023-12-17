export function createErrorMessage({error}){
    const code = error.code;
    const message = String(code).split('/')[1];
    let content = message.split('-');
    let formatedMessage = '';

    content.map((word, index)=>{formatedMessage += word + ' ';})

    return (formatedMessage[0].toUpperCase() + formatedMessage.slice(1));
}