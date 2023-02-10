//Criar uma referência para tela
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

//Dê altura e largura específicas para a imagem do carro
greencar_width=75;
greencar_height=100;

backgroundImage="parkingLot.jpg";
greencarImage="car2.png";

//Defina a posição inicial para uma imagem de carro.
greencar_x=5;
greencar_y=225;
 
function add() {
	//carregar carro e imagens de fundo na tela.
	function add( ) {
		background_imgTag=new Image();
		background_imgTag.onload=uploadBackground;
		background_imgTag.src=background_image;
		
		greencar_imgTag=new Image();
		greencar_imgTag.onload=uploadgreencar;
		greencar_imgTag.src=greencar_image;
	}		
}

function uploadBackground() {
	//Defina a função ‘uploadBackground’
	function uploadBackground () {

		ctx. drawImage (background_imgTag,0,0, canvas.width,canvas.height);
	}
		function uploadgreencar () {
		
		ctx . drawImage (greencar_ingTag,greencar_x,greencar_y,greencar_width,greencar_height);
		
}
}
function uploadGreenCar() {
	//Defina a função ‘uploadGreenCar’.
	function up()
	if(greencar_y >=0)
	
	greencar_y=greencar_y-10;
	console. log("When up arrow is pressed,x="+greencar_x+" | y="+greencar_y);
	uploadBackground();
	uploadgreencar();
	
	
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Definir função para mover o carro para cima
}

function down()
{
	//Definir função para mover o carro para baixo
}

function left()
{
	//Definir função para mover o carro para o lado esquerdo
}

function right()
{
	//Definir função para mover o lado direito do carro
}
