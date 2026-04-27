/* ============================================================
   Build Room — CTA tracking
   Fires named PostHog events on every CTA click for cleaner
   funnel analysis. Runs alongside autocapture.

   Tracked elements: .cta, .apply-cta
   Event: cta_clicked
   Properties: cta_name, cta_text, cta_destination, cta_position,
               page_path, page_section
   ============================================================ */

(function () {
  // Map Whop URL patterns → short, stable names so funnels are easy to filter.
  function deriveCtaName(href) {
    if (!href) return 'unknown';
    if (href.indexOf('plan_yRLG1PNR7m8Yh') !== -1) return 'claim_free';
    if (href.indexOf('plan_CbVyv3zqRXaFH') !== -1) return 'start_trial';
    if (href.indexOf('/automateit/build-room') !== -1) return 'join_buildroom';
    if (href.indexOf('/automateit/cohort-8e') !== -1) return 'join_cohort';
    if (href.indexOf('/automateit/1-on-1') !== -1) return 'join_waitlist';
    return 'other';
  }

  // Walk up the DOM to find the nearest <section> and pull a label from it.
  // Falls back to "unknown_section" if no section exists.
  function getSectionLabel(el) {
    var section = el.closest('section');
    if (!section) return 'unknown_section';
    // Prefer the mono-label inside the section if present.
    var label = section.querySelector('.mono-label');
    if (label && label.textContent) {
      return label.textContent.trim().toLowerCase().replace(/\s+/g, '_');
    }
    return section.className.split(' ')[0] || 'unknown_section';
  }

  function trackCta(el) {
    if (typeof window.posthog === 'undefined') return;

    var href = el.getAttribute('href') || '';
    var text = (el.textContent || '').trim().replace(/\s+/g, ' ');

    window.posthog.capture('cta_clicked', {
      cta_name: deriveCtaName(href),
      cta_text: text,
      cta_destination: href,
      cta_class: el.className,
      page_path: window.location.pathname,
      page_section: getSectionLabel(el),
    });
  }

  function attachListeners() {
    var selectors = '.cta, .apply-cta';
    var ctas = document.querySelectorAll(selectors);
    for (var i = 0; i < ctas.length; i++) {
      (function (el) {
        el.addEventListener('click', function () {
          trackCta(el);
        });
      })(ctas[i]);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attachListeners);
  } else {
    attachListeners();
  }
})();
