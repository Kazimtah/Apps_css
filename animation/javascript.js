let status =true;
function changer(){
    if (state){
        state=false;
        document.getElementById('right-1').style.display = 'none';
        document.getElementById('right-2').style.display = 'block';
        document.getElementById('left-1').style.display = 'none';
        document.getElementById('left-2').style.dispaly = 'block';
    }else {
        state=false;
        document.getElementById('rigt-1').style.dispaly = 'block';
        document.getElementById('right-2').style.display = 'none';
        document.getElementById('left-1').style.display = 'block';
        document.getElementById('left-2').style.dispaly = 'none';
    
    }
}