window.addEventListener('load', function(){
    new Glider(document.querySelector ('.carousel__lista'),{
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.carousel__indicadores',
        arrows: {
            prev: '.carousel__anterior',
            next: '.carousel__siguiente'
        },
        responsive: [
            {
              
              breakpoint: 300,
              settings: {
                
                slidesToShow: 2,
                slidesToScroll: 2,
               
              }
            },{
              
              breakpoint: 800,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                
              }
            }
          ]
    });
});