// open nav

$('.toggle').click(function (e) { 
    e.preventDefault();
    $('.nav-bar-item').addClass('active');
    // $('.browser').addClass('active');
});

// exit nav
$('.exit-nav').click(function (e) { 
    e.preventDefault();
    $('.nav-bar-item').removeClass('active');
});

// hidden icon nav
$('.arrow-down').click(function (e) { 
    e.preventDefault();
    $('.nav-icon-item').toggle('hidden');
});


// $('.arrow-down').click(function (e) { 
//     e.preventDefault();
//     $('.nav-icon-item').removeClass('hidden');
// });
