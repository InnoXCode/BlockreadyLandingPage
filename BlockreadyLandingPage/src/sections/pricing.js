import { trackEvent } from "../scripts/tracking.js";
import { appendAttribution } from "../scripts/attribution.js";
import { getOfferUrl } from "../config/offers.js";
import { select, selectAll } from "../utils/dom.js";

        
        // Analytics
        window.dataLayer = window.dataLayer || [];
        
        // Pricing data - encapsulated to avoid global scope
        const pricingData = {
            USD: {
                symbol: '$',
                pro: {
                    '3m': { price: 10.99, period: '/mo', url: 'https://www.blockready.com/offers/RLy9gFrx', billingText: '$32.97 billed every 3 months, cancel anytime' },
                    '6m': { price: 7.99, period: '/mo', url: 'https://www.blockready.com/offers/5FmUKBFM', billingText: '$47.94 billed every 6 months, cancel anytime' },
                    '12m': { price: 4.99, period: '/mo', url: 'https://www.blockready.com/offers/SByxbzCQ', billingText: '$59.88 billed every 12 months, cancel anytime' },
                    'lifetime': { price: 149, period: '', url: 'https://www.blockready.com/offers/YpCgdamn', billingText: 'One-time payment' }
                },
                expert: {
                    '3m': { price: 13.99, period: '/mo', url: 'https://www.blockready.com/offers/MJ4hj8nk', billingText: '$41.97 billed every 3 months, cancel anytime' },
                    '6m': { price: 10.99, period: '/mo', url: 'https://www.blockready.com/offers/7gkrDF2j', billingText: '$65.94 billed every 6 months, cancel anytime' },
                    '12m': { price: 7.99, period: '/mo', url: 'https://www.blockready.com/offers/r2JzE6dG', billingText: '$95.88 billed every 12 months, cancel anytime' },
                    'lifetime': { price: 249, period: '', url: 'https://www.blockready.com/offers/cFevparL', billingText: 'One-time payment' }
                }
            },


AED: {
    symbol: 'د.إ',
    pro: {
        '3m': { price: 40, period: '/mo', url: 'https://www.blockready.com/offers/6aX8FNsw', billingText: 'د.إ120 billed every 3 months, cancel anytime' },
        '6m': { price: 30, period: '/mo', url: 'https://www.blockready.com/offers/xxNcFA2D', billingText: 'د.إ180 billed every 6 months, cancel anytime' },
        '12m': { price: 19, period: '/mo', url: 'https://www.blockready.com/offers/dJLjRvCV', billingText: 'د.إ228 billed every 12 months, cancel anytime' },
        'lifetime': { price: 549, period: '', url: 'https://www.blockready.com/offers/SFjJALno', billingText: 'One-time payment' }
    },
    expert: {
        '3m': { price: 53, period: '/mo', url: 'https://www.blockready.com/offers/mxMiFfku', billingText: 'د.إ159 billed every 3 months, cancel anytime' },
        '6m': { price: 41, period: '/mo', url: 'https://www.blockready.com/offers/nLrbHziJ', billingText: 'د.إ246 billed every 6 months, cancel anytime' },
        '12m': { price: 29, period: '/mo', url: 'https://www.blockready.com/offers/bmYCZH3m', billingText: 'د.إ348 billed every 12 months, cancel anytime' },
        'lifetime': { price: 919, period: '', url: 'https://www.blockready.com/offers/veQKSF8s', billingText: 'One-time payment' }
    }
},

EUR: {
    symbol: '€',
    pro: {
        '3m': { price: 9.99, period: '/mo', url: 'https://www.blockready.com/offers/UztWkx75', billingText: '€29.97 billed every 3 months, cancel anytime' },
        '6m': { price: 6.99, period: '/mo', url: 'https://www.blockready.com/offers/fLwoNRZd', billingText: '€41.94 billed every 6 months, cancel anytime' },
        '12m': { price: 4.29, period: '/mo', url: 'https://www.blockready.com/offers/UnRpqQd2', billingText: '€51.48 billed every 12 months, cancel anytime' },
        'lifetime': { price: 129, period: '', url: 'https://www.blockready.com/offers/GDzbU9t3', billingText: 'One-time payment' }
    },
    expert: {
        '3m': { price: 11.99, period: '/mo', url: 'https://www.blockready.com/offers/HD8kvaNc', billingText: '€35.97 billed every 3 months, cancel anytime' },
        '6m': { price: 9.99, period: '/mo', url: 'https://www.blockready.com/offers/WFzCxRuL', billingText: '€59.94 billed every 6 months, cancel anytime' },
        '12m': { price: 6.99, period: '/mo', url: 'https://www.blockready.com/offers/WjbN2YMM', billingText: '€83.88 billed every 12 months, cancel anytime' },
        'lifetime': { price: 219, period: '', url: 'https://www.blockready.com/offers/XwTZjD56', billingText: 'One-time payment' }
    }
},


GBP: {
    symbol: '£',
    pro: {
        '3m': { price: 8.99, period: '/mo', url: 'https://www.blockready.com/offers/AbyGCmQ4', billingText: '£26.97 billed every 3 months, cancel anytime' },
        '6m': { price: 5.99, period: '/mo', url: 'https://www.blockready.com/offers/rhcQHTCc', billingText: '£35.94 billed every 6 months, cancel anytime' },
        '12m': { price: 3.99, period: '/mo', url: 'https://www.blockready.com/offers/DkUPQaGd', billingText: '£47.88 billed every 12 months, cancel anytime' },
        'lifetime': { price: 119, period: '', url: 'https://www.blockready.com/offers/hxzTMxZ7', billingText: 'One-time payment' }
    },
    expert: {
        '3m': { price: 10.99, period: '/mo', url: 'https://www.blockready.com/offers/ZqtyDZ3F', billingText: '£32.97 billed every 3 months, cancel anytime' },
        '6m': { price: 8.99, period: '/mo', url: 'https://www.blockready.com/offers/269i5Luf', billingText: '£53.94 billed every 6 months, cancel anytime' },
        '12m': { price: 5.99, period: '/mo', url: 'https://www.blockready.com/offers/LizBVEJW', billingText: '£71.88 billed every 12 months, cancel anytime' },
        'lifetime': { price: 189, period: '', url: 'https://www.blockready.com/offers/cnzEekLX', billingText: 'One-time payment' }
    }
},


AUD: {
    symbol: '$',
    pro: {
        '3m': { price: 16, period: '/mo', url: 'https://www.blockready.com/offers/ob5XDxNS', billingText: '$48 billed every 3 months, cancel anytime' },
        '6m': { price: 12, period: '/mo', url: 'https://www.blockready.com/offers/B3fbsiot', billingText: '$72 billed every 6 months, cancel anytime' },
        '12m': { price: 8, period: '/mo', url: 'https://www.blockready.com/offers/hP6d3sNq', billingText: '$96 billed every 12 months, cancel anytime' },
        'lifetime': { price: 229, period: '', url: 'https://www.blockready.com/offers/MUVLn2cv', billingText: 'One-time payment' }
    },
    expert: {
        '3m': { price: 21, period: '/mo', url: 'https://www.blockready.com/offers/hX92WCnd', billingText: '$63 billed every 3 months, cancel anytime' },
        '6m': { price: 16, period: '/mo', url: 'https://www.blockready.com/offers/F7gWvYhU', billingText: '$96 billed every 6 months, cancel anytime' },
        '12m': { price: 12, period: '/mo', url: 'https://www.blockready.com/offers/h7zT2QAF', billingText: '$144 billed every 12 months, cancel anytime' },
        'lifetime': { price: 379, period: '', url: 'https://www.blockready.com/offers/uXS98PoJ', billingText: 'One-time payment' }
    }
},


CAD: {
    symbol: '$',
    pro: {
        '3m': { price: 14.99, period: '/mo', url: 'https://www.blockready.com/offers/Kipa8HLL', billingText: '$44.97 billed every 3 months, cancel anytime' },
        '6m': { price: 10.99, period: '/mo', url: 'https://www.blockready.com/offers/mDkFMesy', billingText: '$65.94 billed every 6 months, cancel anytime' },
        '12m': { price: 6.99, period: '/mo', url: 'https://www.blockready.com/offers/AXzQQ9LM', billingText: '$83.88 billed every 12 months, cancel anytime' },
        'lifetime': { price: 209, period: '', url: 'https://www.blockready.com/offers/r29FoGpt', billingText: 'One-time payment' }
    },
    expert: {
        '3m': { price: 19.99, period: '/mo', url: 'https://www.blockready.com/offers/8CE9FYjH', billingText: '$59.97 billed every 3 months, cancel anytime' },
        '6m': { price: 15.99, period: '/mo', url: 'https://www.blockready.com/offers/sZfbeUut', billingText: '$95.94 billed every 6 months, cancel anytime' },
        '12m': { price: 10.99, period: '/mo', url: 'https://www.blockready.com/offers/d69y9pSe', billingText: '$131.88 billed every 12 months, cancel anytime' },
        'lifetime': { price: 349, period: '', url: 'https://www.blockready.com/offers/zvkRjadb', billingText: 'One-time payment' }
    }
},



NZD: {
    symbol: '$',
    pro: {
        '3m': { price: 18.99, period: '/mo', url: 'https://www.blockready.com/offers/ozBkY3FR', billingText: '$56.97 billed every 3 months, cancel anytime' },
        '6m': { price: 13.99, period: '/mo', url: 'https://www.blockready.com/offers/rSS35zh2', billingText: '$83.94 billed every 6 months, cancel anytime' },
        '12m': { price: 8.49, period: '/mo', url: 'https://www.blockready.com/offers/mrLQDnUD', billingText: '$101.88 billed every 12 months, cancel anytime' },
        'lifetime': { price: 259, period: '', url: 'https://www.blockready.com/offers/sVALfaoT', billingText: 'One-time payment' }
    },
    expert: {
        '3m': { price: 24.99, period: '/mo', url: 'https://www.blockready.com/offers/VyCm2EAb', billingText: '$74.97 billed every 3 months, cancel anytime' },
        '6m': { price: 19.49, period: '/mo', url: 'https://www.blockready.com/offers/sP5TsZpc', billingText: '$116.94 billed every 6 months, cancel anytime' },
        '12m': { price: 13.99, period: '/mo', url: 'https://www.blockready.com/offers/rY2vLjkh', billingText: '$167.88 billed every 12 months, cancel anytime' },
        'lifetime': { price: 429, period: '', url: 'https://www.blockready.com/offers/DTb4LJmt', billingText: 'One-time payment' }
    }
},



SAR: {
    symbol: 'ر.س',
    pro: {
        '3m': { price: 42, period: '/mo', url: 'https://www.blockready.com/offers/LAjf9gEE', billingText: 'ر.س126 billed every 3 months, cancel anytime' },
        '6m': { price: 30, period: '/mo', url: 'https://www.blockready.com/offers/bs5eiq4X', billingText: 'ر.س180 billed every 6 months, cancel anytime' },
        '12m': { price: 19, period: '/mo', url: 'https://www.blockready.com/offers/qFbzCb5s', billingText: 'ر.س228 billed every 12 months, cancel anytime' },
        'lifetime': { price: 559, period: '', url: 'https://www.blockready.com/offers/F2a5GiCV', billingText: 'One-time payment' }
    },
    expert: {
        '3m': { price: 53, period: '/mo', url: 'https://www.blockready.com/offers/ssjYrpQG', billingText: 'ر.س159 billed every 3 months, cancel anytime' },
        '6m': { price: 42, period: '/mo', url: 'https://www.blockready.com/offers/Y2SpmPez', billingText: 'ر.س252 billed every 6 months, cancel anytime' },
        '12m': { price: 30, period: '/mo', url: 'https://www.blockready.com/offers/a34XmzaN', billingText: 'ر.س360 billed every 12 months, cancel anytime' },
        'lifetime': { price: 939, period: '', url: 'https://www.blockready.com/offers/HqgUx4Pb', billingText: 'One-time payment' }
    }
}


        };

        // State
        let currentPeriod = '3m';
        let currentCurrency = 'USD';

        // Update prices function

function updatePrices() {
  document.querySelectorAll('#br-pricing .pricing-card').forEach(card => {
    const planType = card.dataset.plan;

    // =====================
    // FREE PLAN
    // =====================
    if (planType === 'free') {
      const symbolEl = card.querySelector('.currency-symbol');
      if (symbolEl) symbolEl.textContent = pricingData[currentCurrency].symbol;
      return;
    }

    // =====================
    // PRO & EXPERT PLANS
    // =====================
    if (planType === 'pro' || planType === 'expert') {
      const data = pricingData[currentCurrency][planType][currentPeriod];

      const symbolEl  = card.querySelector('.currency-symbol');
      const amountEl  = card.querySelector('.price-amount');
      const periodEl  = card.querySelector('.price-period');
      const billingEl = card.querySelector('.billing-info');
      const ctaButton = card.querySelector('.cta-button');
      const badge     = card.querySelector('.best-value-badge');

      // ---- Price updates ----
      if (symbolEl) symbolEl.textContent = pricingData[currentCurrency].symbol;
      if (amountEl) amountEl.textContent = data.price;
      if (periodEl) periodEl.textContent = data.period;
      if (ctaButton && data.url) ctaButton.href = data.url;

      // ---- Billing text ----
      if (billingEl) {
        const totalEl = billingEl.querySelector('.billing-total');
        const subEl   = billingEl.querySelector('.billing-subtext');

        if (totalEl && subEl) {
          if (currentPeriod === 'lifetime') {
            totalEl.textContent = `One-time payment of ${pricingData[currentCurrency].symbol}${data.price}`;
            subEl.textContent = 'Lifetime access · no renewals';
          } else {
            const firstSpaceIndex = data.billingText.indexOf(' ');
            const totalAmount = firstSpaceIndex !== -1
              ? data.billingText.slice(0, firstSpaceIndex)
              : data.billingText;

            const remainderText = firstSpaceIndex !== -1
              ? data.billingText.slice(firstSpaceIndex + 1)
              : '';

            totalEl.textContent = `Pay ${totalAmount} today`;
            subEl.textContent = remainderText;
          }
        }
      }

      // ---- Discount / Value badge logic (12m + Lifetime) ----
      if (badge) {
        badge.hidden = true;
        badge.textContent = '';

        if (currentPeriod === '12m') {
          badge.hidden = false;
          badge.textContent = (planType === 'pro') ? 'SAVE 55%' : 'SAVE 45%';
        } else if (currentPeriod === 'lifetime') {
          badge.hidden = false;
          badge.textContent = 'MAX SAVINGS';
        }
      }

      // ---- Founding member notice (Lifetime only) ----
      const lifetimeNotice = card.querySelector('.br-lifetime-notice');
      if (lifetimeNotice) {
        if (currentPeriod === 'lifetime') {
          lifetimeNotice.classList.add('br-visible');
        } else {
          lifetimeNotice.classList.remove('br-visible');
        }
      }

      // ---- Expert Coaching visibility logic (Lifetime only) ----
      if (planType === 'expert') {
        const coachingItem = card.querySelector('[data-expert-coaching]');
        if (coachingItem) {
          coachingItem.style.display = (currentPeriod === 'lifetime') ? 'flex' : 'none';
        }
      }
    }
  });
}


        // Billing toggle handler
        document.querySelectorAll('#br-pricing .billing-option').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('#br-pricing .billing-option').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                currentPeriod = this.dataset.period;
                updatePrices();
                
                if (window.dataLayer) {
                    window.dataLayer.push({
                        event: 'billing_period_change',
                        billing_period: currentPeriod
                    });
                }
            });
        });

        // Currency dropdown handler
        const currencyDropdown = document.getElementById('currency');
        if (currencyDropdown) {
            currencyDropdown.addEventListener('change', function() {
                currentCurrency = this.value;
                updatePrices();
                
                if (window.dataLayer) {
                    window.dataLayer.push({
                        event: 'currency_change',
                        currency: currentCurrency
                    });
                }
            });
        }


// -------------------------
// Locale-based currency fallback
// -------------------------
function fallbackCurrencyFromLocale() {
  const lang = (navigator.language || '').toLowerCase();

  if (lang.includes('ar-ae')) return 'AED';
  if (lang.includes('ar-sa')) return 'SAR';
  if (lang.includes('en-gb')) return 'GBP';
  if (lang.includes('en-au')) return 'AUD';
  if (lang.includes('en-ca')) return 'CAD';
  if (lang.includes('de') || lang.includes('fr') || lang.includes('es')) return 'EUR';

  return 'USD';
}

// -------------------------
// Geo detection
// -------------------------
async function detectLocation() {
  try {
    const cached = localStorage.getItem('br_user_geo');
    if (cached) {
      const data = JSON.parse(cached);
      if (Date.now() - data.timestamp < 86400000) {
        return data.currency;
      }
    }

    // 🔴 TEMPORARY: force locale fallback (REMOVE AFTER TESTING)
    // throw new Error('force locale fallback');

    const response = await fetch('https://ipapi.co/currency/');
    if (response.ok) {
      const currency = (await response.text()).trim() || 'USD';
      localStorage.setItem('br_user_geo', JSON.stringify({
        currency,
        timestamp: Date.now()
      }));
      return currency;
    }
  } catch (e) {

  }

  return fallbackCurrencyFromLocale();
}


// Initialize
detectLocation().then(currency => {
  if (pricingData[currency]) {
    currentCurrency = currency;
    if (currencyDropdown) currencyDropdown.value = currency;
  }
  updatePrices();
});

// Mobile plan tabs handler
document.querySelectorAll('#br-pricing .mobile-plan-tab').forEach(tab => {
  tab.addEventListener('click', function() {
    document.querySelectorAll('#br-pricing .mobile-plan-tab').forEach(t => t.classList.remove('active'));
    this.classList.add('active');

    const planName = this.dataset.mobilePlan;
    document.querySelectorAll('#br-pricing .pricing-card').forEach(card => {
      card.classList.remove('mobile-active');
      if (card.dataset.plan === planName) {
        card.classList.add('mobile-active');
      }
    });

    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'mobile_plan_view',
        plan_name: planName
      });
    }
  });
});


