flatpickr("#myID", {
    mode: "range",
    minDate:"today",
    dateFormat: "Y/m/d"
});

$(function TimeSelect(){
    var $selectDay = $(".day");
    for (i=1;i<=30;i++){
        $selectDay.append($('<option></option>').val(i).html(i))
    }
    var $selectMonth = $(".month");
    for(i=1;i<=12;i++){
        $selectMonth.append($('<option></option>').val(i).html(i))
    }
    var $selectYear = $(".year");
    for(i=2005;i>=1925;i--){
        $selectYear.append($('<option></option>').val(i).html(i))
    }
    console.log($selectYear)
    
});

var btn = document.querySelector(".reservation__btn");
btn.addEventListener("click", function(){
    location.href = "./reservation.html"
})

$(function(){
    $(document).on('click', '.btn__send', function(){
    var formData = $('#reserve').serializeArray(),
        rs = formObj2Json(formData);
  
    $('#rs').html(JSON.stringify(rs, undefined, 2));
  });
  })
  
$(function Service() {
    $('.service__list-container:eq(0)').show();
    $('.service__location').click(function () {
        $('.service__location').removeClass('service__active');
        $(this).addClass('service__active');
        var n = $('.service__location').index(this);
        $('.service__list-container').hide();
        $('.service__list-container:eq('+ n +')').fadeIn(300);

    })
    $('.service__content:eq(0)').show();
    $('.service').click(function() {
          /* loại bỏ class active của tất cả li */
        $('.service').removeClass('service__active');
         /* add class active của li được click */
        $(this).addClass('service__active');
          /* Xác định phần tử thứ n được click */
        var i = $('.service').index(this);
          /* Ẩn tất cả .box */
        $('.service__content').hide();
         /* Hiển thị .box theo phần tử thứ n */
        $('.service__content:eq('+ i +')').fadeIn(300);
    })
});

// $(function() {
//       /* cho box đầu tiên hiển thị */
//     $('.room__content:eq(0)').show();
//     $('.service').click(function() {
//           /* loại bỏ class active của tất cả li */
//         $('.service').removeClass('service__active');
//          /* add class active của li được click */
//         $(this).addClass('service__active');
//           /* Xác định phần tử thứ n được click */
//         var n = $('.service').index(this);
//           /* Ẩn tất cả .box */
//         $('.room__content').hide();
//          /* Hiển thị .box theo phần tử thứ n */
//         $('.room__content:eq('+ n +')').fadeIn(300);
//     })
// })

// var items = document.getElementsByClassName('service')
// for(var i=0;i<TabGroup items.length;i++){
//     items[i].addEventListener('click',printDetails);
// }   

// function printDetails(e){
//     for(var i=0;i< items.length;i++){
//         if(items[i].classList.contains("service__active")) {
//             items[i].classList.toggle("service__active")
//         }
//     }
//     this.classList.add("service__active")
// }

$(function roomTariff() {
  $('.room__content:eq(0)').show();
  $('.service__list li').click(function() {
    $('.service__list li').removeClass('service__active');
    $(this).addClass('service__active');
    var n = $('.service__list li').index(this);
    $('.room__content').hide();
    $('.room__content:eq('+ n +')').fadeIn(300);
  })
})

