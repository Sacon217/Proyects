var canvas = new fabric.Canvas('canvas',{preserveObjectStacking:true , hasControls:true});
document.getElementById('file').addEventListener("change", function (e) {
  var file = e.target.files[0];
  var reader = new FileReader();
  reader.onload = function (f) {
    var data = f.target.result;                    
    fabric.Image.fromURL(data, function (img) {
      var oImg = img.set({left: 0, top: 0, angle: 00});
      canvas.setBackgroundImage(oImg,canvas.renderAll.bind(canvas), {
        scaleX: canvas.width / oImg.width,
        scaleY: canvas.height / oImg.height
     });
      var a = canvas.setActiveObject(oImg);
      var dataURL = canvas.toDataURL({format: 'png', quality: 0.8});
    });
  };
  reader.readAsDataURL(file);
});

document.querySelectorAll(".library img").forEach(el => {
  el.addEventListener("click", () => {
    fabric.Image.fromURL(el.src, img => {
      img.scale(0.2);
      img.set({ left: 100, top: 100 });
      canvas.add(img);
    });
  });
});


$("#select").click(function(){
  canvas.isDrawingMode = false;
});
$("#draw").click(function(){
  canvas.isDrawingMode = true;
});
$("#delete").click(function(){
  canvas.isDrawingMode = false;
  canvas.remove(canvas.getActiveObject());
});
