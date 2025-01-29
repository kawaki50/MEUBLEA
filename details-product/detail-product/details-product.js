$(function(){
    $('.attrib .option').click(function(){
      $(this).siblings().removeClass('activ');
      $(this).addClass('activ');
    })
    $('.zoomControl').click(function(){
      $(this).parents('.productCard').addClass('morph');
      $('body').addClass('noScroll');
    })
    $('.closePreview').click(function(){
      $(this).parents('.productCard').removeClass('morph');
      $('body').removeClass('noScroll');
    })
    $('.movControl').click(function(){
      let imgActiv = $(this).parents('.preview').find('.imgs img.activ');
      if ($(this).hasClass('left')) {
        imgActiv.index() == 0 ? $('.imgs img').last().addClass('activ') : $('.imgs img.activ').prev().addClass('activ');
      } else {
        imgActiv.index() == ($('.imgs img').length - 1) ? $('.imgs img').first().addClass('activ') : $('.imgs img.activ').next().addClass('activ');
      }
      imgActiv.removeClass('activ');
    })
  })

  $(document).ready(function(){
    $("#loun1").click(function(){
        $("#tsswira1").attr("src", "images/stella-bouclette-terracotta-front-d-Photoroom.png-Photoroom.png");
    });
    $("#loun1").click(function(){
      $("#tsswira2").attr("src", "images/stella-bouclette-terracotta-back-d-Photoroom.png-Photoroom.png");
    });
    $("#loun1").click(function(){
    $("#tsswira3").attr("src", "images/STELLA-BOUCLETTE-TERRACOTTA-DETAIL-01-D-Photoroom.png-Photoroom.png");
    });
  });

  $(document).ready(function(){
    $("#loun2").click(function(){
        $("#tsswira1").attr("src", "images/version_gauche_0081_s11_front.png-Photoroom.png-Photoroom.png");
    });
    $("#loun2").click(function(){
      $("#tsswira2").attr("src", "images/version_gauche_0080_s11_back.png-Photoroom.png-Photoroom.png");
    });
    $("#loun2").click(function(){
    $("#tsswira3").attr("src", "images/version_gauche_0024_s11_detail_03-Photoroom.png-Photoroom.png");
    });
  });

  $(document).ready(function(){
    $("#loun3").click(function(){
        $("#tsswira1").attr("src", "images/stella-bouclette-verte-front-d-Photoroom.png-Photoroom.png");
    });
    $("#loun3").click(function(){
      $("#tsswira2").attr("src", "images/stella-bouclette-verte-back-d-Photoroom.png-Photoroom.png");
    });
    $("#loun3").click(function(){
    $("#tsswira3").attr("src", "images/STELLA-BOUCLETTE-VERTE-DETAIL-01-D-Photoroom.png-Photoroom.png");
    });
  });