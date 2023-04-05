const arrImg = [
    {
        alt: "lion",
      src: "https://www.gesser-images.com/wp-content/uploads/2016/08/Lion-046-_DS30374-300x300.jpg"
    },
    {
        alt: "elephant",
      src: "https://globalelephants.org/wp-content/uploads/2014/05/Guida-Blog-Post-424-300x300.jpg"
    },
    {
        alt: "dog",
      src: "https://dickmanroadvet.com/wp-content/uploads/2016/07/dvm2-23-300x300.jpg"
    },
    ];

const imgAnimals = document.querySelectorAll('img');

for(i = 0; i < arrImg.length; i++){
    imgAnimals[i].src = arrImg[i].src;
    imgAnimals[i].alt = arrImg[i].alt;
};