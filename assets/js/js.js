 
    $(function () {
      var $h = $('html'), saved = null; try { saved = localStorage.getItem('inzo-theme') } catch (e) { }
      function setTheme(t) { $h.attr('data-bs-theme', t); $('#theme i').attr('class', t === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'); try { localStorage.setItem('inzo-theme', t) } catch (e) { } }
      setTheme(saved || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
      $('#theme').on('click', function () { setTheme($h.attr('data-bs-theme') === 'dark' ? 'light' : 'dark') });
      $('#yr').text(new Date().getFullYear());
      $('.navbar-nav .nav-link').on('click', function () { var c = document.getElementById('nav'); if (c.classList.contains('show')) bootstrap.Collapse.getInstance(c).hide() });

      // scroll: navbar, to-top, parallax, active link
      var secs = $('main section,header.hero');
      $(window).on('scroll', function () {
        var y = $(this).scrollTop();
        $('.navbar').toggleClass('scrolled', y > 40); $('#top').toggleClass('show', y > 500);
        $('.hero-bg').css('transform', 'translateY(' + y * .25 + 'px)');
        var cur = ''; secs.each(function () { if (y + 120 >= this.offsetTop) cur = this.id });
        $('.nav-link').removeClass('active').filter('[href="#' + cur + '"]').addClass('active');
      }).trigger('scroll');
      $('#top').on('click', function () { $('html,body').animate({ scrollTop: 0 }, 600) });

      // reveal + counters
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (!e.isIntersecting) return; var $t = $(e.target); $t.addClass('in');
          $t.find('[data-count]').each(function () { var el = $(this), to = +el.data('count'); $({ v: 0 }).animate({ v: to }, { duration: 1800, step: function (v) { el.text(Math.floor(v)) }, complete: function () { el.text(to) } }) });
          io.unobserve(e.target)
        })
      }, { threshold: .15 });
      $('.rv').each(function (i) { $(this).css('transition-delay', (i % 4) * 90 + 'ms'); io.observe(this) });

      // 3D tilt
      if (matchMedia('(hover:hover)').matches) {
        $('.tilt').on('mousemove', function (e) {
          var r = this.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
          this.style.transform = 'rotateY(' + x * 14 + 'deg) rotateX(' + -y * 14 + 'deg) translateZ(10px)'
        }).on('mouseleave', function () { this.style.transform = '' });
      }

      // contact form
      $('#cf').on('submit', function (e) {
        e.preventDefault(); var f = this;
        if (!f.checkValidity()) { $(f).addClass('was-validated'); return }
        var b = 'Name: ' + $('#nm').val() + '\nPhone: ' + $('#ph').val() + '\nEmail: ' + $('#em').val() + '\nProduct: ' + $('#pr').val() + '\n\n' + $('#ms').val();
        $('#ok').prop('hidden', false);
        location.href = 'mailto:tanzirakhtar@gmail.com?subject=' + encodeURIComponent('Enquiry: ' + $('#pr').val()) + '&body=' + encodeURIComponent(b);
        f.reset(); $(f).removeClass('was-validated')
      });

      // particles: drifting grains & leaves
      var cv = document.getElementById('particles'), cx = cv.getContext('2d'), P = [], W, H;
      function size() { W = cv.width = cv.offsetWidth; H = cv.height = cv.offsetHeight }
      size(); $(window).on('resize', size);
      for (var i = 0; i < (innerWidth < 768 ? 22 : 46); i++)P.push({ x: Math.random() * W, y: Math.random() * H, s: Math.random() * 5 + 2, v: Math.random() * .6 + .2, d: Math.random() * 2 - 1, r: Math.random() * 6, leaf: Math.random() > .6 });
      if (!matchMedia('(prefers-reduced-motion:reduce)').matches) (function draw() {
        cx.clearRect(0, 0, W, H);
        P.forEach(function (p) {
          p.y += p.v; p.x += Math.sin(p.y / 60) * .5 + p.d * .2; p.r += .01; if (p.y > H + 10) { p.y = -10; p.x = Math.random() * W }
          cx.save(); cx.translate(p.x, p.y); cx.rotate(p.r); cx.globalAlpha = .55;
          if (p.leaf) { cx.fillStyle = '#4fae7a'; cx.beginPath(); cx.ellipse(0, 0, p.s * 1.8, p.s * .8, 0, 0, 6.3); cx.fill() }
          else { cx.fillStyle = '#e8cb85'; cx.beginPath(); cx.ellipse(0, 0, p.s * .6, p.s, 0, 0, 6.3); cx.fill() }
          cx.restore()
        });
        requestAnimationFrame(draw)
      })();
    });
 