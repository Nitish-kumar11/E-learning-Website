// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenuBtn.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-times');
        this.querySelector('i').classList.toggle('fa-bars');
    });

    // Modal functionality
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const mobileLoginBtn = document.getElementById('mobileLoginBtn');
    const mobileSignupBtn = document.getElementById('mobileSignupBtn');
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    const courseModal = document.getElementById('courseModal');
    const closeModalBtns = document.querySelectorAll('.close-modal');
    const switchToSignup = document.getElementById('switchToSignup');
    const switchToLogin = document.getElementById('switchToLogin');




    // Show login modal
    function showLoginModal() {
        loginModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        mobileMenu.classList.remove('active');
    }

    // Show signup modal
    function showSignupModal() {
        signupModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        mobileMenu.classList.remove('active');
    }

    // Close modal
    function closeModal() {
        loginModal.style.display = 'none';
        signupModal.style.display = 'none';
        courseModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Event listeners for modals
    loginBtn.addEventListener('click', showLoginModal);
    signupBtn.addEventListener('click', showSignupModal);
    mobileLoginBtn.addEventListener('click', showLoginModal);
    mobileSignupBtn.addEventListener('click', showSignupModal);

    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', closeModal);
    });

    // Switch between login and signup modals
    switchToSignup.addEventListener('click', function (e) {
        e.preventDefault();
        loginModal.style.display = 'none';
        signupModal.style.display = 'block';
    });

    switchToLogin.addEventListener('click', function (e) {
        e.preventDefault();
        signupModal.style.display = 'none';
        loginModal.style.display = 'block';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function (e) {
        if (e.target === loginModal || e.target === signupModal || e.target === courseModal) {
            closeModal();
        }
    });

    // Course filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const courseGrid = document.querySelector('.course-grid');

    // Sample course data
    const courses = [
        {
            id: 1,
            title: 'Complete Web Development Bootcamp',
            instructor: 'Prof Ravi kumar mahto',
            rating: 4.5,
            students: 15230,
            duration: '35 hours',
            price: 'Rs-6,999',
            originalPrice: '19,999',
            category: 'web',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 2,
            title: 'UX/UI Design Masterclass',
            instructor: 'Prof Shivang sourav',
            rating: 4.7,
            students: 8720,
            duration: '28 hours',
            price: 'Rs-7,299',
            originalPrice: '21,999',
            category: 'design',
            image: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 3,
            title: 'Business Fundamentals',
            instructor: 'Karan Prasad',
            rating: 4.3,
            students: 12450,
            duration: '20 hours',
            price: 'Rs-3,999',
            originalPrice: '14,999',
            category: 'business',
            image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 4,
            title: 'Data Science A-Z',
            instructor: 'Rohit Singh',
            rating: 4.8,
            students: 20340,
            duration: '42 hours',
            price: 'Rs-9,999',
            originalPrice: '21999',
            category: 'data',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 5,
            title: 'Advanced JavaScript Concepts',
            instructor: 'Rohit munda',
            rating: 4.6,
            students: 9830,
            duration: '25 hours',
            price: 'Rs-7,499',
            originalPrice: '16999',
            category: 'web',
            image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 6,
            title: 'Graphic Design for Beginners',
            instructor: 'Pooja hedge',
            rating: 4.4,
            students: 7560,
            duration: '18 hours',
            price: 'Rs-11,111',
            originalPrice: '49,999',
            category: 'design',
            image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        }
    ];

    // Render courses
    function renderCourses(category = 'all') {
        courseGrid.innerHTML = '';

        const filteredCourses = category === 'all'
            ? courses
            : courses.filter(course => course.category === category);

        filteredCourses.forEach(course => {
            const courseCard = document.createElement('div');
            courseCard.className = 'course-card';
            courseCard.dataset.id = course.id;
            courseCard.innerHTML = `
                <div class="course-img">
                    <img src="${course.image}" alt="${course.title}">
                    <div class="course-badge">Bestseller</div>
                    <button class="btn-wishlist">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
                <div class="course-info">
                    <h3>${course.title}</h3>
                    <p class="instructor">${course.instructor}</p>
                    <div class="course-meta">
                        <span class="rating">
                            <i class="fas fa-star"></i> ${course.rating}
                        </span>
                        <span class="students">
                            <i class="fas fa-users"></i> ${course.students.toLocaleString()}
                        </span>
                    </div>
                    <div class="course-footer">
                        <div class="price">
                            <span class="current-price">${course.price}</span>
                            <span class="original-price">${course.originalPrice}</span>
                        </div>
                        <button class="btn btn-outline btn-enroll">Enroll Now</button>
                    </div>
                </div>
            `;
            courseGrid.appendChild(courseCard);
        });
    }

    // Initialize courses
    renderCourses();

    // Filter courses
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const category = this.dataset.category;
            renderCourses(category);
        });
    });

    // Course modal functionality
    courseGrid.addEventListener('click', function (e) {
        const courseCard = e.target.closest('.course-card');
        const wishlistBtn = e.target.closest('.btn-wishlist');
        const enrollBtn = e.target.closest('.btn-enroll');

        if (courseCard && !wishlistBtn && !enrollBtn) {
            const courseId = parseInt(courseCard.dataset.id);
            const course = courses.find(c => c.id === courseId);

            if (course) {
                // Update course modal with selected course data
                document.getElementById('courseModalTitle').textContent = course.title;
                document.getElementById('courseBanner').src = course.image;

                // Show the modal
                courseModal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        }

        if (wishlistBtn) {
            e.preventDefault();
            const icon = wishlistBtn.querySelector('i');
            icon.classList.toggle('far');
            icon.classList.toggle('fas');
        }
    });

    // Tab functionality in course modal
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const tabId = this.dataset.tab;

            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Accordion functionality in curriculum tab
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const accordionItem = this.parentElement;
            const accordionContent = this.nextElementSibling;

            if (accordionItem.classList.contains('active')) {
                accordionItem.classList.remove('active');
                accordionContent.style.maxHeight = null;
            } else {
                document.querySelectorAll('.accordion-item').forEach(item => {
                    item.classList.remove('active');
                    item.querySelector('.accordion-content').style.maxHeight = null;
                });

                accordionItem.classList.add('active');
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            }
        });
    });

    // Testimonial slider
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        testimonials[index].classList.add('active');
        dots[index].classList.add('active');
        currentTestimonial = index;
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showTestimonial(index));
    });

    prevBtn.addEventListener('click', function () {
        let newIndex = currentTestimonial - 1;
        if (newIndex < 0) newIndex = testimonials.length - 1;
        showTestimonial(newIndex);
    });

    nextBtn.addEventListener('click', function () {
        let newIndex = currentTestimonial + 1;
        if (newIndex >= testimonials.length) newIndex = 0;
        showTestimonial(newIndex);
    });

    // Initialize Plyr video players
    const players = Plyr.setup('.plyr__video-embed', {
        controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
        hideControls: false
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                mobileMenu.classList.remove('active');
            }
        });
    });

    // Form submission
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Login functionality will be implemented soon!');
        closeModal();
    });

    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Signup functionality will be implemented soon!');
        closeModal();
    });
});
