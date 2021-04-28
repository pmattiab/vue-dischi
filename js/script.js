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

        created() {},

        // funzioni in mounted che partono dopo il caricamento dell'HTML
        mounted() {

            // axios con API boolean per riempire l'array dei dischi in data
            axios
                .get("https://flynn.boolean.careers/exercises/api/array/music")
                .then((response) => {
                    
                    // variabile result = oggetto risposta
                    const result = response.data;

                    // dichiaro l'array di dischi in data uguale
                    // al valore response dell'oggetto result
                    this.disks = result.response;

                    // ordino l'array dei dischi (oggetti) in base al valore year
                    this.disks.sort(function(firstDisk, secondDisk) {
                        return (firstDisk.year) - (secondDisk.year)
                    });

                    // pusho ne'array dei generi All
                    this.genres.push("All");

                    // ciclo forEach su tutti gli oggetti dell'array disks
                    this.disks.forEach(element => {

                        // per pushare, se non già inclusi,
                        // i generi nell'array genres in data
                        if (!this.genres.includes(element.genre)) {
                            this.genres.push(element.genre);
                        }

                    });
                    
                });
        }
    }
);