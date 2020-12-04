function disemvowel(str) {
    let characterArray = str.split("")
    return characterArray.map(character => {
        if (/[aeiouAEIOU]/.test(character)) {
            character = ""
        } else { return character }
    }).join("")
    return str;
}
/*
Test.assertEquals(disemvowel("This website is for losers LOL!"),
    "Ths wbst s fr lsrs LL!")
*/