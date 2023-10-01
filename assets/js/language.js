let searchParams = new URLSearchParams(window.location.search)
if (searchParams.has('lang'))
{
    let lang = searchParams.get('lang')
    change_language(lang)
}


function change_language(lang) {
    if (lang === "en" || lang === "main") {
        console.log('Now set main language')
        set_main_langugage()
    }
    else if (lang === "ru" || lang === "second") {
        console.log('Now set second language')
    }
    else {
        console.log('Unknown language in URL params. Set main language')
        set_main_langugage()
    }
}

function set_main_langugage(){
    $("#fullname").css("display", "block")
    $("#info").css("display", "block")
    $("#content").css("display", "block")
    $("#contacts").css("display", "block")
    $("#fullname").css("display", "block")
    // $("#title_fullname")

    $("#second_fullname").css("display", "none")
    $("#second_info").css("display", "none")
    $("#second_content").css("display", "none")
    $("#second_contacts").css("display", "none")
    $("#second_fullname").css("display", "none")
    // $("#title_second_fullname")
}

function set_second_langugage(){
    $("#fullname").css("display", "none")
    $("#info").css("display", "none")
    $("#content").css("display", "none")
    $("#contacts").css("display", "none")
    $("#fullname").css("display", "none")
    // $("#title_fullname")

    $("#second_fullname").css("display", "block")
    $("#second_info").css("display", "block")
    $("#second_content").css("display", "block")
    $("#second_contacts").css("display", "block")
    $("#second_fullname").css("display", "block")
    // $("#title_second_fullname")
}