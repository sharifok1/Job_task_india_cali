const sliderImg = [
    'assets/page1.jpg',
    'assets/page2.jpg',
    'assets/page3.jpg',
    
 ]
 let indexOfslider = 0;
 setInterval(()=>{  
     if(indexOfslider>=sliderImg.length)
     indexOfslider=0;
     // console.log(indexOfslider)
     const sliderIndex = sliderImg[indexOfslider]
     console.log(sliderIndex);
     sliderSetUp(sliderIndex)
     indexOfslider++; 
 },3000)
 
 const sliderSetUp =(photo)=>{
     document.getElementById('slider').innerHTML = 
     `
     <img class="slide-img" src="${photo}" alt="" style="
     width: 60%;
     height: auto;
     marginBotom:20px;
     transition:1s;
      ">
     `
 }