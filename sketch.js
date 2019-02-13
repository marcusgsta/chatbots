

function setup() {
    noCanvas();
    let bot = new RiveScript();
    bot.loadFile(["./brain/std-salutations.rive", "./brain/std-learn.rive"]).then(brainReady).catch(brainError);

    function brainReady() {
        console.log("Chatbot ready")
        bot.sortReplies();
    }

    function brainError(err) {
        console.log("Chatbot error: " + err)
    }

    let button = select('#submit')
    let user_input = select('#user_input')
    let output = select('#output')

    button.mouseClicked(chat)

    function chat() {
        let input = user_input.value()

        // let reply =
        bot.reply("local-user", input).then(function(rep) {
            console.log(rep)
            output.html(rep)
        })
    }

}

function keyTyped() {
    let button = document.getElementById('submit')
    if (keyCode == ENTER) {
        button.click();
    }
}
