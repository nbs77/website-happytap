/* Shared EN/AR dictionary and language switcher for all pages.
   Keys are page-prefixed so a single dictionary serves every page —
   missing keys on a given page are simply skipped. */
(function () {
  var STORAGE_KEY = "happytab-lang";

  var I18N = {
    en: {
      "index.title": "HappyTab | Measure Customer Satisfaction on WhatsApp",
      "index.desc":
        "HappyTab helps Shopify stores collect, manage, and act on customer reviews through WhatsApp.",
      "privacy.title": "HappyTab | Privacy Policy",
      "terms.title": "HappyTab | Terms of Service",

      "nav.features": "Features",
      "nav.pricing": "Pricing",
      "nav.contact": "Contact",
      "nav.cta": "Get Started",
      "nav.home": "Back to home",

      "hero.eyebrow": "⚡ Reviews that grow with every order",
      "hero.h1": "Turn every order into a customer review",
      "hero.p":
        "HappyTab helps Shopify stores send instant WhatsApp follow-ups after purchases, collect feedback, and surface negative experiences before they become churn.",
      "hero.cta1": "Start free",
      "hero.cta2": "See how it works",
      "hero.card.title": "Trusted by modern e-commerce teams",
      "hero.card.p":
        "Automate review collection in Arabic and English with RTL-friendly messaging.",

      "dash.orders": "Orders today",
      "dash.response": "Response rate",
      "dash.alerts": "Negative alerts",
      "dash.alerts.value": "3 urgent",
      "dash.rating": "Average rating",

      "how.title": "How it works",
      "how.sub": "Three simple steps to better reviews",
      "how.1.h": "Customer purchases",
      "how.1.p":
        "A new order is created in Shopify and instantly triggers your review flow.",
      "how.2.h": "WhatsApp message sent",
      "how.2.p":
        "HappyTab sends a friendly, branded message via WhatsApp Business API in Arabic or English.",
      "how.3.h": "Feedback appears in your dashboard",
      "how.3.p":
        "Ratings, notes, and alerts are gathered in one place so your team can respond quickly.",

      "feat.title": "Features",
      "feat.sub": "Built for growth-minded e-commerce teams",
      "feat.1.h": "Automatic review requests",
      "feat.1.p":
        "Trigger feedback after every successful order without manual follow-up.",
      "feat.2.h": "Arabic / English, RTL-ready",
      "feat.2.p":
        "Deliver polished conversations for customers in the language and layout they expect.",
      "feat.3.h": "Instant negative alerts",
      "feat.3.p":
        "Flag low ratings and service issues before they escalate into public complaints.",
      "feat.4.h": "Employee and service ratings",
      "feat.4.p":
        "Understand which team members, teams, or fulfillment steps need attention.",

      "price.title": "Pricing",
      "price.sub": "Flexible plans for small stores and scaling teams",
      "price.permonth": "/mo",
      "price.starter.h": "Starter",
      "price.starter.p": "Perfect for early-stage brands.",
      "price.starter.1": "Up to 500 reviews/month",
      "price.starter.2": "Basic WhatsApp templates",
      "price.starter.3": "Email support",
      "price.starter.cta": "Choose Starter",
      "price.growth.h": "Growth",
      "price.growth.p": "For stores generating consistent revenue.",
      "price.growth.1": "Unlimited review flows",
      "price.growth.2": "Smart alerts and segmentation",
      "price.growth.3": "Priority support",
      "price.growth.cta": "Choose Growth",
      "price.pro.h": "Pro",
      "price.pro.p": "Advanced operations for multi-team brands.",
      "price.pro.1": "Advanced analytics",
      "price.pro.2": "Team-based reporting",
      "price.pro.3": "Dedicated onboarding",
      "price.pro.cta": "Choose Pro",

      "test.title": "Testimonials",
      "test.sub": "Placeholder social proof",
      "test.1":
        "“We reduced missed follow-ups and saw more reviews within the first month.” — Maya, Founder",
      "test.2":
        "“The Arabic experience feels native and our customers respond much faster.” — Omar, Ops Lead",
      "test.3":
        "“Negative alerts helped us fix issues before they hurt our brand.” — Lina, CX Manager",

      "footer.tagline":
        "Turn feedback into growth with WhatsApp-powered review automation.",
      "footer.privacy": "Privacy Policy",
      "footer.terms": "Terms of Service",
      "footer.affiliation":
        "This website is affiliated with <strong>Nassfeed</strong>.",

      "privacy.h1": "Privacy Policy",
      "privacy.updated": "Last updated: August 3, 2026",
      "privacy.intro":
        "This is a preliminary privacy policy for review purposes only. It is not final legal advice and should be reviewed by counsel before deployment.",
      "privacy.collect.h": "What data we collect",
      "privacy.collect.p":
        "HappyTab may process customer contact details, order information, feedback responses, and related metadata needed to send review requests and analyze customer satisfaction.",
      "privacy.messages.h": "How messages are sent",
      "privacy.messages.p":
        "Messages may be sent through the WhatsApp Business API. Processing and delivery may involve infrastructure and service providers operated by Meta and related vendors. We do not claim to provide legal advice or guarantee specific delivery outcomes.",
      "privacy.security.h": "Data handling and security",
      "privacy.security.p":
        "Customer phone numbers are treated as sensitive personal data and are stored in an encrypted or protected form where feasible. We do not sell customer data. We may delete or correct personal data upon request, subject to legal retention requirements.",
      "privacy.intl.h": "International data protection",
      "privacy.intl.p":
        "We aim to comply with applicable privacy frameworks, including the General Data Protection Regulation (GDPR) where relevant, and provide a lawful basis for processing personal data.",
      "privacy.contact.h": "Contact",
      "privacy.contact.p":
        'For privacy questions, contact us at <a href="mailto:info@happytap.io">info@happytap.io</a>.',

      "terms.h1": "Terms of Service",
      "terms.updated": "Last updated: August 3, 2026",
      "terms.intro":
        "This is a preliminary terms of service draft for review purposes only. It should be reviewed by counsel before final use.",
      "terms.use.h": "Use of the service",
      "terms.use.p":
        "By using HappyTab, you agree to use the service responsibly and in accordance with applicable laws, platform policies, and your own customer communication standards.",
      "terms.account.h": "Account responsibility",
      "terms.account.p":
        "You are responsible for the accuracy of the information you provide, including customer contact details and business data used with the service.",
      "terms.limits.h": "Limitations",
      "terms.limits.p":
        "HappyTab provides tools to support review collection and reporting, but does not guarantee specific outcomes, response rates, or legal compliance in every jurisdiction.",
      "terms.contact.h": "Contact",
      "terms.contact.p":
        'Questions about these terms can be sent to <a href="mailto:info@happytap.io">info@happytap.io</a>.'
    },

    ar: {
      "index.title": "HappyTab | قياس رضا العملاء عبر واتساب",
      "index.desc":
        "يساعد HappyTab متاجر شوبيفاي على جمع تقييمات العملاء وإدارتها والتفاعل معها عبر واتساب.",
      "privacy.title": "HappyTab | سياسة الخصوصية",
      "terms.title": "HappyTab | شروط الخدمة",

      "nav.features": "المميزات",
      "nav.pricing": "الأسعار",
      "nav.contact": "تواصل معنا",
      "nav.cta": "ابدأ الآن",
      "nav.home": "العودة للرئيسية",

      "hero.eyebrow": "⚡ تقييمات تنمو مع كل طلب",
      "hero.h1": "حوّل كل طلب إلى تقييم من عميلك",
      "hero.p":
        "يساعد HappyTab متاجر شوبيفاي على إرسال رسائل متابعة فورية عبر واتساب بعد الشراء، وجمع آراء العملاء، ورصد التجارب السلبية قبل أن تتحول إلى فقدان للعميل.",
      "hero.cta1": "ابدأ مجانًا",
      "hero.cta2": "شاهد كيف يعمل",
      "hero.card.title": "موثوق من فرق التجارة الإلكترونية الحديثة",
      "hero.card.p":
        "أتمتة جمع التقييمات بالعربية والإنجليزية مع دعم كامل للكتابة من اليمين إلى اليسار.",

      "dash.orders": "الطلبات اليوم",
      "dash.response": "معدل الاستجابة",
      "dash.alerts": "تنبيهات سلبية",
      "dash.alerts.value": "3 عاجلة",
      "dash.rating": "متوسط التقييم",

      "how.title": "كيف يعمل",
      "how.sub": "ثلاث خطوات بسيطة لتقييمات أفضل",
      "how.1.h": "العميل يشتري",
      "how.1.p": "يُنشأ طلب جديد في شوبيفاي ويُفعّل مسار التقييم فورًا.",
      "how.2.h": "تُرسل رسالة واتساب",
      "how.2.p":
        "يرسل HappyTab رسالة ودّية تحمل هوية متجرك عبر واتساب بزنس بالعربية أو الإنجليزية.",
      "how.3.h": "تظهر الآراء في لوحتك",
      "how.3.p":
        "تُجمع التقييمات والملاحظات والتنبيهات في مكان واحد ليستجيب فريقك بسرعة.",

      "feat.title": "المميزات",
      "feat.sub": "مصمَّم لفرق التجارة الإلكترونية الطموحة",
      "feat.1.h": "طلبات تقييم تلقائية",
      "feat.1.p": "أرسل طلب التقييم بعد كل طلب ناجح دون متابعة يدوية.",
      "feat.2.h": "عربي / إنجليزي بدعم كامل لـ RTL",
      "feat.2.p":
        "قدّم محادثات متقنة لعملائك باللغة والتنسيق اللذين يتوقعونهما.",
      "feat.3.h": "تنبيهات فورية للتقييمات السلبية",
      "feat.3.p":
        "ارصد التقييمات المنخفضة ومشكلات الخدمة قبل أن تتحول إلى شكاوى علنية.",
      "feat.4.h": "تقييم الموظفين والخدمات",
      "feat.4.p":
        "اعرف أي الموظفين أو الفرق أو مراحل التنفيذ يحتاج إلى تحسين.",

      "price.title": "الأسعار",
      "price.sub": "خطط مرنة للمتاجر الصغيرة والفرق المتنامية",
      "price.permonth": "/شهريًا",
      "price.starter.h": "المبتدئة",
      "price.starter.p": "مثالية للعلامات في بدايتها.",
      "price.starter.1": "حتى 500 تقييم شهريًا",
      "price.starter.2": "قوالب واتساب أساسية",
      "price.starter.3": "دعم عبر البريد الإلكتروني",
      "price.starter.cta": "اختر المبتدئة",
      "price.growth.h": "النمو",
      "price.growth.p": "للمتاجر ذات الإيرادات المستقرة.",
      "price.growth.1": "مسارات تقييم غير محدودة",
      "price.growth.2": "تنبيهات ذكية وتقسيم للعملاء",
      "price.growth.3": "دعم ذو أولوية",
      "price.growth.cta": "اختر النمو",
      "price.pro.h": "الاحترافية",
      "price.pro.p": "عمليات متقدمة للعلامات متعددة الفرق.",
      "price.pro.1": "تحليلات متقدمة",
      "price.pro.2": "تقارير حسب الفريق",
      "price.pro.3": "إعداد وتهيئة مخصصة",
      "price.pro.cta": "اختر الاحترافية",

      "test.title": "آراء العملاء",
      "test.sub": "نماذج توضيحية",
      "test.1":
        "«قلّلنا المتابعات الفائتة وحصلنا على تقييمات أكثر خلال الشهر الأول.» — مايا، مؤسِّسة",
      "test.2":
        "«التجربة العربية تبدو أصيلة وعملاؤنا يستجيبون أسرع بكثير.» — عمر، مدير العمليات",
      "test.3":
        "«التنبيهات السلبية ساعدتنا على معالجة المشكلات قبل أن تضرّ بعلامتنا.» — لينا، مديرة تجربة العملاء",

      "footer.tagline":
        "حوّل آراء عملائك إلى نمو عبر أتمتة التقييمات على واتساب.",
      "footer.privacy": "سياسة الخصوصية",
      "footer.terms": "شروط الخدمة",
      "footer.affiliation":
        "هذا الموقع تابع لشركة <strong>Nassfeed</strong>.",

      "privacy.h1": "سياسة الخصوصية",
      "privacy.updated": "آخر تحديث: 3 أغسطس 2026",
      "privacy.intro":
        "هذه سياسة خصوصية أولية لأغراض المراجعة فقط، وليست استشارة قانونية نهائية، ويجب مراجعتها من قِبل مستشار قانوني قبل الاعتماد.",
      "privacy.collect.h": "البيانات التي نجمعها",
      "privacy.collect.p":
        "قد يعالج HappyTab بيانات التواصل مع العملاء، ومعلومات الطلبات، وردود التقييم، والبيانات الوصفية المرتبطة بها واللازمة لإرسال طلبات التقييم وتحليل رضا العملاء.",
      "privacy.messages.h": "كيف تُرسل الرسائل",
      "privacy.messages.p":
        "قد تُرسل الرسائل عبر واجهة واتساب بزنس. وقد يشمل التشغيل والتسليم بنية تحتية ومزوّدي خدمات تديرهم Meta وجهات مرتبطة بها. نحن لا نقدّم استشارات قانونية ولا نضمن نتائج تسليم محددة.",
      "privacy.security.h": "التعامل مع البيانات وأمنها",
      "privacy.security.p":
        "تُعامَل أرقام هواتف العملاء كبيانات شخصية حساسة وتُخزَّن بصيغة مشفّرة أو محمية حيثما أمكن. نحن لا نبيع بيانات العملاء. ويمكننا حذف البيانات الشخصية أو تصحيحها عند الطلب، مع مراعاة متطلبات الاحتفاظ القانونية.",
      "privacy.intl.h": "حماية البيانات دوليًا",
      "privacy.intl.p":
        "نسعى للامتثال لأطر الخصوصية المعمول بها، بما فيها اللائحة العامة لحماية البيانات (GDPR) عند انطباقها، وتوفير أساس قانوني لمعالجة البيانات الشخصية.",
      "privacy.contact.h": "تواصل معنا",
      "privacy.contact.p":
        'لأي استفسار يتعلق بالخصوصية، تواصل معنا على <a href="mailto:info@happytap.io">info@happytap.io</a>.',

      "terms.h1": "شروط الخدمة",
      "terms.updated": "آخر تحديث: 3 أغسطس 2026",
      "terms.intro":
        "هذه مسودة أولية لشروط الخدمة لأغراض المراجعة فقط، ويجب مراجعتها من قِبل مستشار قانوني قبل الاعتماد النهائي.",
      "terms.use.h": "استخدام الخدمة",
      "terms.use.p":
        "باستخدامك HappyTab فإنك توافق على استخدام الخدمة بمسؤولية ووفقًا للقوانين المعمول بها وسياسات المنصات ومعايير التواصل مع عملائك.",
      "terms.account.h": "مسؤولية الحساب",
      "terms.account.p":
        "أنت مسؤول عن دقة المعلومات التي تقدّمها، بما في ذلك بيانات التواصل مع العملاء وبيانات نشاطك التجاري المستخدمة مع الخدمة.",
      "terms.limits.h": "حدود المسؤولية",
      "terms.limits.p":
        "يوفّر HappyTab أدوات لدعم جمع التقييمات وإعداد التقارير، لكنه لا يضمن نتائج محددة أو معدلات استجابة أو الامتثال القانوني في كل الولايات القضائية.",
      "terms.contact.h": "تواصل معنا",
      "terms.contact.p":
        'يمكن إرسال الأسئلة المتعلقة بهذه الشروط إلى <a href="mailto:info@happytap.io">info@happytap.io</a>.'
    }
  };

  function applyLang(lang) {
    var dict = I18N[lang] || I18N.en;
    var root = document.documentElement;

    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";

    function each(attr, apply) {
      var nodes = document.querySelectorAll("[" + attr + "]");
      for (var i = 0; i < nodes.length; i++) {
        var value = dict[nodes[i].getAttribute(attr)];
        if (value != null) apply(nodes[i], value);
      }
    }

    each("data-i18n", function (el, v) { el.textContent = v; });
    // innerHTML is safe here: every value comes from the hardcoded dictionary above.
    each("data-i18n-html", function (el, v) { el.innerHTML = v; });
    each("data-i18n-content", function (el, v) { el.setAttribute("content", v); });

    var label = document.querySelector("#lang-toggle .lang-text");
    if (label) label.textContent = lang === "ar" ? "EN" : "عربي";

    var btn = document.getElementById("lang-toggle");
    if (btn) {
      btn.setAttribute(
        "aria-label",
        lang === "ar" ? "Switch to English" : "التبديل إلى العربية"
      );
    }
  }

  function currentLang() {
    var root = document.documentElement;
    return root.lang === "ar" ? "ar" : "en";
  }

  applyLang(currentLang());

  var toggle = document.getElementById("lang-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = currentLang() === "ar" ? "en" : "ar";
      try { localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
      applyLang(next);
    });
  }
})();
