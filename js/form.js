class Form{
    constructor(){}

    display(){
        var title=createElement("h2")
        title.html("car racing game")
        title.position(130,20)
        var input=createInput("enter your name")
        input.position(130,160)
        var button = createButton("submit")
        button.position(250,200)
        var greeting=createElement("h3")
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name=input.value()
            playerCount+=1
            player.update(name)
            player.updateCount(playerCount)
            greeting.html("welcome "+name)
            greeting.position(130,160)
        })
        
    }
}