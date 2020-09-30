let config = {

    mainShowed: true,

    theme: "dark",

    variables: {

        light: {
            background_color: "rgb(223, 223, 223)",
            text_color_main: "rgba(0,0,0,0.8)",
            text_color_main_inverted: "rgba(255,255,255,0.8)",
            text_color_secondary: "rgba(0,0,0,0.8)",
            image_button_theme: "url('https://i.imgur.com/piAWx3K.png')"
        },

        dark: {
            background_color: "#212121",
            text_color_main: "rgba(255,255,255,0.8)",
            text_color_main_inverted: "rgba(0,0,0,0.8))",
            text_color_secondary: "rgba(255,255,255,0.8)",
            image_button_theme: "url('https://i.imgur.com/EPHGIib.png')"
        }

    },

    randomQuotes: [
        {
            quote: "Windows isn't a virus, viruses do something.",
            length: "680",
            author: "Unknown"
        },
        {
            quote: "Technology has the shelf life of a banana.",
            length: "650",
            author: "Scott McNealy"
        },
        {
            quote: "Daddy, what does FORMATTING DRIVE C: mean?",
            length: "650",
            author: "Unknown"
        },
        {
            quote: "We don't use technology, we live technology.",
            length: "680",
            author: "Godfrey Reggio"
        },
        {
            quote: "Modern technology Owes ecology An Apology.",
            length: "650",
            author: "Alan M. Eddison"
        },        
        {
            quote: "Git and Github are like Porn and Pornhub.",
            length: "620",
            author: "Ismail"
        },
        {
            quote: "The internet is a great way to get on the net.",
            length: "710",
            author: "Senator Bob Dole"
        },
        {
            quote: "The computer is a moron.",
            length: "370",
            author: "Peter Drucker"
        },
        {
            quote: "Software is like sex:it's better when it's free.",
            length: "750",
            author: "Linus Torvalds"
        },
        {
            quote: "First solve the problem, then write the code.",
            length: "695",
            author: "John Johnson"
        },
        {
            quote: "Some people think technology has the answers.",
            length: "695",
            author: "Kevin Mitnick"
        },
        {
            quote: "If you can't make it good, make it looks good.",
            length: "710",
            author: "Bill Gates"
        },
        {
            quote: "Never test your code. You are good, your code is good too.",
            length: "710",
            author: "Mr. Artemus"
        },

    ]
    
}

function mainButtonOnClick() {
    //document.body.innerHTML = document.body.innerHTML.replaceAll(`${config.mainShowed===true?"showed":"hidden"}`, `${config.mainShowed===true?"hidden":"showed"}`)
    //document.body.innerHTML = document.getElementsByClassName("main")[0].className = "main " + config.mainShowed == true? "hidden" : "showed"
    //document.body.innerHTML = document.getElementsByClassName("main")[0].className = "behind " + config.mainShowed == true? "hidden" : "showed"
    document.querySelectorAll('.showed, .hidden').forEach(e => {
        if(e.classList.contains('showed')) {
          e.classList.add('hidden');
          e.classList.remove('showed');
        } else {
          e.classList.remove('hidden');
          e.classList.add('showed');
        }
      });
    config.mainShowed = config.mainShowed===true?false:true
    if (config.mainShowed === false) {
        generateQuote()
    }
}

function generateQuote() {
    let rand = Math.floor(Math.random()*config.randomQuotes.length)
    document.getElementsByClassName("quote")[0].innerHTML = `${config.randomQuotes[config.randomQuotes.length-1].quote}<div class="border"></div>`
}

function changeTheme() {
    let variables = config.theme==="dark"? config.variables.light : config.variables.dark
    Object.keys(variables).forEach(val => {
        document.documentElement.style.setProperty(`--${val.replaceAll("_", "-")}`, variables[val]);
    })
    config.theme = config.theme==="light"? "dark": "light"
}
