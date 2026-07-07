document.addEventListener("DOMContentLoaded", () => {
    const listItems = document.querySelectorAll('#nav_list ul li');
    const bar = document.querySelector('.bar');

    // Função que move a barra e ajusta a largura
    function moveBar(item) {
        bar.style.width = item.offsetWidth + 10 + 'px';
        bar.style.left = item.offsetLeft + (-3  ) + 'px';
    }

    // Define a barra no primeiro item por padrão ao carregar a página
    if (listItems.length > 0) {
        moveBar(listItems[0]);
    }

    // Faz a barra seguir o mouse quando passa por cima de outro item
    listItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            moveBar(item);
        });
    });

    // Opcional: Se quiser que a barra volte para o item ativo (ex: o primeiro) quando tirar o mouse do menu
    const navList = document.querySelector('#nav_list');
    navList.addEventListener('mouseleave', () => {
        // Substitua listItems[0] pelo item que representa a página atual se necessário
        moveBar(listItems[0]); 
    });
});