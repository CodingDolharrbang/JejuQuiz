submitButton = document.getElementById("submitButton")



question1 = document.getElementsByName("question1")
question2 = document.getElementsByName("question2")
question3 = document.getElementsByName("question3")
question4 = document.getElementsByName("question4")
question5 = document.getElementsByName("question5")
question6 = document.getElementsByName("question6")
question7 = document.getElementsByName("question7")
question8 = document.getElementsByName("question8")
question9 = document.getElementsByName("question9")
question10 = document.getElementsByName("question10")

question = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10]

value = []

function handleSubmitClick() {

    for(var i=0; i<10; i++) {
        for(var j=0; j<4; j++){
            if(question[i][j].checked) {
                value[i] = question[i][j].value
            }
        }
    }

    console.log(value)
}

submitButton.addEventListener("click", handleSubmitClick);

