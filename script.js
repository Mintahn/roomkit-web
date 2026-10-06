// KITS DATA (Universal Builder)
const KITS = [
    {
        id: 'kit-bedroom',
        name: 'KIT PHÒNG NGỦ',
        desc: 'Không gian nghỉ ngơi thư giãn với đầy đủ chăn, ga, gối và các tiện ích nhỏ gọn.',
        image: 'assets/images/kit-new.jpg',
        badge: 'Cơ bản',
        isCustom: true,
        basePrice: 0,
        discountPercent: 10,
        categories: [
            { id: 'all', name: 'Tất cả' },
            { id: 'dongu', name: 'Đồ Ngủ' },
            { id: 'tienich', name: 'Tiện Ích' },
            { id: 'luutru', name: 'Gọn Gàng' },
            { id: 'canhan', name: 'Cá Nhân' }
        ],
        requiredGroups: ['dongu'],
        products: [
            { id: 'kb1', name: 'Gối ngủ cao cấp', price: 79000, desc: 'Đệm đầu cơ bản.', image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=200&q=80', group: 'dongu' },
            { id: 'kb2', name: 'Ga giường chun 1m2', price: 120000, desc: 'Ga chun bọc đệm.', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=200&q=80', group: 'dongu' },
            { id: 'kb3', name: 'Chăn hè thu', price: 150000, desc: 'Chất liệu cotton thoáng mát.', image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=200&q=80', group: 'dongu' },
            { id: 'kb4', name: 'Đèn ngủ LED', price: 85000, desc: 'Ánh sáng ấm.', image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=200&q=80', group: 'tienich' },
            { id: 'kb5', name: 'Gương mini để bàn', price: 40000, desc: 'Phong cách Hàn Quốc.', image: 'https://images.unsplash.com/photo-1618220179428-22790b46a0eb?w=200&q=80', group: 'canhan' },
            { id: 'kb6', name: 'Hộp lưu trữ có nắp', price: 75000, desc: 'Ngăn nắp tủ quần áo.', image: 'https://images.unsplash.com/photo-1587843846617-1f4865e9ab84?w=200&q=80', group: 'luutru' },
            { id: 'kb7', name: 'Túi đựng đồ cá nhân', price: 65000, desc: 'Đựng mỹ phẩm.', image: 'https://images.unsplash.com/photo-1590209637841-86fc36e63789?w=200&q=80', group: 'canhan' }
        ]
    },
    {
        id: 'kit-study',
        name: 'KIT GÓC HỌC TẬP',
        desc: 'Tối ưu không gian học tập và làm việc với đầy đủ vật dụng bảo vệ mắt và sắp xếp bàn học gọn gàng.',
        image: 'assets/images/kit-study.jpg',
        badge: 'Bán chạy',
        isCustom: true,
        basePrice: 0,
        discountPercent: 12,
        categories: [
            { id: 'all', name: 'Tất cả' },
            { id: 'banhoc', name: 'Bàn Học' },
            { id: 'chieusang', name: 'Chiếu Sáng' },
            { id: 'phukien', name: 'Phụ Kiện' }
        ],
        requiredGroups: ['chieusang', 'banhoc'],
        products: [
            { id: 'ks1', name: 'Đèn bàn học chống cận', price: 185000, desc: 'Ánh sáng vàng.', image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=200&q=80', group: 'chieusang' },
            { id: 'ks2', name: 'Hộp cắm bút', price: 35000, desc: 'Để đồ dùng học tập.', image: 'https://images.unsplash.com/photo-1591871987541-698f12d5dfeb?w=200&q=80', group: 'banhoc' },
            { id: 'ks3', name: 'Khay để tài liệu A4', price: 85000, desc: 'Khay xếp tầng.', image: 'https://images.unsplash.com/photo-1587843846617-1f4865e9ab84?w=200&q=80', group: 'banhoc' },
            { id: 'ks4', name: 'Kệ mini để bàn', price: 120000, desc: 'Tối ưu không gian.', image: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=200&q=80', group: 'phukien' },
            { id: 'ks5', name: 'Mouse pad khổ lớn', price: 65000, desc: 'Lót chuột êm ái.', image: 'https://images.unsplash.com/photo-1610223067676-cb8798e1694d?w=200&q=80', group: 'phukien' },
            { id: 'ks6', name: 'Giá đỡ điện thoại', price: 45000, desc: 'Nhỏ gọn tiện lợi.', image: 'https://images.unsplash.com/photo-1589923158776-cb4485d99fd6?w=200&q=80', group: 'phukien' }
        ]
    },
    {
        id: 'kit-kitchen',
        name: 'KIT BẾP NHỎ',
        desc: 'Trọn bộ đồ dùng nấu nướng và bảo quản thực phẩm tinh gọn, an toàn và dễ vệ sinh cho góc bếp trọ.',
        image: 'assets/images/kit-kitchen.jpg',
        badge: 'Thiết yếu',
        isCustom: true,
        basePrice: 0,
        discountPercent: 15,
        categories: [
            { id: 'all', name: 'Tất cả' },
            { id: 'anuong', name: 'Ăn Uống' },
            { id: 'luutru', name: 'Lưu Trữ' },
            { id: 'dungcu', name: 'Dụng Cụ' }
        ],
        requiredGroups: ['anuong'],
        products: [
            { id: 'kk1', name: 'Bộ 2 ly thủy tinh', price: 55000, desc: 'Chịu nhiệt tốt.', image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=200&q=80', group: 'anuong' },
            { id: 'kk2', name: 'Hộp thủy tinh đựng thực phẩm', price: 89000, desc: 'Nắp gỗ sang trọng.', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=200&q=80', group: 'luutru' },
            { id: 'kk3', name: 'Bộ muỗng đũa gỗ', price: 45000, desc: 'Phong cách tối giản.', image: 'https://images.unsplash.com/photo-1591871987541-698f12d5dfeb?w=200&q=80', group: 'anuong' },
            { id: 'kk4', name: 'Thớt gỗ kháng khuẩn', price: 110000, desc: 'Dễ vệ sinh.', image: 'https://images.unsplash.com/photo-1587843846617-1f4865e9ab84?w=200&q=80', group: 'dungcu' },
            { id: 'kk5', name: 'Giá úp chén đĩa mini', price: 135000, desc: 'Kèm khay ráo nước.', image: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=200&q=80', group: 'luutru' },
            { id: 'kk6', name: 'Bộ dao gọt mini', price: 65000, desc: 'Sắc bén tiện lợi.', image: 'https://images.unsplash.com/photo-1589923158776-cb4485d99fd6?w=200&q=80', group: 'dungcu' }
        ]
    },
    {
        id: 'kit-organize',
        name: 'KIT PHÒNG GỌN',
        desc: 'Giải pháp phân loại và lưu trữ thông minh, biến phòng trọ nhỏ trở nên thoáng đãng gấp đôi.',
        image: 'assets/images/kit-organize.jpg',
        badge: 'Phổ biến',
        isCustom: true,
        basePrice: 0,
        discountPercent: 10,
        categories: [
            { id: 'all', name: 'Tất cả' },
            { id: 'tu', name: 'Tủ Quần Áo' },
            { id: 'treo', name: 'Treo Đồ' }
        ],
        requiredGroups: ['tu', 'treo'],
        products: [
            { id: 'ko1', name: 'Hộp vải đựng quần áo', price: 75000, desc: 'Có nắp đậy.', image: 'https://images.unsplash.com/photo-1587843846617-1f4865e9ab84?w=200&q=80', group: 'tu' },
            { id: 'ko2', name: 'Túi vải treo tường', price: 65000, desc: 'Đa ngăn tiện ích.', image: 'https://images.unsplash.com/photo-1610223067676-cb8798e1694d?w=200&q=80', group: 'treo' },
            { id: 'ko3', name: 'Móc dán tường chịu lực', price: 25000, desc: 'Không cần khoan tường.', image: 'https://images.unsplash.com/photo-1589923158776-cb4485d99fd6?w=200&q=80', group: 'treo' },
            { id: 'ko4', name: 'Móc quần áo tiết kiệm diện tích', price: 45000, desc: 'Treo được 5 quần.', image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=200&q=80', group: 'tu' },
            { id: 'ko5', name: 'Khay chia ngăn kéo', price: 55000, desc: 'Đựng đồ lót, tất.', image: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=200&q=80', group: 'tu' }
        ]
    },
    {
        id: 'kit-new',
        name: 'KIT PHÒNG MỚI',
        desc: 'Dành riêng cho bạn vừa chuyển đến phòng mới, gồm đủ tất cả những vật dụng sinh hoạt cốt lõi.',
        image: 'assets/images/kit-new.jpg',
        badge: 'Khuyên dùng',
        isCustom: true,
        basePrice: 0,
        discountPercent: 15,
        categories: [
            { id: 'all', name: 'Tất cả' },
            { id: 'dongu', name: 'Giấc Ngủ' },
            { id: 'vesinh', name: 'Vệ Sinh' },
            { id: 'tienich', name: 'Tiện Ích' }
        ],
        requiredGroups: ['dongu', 'vesinh'],
        products: [
            { id: 'kn1', name: 'Bộ ga gối cotton', price: 180000, desc: 'Thoáng mát.', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=200&q=80', group: 'dongu' },
            { id: 'kn2', name: 'Giỏ mây đựng đồ giặt', price: 150000, desc: 'Gọn gàng phong cách.', image: 'https://images.unsplash.com/photo-1610223067676-cb8798e1694d?w=200&q=80', group: 'tienich' },
            { id: 'kn3', name: 'Dép đi trong nhà', price: 55000, desc: 'Chống trơn trượt.', image: 'https://images.unsplash.com/photo-1589923158776-cb4485d99fd6?w=200&q=80', group: 'tienich' },
            { id: 'kn4', name: 'Khăn tắm cao cấp', price: 75000, desc: 'Mềm mại thấm hút.', image: 'https://images.unsplash.com/photo-1616867664654-21950e304b46?w=200&q=80', group: 'vesinh' },
            { id: 'kn5', name: 'Khay để bàn chải', price: 45000, desc: 'Kèm cốc thủy tinh.', image: 'https://images.unsplash.com/photo-1590209637841-86fc36e63789?w=200&q=80', group: 'vesinh' }
        ]
    }
];

// Dynamically inject derived values so render logic is seamless
KITS.forEach(kit => {
    kit.price = kit.basePrice + kit.products.reduce((sum, p) => sum + p.price, 0) * (1 - kit.discountPercent / 100);
    kit.originalPrice = kit.basePrice + kit.products.reduce((sum, p) => sum + p.price, 0);
    kit.itemsCount = 'Tùy chỉnh';
});

const FAQS = [
    {
        q: 'ROOMKIT bán những sản phẩm gì?',
        a: 'ROOMKIT chuyên cung cấp các bộ giải pháp (KIT) đồ dùng, trang trí và lưu trữ thiết yếu được tuyển chọn bài bản cho phòng trọ sinh viên và người trẻ.'
    },
    {
        q: 'Mua theo KIT khác gì so với mua từng món riêng lẻ?',
        a: 'Mua theo KIT giúp bạn tiết kiệm đến 30% chi phí so với mua lẻ, đồng thời không phải mất nhiều ngày tìm kiếm, lựa chọn và đảm bảo các món đồ đồng bộ về phong cách.'
    },
    {
        q: 'ROOMKIT có giao hàng tận phòng trọ không?',
        a: 'ROOMKIT hỗ trợ giao hàng tận nơi trên toàn quốc, đặc biệt có dịch vụ giao nhanh 2 giờ tại TP.HCM và Hà Nội, hỗ trợ mang tận phòng theo yêu cầu.'
    },
    {
        q: 'Chính sách đổi trả của ROOMKIT như thế nào?',
        a: 'ROOMKIT áp dụng chính sách 1 đổi 1 trong vòng 7 ngày hoàn toàn miễn phí nếu sản phẩm gặp lỗi sản xuất hoặc không đúng với mô tả trên trang web.'
    },
    {
        q: 'Tôi có thể thanh toán khi nhận hàng (COD) không?',
        a: 'Có. Bạn hoàn toàn có thể kiểm tra hàng trước khi thanh toán tiền mặt cho nhân viên giao hàng hoặc chuyển khoản ngân hàng trực tiếp.'
    }
];

// STATE
let cart = [];
let currentModalKitId = null;
let modalQuantity = 1;

let builderState = {
    kitId: null,
    cartItemId: null,
    selections: {},
    currentFilter: 'all',
    searchQuery: ''
};

// FORMATTER
const formatPrice = (price) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);



// INIT
document.addEventListener('DOMContentLoaded', () => {
    initLenis();
    renderKits();
    renderFAQs();

    // GSAP setup
    gsap.registerPlugin(ScrollTrigger);

    initPreloader();
    initCustomCursor();
    initMagneticButtons();
    initBeforeAfter();
    initCartDrawer();
    initModals();
    initCheckoutForm();
    initMobileMenu();
    initHeaderScroll();
    loadCartState();
    initShopAndSearch();
    initKitBuilder();
    initTrackingModal();
});

// LENIS SMOOTH SCROLL
function initLenis() {
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
}

// PRELOADER & HERO ANIMATION
function initPreloader() {
    const tl = gsap.timeline();
    let progress = { val: 0 };

    tl.to('.loader-text', { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 0.8, ease: 'power4.out' })
        .to(progress, {
            val: 100,
            duration: 1.2,
            ease: 'power2.inOut',
            onUpdate: () => {
                document.getElementById('loader-bar').style.width = progress.val + '%';
                document.getElementById('loader-percent').textContent = Math.floor(progress.val) + '%';
            }
        })
        .to('#preloader', { yPercent: -100, duration: 0.8, ease: 'power4.inOut', delay: 0.1 })
        .add(() => {
            document.getElementById('preloader').style.display = 'none';
            initHeroAnimations();
            initScrollAnimations();
        });
}

// HERO ANIMATIONS
function initHeroAnimations() {
    const heroTitle = new SplitType('.hero-title', { types: 'lines,words,chars' });
    const tl = gsap.timeline();

    tl.from('header', { y: -50, opacity: 0, duration: 0.8, ease: 'power3.out' })
        .to('.hero-eyebrow > div', { y: 0, duration: 0.6, ease: 'power4.out' }, '-=0.4')
        .from(heroTitle.chars, {
            y: '100%',
            rotationZ: 10,
            opacity: 0,
            stagger: 0.02,
            duration: 0.8,
            ease: 'power4.out'
        }, '-=0.4')
        .from('.hero-desc', { opacity: 0, y: 20, duration: 0.8, ease: 'power3.out' }, '-=0.4')
        .from('.hero-ctas > a', { y: 30, opacity: 0, stagger: 0.1, duration: 0.7, ease: 'back.out(1.7)' }, '-=0.4')
        .to('.hero-main-img', { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 1.2, ease: 'power4.inOut' }, '-=0.8')
        .from('.float-badge-1', { x: 50, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')
        .from('.float-badge-2', { x: -50, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
        .to('.hero-scroll', { opacity: 1, duration: 0.8 }, '-=0.4');

    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;

        gsap.utils.toArray('.parallax-shape').forEach(shape => {
            const speed = shape.getAttribute('data-speed');
            gsap.to(shape, {
                x: x * 100 * speed,
                y: y * 100 * speed,
                duration: 1,
                ease: 'power2.out'
            });
        });
    });
}

// SCROLL ANIMATIONS
function initScrollAnimations() {
    new SplitType('.split-text', { types: 'lines,words' });

    gsap.utils.toArray('.split-text').forEach(text => {
        const lines = text.querySelectorAll('.line');
        gsap.from(lines, {
            scrollTrigger: {
                trigger: text,
                start: 'top 85%',
            },
            y: 40,
            opacity: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: 'power3.out'
        });
    });

    gsap.utils.toArray('.gsap-stagger-group').forEach(group => {
        const items = group.querySelectorAll('.gsap-stagger-item');
        gsap.from(items, {
            scrollTrigger: { trigger: group, start: 'top 80%' },
            y: 50, opacity: 0, stagger: 0.1, duration: 0.8, ease: 'back.out(1.2)'
        });
    });

    gsap.utils.toArray('.gsap-scale-up').forEach(el => {
        gsap.from(el, {
            scrollTrigger: { trigger: el, start: 'top 85%' },
            scale: 0.9, y: 50, opacity: 0, duration: 1, ease: 'power4.out'
        });
    });

    gsap.to('#hero-bg-img', {
        scrollTrigger: {
            trigger: '#hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        },
        yPercent: 30,
        scale: 1
    });

    gsap.utils.toArray('.counter').forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-target'));
        gsap.to(counter, {
            scrollTrigger: { trigger: counter, start: 'top 90%' },
            innerHTML: target,
            duration: 1.8,
            snap: { innerHTML: target % 1 === 0 ? 1 : 0.1 },
            ease: 'power2.out',
            onUpdate: function () {
                if (target % 1 !== 0) counter.innerHTML = parseFloat(this.targets()[0].innerHTML).toFixed(1);
            }
        });
    });

    const cards = gsap.utils.toArray('.kit-card');
    gsap.from(cards, {
        scrollTrigger: { trigger: '#kit-grid', start: 'top 75%' },
        y: 80, opacity: 0, stagger: 0.15, duration: 1, ease: 'power4.out'
    });
}

// CUSTOM CURSOR
function initCustomCursor() {
    const cursor = document.getElementById('custom-cursor');
    const follower = document.getElementById('cursor-follower');
    if (!cursor || !follower) return;

    let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    });

    gsap.ticker.add(() => {
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;
        follower.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
    });

    document.querySelectorAll('a, button, .hover-target').forEach(el => {
        el.addEventListener('mouseenter', () => {
            const text = el.getAttribute('data-cursor');
            if (text) {
                cursor.textContent = text;
                cursor.classList.add('active');
                follower.style.borderColor = 'transparent';
            } else {
                follower.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%) scale(1.5)`;
                follower.style.backgroundColor = 'rgba(242, 140, 82, 0.1)';
            }
        });

        el.addEventListener('mouseleave', () => {
            cursor.textContent = '';
            cursor.classList.remove('active');
            follower.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%) scale(1)`;
            follower.style.backgroundColor = 'transparent';
            follower.style.borderColor = '#F28C52';
        });
    });
}

// MAGNETIC BUTTONS
function initMagneticButtons() {
    document.querySelectorAll('.magnetic-btn').forEach(btn => {
        const text = btn.querySelector('.magnetic-text');

        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.5, ease: 'power2.out' });
            if (text) gsap.to(text, { x: x * 0.15, y: y * 0.15, duration: 0.5, ease: 'power2.out' });
        });

        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
            if (text) gsap.to(text, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
        });
    });
}

// RENDER KITS
function renderKits() {
    const grid = document.getElementById('kit-grid');
    if (!grid) return;

    let html = '';
    KITS.slice(0, 5).forEach((kit) => {
        html += `
        <div class="kit-card bg-white text-primary rounded-[2rem] overflow-hidden group hover-target flex flex-col shadow-xl cursor-pointer" data-cursor="VIEW" onclick="openProductModal('${kit.id}')">
            <div class="relative overflow-hidden aspect-[4/3] kit-card-image-wrapper">
                <img src="${kit.image}" alt="${kit.name}" class="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)]">
                <div class="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-500"></div>
                <div class="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-xl text-xs font-bold text-primary flex items-center gap-1.5 shadow-sm">
                    <i class="ph-fill ph-package text-accent"></i> ${kit.itemsCount} món thiết yếu
                </div>
                <div class="absolute top-4 right-4 bg-primary/90 text-white backdrop-blur-sm px-3 py-1 rounded-xl text-xs font-semibold">
                    ${kit.badge}
                </div>
                <div class="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] text-primary shadow-lg">
                    <i class="ph-bold ph-arrow-up-right text-xl"></i>
                </div>
            </div>
            <div class="p-8 flex flex-col flex-1">
                <h3 class="font-extrabold text-xl md:text-2xl mb-2 text-primary group-hover:text-accent transition-colors">${kit.name}</h3>
                <p class="text-textmuted mb-6 flex-1 line-clamp-2 leading-relaxed">${kit.desc}</p>
                <div class="flex items-center justify-between border-t border-gray-100 pt-6">
                    <div>
                        <div class="text-sm text-textmuted line-through mb-0.5">${formatPrice(kit.originalPrice)}</div>
                        <div class="font-extrabold text-xl md:text-2xl text-primary flex items-center gap-2">
                            ${formatPrice(kit.price)} 
                            <span class="bg-softgreen text-primary px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider">Tiết kiệm</span>
                        </div>
                    </div>
                    ${kit.isCustom ?
                `<button class="bg-primary text-white px-4 h-10 rounded-xl flex items-center justify-center hover:bg-accent transition-colors shadow-md text-sm font-bold gap-2"><i class="ph-bold ph-magic-wand"></i> TỰ TẠO</button>`
                :
                `<button class="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-accent transition-colors shadow-md"><i class="ph-bold ph-plus text-lg"></i></button>`
            }
                </div>
            </div>
        </div>
        `;
    });
    grid.innerHTML = html;
}

// BEFORE/AFTER SLIDER
function initBeforeAfter() {
    const container = document.getElementById('ba-container');
    const slider = document.getElementById('ba-slider');
    const afterImg = document.getElementById('ba-after');
    if (!container || !slider || !afterImg) return;

    let isDown = false;

    const move = (clientX) => {
        const rect = container.getBoundingClientRect();
        let x = clientX - rect.left;
        if (x < 0) x = 0;
        if (x > rect.width) x = rect.width;
        const percentage = (x / rect.width) * 100;
        gsap.to(slider, { left: `${percentage}%`, duration: 0.1 });
        gsap.to(afterImg, { clipPath: `polygon(${percentage}% 0, 100% 0, 100% 100%, ${percentage}% 100%)`, duration: 0.1 });
    };

    container.addEventListener('mousedown', (e) => { isDown = true; move(e.clientX); });
    window.addEventListener('mouseup', () => isDown = false);
    window.addEventListener('mousemove', (e) => { if (isDown) move(e.clientX); });
    container.addEventListener('touchstart', (e) => { isDown = true; move(e.touches[0].clientX); }, { passive: true });
    window.addEventListener('touchend', () => isDown = false);
    window.addEventListener('touchmove', (e) => { if (isDown) move(e.touches[0].clientX); }, { passive: true });
}

// FAQ Accordion
function renderFAQs() {
    const container = document.getElementById('faq-container');
    if (!container) return;

    let html = '';
    FAQS.forEach((faq) => {
        html += `
            <div class="border-b border-gray-200 faq-item group">
                <button class="w-full py-6 text-left flex justify-between items-center font-bold text-lg md:text-xl text-primary hover-target" onclick="toggleFaq(this)">
                    <span>${faq.q}</span>
                    <div class="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <i class="ph-bold ph-plus transition-transform duration-500 faq-icon"></i>
                    </div>
                </button>
                <div class="faq-content">
                    <div><p class="pb-6 text-textmuted text-base leading-relaxed">${faq.a}</p></div>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function toggleFaq(btn) {
    const item = btn.closest('.faq-item');
    const icon = item.querySelector('.faq-icon');
    const isActive = item.classList.contains('faq-active');

    document.querySelectorAll('.faq-item').forEach(el => {
        el.classList.remove('faq-active');
        el.querySelector('.faq-icon').classList.remove('rotate-45');
    });

    if (!isActive) {
        item.classList.add('faq-active');
        icon.classList.add('rotate-45');
    }
}

// CART & MODALS
function initCartDrawer() {
    document.querySelectorAll('#cart-btn, #mobile-cart-btn').forEach(btn => btn.addEventListener('click', () => {
        document.getElementById('cart-drawer-overlay').classList.remove('hidden');
        document.getElementById('cart-drawer').classList.remove('translate-x-full');
        renderCartItems();
    }));

    document.querySelectorAll('#close-cart-btn, #cart-drawer-overlay').forEach(btn => btn.addEventListener('click', closeCart));

    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            closeCart();
            openCheckout();
        });
    }
}

function closeCart() {
    document.getElementById('cart-drawer').classList.add('translate-x-full');
    setTimeout(() => document.getElementById('cart-drawer-overlay').classList.add('hidden'), 500);
}

function initModals() {
    document.querySelectorAll('.modal-overlay, .modal-close').forEach(el => el.addEventListener('click', closeModal));
}

window.openProductModal = function (id) {
    const kit = KITS.find(k => k.id === id);
    if (!kit) return;
    if (kit.isCustom) {
        openKitBuilder(id);
        return;
    }
    currentModalKitId = id;
    modalQuantity = 1;

    const content = document.getElementById('modal-content');
    content.innerHTML = `
        <div class="w-full md:w-1/2 overflow-hidden rounded-t-[2rem] md:rounded-tr-none md:rounded-l-[2rem] relative bg-cream">
            <img src="${kit.image}" alt="${kit.name}" class="w-full h-full object-cover aspect-square md:absolute inset-0">
        </div>
        <div class="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
            <div>
                <div class="inline-block bg-softgreen text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                    ${kit.badge}
                </div>
                <h2 class="text-2xl md:text-3xl font-extrabold text-primary mb-2">${kit.name}</h2>
                <p class="text-textmuted mb-6 leading-relaxed">${kit.desc}</p>
                <div class="flex items-end gap-3 mb-6">
                    <span class="text-2xl md:text-3xl font-extrabold text-accent">${formatPrice(kit.price)}</span>
                    <span class="text-lg text-textmuted line-through mb-1">${formatPrice(kit.originalPrice)}</span>
                </div>
                <div class="bg-cream/60 p-5 rounded-2xl mb-8">
                    <h4 class="font-bold text-primary mb-3 text-sm uppercase tracking-wider">Bao gồm (${kit.itemsCount} món):</h4>
                    <ul class="space-y-2.5">
                        ${kit.items.map(item => `<li class="flex items-start gap-2.5 text-sm text-textdark"><i class="ph-fill ph-check-circle text-softgreen text-lg mt-0.5"></i> <span>${item}</span></li>`).join('')}
                    </ul>
                </div>
            </div>
            <div class="flex gap-4">
                <button class="flex-1 bg-primary text-white rounded-2xl font-bold py-4 hover-target hover:bg-accent transition-colors shadow-lg flex items-center justify-center gap-2" onclick="addToCartAndClose()">
                    <i class="ph-bold ph-shopping-bag"></i> THÊM VÀO GIỎ HÀNG
                </button>
            </div>
        </div>
    `;

    const modal = document.getElementById('product-modal');
    modal.classList.remove('hidden');
    gsap.fromTo('#modal-content-wrapper',
        { y: 80, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: 'power4.out' }
    );
};

function closeModal() {
    gsap.to('#modal-content-wrapper', {
        y: 80, opacity: 0, scale: 0.95, duration: 0.35, ease: 'power3.in',
        onComplete: () => {
            document.getElementById('product-modal').classList.add('hidden');
            currentModalKitId = null;
        }
    });
}

window.addToCartAndClose = function () {
    const existing = cart.find(item => item.id === currentModalKitId);
    if (existing) existing.quantity++;
    else cart.push({ ...KITS.find(k => k.id === currentModalKitId), quantity: 1 });

    updateCartUI();
    closeModal();

    showToast(`Đã thêm ${KITS.find(k => k.id === currentModalKitId).name} vào giỏ hàng!`);
};

function showToast(msg) {
    const toast = document.getElementById('success-toast');
    document.getElementById('toast-message').textContent = msg;
    toast.classList.remove('pointer-events-none', 'opacity-0');
    gsap.fromTo(toast,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'back.out(1.5)' }
    );
    setTimeout(() => {
        gsap.to(toast, { y: -100, opacity: 0, duration: 0.5, ease: 'power3.in' });
    }, 3000);
}

function updateCartUI() {
    const count = cart.reduce((s, i) => s + i.quantity, 0);
    const badges = document.querySelectorAll('#cart-badge, #mobile-cart-badge');
    badges.forEach(b => {
        b.textContent = count;
        if (count > 0) b.classList.remove('scale-0'); else b.classList.add('scale-0');
    });

    const total = cart.reduce((s, i) => s + (i.price * i.quantity), 0);
    document.getElementById('cart-total').textContent = formatPrice(total);

    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) checkoutBtn.disabled = cart.length === 0;
}

window.updateCartQty = function (id, change) {
    const item = cart.find(i => (i.cartItemId || i.id) === id);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) cart = cart.filter(i => (i.cartItemId || i.id) !== id);
        updateCartUI();
        renderCartItems();
        saveCartState();
    }
};

function saveCartState() {
    localStorage.setItem('roomkit_cart', JSON.stringify(cart));
}

function loadCartState() {
    const saved = localStorage.getItem('roomkit_cart');
    if (saved) {
        cart = JSON.parse(saved);
        updateCartUI();
    }
}

function renderCartItems() {
    const c = document.getElementById('cart-items');
    if (cart.length === 0) {
        c.innerHTML = `
            <div class="text-center opacity-60 py-16 flex flex-col items-center">
                <i class="ph-duotone ph-shopping-bag-open text-6xl text-primary mb-3"></i>
                <p class="font-bold text-lg text-primary">Giỏ hàng của bạn đang trống</p>
                <p class="text-sm text-textmuted mt-1">Hãy chọn cho mình một bộ KIT phù hợp nhé!</p>
            </div>
        `;
        return;
    }

    c.innerHTML = cart.map(item => {
        if (item.isCustom) {
            return `
                <div class="flex flex-col gap-3 p-4 bg-white rounded-2xl border border-primary shadow-sm relative">
                    <div class="absolute -top-2 -right-2 bg-accent text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Tùy chỉnh</div>
                    <div class="flex gap-4">
                        <div class="w-20 h-20 bg-softgreen/20 rounded-xl flex items-center justify-center text-primary text-3xl"><i class="ph-fill ph-package"></i></div>
                        <div class="flex-1 flex flex-col justify-between">
                            <div>
                                <h4 class="font-bold text-primary text-sm">${item.name}</h4>
                                <p class="text-xs text-textmuted mt-0.5">${item.itemsCount} món đồ</p>
                                <div class="text-accent font-bold text-sm mt-0.5">${formatPrice(item.price)}</div>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center justify-between border-t border-gray-100 pt-3">
                        <div class="flex items-center border border-gray-200 rounded-lg h-8 w-24">
                            <button class="w-8 flex justify-center text-textmuted hover:text-primary" onclick="updateCartQty('${item.cartItemId}', -1)">-</button>
                            <span class="flex-1 text-center font-bold text-sm text-primary">${item.quantity}</span>
                            <button class="w-8 flex justify-center text-textmuted hover:text-primary" onclick="updateCartQty('${item.cartItemId}', 1)">+</button>
                        </div>
                        <div class="flex gap-2">
                            <button class="text-primary hover:text-accent transition-colors text-xs font-bold bg-gray-50 px-3 py-1.5 rounded-lg flex items-center gap-1 hover-target" onclick="editCustomKitInCart('${item.cartItemId}')">
                                <i class="ph-bold ph-pencil-simple"></i> SỬA
                            </button>
                            <button class="text-gray-400 hover:text-red-500 transition-colors p-1.5 bg-gray-50 rounded-lg hover-target" onclick="updateCartQty('${item.cartItemId}', -${item.quantity})">
                                <i class="ph-bold ph-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        } else {
            return `
                <div class="flex gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover rounded-xl bg-gray-50">
                    <div class="flex-1 flex flex-col justify-between">
                        <div>
                            <h4 class="font-bold text-primary text-sm line-clamp-1">${item.name}</h4>
                            <div class="text-accent font-bold text-sm mt-0.5">${formatPrice(item.price)}</div>
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center border border-gray-200 rounded-lg h-8 w-24">
                                <button class="w-8 flex justify-center text-textmuted hover:text-primary" onclick="updateCartQty('${item.id}', -1)">-</button>
                                <span class="flex-1 text-center font-bold text-sm text-primary">${item.quantity}</span>
                                <button class="w-8 flex justify-center text-textmuted hover:text-primary" onclick="updateCartQty('${item.id}', 1)">+</button>
                            </div>
                            <button class="text-gray-400 hover:text-red-500 transition-colors p-1 hover-target" onclick="updateCartQty('${item.id}', -${item.quantity})">
                                <i class="ph-bold ph-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }
    }).join('');
}

// CHECKOUT FORM
function initCheckoutForm() {
    const modal = document.getElementById('checkout-modal');
    const closeBtn = document.getElementById('close-checkout-btn');
    const form = document.getElementById('checkout-form');
    const overlay = document.getElementById('checkout-overlay');
    if (!modal || !form) return;

    const closeCheckout = () => modal.classList.add('hidden');
    if (closeBtn) closeBtn.addEventListener('click', closeCheckout);
    if (overlay) overlay.addEventListener('click', closeCheckout);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('form-name').value.trim();
        const phone = document.getElementById('form-phone').value.trim();
        const address = document.getElementById('form-address').value.trim();

        if (!/^[0-9]{10,11}$/.test(phone)) {
            document.getElementById('phone-error').classList.remove('hidden');
            return;
        }
        document.getElementById('phone-error').classList.add('hidden');

        // Calculate total
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        // Create order object
        const orderId = 'RK-' + String(Math.floor(10000 + Math.random() * 90000));
        const order = {
            id: orderId,
            name: name,
            phone: phone,
            address: address,
            total: total,
            createdAt: new Date().toISOString()
        };

        // Save order to localStorage
        localStorage.setItem('roomkit_order_' + phone, JSON.stringify(order));

        modal.classList.add('hidden');
        cart = [];
        updateCartUI();
        saveCartState();

        showToast('Đặt hàng thành công! Mã đơn: ' + orderId + '. Đội ngũ ROOMKIT sẽ giao hàng sớm nhất.');
    });
}

function openCheckout() {
    if (cart.length === 0) return;

    const summary = document.getElementById('checkout-summary');
    summary.innerHTML = cart.map(item => `
        <div class="flex justify-between text-sm py-1">
            <span>${item.quantity}x ${item.name}</span>
            <span class="font-semibold text-primary">${formatPrice(item.price * item.quantity)}</span>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    summary.innerHTML += `
        <div class="border-t border-gray-200 mt-2 pt-2 flex justify-between font-bold text-primary text-base">
            <span>Tổng thanh toán:</span>
            <span class="text-accent">${formatPrice(total)}</span>
        </div>
    `;

    const modal = document.getElementById('checkout-modal');
    modal.classList.remove('hidden');
}

// MOBILE MENU
function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('close-mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    if (!menu) return;

    const openMenu = () => {
        menu.classList.remove('translate-x-full');
        document.body.style.overflow = 'hidden';
    };
    const closeMenu = () => {
        menu.classList.add('translate-x-full');
        document.body.style.overflow = '';
    };

    if (menuBtn) menuBtn.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);

    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}

// HEADER SCROLL
function initHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}



// ==========================================
// KIT BUILDER LOGIC (UNIVERSAL)
// ==========================================

function initKitBuilder() {
    document.querySelectorAll('.kb-close-btn').forEach(btn => {
        btn.addEventListener('click', closeKitBuilder);
    });

    document.querySelectorAll('.kc-close-btn, .kc-close-overlay').forEach(btn => {
        btn.addEventListener('click', () => {
            document.getElementById('kit-confirm-modal').classList.add('hidden');
        });
    });

    document.getElementById('kb-mobile-drawer-toggle')?.addEventListener('click', () => { document.getElementById('kb-mobile-drawer').classList.toggle('translate-y-full'); });
    document.getElementById('kb-search').addEventListener('input', (e) => {
        builderState.searchQuery = e.target.value.toLowerCase();
        renderBuilderProducts();
    });

    document.getElementById('kb-confirm-btn').addEventListener('click', openConfirmModal);
    document.getElementById('kb-mobile-confirm-btn').addEventListener('click', openConfirmModal);

    document.getElementById('kc-add-cart-btn').addEventListener('click', addCustomKitToCart);
}

window.openKitBuilder = function (kitId, cartItemId = null) {
    builderState.kitId = kitId;
    builderState.cartItemId = cartItemId;

    if (cartItemId) {
        const item = cart.find(i => i.cartItemId === cartItemId);
        if (item && item.selections) {
            builderState.selections = JSON.parse(JSON.stringify(item.selections));
        }
    } else {
        builderState.selections = {};
    }

    builderState.currentFilter = 'all';
    builderState.searchQuery = '';
    document.getElementById('kb-search').value = '';

    const kit = KITS.find(k => k.id === kitId);
    document.getElementById('kb-title').textContent = 'TÙY CHỈNH ' + kit.name;
    document.getElementById('kb-mobile-title').textContent = kit.name;

    renderBuilderCategories();
    renderBuilderProducts();
    updateBuilderSummary();

    const modal = document.getElementById('kit-builder-modal');
    modal.classList.remove('hidden');
    document.documentElement.classList.add('lenis-stopped');

    gsap.to(modal, { opacity: 1, duration: 0.3 });
};

function closeKitBuilder() {
    const modal = document.getElementById('kit-builder-modal');
    gsap.to(modal, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
            modal.classList.add('hidden');
            document.documentElement.classList.remove('lenis-stopped');
        }
    });
}

function renderBuilderCategories() {
    const kit = KITS.find(k => k.id === builderState.kitId);
    const container = document.getElementById('kb-categories');
    container.innerHTML = kit.categories.map(g => `
        <button class="px-4 py-1.5 rounded-full text-sm font-bold transition-colors hover-target ${builderState.currentFilter === g.id ? 'bg-primary text-white' : 'bg-gray-100 text-textmuted hover:bg-gray-200'}" 
                onclick="setBuilderFilter('${g.id}')">
            ${g.name}
        </button>
    `).join('');
}

window.setBuilderFilter = function (id) {
    builderState.currentFilter = id;
    renderBuilderCategories();
    renderBuilderProducts();
};

function renderBuilderProducts() {
    const kit = KITS.find(k => k.id === builderState.kitId);
    const container = document.getElementById('kb-product-grid');

    let filtered = kit.products;
    if (builderState.currentFilter !== 'all') {
        filtered = filtered.filter(p => p.group === builderState.currentFilter);
    }
    if (builderState.searchQuery) {
        filtered = filtered.filter(p => p.name.toLowerCase().includes(builderState.searchQuery));
    }

    container.innerHTML = filtered.map(p => {
        const qty = builderState.selections[p.id] || 0;
        const isRequiredGroup = kit.requiredGroups.includes(p.group);
        const activeClass = qty > 0 ? 'builder-card-active' : 'border-transparent hover:border-softgreen';

        return `
            <div class="bg-white rounded-[1.5rem] border-2 transition-all p-4 flex flex-col h-full relative ${activeClass}">
                ${isRequiredGroup ? '<div class="absolute top-3 left-3 item-badge-required text-[10px] px-2 py-0.5 rounded-full font-bold z-10 uppercase shadow-sm">Cần thiết</div>' : ''}
                <div class="aspect-square rounded-2xl overflow-hidden mb-4 bg-gray-50 relative group">
                    <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover">
                    ${qty > 0 ? '<div class="absolute top-2 right-2 w-7 h-7 bg-accent rounded-full text-white flex items-center justify-center shadow-md text-sm"><i class="ph-bold ph-check"></i></div>' : ''}
                </div>
                <div class="flex-1 flex flex-col justify-between gap-4">
                    <div>
                        <h4 class="font-bold text-primary text-base leading-tight mb-1.5 line-clamp-2">${p.name}</h4>
                        <div class="text-xs text-textmuted line-clamp-2">${p.desc}</div>
                    </div>
                    <div>
                        <div class="font-extrabold text-accent text-lg mb-3">${formatPrice(p.price)}</div>
                        ${qty === 0 ? `
                            <button class="w-full bg-gray-50 text-primary py-3 rounded-xl text-sm font-bold hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2 hover-target shadow-sm border border-gray-100" onclick="updateBuilderQty('${p.id}', 1)">
                                <i class="ph-bold ph-plus"></i> THÊM
                            </button>
                        ` : `
                            <div class="flex items-center justify-between border-2 border-primary rounded-xl h-11 bg-white overflow-hidden shadow-sm">
                                <button class="w-10 h-full flex items-center justify-center text-primary hover:bg-gray-100 hover-target transition-colors" onclick="updateBuilderQty('${p.id}', -1)"><i class="ph-bold ph-minus"></i></button>
                                <span class="flex-1 text-center font-bold text-base text-primary">${qty}</span>
                                <button class="w-10 h-full flex items-center justify-center text-primary hover:bg-gray-100 hover-target transition-colors" onclick="updateBuilderQty('${p.id}', 1)"><i class="ph-bold ph-plus"></i></button>
                            </div>
                        `}
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Re-bind hover-target cursor for dynamically added buttons
    initCustomCursor();
}

window.updateBuilderQty = function (pid, change) {
    const current = builderState.selections[pid] || 0;
    const newQty = Math.max(0, current + change);

    if (newQty === 0) {
        delete builderState.selections[pid];
    } else {
        builderState.selections[pid] = newQty;
    }

    renderBuilderProducts();
    updateBuilderSummary();
};

function updateBuilderSummary() {
    const kit = KITS.find(k => k.id === builderState.kitId);

    let totalItems = 0;
    let sumPrice = kit.basePrice;

    const summaryItems = [];

    for (const [pid, qty] of Object.entries(builderState.selections)) {
        const product = kit.products.find(p => p.id === pid);
        if (product) {
            totalItems += qty;
            sumPrice += product.price * qty;
            summaryItems.push({ product, qty });
        }
    }

    const discount = sumPrice * (kit.discountPercent / 100);
    const finalPrice = sumPrice - discount;

    let hasAllRequired = true;
    for (const group of kit.requiredGroups) {
        const hasItem = summaryItems.some(i => i.product.group === group);
        if (!hasItem) hasAllRequired = false;
    }

    const canCheckout = totalItems > 0 && hasAllRequired;

    document.getElementById('kb-progress').textContent = `Đã chọn ${totalItems} món`;
    document.getElementById('kb-total-price').textContent = formatPrice(finalPrice);

    const savingsEl = document.getElementById('kb-savings');
    if (discount > 0) {
        savingsEl.textContent = `Tiết kiệm ${formatPrice(discount)} (${kit.discountPercent}%)`;
        savingsEl.classList.remove('hidden');
    } else {
        savingsEl.classList.add('hidden');
    }

    const sList = document.getElementById('kb-summary-list');
    if (summaryItems.length === 0) {
        sList.innerHTML = `
            <div class="text-center py-12 opacity-50 flex flex-col items-center">
                <i class="ph-duotone ph-package text-5xl mb-3 text-primary"></i>
                <p class="text-sm font-bold text-primary">Chưa có sản phẩm nào được chọn.</p>
                <p class="text-xs mt-1 text-textmuted">Hãy thêm các món đồ bạn cần ở bên trái.</p>
            </div>
        `;
    } else {
        sList.innerHTML = summaryItems.map(i => `
            <div class="flex gap-4 bg-gray-50/50 p-4 rounded-[1.25rem] border border-gray-100 shadow-sm transition-all hover:bg-white hover:shadow-md">
                <img src="${i.product.image}" class="w-16 h-16 rounded-xl object-cover bg-white">
                <div class="flex-1 flex flex-col justify-between py-0.5">
                    <div class="flex justify-between items-start gap-2">
                        <h5 class="text-sm font-bold text-primary line-clamp-2 leading-snug pr-4">${i.product.name}</h5>
                        <span class="text-xs font-bold text-textmuted bg-gray-200 px-2 py-0.5 rounded-md">x${i.qty}</span>
                    </div>
                    <div class="text-accent text-sm font-bold">${formatPrice(i.product.price * i.qty)}</div>
                </div>
            </div>
        `).join('');
    }

    const desktopBtn = document.getElementById('kb-confirm-btn');
    desktopBtn.disabled = !canCheckout;
    if (canCheckout && totalItems >= kit.requiredGroups.length + 1) desktopBtn.classList.add('pulse-cta');
    else desktopBtn.classList.remove('pulse-cta');

    if (!hasAllRequired && totalItems > 0) {
        desktopBtn.innerHTML = 'CẦN CHỌN ĐỦ MÓN BẮT BUỘC <i class="ph-bold ph-warning"></i>';
        desktopBtn.classList.remove('bg-primary', 'hover:bg-accent');
        desktopBtn.classList.add('bg-gray-400');
    } else {
        desktopBtn.innerHTML = 'XONG, KIỂM TRA KIT <i class="ph-bold ph-arrow-right"></i>';
        desktopBtn.classList.remove('bg-gray-400');
        desktopBtn.classList.add('bg-primary', 'hover:bg-accent');
    }

    document.getElementById('kb-mobile-progress').textContent = `${totalItems} món`;
    document.getElementById('kb-mobile-total').textContent = formatPrice(finalPrice);
    document.getElementById('kb-mobile-summary-list').innerHTML = sList.innerHTML;

    const mobileBtn = document.getElementById('kb-mobile-confirm-btn');
    mobileBtn.disabled = !canCheckout;
    if (!hasAllRequired && totalItems > 0) {
        mobileBtn.textContent = 'THIẾU MÓN BẮT BUỘC';
        mobileBtn.classList.replace('bg-primary', 'bg-gray-400');
    } else {
        mobileBtn.textContent = 'XONG';
        mobileBtn.classList.replace('bg-gray-400', 'bg-primary');
    }
}

function openConfirmModal() {
    const kit = KITS.find(k => k.id === builderState.kitId);

    let totalItems = 0;
    let sumPrice = kit.basePrice;
    const summaryItems = [];

    for (const [pid, qty] of Object.entries(builderState.selections)) {
        const product = kit.products.find(p => p.id === pid);
        if (product) {
            totalItems += qty;
            sumPrice += product.price * qty;
            summaryItems.push({ product, qty });
        }
    }

    const discount = sumPrice * (kit.discountPercent / 100);
    const finalPrice = sumPrice - discount;

    document.getElementById('kc-title').textContent = kit.name;
    document.getElementById('kc-count').textContent = `${totalItems} món sản phẩm (Đã giảm ${kit.discountPercent}%)`;

    document.getElementById('kc-items').innerHTML = summaryItems.map(i => `
        <div class="flex justify-between items-center text-sm border-b border-gray-100 py-3">
            <div class="flex items-center gap-3">
                <span class="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-textmuted">${i.qty}</span>
                <span class="text-textdark font-medium">${i.product.name}</span>
            </div>
            <span class="font-bold text-primary">${formatPrice(i.product.price * i.qty)}</span>
        </div>
    `).join('');

    document.getElementById('kc-total').textContent = formatPrice(finalPrice);

    const modal = document.getElementById('kit-confirm-modal');
    modal.classList.remove('hidden');
}

function addCustomKitToCart() {
    const kit = KITS.find(k => k.id === builderState.kitId);
    let totalItems = 0;
    let sumPrice = kit.basePrice;

    for (const [pid, qty] of Object.entries(builderState.selections)) {
        const product = kit.products.find(p => p.id === pid);
        if (product) {
            totalItems += qty;
            sumPrice += product.price * qty;
        }
    }

    const finalPrice = sumPrice - (sumPrice * (kit.discountPercent / 100));

    if (builderState.cartItemId) {
        const item = cart.find(i => i.cartItemId === builderState.cartItemId);
        if (item) {
            item.selections = JSON.parse(JSON.stringify(builderState.selections));
            item.price = finalPrice;
            item.itemsCount = totalItems;
        }
    } else {
        const cartItemId = 'custom_' + Date.now();
        cart.push({
            cartItemId: cartItemId,
            baseKitId: builderState.kitId,
            name: kit.name,
            isCustom: true,
            price: finalPrice,
            itemsCount: totalItems,
            quantity: 1,
            selections: JSON.parse(JSON.stringify(builderState.selections))
        });
    }

    saveCartState();
    updateCartUI();

    document.getElementById('kit-confirm-modal').classList.add('hidden');
    closeKitBuilder();

    showToast(`Đã lưu ${kit.name} vào giỏ hàng!`);

    setTimeout(() => {
        document.getElementById('cart-drawer-overlay').classList.remove('hidden');
        document.getElementById('cart-drawer').classList.remove('translate-x-full');
        renderCartItems();
    }, 500);
}

window.editCustomKitInCart = function (cartItemId) {
    const item = cart.find(i => i.cartItemId === cartItemId);
    if (item && item.isCustom) {
        closeCart();
        setTimeout(() => {
            openKitBuilder(item.baseKitId, cartItemId);
        }, 500); // Wait for cart drawer to close
    }
};


// ==========================================
// SHOP & SEARCH LOGIC
// ==========================================

// 1. Generate ALL_PRODUCTS flat list
const ALL_PRODUCTS = [];
KITS.forEach(kit => {
    if (kit.products) {
        kit.products.forEach(p => {
            if (!ALL_PRODUCTS.find(ext => ext.id === p.id)) {
                ALL_PRODUCTS.push({ ...p, parentKit: kit.name });
            }
        });
    }
});

let currentSpId = null;
let currentSpQty = 1;

function initShopAndSearch() {
    // Render Shop Grid
    renderProducts();

    // Search Events
    const searchBtn = document.getElementById('nav-search-btn');
    const mobileSearchBtn = document.getElementById('mobile-search-btn');
    const closeSearchBtn = document.getElementById('close-search-btn');
    const searchInput = document.getElementById('global-search-input');

    if (searchBtn) searchBtn.addEventListener('click', openGlobalSearch);
    if (mobileSearchBtn) mobileSearchBtn.addEventListener('click', openGlobalSearch);
    if (closeSearchBtn) closeSearchBtn.addEventListener('click', closeGlobalSearch);

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            renderSearchResults(e.target.value);
        });
    }

    // Single Product Modal Events
    document.querySelectorAll('.sp-close-btn, .sp-close-overlay').forEach(btn => {
        btn.addEventListener('click', closeSingleProductModal);
    });

    document.getElementById('sp-add-btn')?.addEventListener('click', addSingleProductToCart);
}

function renderProducts() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    grid.innerHTML = ALL_PRODUCTS.map(p => `
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all p-3 md:p-4 group flex flex-col hover-target cursor-pointer" onclick="openSingleProductModal('${p.id}')">
            <div class="aspect-square bg-gray-50 rounded-xl mb-4 overflow-hidden relative">
                <img src="${p.image}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                <button class="absolute top-2 right-2 w-8 h-8 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors shadow-sm" onclick="event.stopPropagation(); toggleWishlist(this)"><i class="ph-bold ph-heart"></i></button>
            </div>
            <div class="flex-1 flex flex-col justify-between">
                <div>
                    <span class="text-[10px] md:text-xs font-bold text-textmuted uppercase tracking-wider mb-1 block">${p.group || 'Sản phẩm'}</span>
                    <h4 class="font-bold text-primary text-sm md:text-base line-clamp-2 mb-2">${p.name}</h4>
                </div>
                <div class="flex items-end justify-between mt-2">
                    <div class="font-extrabold text-accent text-base md:text-lg">${formatPrice(p.price)}</div>
                    <button class="w-8 h-8 md:w-10 md:h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-accent transition-colors shadow-md" onclick="event.stopPropagation(); openSingleProductModal('${p.id}')">
                        <i class="ph-bold ph-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function toggleWishlist(btn) {
    const icon = btn.querySelector('i');
    if (icon.classList.contains('ph-heart')) {
        icon.classList.replace('ph-heart', 'ph-heart-straight');
        icon.classList.add('text-red-500');
    } else {
        icon.classList.replace('ph-heart-straight', 'ph-heart');
        icon.classList.remove('text-red-500');
    }
}

window.openSingleProductModal = function (id) {
    const p = ALL_PRODUCTS.find(x => x.id === id);
    if (!p) return;

    currentSpId = id;
    currentSpQty = 1;

    document.getElementById('sp-image').src = p.image;
    document.getElementById('sp-category').textContent = p.group || 'Sản phẩm';
    document.getElementById('sp-name').textContent = p.name;
    document.getElementById('sp-desc').textContent = p.desc;
    document.getElementById('sp-price').textContent = formatPrice(p.price);
    document.getElementById('sp-qty').textContent = currentSpQty;

    const modal = document.getElementById('single-product-modal');
    modal.classList.remove('hidden');
    document.documentElement.classList.add('lenis-stopped');
    gsap.fromTo(modal.querySelector('.bg-white'), { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3 });
};

window.closeSingleProductModal = function () {
    const modal = document.getElementById('single-product-modal');
    gsap.to(modal.querySelector('.bg-white'), {
        y: 50, opacity: 0, duration: 0.2,
        onComplete: () => {
            modal.classList.add('hidden');
            document.documentElement.classList.remove('lenis-stopped');
        }
    });
};

window.updateSpQty = function (change) {
    currentSpQty = Math.max(1, currentSpQty + change);
    document.getElementById('sp-qty').textContent = currentSpQty;
};

function addSingleProductToCart() {
    const p = ALL_PRODUCTS.find(x => x.id === currentSpId);
    if (!p) return;

    const existing = cart.find(i => i.id === p.id && !i.isCustom);
    if (existing) {
        existing.quantity += currentSpQty;
    } else {
        cart.push({
            id: p.id,
            name: p.name,
            price: p.price,
            image: p.image,
            quantity: currentSpQty,
            isCustom: false
        });
    }

    saveCartState();
    updateCartUI();
    closeSingleProductModal();
    showToast(`Đã thêm ${p.name} vào giỏ hàng!`);
}

// SEARCH
function openGlobalSearch() {
    const overlay = document.getElementById('global-search-overlay');
    overlay.classList.remove('hidden');
    document.documentElement.classList.add('lenis-stopped');

    document.getElementById('global-search-input').value = '';
    document.getElementById('search-empty-state').classList.remove('hidden');
    document.getElementById('search-results-kits').classList.add('hidden');
    document.getElementById('search-results-products').classList.add('hidden');
    document.getElementById('search-no-results').classList.add('hidden');

    setTimeout(() => document.getElementById('global-search-input').focus(), 100);
}

function closeGlobalSearch() {
    document.getElementById('global-search-overlay').classList.add('hidden');
    document.documentElement.classList.remove('lenis-stopped');
}

function renderSearchResults(query) {
    const q = query.toLowerCase().trim();
    const emptyState = document.getElementById('search-empty-state');
    const kitsContainer = document.getElementById('search-results-kits');
    const productsContainer = document.getElementById('search-results-products');
    const noResults = document.getElementById('search-no-results');

    const kitsGrid = document.getElementById('search-kits-grid');
    const productsGrid = document.getElementById('search-products-grid');

    if (!q) {
        emptyState.classList.remove('hidden');
        kitsContainer.classList.add('hidden');
        productsContainer.classList.add('hidden');
        noResults.classList.add('hidden');
        return;
    }

    emptyState.classList.add('hidden');

    const matchedKits = KITS.filter(k =>
        k.name.toLowerCase().includes(q) || k.desc.toLowerCase().includes(q)
    );

    const matchedProducts = ALL_PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(q) ||
        (p.group && p.group.toLowerCase().includes(q)) ||
        p.desc.toLowerCase().includes(q)
    );

    if (matchedKits.length === 0 && matchedProducts.length === 0) {
        kitsContainer.classList.add('hidden');
        productsContainer.classList.add('hidden');
        noResults.classList.remove('hidden');
        return;
    }

    noResults.classList.add('hidden');

    if (matchedKits.length > 0) {
        kitsContainer.classList.remove('hidden');
        kitsGrid.innerHTML = matchedKits.map(k => `
            <div class="flex gap-4 bg-white p-3 rounded-xl border border-gray-100 hover:border-accent cursor-pointer shadow-sm hover:shadow-md transition-all hover-target" onclick="closeGlobalSearch(); openProductModal('${k.id}')">
                <img src="${k.image}" class="w-20 h-20 object-cover rounded-lg">
                <div class="flex-1">
                    <h5 class="font-bold text-primary text-sm line-clamp-1">${k.name}</h5>
                    <p class="text-xs text-textmuted line-clamp-1 mt-1">${k.desc}</p>
                    <div class="text-accent font-bold text-sm mt-2">${formatPrice(k.price)}</div>
                </div>
            </div>
        `).join('');
    } else {
        kitsContainer.classList.add('hidden');
    }

    if (matchedProducts.length > 0) {
        productsContainer.classList.remove('hidden');
        productsGrid.innerHTML = matchedProducts.map(p => `
            <div class="flex flex-col bg-white p-3 rounded-xl border border-gray-100 hover:border-accent cursor-pointer shadow-sm hover:shadow-md transition-all hover-target" onclick="closeGlobalSearch(); openSingleProductModal('${p.id}')">
                <div class="aspect-square rounded-lg overflow-hidden mb-3 bg-gray-50">
                    <img src="${p.image}" class="w-full h-full object-cover">
                </div>
                <h5 class="font-bold text-primary text-sm line-clamp-2">${p.name}</h5>
                <div class="text-accent font-bold text-sm mt-2">${formatPrice(p.price)}</div>
            </div>
        `).join('');
    } else {
        productsContainer.classList.add('hidden');
    }

    initCustomCursor(); // rebind
}
window.addStarterKitToCart = function () {
    const existing = cart.find(item => item.id === 'starter-kit');

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: 'starter-kit',
            name: 'ROOMKIT STARTER KIT',
            price: 499000,
            image: 'assets/images/kit-starter.jpg',
            quantity: 1,
            isCustom: false
        });
    }

    saveCartState();
    updateCartUI();
    showToast('Đã thêm ROOMKIT STARTER KIT vào giỏ hàng!');

    // Mở giỏ hàng ngay sau khi thêm
    document.getElementById('cart-drawer-overlay').classList.remove('hidden');
    document.getElementById('cart-drawer').classList.remove('translate-x-full');
    renderCartItems();
};
window.openStarterKitItems = function () {
    const items = [
        'Gối ngủ',
        'Ga giường',
        'Chăn',
        'Đèn ngủ',
        'Móc quần áo',
        'Hộp lưu trữ',
        'Giỏ đựng đồ giặt',
        'Khăn tắm',
        'Dép đi trong nhà',
        'Gương mini',
        'Bộ ly + cốc',
        'Hộp đựng thực phẩm',
        'Thùng rác mini',
        'Bộ chổi + hót rác',
        'Ổ cắm điện'
    ];

    document.getElementById('modal-content').innerHTML = `
        <div class="w-full p-8 md:p-10">
            <h2 class="text-2xl md:text-3xl font-extrabold text-primary mb-2">
                ROOMKIT STARTER KIT
            </h2>

            <p class="text-textmuted mb-6">
                15 món đồ cơ bản cần thiết cho phòng trọ.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                ${items.map((item, index) => `
                    <div class="flex items-center gap-3 p-3 bg-cream rounded-xl">
                        <span class="w-7 h-7 shrink-0 rounded-full bg-softgreen
                                     text-primary flex items-center justify-center
                                     text-xs font-bold">
                            ${index + 1}
                        </span>
                        <span class="text-sm font-semibold text-primary">
                            ${item}
                        </span>
                    </div>
                `).join('')}
            </div>

            <button onclick="closeModal()"
                class="mt-8 w-full bg-primary text-white py-4 rounded-xl font-bold">
                ĐÓNG
            </button>
        </div>
    `;

    const modal = document.getElementById('product-modal');
    modal.classList.remove('hidden');

    gsap.fromTo('#modal-content-wrapper',
        { y: 40, opacity: 0, scale: 0.97 },
        { y: 0, opacity: 1, scale: 1, duration: 0.4 }
    );
};
const STARTER_KIT_ITEMS = [
    { name: 'Gối ngủ', price: 79000 },
    { name: 'Ga giường', price: 120000 },
    { name: 'Chăn', price: 150000 },
    { name: 'Đèn bàn / đèn ngủ', price: 85000 },
    { name: 'Móc quần áo', price: 45000 },
    { name: 'Hộp lưu trữ', price: 75000 },
    { name: 'Giỏ đựng đồ giặt', price: 99000 },
    { name: 'Khăn tắm', price: 75000 },
    { name: 'Dép đi trong nhà', price: 55000 },
    { name: 'Gương mini', price: 40000 },
    { name: 'Bộ ly + cốc', price: 55000 },
    { name: 'Hộp đựng thực phẩm', price: 89000 },
    { name: 'Thùng rác mini', price: 65000 },
    { name: 'Bộ chổi + hốt rác', price: 85000 },
    { name: 'Ổ cắm điện', price: 129000 }
];


// ==========================================
// ORDER TRACKING MODAL
// ==========================================

function initTrackingModal() {
    const modal = document.getElementById('tracking-modal');
    const overlay = document.getElementById('tracking-overlay');
    const closeBtn = document.getElementById('close-tracking-btn');
    const searchBtn = document.getElementById('tracking-search-btn');
    const backBtn = document.getElementById('tracking-back-btn');
    const phoneInput = document.getElementById('tracking-phone-input');

    if (!modal) return;

    // Open modal from header buttons
    document.querySelectorAll('#nav-track-btn, #mobile-track-btn').forEach(btn => {
        btn.addEventListener('click', openTrackingModal);
    });

    // Close modal
    if (closeBtn) closeBtn.addEventListener('click', closeTrackingModal);
    if (overlay) overlay.addEventListener('click', closeTrackingModal);

    // Search button
    if (searchBtn) searchBtn.addEventListener('click', searchOrder);

    // Back button (go back to screen 1)
    if (backBtn) backBtn.addEventListener('click', showTrackingScreen1);

    // Allow Enter key to search
    if (phoneInput) {
        phoneInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                searchOrder();
            }
        });
    }
}

function openTrackingModal() {
    const modal = document.getElementById('tracking-modal');
    modal.classList.remove('hidden');
    showTrackingScreen1();

    // Animate in
    gsap.fromTo('#tracking-modal-content',
        { y: 60, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: 'power4.out' }
    );

    setTimeout(() => {
        document.getElementById('tracking-phone-input').focus();
    }, 300);
}

function closeTrackingModal() {
    gsap.to('#tracking-modal-content', {
        y: 60, opacity: 0, scale: 0.95, duration: 0.3, ease: 'power3.in',
        onComplete: () => {
            document.getElementById('tracking-modal').classList.add('hidden');
        }
    });
}

function showTrackingScreen1() {
    document.getElementById('tracking-screen-1').classList.remove('hidden');
    document.getElementById('tracking-screen-2').classList.add('hidden');
    document.getElementById('tracking-phone-input').value = '';
    document.getElementById('tracking-error').classList.add('hidden');

    setTimeout(() => {
        document.getElementById('tracking-phone-input').focus();
    }, 100);
}

function searchOrder() {
    const phone = document.getElementById('tracking-phone-input').value.replace(/\s/g, '').trim();
    const errorEl = document.getElementById('tracking-error');

    if (!phone || phone.length < 10) {
        errorEl.classList.remove('hidden');
        // Re-trigger shake animation
        errorEl.style.animation = 'none';
        errorEl.offsetHeight; // force reflow
        errorEl.style.animation = '';
        return;
    }

    // Look up order in localStorage
    const orderData = localStorage.getItem('roomkit_order_' + phone);

    if (!orderData) {
        errorEl.classList.remove('hidden');
        errorEl.style.animation = 'none';
        errorEl.offsetHeight;
        errorEl.style.animation = '';
        return;
    }

    errorEl.classList.add('hidden');

    const order = JSON.parse(orderData);

    // Populate Screen 2
    document.getElementById('tracking-order-id').textContent = order.id;
    document.getElementById('tracking-name').textContent = order.name;
    document.getElementById('tracking-phone').textContent = order.phone;
    document.getElementById('tracking-address').textContent = order.address;
    document.getElementById('tracking-total').textContent = formatPrice(order.total);

    // Switch to Screen 2 with animation
    document.getElementById('tracking-screen-1').classList.add('hidden');
    document.getElementById('tracking-screen-2').classList.remove('hidden');

    gsap.fromTo('#tracking-screen-2',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }
    );
}
