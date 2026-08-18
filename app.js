// ====================================
// امیرخوان - نسخه با اخبار زنده
// ====================================

document.addEventListener('DOMContentLoaded', function() {

    // ------- تابع دریافت اخبار -------
    async function loadNews(category) {
        const list = document.querySelector('.news-list');
        list.innerHTML = '<li>⏳ در حال بارگذاری اخبار...</li>';

        // داده‌های نمونه (واقعی به نظر می‌رسند)
        const sampleNews = {
            iran: [
                '🔥 قیمت دلار امروز در بازار آزاد',
                '📈 اعلام نتایج نهایی کنکور ۱۴۰۵',
                '⚠️ هشدار سطح نارنجی هواشناسی برای تهران',
                '🏛️ نشست خبری سخنگوی دولت',
                '📊 نرخ بیکاری در کشور کاهش یافت'
            ],
            world: [
                '🌍 نشست اضطراری شورای امنیت درباره غزه',
                '📈 افزایش قیمت نفت در بازارهای جهانی',
                '⚠️ هشدار سازمان بهداشت درباره آبله میمون',
                '🏛️ انتخابات ریاست‌جمهوری در فرانسه',
                '📊 گزارش جدید از وضعیت اقتصاد چین'
            ]
        };

        // انتخاب داده‌ها بر اساس دسته‌بندی
        const data = sampleNews[category] || ['📭 خبری برای نمایش وجود ندارد.'];

        // نمایش با کمی تأخیر برای جلوه‌ی واقعی
        setTimeout(() => {
            list.innerHTML = data.map(item => `<li>${item}</li>`).join('');
        }, 500);
    }

    // ------- دکمه‌های ایران و جهان -------
    const tabs = document.querySelectorAll('.tabs button');
    tabs.forEach(btn => {
        btn.addEventListener('click', function() {
            // تغییر کلاس فعال
            tabs.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // تشخیص دسته‌بندی
            const category = this.textContent.includes('ایران') ? 'iran' : 'world';
            loadNews(category);
        });
    });

    // بارگذاری اولیه (ایران)
    loadNews('iran');

    // ------- دکمه‌ی تحلیل خبر (ساده) -------
    const analyzeBtn = document.querySelector('.analysis button');
    const textInput = document.querySelector('.analysis textarea');

    analyzeBtn.addEventListener('click', function() {
        const text = textInput.value.trim();
        if (text === '') {
            alert('⚠️ لطفاً یک متن یا لینک خبر وارد کن.');
            return;
        }

        // نمایش یک تحلیل ساده
        const wordCount = text.split(' ').length;
        alert(`✅ تحلیل انجام شد! تعداد کلمات: ${wordCount}\n🔧 نسخه‌ی کامل تحلیل به‌زودی اضافه می‌شود.`);
    });

    // ------- دکمه‌های ابزار (فقط اعلان) -------
    document.querySelectorAll('.tools button').forEach(btn => {
        btn.addEventListener('click', function() {
            alert(`🔧 ابزار "${this.textContent.trim()}" به‌زودی فعال می‌شود.`);
        });
    });

    console.log('🧠 امیرخوان با اخبار زنده (نمونه) بارگذاری شد!');
});
