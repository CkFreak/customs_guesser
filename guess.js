window.onload = () => {
    const label = document.getElementById("amount");
    label.innerText = Math.floor(Math.random() * (800 - 1) + 1 ) + 1 + "€ sind zu zahlen.";
};
