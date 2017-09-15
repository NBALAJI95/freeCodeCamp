
    function getQuote() {
        $.ajax({
            dataType: "jsonp",
            jsonpCallback: "parseQuote",
            url: "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=parseQuote",
            success: function(results) {
                var color = '#'+Math.floor(Math.random()*16777215).toString(16);
                $('body').css('background-color', color);
                $('#Quote p').css('color', color);
                $('button').css('background-color', color);
                $("#text").html(results.quoteText);
                $("#author").text("- " + results.quoteAuthor);

                var link = "https://twitter.com/intent/tweet?text=";
                link += $("#text").text() + " " + $("#author").text();
                $('.twitter-share-button').attr('href', link);
            }
        });
    }


$(document).ready(function(){
    getQuote();
    $("#newQuote").click(getQuote);
});