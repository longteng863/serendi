// 页面加载完成后执行的函数
document.addEventListener('DOMContentLoaded', function() {
    console.log('奇遇光屿 SERENDI 网站已加载完毕！');

    // 当点击"立即选购"按钮时，弹出一个提示
    const buyButton = document.querySelector('#hero .button');
    if (buyButton) {
        buyButton.addEventListener('click', function(event) {
            event.preventDefault(); // 阻止默认的链接跳转行为
            alert('感谢您的兴趣！我们正在为您准备最美的首饰。');
            // 实际网站会跳转到产品列表页
        });
    }

    // 产品卡片悬停效果
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseover', function() {
            this.style.transition = 'transform 0.3s ease';
        });

        card.addEventListener('click', function() {
            alert('此产品暂未上架详情页，敬请期待！');
        });
    });

    // 表单提交处理
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // 简单的表单验证
            const name = contactForm.querySelector('input[type="text"]').value.trim();
            const email = contactForm.querySelector('input[type="email"]').value.trim();
            const message = contactForm.querySelector('textarea').value.trim();
            
            if (!name || !email || !message) {
                alert('请填写所有必填字段。');
                return;
            }
            
            if (!isValidEmail(email)) {
                alert('请输入有效的邮箱地址。');
                return;
            }
            
            alert('感谢您的留言！我们会尽快与您联系。');
            contactForm.reset();
        });
    }

    // 平滑滚动导航链接
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 页面滚动时更新导航高亮
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.style.color = 'white';
            if (link.getAttribute('href') === '#' + current) {
                link.style.color = '#d4af37';
            }
        });
    });

    // 初始化页面动画 (可选的淡入效果)
    const elements = document.querySelectorAll('.product-card, .stat');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});

// 邮箱验证函数
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// 二维码模态框功能
function initQRModal() {
    const modal = document.getElementById('qr-modal');
    const modalImg = document.getElementById('modal-qr-image');
    const modalText = document.getElementById('modal-qr-text');
    const closeBtn = document.querySelector('.close-modal');
    
    // 为所有二维码图片添加点击事件
    const qrImages = document.querySelectorAll('.qr-image');
    qrImages.forEach(img => {
        img.addEventListener('click', function(e) {
            e.preventDefault();
            const src = this.getAttribute('src');
            const alt = this.getAttribute('alt');
            
            modalImg.src = src;
            modalText.textContent = alt;
            modal.style.display = 'block';
            
            // 防止背景滚动
            document.body.style.overflow = 'hidden';
        });
    });
    
    // 关闭模态框
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // 点击模态框背景关闭
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // ESC键关闭
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// 初始化二维码模态框
initQRModal();
