function firstLetterUppercase(name: string) {
    let firstLetter = name.charAt(0).toUpperCase()
    return firstLetter+name.substring(1);
}

firstLetterUppercase("danilo")