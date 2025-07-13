// ==UserScript==
// @name         AutoFill List Universal (Modo Home Toggle)
// @namespace    http://tampermonkey.net/
// @version      3.1
// @description  Copia automaticamente itens para a área de transferência e avança para o próximo após a colagem, garantindo sequência correta
// @author       C9
// @include      *
// @grant        GM_setClipboard
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// ==/UserScript==

(function() {
    'use strict';

    let inputField = document.createElement("textarea");
    inputField.style.position = "fixed";
    inputField.style.top = "10px";
    inputField.style.right = "10px";
    inputField.style.width = "200px";
    inputField.style.height = "100px";
    inputField.style.zIndex = "10000";
    inputField.placeholder = "Cole os códigos aqui separados por quebra de linha ou tabulação...";
    document.body.appendChild(inputField);

    let items = GM_getValue("savedItems", []);
    let currentIndex = GM_getValue("currentIndex", 0);
    let autofillEnabled = true;
    let listCompleted = false;

    inputField.value = items.join("\n");

    inputField.addEventListener("input", function() {
        items = inputField.value.split(/\n|\t/).map(item => item.trim());
        GM_setValue("savedItems", items);
        currentIndex = 0;
        listCompleted = false;
        GM_setValue("currentIndex", currentIndex);
    });

    document.addEventListener("keydown", function(event) {
        if (event.key === "Home") {
            autofillEnabled = !autofillEnabled;
            alert(`Modo de preenchimento automático: ${autofillEnabled ? "ATIVADO" : "DESATIVADO"}`);
        } else if (event.key === "Delete") {
            GM_deleteValue("savedItems");
            GM_deleteValue("currentIndex");
            items = [];
            currentIndex = 0;
            inputField.value = "";
            alert("Lista de itens apagada!");
        }
    });

    document.addEventListener("click", function(event) {
        if (autofillEnabled && !listCompleted) {
            let activeElement = document.activeElement;
            if (activeElement.tagName === "INPUT" || activeElement.tagName === "TEXTAREA") {
                if (items.length > 0 && currentIndex < items.length) {
                    GM_setClipboard(items[currentIndex]); // Copia apenas o item atual
                }
            }
        }
    });

    document.addEventListener("paste", function(event) {
        if (autofillEnabled && !listCompleted) {
            if (items.length > 0 && currentIndex < items.length) {
                currentIndex++; // Avança para o próximo item após a colagem
                GM_setValue("currentIndex", currentIndex);
                if (currentIndex < items.length) {
                    GM_setClipboard(items[currentIndex]); // Prepara o próximo valor
                } else {
                    listCompleted = true;
                }
            }
        }
    });

})();
