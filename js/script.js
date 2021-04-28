// var per vue js
var app = new Vue(
    {
        // elemento con id root
        el: "#root",

        // data
        data: {

            // array dischi inizialmente vuoto
            disks: [],
            genres: [],
            disksFilter: "All"
        },

        methods: {},

        // funzioni in mounted che partono dopo il caricamento dell'HTML
        mounted() {

            // axios con API boolean per riempire l'array dei dischi in data
            axios
                .get("https://flynn.boolean.careers/exercises/api/array/music")
                .then((response) => {

                    const result = response.data;

                    // copio il risultato ottenuto nell'array dei dischi
                    this.disks = result.response;

                    this.genres.push("All");

                    // ciclo forEach su tutti gli oggetti dell'array disks
                    this.disks.forEach(element => {

                        // per pushare, se non già inclusi,
                        // i generi nell'array genres in data
                        if (!this.genres.includes(element.genre)) {
                            this.genres.push(element.genre);
                        }

                    });

                    console.log(this.genres);
                    
                });
        }
    }
);