// action on clicking a todo

$("ul").on("click", "li", (function(){
    $(this).toggleClass("checked");
}));

$('ul').on("click", "span", (function(event){
    $(this).parent().fadeOut(300, function(){
        $(this).remove()
    })
    event.stopPropagation()
}));

$('input[type=text]').keypress(function(event){
    var content = $(this).val()
    if(event.which === 13 && content !== ""){
        $('ul').append("<li><span><i class='fas fa-trash-alt'></i></span>" + content + "</li>")
        $(this).val(null)
    }
    
})


$('header i').click(function(){
    $('input[type=text]').fadeToggle(300)
})
