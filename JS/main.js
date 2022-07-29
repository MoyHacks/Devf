/*var string = "DIOS UNION LIBERTAD";

alert(string.split(""));

var number= [1,2,3,4,5,6,7,8];
alert(number.slice(2,7));


var array=[10,[],true,false,12,'Manzana']; 
var newArr = array.splice(2,2,"ok"); 
console.log(newArr);*/

/*
var pokemons = 
[ '','bulbasaur',
  'ivysaur',
  'venusaur',
  'charmander',
  'charmeleon',
  'charizard',
  'squirtle',
  'wartortle',
  'blastoise',
  'caterpie',
  'metapod',
  'butterfree',
  'weedle',
  'kakuna',
  'beedrill',
  'pidgey',
  'pidgeotto',
  'pidgeot',
  'rattata',
  'raticate',
  'spearow',
  'fearow',
  'ekans',
  'arbok',
  'pikachu',
  'raichu',
  'sandshrew',
  'sandslash',
  'nidoran-f',
  'nidorina',
  'nidoqueen',
  'nidoran-m',
  'nidorino',
  'nidoking',
  'clefairy',
  'clefable',
  'vulpix',
  'ninetales',
  'jigglypuff',
  'wigglytuff',
  'zubat',
  'golbat',
  'oddish',
  'gloom',
  'vileplume',
  'paras',
  'parasect',
  'venonat',
  'venomoth',
  'diglett',
  'dugtrio',
  'meowth',
  'persian',
  'psyduck',
  'golduck',
  'mankey',
  'primeape',
  'growlithe',
  'arcanine',
  'poliwag',
  'poliwhirl',
  'poliwrath',
  'abra',
  'kadabra',
  'alakazam',
  'machop',
  'machoke',
  'machamp',
  'bellsprout',
  'weepinbell',
  'victreebel',
  'tentacool',
  'tentacruel',
  'geodude',
  'graveler',
  'golem',
  'ponyta',
  'rapidash',
  'slowpoke',
  'slowbro',
  'magnemite',
  'magneton',
  'farfetchd',
  'doduo',
  'dodrio',
  'seel',
  'dewgong',
  'grimer',
  'muk',
  'shellder',
  'cloyster',
  'gastly',
  'haunter',
  'gengar',
  'onix',
  'drowzee',
  'hypno',
  'krabby',
  'kingler',
  'voltorb'];
  pokemon(pokemons);

function pokemon(pokemons){
    var numero = prompt("Ingresa un numero y averigua: Quien es ese Pokemon!!!");
    
    for(var i=0;i<pokemons.length;i++){
        if(numero == i){
            alert("!!!Es :"+ pokemons[i]);
        }
    }
}

sumArray();
function sumArray(){
    var array1 = [1,0,2,3,4];
    var array2 = [3,5,6,7,8,13];
    var resultado= [];
  
        for(var i=0;i<array1.length;i++){
            for(var j=0;j<array2.length;j++){
                if(i == j){
                resultado.push(array1[i]+array2[j]);
                }
                else{
                    resultado.push
                }
            
            }
        }
        console.log(resultado);
    }


function test() {
    console.log(a);
    console.log(foo());
    
    var a = 1;
    function foo() {
       return 2;
    }
 }
 test()*/



 var a = 1; 
  
 function someFunction(number) {
   function otherFunction(input) {
     return a;
   }
   
   a = 5;
   
   return otherFunction;
 }
 
 var firstResult = someFunction(9);
 var result = firstResult(2);