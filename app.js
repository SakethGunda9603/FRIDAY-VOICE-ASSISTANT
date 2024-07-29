const btn=document.querySelector('.talk')
const content=document.querySelector('.content')


function speak(text){
    const text_speak=new SpeechSynthesisUtterance(text);
    text_speak.rate=1;
    text_speak.volume=1;
    text_speak.pitch=1;
    window.speechSynthesis.speak(text_speak);
}
function wishMe(){
    var day=new Date();
    var hour=day.getHours();
    if(hour>0 && hour<12){
        speak("Good Morning Boss what can i help you");
    }
    else if(hour>12 && hour<18){
        speak("Good Afternoon Boss what can i help you");
    }
    else{
        speak("Good evening boss what can i help you")
    }

}
window.addEventListener('load',()=>{
    speak(" Initializing FRIDAY...");
    wishMe();

});
//regornization of microphone
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if(message.includes('hey') || message.includes('hello')) {
        const finalText = "Hello Boss";
        speech.text = finalText;
    }

    else if(message.includes('how are you')) {
        const finalText = "I am fine boss tell me how can i help you";
        speech.text = finalText;
    }
    else if(message.includes('who are you')) {
        const finalText = "I am a virtual assistant";
        speech.text = finalText;
    }

    else if(message.includes('name')) {
        const finalText = "My name is Friday";
        speech.text = finalText;
    }

    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }
    else if(message.includes('open youtube')) {
        window.open("https://youtube.com", "_blank");
        const finalText = "Opening Youtube";
        speech.text = finalText;
    }

    

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }
    else if(message.includes('camera')) {
        window.open('Camera:///')
        const finalText = "Opening camera";
        speech.text = finalText;
    }

    // else if(message.includes('time')) {
    //     const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
    //     const finalText = time;
    //     speech.text = finalText;
    // }

    // else if(message.includes('date')) {
    //     const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
    //     const finalText = date;
    //     speech.text = finalText;
    // }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I dont know about it but I have found some information for " + message + " on google";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}