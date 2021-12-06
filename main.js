var Canvas = new   fabric.Canvas("myCanvas")

block_image_width= 30;
block_image_height= 30;

player_X=10;

player_Y=10;

var player_object="";
var block_object="";


function player_update()
{  fabric.image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_Y,
            left:player_X
        });
        Canvas.add(player_object);
    });
}




function new_image(get_Image)
{  fabric.image.fromURL(get_Image,function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_image_height);
        block_object.scaleToHeight(block_image_height);
        block_object.set({
            top:player_Y,
            left:player_X
        });
        Canvas.add(block_object);
    });
}