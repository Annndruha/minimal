let searchParams = new URLSearchParams(window.location.search)
$("#to_main_lang").attr('value', $('meta[name="main_language_code"]').attr("content").toUpperCase())
$("#to_second_lang").attr('value', $('meta[name="second_language_code"]').attr("content").toUpperCase())
if (searchParams.has('lang'))
{
    let lang = searchParams.get('lang')
    change_language(lang)
}
else {
    to_main_lang()
}

function change_uri(lang){
    if (history.pushState) {
        let url = window.location.protocol + "//" + window.location.host + window.location.pathname + '?lang=' + lang
        window.history.pushState({path:url},'',url)
    }
}

$("#to_main_lang").on("click", () => {
    let lang = $('meta[name="main_language_code"]').attr("content")
    change_uri(lang)
    change_language(lang)
})

$("#to_second_lang").on("click", () => {
    let lang = $('meta[name="second_language_code"]').attr("content")
    change_uri(lang)
    change_language(lang)
})

function change_language(lang) {
    if (lang === $('meta[name="main_language_code"]').attr("content") || lang === "main") {
        console.log('Now set main language')
        to_main_lang()
    }
    else if (lang === $('meta[name="second_language_code"]').attr("content") || lang === "second") {
        console.log('Now set second language')
        to_second_lang()
    }
    else {
        console.log('Unknown language in URL params. Set main language')
        to_main_lang()
    }
}


$("#to_main_lang_href").attr("href", "?lang=" + $('meta[name="main_language_code"]').attr("content"))
$("#to_second_lang_href").attr("href", "?lang=" +  $('meta[name="second_language_code"]').attr("content"))

function to_main_lang(){
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

    $("#to_main_lang").css('display', 'none')
    $("#to_second_lang").css('display', 'block')

    document.title = $('meta[name="fullname"]').attr("content")
}

function to_second_lang(){
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

    $("#to_main_lang").css('display', 'block')
    $("#to_second_lang").css('display', 'none')
    
    document.title = $('meta[name="second_fullname"]').attr("content")
}