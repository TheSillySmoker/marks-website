var x = 0;


   function nextMeme(){  
       x++;
    var meme = "patMeme.jpg";

    switch(x){
        case 0:
            meme = 'patMeme.jpg';
            break;
        case 1:
            meme = 'spongeMeme.jpg';
            break;
        case 2:
             meme = 'squidMeme.png'
            break;
        case 3: 
        meme = 'crabsMeme.jpg'
        
    }
    if (x == 4){
        x = 0;
    }
    document.getElementById('meme').src= meme.text;
}