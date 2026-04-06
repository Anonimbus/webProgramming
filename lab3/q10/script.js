let theme = {
    bg: "#ffffff",
    text: "#000000",
    btn: "#007bff"
};

function applyTheme() {
    theme.bg = document.getElementById("bg").value;
    theme.text = document.getElementById("text").value;
    theme.btn = document.getElementById("btn").value;

    document.body.style.background = theme.bg;
    document.body.style.color = theme.text;
    document.getElementById("sampleBtn").style.background = theme.btn;
}

function resetTheme() {
    theme = {
        bg: "#ffffff",
        text: "#000000",
        btn: "#007bff"
    };
    applyTheme();
}