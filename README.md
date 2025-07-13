# 🧠 AutoFill List Universal (Modo Home Toggle)

Script Tampermonkey que automatiza o preenchimento de campos com uma lista de itens. Ideal para tarefas repetitivas, como testes ou cadastros.

---

## 🚀 Funcionalidades

- Insira uma lista de códigos em um campo flutuante.
- O script copia automaticamente o item atual para a área de transferência.
- Após colar (`Ctrl+V`), ele avança para o próximo item automaticamente.
- Controle ativado/desativado com a tecla **Home**.
- Apague toda a lista com **Delete**.

---

## ⚙️ Como usar

1. Instale o [Tampermonkey](https://www.tampermonkey.net/) no seu navegador.
2. Ative a opção **"Permitir scripts de usuário"** na página de extensões do Chrome:
    - Vá para `chrome://extensions/`
    - Localize o Tampermonkey
    - Ative a opção **"Permitir scripts de usuário"** (veja a imagem abaixo)
3. Adicione o script [`AutoFill-List-Universal.user.js`](./AutoFill-List-Universal.user.js) ao Tampermonkey.
4. Abra qualquer site com campos de texto.
5. Cole sua lista no campo que aparecerá no canto superior direito da tela.
6. Clique em campos e pressione `Ctrl+V` para preencher automaticamente.

---

## ⌨️ Atalhos

| Tecla     | Ação                                |
|-----------|-------------------------------------|
| `Home`    | Ativa/Desativa modo automático      |
| `Delete`  | Limpa a lista e reinicia o progresso|

---

## 📸 Exemplo visual

![Exemplo da opção ativada no Chrome Extensions](<img width="539" height="839" alt="image" src="https://github.com/user-attachments/assets/4ed75fb2-896c-4e85-9b31-98c944573728" />
)

---

## ⚠️ Segurança

O script **não coleta nem envia dados**. Ele apenas armazena localmente a lista que você colou e o índice atual do item.

> ⚠️ **IMPORTANTE:** Como o Tampermonkey permite scripts personalizados, **tenha cuidado ao instalar scripts de terceiros que você não conhece**.

---

## 🧑‍💻 Autor

Feito por você com ❤️ – sinta-se à vontade para contribuir, abrir issues ou fazer forks.

