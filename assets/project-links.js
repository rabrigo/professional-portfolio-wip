$('.project-1').click(function () {
    window.location.replace("https://mweyer.github.io/First-Group-Project/");
    // $(this).attr("style", "background-color: white");
})

$('.project-1').hover(function () {
        $(this).attr("style", "opacity: .7");
    }, function () { 
        $(this).attr("style", "opacity: 1");
    })
