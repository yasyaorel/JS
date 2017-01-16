if (window.addEventListener) window.addEventListener("load", init);

function init() {

    var forma = document.forms[0];

    forma.elements.login.onchange = validateInput;
    forma.elements.email.onchange = validateInput;
    forma.elements.password.onchange = checkPassword;

    forma.onsubmit = validateForm;

}

function validateInput() {
    var pattern = this.dataset.val,
        msg = this.dataset.valMsg,
        msgId = this.dataset.valMsgId,
        value = this.value;

    var res = value.search(pattern);
    if (res == -1) {
        document.getElementById(msgId).innerHTML = msg;
        this.className = "invalid";
    } else {
        document.getElementById(msgId).innerHTML = "";
        this.className = "valid";
    }
}

function checkPassword() {
    var msgId = this.dataset.valMsgId;
    var password = this.value; // Получаем пароль из формы
    var r_letters = "ЁёЙйЦцУуКкЕеНнГгШшЩщЗзХхЪъФфЫыВвАаПпРрОоЛлДдЖжЭэЯяЧчСсМмИиТтЬьБбЮю"; //Русские буквы
    var s_letters = "qwertyuiopasdfghjklzxcvbnm"; // Буквы в нижнем регистре
    var b_letters = "QWERTYUIOPLKJHGFDSAZXCVBNM"; // Буквы в верхнем регистре
    var digits = "0123456789"; // Цифры
    var specials = "!@#$%^&*()_-+=\|/.,:;[]{}"; // Спецсимволы
    var is_r = false; // Есть ли в пароле русские буквы
    var is_s = false; // Есть ли в пароле буквы в нижнем регистре
    var is_b = false; // Есть ли в пароле буквы в верхнем регистре
    var is_d = false; // Есть ли в пароле цифры
    var is_sp = false; // Есть ли в пароле спецсимволы
    for (var i = 0; i < password.length; i++) {
        /* Проверяем каждый символ пароля на принадлежность к тому или иному типу */

        if (!is_r && r_letters.indexOf(password[i]) != -1) is_r = true;
        if (!is_r) {
            if (!is_s && s_letters.indexOf(password[i]) != -1) is_s = true;
            else if (!is_b && b_letters.indexOf(password[i]) != -1) is_b = true;
            else if (!is_d && digits.indexOf(password[i]) != -1) is_d = true;
            else if (!is_sp && specials.indexOf(password[i]) != -1) is_sp = true;
        }
    }
    var rating = 0;
    var text = "";
    if (is_s) rating++; // Если в пароле есть символы в нижнем регистре, то увеличиваем рейтинг сложности
    if (is_b) rating++; // Если в пароле есть символы в верхнем регистре, то увеличиваем рейтинг сложности
    if (is_d) rating++; // Если в пароле есть цифры, то увеличиваем рейтинг сложности
    if (is_sp) rating++; // Если в пароле есть спецсимволы, то увеличиваем рейтинг сложности
    /* Далее идёт анализ длины пароля и полученного рейтинга, и на основании этого готовится текстовое описание сложности пароля */
    if (password.length == 0) {
        text = "Пароль не введен!";
        this.className = "invalid";
    } else if (is_r) {
        text = "Password не должен содержать русские буквы!";
        this.className = "invalid";
    } else {
        if (password.length < 6 && rating < 3) {
            text = "Простой";
            this.className = "simple";
        } else if (password.length < 6 && rating >= 3) {
            text = "Средний";
            this.className = "middle";
        } else if (password.length >= 8 && rating < 3) {
            text = "Средний";
            this.className = "middle";
        } else if (password.length >= 8 && rating >= 3) {
            text = "Сложный";
            this.className = "hard";
        } else if (password.length >= 6 && rating == 1) {
            text = "Простой";
            this.className = "simple";
        } else if (password.length >= 6 && rating > 1 && rating < 4) {
            text = "Средний";
            this.className = "middle";
        } else if (password.length >= 6 && rating == 4) {
            text = "Сложный";
            this.className = "hard";
        }
    }
    document.getElementById(msgId).innerHTML = text;
}

function validateForm() {

    var invalid = false;

    for (var i = 0; i < this.elements.length; ++i) {
        var e = this.elements[i];
        if (e.type == "text" && e.onchange != null) {
            e.onchange();
            if (e.className == "invalid") invalid = true;
        }
    }

    if (invalid) {
        alert("При заполнении данных были допущены ошибки!");
        return false;
    }
}
