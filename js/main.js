

const { createApp } = Vue;

const opzioni = {
    data: function () {
        return {
            message: 'Hello, World! ',
            title:'Cambia il colore del testo',
            img: 'https://picsum.photos/id/237/300/300',
            classColor:'violet',
        }
    }
};

createApp(opzioni).mount('#app')