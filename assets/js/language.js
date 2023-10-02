let searchParams = new URLSearchParams(window.location.search)
if (searchParams.has('lang'))
{
    let lang = searchParams.get('lang')
    if (lang === $('meta[name="main_language_code"]').attr("content") || lang === "main") {
        console.log('Now set main language')
        set_main_langugage()
    }
    else if (lang === $('meta[name="second_language_code"]').attr("content") || lang === "second") {
        console.log('Now set second language')
        set_second_langugage()
    }
    else {
        console.log('Unknown language in URL params. Set main language')
        set_main_langugage()
    }
}
else {
    set_main_langugage()
}

$("#to_main_lang_href").attr("href", "?lang=" + $('meta[name="main_language_code"]').attr("content"))
$("#to_second_lang_href").attr("href", "?lang=" +  $('meta[name="second_language_code"]').attr("content"))

function set_main_langugage(){
    $("#fullname").css("display", "block")
    $("#info").css("display", "block")
    $("#content").css("display", "block")
    $("#bt_contacts").css("display", "block")
    $("#fullname").css("display", "block")

    $("#second_fullname").css("display", "none")
    $("#second_info").css("display", "none")
    $("#second_content").css("display", "none")
    $("#bt_second_contacts").css("display", "none")
    $("#second_fullname").css("display", "none")

    document.title = $('meta[name="fullname"]').attr("content")
}

function set_second_langugage(){
    $("#fullname").css("display", "none")
    $("#info").css("display", "none")
    $("#content").css("display", "none")
    $("#bt_contacts").css("display", "none")
    $("#fullname").css("display", "none")

    $("#second_fullname").css("display", "block")
    $("#second_info").css("display", "block")
    $("#second_content").css("display", "block")
    $("#bt_second_contacts").css("display", "block")
    $("#second_fullname").css("display", "block")
    
    document.title = $('meta[name="second_fullname"]').attr("content")
}