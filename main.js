class App{
    constructor(){
        this.zero = new Array();
        this.uno = new Array();

        for(let i = 1; i < 1000; i++){
            if(i){
                this.uno.push(i)
            }
        }
        this.eratostenes();
        console.log(this.zero);
        for(let i = 0; i<this.uno.length; i++){
            if(this.uno[i]===false){
                this.uno.splice(i,1);
                i--
            }
        }
        console.log(this.uno);
    }

    eratostenes(){
        for(let i = 1; i<1000; i++){
            if(this.uno[i] !== false){
                let colado = this.uno[i];
                for(let j = this.uno[i]*this.uno[i]; j<1000; j+=colado){
                    this.zero.push(this.uno[i]);
                    this.uno[i]=false;
                }
            }
        }
    }
    //por alguna razon no me estaba saliendo los numeros primos, estuve tratando 
    //de ver si era los los *j* o algun otro valor pero nno encontramos nada
    //lo intenté con el boolean pero no me acuerdo como aplicarlo correctamente en javascript
    
}
new App;