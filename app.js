document.addEventListener('DOMContentLoaded', function() {
    const newsList = document.querySelector('.news-list');
    
    // نمایش مستقیم اخبار بدون نیاز به کلیک
    const sampleNews = [
        '🔥 قیمت دلار امروز در بازار آزاد',
        '📈 اعلام نتایج نهایی کنکور ۱۴۰۵',
        '⚠️ هشدار سطح نارنجی هواشناسی',
        '🏛️ نشست خبری سخنگوی دولت',
        '📊 نرخ بیکاری در کشور کاهش یافت'
    ];
    
    newsList.innerHTML = sampleNews.map(item => `<li>${item}</li>`).join('');

    // دکمه‌های ایران و جهان (با داده‌های بیشتر)
    document.querySelectorAll('.tabs button').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.tabs button').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const iranNews = [
                '🔥 قیمت دلار امروز در بازار آزاد',
                '📈 اعلام نتایج نهایی کنکور ۱۴۰۵',
                '⚠️ هشدار سطح نارنجی هواشناسی برای تهران',
                '🏛️ نشست خبری سخنگوی دولت',
                '📊 نرخ بیکاری در کشور کاهش یافت'
            ];
            const worldNews = [
                '🌍 نشست اضطراری شورای امنیت درباره غزه',
                '📈 افزایش قیمت نفت در بازارهای جهانی',
                '⚠️ هشدار سازمان بهداشت درباره آبله میمون',
                '🏛️ انتخابات ریاست‌جمهوری در فرانسه',
                '📊 گزارش جدید از وضعیت اقتصاد چین'
            ];
            
            const news = this.textContent.includes('ایران') ? iranNews : worldNews;
            newsList.innerHTML = news.map(item => `<li>${item}</li>`).join('');
        });
    });

    alert('✅ امیرخوان با اخبار آماده شد!');
});
