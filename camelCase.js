function camelcase(s) {
    // Write your code here
    let caps = s.toUpperCase()
    let count = 1
    // console.log(caps);
    for (let i = 0; i < caps.length; i++) {
        if (s[i]==caps[i]) {
            count++
        }
    }
    console.log(count);

}

camelcase("oneTwoThree")