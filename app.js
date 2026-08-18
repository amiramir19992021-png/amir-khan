// ============================
// امیرخوان - نسخه اول
// تمام قابلیت‌های تعاملی
// ============================

// منتظر بارگذاری کامل صفحه
document.addEventListener('DOMContentLoaded', function() {

    // ---------- ۱. دکمه تحلیل خبر ----------
    const analyzeBtn = document.querySelector('.analysis button');
    const textarea = document.querySelector('.analysis textarea');

    if (analyzeBtn && textarea) {
        analyzeBtn.addEventListener('click', function() {
            const text = textarea.value.trim();

            if (text === '') {
                alert('⚠️ لطفاً یک لینک یا متن خبر وارد کن.');
                return;
            }

            // نمایش پیام موقت
            const originalText = analyzeBtn.textContent;
            analyzeBtn.textContent = '⏳ در حال تحلیل...';
            analyzeBtn.style.opacity = '0.7';

            setTimeout(() => {
                alert('✅ خبر دریافت شد! به زودی قابلیت تحلیل هوشمند اضافه می‌شود.');
                analyzeBtn.textContent = originalText;
                analyzeBtn.style.opacity = '1';
                textarea.value = '';
            }, 1500);
        });
    }

    // ---------- ۲. دکمه‌های رادار خبری (ایران / جهان) ----------
    const tabs = document.querySelectorAll('.tabs button');
    const newsList = document.querySelector('.news-list');

    if (tabs.length && newsList) {
        // داده‌های نمونه برای هر دسته
        const newsData = {
            'ایران': [
                '🔥 افزایش قیمت دلار و تأثیر بر بازار',
                '📈 اعلام نتایج نهایی کنکور سراسری',
                '⚠️ هشدار هواشناسی برای استان‌های شمالی',
                '🏛️ جلسه غیرعلنی مجلس و سوال از وزیر',
                '📊 گزارش جدید از وضعیت اشتغال کشور'
            ],
            'جهان': [
                '🌍 تنش‌های جدید در مرزهای اوکراین',
                '📈 قیمت نفت به بالاترین سطح در ۳ ماه',
                '⚠️ هشدار سازمان بهداشت درباره بیماری جدید',
                '🏛️ انتخابات ریاست‌جمهوری در فرانسه',
                '📊 رشد اقتصادی چین کمتر از پیش‌بینی'
            ]
        };

        tabs.forEach(button => {
            button.addEventListener('click', function() {
                // تغییر کلاس فعال
                tabs.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                // دریافت دسته‌بندی
                const category = this.textContent.trim();
                const items = newsData[category] || ['📭 خبری برای نمایش وجود ندارد.'];

                // به‌روزرسانی لیست با افکت
                newsList.style.opacity = '0.4';
                setTimeout(() => {
                    newsList.innerHTML = items.map(item => `<li>${item}</li>`).join('');
                    newsList.style.opacity = '1';
                }, 200);
            });
        });
    }

    // ---------- ۳. دکمه‌های ابزارها ----------
    const toolButtons = document.querySelectorAll('.tools button');

    toolButtons.forEach(button => {
        button.addEventListener('click', function() {
            const toolName = this.textContent.trim();
            alert(`🔧 ابزار "${toolName}" به زودی در امیرخوان فعال می‌شود.`);
        });
    });

    // ---------- ۴. پیام خوش‌آمدگویی در کنسول ----------
    console.log('🧠 امیرخوان با موفقیت بارگذاری شد!');
    console.log('📡 منتظر قابلیت‌های جدید باشید.');
});
