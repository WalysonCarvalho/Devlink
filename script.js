window.addEventListener('load', () => {
    // TODO
    // const -> constant -> Utilizar apenas quando o valor da variável não for alterado.
    // let -> Utilizar quando o valor da variável for alterado em algum momento do código
    // var -> Segue o mesmo padrão do let, porém não se utiliza mais (está obsoleto, em desuso)

    const button = document.querySelector('#switch button');
    const body = document.querySelector('body');

    button.onclick = () => {
        const isLightMode = body.classList.contains('light');

        if(isLightMode){
            body.classList.remove('light');
        }else{
            body.classList.add('light');
        }
    }

    console.log('button', button);
});