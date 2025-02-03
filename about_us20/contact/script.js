document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.home-tt-vector-t').addEventListener('click', function(e) {
        e.stopPropagation();
        document.querySelector('.home-driver-1').style.right = '0';
        document.querySelector('body').style.overflowY = 'hidden';
    });

    document.querySelector('.home-tt-union').addEventListener('click', function(e) {
        e.stopPropagation();
        setTimeout(() => {
            document.querySelector('.home-driver-2').style.right = '0';
        }, 300);
        document.querySelector('body').style.overflowY = 'hidden';
    });

    document.querySelector('.home-ttt-union-0vector').addEventListener('click', function(e) {
        e.stopPropagation();
        setTimeout(() => {
            document.querySelector('.home-driver-3').style.right = '0';
        }, 600);
        document.querySelector('body').style.overflowY = 'hidden';
    });

    document.querySelector('.home-t-union').addEventListener('click', function(e) {
        e.stopPropagation();
        setTimeout(() => {
            document.querySelector('.home-driver-4').style.left = '0';
        }, 900);
        document.querySelector('body').style.overflowY = 'hidden';
    });

    document.querySelector('.home-driver-1 .close-btn').addEventListener('click', function(e) {
        e.stopPropagation();
        document.querySelector('.home-driver-1').style.right = '-600px';
        document.querySelector('body').style.overflowY = 'scroll';
    });

    document.querySelector('.home-driver-2 .close-btn').addEventListener('click', function(e) {
        e.stopPropagation();
        document.querySelector('.home-driver-2').style.right = '-600px';
        document.querySelector('body').style.overflowY = 'scroll';
    });

    document.querySelector('.home-driver-3 .close-btn').addEventListener('click', function(e) {
        e.stopPropagation();
        document.querySelector('.home-driver-3').style.right = '-600px';
        document.querySelector('body').style.overflowY = 'scroll';
    });

    document.querySelector('.home-driver-4 .close-btn').addEventListener('click', function(e) {
        e.stopPropagation();
        document.querySelector('.home-driver-4').style.left = '-600px';
        document.querySelector('body').style.overflowY = 'scroll';
    });

    document.querySelector("body").addEventListener('click', function(e) {
        // Проверяем, был ли клик внутри любого из драйверов
        if (
            e.target.closest('.home-driver-1') ||
            e.target.closest('.home-driver-2') ||
            e.target.closest('.home-driver-3') ||
            e.target.closest('.home-driver-4')
        ) {
            return; // Если да, выходим из обработчика
        }

        // Закрываем все драйверы
        document.querySelector('.home-driver-1').style.right = '-600px';
        document.querySelector('.home-driver-2').style.right = '-600px';
        document.querySelector('.home-driver-3').style.right = '-600px';
        document.querySelector('.home-driver-4').style.left = '-600px';
        document.querySelector('body').style.overflowY = 'scroll';
    });
});
