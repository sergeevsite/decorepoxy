$(document).ready(function(){

// инициализация карты яндекс
    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){ 
        // Создание карты.    
        var myMap = new ymaps.Map("map", {
            center: [55.79721074143859, 49.10716293389889],
            zoom: 15,
            controls: ['zoomControl', 'fullscreenControl', 'routeButtonControl']
        });

        myMap.behaviors
        // Отключено
        //  - drag - перемещение карты при нажатой левой кнопки мыши;
        //  - magnifier.rightButton - увеличение области, выделенной правой кнопкой мыши.
        .disable(['drag', 'scrollZoom'])
        // Включено
    }
});