var x = 3;


   function nextMeme(){  
      
    var meme;

    switch(x){
        case 0:
            meme = 'patMeme.jpg';   
             document.getElementById('meme').src= meme.text;
            break;
        case 1:
            meme = 'spongeMeme.jpg';
            document.getElementById('meme').src= meme.text;
            break;
        case 2:
             meme = 'squidMeme.png'
             document.getElementById('meme').src= meme.text;
            break;
        case 3: 
        meme = 'crabsMeme.jpg'
        document.getElementById('meme').src= meme.text;
        
    }
    if (x == 4){
        x = 0;
    }
 x++;
}