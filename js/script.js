// var per vue js
var app = new Vue(
    {
        // elemento con id root
        el: "#root",

        // data
        data: {

            // array dischi inizialmente vuoto
            disks: []
        },

        // funzioni in mounted che partono dopo il caricamento dell'HTML
        mounted() {

            // axios con API boolean
            axios
                .get("https://flynn.boolean.careers/exercises/api/array/music")
                .then((response) => {

                    const result = response.data;

                    // copio il risultato ottenuto nell'array dei dischi
                    this.disks = result.response;
                    
                });
        }
    }
);