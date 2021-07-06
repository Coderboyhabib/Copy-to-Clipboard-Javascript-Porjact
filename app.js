const input = document.querySelector('#input');
const btn = document.querySelector('button.btn');
const result = document.querySelector('#P')

btn.onclick = function() {
    input.select();
    document.execCommand('copy');
    result.innerText = 'Copid';
}