(() => {
  const deck = document.getElementById('deck');
  const originalCover = deck.querySelector('.slide.dark-slide')?.outerHTML || '';
  const style = document.createElement('style');
  style.textContent = `
    .ml-slide{background:#fbfcfd!important;color:#092f5a!important;border-top:10px solid transparent;border-image:linear-gradient(90deg,#ef7837 0 18%,#0aa79d 18% 60%,#0a315c 60%) 1}
    .ml-slide .slide-inner{background:#fbfcfd!important}.ml-slide .slide-body{padding-top:18px;display:flex;flex-direction:column;gap:18px;color:#172b3f!important}
    .ml-header{height:64px!important;display:flex!important;align-items:center!important;justify-content:flex-start!important}.ml-header img{width:225px!important;height:58px!important;object-fit:contain!important;object-position:right center!important}
    .ml-cover-logo{width:255px!important;height:auto!important;object-fit:contain!important}.ml-slide .slide-title{color:#092f5a!important;font-weight:900!important;position:relative;z-index:2}.ml-slide .slide-title-line{background:#ef7837!important}
    .ml-index{position:absolute;left:46px;top:24px;color:#eaf0f3!important;font-size:5.4rem;line-height:1;font-weight:900;letter-spacing:-5px;z-index:0}
    .ml-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}.ml-grid.three{grid-template-columns:repeat(3,minmax(0,1fr))}
    .ml-card{position:relative;overflow:hidden;background:#fff!important;border:1px solid #dce4e9;border-top:5px solid #16a39a;border-radius:16px;padding:22px 25px;box-shadow:0 12px 30px rgba(6,30,58,.08);color:#24384c!important}
    .ml-card.orange{border-top-color:#f47a38}.ml-card.navy{border-top-color:#0a315c}.ml-card h3{font-size:1.2rem;color:#0a315c;margin:0 0 9px}.ml-card p,.ml-card li{font-size:1rem;line-height:1.65;color:#24384c}.ml-card ul{margin:8px 0 0;padding:0;list-style-position:inside}.ml-card li::marker{color:#0aa79d}
    .ml-lead{width:min(920px,88%);margin:4px auto 10px;text-align:center;font-size:1.28rem;line-height:1.8;color:#20364b}.ml-note{background:#eef8f7;border-right:6px solid #16a39a;padding:14px 18px;color:#153f50;font-weight:700;line-height:1.7}.ml-note.orange{background:#fff6ed;border-right-color:#f47a38}.ml-note.dark,.white-slide .ml-note.dark{background:#0a315c!important;border-right-color:#f47a38!important}.ml-note.dark,.white-slide .ml-note.dark,.ml-note.dark *,.white-slide .ml-note.dark *{color:#fff!important;text-shadow:none!important}
    .ml-flow{display:flex;align-items:center;gap:8px;direction:rtl;padding:24px 12px;background:linear-gradient(135deg,#f4f9fa,#fff);border-radius:18px;border:1px solid #dce7eb}.ml-step{flex:1;min-height:125px;background:#fff;border:1px solid #d8e3e8;border-bottom:6px solid #16a39a;border-radius:16px;padding:22px 13px;text-align:center;box-shadow:0 10px 25px rgba(9,47,90,.07)}.ml-step:nth-of-type(even){border-bottom-color:#ef7837}.ml-step b{display:block;color:#0a315c;font-size:1.03rem;margin-bottom:8px}.ml-arrow{color:#f47a38;font-size:1.7rem;font-weight:900}
    .ml-table{width:100%;border-collapse:separate;border-spacing:0;background:#fff;border:1px solid #cbd8df;border-radius:10px;overflow:hidden}.ml-table th,.ml-table th *{background:#0a315c!important;color:#fff!important;text-shadow:none!important}.ml-table th{padding:13px 15px;text-align:right;font-size:1rem;font-weight:900}.ml-table td{padding:12px 15px;text-align:right;border-bottom:1px solid #dce4e9;font-size:.96rem;line-height:1.55}.ml-table tr:nth-child(even) td{background:#eef7f6}.ml-table tr:last-child td{border-bottom:0}
    .ml-bars{display:flex;flex-direction:column;gap:14px;width:88%;margin:12px auto}.ml-bar{display:grid;grid-template-columns:170px 1fr 80px;gap:12px;align-items:center;font-weight:800}.ml-track{height:25px;background:#e6edf1;border-radius:20px;overflow:hidden}.ml-fill{height:100%;background:linear-gradient(90deg,#0aa79d,#16c4b9);border-radius:20px}.ml-bar.orange .ml-fill{background:linear-gradient(90deg,#ef7837,#ff9a62)}
    .ml-code,.ml-code code{direction:ltr;text-align:left;white-space:pre-wrap;margin:0;background:#071f38!important;color:#eef7f6!important;border-radius:14px;font:700 .9rem/1.6 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;text-shadow:none!important}.ml-code{position:relative;padding:18px 22px;border-right:6px solid #16a39a;box-shadow:0 12px 28px rgba(6,30,58,.14)}.ml-code code{padding:0}.ml-code .comment{color:#8bd8cf!important}.ml-code .result{color:#ffb184!important}.ml-code.has-copy{padding-top:50px}.ml-copy{position:absolute;top:9px;right:10px;z-index:2;border:1px solid rgba(255,255,255,.34);border-radius:8px;background:#fff!important;color:#0a315c!important;padding:5px 11px;font:800 .72rem/1.2 "IBM Plex Sans Arabic",Arial,sans-serif;cursor:pointer}.ml-copy:hover,.ml-copy:focus-visible{background:#e8f7f5!important;outline:2px solid #7ed8d0;outline-offset:2px}
    .ml-download{display:inline-flex;align-items:center;justify-content:center;width:max-content;margin:8px auto 0;padding:14px 24px;border-radius:12px;background:#0a315c!important;color:#fff!important;font-weight:900;text-decoration:none;box-shadow:0 10px 24px rgba(10,49,92,.18)}.ml-download:hover{background:#0d477d!important}
    .ml-quiz{display:grid;gap:14px;width:min(900px,92%);margin:0 auto}.ml-question{font-size:1.35rem;line-height:1.75;text-align:center;font-weight:900;color:#0a315c}.ml-options{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.ml-option{border:2px solid #cbd9df;background:#fff;color:#123654;border-radius:14px;padding:16px 18px;font:inherit;font-size:1rem;font-weight:800;line-height:1.5;cursor:pointer;transition:.18s transform,.18s border-color,.18s background}.ml-option:hover,.ml-option:focus-visible{transform:translateY(-2px);border-color:#0aa79d;outline:none}.ml-option.correct{background:#e7f8f4;border-color:#0aa79d;color:#075b55}.ml-option.wrong{background:#fff0eb;border-color:#ef7837;color:#983a13}.ml-feedback{min-height:62px;border-radius:13px;padding:14px 18px;text-align:center;font-weight:800;line-height:1.6;background:#edf3f6;color:#415667}.ml-feedback.correct{background:#e7f8f4;color:#075b55}.ml-feedback.wrong{background:#fff0eb;color:#983a13}
    .ml-activity{background:#fbfcfd!important;color:#172b3f!important}.ml-activity .slide-title{color:#092f5a!important;text-shadow:none!important}.ml-activity .slide-title-line{background:#ef7837!important}.ml-activity .ml-card{background:rgba(255,255,255,.97)!important}.ml-badge{display:inline-block;background:#f47a38;color:#fff;border-radius:20px;padding:5px 14px;font-size:.82rem;font-weight:800;width:max-content}
    .ml-divider .div-title{color:#092f5a!important;text-shadow:none!important;direction:rtl!important;text-align:right!important;justify-self:stretch!important;width:100%!important;max-width:540px!important;font-size:clamp(3rem,5.2vw,5rem)!important;line-height:1.12!important;text-wrap:balance!important;word-break:normal!important}.ml-divider .div-kicker{color:#ef7837!important;text-shadow:none!important}.ml-divider .div-theme{color:#506371!important;text-shadow:none!important;direction:rtl!important;text-align:right!important}.ml-divider .div-obj,.ml-divider .div-obj span:not(.div-obj-num){color:#092f5a!important;text-shadow:none!important}.ml-divider .div-obj-num{color:#fff!important}.ml-quote{font-size:1.55rem;line-height:1.8;color:#0a315c;font-weight:900;text-align:center;padding:38px 70px}.ml-small{font-size:.84rem;color:#657889}
    .ml-dataset-layout{display:grid;grid-template-columns:minmax(250px,.58fr) minmax(0,1.82fr);gap:18px;align-items:center;direction:rtl}.ml-dataset-summary{display:flex;flex-direction:column;gap:12px}.ml-dataset-summary .ml-lead{width:100%;margin:0;text-align:right;font-size:1.02rem;line-height:1.6}.ml-dataset-summary .ml-card{padding:15px 17px}.ml-dataset-summary .ml-card li{font-size:.86rem;line-height:1.48}.ml-dataset-figure{margin:0;background:#fff;border:1px solid #dce4e9;border-radius:18px;padding:8px;box-shadow:0 12px 30px rgba(6,30,58,.09)}.ml-dataset-figure img{display:block;width:100%;height:auto;border-radius:13px}.ml-data-keys{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:8px;direction:rtl}.ml-data-key{display:flex;align-items:center;justify-content:center;gap:7px;min-height:38px;border-radius:10px;background:#eaf7f5;color:#153f50;font-size:.76rem;font-weight:900;text-align:center}.ml-data-key:nth-child(2){background:#edf0f8;color:#20366f}.ml-data-key:nth-child(3){background:#fff1e5;color:#7c3b0b}.ml-data-dot{width:9px;height:9px;flex:0 0 9px;border-radius:50%;background:#16a39a}.ml-data-key:nth-child(2) .ml-data-dot{background:#24376f}.ml-data-key:nth-child(3) .ml-data-dot{background:#e98024}.ml-dataset-figure figcaption{padding:6px 10px 1px;text-align:center;color:#536779;font-size:.71rem;font-weight:700}
    .ml-shot-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}.ml-shot{background:#fff;border:1px solid #d9e2e8;border-radius:14px;padding:13px 14px;box-shadow:0 8px 22px rgba(6,30,58,.07)}.ml-shot h3{margin:0 0 4px;color:#0a315c;font-size:1rem}.ml-shot p{margin:0 0 8px;color:#536779;font-size:.78rem;line-height:1.45}.ml-shot-table{width:100%;border-collapse:separate;border-spacing:0;direction:ltr;text-align:center;font:700 .73rem/1.35 ui-monospace,SFMono-Regular,Menlo,monospace;border:1px solid #cfd9e2;border-radius:8px;overflow:hidden}.ml-shot-table th{padding:7px 6px;background:#24376f!important;color:#fff!important;white-space:nowrap}.ml-shot-table td{padding:8px 6px;background:#f7f8fb;color:#263750;border-left:1px solid #dce3ea}.ml-shot-table .problem{background:#fff0e2!important;color:#a84b0c!important;font-weight:900}.ml-shot-table .leak{background:#ffe7df!important;color:#9c3518!important;font-weight:900}
    .ml-demo-stack{display:flex;flex-direction:column;gap:13px}.ml-demo-top{display:grid;grid-template-columns:minmax(0,.82fr) minmax(0,1.18fr);gap:15px;align-items:stretch}.ml-demo-top .ml-card{padding:16px 20px}.ml-output-example{display:grid;grid-template-columns:180px 1fr;align-items:stretch;background:#071f38;border-radius:14px;overflow:hidden;box-shadow:0 10px 24px rgba(6,30,58,.13)}.ml-output-label,.ml-output-label *{display:flex;align-items:center;justify-content:center;padding:12px;background:#0a315c!important;color:#fff!important;text-shadow:none!important;font-size:1rem;font-weight:900}.ml-output-example .ml-code{border:0;border-radius:0;box-shadow:none;padding:13px 20px;min-height:58px;display:flex;align-items:center}.ml-demo-stack .ml-note{padding:11px 16px}
    @media(max-width:900px){.ml-grid,.ml-grid.three,.ml-options,.ml-dataset-layout,.ml-shot-grid,.ml-demo-top{grid-template-columns:1fr}.ml-flow{display:grid;grid-template-columns:1fr}.ml-arrow{transform:rotate(90deg)}.ml-card{padding:15px}.ml-lead{font-size:1.05rem}.ml-bar{grid-template-columns:110px 1fr 55px}.ml-dataset-summary .ml-card{display:none}.ml-dataset-summary .ml-lead{text-align:center}.ml-dataset-figure{padding:6px}.ml-output-example{grid-template-columns:1fr}.ml-output-label{padding:8px}}
  `;
  document.head.appendChild(style);

  const header = () => `<div class="slide-header ml-header"><img src="assets/sdaia-academy-logo.png" alt="شعار أكاديمية سدايا"></div>`;
  const content = (title, body, cls='white-slide') => `<div class="slide ml-slide ${cls}"><div class="slide-inner">${header()}<div class="slide-title">${title}<div class="slide-title-line"></div></div><div class="slide-body">${body}</div><div class="slide-footer"></div></div></div>`;
  const divider = (label, title, theme, objectives) => `<div class="slide divider-slide ml-divider"><div class="div-content"><div class="div-kicker">${label}</div><div class="div-title">${title}</div><div class="div-theme">${theme}</div><div class="div-objectives">${objectives.map((x,i)=>`<div class="div-obj"><span class="div-obj-num">${i+1}</span><span>${x}</span></div>`).join('')}</div></div></div>`;
  const cards = items => `<div class="ml-grid ${items.length===3?'three':''}">${items.map((x,i)=>`<div class="ml-card ${['','orange','navy'][i%3]}"><h3>${x[0]}</h3><div>${x[1]}</div></div>`).join('')}</div>`;
  const flow = items => `<div class="ml-flow">${items.map((x,i)=>`${i?'<span class="ml-arrow">←</span>':''}<div class="ml-step"><b>${x[0]}</b>${x[1]}</div>`).join('')}</div>`;
  const explain = (title, meaning, example, pitfall) => content(title, `<p class="ml-lead">${meaning}</p>${cards([['مثال واضح',example],['لماذا يهم؟',pitfall]])}`);
  const slides = [];
  const cover = originalCover
    .replace(/<h1 class="cover-title">[\s\S]*?<\/h1>/, '<h1 class="cover-title">أساسيات تعلم الآلة التطبيقية</h1>')
    .replace(/<[^>]*class="cover-subtitle"[^>]*>[\s\S]*?<\/[^>]+>/, '<p class="cover-subtitle">من المشكلة والبيانات إلى نموذج موثوق وقرار قابل للقياس</p>')
    .replace(/<img[^>]*class="cover-logo-sdaia"[^>]*>/, '<img src="assets/sdaia-academy-logo.png" class="cover-logo-sdaia ml-cover-logo" alt="شعار أكاديمية سدايا">');
  slides.push(cover);
  slides.push(content('رحلة الدورة', `<p class="ml-lead">دورة تمهيدية عملية تبني الفهم خطوةً خطوة، وتربط كل مفهوم بقرار أو تجربة قابلة للتنفيذ.</p>${flow([['صياغة المشكلة','ما النتيجة أو النمط الذي نريد تعلّمه؟ ولأي قرار؟'],['فهم البيانات','الجودة، المتغيرات، والتحيز'],['بناء النموذج','خط أساس ثم خوارزمية مناسبة'],['التقييم','مقياس يعكس تكلفة الخطأ'],['التطبيق','تجربة، مراقبة، وتحسين']])}`));
  slides.push(content('أبرز مخرجات التعلم', cards([['صياغة مشكلات الأعمال','تحويلها إلى مهام تعلم آلة خاضعة أو غير خاضعة للإشراف.'],['تنفيذ سير العمل الكامل','من تقسيم البيانات وبناء خط الأساس إلى اختيار النموذج.'],['تطوير نماذج عملية','التصنيف والانحدار باستخدام خطوط أنابيب scikit-learn.'],['هندسة الخصائص','تطبيق التحجيم والترميز والمعالجة المسبقة بالشكل المناسب.']])));
  slides.push(content('نبذة عن البرنامج', `<p class="ml-lead">يُمكّن البرنامج المشاركين من بناء أساس تطبيقي متين في التعلم الخاضع وغير الخاضع للإشراف، ويغطي سير عمل النمذجة الكامل من صياغة مشكلة الأعمال إلى تقييم النموذج واختيار الحل المناسب.</p>${cards([['نبني ونضبط','نماذج التصنيف والانحدار باستخدام scikit-learn، مع هندسة الخصائص والمعالجة المسبقة.'],['نقيّم ونشخّص','المقاييس المناسبة، التحقق المتقاطع، تحليل الأخطاء، وفرط التخصيص ونقصه وتسرب البيانات.'],['نطبق يوميًا','مختبرات باستخدام pandas وJupyter وXGBoost، ثم مشروع نمذجة متكامل.']])}`));
  slides.push(content('المحاور الرئيسية', cards([['صياغة المشكلة وسير العمل','تحويل مشكلات الأعمال إلى مهام تعلم آلة وتصميم رحلة العمل.'],['التعلم الخاضع للإشراف','الانحدار والتصنيف باستخدام نماذج أساسية وشجرية.'],['هندسة الخصائص والمعالجة','التحجيم والترميز والقيم المفقودة داخل Pipeline.'],['التقييم والتحسين','المقاييس والتحقق المتقاطع وتحليل الأخطاء وضبط المعلمات.'],['النماذج الشجرية المجمعة','الغابات العشوائية والتعزيز المتدرج وXGBoost.'],['التعلم غير الخاضع للإشراف','التجميع واختيار عدد العناقيد والتمثيل البصري.']])));
  slides.push(content('المتطلبات والأدوات', `<div class="ml-grid"><div class="ml-card"><h3>المتطلبات السابقة</h3><p>يوصى بإكمال <b>SDA-FND-103</b> و<b>SDA-FND-104</b> أو امتلاك معرفة مكافئة بأساسيات Python والبيانات.</p></div><div class="ml-card orange"><h3>بيئة التطبيق</h3><p>Python · Jupyter · pandas · scikit-learn · XGBoost · Matplotlib</p></div></div><div class="ml-note">الخطوة التالية بعد إتمام الدورة: <b>SDA-AIE-112</b>.</div>`));
  slides.push(divider('اليوم الأول','من سؤال العمل إلى بيانات جاهزة','صياغة المشكلة وفهم بيانات منافذ وتنظيفها قبل بناء النموذج',['صياغة مشكلة العمل وتحديد الهدف','فحص البيانات وتنظيفها باستخدام pandas','معالجة المفقود والترميز ومنع التسرب']));
  slides.push(content('دفتر Google Colab لليوم الأول', `<p class="ml-lead">دفتر تطبيقي واحد يجمع جميع تمارين اليوم الأول باستخدام حزمة بيانات منافذ، مع خلايا مرتبة ومساحات واضحة للإجابات.</p>${cards([['ماذا يحتوي؟','صياغة المشكلة، قراءة الملف، فحص الفقد والتكرار والنطاقات والقيم المتطرفة، كشف التسرب، تقسيم البيانات، وبناء Preprocessing Pipeline.'],['طريقة التشغيل','نزّل الدفتر، وافتح Google Colab، ثم اختر File → Upload notebook. عند تشغيل أول خلية ارفع ملف حزمة منافذ المضغوط.']])}<a class="ml-download" href="downloads/SDA-AIE-111_Day1_Manafeth_Colab.ipynb" download>تنزيل دفتر اليوم الأول (.ipynb)</a><div class="ml-note orange"><b>التسليم:</b> يحفظ كل طالب أو مجموعة نسخة في Google Drive، يكمل الإجابات، ثم يشارك رابط الدفتر.</div>`));
  slides.push(content('كيف بدأ الذكاء الاصطناعي؟', `<p class="ml-lead">بدأ الذكاء الاصطناعي كسؤال: هل تستطيع الآلة تنفيذ مهام تحتاج عادةً إلى ذكاء بشري؟ ثم تطور مع تحسن البيانات والحوسبة والخوارزميات.</p>${flow([['الأربعينيات والخمسينيات','نماذج مبكرة للخلايا العصبية، ثم طرح آلان تورنغ سؤال ذكاء الآلة.'],['1956','ظهر اسم الذكاء الاصطناعي (Artificial Intelligence) رسميًا في ورشة دارتموث.'],['السبعينيات–التسعينيات','انتشرت الأنظمة الخبيرة، ثم حدثت فترات تراجع عُرفت بشتاء الذكاء الاصطناعي (AI Winter).'],['2012','حقق التعلم العميق (Deep Learning) قفزة كبيرة في التعرّف على الصور.'],['2022 وما بعده','انتشر الذكاء الاصطناعي التوليدي (Generative AI) لإنتاج النصوص والصور والصوت والبرمجيات.']])}<div class="ml-note orange">كل موجة جديدة بُنيت على السابقة؛ المجال لم يبدأ مع أدوات المحادثة الحديثة.</div>`));
  slides.push(content('خريطة مجالات الذكاء الاصطناعي', `<div class="ml-note"><b>العلاقة الأساسية:</b> الذكاء الاصطناعي (AI) هو المظلة الكبرى ← تعلم الآلة (ML) فرع منه ← التعلم العميق (DL) فرع من تعلم الآلة. أما الذكاء التوليدي (Generative AI) فيصف أنظمة تُنشئ محتوى جديدًا، وغالبًا تعتمد على التعلم العميق.</div>${cards([['الذكاء الاصطناعي (AI)','<b>الهدف:</b> جعل الأنظمة تنفذ مهامًا ذكية.<br><b>أبرز المسارات:</b> الأنظمة القائمة على القواعد، تعلم الآلة، معالجة اللغة، الرؤية الحاسوبية، والروبوتات.'],['تعلم الآلة (Machine Learning)','<b>الفكرة:</b> يتعلم النظام أنماطًا من البيانات.<br><b>الأقسام:</b> تعلم خاضع للإشراف (Supervised)، غير خاضع للإشراف (Unsupervised)، وتعلم معزز (Reinforcement Learning).'],['التعلم العميق (Deep Learning)','<b>الفكرة:</b> شبكات عصبية متعددة الطبقات تتعلم تمثيلات معقدة.<br><b>أبرز العائلات:</b> الشبكات الالتفافية (CNN)، المتكررة (RNN)، والمحوّلات (Transformers).'],['الذكاء التوليدي (Generative AI)','<b>الفكرة:</b> ينشئ محتوى جديدًا بدل الاكتفاء بالتصنيف أو التنبؤ.<br><b>المخرجات:</b> نصوص، صور، صوت، فيديو، وبرمجيات. ومن نماذجه اللغوية الكبيرة (LLMs) ونماذج الانتشار (Diffusion Models).']])}<div class="ml-note dark">مهم: ليس كل ذكاء اصطناعي تعلم آلة، وليس كل تعلم آلة تعلمًا عميقًا، وليس كل تعلم عميق ذكاءً توليديًا.</div>`));
  slides.push(content('متى نستخدم تعلم الآلة؟', `<p class="ml-lead">نستخدمه عندما توجد أمثلة سابقة يمكن أن يتعلم منها النظام، ويكون القرار متكررًا، والنتيجة قابلة للقياس.</p>${cards([['حالة 1: قرار يتكرر كثيرًا','<b>المثال:</b> تصل آلاف البلاغات، ونحتاج تحديد أولوية كل بلاغ.<br><b>لماذا تعلم الآلة؟</b> لدينا بلاغات سابقة مع الأولوية الصحيحة ليتعلم منها النموذج.'],['حالة 2: عوامل كثيرة ومتغيرة','<b>المثال:</b> احتمال تأخر الطلب يتأثر بالمدينة واليوم ونوع الخدمة وحجم العمل.<br><b>لماذا تعلم الآلة؟</b> يصعب كتابة قاعدة يدوية تغطي كل التركيبات.'],['حالة 3: نستطيع قياس النجاح','<b>المثال:</b> نقارن الحالات التي صنفها النموذج بالحقيقة، ونقيس كم حالة تأخر اكتشفها.<br><b>لماذا يهم؟</b> القياس يوضح هل النموذج أفضل من الطريقة الحالية.'],['حالة لا تحتاج تعلم الآلة','<b>المثال:</b> رسوم الخدمة = السعر × نسبة ثابتة.<br><b>الحل الأنسب:</b> معادلة واضحة. كذلك لا نستخدم تعلم الآلة إذا لم تتوفر أمثلة كافية أو لم نعرف كيف نقيس النجاح.']])}<div class="ml-note dark">قاعدة سريعة: أمثلة سابقة + نمط قابل للتعلّم + قرار متكرر + مقياس نجاح = حالة مناسبة للدراسة.</div>`));
  slides.push(content('ثلاثة أنماط شائعة للمسائل', `<div class="ml-grid three"><div class="ml-card"><h3>التصنيف (Classification)</h3><p>إسناد الحالة إلى <b>فئة أو وسم محدد</b>.</p><p><b>المخرج:</b> عاجل / عادي.</p><p><b>مثال:</b> إلى أي فئة ينتمي الطلب؟</p></div><div class="ml-card orange"><h3>الانحدار (Regression)</h3><p>تقدير <b>قيمة رقمية</b> لها مقدار.</p><p><b>المخرج:</b> 4.5 أيام.</p><p><b>مثال:</b> كم ستكون مدة المعالجة؟</p></div><div class="ml-card navy"><h3>التجميع (Clustering)</h3><p>اكتشاف <b>مجموعات متشابهة</b> بلا فئات جاهزة.</p><p><b>المخرج:</b> شرائح مكتشفة من البيانات.</p><p><b>مثال:</b> ما أنماط المستفيدين المتشابهة؟</p></div></div><div class="ml-note"><b>التوضيح:</b> التنبؤ (Prediction) اسم عام للنتيجة التي ينتجها النموذج. إذا كانت النتيجة فئة فالمهمة <b>تصنيف</b>، وإذا كانت رقمًا فالمهمة <b>انحدار</b>.</div>`));
  slides.push(content('صياغة مسألة تعلم آلة جيدة', `${flow([['المستخدم','من سيستفيد من التنبؤ؟'],['القرار','ما الإجراء الذي سيتغير؟'],['الهدف','ما المتغير الذي سنتنبأ به؟'],['الأفق','متى نحتاج التنبؤ؟'],['المقياس','كيف نعرف أن النتيجة نافعة؟']])}<div class="ml-note dark">مثال: نتنبأ باحتمال تأخر الطلب قبل 24 ساعة لمساعدة فريق التشغيل على ترتيب الأولويات.</div>`));
  slides.push(content('جودة البيانات قبل كمية البيانات', cards([['الاكتمال','هل القيم المهمة موجودة؟ وكيف نتعامل مع المفقود؟'],['الصحة','هل الأنواع والوحدات والنطاقات منطقية؟'],['التمثيل','هل البيانات تمثل الفئات والمواسم والحالات الفعلية؟'],['الحداثة','هل الأنماط القديمة ما زالت تعكس الواقع الحالي؟']])));
  slides.push(content('نشاط 1: حوّل تحديًا إلى مسألة تعلم آلة', `<span class="ml-badge">عمل مجموعات · 12 دقيقة</span><p class="ml-lead">اختاروا حالة واحدة: توقع الطلب على خدمة، أو ترتيب أولوية البلاغات، أو كشف معاملات غير اعتيادية، أو تقدير مدة إنجاز معاملة.</p><div class="ml-grid"><div class="ml-card"><h3>التسليم المطلوب: بطاقة واحدة</h3><ol><li><b>الحالة:</b> ما المشكلة التي اخترتموها؟</li><li><b>المستخدم:</b> من سيستخدم النتيجة؟</li><li><b>القرار:</b> ماذا سيفعل بناءً عليها؟</li><li><b>المخرج:</b> فئة، رقم، أم حالة غير اعتيادية؟</li><li><b>المدخلات:</b> ما المعلومات المتاحة وقت اتخاذ القرار؟</li><li><b>النجاح:</b> كيف نعرف أن النتيجة مفيدة؟</li></ol></div><div class="ml-card orange"><h3>مثال مكتمل</h3><p><b>الحالة:</b> ترتيب أولوية البلاغات.<br><b>المستخدم:</b> مشرف مركز البلاغات.<br><b>القرار:</b> تحديد البلاغات التي تبدأ معالجتها أولًا.<br><b>المخرج:</b> أولوية عالية، متوسطة، أو منخفضة — تصنيف (Classification).<br><b>المدخلات:</b> نوع البلاغ وموقعه ووقت وصوله ووصفه.<br><b>النجاح:</b> اكتشاف أكبر عدد ممكن من البلاغات عالية الأولوية بصورة صحيحة.</p></div></div><div class="ml-note dark"><b>ما تسلّمونه:</b> بطاقة واحدة من ستة أسطر باسم المجموعة. لا يُطلب كود، ولا اختيار خوارزمية.</div>`, 'ml-activity'));
  slides.push(content('مجموعة بيانات منافذ', `<p class="ml-lead">سنستخدم ملف <b>manafeth_customers.parquet</b> كقصة مستمرة من التنظيف إلى أول نموذج.</p>${cards([['وحدة التحليل','كل صف يمثل عميلًا واحدًا عند تاريخ اللقطة (Snapshot Date) في 1 نوفمبر 2025.'],['الحجم','48,000 عميل و19 عمودًا تشمل المدينة والجهاز وسلوك الطلبات والعروض والتقييم.'],['الهدف (Target)','<b>churned_30d</b>: هل توقف العميل عن إكمال أي طلب خلال الثلاثين يومًا التالية؟ 1 = نعم، 0 = لا.'],['نوع المسألة','تصنيف ثنائي (Binary Classification): متوقف أو مستمر. نسبة التوقف 14%، لذلك الفئتان غير متوازنتين.']])}<div class="ml-note orange">ابدؤوا بملف Parquet لأنه يحافظ على أنواع البيانات أفضل من CSV.</div>`));
  slides.push(content('ما البيانات غير النظيفة في ملف منافذ؟', `<table class="ml-table"><tr><th>الملاحظة الفعلية</th><th>ما معناها؟</th><th>القرار الصحيح</th></tr><tr><td><b>avg_rating</b> مفقود في 14,859 سجلًا (31%)</td><td>كثير من العملاء الجدد لم يقيّموا طلبًا بعد</td><td>لا نحوله إلى صفر؛ ننشئ مؤشر فقد ثم نعوض قيمة مناسبة</td></tr><tr><td><b>last_promo_used</b> مفقود في 10,560 سجلًا (22%)</td><td>غالبًا العميل لم يستخدم عرضًا سابقًا</td><td>نملؤه بفئة واضحة مثل never_used</td></tr><tr><td>وسيط <b>avg_basket_sar</b> = 79.64 وأقصى قيمة = 534.83</td><td>قيمة مرتفعة قد تكون طلبًا كبيرًا حقيقيًا</td><td>نفحصها ولا نحذفها تلقائيًا</td></tr><tr><td>ثلاثة أعمدة مسجلة بعد تاريخ اللقطة</td><td>تكشف المستقبل للنموذج</td><td>نستبعدها لمنع تسرب البيانات (Data Leakage)</td></tr></table><div class="ml-note dark">البيانات غير النظيفة لا تعني فقط خلايا فارغة؛ قد تكون نوعًا خاطئًا، تكرارًا، قيمة غير منطقية، أو معلومة من المستقبل.</div>`));
  slides.push(content('الخطوة 1: قراءة البيانات وفهم شكلها', `<div class="ml-grid"><pre class="ml-code"><code>import pandas as pd

df = pd.read_parquet(
    "manafeth_customers.parquet"
)

print(df.shape)
display(df.head())
df.info()</code></pre><div class="ml-card orange"><h3>ماذا نقرأ من النتائج؟</h3><ul><li><b>shape:</b> عدد الصفوف والأعمدة.</li><li><b>head:</b> شكل أول خمس حالات.</li><li><b>info:</b> أسماء الأعمدة وأنواعها وعدد القيم الموجودة.</li><li>نسأل: هل كل صف يمثل عميلًا؟ وهل الهدف موجود؟</li></ul><p class="ml-small">النتيجة المتوقعة: (48000, 19)</p></div></div><div class="ml-note">لا تبدأ التنظيف قبل أن تعرف معنى الصف والهدف وزمن التنبؤ.</div>`));
  slides.push(content('الخطوة 2: قياس القيم المفقودة', `<div class="ml-grid"><pre class="ml-code"><code><span class="comment"># عدد القيم المفقودة في كل عمود</span>
missing = df.isna().sum()

<span class="comment"># النسبة المئوية</span>
missing_pct = (
    df.isna().mean()
      .mul(100)
      .round(1)
)

print(missing[missing &gt; 0])
print(missing_pct[missing_pct &gt; 0])</code></pre><div class="ml-card"><h3>النتيجة في بيانات منافذ</h3><p><b>avg_rating:</b> 14,859 قيمة مفقودة = 31.0%</p><p><b>last_promo_used:</b> 10,560 قيمة مفقودة = 22.0%</p><h3>السؤال قبل التعويض</h3><p>هل القيمة مفقودة بسبب خطأ، أم أن غيابها يحمل معنى؟ العميل الذي لم يستخدم عرضًا يختلف عن عميل ضاعت بيانات عرضه.</p></div></div>`));
  slides.push(content('الخطوة 3: معالجة المفقود دون تغيير المعنى', `<div class="ml-grid"><pre class="ml-code"><code><span class="comment"># غياب التقييم قد يحمل معلومة</span>
df["rating_missing"] = (
    df["avg_rating"].isna().astype("int8")
)

<span class="comment"># تعويض العمود الرقمي بالوسيط</span>
rating_median = df["avg_rating"].median()
df["avg_rating"] = (
    df["avg_rating"].fillna(rating_median)
)

<span class="comment"># غياب العرض = لم يستخدم عرضًا</span>
df["last_promo_used"] = (
    df["last_promo_used"].fillna("never_used")
)</code></pre><div class="ml-card orange"><h3>لماذا لا نستخدم صفرًا؟</h3><p>تقييم صفر خارج مقياس التقييم من 1 إلى 5، وسيصنع معنى غير موجود.</p><h3>تنبيه مهم</h3><p>في المشروع الحقيقي نحسب الوسيط من بيانات التدريب (Training Data) فقط، ثم نستخدم القيمة نفسها مع الاختبار والبيانات الجديدة.</p></div></div>`));
  slides.push(content('الخطوة 4: فحص التكرار والنطاقات', `<div class="ml-grid"><pre class="ml-code"><code><span class="comment"># تكرار الصف أو معرّف العميل</span>
print(df.duplicated().sum())
print(df["customer_id"].duplicated().sum())

<span class="comment"># قيم خارج النطاق المتوقع</span>
bad_rating = ~df["avg_rating"].between(1, 5)
bad_promo = ~df["promo_usage_rate"].between(0, 1)
bad_basket = df["avg_basket_sar"] &lt;= 0

print(bad_rating.sum())
print(bad_promo.sum())
print(bad_basket.sum())</code></pre><div class="ml-card"><h3>ماذا وجدنا؟</h3><p>لا توجد صفوف مكررة ولا معرفات عملاء مكررة في النسخة الحالية.</p><p>الفحص ما زال ضروريًا؛ نجاحه يعني أن شرط الجودة تحقق، وليس أن خطوة الفحص بلا فائدة.</p><h3>إذا وُجدت مشكلة</h3><p>نفهم مصدرها أولًا، ثم نصححها أو نستبعد السجل مع توثيق السبب.</p></div></div>`));
  slides.push(content('الخطوة 5: هل القيمة المرتفعة خطأ؟', `<div class="ml-grid"><pre class="ml-code"><code>q1 = df["avg_basket_sar"].quantile(0.25)
q3 = df["avg_basket_sar"].quantile(0.75)
iqr = q3 - q1

upper = q3 + 1.5 * iqr
high_baskets = df[
    df["avg_basket_sar"] &gt; upper
]

display(high_baskets[
    ["customer_id", "avg_basket_sar"]
].head())</code></pre><div class="ml-card orange"><h3>قاعدة التعامل مع القيم المتطرفة</h3><ol><li>اكتشف القيمة المتطرفة (Outlier).</li><li>ارجع لمعناها في العمل.</li><li>تحقق: خطأ إدخال أم حالة حقيقية؟</li><li>صحح الخطأ فقط. لا تحذف الحالة الصحيحة لمجرد أنها كبيرة.</li></ol><p><b>في منافذ:</b> 534.83 ريال أعلى من الوسيط، لكنها قد تمثل طلبًا كبيرًا حقيقيًا.</p></div></div>`));
  slides.push(content('الخطوة 6: استبعاد المعرّف وتسرب المستقبل', `<div class="ml-grid"><div class="ml-card orange"><h3>أعمدة لا تدخل النموذج</h3><ul><li><b>customer_id:</b> معرّف للسجل، لا يصف سلوك العميل.</li><li><b>churned_30d:</b> هذا هو الهدف الذي نريد تعلمه.</li><li><b>refund_issued:</b> يحدث غالبًا بعد قرار التنبؤ.</li><li><b>support_ticket_after_snapshot:</b> مسجل بعد تاريخ اللقطة.</li><li><b>next_month_orders:</b> يكشف سلوك الشهر التالي، أي يخبر النموذج بالإجابة.</li></ul></div><pre class="ml-code"><code>target = "churned_30d"

drop_cols = [
    "customer_id",
    target,
    "refund_issued",
    "support_ticket_after_snapshot",
    "next_month_orders",
]

X = df.drop(columns=drop_cols)
y = df[target]

print(X.shape, y.shape)</code></pre></div><div class="ml-note dark">اختبار الزمن: هل كانت هذه المعلومة متاحة فعلًا في 1 نوفمبر 2025؟ إذا ظهرت بعد ذلك فلا يجوز استخدامها.</div>`));
  slides.push(content('الخطوة 7: الترميز والتحجيم داخل مسار آمن', `<div class="ml-grid"><div class="ml-card"><h3>الأعمدة الرقمية</h3><p>نعوّض القيم المفقودة بالوسيط (Median)، ثم نطبق التحجيم (Scaling) عندما تحتاجه الخوارزمية.</p><h3>الأعمدة الفئوية</h3><p>نعوّض الفئة المفقودة، ثم نستخدم الترميز الأحادي (One-Hot Encoding) دون إعطاء ترتيب وهمي للمدن أو طرق الدفع.</p></div><pre class="ml-code"><code>from sklearn.compose import ColumnTransformer
from sklearn.impute import SimpleImputer
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder, StandardScaler

numeric_cols = X.select_dtypes(include="number").columns
category_cols = X.select_dtypes(include="object").columns

numeric_pipe = Pipeline([
    ("impute", SimpleImputer(strategy="median")),
    ("scale", StandardScaler()),
])

category_pipe = Pipeline([
    ("impute", SimpleImputer(strategy="most_frequent")),
    ("encode", OneHotEncoder(handle_unknown="ignore")),
])

preprocess = ColumnTransformer([
    ("num", numeric_pipe, numeric_cols),
    ("cat", category_pipe, category_cols),
])</code></pre></div>`));
  slides.push(content('نشاط تنظيف بيانات منافذ', `<span class="ml-badge">تطبيق فردي · 20 دقيقة</span><div class="ml-grid"><div class="ml-card"><h3>نفّذ بالترتيب</h3><ol><li>اقرأ ملف manafeth_customers.parquet.</li><li>اطبع الحجم والأنواع ونسب الفقد.</li><li>فسّر سبب فقد avg_rating وlast_promo_used.</li><li>افحص التكرارات والنطاقات والقيم المرتفعة.</li><li>أنشئ X وy واستبعد المعرّف وأعمدة المستقبل.</li></ol></div><div class="ml-card orange"><h3>ما الذي تسلّمه؟</h3><ul><li>جدول صغير بالمشكلتين الموجودتين فعليًا ونسبة كل منهما.</li><li>خمسة أسطر كود على الأقل تنفذ فحوص الجودة.</li><li>قائمة الأعمدة المستبعدة مع سبب الاستبعاد.</li><li>قرار معالجة avg_rating وlast_promo_used مع تفسيره.</li></ul></div></div><div class="ml-note dark">المطلوب ليس جعل جميع الخلايا ممتلئة؛ المطلوب اتخاذ قرار تنظيف صحيح يحافظ على معنى البيانات ويمنع التسرب.</div>`, 'ml-activity'));
  slides.push(...[
    explain('تشبيه: تدريب موظف جديد','مجموعة البيانات (Dataset) تشبه ملفات حالات سابقة نعطيها لموظف جديد ليتعلم منها.','نعرض له طلبات سابقة وخصائصها والنتيجة النهائية، ثم نطلب منه تقدير نتيجة طلب جديد.','إذا كانت الأمثلة خاطئة أو منحازة فسيتعلم الموظف—والنموذج—الخطأ نفسه.','استخدمي التشبيه طوال اليوم: أمثلة، تدريب، اختبار، ثم حالات جديدة.'),
    explain('الصف والعمود داخل البيانات','كل صف (Row) يمثل حالة واحدة، وكل عمود (Column) يمثل معلومة عنها.','صف واحد = طلب واحد. الأعمدة = المدينة، النوع، وقت الإنشاء، مدة المعالجة.','إذا لم نحدد معنى الصف فلن نفهم ما الذي يتنبأ به النموذج بالضبط.','اطلبي من المتدربين إكمال الجملة: كل صف في بياناتنا يمثل…'),
    explain('الخصائص والهدف','الخصائص (Features) هي أعمدة المدخلات التي يستخدمها النموذج للتعلّم. أما الهدف (Target) فهو عمود الإجابة الصحيحة التي نريد من النموذج توقعها.','في بيانات منافذ: <b>city</b> و<b>device</b> و<b>orders_per_month</b> و<b>days_since_last_order</b> أمثلة على الخصائص. أما <b>churned_30d</b> فهو الهدف: 0 = العميل مستمر، و1 = العميل متوقف.','ليس كل عمود خاصية؛ نستبعد المعرّف <b>customer_id</b>، وعمود الهدف، وأي معلومة لم تكن متاحة وقت التنبؤ لأنها تسبب تسرب البيانات (Data Leakage).'),
    explain('المعرّف ليس معلومة مفيدة غالبًا','المعرّف (Identifier) يميز السجل لكنه لا يصف الحالة عادةً.','رقم الطلب 90821 لا يفسر سبب التأخر، حتى لو بدا مرتبطًا بالترتيب الزمني.','قد يحفظ النموذج أرقامًا بدل تعلم نمط قابل للتعميم.','قولي: الاسم على الملف لا يشرح محتوى الملف.'),
    explain('التعلم الخاضع للإشراف','في التعلم الخاضع للإشراف (Supervised Learning) نملك خصائص ومعها إجابة صحيحة سابقة يتعلم النموذج الربط بينهما.','لدينا طلبات سابقة ومع كل طلب وسم: متأخر أو غير متأخر.','الجودة تعتمد على صحة التسميات (Labels) وتمثيلها للواقع.','شبهيه بكتاب تمارين يحتوي على الأسئلة والإجابات.'),
    explain('التعلم غير الخاضع للإشراف','في التعلم غير الخاضع للإشراف (Unsupervised Learning) لا توجد إجابة جاهزة؛ نبحث عن بنية أو مجموعات داخل البيانات.','نجمع المستفيدين إلى شرائح متشابهة حسب نمط الاستخدام دون أسماء شرائح مسبقة.','العناقيد ليست حقائق طبيعية؛ تحتاج تفسيرًا وفائدة عملية.','شبهيه بترتيب مكتبة كبيرة إلى رفوف متشابهة دون قائمة تصنيف جاهزة.'),
    explain('التصنيف أم الانحدار؟','التصنيف (Classification) يُسند الحالة إلى فئة أو وسم، أما الانحدار (Regression) فيقدّر قيمة رقمية لها مقدار.','متأخر/غير متأخر = تصنيف. عدد أيام التأخير = انحدار.','صياغة الهدف خطأ تقود إلى نموذج ومقياس خطأ.','اسألي: هل الإجابة اسم فئة أم رقم يمكن جمعه وطرحه؟'),
    explain('سؤال العمل ليس سؤال النموذج','نحوّل الهدف الإداري العام إلى هدف يمكن قياسه من صفوف وأعمدة وزمن واضح.','بدل «حسّن الخدمة» نقول: «تنبأ باحتمال تجاوز 3 أيام عند إنشاء الطلب».','العبارات العامة لا تحدد بيانات أو هدفًا أو لحظة تنبؤ.','اكتبي السؤال الغامض ثم حوّليه أمامهم كلمةً كلمة.'),
    explain('زمن التنبؤ','زمن التنبؤ (Prediction Time) هو اللحظة التي سيصدر فيها النموذج نتيجته، ويحدد ما يجوز استخدامه من معلومات.','إذا تنبأنا عند إنشاء الطلب، فلا يجوز استخدام وقت الإغلاق.','معظم حالات التسريب تصبح واضحة بمجرد رسم خط الزمن.','ارسمي: إنشاء ← معالجة ← إغلاق، وضعي سهم التنبؤ.'),
    explain('ما هو خط الأساس؟','خط الأساس (Baseline) حل بسيط يمثل الحد الأدنى الذي يجب أن يتفوق عليه النموذج.','في التصنيف نتوقع الفئة الأكثر شيوعًا؛ وفي الانحدار نتوقع الوسيط.','من دون خط أساس لا نعرف هل التعقيد أضاف قيمة فعلًا.','قولي: لا نقارن العداء بالفراغ؛ نقارنه بأبسط منافس.'),
    explain('لماذا نفصل الاختبار؟','مجموعة الاختبار (Test Set) تحاكي بيانات جديدة لم يَرَها النموذج أثناء البناء.','ندرب على 80% ونحتفظ بـ20% دون استخدامها في القرارات.','النظر المتكرر للاختبار يجعلنا نضبط النموذج عليه دون قصد.','شبهي الاختبار النهائي بورقة اختبار لا يجوز للطالب رؤيتها أثناء المذاكرة.'),
    explain('الانحدار الخطي ببساطة','الانحدار الخطي (Linear Regression) يرسم علاقة خطية تقريبية بين الخصائص والرقم المتوقع.','كل زيادة في عبء الطلب قد تضيف مقدارًا متوقعًا إلى مدة المعالجة.','لا يعني وجود علاقة خطية أن أحد المتغيرين سبب الآخر.','ارسمي نقاطًا وخطًا يمر في وسطها، ولا تبدئي بالمعادلة.'),
    explain('الخطأ المتبقي','الباقي أو الخطأ (Residual) هو الفرق بين القيمة الحقيقية والقيمة التي توقعها النموذج.','المدة الحقيقية 6 أيام، والتوقع 4 أيام؛ مقدار الخطأ يومان.','تحليل الأخطاء يكشف مجموعات يفشل فيها النموذج حتى لو كان المتوسط جيدًا.','اطلبي منهم تفسير خطأ موجب وخطأ سالب بكلماتهم.'),
    explain('ملخص اليوم الأول','بدأنا من سؤال العمل، ثم فهمنا بيانات منافذ وفحصنا الفقد والتكرار والنطاقات والقيم المتطرفة وتسرب المستقبل، وجهزنا مسار المعالجة.','المخرج: بطاقة مشكلة واضحة + بيانات مفحوصة + قرارات تنظيف مبررة + خصائص وهدف جاهزان للتقسيم.','لا ننتقل إلى النموذج قبل أن نستطيع شرح معنى كل صف وعمود وسبب كل قرار تنظيف.')
  ]);
  slides.push(divider('اليوم الثاني','من البيانات الجاهزة إلى نموذج تصنيف','تطبيق مسار التنظيف الذي بنيناه ثم تدريب نموذج ومقارنة نتائجه',['تقسيم التدريب والتحقق والاختبار','الانحدار اللوجستي وشجرة القرار','الاحتمالات والعتبة وفرط التخصيص']));
  slides.push(content('تقسيم البيانات: ثلاثة أدوار مختلفة', `<table class="ml-table"><tr><th>الجزء</th><th>الغرض</th><th>متى نستخدمه؟</th></tr><tr><td><b>التدريب</b></td><td>يتعلم النموذج الأنماط والمعاملات.</td><td>أثناء بناء النموذج.</td></tr><tr><td><b>التحقق</b></td><td>نقارن الخيارات ونضبط الإعدادات.</td><td>أثناء التجارب.</td></tr><tr><td><b>الاختبار</b></td><td>تقدير الأداء النهائي على بيانات لم يرها النموذج.</td><td>بعد تثبيت القرارات.</td></tr></table><div class="ml-note orange">في البيانات الزمنية يجب أن يسبق التدريب الاختبار زمنيًا.</div>`));
  slides.push(content('تسريب البيانات: أداء رائع ووهمي', `<div class="ml-grid"><div class="ml-card orange"><h3>أمثلة على التسريب</h3><ul><li>متغير لا يتوفر إلا بعد النتيجة.</li><li>تعلم التحويلات من كامل البيانات.</li><li>وجود السجل نفسه في التدريب والاختبار.</li><li>خصائص من المستقبل في مسألة زمنية.</li></ul></div><div class="ml-card"><h3>الوقاية</h3><ul><li>قسّم البيانات أولًا.</li><li>ضع التحويلات داخل Pipeline.</li><li>اسأل: هل المعلومة متاحة لحظة التنبؤ؟</li><li>اختبر على مجموعة مستقلة.</li></ul></div></div>`));
  slides.push(content('خط الأساس قبل النموذج المتقدم', `<p class="ml-lead">خط الأساس إجابة بسيطة نطلب من أي نموذج أن يتفوق عليها بوضوح.</p>${cards([['تصنيف','الفئة الأكثر شيوعًا أو قاعدة عمل بسيطة.'],['انحدار','المتوسط أو الوسيط أو قيمة الفترة السابقة.'],['زمن','توقع أن القادم يشبه آخر فترة أو نفس الموسم.']])}<div class="ml-note">إذا لم يتفوق النموذج على خط الأساس، فالتعقيد لم يضف قيمة بعد.</div>`));
  slides.push(...[
    explain('التصنيف اللوجستي','الانحدار اللوجستي (Logistic Regression) نموذج تصنيف بسيط يعطي احتمالًا بين 0 و1.','يعطي احتمال تأخر 0.72 ثم نستخدم عتبة لتحويله إلى قرار.','اسمه يحتوي Regression لكنه يستخدم غالبًا للتصنيف.','ركزي على الاحتمال والعتبة، واتركي الاشتقاق الرياضي خارج المستوى التمهيدي.'),
    explain('شجرة القرار وفرط التخصيص','شجرة القرار (Decision Tree) تبني أسئلة متتابعة، لكنها قد تحفظ التدريب إذا أصبحت عميقة جدًا.','إذا كانت المدينة الرياض ثم الوقت مساءً ثم العبء مرتفع… تتجه الشجرة لقرار.','العمق الكبير قد يعطي تدريبًا ممتازًا واختبارًا ضعيفًا.','ارسمي ثلاثة أسئلة فقط ثم قارني شجرة قصيرة بأخرى كثيرة الفروع.'),
    explain('التقسيم المتوازن','التقسيم الطبقي (Stratified Split) يحافظ تقريبًا على نسبة كل فئة في التدريب والاختبار.','إذا كانت حالات التأخر 10%، نحافظ على نسبة قريبة في الجزأين.','بدونه قد يحصل الاختبار الصغير على حالات نادرة قليلة جدًا.','استخدمي مثال 100 بطاقة: 90 بيضاء و10 برتقالية.'),
    explain('مختبر اليوم الثاني','يستخدم المتدرب مسار المعالجة الذي بناه في اليوم الأول لتدريب نموذجَي تصنيف ومقارنتهما.','Preprocess → Logistic Regression → Decision Tree → مقارنة نتائج التحقق.','المطلوب أن يمر التدريب والاختبار بالمعالجة نفسها دون تعديل يدوي منفصل.'),
    explain('ملخص اليوم الثاني','حوّلنا بيانات منافذ المنظفة إلى نموذج تصنيف يعطي احتمال توقف لكل عميل.','المخرج: نموذج داخل Pipeline ونتائج أولية على بيانات لم يرها أثناء التدريب.','غدًا سنختار المقاييس المناسبة ونقارن نماذج مجمعة أكثر قوة.')
  ]);
  slides.push(divider('اليوم الثالث','التقييم العادل والنماذج المجمعة','قارن النماذج بالطيات نفسها وحلّل مواضع الخطأ',['المقاييس ومصفوفة الالتباس وPR-AUC','التحقق المتقاطع وتحليل الشرائح','Random Forest وGradient Boosting والتفسير']));
  slides.push(content('عائلتان مفيدتان للبدء', `<div class="ml-grid"><div class="ml-card"><h3>النماذج الخطية</h3><ul><li>سريعة وسهلة التفسير.</li><li>خط أساس قوي لمسائل كثيرة.</li><li>مناسبة للعلاقات التقريبية الخطية.</li></ul></div><div class="ml-card orange"><h3>النماذج الشجرية</h3><ul><li>تلتقط علاقات غير خطية وتفاعلات.</li><li>تحتاج تجهيزًا أقل لبعض الخصائص.</li><li>قد تفرط في التعلّم دون ضبط.</li></ul></div></div><div class="ml-note dark">ابدأ بالأبسط الذي يحقق الهدف، ثم زد التعقيد عند الحاجة.</div>`));
  slides.push(content('النماذج الشجرية المجمعة', `<div class="ml-grid three"><div class="ml-card"><h3>Random Forest</h3><p>يبني أشجارًا متعددة على عينات وخصائص مختلفة، ثم يجمع تنبؤاتها لتقليل التذبذب.</p></div><div class="ml-card orange"><h3>Gradient Boosting</h3><p>يبني الأشجار بالتتابع؛ كل شجرة جديدة تتعلم من أخطاء السابقة.</p></div><div class="ml-card navy"><h3>XGBoost</h3><p>تنفيذ عملي قوي للتعزيز المتدرج مع تنظيم وضبط كفء للبيانات الجدولية.</p></div></div><div class="ml-note">نقارنها بخط أساس خطي وبالطيات نفسها؛ التعقيد لا يُعتمد إلا إذا قدّم تحسنًا ثابتًا ومفيدًا.</div>`));
  slides.push(content('مصفوفة الالتباس: أين يخطئ المصنّف؟', `<table class="ml-table"><tr><th></th><th>تنبأ: إيجابي</th><th>تنبأ: سلبي</th></tr><tr><td><b>الحقيقة: إيجابي</b></td><td>إيجابي صحيح TP</td><td>سلبي كاذب FN</td></tr><tr><td><b>الحقيقة: سلبي</b></td><td>إيجابي كاذب FP</td><td>سلبي صحيح TN</td></tr></table><div class="ml-grid"><div class="ml-card"><h3>Precision</h3><p>من الحالات التي اعتبرناها إيجابية، كم واحدة كانت صحيحة؟</p></div><div class="ml-card orange"><h3>Recall</h3><p>من الإيجابيات الحقيقية، كم واحدة اكتشفناها؟</p></div></div>`));
  slides.push(content('اختيار المقياس حسب تكلفة الخطأ', `<div class="ml-bars"><div class="ml-bar"><span>كشف حالة حرجة</span><div class="ml-track"><div class="ml-fill" style="width:92%"></div></div><span>Recall</span></div><div class="ml-bar orange"><span>تجنب إنذارات كثيرة</span><div class="ml-track"><div class="ml-fill" style="width:86%"></div></div><span>Precision</span></div><div class="ml-bar"><span>فئات متوازنة</span><div class="ml-track"><div class="ml-fill" style="width:72%"></div></div><span>Accuracy</span></div><div class="ml-bar orange"><span>توازن بين الاثنين</span><div class="ml-track"><div class="ml-fill" style="width:78%"></div></div><span>F1</span></div></div><div class="ml-note orange">اربط المقياس بالقرار وتكلفة الخطأ قبل التدريب.</div>`));
  slides.push(content('مقاييس الانحدار باختصار', cards([['MAE','متوسط مقدار الخطأ؛ سهل الشرح وأقل حساسية للقيم المتطرفة.'],['RMSE','يعاقب الأخطاء الكبيرة أكثر عندما تكون مكلفة.'],['R²','يقيس التباين المفسَّر، لكنه لا يشرح حجم الخطأ بوحدته الأصلية.']])));
  slides.push(content('التحقق المتقاطع: مقارنة أكثر ثباتًا', `${flow([['قسّم التدريب','إلى K طيات'],['درّب','على K−1 طية'],['تحقق','على الطية المتبقية'],['كرر','حتى تمر كل طية'],['لخّص','المتوسط والتشتت']])}<div class="ml-note orange">تظل مجموعة الاختبار مغلقة طوال المقارنة وضبط المعلمات، وتُفتح مرة واحدة بعد تثبيت المسار.</div>`));
  slides.push(content('فرط التعلّم وقلة التعلّم', `<div class="ml-grid"><div class="ml-card"><h3>قلة التعلّم</h3><p>أداء ضعيف على التدريب والاختبار.</p><p><b>جرّب:</b> خصائص أفضل أو نموذجًا أكثر مرونة.</p></div><div class="ml-card orange"><h3>فرط التعلّم</h3><p>أداء قوي على التدريب وضعيف على التحقق.</p><p><b>جرّب:</b> تبسيط النموذج أو تنظيمه.</p></div></div><div class="ml-note">راقب الفجوة بين التدريب والتحقق، لا رقمًا واحدًا.</div>`));
  slides.push(content('نشاط 2: اختر المقياس وفسّر قرارك', `<span class="ml-badge">نقاش ثنائي · 10 دقائق</span><div class="ml-grid"><div class="ml-card"><h3>الحالة أ</h3><p>نموذج يرشح الطلبات التي قد تتأخر. الطاقة الاستيعابية محدودة، وكثرة الإنذارات تربك الفريق.</p></div><div class="ml-card orange"><h3>الحالة ب</h3><p>نموذج يكشف حالة سلامة نادرة. تفويت حالة حقيقية أعلى تكلفة من فحص إنذار إضافي.</p></div></div><div class="ml-note dark">حدّدوا المقياس الأساسي والخطأ الأخطر ومقياسًا مساعدًا.</div>`, 'ml-activity'));
  slides.push(...[
    explain('لماذا لا تكفي Accuracy؟','الدقة العامة (Accuracy) هي نسبة التوقعات الصحيحة، لكنها قد تخدعنا عندما تكون فئة نادرة.','إذا كانت 99% من المعاملات سليمة، نموذج يقول «سليمة دائمًا» يحقق 99% ولا يكشف أي احتيال.','يجب ربط المقياس بنوع الخطأ المكلف.','اكتبي المثال العددي واتركيهم يكتشفون الخدعة.'),
    explain('Precision بالتفصيل','الدقة الإيجابية (Precision) تسأل: من كل الحالات التي رفع النموذج لها إنذارًا، كم إنذارًا كان صحيحًا؟','20 إنذارًا، منها 15 صحيحًا: Precision = 15/20 = 75%.','ترتفع أهميتها عندما تكون مراجعة الإنذار مكلفة أو الطاقة محدودة.','استخدمي عبارة: جودة قائمة الإنذارات.'),
    explain('Recall بالتفصيل','الاسترجاع (Recall) يسأل: من كل الحالات الإيجابية الحقيقية، كم حالة وجدها النموذج؟','هناك 20 حالة خطرة، اكتشف 16: Recall = 16/20 = 80%.','يرتفع عندما يكون تفويت الحالة أخطر من فحص إنذار زائد.','استخدمي عبارة: كم حالة مهمة لم نتركها تفلت؟'),
    explain('F1 وPR-AUC','درجة F1 توازن بين Precision وRecall، ومساحة منحنى الدقة والاسترجاع (PR-AUC) تقارن الأداء عبر عتبات متعددة.','نستخدم PR-AUC عند فئة إيجابية نادرة ونهتم بجودة اكتشافها.','لا تختصري القرار في رقم واحد؛ افحصي العتبة ومصفوفة الالتباس.','اشرحي F1 كمصالحة، وPR-AUC كصورة للأداء عبر خيارات كثيرة.'),
    explain('العتبة قرار تشغيلي','العتبة (Threshold) تحول الاحتمال إلى فئة، وتغييرها يبدل عدد الإنذارات والأخطاء.','عتبة 0.8 تقلل الإنذارات غالبًا؛ 0.3 تزيد الاكتشاف وتزيد الإنذارات.','لا توجد عتبة سحرية؛ نختارها حسب التكلفة والطاقة.','اطلبي منهم تحريك عتبة تخيلية وذكر ما يزيد وما ينخفض.'),
    explain('التحقق المتقاطع عمليًا','التحقق المتقاطع (Cross-Validation) يعيد التدريب والتحقق على طيات مختلفة لتقدير ثبات النموذج.','خمس طيات تعطي خمس درجات؛ ننظر للمتوسط والتشتت.','متوسط مرتفع مع تشتت كبير يعني أن الأداء غير مستقر.','شبهيه بخمسة اختبارات قصيرة بدل حكم كامل من اختبار واحد.'),
    explain('مقارنة عادلة بين النماذج','نقارن النماذج على الطيات نفسها وبالمقياس نفسه وبالمعالجة نفسها.','Logistic Regression وRandom Forest يمران عبر Pipeline نفسه وCV نفسه.','تغيير البيانات أو المقياس بين التجارب يجعل المقارنة غير عادلة.','اكتبي جدولًا: النموذج، متوسط CV، الانحراف، زمن التدريب.'),
    explain('Random Forest ببساطة','الغابة العشوائية (Random Forest) تجمع قرارات أشجار كثيرة مختلفة قليلًا ثم تصوت أو تتوسط.','بدل سؤال خبير واحد، نطلب رأي لجنة متنوعة ثم نجمع الآراء.','تقلل فرط تخصيص شجرة واحدة لكنها أكبر وأقل بساطة في الشرح.','ارسمي ثلاث أشجار صغيرة وأسهمًا إلى قرار واحد.'),
    explain('Gradient Boosting ببساطة','التعزيز المتدرج (Gradient Boosting) يبني الأشجار بالتتابع، وكل شجرة تركز على أخطاء ما قبلها.','المتعلم الأول يخطئ في حالات؛ الثاني يركز عليها؛ الثالث يصحح الباقي.','قد يفرط في التخصيص إذا زادت الأشجار أو كان التعلم سريعًا.','شبهيه بفريق يراجع المسودة على جولات، كل جولة تعالج أخطاء محددة.'),
    explain('ما الذي يضيف XGBoost؟','إكس جي بوست (XGBoost) مكتبة محسنة للتعزيز المتدرج، شائعة في البيانات الجدولية وتدعم التنظيم والتعامل الكفء مع التدريب.','نضبط عدد الأشجار وعمقها ومعدل التعلم ثم نقارنها بخط الأساس.','قوته لا تعني أنه يفوز دائمًا، ولا يعالج بيانات سيئة تلقائيًا.','قولي: الأداة أقوى، لكن قواعد المنهجية لم تتغير.'),
    explain('نقص التخصيص','نقص التخصيص (Underfitting) يعني أن النموذج أبسط من أن يلتقط النمط؛ يفشل على التدريب والتحقق معًا.','خط مستقيم لمشكلة منحنية جدًا يعطي أخطاء كبيرة في الجزأين.','الحل قد يكون خصائص أفضل أو نموذجًا أكثر مرونة، لا مجرد تدريب أطول.','ارسمي منحنى ونموذجًا خطيًا لا يتبعه.'),
    explain('فرط التخصيص','فرط التخصيص (Overfitting) يعني أن النموذج حفظ تفاصيل التدريب التي لا تتكرر في البيانات الجديدة.','تدريب 99%، تحقق 72%: الفجوة علامة إنذار.','الحل: تبسيط، تنظيم (Regularization)، بيانات مفيدة أكثر، أو ضبط صحيح.','ركزي على الفجوة لا على رقم التدريب وحده.'),
    explain('تحليل الأخطاء حسب الشرائح','نقسم النتائج إلى شرائح (Slices) مهمة ونقارن الأداء بينها.','نقارن المدن، نوع الطلب، مدة العميل، أو الفترات الزمنية.','متوسط جيد قد يخفي فشلًا كبيرًا في مجموعة صغيرة.','اسألي: من هم الأشخاص أو الحالات التي قد يدفعون ثمن الخطأ؟'),
    explain('أهمية الخصائص بحذر','أهمية التبديل (Permutation Importance) تقيس مقدار تراجع الأداء عند تشويش خاصية.','إذا تراجع الأداء كثيرًا بعد خلط عبء الطلب فهي خاصية مهمة للنموذج.','الأهمية لا تثبت السببية، والخصائص المترابطة قد تتقاسم الأهمية.','استخدمي عبارة: يعتمد عليها النموذج، وليس: تسبب النتيجة.'),
    explain('ضبط المعلمات','المعلمات الفائقة (Hyperparameters) اختيارات نحددها قبل التدريب مثل العمق وعدد الأشجار ومعدل التعلم.','RandomizedSearchCV يجرب عينة من التركيبات داخل Cross-Validation.','ضبط واسع على بيانات قليلة قد يفرط في التخصيص لعملية التحقق نفسها.','ابدئي بنطاقات قليلة منطقية واشرحي سبب كل نطاق.'),
    explain('بطاقة النموذج','بطاقة النموذج (Model Card) توثق الهدف والبيانات والمقاييس والعتبة والقيود والاستخدامات غير المناسبة.','نسجل أن النموذج يساعد ترتيب الطلبات ولا يتخذ قرار رفض آلي.','التوثيق يحمي من استخدام النموذج خارج سياقه.','اعرضي البطاقة كصفحة تسليم إلزامية وليست ملحقًا.'),
    explain('مختبر اليوم الثالث','يقارن المتدرب نموذجًا خطيًا وRandom Forest وXGBoost بالتحقق المتقاطع، ثم يحلل الأخطاء.','جدول النتائج + مصفوفة الالتباس + مقياس رئيسي + شريحتان لتحليل الفجوات.','الفائز ليس أعلى رقم فقط؛ يجب أن يكون مستقرًا وقابلًا للتفسير والتشغيل.','اجعلي كل فريق يدافع عن اختياره في دقيقتين.'),
    explain('ملخص اليوم الثالث','أصبح لدينا مسار كامل: بيانات ومعالجة ونماذج ومقاييس ومقارنة عادلة وتحليل أخطاء وتوثيق.','المخرج: نموذج مرشح مع سبب اختياره وحدوده وعتبته المقترحة.','اليوم الرابع مخصص للبناء؛ لا نضيف نظرية جديدة بعد الآن.','اختتمي بقائمة جاهزية المشروع ووزعي أدوار الفرق قبل المغادرة.')
  ]);
  slides.push(divider('اليوم الثالث — الجزء الثاني','التعلم غير الخاضع للإشراف واختيار النموذج','نكمل الشرح المكثف قبل يوم المشروع',['K-Means واختيار عدد العناقيد','PCA للتمثيل البصري','RandomizedSearchCV وفتح الاختبار مرة واحدة']));
  slides.push(content('التعلم غير الخاضع للإشراف', `<p class="ml-lead">نستخدمه عندما لا توجد تسمية هدف جاهزة، ونبحث عن بنية أو مجموعات أو تمثيل أبسط داخل البيانات.</p>${cards([['التجميع K-Means','يجمع السجلات المتشابهة حول مراكز، بعد تجهيز المقاييس العددية.'],['اختيار K','نوازن بين silhouette وقابلية شرح العناقيد وفائدتها العملية.'],['PCA','يختصر الأبعاد إلى محاور مركبة تساعد على الاستكشاف والرسم، لا على إثبات السببية.']])}`));
  slides.push(content('ضبط المعلمات دون لمس الاختبار', `<div class="ml-grid"><div class="ml-card"><h3>RandomizedSearchCV</h3><ul><li>حدد نطاقات معقولة للمعلمات.</li><li>استخدم Pipeline كاملًا داخل البحث.</li><li>اختر مقياسًا يوافق قرار العمل.</li><li>قارن المتوسط والتشتت عبر الطيات.</li></ul></div><div class="ml-card orange"><h3>قاعدة الاختبار الواحد</h3><ul><li>ثبت الخصائص والنموذج والعتبة أولًا.</li><li>شغّل الاختبار مرة واحدة.</li><li>وثق النتيجة في Model Card.</li><li>لا تعد للضبط بناءً على نتيجة الاختبار.</li></ul></div></div>`));
  slides.push(content('عتبة القرار ليست ثابتة', `<p class="ml-lead">يعطي المصنّف غالبًا احتمالًا. تحويله إلى قرار يحتاج عتبة تعكس القدرة التشغيلية وتكلفة الخطأ.</p>${flow([['احتمال','النموذج يعطي 0.72'],['عتبة','نقارن مثلًا بـ0.65'],['قرار','نرسل الحالة للمراجعة'],['تغذية راجعة','نسجل النتيجة الحقيقية'],['تحسين','نراجع العتبة والنموذج']])}`));
  slides.push(content('قبل الإطلاق: ستة أسئلة', `<div class="ml-grid three">${[['القيمة','هل يحسن قرارًا فعليًا؟'],['البيانات','هل المدخلات متاحة وقت الاستخدام؟'],['الأداء','هل تفوق على خط الأساس؟'],['العدالة','هل توجد فجوات بين المجموعات؟'],['التشغيل','ماذا يحدث عند الفشل؟'],['المراقبة','كيف نكتشف تغير الأداء؟']].map((x,i)=>`<div class="ml-card ${i%2?'orange':''}"><h3>${x[0]}</h3><p>${x[1]}</p></div>`).join('')}</div>`));
  slides.push(divider('اليوم الرابع','مختبر المشروع المتكامل','لا شرح نظري جديد؛ الفرق تبني والمدرّبة تراجع نقاط التحقق',['اعتماد البيانات وصياغة المشكلة','Pipeline وخط أساس وأول نموذج','مقارنة وتحسين وتحليل أخطاء وModel Card']));
  slides.push(content('المشروع الختامي', `<span class="ml-badge">عمل مجموعات</span><div class="ml-grid"><div class="ml-card"><h3>المطلوب</h3><ul><li>بطاقة مسألة واضحة.</li><li>تحليل جودة البيانات.</li><li>خط أساس ونموذجان.</li><li>مقياس مرتبط بالقرار.</li><li>تحليل أخطاء وتوصية.</li></ul></div><div class="ml-card orange"><h3>دليل النجاح</h3><ul><li>لا يوجد تسريب.</li><li>الاختبار مستقل.</li><li>النتائج قابلة للإعادة.</li><li>القيود موثقة.</li><li>التوصية مفهومة.</li></ul></div></div><div class="ml-note dark">المنتج النهائي حجة مدعومة بالبيانات، وليس نموذجًا فقط.</div>`, 'ml-activity'));
  slides.push(content('خطة اليوم الرابع — 5 ساعات', `<table class="ml-table"><tr><th>الساعة</th><th>عمل الفرق</th><th>نقطة تحقق المدرّبة</th></tr><tr><td>1</td><td>اعتماد البيانات وصياغة المشكلة والتقسيم.</td><td>C1: الهدف والزمن والخصائص وخطة الاختبار واضحة.</td></tr><tr><td>2</td><td>Pipeline وخط الأساس وأول نموذج.</td><td>C2: المسار يعمل من البداية للنهاية بلا تسريب.</td></tr><tr><td>3</td><td>مقارنة النماذج والتحقق المتقاطع.</td><td>C3: جدول نتائج عادل بالمقياس نفسه.</td></tr><tr><td>4</td><td>تحليل الأخطاء والشرائح والتحسين.</td><td>C4: توصية مدعومة بالأدلة وليست رقمًا فقط.</td></tr><tr><td>5</td><td>Model Card وتجهيز العرض وتجميد النسخة.</td><td>C5: جميع ملفات التسليم جاهزة.</td></tr></table>`));
  slides.push(content('أسئلة المدرّبة أثناء المرور على الفرق', cards([['عن المشكلة','ما القرار الذي سيتغير؟ وما وحدة الصف؟ وما زمن التنبؤ؟'],['عن البيانات','أي عمود قد يسرّب المستقبل؟ وكيف عالجتم القيم المفقودة؟'],['عن المقارنة','ما خط الأساس؟ وهل قارنتُم النماذج بالطيات والمقياس نفسيهما؟'],['عن النتيجة','أين يخطئ النموذج؟ ومن يتأثر؟ ولماذا اخترتم هذا النموذج؟']])));
  slides.push(content('قائمة تسليم نهاية اليوم الرابع', `<div class="ml-grid"><div class="ml-card"><h3>ملفات العمل</h3><ul><li>دفتر Jupyter يعمل من البداية للنهاية.</li><li>بيانات أو رابط مصدرها ووصف الأعمدة.</li><li>جدول مقارنة النماذج.</li><li>رسوم المقاييس وتحليل الأخطاء.</li></ul></div><div class="ml-card orange"><h3>ملفات القرار</h3><ul><li>بطاقة صياغة المشكلة.</li><li>Model Card.</li><li>خمس شرائح للعرض.</li><li>نسخة احتياطية من النتائج والصور.</li></ul></div></div><div class="ml-note dark">بعد نقطة C5 تُجمّد النتائج؛ لا يبدأ الفريق تجربة كبيرة جديدة قبل العرض.</div>`));
  slides.push(divider('اليوم الخامس','عروض المشاريع والتقييم','كل فريق يشرح المشكلة ويعرض الدليل ويدافع عن قراره',['عرض 5–7 دقائق لكل فريق','أسئلة وتقييم وفق معايير موحدة','استخلاص الدروس والخطوة التالية']));
  slides.push(content('هيكل عرض الفريق', `${flow([['المشكلة','المستخدم والقرار'],['البيانات','الصف والهدف والخصائص'],['المنهجية','التقسيم وPipeline والنماذج'],['النتيجة','المقياس وتحليل الأخطاء'],['التوصية','القيمة والحدود والخطوة التالية']])}<div class="ml-note">الوقت المقترح: 5–7 دقائق للعرض، ثم 3 دقائق للأسئلة.</div>`));
  slides.push(content('أسئلة المناقشة بعد كل عرض', cards([['لماذا هذا المقياس؟','ما الخطأ الأعلى تكلفة، وكيف يظهر في النتائج؟'],['كيف منعتم التسريب؟','ما المعلومات التي استبعدتموها لأنها لم تكن متاحة وقت التنبؤ؟'],['هل النموذج مستقر؟','ماذا أظهر متوسط وتشتت Cross-Validation؟'],['ماذا ستفعلون لاحقًا؟','أي بيانات أو تجربة ستزيد الثقة قبل الاستخدام الحقيقي؟']])));
  slides.push(content('بطاقة تقييم المشروع', `<table class="ml-table"><tr><th>المعيار</th><th>الوزن</th><th>دليل الإتقان</th></tr><tr><td>صياغة المشكلة</td><td>20%</td><td>قرار ومستخدم وهدف ومقياس واضح.</td></tr><tr><td>جودة المنهجية</td><td>25%</td><td>تقسيم صحيح، لا تسريب، وخط أساس.</td></tr><tr><td>التقييم والتحليل</td><td>25%</td><td>مقياس مناسب وتحليل للأخطاء.</td></tr><tr><td>قابلية الإعادة</td><td>15%</td><td>خطوات منظمة ونتائج قابلة للتشغيل.</td></tr><tr><td>التواصل والحدود</td><td>15%</td><td>توصية واضحة وحدود موثقة.</td></tr></table>`));
  slides.push(content('الخلاصة', `<div class="ml-quote">ابدأ بالقرار، افهم البيانات، ابنِ خط أساس، امنع التسريب، اختر المقياس حسب تكلفة الخطأ، ثم راقب النموذج بعد الإطلاق.</div>${cards([['المشكلة قبل الخوارزمية','وضوح السؤال يختصر التجارب غير المفيدة.'],['الثقة تأتي من المنهجية','تقسيم صحيح وتقييم مستقل أهم من رقم مبهر.'],['التطبيق رحلة مستمرة','القيمة تظهر عندما يعمل النموذج داخل قرار قابل للمراقبة.']])}`));
  slides.push(`<div class="slide dark-slide"><div class="final-content"><h1 class="final-title">شكراً لكم</h1><p class="final-sub">أساسيات تعلم الآلة التطبيقية</p><div class="final-quote">نموذج بسيط يُفهم ويُختبر ويُراقب أفضل من نموذج معقد لا نعرف متى يخطئ.</div></div></div>`);
  const revise = (title, body, cls='white-slide') => {
    const marker = '<div class="slide-title">' + title + '<';
    const index = slides.findIndex(slide => slide.includes(marker));
    if (index >= 0) slides[index] = content(title, body, cls);
  };

  revise('صياغة مسألة تعلم آلة جيدة', '<p class="ml-lead">مثال كامل من بيانات «منافذ»: نريد مساعدة فريق الاحتفاظ بالعملاء قبل أن يتوقف العميل عن الطلب.</p><div class="ml-grid"><div class="ml-card"><h3>بطاقة المسألة</h3><ul><li><b>المستخدم:</b> فريق الاحتفاظ بالعملاء.</li><li><b>القرار:</b> ترتيب العملاء الذين يبدأ الفريق بالتواصل معهم.</li><li><b>الهدف (Target):</b> هل سيتوقف العميل عن الطلب خلال 30 يومًا؟ نعم أو لا.</li><li><b>لحظة التنبؤ (Prediction Time):</b> في تاريخ اللقطة، باستخدام المعلومات المتاحة حتى ذلك اليوم فقط.</li><li><b>قياس الفائدة:</b> مقارنة نسبة عودة العملاء للطلب بعد التواصل بالطريقة الحالية.</li></ul></div><div class="ml-card orange"><h3>الصياغة النهائية</h3><p>«نستخدم بيانات العميل المتاحة حتى تاريخ اللقطة لتحديد ما إذا كان سيتوقف عن الطلب خلال الثلاثين يومًا التالية، حتى يرتب فريق الاحتفاظ أولوية التواصل معه».</p><h3>لماذا هذه صياغة جيدة؟</h3><p>حددت من يستخدم النتيجة، والقرار الذي سيتغير، والمخرج المطلوب، والزمن، وطريقة قياس الفائدة؛ ولم تبدأ باسم خوارزمية.</p></div></div>');

  revise('جودة البيانات قبل كمية البيانات', cards([
    ['الاكتمال (Completeness)','<b>السؤال:</b> هل القيم المهمة موجودة؟<br><b>مثال:</b> avg_rating مفقود لدى 31% من العملاء لأن بعضهم لم يقيّم.<br><b>القرار:</b> لا نحوله إلى صفر؛ نحتفظ بمؤشر للفقد ونعوّض بقيمة مناسبة.'],
    ['الصحة (Validity)','<b>السؤال:</b> هل القيمة والنوع والوحدة منطقية؟<br><b>مثال:</b> إذا ظهر تقييم 7 بينما النطاق من 1 إلى 5، فالقيمة غير صحيحة.<br><b>القرار:</b> نراجع المصدر أو نصحح القيمة، ولا نقبلها كما هي.'],
    ['التمثيل (Representativeness)','<b>السؤال:</b> هل البيانات تغطي الحالات التي سيواجهها النموذج؟<br><b>مثال:</b> بيانات من مدينة واحدة وأيام العمل فقط لن تمثل بقية المدن أو عطلة نهاية الأسبوع.<br><b>القرار:</b> نجمع عينة تغطي المدن والأوقات والفئات المختلفة.'],
    ['الحداثة (Freshness)','<b>السؤال:</b> هل البيانات القديمة ما زالت تشبه الواقع؟<br><b>مثال:</b> بيانات قبل تغيير التطبيق أو سياسة العروض قد لا تصف سلوك العملاء الحالي.<br><b>القرار:</b> نستخدم فترة أحدث ونراقب تغير الأنماط بمرور الوقت.']
  ]));

  revise('مجموعة بيانات منافذ', '<div class="ml-dataset-layout"><div class="ml-dataset-summary"><p class="ml-lead">سنستخدم ملف <b>manafeth_customers.parquet</b> كقصة مستمرة من فهم البيانات وتنظيفها إلى بناء أول نموذج.</p><div class="ml-card"><h3>ماذا يمثل الملف؟</h3><ul><li><b>الحجم:</b> 48,000 عميل و19 عمودًا.</li><li><b>كل صف:</b> عميل واحد عند تاريخ اللقطة.</li><li><b>الأعمدة:</b> معلومات تصف العميل وسلوكه السابق.</li><li><b>الهدف (Target):</b> <span dir="ltr">churned_30d</span>.</li><li><b>0 = مستمر:</b> أكمل طلبًا واحدًا على الأقل خلال 30 يومًا.</li><li><b>1 = متوقف:</b> لم يكمل أي طلب خلال 30 يومًا.</li></ul></div></div><figure class="ml-dataset-figure"><img src="assets/manafeth-data-preview.svg" alt="عينة من خمسة صفوف حقيقية من بيانات منافذ توضح الخصائص والهدف والقيمة المفقودة"><div class="ml-data-keys"><div class="ml-data-key"><span class="ml-data-dot"></span>كل صف يمثل عميلًا</div><div class="ml-data-key"><span class="ml-data-dot"></span>كل عمود يمثل خاصية</div><div class="ml-data-key"><span class="ml-data-dot"></span>البرتقالي هو الهدف</div></div><figcaption>عينة حقيقية من الملف؛ اختُصرت الأعمدة لتكون مقروءة داخل الشريحة.</figcaption></figure></div>');

  revise('الخطوة 1: قراءة البيانات وفهم شكلها', '<p class="ml-lead">قبل أي تنظيف، نكوّن صورة ذهنية عن الجدول: ماذا يمثل الصف؟ وما الهدف؟ وما أنواع المعلومات الموجودة؟</p>' + cards([
    ['الصف (Row)','عميل واحد كما كان وضعه في تاريخ اللقطة. لا يعني الصف طلبًا منفردًا.'],
    ['الأعمدة (Columns)','معلومات تصف العميل وسلوكه السابق، مثل المدينة وعدد الطلبات ومتوسط السلة.'],
    ['الهدف (Target)','churned_30d: هل توقف العميل عن الطلب خلال الثلاثين يومًا التالية؟'],
    ['سؤال الفحص','هل العدد والحجم والأنواع ومعنى الأعمدة متوافق مع وصف البيانات؟']
  ]) + '<div class="ml-note orange"><b>توقف وفكّر:</b> إذا اعتقدنا خطأً أن الصف يمثل طلبًا، كيف سيتغير تفسيرنا للهدف؟ <b>في المختبر:</b> ستفتح الجدول وتثبت الإجابة من العينة والأنواع.</div>');

  revise('الخطوة 2: قياس القيم المفقودة', '<p class="ml-lead">الفقد ليس مشكلة واحدة. نحتاج معرفة مكانه ونسبته ثم تفسير سبب حدوثه قبل اختيار العلاج.</p>' + cards([
    ['كم قيمة مفقودة؟','العدد يوضح حجم المشكلة، والنسبة تسمح بالمقارنة بين الأعمدة.'],
    ['أين يظهر الفقد؟','قد يتركز في عملاء جدد أو مدينة أو فترة محددة، وليس عشوائيًا.'],
    ['ماذا يعني الغياب؟','قد يكون خطأ تسجيل، أو معلومة لم تُجمع، أو حالة حقيقية مثل عدم استخدام عرض.'],
    ['ما أثره؟','قد يمنع الخوارزمية من العمل أو يجعلها تتعلم نمطًا غير صحيح.']
  ]) + '<div class="ml-note dark"><b>قاعدة اليوم:</b> لا تملأ الخلية المفقودة قبل أن تستطيع شرح معنى غيابها. <b>في المختبر:</b> ستقيس الفقد وتكتب تفسيرك.</div>');

  revise('الخطوة 3: معالجة المفقود دون تغيير المعنى', '<table class="ml-table"><tr><th>الحالة</th><th>مثال من منافذ</th><th>القرار المنطقي</th></tr><tr><td>غياب يحمل معنى</td><td>last_promo_used فارغ لأن العميل لم يستخدم عرضًا</td><td>نضع فئة واضحة مثل never_used</td></tr><tr><td>رقم مفقود ولا يمثل صفرًا</td><td>avg_rating فارغ لعميل لم يقيّم</td><td>نحفظ مؤشر الفقد ثم نعوض بقيمة مناسبة</td></tr><tr><td>فقد ناتج عن خطأ جمع</td><td>قيمة أساسية اختفت من نظام المصدر</td><td>نراجع المصدر أو نستبعد السجل مع توثيق السبب</td></tr></table><div class="ml-note orange"><b>سؤال سريع:</b> لماذا تحويل التقييم المفقود إلى صفر يغيّر المعنى؟ <b>في المختبر:</b> ستختار المعالجة وتبررها، ثم تكتب الكود.</div>');

  revise('الخطوة 4: فحص التكرار والنطاقات', '<p class="ml-lead">نحوّل معرفة المجال إلى قواعد جودة بسيطة، ثم نتحقق هل البيانات تلتزم بها.</p>' + cards([
    ['التكرار','هل ظهر العميل نفسه مرتين؟ وهل الصفان نسختان فعلًا أم حالتان مختلفتان؟'],
    ['النطاق','التقييم المتوقع من 1 إلى 5، ونسبة استخدام العروض من 0 إلى 1.'],
    ['الإشارة','متوسط قيمة السلة لا ينبغي أن يكون سالبًا أو صفرًا إذا كان يمثل طلبات مكتملة.'],
    ['التوثيق','عدم وجود أخطاء نتيجة مهمة؛ نسجل أن الفحص تم ونجح.']
  ]) + '<div class="ml-note dark"><b>اختبر فهمك:</b> سجلان للعميل نفسه في تاريخين مختلفين ليسا تكرارًا بالضرورة. <b>في المختبر:</b> ستنفذ قواعد الفحص وتوثق النتيجة.</div>');

  revise('الخطوة 5: هل القيمة المرتفعة خطأ؟', '<div class="ml-grid"><div class="ml-card orange"><h3>القيمة المتطرفة (Outlier)</h3><p>قيمة بعيدة عن معظم القيم، لكنها ليست خطأ تلقائيًا. قد تمثل عميلًا حقيقيًا ذا سلوك نادر.</p><p><b>مثال منافذ:</b> سلة بقيمة 534.83 ريال أعلى بكثير من الوسيط 79.64 ريال.</p></div><div class="ml-card"><h3>قرار من أربع خطوات</h3><ol><li>اكتشف القيمة غير المعتادة.</li><li>تحقق من الوحدة والنطاق ومصدرها.</li><li>قارنها بسياق العمل وسجل العميل.</li><li>صحح الخطأ فقط، واحتفظ بالحالة الصحيحة.</li></ol></div></div><div class="ml-note orange"><b>ناقش:</b> ما الدليل الذي تحتاجه قبل حذف السلة المرتفعة؟ <b>في المختبر:</b> ستكتشف الحالات ثم تسجل قرارك.</div>');

  revise('الخطوة 6: استبعاد المعرّف وتسرب المستقبل', '<p class="ml-lead">كل خاصية يجب أن تجتاز اختبارين: هل تصف الحالة فعلًا؟ وهل كانت متاحة لحظة إصدار النتيجة؟</p><table class="ml-table"><tr><th>العمود</th><th>لماذا لا يدخل النموذج؟</th></tr><tr><td>customer_id</td><td>معرّف للسجل، وليس تفسيرًا لسلوك العميل.</td></tr><tr><td>churned_30d</td><td>هو الإجابة التي نريد تعلمها، وليس مدخلًا.</td></tr><tr><td>refund_issued</td><td>معلومة تحدث بعد تاريخ القرار وقد تكشف النتيجة.</td></tr><tr><td>support_ticket_after_snapshot</td><td>مسجل بعد تاريخ اللقطة.</td></tr><tr><td>next_month_orders</td><td>يخبرنا مباشرة تقريبًا بما حدث في المستقبل.</td></tr></table><div class="ml-note dark"><b>اختبار الزمن:</b> تخيل أنك واقف في 1 نوفمبر 2025؛ أي معلومة لم تكن موجودة أمامك يومها تُستبعد. <b>في المختبر:</b> ستبني قائمة الاستبعاد بنفسك.</div>');

  revise('الخطوة 7: الترميز والتحجيم داخل مسار آمن', '<p class="ml-lead">بعد اتخاذ قرارات الجودة، نرتب التحويلات في مسار معالجة (Preprocessing Pipeline) ثابت يتعلم من التدريب فقط.</p>' + flow([
    ['قسّم البيانات','افصل التدريب والاختبار أولًا'],
    ['رقمية','عوّض المفقود ثم طبّق التحجيم عند الحاجة'],
    ['فئوية','عوّض الفئة ثم استخدم One-Hot Encoding'],
    ['اجمع المسارين','طبّق التحويل المناسب لكل نوع عمود'],
    ['استخدم نفسه','للتدريب والاختبار وأي عميل جديد']
  ]) + '<div class="ml-note orange"><b>لماذا Pipeline؟</b> يمنع اختلاف المعالجة بين البيانات ويقلل تسرب المعلومات. <b>في المختبر:</b> ستبنيه خطوة بخطوة وتشغله.</div>');

  revise('نشاط تنظيف بيانات منافذ', '<span class="ml-badge">نشاط مفاهيمي · 15 دقيقة</span><p class="ml-lead">قبل فتح الكود، اتخذوا قرارات التنظيف كمحللي بيانات. الهدف تفسير المشكلة، لا تكرار خلايا المختبر.</p><div class="ml-grid"><div class="ml-card"><h3>الحالات الأربع</h3><ol><li>avg_rating مفقود لعميل جديد.</li><li>last_promo_used فارغ.</li><li>avg_basket_sar = 534.83 ريال.</li><li>next_month_orders متاح بعد تاريخ اللقطة.</li></ol></div><div class="ml-card orange"><h3>أجيبوا عن كل حالة</h3><ol><li>هل هي مشكلة جودة فعلًا؟</li><li>ما التفسير المحتمل؟</li><li>ما القرار: تعويض، إبقاء، استبعاد، أم مراجعة؟</li><li>ما الخطر إذا اتخذنا قرارًا خاطئًا؟</li></ol></div></div><div class="ml-note dark"><b>التسليم داخل المحاضرة:</b> جدول قرارات من أربعة صفوف بلا كود. بعد المناقشة، يفتح كل طالب الـLab لتنفيذ القرارات برمجيًا.</div>', 'ml-activity');

  const demo = (code, explanation, output, labTask) => '<div class="ml-demo-stack"><div class="ml-demo-top"><pre class="ml-code"><code>' + code + '</code></pre><div class="ml-card orange"><h3>ماذا تفعل؟</h3><p>' + explanation + '</p></div></div><div class="ml-output-example"><div class="ml-output-label">مثال على الناتج (Output)</div><pre class="ml-code"><code><span class="result">' + output + '</span></code></pre></div><div class="ml-note"><b>تطبيق الـLab:</b> ' + labTask + '</div></div>';

  revise('الخطوة 1: قراءة البيانات وفهم شكلها', demo(
    'df.shape',
    '<b>shape</b> خاصية تعرض بُعدين: عدد الصفوف أولًا، ثم عدد الأعمدة. لا تغيّر البيانات؛ فقط تصف حجم الجدول.',
    '(48000, 19)',
    'استخدم head() وinfo() مع shape، ثم اكتب ماذا يمثل الصف وما هو العمود المستهدف.'
  ));

  revise('الخطوة 2: قياس القيم المفقودة', demo(
    'df.isna().mean().mul(100).round(1)',
    '<b>isna()</b> يحول كل خلية إلى مفقودة أو غير مفقودة، و<b>mean()</b> يحسب نسبة المفقود، ثم <b>mul(100)</b> يحولها إلى نسبة مئوية و<b>round(1)</b> يقربها.',
    'avg_rating         31.0\nlast_promo_used    22.0',
    'شغّل الدالة، اعرض الأعمدة التي فيها فقد فقط، ثم فسّر لماذا حدث الفقد في كل عمود.'
  ));

  revise('الخطوة 3: معالجة المفقود دون تغيير المعنى', demo(
    'df[&quot;last_promo_used&quot;].fillna(&quot;never_used&quot;)',
    '<b>fillna()</b> تستبدل القيم المفقودة بقيمة نحددها. هنا اخترنا فئة نصية واضحة لأن الفراغ يعني أن العميل لم يستخدم عرضًا سابقًا.',
    'القيم المفقودة قبل المعالجة: 10560\nالقيم المفقودة بعد المعالجة: 0',
    'طبّق معالجة مختلفة على avg_rating؛ استخدم الوسيط (Median) مع الاحتفاظ بمؤشر يوضح أن القيمة كانت مفقودة.'
  ));

  revise('الخطوة 4: فحص التكرار والنطاقات', demo(
    'df.duplicated().sum()\ndf[&quot;avg_rating&quot;].between(1, 5)',
    '<b>duplicated()</b> يحدد الصفوف المكررة، و<b>sum()</b> يعدّها. أما <b>between(1, 5)</b> فيتحقق هل كل تقييم داخل النطاق المقبول.',
    'الصفوف المكررة: 0\nمعرّفات العملاء المكررة: 0\nتقييمات خارج النطاق: 0',
    'اكتب ثلاثة فحوص: التكرار، نطاق promo_usage_rate، والقيم غير الموجبة في avg_basket_sar.'
  ));

  revise('الخطوة 5: هل القيمة المرتفعة خطأ؟', demo(
    'df[&quot;avg_basket_sar&quot;].describe()',
    '<b>describe()</b> يلخص العمود الرقمي ويعرض العدد والمتوسط والانحراف والربيعات وأصغر وأكبر قيمة. يساعدنا على ملاحظة القيم غير المعتادة، لكنه لا يقرر حذفها.',
    '50% (Median) = 79.64\nmax = 534.83',
    'استخدم الربيعات (IQR) لاكتشاف السلال المرتفعة، ثم افحص عينة منها قبل اتخاذ قرار الحذف أو الإبقاء.'
  ));

  revise('الخطوة 6: استبعاد المعرّف وتسرب المستقبل', demo(
    'X = df.drop(columns=drop_cols)\ny = df[&quot;churned_30d&quot;]',
    '<b>drop(columns=...)</b> ينشئ جدول خصائص بعد حذف الأعمدة غير المسموح بها. ونفصل الهدف في <b>y</b> حتى لا يدخل ضمن المدخلات.',
    'X.shape = (48000, 14)\ny.shape = (48000,)',
    'كوّن drop_cols بنفسك، واكتب بجانب كل عمود سبب الاستبعاد: معرّف، هدف، أو معلومة من المستقبل.'
  ));

  revise('الخطوة 7: الترميز والتحجيم داخل مسار آمن', demo(
    'X_train_ready = preprocess.fit_transform(X_train)',
    '<b>fit_transform()</b> يتعلم قيم التعويض والتحجيم من بيانات التدريب، ثم يطبقها ويحوّل الفئات النصية إلى أعمدة رقمية. لا نستخدمه على الاختبار.',
    'المدخل: أرقام + فئات + قيم مفقودة\nالناتج: مصفوفة رقمية جاهزة للنموذج',
    'ابنِ numeric_pipe وcategory_pipe، ثم استخدم transform فقط على بيانات الاختبار وتأكد من عدم وجود قيم مفقودة.'
  ));

  const quiz = (question, options) => '<div class="ml-quiz"><div class="ml-question">' + question + '</div><div class="ml-options">' + options.map(option => '<button type="button" class="ml-option" data-correct="' + (option[1] ? 'true' : 'false') + '" data-reason="' + option[2] + '">' + option[0] + '</button>').join('') + '</div><div class="ml-feedback" aria-live="polite">اختَر إجابة لتظهر لك التغذية الراجعة.</div></div>';
  const insertAfter = (title, newSlide) => {
    const marker = '<div class="slide-title">' + title + '<';
    const index = slides.findIndex(slide => slide.includes(marker));
    if (index >= 0) slides.splice(index + 1, 0, newSlide);
  };

  insertAfter('خريطة مجالات الذكاء الاصطناعي', content('تحت أي مجال تندرج الحالة؟', quiz(
    'نظام ينشئ وصفًا جديدًا لمنتج اعتمادًا على نقاط يكتبها الموظف. ما الوصف الأدق؟',
    [
      ['نظام قواعد ثابتة', false, 'ليس صحيحًا؛ النظام لا يطبق قائمة قواعد ثابتة، بل ينشئ محتوى جديدًا.'],
      ['تصنيف (Classification)', false, 'التصنيف يختار فئة جاهزة، بينما الحالة هنا تنتج نصًا جديدًا.'],
      ['ذكاء اصطناعي توليدي (Generative AI)', true, 'صحيح؛ لأنه ينشئ نصًا جديدًا اعتمادًا على تعليمات المستخدم.'],
      ['تجميع (Clustering)', false, 'التجميع يكتشف مجموعات متشابهة ولا يكتب وصفًا جديدًا.']
    ]
  ), 'ml-activity'));

  insertAfter('ثلاثة أنماط شائعة للمسائل', content('حدّد نوع المسألة', quiz(
    'نريد تقدير عدد الأيام اللازمة لإنجاز معاملة جديدة. ما نوع المسألة؟',
    [
      ['تصنيف (Classification)', false, 'التصنيف يعطي فئة، لكن المطلوب هنا قيمة رقمية بعدد الأيام.'],
      ['انحدار (Regression)', true, 'صحيح؛ لأن المخرج رقم له مقدار: عدد الأيام.'],
      ['تجميع (Clustering)', false, 'التجميع يبحث عن مجموعات بلا هدف جاهز، وهذا ليس المطلوب هنا.'],
      ['توليد نص (Text Generation)', false, 'لا نحتاج إنشاء نص؛ نحتاج تقدير قيمة رقمية.']
    ]
  ), 'ml-activity'));

  insertAfter('صياغة مسألة تعلم آلة جيدة', content('أي صياغة أفضل؟', quiz(
    'اختَر الصياغة التي تحدد المستخدم والقرار والهدف والزمن بوضوح:',
    [
      ['نريد تحسين تجربة العملاء بالذكاء الاصطناعي.', false, 'الصياغة عامة؛ لا تحدد نتيجة أو قرارًا أو زمنًا.'],
      ['نريد استخدام أفضل خوارزمية لتقليل التوقف.', false, 'بدأت بالخوارزمية ولم تحدد من يستخدم النتيجة أو متى.'],
      ['نحدد كل أسبوع العملاء المحتمل توقفهم خلال 30 يومًا ليعطيهم فريق الاحتفاظ أولوية التواصل.', true, 'صحيح؛ حددت المستخدم والقرار والهدف والأفق الزمني.'],
      ['نحلل بيانات العملاء وننشئ تقريرًا.', false, 'لا نعرف ما القرار الذي سيتغير ولا ما المخرج المطلوب.']
    ]
  ), 'ml-activity'));

  insertAfter('جودة البيانات قبل كمية البيانات', content('ما هي بيانات منافذ؟', '<p class="ml-lead"><b>منافذ</b> سيناريو تدريبي يحاكي منصة تجارة إلكترونية سعودية. البيانات مُنشأة لأغراض التعلم وليست بيانات عملاء حقيقيين، لكنها صُممت لتشبه مشكلات البيانات التي نقابلها في المشاريع الفعلية.</p>' + cards([
    ['قصة العمل','تريد المنصة فهم سلوك العملاء وتحديد مَن قد يتوقف عن الطلب، حتى يستطيع فريق الاحتفاظ ترتيب أولوية التواصل.'],
    ['الملفان الرئيسيان','<b>manafeth_customers</b> يلخص حالة كل عميل عند تاريخ محدد، و<b>manafeth_orders</b> يحتوي تفاصيل الطلبات السابقة لكل عميل.'],
    ['لماذا نستخدمها؟','تحتوي قيمًا مفقودة وخصائص رقمية ونصية وأعمدة تكشف المستقبل؛ لذلك تسمح لنا بتطبيق رحلة تعلم الآلة من الفهم والتنظيف إلى التقييم.']
  ]) + '<div class="ml-note orange"><b>في اليوم الأول:</b> نبدأ بجدول العملاء لفهم الصف والهدف وتنظيف البيانات. ثم نستخدم جدول الطلبات لاحقًا لبناء خصائص جديدة (Feature Engineering).</div>'));

  insertAfter('ما البيانات غير النظيفة في ملف منافذ؟', content('لقطات فعلية من ملف منافذ', '<p class="ml-lead">هذه أمثلة حقيقية من الصفوف نفسها. الخلية البرتقالية هي الملاحظة التي تحتاج فهمًا أو قرارًا.</p><div class="ml-shot-grid"><div class="ml-shot"><h3>1. تقييم مفقود</h3><p>العميل C000001 لا توجد لديه قيمة في avg_rating.</p><table class="ml-shot-table"><tr><th>customer_id</th><th>tenure_months</th><th>avg_rating</th></tr><tr><td>C000001</td><td>2.8</td><td class="problem">NaN</td></tr></table></div><div class="ml-shot"><h3>2. لم يستخدم عرضًا سابقًا</h3><p>الفراغ في last_promo_used يحمل معنى، وليس خطأً بالضرورة.</p><table class="ml-shot-table"><tr><th>customer_id</th><th>promo_usage_rate</th><th>last_promo_used</th></tr><tr><td>C000002</td><td>0.114</td><td class="problem">NaN</td></tr></table></div><div class="ml-shot"><h3>3. سلة مرتفعة</h3><p>534.83 ريال أعلى قيمة في الملف، لكنها تحتاج فحصًا قبل حذفها.</p><table class="ml-shot-table"><tr><th>customer_id</th><th>orders_per_month</th><th>avg_basket_sar</th></tr><tr><td>C018537</td><td>2.68</td><td class="problem">534.83</td></tr></table></div><div class="ml-shot"><h3>4. معلومات من المستقبل</h3><p>هذه الأعمدة سُجلت بعد تاريخ اللقطة، لذلك لا تدخل النموذج.</p><table class="ml-shot-table"><tr><th>customer_id</th><th>refund_issued</th><th>support_after</th><th>next_month_orders</th></tr><tr><td>C000005</td><td class="leak">1</td><td class="leak">0</td><td class="leak">0</td></tr></table></div></div><div class="ml-note orange">في المختبر ستظهر القيم المفقودة كـ <b>NaN</b>. لا نعالجها قبل أن نفهم لماذا غابت.</div>'));

  insertAfter('الخطوة 2: قياس القيم المفقودة', content('اختر قرار المعالجة', quiz(
    'عميل جديد لا يملك avg_rating لأنه لم يقيّم أي طلب بعد. ما القرار الأفضل كبداية؟',
    [
      ['نحوّل القيمة إلى صفر', false, 'الصفر يوحي بتقييم سيئ، بينما العميل لم يقيّم أصلًا.'],
      ['نحذف جميع العملاء الجدد', false, 'سنفقد مجموعة مهمة وقد نصنع تحيزًا في البيانات.'],
      ['نعوض بقيمة مناسبة ونضيف مؤشرًا بأن التقييم كان مفقودًا', true, 'صحيح؛ نحافظ على معنى أن العميل لم يقيّم ونمنع بقاء الخلية فارغة.'],
      ['نضع أعلى تقييم وهو 5', false, 'لا يوجد دليل أن تقييمه ممتاز، وهذا يضيف معلومة مختلقة.']
    ]
  ), 'ml-activity'));

  insertAfter('الخطوة 6: استبعاد المعرّف وتسرب المستقبل', content('اكتشف العمود الآمن', quiz(
    'سنصدر النتيجة في 1 نوفمبر 2025. أي عمود يمكن استخدامه بأمان إذا كان محسوبًا حتى هذا التاريخ؟',
    [
      ['next_month_orders', false, 'هذا العمود يصف الشهر التالي، لذلك يكشف المستقبل.'],
      ['support_ticket_after_snapshot', false, 'اسمه يوضح أنه سُجل بعد تاريخ اللقطة.'],
      ['orders_last_30d', true, 'صحيح؛ يصف سلوك الثلاثين يومًا السابقة والمتاح لحظة التنبؤ.'],
      ['refund_issued بعد القرار', false, 'الاسترداد اللاحق لم يكن متاحًا وقت إصدار النتيجة.']
    ]
  ), 'ml-activity'));

  const dayOneDivider = slides.findIndex(slide => slide.includes('من سؤال العمل إلى بيانات جاهزة'));
  const dayTwoDivider = slides.findIndex(slide => slide.includes('من البيانات الجاهزة إلى نموذج تصنيف'));
  const dayOneOrder = [
    'دفتر Google Colab لليوم الأول',
    'كيف بدأ الذكاء الاصطناعي؟',
    'خريطة مجالات الذكاء الاصطناعي',
    'تحت أي مجال تندرج الحالة؟',
    'متى نستخدم تعلم الآلة؟',
    'ثلاثة أنماط شائعة للمسائل',
    'حدّد نوع المسألة',
    'صياغة مسألة تعلم آلة جيدة',
    'أي صياغة أفضل؟',
    'نشاط 1: حوّل تحديًا إلى مسألة تعلم آلة',
    'جودة البيانات قبل كمية البيانات',
    'ما هي بيانات منافذ؟',
    'مجموعة بيانات منافذ',
    'الصف والعمود داخل البيانات',
    'الخصائص والهدف',
    'لقطات فعلية من ملف منافذ',
    'ما البيانات غير النظيفة في ملف منافذ؟',
    'الخطوة 1: قراءة البيانات وفهم شكلها',
    'الخطوة 2: قياس القيم المفقودة',
    'اختر قرار المعالجة',
    'الخطوة 3: معالجة المفقود دون تغيير المعنى',
    'الخطوة 4: فحص التكرار والنطاقات',
    'الخطوة 5: هل القيمة المرتفعة خطأ؟',
    'الخطوة 6: استبعاد المعرّف وتسرب المستقبل',
    'اكتشف العمود الآمن',
    'زمن التنبؤ',
    'الخطوة 7: الترميز والتحجيم داخل مسار آمن',
    'نشاط تنظيف بيانات منافذ',
    'ملخص اليوم الأول'
  ];
  if (dayOneDivider >= 0 && dayTwoDivider > dayOneDivider) {
    const dayOneBody = slides.slice(dayOneDivider + 1, dayTwoDivider);
    const orderedDayOne = dayOneOrder.map(title => {
      const marker = '<div class="slide-title">' + title + '<';
      return dayOneBody.find(slide => slide.includes(marker));
    }).filter(Boolean);
    slides.splice(dayOneDivider + 1, dayTwoDivider - dayOneDivider - 1, ...orderedDayOne);
  }

  deck.innerHTML = slides.join('');
  deck.querySelectorAll('.ml-code').forEach(block => {
    if (block.querySelector('.result') || !block.querySelector('code')) return;
    block.classList.add('has-copy');
    block.insertAdjacentHTML('beforeend', '<button type="button" class="ml-copy" aria-label="نسخ الكود">نسخ الكود</button>');
  });
  deck.addEventListener('click', async event => {
    const button = event.target.closest('.ml-copy');
    if (!button) return;
    const textToCopy = button.closest('.ml-code').querySelector('code').innerText;
    const fallbackCopy = () => {
      const area = document.createElement('textarea');
      area.value = textToCopy;
      area.style.position = 'fixed';
      area.style.opacity = '0';
      document.body.appendChild(area);
      area.select();
      document.execCommand('copy');
      area.remove();
    };
    try {
      if (!navigator.clipboard) throw new Error('clipboard unavailable');
      await navigator.clipboard.writeText(textToCopy);
    } catch (_) {
      fallbackCopy();
    }
    button.textContent = 'تم النسخ ✓';
    window.setTimeout(() => { button.textContent = 'نسخ الكود'; }, 1400);
  });
  deck.addEventListener('click', event => {
    const option = event.target.closest('.ml-option');
    if (!option) return;
    const quizBox = option.closest('.ml-quiz');
    quizBox.querySelectorAll('.ml-option').forEach(button => button.classList.remove('correct', 'wrong'));
    const isCorrect = option.dataset.correct === 'true';
    option.classList.add(isCorrect ? 'correct' : 'wrong');
    const feedback = quizBox.querySelector('.ml-feedback');
    feedback.className = 'ml-feedback ' + (isCorrect ? 'correct' : 'wrong');
    feedback.textContent = option.dataset.reason;
  });
  deck.querySelectorAll('.ml-slide').forEach((slide,index)=>slide.querySelector('.slide-inner')?.insertAdjacentHTML('afterbegin',`<span class="ml-index">${String(index+2).padStart(2,'0')}</span>`));
})();
