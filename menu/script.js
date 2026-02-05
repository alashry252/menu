document.addEventListener("DOMContentLoaded", () => {
    
    // 1. التعامل مع شاشة التحميل (Loader)
    const loader = document.getElementById('loader');
    const progressBar = document.querySelector('.progress-fill');
    const mainContent = document.getElementById('mainContent');

    // تشغيل شريط التقدم
    setTimeout(() => {
        progressBar.style.width = "100%";
    }, 100);

    // إخفاء الـ Loader وإظهار المحتوى
    setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
        
        // تفعيل أنيميشن ظهور المحتوى
        mainContent.classList.add('show');
    }, 2200); // ينتظر 2.2 ثانية

    // 2. زر المشاركة (Share Button)
    const shareBtn = document.getElementById('shareBtn');
    
    shareBtn.addEventListener('click', async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'منيو المطعم الفاخر',
                    text: 'تصفح قائمة طعامنا المميزة واطلب الآن!',
                    url: window.location.href,
                });
            } catch (err) {
                console.log('Error sharing:', err);
            }
        } else {
            // بديل في حالة عدم دعم المتصفح للمشاركة (نسخ الرابط)
            alert('تم نسخ رابط المنيو! يمكنك إرساله لأصدقائك.');
            navigator.clipboard.writeText(window.location.href);
        }
    });

    // 3. تأثير بسيط عند التمرير (لإخفاء الهيدر قليلاً عند النزول)
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 50) {
            document.querySelector('.app-header').style.opacity = '0.5';
        } else {
            document.querySelector('.app-header').style.opacity = '1';
        }
        lastScroll = currentScroll;
    });
});