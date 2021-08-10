
import {fabric} from "fabric";

const canvas = new fabric.Canvas("canvas");

const resolution = 24;
let gridCellSize = 24;
const color = "black";

const generateGrid = () => {
    for (let y = 0; y < 24; y++) {
        // y => 0 à 24
        for (let x = 0; x < 24; x++) {
          // x => 0 à 24
          //console.log('X:',x,'Y:',y);
    
          const gridRectangle = new fabric.Rect({
            width: gridCellSize,
            height: gridCellSize,
            fill: "transparent",
            stroke: "black",
            strokeWidth: 1,
    
            left: x * gridCellSize,
            top: y * gridCellSize,
    
            selectable:false
          });
    
          //console.log(gridRectangle);
    
    
          canvas.add(gridRectangle);
    
        }
      }
    // Event listener: récupérer la couleur du picker
    const currentColor = document.getElementById('colorPicker');
    //Remplir la case avec la couleur séléctionnnée
    canvas.on("mouse:down", (options) => {
      // console.log("ok");
        options.target.set({fill: currentColor.value});
      });

// Event listener: récupérer la couleur du picker

    // const chooseColor = () => {
    //   const picker = document.getElementById("colorPicker")
    //   picker.addEventListener('change', (ev) => {
    //     console.log(ev.target.value);
    //     colorChoosed = '#' + ev.target.value
    //   });
    // }

//Supprimer le dessin
// const clear = document.getElementById("clearGrid").addEventListener('click', function() {
//   clear.clearRect(0,0,canvas.width,canvas.height);
// })



    for (let index = 0; index < 24 * 24; index ++) {
        const y =  Math.floor(index /24);
        const x = index - y * 24;
        
        const gridRectangle = new fabric.Rect({
            selectable: false,
            width: resolution,
            height: resolution,
            fill: "transparent",
            stroke: "black",
            strokeWidth: 1,
            left: x * 24,
            top: y * 24,
            gridId: index,
            gridX: x,
            gridY: y,
        });
    }
}





// const init = () => {
    generateGrid();
 

// init();


