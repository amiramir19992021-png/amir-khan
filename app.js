document.addEventListener('DOMContentLoaded', function() {
    // پیدا کردن دکمه و جعبه متن
    const analyzeBtn = document.querySelector('.analysis button');
    const textInput = document.querySelector('.analysis textarea');

    // وقتی دکمه کلیک شد
    analyzeBtn.addEventListener('click', function() {
        const text = textInput.value.trim();
        if (text === '') {
            alert('⚠️ لطفاً یک متن وارد کن.');
            return;
        }
        alert('✅ تحلیل انجام شد! متن: ' + text);
    });
});
