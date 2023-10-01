let searchParams = new URLSearchParams(window.location.search)
if (searchParams.has('lang'))
{
    let lang = searchParams.get('lang')
    change_language(lang)
}


function change_language(lang) {
    if (lang === "ru") {
        console.log('Now set as ru language')
    }
    else if (lang === "en") {
        console.log('Now set as en language')
    }
    else {
        console.log('Unknown language in URL params')
    }
}