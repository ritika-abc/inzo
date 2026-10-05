  
      /* ============ SHARED JS (used by several examples) ============ */

      /* Placeholder pictures. Remove this and put real paths in src="images/photo1.jpg" */
      function ph(n) {
        var h = (n * 47 + 200) % 360;
        return 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="hsl(' + h + ',65%,50%)"/><stop offset="1" stop-color="hsl(' + (h + 50) + ',65%,35%)"/></linearGradient></defs><rect width="800" height="500" fill="url(#g)"/><text x="400" y="290" font-size="140" font-family="sans-serif" font-weight="700" fill="#fff" text-anchor="middle">' + n + '</text></svg>')
      }
      $(document).on('DOMContentLoaded', function () { });
      $(function () { $('img[data-ph]').each(function () { this.src = ph(this.dataset.ph) }) });

      /* Native tracks: adds arrows + turns the mouse wheel into sideways scroll */
      function nat(sel) {
        var $b = $(sel), t = $b.find('.trk')[0];
        function mv(d) { t.scrollBy({ left: d * t.clientWidth * .8, behavior: 'smooth' }) }
        $b.append($('<button class="ar p" aria-label="Previous">&#8249;</button>').click(function () { mv(-1) }),
          $('<button class="ar n" aria-label="Next">&#8250;</button>').click(function () { mv(1) }));
        $(t).on('wheel', function (e) {
          var o = e.originalEvent, mx = t.scrollWidth - t.clientWidth, l = t.scrollLeft;
          if (Math.abs(o.deltaY) <= Math.abs(o.deltaX) || mx <= 0) return;
          if ((o.deltaY > 0 && l < mx - 1) || (o.deltaY < 0 && l > 0)) {
            e.preventDefault();
            $(t).addClass('ns'); clearTimeout(t._t); t._t = setTimeout(function () { $(t).removeClass('ns') }, 160);
            t.scrollLeft = l + o.deltaY
          }
        })
      }

      /* jQuery slider plugin: modes slide | fade | stack | ring */
      $.fn.sx = function (o) {
        o = o || {}; return this.each(function () {
          var m = o.mode || 'slide', $r = $(this).addClass(m + ' ' + (o.cls || '')), $in = $r.find('.sx-in'), $s = $in.children(),
            n = $s.length, i = 0, tm, sx, $d, $pb, $th, $c;
          function go(k) { i = (k + n) % n; draw() }
          function draw() {
            $s.removeClass('on').eq(i).addClass('on');
            if (m == 'slide') $in.css('transform', 'translateX(' + (-i * 100) + '%)');
            if (m == 'stack') $s.each(function (k) {
              var d = (k - i + n) % n;
              $(this).css({ zIndex: n - d, opacity: d > 3 ? 0 : 1, transform: 'translate(' + d * 14 + 'px,' + d * 10 + 'px) scale(' + (1 - d * .05) + ')' })
            });
            if (m == 'ring') {
              var a = 360 / n; $in.css('transform', 'translateZ(-200px) rotateY(' + (-i * a) + 'deg)');
              $s.each(function (k) { $(this).css('transform', 'rotateY(' + k * a + 'deg) translateZ(200px)') })
            }
            if ($d) $d.children().removeClass('on').eq(i).addClass('on');
            if ($th) $th.children().removeClass('on').eq(i).addClass('on');
            if ($c) $c.text((i + 1) + ' / ' + n);
            if (o.auto) {
              clearTimeout(tm);
              if ($pb) $pb.stop(true).css('width', 0).animate({ width: '100%' }, o.auto, 'linear');
              tm = setTimeout(function () { go(i + 1) }, o.auto)
            }
          }
          $r.append($('<button class="ar p" aria-label="Previous">&#8249;</button>').click(function () { go(i - 1) }),
            $('<button class="ar n" aria-label="Next">&#8250;</button>').click(function () { go(i + 1) }));
          if (o.dots) { $d = $('<nav class="dots"/>'); $s.each(function (k) { $d.append($('<b/>').click(function () { go(k) })) }); $r.append($d) }
          if (o.bar) { $pb = $('<i class="pb"/>'); $r.append($pb) }
          if (o.count) { $c = $('<span class="cnt"/>'); $r.append($c) }
          if (o.thumbs) {
            $th = $('<nav class="th"/>').insertAfter($r);
            $s.each(function (k) { var im = $(this).find('img')[0], t = $('<img alt="">').attr('src', im.dataset.ph ? ph(im.dataset.ph) : im.src).click(function () { go(k) }); $th.append(t) })
          }
          if (m == 'stack') $s.click(function () { go(i + 1) });
          if (o.auto) $r.on('mouseenter', function () { clearTimeout(tm); if ($pb) $pb.stop(true) }).on('mouseleave', draw);
          $r.on('touchstart', function (e) { sx = e.originalEvent.touches[0].clientX })
            .on('touchend', function (e) { var dx = e.originalEvent.changedTouches[0].clientX - sx; if (Math.abs(dx) > 40) go(i + (dx < 0 ? 1 : -1)) });
          if (o.wheel) {
            var lk = 0; $r.on('wheel', function (e) {
              var d = e.originalEvent.deltaY; if (!d || lk) return;
              e.preventDefault(); lk = 1; setTimeout(function () { lk = 0 }, 600); go(i + (d > 0 ? 1 : -1))
            })
          }
          draw();
        })
      };
   