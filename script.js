const data = {
    "8.8": {
        12: { limite: 640, section: 84.3 },
        14: { limite: 640, section: 115 },
        16: { limite: 640, section: 157 },
        18: { limite: 640, section: 192 },
        20: { limite: 640, section: 245 },
        22: { limite: 640, section: 303 },
        24: { limite: 640, section: 353 },
        27: { limite: 640, section: 459 },
        30: { limite: 640, section: 561 },
    },
    "10.9": {
        12: { limite: 900, section: 84.3 },
        14: { limite: 900, section: 115 },
        16: { limite: 900, section: 157 },
        18: { limite: 900, section: 192 },
        20: { limite: 900, section: 245 },
        22: { limite: 900, section: 303 },
        24: { limite: 900, section: 353 },
        27: { limite: 900, section: 459 },
        30: { limite: 900, section: 561 },
    }
};

let currentType = "";

function updateType() {
    currentType = document.getElementById("type").value;
    updateValues();
}

function updateValues() {
    const diametre = document.getElementById("diametre").value;
    if (currentType && diametre) {
        const { limite, section } = data[currentType][diametre] || {};
        document.getElementById("limite").value = limite || "";
        document.getElementById("section").value = section || "";
    } else {
        document.getElementById("limite").value = "";
        document.getElementById("section").value = "";
    }
}

function calculate() {
    const diametre = document.getElementById("diametre").value;
    const k = parseFloat(document.getElementById("k").value);
    const limite = parseFloat(document.getElementById("limite").value);
    const section = parseFloat(document.getElementById("section").value);

    if (!diametre || !k || isNaN(limite) || isNaN(section)) {
        alert("Veuillez remplir tous les champs correctement.");
        return;
    }

    const precontrainte = 0.8 * limite * section;
    document.getElementById("precontrainte").value = precontrainte.toFixed(2);

    const couple = 0.88 * k * diametre * limite * section * 1e-3;
    document.getElementById("couple").value = couple.toFixed(2);
}
