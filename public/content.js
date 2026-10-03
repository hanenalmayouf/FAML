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
    .ml-download.ml-station-link{margin:10px 0 0;padding:8px 14px;font-size:.78rem;box-shadow:none}.ml-station-hint{margin:7px 0 0!important;font-size:.72rem!important;line-height:1.45!important;color:#536779!important}
    .ml-quiz{display:grid;gap:14px;width:min(900px,92%);margin:0 auto}.ml-question{font-size:1.35rem;line-height:1.75;text-align:center;font-weight:900;color:#0a315c}.ml-options{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.ml-option{border:2px solid #cbd9df;background:#fff;color:#123654;border-radius:14px;padding:16px 18px;font:inherit;font-size:1rem;font-weight:800;line-height:1.5;cursor:pointer;transition:.18s transform,.18s border-color,.18s background}.ml-option:hover,.ml-option:focus-visible{transform:translateY(-2px);border-color:#0aa79d;outline:none}.ml-option.correct{background:#e7f8f4;border-color:#0aa79d;color:#075b55}.ml-option.wrong{background:#fff0eb;border-color:#ef7837;color:#983a13}.ml-feedback{min-height:62px;border-radius:13px;padding:14px 18px;text-align:center;font-weight:800;line-height:1.6;background:#edf3f6;color:#415667}.ml-feedback.correct{background:#e7f8f4;color:#075b55}.ml-feedback.wrong{background:#fff0eb;color:#983a13}
    .ml-activity{background:#fbfcfd!important;color:#172b3f!important}.ml-activity .slide-title{color:#092f5a!important;text-shadow:none!important}.ml-activity .slide-title-line{background:#ef7837!important}.ml-activity .ml-card{background:rgba(255,255,255,.97)!important}.ml-badge{display:inline-block;background:#f47a38;color:#fff;border-radius:20px;padding:5px 14px;font-size:.82rem;font-weight:800;width:max-content}
    .ml-divider .div-title{color:#092f5a!important;text-shadow:none!important;direction:rtl!important;text-align:right!important;justify-self:stretch!important;width:100%!important;max-width:540px!important;font-size:clamp(3rem,5.2vw,5rem)!important;line-height:1.12!important;text-wrap:balance!important;word-break:normal!important}.ml-divider .div-kicker{color:#ef7837!important;text-shadow:none!important}.ml-divider .div-theme{color:#506371!important;text-shadow:none!important;direction:rtl!important;text-align:right!important}.ml-divider .div-obj,.ml-divider .div-obj span:not(.div-obj-num){color:#092f5a!important;text-shadow:none!important}.ml-divider .div-obj-num{color:#fff!important}.ml-quote{font-size:1.55rem;line-height:1.8;color:#0a315c;font-weight:900;text-align:center;padding:38px 70px}.ml-small{font-size:.84rem;color:#657889}
    .ml-dataset-layout{display:grid;grid-template-columns:minmax(250px,.58fr) minmax(0,1.82fr);gap:18px;align-items:center;direction:rtl}.ml-dataset-summary{display:flex;flex-direction:column;gap:12px}.ml-dataset-summary .ml-lead{width:100%;margin:0;text-align:right;font-size:1.02rem;line-height:1.6}.ml-dataset-summary .ml-card{padding:15px 17px}.ml-dataset-summary .ml-card li{font-size:.86rem;line-height:1.48}.ml-dataset-figure{margin:0;background:#fff;border:1px solid #dce4e9;border-radius:18px;padding:8px;box-shadow:0 12px 30px rgba(6,30,58,.09)}.ml-dataset-figure img{display:block;width:100%;height:auto;border-radius:13px}.ml-data-keys{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:8px;direction:rtl}.ml-data-key{display:flex;align-items:center;justify-content:center;gap:7px;min-height:38px;border-radius:10px;background:#eaf7f5;color:#153f50;font-size:.76rem;font-weight:900;text-align:center}.ml-data-key:nth-child(2){background:#edf0f8;color:#20366f}.ml-data-key:nth-child(3){background:#fff1e5;color:#7c3b0b}.ml-data-dot{width:9px;height:9px;flex:0 0 9px;border-radius:50%;background:#16a39a}.ml-data-key:nth-child(2) .ml-data-dot{background:#24376f}.ml-data-key:nth-child(3) .ml-data-dot{background:#e98024}.ml-dataset-figure figcaption{padding:6px 10px 1px;text-align:center;color:#536779;font-size:.71rem;font-weight:700}
    .ml-shot-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}.ml-shot{background:#fff;border:1px solid #d9e2e8;border-radius:14px;padding:13px 14px;box-shadow:0 8px 22px rgba(6,30,58,.07)}.ml-shot h3{margin:0 0 4px;color:#0a315c;font-size:1rem}.ml-shot p{margin:0 0 8px;color:#536779;font-size:.78rem;line-height:1.45}.ml-shot-table{width:100%;border-collapse:separate;border-spacing:0;direction:ltr;text-align:center;font:700 .73rem/1.35 ui-monospace,SFMono-Regular,Menlo,monospace;border:1px solid #cfd9e2;border-radius:8px;overflow:hidden}.ml-shot-table th{padding:7px 6px;background:#24376f!important;color:#fff!important;white-space:nowrap}.ml-shot-table td{padding:8px 6px;background:#f7f8fb;color:#263750;border-left:1px solid #dce3ea}.ml-shot-table .problem{background:#fff0e2!important;color:#a84b0c!important;font-weight:900}.ml-shot-table .leak{background:#ffe7df!important;color:#9c3518!important;font-weight:900}
    .ml-demo-stack{display:flex;flex-direction:column;gap:13px}.ml-demo-top{display:grid;grid-template-columns:minmax(0,.82fr) minmax(0,1.18fr);gap:15px;align-items:stretch}.ml-demo-top .ml-card{padding:16px 20px}.ml-output-example{display:grid;grid-template-columns:180px 1fr;align-items:stretch;background:#071f38;border-radius:14px;overflow:hidden;box-shadow:0 10px 24px rgba(6,30,58,.13)}.ml-output-label,.ml-output-label *{display:flex;align-items:center;justify-content:center;padding:12px;background:#0a315c!important;color:#fff!important;text-shadow:none!important;font-size:1rem;font-weight:900}.ml-output-example .ml-code{border:0;border-radius:0;box-shadow:none;padding:13px 20px;min-height:58px;display:flex;align-items:center}.ml-demo-stack .ml-note{padding:11px 16px}
    .ml-simple-output{display:flex;align-items:center;justify-content:space-between;margin-top:10px;padding:10px 14px;border-radius:10px;background:#eef8f7;color:#0a315c;font-weight:900}.ml-simple-output span{direction:ltr;font:900 1.15rem/1.2 ui-monospace,SFMono-Regular,Menlo,monospace;color:#087b73}.ml-simple-meaning{margin:10px 0 0!important;font-size:.88rem!important;line-height:1.55!important}
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
  slides.push(content('المحاور الرئيسية', cards([[`<span dir="ltr" style="display:block">Problem Framing & Workflow</span><span style="display:block">صياغة المشكلة وسير العمل</span>`,'تحويل مشكلات الأعمال إلى مهام <span dir="ltr">Machine Learning</span> وتصميم رحلة العمل.'],[`<span dir="ltr" style="display:block">Supervised Learning</span><span style="display:block">التعلم الخاضع للإشراف</span>`,'تطبيق <span dir="ltr">Classification</span> و<span dir="ltr">Regression</span> باستخدام نماذج أساسية وشجرية.'],[`<span dir="ltr" style="display:block">Feature Engineering & Preprocessing</span><span style="display:block">هندسة الخصائص والمعالجة</span>`,'تطبيق <span dir="ltr">Scaling</span> و<span dir="ltr">Encoding</span> ومعالجة <span dir="ltr">Missing Values</span> داخل <span dir="ltr">Pipeline</span>.'],[`<span dir="ltr" style="display:block">Model Evaluation & Tuning</span><span style="display:block">التقييم والتحسين</span>`,'استخدام <span dir="ltr">Metrics · Validation Set · Error Analysis · Hyperparameter Tuning</span>.'],[`<span dir="ltr" style="display:block">Ensemble Tree Models</span><span style="display:block">النماذج الشجرية المجمعة</span>`,'تطبيق <span dir="ltr">Random Forest · Gradient Boosting · XGBoost</span>.'],[`<span dir="ltr" style="display:block">Unsupervised Learning</span><span style="display:block">التعلم غير الخاضع للإشراف</span>`,'تطبيق <span dir="ltr">Clustering</span> واختيار عدد المجموعات والتمثيل البصري.']])));
  slides.push(divider('اليوم الأول','خريطة تعلم الآلة','فهم معنى تعلم الآلة والتمييز بين طرق التعلم الثلاث قبل الانتقال إلى البيانات',['التعلم الخاضع للإشراف','التعلم غير الخاضع للإشراف','التعلم المعزز وصياغة المشكلة']));
  slides.push(content('كيف بدأ الذكاء الاصطناعي؟', `<p class="ml-lead">بدأ الذكاء الاصطناعي كسؤال: هل تستطيع الآلة تنفيذ مهام تحتاج عادةً إلى ذكاء بشري؟ ثم تطور مع تحسن البيانات والحوسبة والخوارزميات.</p>${flow([['الأربعينيات والخمسينيات','نماذج مبكرة للخلايا العصبية، ثم طرح آلان تورنغ سؤال ذكاء الآلة.'],['1956','ظهر اسم الذكاء الاصطناعي (Artificial Intelligence) رسميًا في ورشة دارتموث.'],['1959','استخدم آرثر صموئيل مصطلح Machine Learning أثناء تطوير برنامج يتعلم من خبرته في لعبة الداما.'],['السبعينيات–التسعينيات','انتشرت الأنظمة الخبيرة، ثم حدثت فترات تراجع عُرفت بشتاء الذكاء الاصطناعي (AI Winter).'],['2012','حقق التعلم العميق (Deep Learning) قفزة كبيرة في التعرّف على الصور.'],['2022 وما بعده','انتشر الذكاء الاصطناعي التوليدي (Generative AI) لإنتاج النصوص والصور والصوت والبرمجيات.']])}<div class="ml-note orange">Machine Learning لم يظهر في 2012؛ الاسم استُخدم منذ 1959، أما 2012 فكانت قفزة بارزة في Deep Learning.</div>`));
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
  slides.push(content('الخطوة 4أ: فحص الصفوف المكررة', `<div class="ml-grid"><pre class="ml-code"><code><span class="comment"># تكرار الصف أو معرّف العميل</span>
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
    explain('ملخص اليوم الأول','غطينا رحلة المعالجة المسبقة (Data Preprocessing): فهم البنية والأنواع والتواريخ والنصوص، معالجة الفقد والتكرار والنطاقات والقيم المتطرفة، منع التسرب، ثم تجهيز X وy.','المخرج: بيانات مفهومة ومفحوصة + قرارات تنظيف مبررة + خصائص وهدف جاهزان للتقسيم.','في اليوم الثاني نطبّق الترميز والتحجيم داخل مسار معالجة (Preprocessing Pipeline) يتعلم من بيانات التدريب فقط، ثم ندرب النموذج.')
  ]);
  slides.push(divider('اليوم الثاني','من البيانات الخام إلى أول نموذج','فهم بيانات منافذ ومعالجتها بأمان، ثم تقسيمها وبناء نموذج تصنيف ونموذج انحدار',['فهم البيانات وتنظيفها','التقسيم وPreprocessing وPipeline','تطبيق التصنيف والانحدار']));
  slides.push(content('تقسيم البيانات: ثلاثة أدوار مختلفة', `<table class="ml-table"><tr><th>الجزء</th><th>الغرض</th><th>متى نستخدمه؟</th></tr><tr><td><b>التدريب</b></td><td>يتعلم النموذج الأنماط والمعاملات.</td><td>أثناء بناء النموذج.</td></tr><tr><td><b>التحقق</b></td><td>نقارن الخيارات ونضبط الإعدادات.</td><td>أثناء التجارب.</td></tr><tr><td><b>الاختبار</b></td><td>تقدير الأداء النهائي على بيانات لم يرها النموذج.</td><td>بعد تثبيت القرارات.</td></tr></table><div class="ml-note orange">في البيانات الزمنية يجب أن يسبق التدريب الاختبار زمنيًا.</div>`));
  slides.push(content('تسريب البيانات: أداء رائع ووهمي', `<div class="ml-grid"><div class="ml-card orange"><h3>أمثلة على التسريب</h3><ul><li>متغير لا يتوفر إلا بعد النتيجة.</li><li>تعلم التحويلات من كامل البيانات.</li><li>وجود السجل نفسه في التدريب والاختبار.</li><li>خصائص من المستقبل في مسألة زمنية.</li></ul></div><div class="ml-card"><h3>الوقاية</h3><ul><li>قسّم البيانات أولًا.</li><li>ضع التحويلات داخل Pipeline.</li><li>اسأل: هل المعلومة متاحة لحظة التنبؤ؟</li><li>اختبر على مجموعة مستقلة.</li></ul></div></div>`));
  slides.push(content('خط الأساس قبل النموذج المتقدم', `<p class="ml-lead">خط الأساس إجابة بسيطة نطلب من أي نموذج أن يتفوق عليها بوضوح.</p>${cards([['تصنيف','الفئة الأكثر شيوعًا أو قاعدة عمل بسيطة.'],['انحدار','المتوسط أو الوسيط أو قيمة الفترة السابقة.'],['زمن','توقع أن القادم يشبه آخر فترة أو نفس الموسم.']])}<div class="ml-note">إذا لم يتفوق النموذج على خط الأساس، فالتعقيد لم يضف قيمة بعد.</div>`));
  slides.push(...[
    explain('التصنيف اللوجستي','الانحدار اللوجستي (Logistic Regression) نموذج تصنيف بسيط يعطي احتمالًا بين 0 و1.','يعطي احتمال تأخر 0.72 ثم نستخدم عتبة لتحويله إلى قرار.','اسمه يحتوي Regression لكنه يستخدم غالبًا للتصنيف.','ركزي على الاحتمال والعتبة، واتركي الاشتقاق الرياضي خارج المستوى التمهيدي.'),
    explain('شجرة القرار وفرط التخصيص','شجرة القرار (Decision Tree) تبني أسئلة متتابعة، لكنها قد تحفظ التدريب إذا أصبحت عميقة جدًا.','إذا كانت المدينة الرياض ثم الوقت مساءً ثم العبء مرتفع… تتجه الشجرة لقرار.','العمق الكبير قد يعطي تدريبًا ممتازًا واختبارًا ضعيفًا.','ارسمي ثلاثة أسئلة فقط ثم قارني شجرة قصيرة بأخرى كثيرة الفروع.'),
    explain('التقسيم المتوازن','التقسيم الطبقي (Stratified Split) يحافظ تقريبًا على نسبة كل فئة في التدريب والاختبار.','إذا كانت حالات التأخر 10%، نحافظ على نسبة قريبة في الجزأين.','بدونه قد يحصل الاختبار الصغير على حالات نادرة قليلة جدًا.','استخدمي مثال 100 بطاقة: 90 بيضاء و10 برتقالية.'),
    explain('مختبر اليوم الثاني','يستخدم المتدرب مسار المعالجة الذي بناه بعد فهم بيانات منافذ لتدريب نموذجَي تصنيف ومقارنتهما.','Preprocess → Logistic Regression → Decision Tree → مقارنة نتائج التحقق.','المطلوب أن يمر التدريب والاختبار بالمعالجة نفسها دون تعديل يدوي منفصل.'),
    explain('ملخص اليوم الثاني','حوّلنا بيانات منافذ المنظفة إلى نموذج تصنيف يعطي احتمال توقف لكل عميل.','المخرج: نموذج داخل Pipeline ونتائج أولية على بيانات لم يرها أثناء التدريب.','غدًا سنختار المقاييس المناسبة ونقارن نماذج مجمعة أكثر قوة.')
  ]);
  slides.push(divider('اليوم الثالث','التقييم العادل والنماذج المجمعة','قارن النماذج بالطيات نفسها وحلّل مواضع الخطأ',['المقاييس ومصفوفة الالتباس وPR-AUC','التحقق المتقاطع وتحليل الشرائح','Random Forest وGradient Boosting والتفسير']));
  slides.push(content('خطة اليوم الثالث — 210 دقائق تعليمية', `<table class="ml-table"><tr><th>المدة</th><th>المحطة</th><th>المخرج</th></tr><tr><td>40 دقيقة</td><td>مصفوفة الالتباس والمقاييس والعتبة والنشاط</td><td>مقياس مرتبط بتكلفة الخطأ</td></tr><tr><td>30 دقيقة</td><td>تقييم الانحدار ورسوم البواقي والتنظيم</td><td>تشخيص يتجاوز رقمًا واحدًا</td></tr><tr><td>25 دقيقة</td><td>Cross-Validation ومنحنيات التعلم</td><td>مقارنة عادلة وثابتة</td></tr><tr><td>60 دقيقة</td><td>Bagging وRandom Forest وGradient Boosting وXGBoost والتفسير</td><td>خريطة اختيار نموذج موثقة</td></tr><tr><td>55 دقيقة</td><td>Lab المقارنة والضبط</td><td>بطل ومنافس وقرار موثق</td></tr></table>`));
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
    explain('ملخص اليوم الثالث','أصبح لدينا مسار كامل: بيانات ومعالجة ونماذج ومقاييس ومقارنة عادلة وتحليل أخطاء وتوثيق.','المخرج: نموذج مرشح مع سبب اختياره وحدوده وعتبته المقترحة.','في النصف الأول من اليوم الرابع نطبق K-Means وPCA، ثم تبدأ الفرق مشروعها.','اختتمي بقائمة جاهزية المشروع ووزعي أدوار الفرق قبل المغادرة.')
  ]);
  slides.push(divider('اليوم الرابع — النصف الأول','التعلم غير الخاضع للإشراف واختيار النموذج','نطبّق التعلم غير الخاضع للإشراف ونغلق قرارات الاختيار قبل بدء المشروع',['K-Means واختيار عدد العناقيد','PCA للتمثيل البصري','RandomizedSearchCV وفتح الاختبار مرة واحدة']));
  slides.push(content('خطة النصف الأول من اليوم الرابع — 105 دقائق', `<table class="ml-table"><tr><th>المدة</th><th>المحطة</th><th>المخرج</th></tr><tr><td>20 دقيقة</td><td>استدعاء K-Means من اليوم الأول وربطه بالبيانات</td><td>اختيار خصائص بلا y</td></tr><tr><td>20 دقيقة</td><td>اختيار K والتقييم بلا حقيقة مرجعية</td><td>قرار يوازن القياس والمعنى</td></tr><tr><td>15 دقيقة</td><td>PCA والتباين المفسر</td><td>فهم الرسم دون اعتباره حقيقة</td></tr><tr><td>50 دقيقة</td><td>Lab التجميع والتفسير</td><td>عناقيد مفسرة واستخدام مقترح</td></tr></table><div class="ml-note orange">بعد هذه المحطة لا نضيف خوارزميات جديدة؛ يبدأ المشروع في النصف الثاني.</div>`));
  slides.push(content('من الخريطة إلى التطبيق: التعلم غير الخاضع للإشراف', `<p class="ml-lead">نستخدمه عندما لا توجد تسمية هدف جاهزة، ونبحث عن بنية أو مجموعات أو تمثيل أبسط داخل البيانات.</p>${cards([['التجميع K-Means','يجمع السجلات المتشابهة حول مراكز، بعد تجهيز المقاييس العددية.'],['اختيار K','نوازن بين silhouette وقابلية شرح العناقيد وفائدتها العملية.'],['PCA','يختصر الأبعاد إلى محاور مركبة تساعد على الاستكشاف والرسم، لا على إثبات السببية.']])}`));
  slides.push(content('ضبط المعلمات دون لمس الاختبار', `<div class="ml-grid"><div class="ml-card"><h3>RandomizedSearchCV</h3><ul><li>حدد نطاقات معقولة للمعلمات.</li><li>استخدم Pipeline كاملًا داخل البحث.</li><li>اختر مقياسًا يوافق قرار العمل.</li><li>قارن المتوسط والتشتت عبر الطيات.</li></ul></div><div class="ml-card orange"><h3>قاعدة الاختبار الواحد</h3><ul><li>ثبت الخصائص والنموذج والعتبة أولًا.</li><li>شغّل الاختبار مرة واحدة.</li><li>وثق النتيجة في Model Card.</li><li>لا تعد للضبط بناءً على نتيجة الاختبار.</li></ul></div></div>`));
  slides.push(content('عتبة القرار ليست ثابتة', `<p class="ml-lead">يعطي المصنّف غالبًا احتمالًا. تحويله إلى قرار يحتاج عتبة تعكس القدرة التشغيلية وتكلفة الخطأ.</p>${flow([['احتمال','النموذج يعطي 0.72'],['عتبة','نقارن مثلًا بـ0.65'],['قرار','نرسل الحالة للمراجعة'],['تغذية راجعة','نسجل النتيجة الحقيقية'],['تحسين','نراجع العتبة والنموذج']])}`));
  slides.push(content('قبل الإطلاق: ستة أسئلة', `<div class="ml-grid three">${[['القيمة','هل يحسن قرارًا فعليًا؟'],['البيانات','هل المدخلات متاحة وقت الاستخدام؟'],['الأداء','هل تفوق على خط الأساس؟'],['العدالة','هل توجد فجوات بين المجموعات؟'],['التشغيل','ماذا يحدث عند الفشل؟'],['المراقبة','كيف نكتشف تغير الأداء؟']].map((x,i)=>`<div class="ml-card ${i%2?'orange':''}"><h3>${x[0]}</h3><p>${x[1]}</p></div>`).join('')}</div>`));
  slides.push(divider('اليوم الرابع — النصف الثاني','مختبر المشروع المتكامل','تبدأ الفرق البناء بعد إغلاق المفاهيم الأساسية في النصف الأول',['اعتماد البيانات وصياغة المشكلة','Pipeline وخط أساس وأول نموذج','مقارنة وتحسين وتحليل أخطاء وModel Card']));
  slides.push(content('المشروع الختامي', `<span class="ml-badge">عمل مجموعات</span><div class="ml-grid"><div class="ml-card"><h3>المطلوب</h3><ul><li>بطاقة مسألة واضحة.</li><li>تحليل جودة البيانات.</li><li>خط أساس ونموذجان.</li><li>مقياس مرتبط بالقرار.</li><li>تحليل أخطاء وتوصية.</li></ul></div><div class="ml-card orange"><h3>دليل النجاح</h3><ul><li>لا يوجد تسريب.</li><li>الاختبار مستقل.</li><li>النتائج قابلة للإعادة.</li><li>القيود موثقة.</li><li>التوصية مفهومة.</li></ul></div></div><div class="ml-note dark">المنتج النهائي حجة مدعومة بالبيانات، وليس نموذجًا فقط.</div>`, 'ml-activity'));
  slides.push(content('خطة اليوم الرابع — 5 ساعات', `<table class="ml-table"><tr><th>الساعة</th><th>عمل الفرق</th><th>نقطة تحقق المدرّبة</th></tr><tr><td>1</td><td>اعتماد البيانات وصياغة المشكلة والتقسيم.</td><td>C1: الهدف والزمن والخصائص وخطة الاختبار واضحة.</td></tr><tr><td>2</td><td>Pipeline وخط الأساس وأول نموذج.</td><td>C2: المسار يعمل من البداية للنهاية بلا تسريب.</td></tr><tr><td>3</td><td>مقارنة النماذج والتحقق المتقاطع.</td><td>C3: جدول نتائج عادل بالمقياس نفسه.</td></tr><tr><td>4</td><td>تحليل الأخطاء والشرائح والتحسين.</td><td>C4: توصية مدعومة بالأدلة وليست رقمًا فقط.</td></tr><tr><td>5</td><td>Model Card وتجهيز العرض وتجميد النسخة.</td><td>C5: جميع ملفات التسليم جاهزة.</td></tr></table>`));
  slides.push(content('أسئلة مراجعة الفريق قبل التسليم', cards([['عن المشكلة','ما القرار الذي سيتغير؟ وما وحدة الصف؟ وما زمن التنبؤ؟'],['عن البيانات','أي عمود قد يسرّب المستقبل؟ وكيف عالجتم القيم المفقودة؟'],['عن المقارنة','ما خط الأساس؟ وهل قارنتُم النماذج بالطيات والمقياس نفسيهما؟'],['عن النتيجة','أين يخطئ النموذج؟ ومن يتأثر؟ ولماذا اخترتم هذا النموذج؟']])));
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

  revise('الخطوة 4أ: فحص الصفوف المكررة', '<p class="ml-lead">نحوّل معرفة المجال إلى قواعد جودة بسيطة، ثم نتحقق هل البيانات تلتزم بها.</p>' + cards([
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

  revise('نشاط تنظيف بيانات منافذ', '<span class="ml-badge">نشاط مجموعات · 15 دقيقة</span><p class="ml-lead">أمامكم أربع ملاحظات من الملف. المطلوب اتخاذ قرار لكل ملاحظة، وليس كتابة كود.</p><div class="ml-grid"><div class="ml-card"><h3>الحالات الأربع</h3><ol><li><b>avg_rating:</b> مفقود لعميل جديد.</li><li><b>last_promo_used:</b> فارغ.</li><li><b>avg_basket_sar:</b> يساوي 534.83 ريال.</li><li><b>next_month_orders:</b> سُجل بعد تاريخ اللقطة.</li></ol></div><div class="ml-card orange"><h3>انسخوا هذا الجدول واملؤوه</h3><table class="ml-table"><tr><th>الحالة</th><th>التفسير</th><th>القرار</th><th>الخطر</th></tr><tr><td>1</td><td>...</td><td>...</td><td>...</td></tr><tr><td>2</td><td>...</td><td>...</td><td>...</td></tr><tr><td>3</td><td>...</td><td>...</td><td>...</td></tr><tr><td>4</td><td>...</td><td>...</td><td>...</td></tr></table></div></div><div class="ml-note dark"><b>ما تسلمونه:</b> جدول واحد من أربعة صفوف باسم المجموعة. بعد انتهاء الوقت ننتقل إلى شريحة نموذج الحل ونقارن القرارات.</div>', 'ml-activity');

  const demo = (code, explanation, output, labTask) => '<div class="ml-demo-stack"><div class="ml-demo-top"><pre class="ml-code"><code>' + code + '</code></pre><div class="ml-card orange"><h3>ماذا تفعل؟</h3><p>' + explanation + '</p></div></div><div class="ml-output-example"><div class="ml-output-label">مثال على الناتج (Output)</div><pre class="ml-code"><code><span class="result">' + output + '</span></code></pre></div><div class="ml-note"><b>تطبيق الـLab:</b> ' + labTask + '</div></div>';

  revise('الخطوة 1: قراءة البيانات وفهم شكلها', demo(
    'df.shape',
    '<b>shape</b> خاصية تعرض بُعدين: عدد الصفوف أولًا، ثم عدد الأعمدة. لا تغيّر البيانات؛ فقط تصف حجم الجدول.',
    '(48000, 19)',
    'استخدم head() وinfo() مع shape، ثم اكتب ماذا يمثل الصف وما هو العمود المستهدف.'
  ));

  revise('الخطوة 2: قياس القيم المفقودة', '<p class="ml-lead">القيمة المفقودة هي خلية فارغة، وتظهر في pandas باسم <b>NaN</b>. في هذه الخطوة نريد فقط أن نعرف: <b>كم خلية فارغة في العمود؟</b></p><div class="ml-grid"><div class="ml-card"><h3>مثال 1: عمود التقييم</h3><pre class="ml-code"><code>df[&quot;avg_rating&quot;].isna().sum()</code></pre><div class="ml-simple-output"><b>الناتج (Output)</b><span>14859</span></div><p class="ml-simple-meaning"><b>المعنى:</b> توجد 14,859 خلية فارغة في عمود التقييم، أي قرابة 31% من العملاء.</p></div><div class="ml-card orange"><h3>مثال 2: عمود آخر عرض</h3><pre class="ml-code"><code>df[&quot;last_promo_used&quot;].isna().sum()</code></pre><div class="ml-simple-output"><b>الناتج (Output)</b><span>10560</span></div><p class="ml-simple-meaning"><b>المعنى:</b> توجد 10,560 خلية فارغة في عمود آخر عرض مستخدم، أي 22% من العملاء.</p></div></div><div class="ml-note"><b>كيف يعمل السطر؟</b> نختار العمود أولًا ← <b>isna()</b> يسأل عن كل خلية: هل هي فارغة؟ ← <b>sum()</b> يعدّ الخلايا الفارغة. لا نعالجها بعد؛ نحن نعدّها فقط.</div>');

  revise('الخطوة 3: معالجة المفقود دون تغيير المعنى', demo(
    'df[&quot;last_promo_used&quot;].fillna(&quot;never_used&quot;)',
    '<b>fillna()</b> تستبدل القيم المفقودة بقيمة نحددها. هنا اخترنا فئة نصية واضحة لأن الفراغ يعني أن العميل لم يستخدم عرضًا سابقًا.',
    'القيم المفقودة قبل المعالجة: 10560\nالقيم المفقودة بعد المعالجة: 0',
    'طبّق معالجة مختلفة على avg_rating؛ استخدم الوسيط (Median) مع الاحتفاظ بمؤشر يوضح أن القيمة كانت مفقودة.'
  ));

  revise('الخطوة 4أ: فحص الصفوف المكررة', demo(
    'df.duplicated().sum()',
    '<b>duplicated()</b> يسأل عن كل صف: هل توجد نسخة مطابقة منه؟ ثم <b>sum()</b> يحسب عدد الصفوف المكررة. هذا الفحص لا علاقة له بقيمة التقييم أو نطاقها.',
    '0',
    'الناتج 0 يعني أنه لا توجد صفوف متطابقة بالكامل في ملف العملاء. افحص بعد ذلك هل customer_id مكرر.'
  ));

  revise('الخطوة 5: هل القيمة المرتفعة خطأ؟', demo(
    'df[&quot;avg_basket_sar&quot;].describe().round(2)',
    '<b>describe()</b> يعرض بطاقة ملخص للعمود الرقمي: عدد القيم، المتوسط، مقدار التشتت، أصغر قيمة، الربيعات، وأكبر قيمة. أما <b>round(2)</b> فيقرب الأرقام إلى منزلتين عشريتين فقط.',
    'count    48000.00\nmean        89.64\nstd         46.29\nmin         18.00\n25%         57.29\n50%         79.64\n75%        110.62\nmax        534.83',
    '<b>كيف نقرأه؟</b> السطر 50% هو الوسيط: نصف العملاء متوسط سلتهم 79.64 ريال أو أقل. والسطر max هو أكبر قيمة: 534.83 ريال. نقارن الرقمين فنلاحظ أن أكبر قيمة مرتفعة، ثم نفحصها؛ لا نحذفها تلقائيًا.'
  ));

  revise('الخطوة 6: استبعاد المعرّف وتسرب المستقبل', demo(
    '<span class="comment"># أولًا: احفظ الإجابة في y</span>\ny = df[&quot;churned_30d&quot;].copy()\n\n<span class="comment"># ثانيًا: حدد ما لا يدخل في X</span>\ndrop_cols = [\n    &quot;customer_id&quot;,\n    &quot;churned_30d&quot;,\n    &quot;refund_issued&quot;,\n    &quot;support_ticket_after_snapshot&quot;,\n    &quot;next_month_orders&quot;\n]\n\n<span class="comment"># أنشئ جدولًا جديدًا بدون هذه الأعمدة</span>\nX = df.drop(columns=drop_cols)\n\nprint(X.shape)\nprint(y.shape)',
    '<p><b>أولًا:</b> ننسخ عمود الإجابة من df ونحفظه في y.</p><p><b>ثانيًا:</b> ننشئ X باستخدام <b>df.drop()</b>. هذه الدالة تُرجع جدولًا جديدًا ولا تحذف شيئًا من df الأصلي.</p><p>لذلك يصبح لدينا ثلاث متغيرات: <b>df</b> ما زال يحتوي جميع الأعمدة، و<b>X</b> يحتوي الخصائص فقط، و<b>y</b> يحتوي الإجابة فقط.</p><p><b>مهم:</b> الحذف من الأصل يحدث فقط عند استخدام <span dir="ltr">inplace=True</span>، ونحن لم نستخدمه.</p>',
    'X.shape = (48000, 14)\ny.shape = (48000,)',
    '<b>طريقة التفكير:</b> نعطي النموذج X مثل المدينة وسلوك الطلبات، ثم أثناء التدريب نقارن توقعه بالإجابة الحقيقية الموجودة في y. لا نسمح بأن تكون الإجابة نفسها أو معلومات المستقبل داخل X.'
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
  ]) + '<div class="ml-note orange"><b>في اليوم الثاني:</b> نبدأ بجدول العملاء لفهم الصف والهدف وتنظيف البيانات. ثم نستخدم جدول الطلبات لاحقًا لبناء خصائص جديدة (Feature Engineering).</div>'));

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

  insertAfter('الخطوة 4أ: فحص الصفوف المكررة', content('الخطوة 4ب: فحص نطاق القيم', demo(
    'ratings = pd.Series([4, 1, 7, 0])\nratings.between(1, 5)',
    '<b>between(1, 5)</b> يفحص قيمة التقييم فقط: هل تقع بين 1 و5؟ يعطي <b>True</b> للقيمة المقبولة و<b>False</b> للقيمة خارج النطاق. هذا فحص منفصل تمامًا عن التكرار.',
    '4    → True\n1    → True\n7    → False\n0    → False',
    'طبّق الفكرة على avg_rating بعد تجاهل القيم المفقودة. في ملف منافذ عدد التقييمات المسجلة خارج النطاق يساوي 0.'
  )));

  insertAfter('الخطوة 5: هل القيمة المرتفعة خطأ؟', content('كيف نفحص القيمة المرتفعة؟', demo(
    'columns = [\n    &quot;customer_id&quot;, &quot;orders_per_month&quot;,\n    &quot;avg_basket_sar&quot;, &quot;city&quot;\n]\n\nhigh_rows = df.nlargest(\n    5, &quot;avg_basket_sar&quot;\n)[columns]\n\ndisplay(high_rows)',
    '<b>nlargest(5, ...)</b> يستخرج الصفوف صاحبة أعلى خمس قيم. نحفظها في <b>high_rows</b>، ثم تستخدم <b>display()</b> لعرضها أمامنا كجدول واضح داخل Jupyter أو Colab.',
    'customer_id  orders/month  basket   city\nC018537          2.68     534.83  Riyadh\nC011852          3.32     531.49  Riyadh\nC022081          5.07     515.46  Jeddah\nC000183          4.61     515.44  Jeddah\nC013718          1.35     451.77  Riyadh',
    '<b>قرار الفحص:</b> نتأكد أن الوحدة بالريال، ونقارن بالسجلات الأخرى، ونرجع إلى الطلبات الأصلية أو نظام المصدر. إذا كانت مشتريات كبيرة حقيقية نحتفظ بها؛ وإذا كانت خطأ إدخال أو وحدة خاطئة نصححها أو نستبعدها مع توثيق السبب.'
  )));

  insertAfter('كيف نفحص القيمة المرتفعة؟', content('كيف نعالج القيم المتطرفة؟', '<p class="ml-lead">لا توجد معالجة واحدة لكل قيمة متطرفة (Outlier). نختار القرار بعد معرفة هل القيمة خطأ أم حالة حقيقية.</p><table class="ml-table"><tr><th>نتيجة الفحص</th><th>القرار المناسب</th><th>مثال</th></tr><tr><td>خطأ إدخال أو وحدة خاطئة</td><td>نصحح من المصدر؛ وإن تعذر نجعلها مفقودة ونعالجها</td><td>534 ريال سُجلت خطأً على أنها 53,400 ريال</td></tr><tr><td>قيمة نادرة لكنها صحيحة</td><td>نحتفظ بها</td><td>عميل يشتري كمية كبيرة فعلًا</td></tr><tr><td>قيمة صحيحة لكن توزيع العمود منحرف</td><td>نجرب التحويل اللوغاريتمي (Log Transformation)</td><td>قيم السلة فيها ذيل طويل إلى اليمين</td></tr><tr><td>القيم العالية تؤثر كثيرًا في النموذج</td><td>نجرب تحديد حد أعلى (Capping) ونقارن الأداء</td><td>أي قيمة أعلى من المئين 99 تُثبت عند الحد</td></tr></table><div class="ml-note dark"><b>الحذف هو آخر خيار:</b> لا نحذف سجلًا إلا إذا كان خطأً مؤكدًا أو خارج نطاق الدراسة، مع توثيق السبب.</div>'));

  insertAfter('كيف نعالج القيم المتطرفة؟', content('مثال تطبيقي: تحديد حد أعلى', demo(
    '<span class="comment"># احسب الحد عند المئين 99</span>\ncap = df[&quot;avg_basket_sar&quot;].quantile(0.99)\n\n<span class="comment"># أنشئ عمودًا جديدًا للتجربة</span>\ndf[&quot;avg_basket_capped&quot;] = (\n    df[&quot;avg_basket_sar&quot;].clip(upper=cap)\n)\n\nprint(cap)\nprint(df[&quot;avg_basket_capped&quot;].max())',
    '<b>quantile(0.99)</b> يجد القيمة التي يقع تحتها 99% من السجلات. و<b>clip(upper=cap)</b> لا يحذف الصف؛ بل يستبدل الجزء الأعلى من الحد بقيمة الحد. ننشئ عمودًا جديدًا حتى تبقى القيمة الأصلية محفوظة للمقارنة.',
    'الحد عند 99% = 248.03\nأكبر قيمة قبل = 534.83\nأكبر قيمة بعد  = 248.03',
    '<b>مهم:</b> هذا مثال على تقنية متاحة، وليس القرار التلقائي لملف منافذ. ندرّب النموذج بالقيم الأصلية وبالنسخة المحددة، ثم نقارن التقييم. إذا لم يتحسن الأداء أو فقدنا معنى مهمًا، نحتفظ بالأصل.'
  )));

  insertAfter('نشاط تنظيف بيانات منافذ', content('نموذج حل نشاط تنظيف البيانات', '<p class="ml-lead">قارنوا قرارات مجموعتكم بهذا النموذج. قد تختلف صياغة التفسير، لكن يجب أن يحافظ القرار على معنى البيانات ويمنع التسرب.</p><table class="ml-table"><tr><th>الحالة</th><th>التفسير</th><th>القرار المناسب</th><th>خطر القرار الخاطئ</th></tr><tr><td><b>avg_rating مفقود</b></td><td>عميل جديد لم يقيّم بعد؛ الغياب لا يعني تقييمًا سيئًا.</td><td>نحفظ مؤشرًا للفقد، ثم نعوض بالوسيط أثناء المعالجة.</td><td>وضع 0 يجعل النموذج يظنه غير راضٍ.</td></tr><tr><td><b>last_promo_used فارغ</b></td><td>غالبًا لم يستخدم العميل عرضًا سابقًا.</td><td>نعوض بفئة واضحة مثل never_used.</td><td>نفقد الفرق بين «لم يستخدم» و«المعلومة مجهولة».</td></tr><tr><td><b>السلة = 534.83</b></td><td>قيمة مرتفعة، لكنها قد تكون مشتريات كبيرة حقيقية.</td><td>نفحص الطلبات الأصلية؛ نحتفظ بها إذا كانت صحيحة.</td><td>حذفها مباشرة يستبعد عملاء حقيقيين مرتفعي القيمة.</td></tr><tr><td><b>next_month_orders</b></td><td>معلومة حدثت بعد تاريخ التنبؤ وتكشف المستقبل.</td><td>نستبعدها من X لمنع تسرب البيانات.</td><td>يظهر أداء النموذج ممتازًا لكنه غير واقعي.</td></tr></table><div class="ml-note orange"><b>قاعدة القرار:</b> لا تسأل «كيف أملأ كل فراغ؟»؛ اسأل «ماذا يعني هذا الفراغ أو الرقم، وهل كان متاحًا وقت التنبؤ؟»</div>'));

  insertAfter('ما البيانات غير النظيفة في ملف منافذ؟', content('خريطة المعالجة المسبقة للبيانات', '<p class="ml-lead">المعالجة المسبقة (Data Preprocessing) هي تجهيز البيانات لتصبح صحيحة المعنى، متسقة، وآمنة للاستخدام في التدريب.</p>' + flow([
    ['1. افهم','الصف، الهدف، الأعمدة، والأنواع'],
    ['2. نظّف','الفقد، التكرار، النصوص، والنطاقات'],
    ['3. تحقّق','القيم المرتفعة، الزمن، وتسرب المستقبل'],
    ['4. حوّل','التواريخ، الترميز، والتحجيم عند الحاجة'],
    ['5. جهّز','X وy ثم التقسيم قبل تعلّم أي تحويل']
  ]) + '<div class="ml-note orange">ليست كل خطوة مطلوبة لكل ملف؛ نختارها بناءً على نوع العمود، معنى البيانات، والخوارزمية التي سنستخدمها.</div>'));

  insertAfter('الخطوة 1: قراءة البيانات وفهم شكلها', content('الخطوة 1ب: فحص أنواع البيانات', demo(
    'columns = [\n    &quot;signup_date&quot;, &quot;city&quot;,\n    &quot;avg_basket_sar&quot;, &quot;city_tier&quot;\n]\n\ndf[columns].dtypes',
    '<b>dtypes</b> يخبرنا كيف فهمت pandas كل عمود. <b>object</b> غالبًا نص، <b>float64</b> رقم عشري، و<b>int64</b> عدد صحيح. إذا فهمت pandas التاريخ كنص فلن نستطيع إجراء حسابات زمنية صحيحة قبل تحويله.',
    'signup_date        object\ncity               object\navg_basket_sar    float64\ncity_tier           int64',
    'راجع كل عمود: هل النوع المعروض يوافق معناه؟ الرقم المخزن كنص، أو التاريخ المخزن كـ object، يحتاج تحويلًا قبل الاستخدام.'
  )));

  insertAfter('الخطوة 1ب: فحص أنواع البيانات', content('الخطوة 1ج: تحويل التواريخ', demo(
    'df[&quot;signup_date&quot;] = pd.to_datetime(\n    df[&quot;signup_date&quot;]\n)\ndf[&quot;snapshot_date&quot;] = pd.to_datetime(\n    df[&quot;snapshot_date&quot;]\n)\n\ndf[&quot;tenure_days&quot;] = (\n    df[&quot;snapshot_date&quot;] - df[&quot;signup_date&quot;]\n).dt.days',
    '<b>pd.to_datetime()</b> يحول النص إلى تاريخ حقيقي. بعد ذلك يمكن طرح تاريخ التسجيل من تاريخ اللقطة، و<b>.dt.days</b> يحول الفرق إلى عدد أيام يمكن للنموذج استخدامه.',
    'customer_id  signup_date  tenure_days\nC000001     2025-08-08      85\nC000002     2022-08-11    1178\nC000003     2024-08-20     438',
    'تحقق من التواريخ غير القابلة للتحويل، ولا تستخدم معلومات حدثت بعد تاريخ اللقطة عند إنشاء خصائص زمنية.'
  )));

  insertAfter('الخطوة 1ج: تحويل التواريخ', content('الخطوة 1د: تنظيف النصوص وتوحيد الفئات', demo(
    'city_example = pd.Series([\n    &quot;Riyadh&quot;, &quot; riyadh&quot;, &quot;RIYADH &quot;\n])\n\ncity_clean = (\n    city_example.str.strip().str.lower()\n)\n\ndisplay(city_clean)',
    '<b>strip()</b> يحذف المسافات الزائدة من البداية والنهاية، و<b>lower()</b> يوحّد حالة الأحرف. بدون التنظيف قد تتعامل الخوارزمية مع Riyadh وRIYADH كفئتين مختلفتين رغم أنهما المدينة نفسها.',
    '0    riyadh\n1    riyadh\n2    riyadh',
    'ابدأ بـ value_counts() لرؤية الفئات الموجودة. وحّد القيم فقط عندما تتأكد أنها تحمل المعنى نفسه؛ لا تدمج فئتين مختلفتين لمجرد تشابه الاسم.'
  )));

  insertAfter('الخطوة 6: استبعاد المعرّف وتسرب المستقبل', content('الترميز: كيف يفهم النموذج الفئات؟', '<p class="ml-lead">معظم الخوارزميات تحتاج أرقامًا، لذلك نحول الفئات النصية إلى أعمدة رقمية باستخدام الترميز الأحادي (One-Hot Encoding).</p><table class="ml-table"><tr><th>city</th><th>city_Dammam</th><th>city_Jeddah</th><th>city_Riyadh</th></tr><tr><td>Dammam</td><td>1</td><td>0</td><td>0</td></tr><tr><td>Jeddah</td><td>0</td><td>1</td><td>0</td></tr><tr><td>Riyadh</td><td>0</td><td>0</td><td>1</td></tr></table><div class="ml-grid"><div class="ml-card"><h3>لماذا لا نستخدم 1، 2، 3؟</h3><p>لأنها توحي بأن الرياض أكبر أو أعلى من جدة والدمام، بينما المدن فئات بلا ترتيب عددي.</p></div><div class="ml-card orange"><h3>متى نطبقه؟</h3><p>نتعلم الفئات من بيانات التدريب داخل Pipeline، ثم نطبق التحويل نفسه على الاختبار دون إعادة التعلّم.</p></div></div>'));

  insertAfter('الترميز: كيف يفهم النموذج الفئات؟', content('التحجيم: متى نغيّر مقياس الأرقام؟', '<p class="ml-lead">التحجيم (Scaling) يضع الأعمدة الرقمية على مقاييس متقاربة دون تغيير ترتيب السجلات أو معناها.</p><div class="ml-grid"><div class="ml-card"><h3>خوارزميات تتأثر بالمقياس</h3><p><b>الانحدار اللوجستي (Logistic Regression):</b> نموذج تصنيف سنتعلمه في اليوم الثاني.<br><b>K-Means:</b> يجمع السجلات المتشابهة اعتمادًا على المسافة بينها، لذلك قد يسيطر العمود ذو الأرقام الكبيرة. سنطبقه في اليوم الثاني بعد هذا الشرح.</p></div><div class="ml-card orange"><h3>خوارزميات شجرية</h3><p><b>شجرة القرار (Decision Tree):</b> تقسم البيانات بأسئلة مثل «هل القيمة أكبر من رقم معين؟» وسنتعلمها في اليوم الثاني.<br><b>الغابة العشوائية (Random Forest):</b> تجمع قرارات أشجار كثيرة، وسنتعلمها في اليوم الثالث. لا تحتاجان التحجيم عادةً.</p></div></div><table class="ml-table"><tr><th>القيمة الأصلية</th><th>بعد StandardScaler تقريبًا</th><th>المعنى</th></tr><tr><td>50</td><td>−1.22</td><td>أقل من المتوسط</td></tr><tr><td>100</td><td>0.00</td><td>قريب من المتوسط</td></tr><tr><td>150</td><td>1.22</td><td>أعلى من المتوسط</td></tr></table><div class="ml-note">لا يلزم حفظ هذه الخوارزميات الآن؛ ذُكرت فقط لتوضيح أن الحاجة إلى التحجيم تعتمد على طريقة عمل النموذج، وسنتعلم كل واحدة بالتدريج.</div>'));

  insertAfter('التحجيم: متى نغيّر مقياس الأرقام؟', content('قاعدة مهمة: نتعلم المعالجة من التدريب فقط', '<p class="ml-lead">بعض خطوات المعالجة تحتاج أن تتعلم قيمة من البيانات. هذه القيم تُحسب من مجموعة التدريب فقط حتى لا تتسرب معلومات الاختبار.</p><table class="ml-table"><tr><th>التحويل</th><th>ماذا يتعلم؟</th><th>التطبيق الصحيح</th></tr><tr><td>تعويض المفقود (Imputation)</td><td>الوسيط أو الفئة الأكثر شيوعًا</td><td>يتعلمها من التدريب ثم يطبقها على الاختبار</td></tr><tr><td>الترميز (Encoding)</td><td>الفئات الموجودة وأعمدتها</td><td>يتعلم الفئات من التدريب ويتعامل مع الجديدة بأمان</td></tr><tr><td>التحجيم (Scaling)</td><td>المتوسط والانحراف المعياري</td><td>يحسبهما من التدريب ثم يستخدمهما للاختبار</td></tr></table><div class="ml-note dark">لهذا نضع التحويلات داخل مسار معالجة (Preprocessing Pipeline). نشرح المبدأ اليوم، ونبني المسار مع تقسيم البيانات في اليوم الثاني.</div>'));

  insertAfter('قاعدة مهمة: نتعلم المعالجة من التدريب فقط', content('قائمة التحقق قبل التدريب', '<div class="ml-grid three">' + [
    ['المعنى','نعرف ماذا يمثل الصف والهدف وزمن التنبؤ.'],
    ['البنية','راجعنا الحجم، أسماء الأعمدة، والأنواع.'],
    ['التواريخ والنصوص','حوّلنا التواريخ ووحّدنا الفئات عند الحاجة.'],
    ['الجودة','عالجنا الفقد والتكرار والنطاقات والقيم غير المعتادة.'],
    ['الأمان','استبعدنا المعرّفات والهدف ومعلومات المستقبل من X.'],
    ['التحويل','حددنا الأعمدة التي تحتاج ترميزًا أو تحجيمًا داخل Pipeline.']
  ].map((item,index) => '<div class="ml-card ' + (index % 2 ? 'orange' : '') + '"><h3>✓ ' + item[0] + '</h3><p>' + item[1] + '</p></div>').join('') + '</div><div class="ml-note orange">إذا لم نستطع تبرير خطوة المعالجة، فلا ننفذها تلقائيًا. كل قرار يجب أن يحافظ على معنى البيانات ويصلح للاستخدام وقت التنبؤ.</div>'));

  insertAfter('الخطوة 1د: تنظيف النصوص وتوحيد الفئات', content('Lab 1: اكتشف بيانات منافذ', '<span class="ml-badge">تطبيق فردي · 15 دقيقة</span><p class="ml-lead">افتح الملف بنفسك، ثم أثبت أنك فهمت شكل البيانات قبل البدء بالتنظيف.</p><div class="ml-grid"><div class="ml-card"><h3>نفّذ بالترتيب</h3><ol><li>ارفع manafeth_customers.csv.</li><li>اعرض الحجم باستخدام shape.</li><li>شاهد أول خمسة صفوف باستخدام head().</li><li>اعرض أنواع الأعمدة باستخدام dtypes.</li><li>حدد المعرّف والهدف ومثالًا لكل نوع بيانات.</li></ol></div><div class="ml-card orange"><h3>ما الذي تسلّمه؟</h3><ul><li>صورة لحجم البيانات.</li><li>صورة لأول خمسة صفوف.</li><li>إجابات ثلاثة أسئلة قصيرة.</li><li>رسالة نقطة التحقق الخضراء.</li></ul><a class="ml-download" href="downloads/SDA-AIE-111_Day2_Lab1_Explore.ipynb" download>تنزيل Lab 1</a></div></div><div class="ml-note dark">لا يوجد تنظيف في هذا المختبر؛ المطلوب أن تستطيع شرح ماذا يمثل الصف والعمود والهدف.</div>', 'ml-activity'));

  insertAfter('مثال تطبيقي: تحديد حد أعلى', content('Lab 2: نظّف بيانات منافذ', '<span class="ml-badge">تطبيق فردي · 25 دقيقة</span><p class="ml-lead">طبّق فحوص التنظيف على نسخة من البيانات، ثم اتخذ قرارًا مبررًا بدل حذف القيم تلقائيًا.</p><div class="ml-grid"><div class="ml-card"><h3>ستطبّق</h3><ol><li>تحويل التواريخ.</li><li>فحص الفئات النصية وتوحيدها.</li><li>عدّ المفقود ومعالجته مع حفظ مؤشر الفقد.</li><li>فحص التكرار ونطاق التقييم.</li><li>عرض أعلى خمس قيم للسلة.</li></ol></div><div class="ml-card orange"><h3>ما الذي تسلّمه؟</h3><ul><li>نتائج الفقد والتكرار والنطاق.</li><li>جدول أعلى خمس سلال.</li><li>قرار مكتوب عن القيمة 534.83.</li><li>رسالة نقطة التحقق الخضراء.</li></ul><a class="ml-download" href="downloads/SDA-AIE-111_Day2_Lab2_Clean.ipynb" download>تنزيل Lab 2</a></div></div><div class="ml-note dark">اعمل على df_clean؛ لا تغيّر df الأصلي حتى تستطيع المقارنة والرجوع إليه.</div>', 'ml-activity'));

  insertAfter('نموذج حل نشاط تنظيف البيانات', content('Lab 3: جهّز X وy بأمان', '<span class="ml-badge">تطبيق فردي · 20 دقيقة</span><p class="ml-lead">حوّل قرارات اليوم إلى جدول خصائص آمن وعمود هدف مستقل استعدادًا للتدريب.</p><div class="ml-grid"><div class="ml-card"><h3>ستطبّق</h3><ol><li>حفظ churned_30d في y.</li><li>إنشاء قائمة المعرّف والهدف وأعمدة المستقبل.</li><li>إنشاء X باستخدام drop().</li><li>تشغيل اختبار يمنع وجود أي عمود ممنوع.</li><li>تصنيف الأعمدة إلى رقمية وفئوية وتواريخ.</li></ol></div><div class="ml-card orange"><h3>ما الذي تسلّمه؟</h3><ul><li>حجم X وحجم y.</li><li>رسالة نجاح اختبار التسرب.</li><li>قوائم الأعمدة الرقمية والفئوية والتواريخ.</li><li>جدول خطة المعالجة مكتملًا.</li></ul><a class="ml-download" href="downloads/SDA-AIE-111_Day2_Lab3_Prepare_X_y.ipynb" download>تنزيل Lab 3</a></div></div><div class="ml-note dark">عند انتهاء Lab 3 تكون البيانات جاهزة لتقسيم التدريب والاختبار وبناء Pipeline في هذا اليوم.</div>', 'ml-activity'));


  insertAfter('تحت أي مجال تندرج الحالة؟', content('ما هو تعلم الآلة؟', '<p class="ml-lead">تعلم الآلة (Machine Learning) فرع من الذكاء الاصطناعي يمكّن النظام من تحسين أداء مهمة اعتمادًا على البيانات أو الخبرة، دون كتابة قاعدة منفصلة لكل حالة.</p><div class="ml-grid"><div class="ml-card"><h3>ما الذي يتعلمه؟</h3><p>قد يتعلم علاقة بين مدخلات ونتيجة، أو يكتشف مجموعات متشابهة، أو يتعلم سلسلة أفعال تحقق مكافأة أكبر.</p></div><div class="ml-card orange"><h3>ما الذي ينتجه؟</h3><p>قد ينتج فئة، أو رقمًا، أو مجموعات، أو سياسة لاتخاذ القرار. لذلك لا توجد طريقة واحدة يتعلم بها كل نموذج.</p></div></div>'));

  insertAfter('ما هو تعلم الآلة؟', content('كيف يمكن للآلة أن تتعلم؟', '<p class="ml-lead">تختلف آلية التعلم حسب نوع التغذية الراجعة المتاحة للنظام.</p><div class="ml-grid three"><div class="ml-card"><h3>من إجابات صحيحة</h3><p>يتوقع، يقارن توقعه بالإجابة المعروفة، ثم يقلل الخطأ.</p><p><b>هذا هو:</b> التعلم الخاضع للإشراف.</p></div><div class="ml-card orange"><h3>من التشابه والبنية</h3><p>يقيس العلاقات بين السجلات ويكتشف مجموعات أو أنماطًا بلا إجابة جاهزة.</p><p><b>هذا هو:</b> التعلم غير الخاضع للإشراف.</p></div><div class="ml-card navy"><h3>من المكافأة</h3><p>يجرب أفعالًا، يلاحظ نتائجها، ثم يزيد احتمال الأفعال ذات المكافأة الأفضل.</p><p><b>هذا هو:</b> التعلم المعزز.</p></div></div><div class="ml-note">إذن «التعلم من البيانات» هو المظلة العامة، أما الإجابة الصحيحة (Target) فهي تخص التعلم الخاضع للإشراف.</div>'));

  insertAfter('كيف يتعلم النموذج من الأمثلة؟', content('طرق تعلم الآلة الثلاث', '<div class="ml-grid three"><div class="ml-card"><h3>خاضع للإشراف<br>(Supervised Learning)</h3><p>نتعلم من أمثلة تحتوي مدخلات وإجابة صحيحة.</p><p><b>السؤال:</b> ما الإجابة المتوقعة لحالة جديدة؟</p></div><div class="ml-card orange"><h3>غير خاضع للإشراف<br>(Unsupervised Learning)</h3><p>نبحث عن بنية أو مجموعات في بيانات بلا إجابة جاهزة.</p><p><b>السؤال:</b> ما الأنماط الموجودة؟</p></div><div class="ml-card navy"><h3>معزز<br>(Reinforcement Learning)</h3><p>يتعلم وكيل أفعالًا من مكافآت وعقوبات متتابعة.</p><p><b>السؤال:</b> ما الفعل الأفضل الآن؟</p></div></div><div class="ml-note">الفرق الأساسي ليس اسم الخوارزمية؛ بل نوع التغذية الراجعة المتاحة وطبيعة النتيجة المطلوبة.</div>'));

  insertAfter('طرق تعلم الآلة الثلاث', content('التعلم الخاضع للإشراف', '<p class="ml-lead">في التعلم الخاضع للإشراف (Supervised Learning) نملك لكل مثال مدخلات وإجابة صحيحة تُسمى الهدف (Target).</p>' + flow([['X: الخصائص','معلومات الحالة'],['y: الهدف','الإجابة المعروفة'],['التدريب','مقارنة التوقع بالإجابة'],['النموذج','تحسين النمط'],['التنبؤ','إجابة لحالة جديدة']]) + '<div class="ml-note orange"><b>مثال:</b> لدينا بيانات طلبات سابقة ونعرف أيها تأخر فعلًا. يتعلم النموذج منها ليقدّر حالة طلب جديد.</div>'));

  insertAfter('التعلم الخاضع للإشراف', content('أنواع التعلم الخاضع للإشراف', '<div class="ml-grid"><div class="ml-card"><h3>التصنيف (Classification)</h3><p>الناتج فئة محددة.</p><p><b>ثنائي:</b> نعم / لا، 0 / 1.</p><p><b>متعدد الفئات:</b> منخفض / متوسط / مرتفع.</p><p><b>مثال:</b> هل سيتوقف العميل؟</p></div><div class="ml-card orange"><h3>الانحدار (Regression)</h3><p>الناتج قيمة رقمية لها مقدار.</p><p><b>أمثلة:</b> سعر، مدة، عدد، كمية.</p><p><b>مثال:</b> كم يومًا سيستغرق إنجاز المعاملة؟</p></div></div><div class="ml-note"><b>التنبؤ (Prediction)</b> كلمة عامة. قد يكون التنبؤ فئة فيسمى تصنيفًا، أو رقمًا فيسمى انحدارًا.</div>'));

  insertAfter('أنواع التعلم الخاضع للإشراف', content('أمثلة على التعلم الخاضع للإشراف', '<table class="ml-table"><tr><th>المشكلة</th><th>الهدف (Target)</th><th>النوع</th></tr><tr><td>هل سيتوقف عميل منافذ خلال 30 يومًا؟</td><td>churned_30d: القيمة 0 أو 1</td><td>تصنيف ثنائي</td></tr><tr><td>ما أولوية البلاغ؟</td><td>منخفض / متوسط / مرتفع</td><td>تصنيف متعدد الفئات</td></tr><tr><td>كم سيكون سعر المركبة؟</td><td>sale_price_sar</td><td>انحدار</td></tr><tr><td>كم طلبًا نتوقع الأسبوع القادم؟</td><td>عدد الطلبات</td><td>انحدار</td></tr></table>'));

  insertAfter('حدّد نوع المسألة', content('التعلم غير الخاضع للإشراف', '<p class="ml-lead">في التعلم غير الخاضع للإشراف (Unsupervised Learning) لا يوجد عمود هدف يخبر النموذج بالإجابة الصحيحة؛ نطلب منه اكتشاف بنية داخل البيانات.</p><div class="ml-grid"><div class="ml-card"><h3>ما الذي نملكه؟</h3><p>خصائص العملاء أو المنتجات أو المعاملات، لكن بلا فئة صحيحة لكل صف.</p></div><div class="ml-card orange"><h3>ما الذي نحصل عليه؟</h3><p>مجموعات أو تمثيل أبسط أو حالات مختلفة تستحق الفحص. النتيجة تحتاج تفسيرًا بشريًا.</p></div></div><div class="ml-note">غياب الهدف لا يعني غياب الهدف العملي: يجب أن نعرف لماذا نبحث عن الأنماط وكيف سنستخدمها.</div>'));

  insertAfter('التعلم غير الخاضع للإشراف', content('أنواع التعلم غير الخاضع للإشراف', '<div class="ml-grid three"><div class="ml-card"><h3>التجميع (Clustering)</h3><p>تقسيم السجلات إلى مجموعات متشابهة، مثل شرائح العملاء. ومن خوارزمياته K-Means.</p></div><div class="ml-card orange"><h3>تقليل الأبعاد<br>(Dimensionality Reduction)</h3><p>تلخيص أعمدة كثيرة في عدد أقل مع الاحتفاظ بأكبر قدر ممكن من المعلومات.</p></div><div class="ml-card navy"><h3>اكتشاف الحالات غير المعتادة<br>(Anomaly Detection)</h3><p>تحديد حالات تختلف كثيرًا عن النمط العام لتُفحص، مثل معاملة شاذة.</p></div></div><div class="ml-note orange">سنتعلم التجميع (Clustering) عمليًا في اليوم الثالث. أما بقية الأنواع فهنا لبناء الخريطة المفاهيمية.</div>'));

  insertAfter('أنواع التعلم غير الخاضع للإشراف', content('أمثلة على التعلم غير الخاضع للإشراف', '<table class="ml-table"><tr><th>الحالة</th><th>ما ندخله؟</th><th>ما نكتشفه؟</th></tr><tr><td>تقسيم عملاء منافذ</td><td>تكرار الطلب ومتوسط السلة واستخدام العروض</td><td>شرائح سلوكية بلا أسماء مسبقة</td></tr><tr><td>استكشاف معاملات غير معتادة</td><td>القيمة والوقت والموقع ونمط الاستخدام</td><td>حالات بعيدة عن النمط العام لتُراجع</td></tr><tr><td>عرض بيانات كثيرة على رسم</td><td>عشرات الخصائص</td><td>تمثيل بعدين أو ثلاثة يسهل استكشافه</td></tr></table><div class="ml-note dark">الخوارزمية تقترح نمطًا؛ خبير المجال يفسره ويتأكد أن له معنى وفائدة.</div>'));

  insertAfter('أمثلة على التعلم غير الخاضع للإشراف', content('التعلم المعزز', '<p class="ml-lead">في التعلم المعزز (Reinforcement Learning) يتعلم وكيل (Agent) اتخاذ سلسلة من الأفعال داخل بيئة (Environment) ليزيد مجموع المكافأة (Reward).</p><div class="ml-grid"><div class="ml-card"><h3>ليس جدولًا بإجابة لكل صف</h3><p>لا نعطي الوكيل دائمًا «الفعل الصحيح». يجرب فعلًا، يرى النتيجة، ويحصل على مكافأة أو عقوبة.</p></div><div class="ml-card orange"><h3>القرار يؤثر في المستقبل</h3><p>الفعل الحالي يغير الحالة التالية؛ لذلك يتعلم سياسة (Policy) لاختيار الأفعال عبر الزمن.</p></div></div><div class="ml-note orange">لن نبني نموذج تعلم معزز في هذه الدورة؛ نتعرف عليه حتى تكتمل خريطة أنواع تعلم الآلة.</div>'));

  insertAfter('التعلم المعزز', content('كيف يتعلم الوكيل من المكافأة؟', flow([['الوكيل (Agent)','متخذ القرار'],['الحالة (State)','الوضع الحالي'],['الفعل (Action)','الخيار الذي ينفذه'],['المكافأة (Reward)','تغذية راجعة رقمية'],['السياسة (Policy)','قاعدة الاختيار التي تتطور']]) + '<div class="ml-note dark"><b>مثال إشارة مرور:</b> الحالة هي كثافة المركبات، والفعل اختيار مدة الضوء الأخضر، والمكافأة تقل عندما يزداد وقت الانتظار. بالتجربة يتعلم النظام سياسة تقلل الازدحام.</div>'));

  insertAfter('كيف يتعلم الوكيل من المكافأة؟', content('أمثلة على التعلم المعزز', '<div class="ml-grid three"><div class="ml-card"><h3>الروبوتات</h3><p>يتعلم الروبوت الوصول إلى هدف مع تجنب الاصطدام واستهلاك طاقة أقل.</p></div><div class="ml-card orange"><h3>الألعاب</h3><p>الحالة هي وضع اللعبة، والفعل هو الحركة، والمكافأة ترتبط بالفوز أو النقاط.</p></div><div class="ml-card navy"><h3>التحكم المتتابع</h3><p>تعديل إشارة مرور أو تشغيل مورد عندما يؤثر كل قرار في الحالة التالية.</p></div></div><div class="ml-note">لا نختار التعلم المعزز لمجرد وجود قرار؛ نحتاج قرارات متتابعة، بيئة يمكن التفاعل معها، ومكافأة قابلة للقياس.</div>'));

  insertAfter('أمثلة على التعلم المعزز', content('مقارنة طرق التعلم الثلاث', '<table class="ml-table"><tr><th>الطريقة</th><th>التغذية الراجعة</th><th>الناتج المعتاد</th><th>مثال</th></tr><tr><td>خاضع للإشراف</td><td>إجابة صحيحة مع الأمثلة</td><td>فئة أو رقم</td><td>توقف العميل أو سعر المركبة</td></tr><tr><td>غير خاضع للإشراف</td><td>لا توجد إجابة جاهزة</td><td>مجموعات أو بنية مكتشفة</td><td>شرائح العملاء</td></tr><tr><td>معزز</td><td>مكافأة أو عقوبة بعد الفعل</td><td>سياسة لاختيار أفعال متتابعة</td><td>التحكم في إشارة مرور</td></tr></table><div class="ml-note orange"><b>اسأل بالترتيب:</b> هل توجد إجابة صحيحة؟ إن لم توجد، هل نكتشف نمطًا ثابتًا أم نتعلم أفعالًا متتابعة من مكافأة؟</div>'));

  insertAfter('مقارنة طرق التعلم الثلاث', content('حدّد طريقة التعلم', quiz('لدينا بيانات عملاء بلا عمود هدف، ونريد اكتشاف شرائح متشابهة بينهم. ما الطريقة الأنسب؟', [['تعلم خاضع للإشراف', false, 'لا توجد إجابة صحيحة أو فئة جاهزة لكل عميل.'],['تعلم غير خاضع للإشراف', true, 'صحيح؛ نبحث عن مجموعات متشابهة من دون تسميات مسبقة.'],['تعلم معزز', false, 'لا توجد هنا أفعال متتابعة ولا مكافأة من بيئة.'],['انحدار', false, 'الانحدار يحتاج هدفًا رقميًا معروفًا أثناء التدريب.']]), 'ml-activity'));

  insertAfter('أمثلة على التعلم الخاضع للإشراف', content('مثال محلول: تصنيف بلاغات الدعم', '<p class="ml-lead">يريد مشرف مركز الدعم معرفة البلاغات العاجلة فور وصولها حتى يبدأ بها الفريق.</p><table class="ml-table"><tr><th>جزء المسألة</th><th>الإجابة</th><th>لماذا؟</th></tr><tr><td>المستخدم</td><td>مشرف مركز الدعم</td><td>هو من سيستخدم النتيجة</td></tr><tr><td>القرار</td><td>أي بلاغ يبدأ به الفريق؟</td><td>النتيجة ستغيّر ترتيب العمل</td></tr><tr><td>الخصائص (X)</td><td>نوع البلاغ، القناة، كلمات الوصف، وقت الاستلام</td><td>معلومات متاحة عند وصول البلاغ</td></tr><tr><td>الهدف (y)</td><td>عاجل = 1، عادي = 0</td><td>إجابة معروفة من البلاغات السابقة</td></tr><tr><td>نوع المسألة</td><td>تصنيف ثنائي (Binary Classification)</td><td>الناتج إحدى فئتين</td></tr></table><div class="ml-note dark">لا نبدأ باسم خوارزمية؛ نبدأ بمن سيستخدم النتيجة وما القرار الذي سيتغير.</div>'));

  insertAfter('مثال محلول: تصنيف بلاغات الدعم', content('طبّقها: حدّد X وy ونوع المسألة', '<span class="ml-badge">مجموعات · 7 دقائق</span><p class="ml-lead">الحالة: تريد إدارة الصيانة تقدير عدد الساعات اللازمة لإصلاح عطل جديد قبل توزيع الفنيين.</p><div class="ml-grid"><div class="ml-card"><h3>أكملوا البطاقة</h3><ol><li>من المستخدم؟</li><li>ما القرار الذي سيتخذه؟</li><li>اكتبوا ثلاث خصائص (Features) متاحة قبل الإصلاح.</li><li>ما الهدف (Target)؟</li><li>هل المسألة تصنيف أم انحدار؟</li></ol></div><div class="ml-card orange"><h3>التسليم</h3><p>جملة واحدة بالشكل التالي:</p><p><b>سنستخدم (…) لتقدير (…) حتى يستطيع (…) أن يقرر (…).</b></p><p>ثم اكتبوا: <b>X = …</b> و<b>y = …</b></p></div></div><div class="ml-note">لا تختاروا خوارزمية. المطلوب تعريف المدخلات والمخرج والقرار فقط.</div>', 'ml-activity'));

  insertAfter('طبّقها: حدّد X وy ونوع المسألة', content('حل مقترح: تقدير مدة الإصلاح', '<table class="ml-table"><tr><th>العنصر</th><th>حل ممكن</th></tr><tr><td>المستخدم والقرار</td><td>مسؤول الصيانة؛ يوزع الفنيين ويحدد الموعد المتوقع</td></tr><tr><td>X: الخصائص</td><td>نوع العطل، عمر الجهاز، مستوى الضرر، خبرة الفني</td></tr><tr><td>y: الهدف</td><td>عدد ساعات الإصلاح الفعلية</td></tr><tr><td>نوع المسألة</td><td>انحدار (Regression)، لأن الناتج رقم له مقدار</td></tr></table><div class="ml-note orange"><b>الصياغة:</b> سنستخدم معلومات العطل المتاحة عند تسجيله لتقدير عدد ساعات الإصلاح، حتى يستطيع مسؤول الصيانة توزيع الفنيين وتحديد موعد واقعي.</div><div class="ml-note">قد تختلف الخصائص المقترحة، لكن يجب أن تكون متاحة قبل بدء الإصلاح وألا تكشف النتيجة من المستقبل.</div>'));

  insertAfter('أمثلة على التعلم غير الخاضع للإشراف', content('جرّب التجميع يدويًا', '<span class="ml-badge">مجموعات · 8 دقائق</span><p class="ml-lead">أمامكم ستة عملاء بلا أسماء للمجموعات. كوّنوا مجموعتين أو ثلاثًا اعتمادًا على التشابه.</p><table class="ml-table"><tr><th>العميل</th><th>طلبات شهريًا</th><th>متوسط السلة</th><th>استخدام العروض</th></tr><tr><td>أ</td><td>8</td><td>220 ريال</td><td>منخفض</td></tr><tr><td>ب</td><td>7</td><td>205 ريالات</td><td>منخفض</td></tr><tr><td>ج</td><td>2</td><td>55 ريالًا</td><td>مرتفع</td></tr><tr><td>د</td><td>1</td><td>48 ريالًا</td><td>مرتفع</td></tr><tr><td>هـ</td><td>4</td><td>105 ريالات</td><td>متوسط</td></tr><tr><td>و</td><td>4</td><td>112 ريالًا</td><td>متوسط</td></tr></table><div class="ml-note dark">التسليم: أعضاء كل مجموعة + اسم وصفي تقترحونه لكل مجموعة. لا توجد أسماء صحيحة مسبقًا.</div>', 'ml-activity'));

  insertAfter('جرّب التجميع يدويًا', content('حل ممكن: شرائح العملاء', '<div class="ml-grid three"><div class="ml-card"><h3>عملاء مرتفعو القيمة</h3><p><b>أ، ب</b></p><p>طلبات كثيرة، سلة مرتفعة، واعتماد قليل على العروض.</p></div><div class="ml-card orange"><h3>باحثون عن العروض</h3><p><b>ج، د</b></p><p>طلبات قليلة، سلة منخفضة، واستخدام مرتفع للعروض.</p></div><div class="ml-card navy"><h3>عملاء متوسطون</h3><p><b>هـ، و</b></p><p>سلوك يقع بين المجموعتين.</p></div></div><div class="ml-note">الخوارزمية قد تكوّن مجموعات مشابهة، لكنها لن تسميها تلقائيًا «مرتفعة القيمة». الاسم والتفسير يأتيان بعد فحص خصائص كل مجموعة.</div>'));

  insertAfter('أمثلة على التعلم المعزز', content('طبّقها: صمّم المكافأة', '<span class="ml-badge">مجموعات · 7 دقائق</span><p class="ml-lead">نريد نظامًا يتعلم تشغيل مصعد في مبنى مزدحم. عرّفوا عناصر التعلم المعزز.</p><div class="ml-grid"><div class="ml-card"><h3>أكملوا</h3><ul><li>الوكيل (Agent): من يتخذ القرار؟</li><li>الحالة (State): ماذا يحتاج أن يعرف؟</li><li>الفعل (Action): ما الخيارات المتاحة؟</li><li>المكافأة (Reward): ماذا نشجع وماذا نعاقب؟</li></ul></div><div class="ml-card orange"><h3>انتبهوا</h3><p>إذا كافأنا المصعد على تقليل وقت الانتظار فقط، فقد يتحرك كثيرًا ويستهلك طاقة عالية.</p><p><b>كيف نوازن بين السرعة والطاقة والسلامة؟</b></p></div></div><div class="ml-note dark">التسليم: تعريف قصير للعناصر الأربعة + معادلة مكافأة بالكلمات، بلا أرقام أو كود.</div>', 'ml-activity'));

  insertAfter('طبّقها: صمّم المكافأة', content('حل مقترح: مصعد يتعلم', '<table class="ml-table"><tr><th>العنصر</th><th>مثال</th></tr><tr><td>الوكيل (Agent)</td><td>نظام التحكم في المصعد</td></tr><tr><td>الحالة (State)</td><td>طابق المصعد، اتجاهه، طلبات الطوابق، وعدد الركاب</td></tr><tr><td>الفعل (Action)</td><td>يصعد، ينزل، يتوقف، أو يفتح الباب</td></tr><tr><td>المكافأة (Reward)</td><td>مكافأة لخدمة الطلب، وعقوبة للانتظار الطويل والطاقة والحركة غير الآمنة</td></tr></table><div class="ml-note orange"><b>الفكرة المهمة:</b> صياغة المكافأة تحدد السلوك الذي سيتعلمه الوكيل. مكافأة ناقصة قد تنتج سلوكًا سريعًا لكنه غير اقتصادي أو غير آمن.</div>'));

  insertAfter('حدّد طريقة التعلم', content('تحدي الحالات الأربع', '<span class="ml-badge">مجموعات · 10 دقائق</span><p class="ml-lead">لكل حالة: حدّدوا طريقة التعلم، والناتج المتوقع، وسبب الاختيار.</p><table class="ml-table"><tr><th>الحالة</th><th>طريقة التعلم</th><th>الناتج</th><th>السبب</th></tr><tr><td>توقع هل رسالة بريد مزعجة</td><td>……</td><td>……</td><td>……</td></tr><tr><td>اكتشاف أنماط استخدام الخدمات بلا فئات جاهزة</td><td>……</td><td>……</td><td>……</td></tr><tr><td>تقدير استهلاك الكهرباء غدًا</td><td>……</td><td>……</td><td>……</td></tr><tr><td>روبوت يتعلم الوصول لهدف عبر مكافأة</td><td>……</td><td>……</td><td>……</td></tr></table><div class="ml-note dark">اختاروا متحدثًا يشرح حالة واحدة في 30 ثانية.</div>', 'ml-activity'));

  insertAfter('تحدي الحالات الأربع', content('حل تحدي الحالات الأربع', '<table class="ml-table"><tr><th>الحالة</th><th>الإجابة</th><th>لماذا؟</th></tr><tr><td>البريد المزعج</td><td>خاضع للإشراف — تصنيف</td><td>لدينا رسائل سابقة موسومة: مزعج أو غير مزعج</td></tr><tr><td>أنماط استخدام الخدمات</td><td>غير خاضع للإشراف — تجميع</td><td>لا توجد فئات جاهزة ونريد اكتشاف مجموعات</td></tr><tr><td>استهلاك الكهرباء</td><td>خاضع للإشراف — انحدار</td><td>الهدف قيمة رقمية معروفة في البيانات السابقة</td></tr><tr><td>الروبوت</td><td>تعلم معزز</td><td>أفعال متتابعة وتغذية راجعة على شكل مكافأة</td></tr></table><div class="ml-note orange">نحدد طريقة التعلم من شكل البيانات والتغذية الراجعة، ثم نحدد نوع المهمة؛ لا نختارها من اسم المجال فقط.</div>'));

  insertAfter('أمثلة على التعلم الخاضع للإشراف', content('كيف يعمل التصنيف تقنيًا؟', '<p class="ml-lead">نموذج التصنيف (Classification Model) يتعلم قاعدة لاتخاذ قرار بين فئات، مثل: هل العميل سيتوقف عن الشراء أم لا؟</p><div class="ml-grid"><div class="ml-card"><h3>بيانات عميل</h3><table class="ml-table"><tr><th>الخاصية</th><th>القيمة</th></tr><tr><td>عدد الطلبات</td><td>2</td></tr><tr><td>أيام الغياب</td><td>30</td></tr><tr><td>عدد الشكاوى</td><td>1</td></tr></table></div><div class="ml-card orange"><h3>ما الذي يراه النموذج؟</h3><p>لا يرى عبارة «عميل غير نشط»؛ بل يرى متجه خصائص (Feature Vector) مكوّنًا من أرقام:</p><pre class="ml-code"><code>[2, 30, 1]</code></pre><p>ثم يستخدم هذه القيم مع الأوزان التي تعلّمها.</p></div></div><div class="ml-note dark">المسار الكامل: خصائص رقمية ← درجة خام ← احتمال ← عتبة قرار ← فئة.</div>'));
  insertAfter('كيف يعمل التصنيف تقنيًا؟', content('من الخصائص إلى درجة', '<p class="ml-lead">يعطي الانحدار اللوجستي (Logistic Regression) كل خاصية وزنًا (Weight) يعبّر عن اتجاه تأثيرها وقوته.</p><div class="ml-grid"><div class="ml-card"><h3>كيف نفهم الأوزان؟</h3><ul><li>وزن موجب لأيام الغياب: زيادتها ترفع درجة التوقف.</li><li>وزن سالب لعدد الطلبات: زيادته تخفض الدرجة.</li><li>وزن موجب للشكاوى: زيادتها قد ترفع الدرجة.</li></ul></div><div class="ml-card orange"><h3>مثال حسابي مبسط</h3><pre class="ml-code"><code>الدرجة = (30 × 0.12) + (2 × -0.50) + (1 × 0.70) = 3.30</code></pre><p>هذه درجة خام (Score)، وليست 3.3%.</p></div></div><div class="ml-note">الوزن لا نختاره يدويًا في النموذج النهائي؛ يتعلمه النموذج من أمثلة التدريب.</div>'));
  insertAfter('من الخصائص إلى درجة', content('من الدرجة إلى احتمال ثم فئة', '<p class="ml-lead">بعد حساب الدرجة الخام، نحتاج تحويلها إلى قيمة سهلة القراءة بين 0 و1. هنا تأتي دالة سيقمويد (Sigmoid).</p><div class="ml-grid"><div class="ml-card"><h3>ما دالة سيقمويد؟</h3><p>دالة رياضية تعمل مثل <b>آلة تحويل</b>: ندخل إليها أي درجة، سالبة أو موجبة، فتخرج رقمًا محصورًا بين 0 و1.</p><table class="ml-table"><tr><th>الدرجة</th><th>الناتج التقريبي</th></tr><tr><td>−2</td><td>0.12 = 12%</td></tr><tr><td>0</td><td>0.50 = 50%</td></tr><tr><td>2</td><td>0.88 = 88%</td></tr><tr><td>3.3</td><td>0.96 = 96%</td></tr></table></div><div class="ml-card orange"><h3>ثم كيف يصبح قرارًا؟</h3><p>إذا اخترنا عتبة 0.50:</p><p><b>الاحتمال 0.96 ≥ 0.50</b><br>إذن تصنيف العميل: <b>متوقف = 1</b>.</p><p>أما 0.12 فهو أقل من العتبة، فيصنف: <b>غير متوقف = 0</b>.</p></div></div><div class="ml-note dark">سيقمويد لا تختار الفئة؛ هي تحوّل الدرجة إلى احتمال. العتبة هي التي تحوّل الاحتمال إلى قرار.</div>'));

  insertAfter('من الخصائص إلى درجة', content('ما معنى الدرجة الخام؟', '<p class="ml-lead">الدرجة الخام (Raw Score) رقم داخلي يحسبه النموذج ليقارن مستوى خطر التوقف بين العملاء.</p><table class="ml-table"><tr><th>العميل</th><th>أيام الغياب</th><th>عدد الطلبات</th><th>الدرجة المحسوبة</th><th>ماذا نفهم؟</th></tr><tr><td>أ</td><td>30</td><td>2</td><td>20</td><td>أعلى خطرًا من العميل ب</td></tr><tr><td>ب</td><td>5</td><td>6</td><td>−25</td><td>أقل خطرًا من العميل أ</td></tr></table><div class="ml-grid"><div class="ml-card"><h3>لماذا 20 لا تعني 20%؟</h3><p>لأنها ناتج جمع وضرب الخصائص في أوزانها. ويمكن أن تكون سالبة مثل −25، بينما النسبة لا يمكن أن تكون سالبة أو أكبر من 100%.</p></div><div class="ml-card orange"><h3>إذن لماذا نحسبها؟</h3><p>حتى نعرف أي العميلين تظهر عليه مؤشرات توقف أقوى. كلما ارتفعت الدرجة، زاد الاتجاه نحو فئة «متوقف» في هذا المثال.</p></div></div><div class="ml-note">في الخطوة التالية نحوّل هذا الرقم الداخلي إلى احتمال يستطيع فريق العمل فهمه واستخدامه.</div>'));
  insertAfter('من الدرجة إلى احتمال ثم فئة', content('كيف يتعلم النموذج الأوزان؟', '<p class="ml-lead">في الشريحة السابقة استخدم النموذج الأوزان لحساب الدرجة. هذه الأوزان لا نختارها نحن؛ يتعلمها النموذج من أمثلة نعرف نتائجها الحقيقية.</p>' + flow([['1. يقرأ مثالًا','خصائص العميل'],['2. يتوقع','احتمال التوقف'],['3. يقارن','التوقع بالحقيقة'],['4. يحسب الخطأ','Loss'],['5. يعدّل الأوزان','ثم يعيد المحاولة']]) + '<h3>مثال مبسط: هل أيام الغياب مؤشر مهم؟</h3><table class="ml-table"><tr><th>المثال السابق</th><th>أيام الغياب</th><th>الحقيقة</th><th>توقع النموذج أولًا</th><th>ماذا يتعلم؟</th></tr><tr><td>العميل أ</td><td>35 يومًا</td><td>توقف = 1</td><td>20%</td><td>كان الاحتمال منخفضًا رغم الغياب الطويل</td></tr><tr><td>العميل ب</td><td>3 أيام</td><td>مستمر = 0</td><td>55%</td><td>كان الاحتمال مرتفعًا رغم النشاط</td></tr></table><div class="ml-note orange"><b>في المحاولة التالية:</b> يزيد النموذج تأثير «أيام الغياب» في الاتجاه المناسب. قد يصبح توقع العميل أ 80% والعميل ب 15%. إذا اقتربت التوقعات من الحقيقة فقد انخفض الخطأ.</div><div class="ml-note">هذه الأرقام تعليمية فقط. التدريب (Training) يكرر المقارنة والتعديل على أمثلة كثيرة، وليس على عميلين فقط.</div>'));
  insertAfter('كيف يتعلم النموذج الأوزان؟', content('ما هو الحد الفاصل؟', '<p class="ml-lead">في الشريحة السابقة حوّلنا الاحتمال إلى فئة باستخدام عتبة القرار (Decision Threshold). إذا رسمنا الحالات، فإن المكان الذي يتغير عنده القرار من فئة إلى أخرى يسمى الحد الفاصل (Decision Boundary).</p><div class="ml-grid"><div class="ml-card"><h3>خاصية واحدة</h3><p>إذا اعتمد المثال على أيام الغياب فقط، فقد يكون الحد رقمًا مثل 20 يومًا: أقل منه «مستمر»، وأكثر منه «متوقف».</p></div><div class="ml-card orange"><h3>خاصيتان</h3><p>إذا استخدمنا أيام الغياب وعدد الطلبات معًا، يصبح الحد خطًا؛ لأن القرار يعتمد على القيمتين معًا.</p></div></div><div class="ml-note dark"><b>الفرق:</b> العتبة تقسم الاحتمالات مثل 50%. أما الحد الفاصل فيوضح أين يتغير القرار داخل مساحة الخصائص.</div>'));

  insertAfter('كيف يتعلم النموذج الأوزان؟', content('كيف تتحسن القاعدة أثناء التدريب؟', '<p class="ml-lead">لا يعرف النموذج الأوزان المناسبة مسبقًا؛ يجرب قيمًا، يقيس الخسارة، ثم يغيّرها تدريجيًا.</p><table class="ml-table"><tr><th>المحاولة</th><th>وزن عدد الطلبات</th><th>ماذا حدث؟</th><th>الخسارة</th></tr><tr><td>1</td><td>−1</td><td>فصل ضعيف وأخطاء كثيرة</td><td>0.82</td></tr><tr><td>2</td><td>−3</td><td>تحسن الفصل بين الحالات</td><td>0.51</td></tr><tr><td>3</td><td>−5</td><td>أصبحت التوقعات أقرب للحقيقة</td><td>0.29</td></tr></table><div class="ml-grid"><div class="ml-card"><h3>ماذا يحتفظ به؟</h3><p>الاتجاه الذي يقلل الخسارة، ثم يواصل التعديل حتى يصبح التحسن صغيرًا أو يصل إلى حد التوقف.</p></div><div class="ml-card orange"><h3>هل هذا حفظ للبيانات؟</h3><p>المطلوب تعلم علاقة تتكرر في حالات جديدة. إذا حفظ النموذج أمثلة التدريب فقط فلن يعمم جيدًا.</p></div></div><div class="ml-note dark">قيم الخسارة والأوزان هنا تعليمية لتوضيح الفكرة، وليست نتائج فعلية لملف منافذ.</div>'));
  insertAfter('ما هو الحد الفاصل؟', content('كيف تختلف نماذج التصنيف؟', '<table class="ml-table"><tr><th>النموذج</th><th>كيف يبني القرار؟</th><th>شكل الحد</th></tr><tr><td>الانحدار اللوجستي (Logistic Regression)</td><td>يجمع الخصائص بأوزان ثم يحول الدرجة إلى احتمال</td><td>بسيط وخطي غالبًا</td></tr><tr><td>شجرة القرار (Decision Tree)</td><td>تطرح أسئلة متتابعة مثل: هل الغياب أكبر من 20؟</td><td>مقسّم إلى مناطق</td></tr><tr><td>الغابة العشوائية وXGBoost</td><td>تجمع قرارات أشجار متعددة</td><td>أكثر تعقيدًا</td></tr><tr><td>الشبكات العصبية (Neural Networks)</td><td>تتعلم طبقات من التحويلات والأوزان</td><td>معقد ومنحني</td></tr></table><div class="ml-note orange">تختلف طريقة بناء الحد، لكن الهدف واحد: تعلّم قاعدة تستطيع تصنيف حالة جديدة لم يرها النموذج أثناء التدريب.</div>'));

  insertAfter('ما هو الحد الفاصل؟', content('شاهد الحد الفاصل', '<p class="ml-lead">عندما نستخدم خاصيتين، يصبح كل عميل نقطة: المحور الأفقي لأيام الغياب، والرأسي لعدد الطلبات.</p><div class="ml-card" style="padding:12px 18px"><svg viewBox="0 0 900 390" role="img" aria-label="رسم يوضح عملاء مستمرين ومتوقفين وخطًا فاصلًا" style="width:100%;height:390px;background:#fff"><line x1="90" y1="330" x2="840" y2="330" stroke="#0a315c" stroke-width="4"/><line x1="90" y1="330" x2="90" y2="35" stroke="#0a315c" stroke-width="4"/><text x="700" y="375" fill="#0a315c" font-size="24">أيام الغياب ←</text><text x="28" y="190" fill="#0a315c" font-size="22" transform="rotate(-90 28 190)">عدد الطلبات ←</text><line x1="265" y1="315" x2="650" y2="55" stroke="#ef7837" stroke-width="8" stroke-dasharray="14 10"/><text x="425" y="160" fill="#c54f14" font-size="24" font-weight="800" transform="rotate(-32 425 160)">حد القرار</text><circle cx="180" cy="90" r="13" fill="#0aa79d"/><circle cx="245" cy="115" r="13" fill="#0aa79d"/><circle cx="315" cy="80" r="13" fill="#0aa79d"/><circle cx="360" cy="135" r="13" fill="#0aa79d"/><circle cx="590" cy="270" r="13" fill="#0a315c"/><circle cx="650" cy="295" r="13" fill="#0a315c"/><circle cx="710" cy="245" r="13" fill="#0a315c"/><circle cx="760" cy="285" r="13" fill="#0a315c"/><text x="150" y="48" fill="#087c75" font-size="24" font-weight="800">● مستمرون</text><text x="655" y="215" fill="#0a315c" font-size="24" font-weight="800">● متوقفون</text></svg></div><div class="ml-note dark">الخط لا نرسمه مسبقًا؛ النموذج يغيّر موقعه واتجاهه أثناء التدريب حتى يقلل أخطاء الفصل بين الفئتين.</div>'));

  insertAfter('كيف تختلف نماذج التصنيف؟', content('ماذا لو كانت لدينا أكثر من فئتين؟', '<p class="ml-lead">التصنيف ليس دائمًا نعم أو لا. في التصنيف متعدد الفئات (Multiclass Classification) يحسب النموذج درجة أو احتمالًا لكل فئة.</p><table class="ml-table"><tr><th>فئة أولوية البلاغ</th><th>الاحتمال</th></tr><tr><td>منخفضة</td><td>0.10</td></tr><tr><td>متوسطة</td><td>0.25</td></tr><tr><td>مرتفعة</td><td>0.65</td></tr></table>' + flow([['خصائص البلاغ','النوع والوصف والوقت'],['درجة لكل فئة','ثلاث درجات'],['تحويل إلى احتمالات','مجموعها = 1'],['اختيار الأعلى','0.65'],['النتيجة','أولوية مرتفعة']]) + '<div class="ml-note orange">في بعض النماذج تستخدم دالة (Softmax) لتحويل الدرجات إلى احتمالات متعددة. يكفي الآن فهم الفكرة، ولا نحتاج معادلتها.</div>'));

  insertAfter('كيف يعمل التصنيف تقنيًا؟', content('كيف يعمل الانحدار تقنيًا؟', '<p class="ml-lead">بعد أن رأينا كيف يختار التصنيف فئة، ننتقل إلى الانحدار (Regression): نستخدمه عندما يكون الناتج المطلوب <b>رقمًا له مقدار</b>، مثل السعر أو المدة أو كمية الطلب.</p><div class="ml-grid"><div class="ml-card"><h3>ماذا يدخل إليه؟</h3><p>خصائص الحالة (Features)، مثل نوع العطل، مستوى الضرر، عمر الجهاز، وخبرة الفني.</p></div><div class="ml-card orange"><h3>ماذا يعيد؟</h3><p>قيمة رقمية متوقعة، مثل <b>6.5 ساعات</b> لإصلاح العطل، وليست فئة مثل «متأخر/غير متأخر».</p></div></div>' + flow([['خصائص X','معلومات الحالة'],['يتعلم العلاقة','من أمثلة سابقة'],['يخرج رقمًا','6.5 ساعات'],['يقارن بالحقيقة','كانت 8 ساعات'],['يقلل الخطأ','في المحاولة التالية']]) + '<div class="ml-note dark"><b>الفرق الأساسي:</b> Classification يختار فئة، أما Regression فيقدّر رقمًا. في الشريحة التالية نطبّق الفكرة على مدة الإصلاح.</div>'));

  insertAfter('أمثلة على التعلم غير الخاضع للإشراف', content('كيف يعمل التجميع تقنيًا؟', '<p class="ml-lead">التجميع (Clustering) يقيس مدى تشابه السجلات بناءً على الخصائص التي نختار إدخالها.</p>' + flow([['1. نختار الخصائص','الطلبات والسلة والعروض'],['2. نوحّد المقاييس','حتى لا يسيطر عمود كبير'],['3. نحسب التشابه','غالبًا باستخدام المسافة'],['4. نضم المتقارب','كل سجل لأقرب مجموعة'],['5. نكرر','حتى تستقر المجموعات']]) + '<div class="ml-grid"><div class="ml-card"><h3>مثال K-Means</h3><p>يبدأ بمراكز مؤقتة، يسند كل عميل لأقرب مركز، يعيد حساب مركز كل مجموعة، ثم يكرر الإسناد والتحديث.</p></div><div class="ml-card orange"><h3>هل يختار أهم الخصائص؟</h3><p><b>لا، ليس تلقائيًا.</b> يستخدم جميع الخصائص التي نعطيه إياها. نحن نحذف غير المفيد، نوحّد المقاييس، ثم نفسر ما ميّز كل مجموعة.</p></div></div>'));
  insertAfter('أمثلة على التعلم غير الخاضع للإشراف', content('ماذا يرى النموذج بلا هدف؟', '<p class="ml-lead">رأينا أن التعلم غير الخاضع للإشراف له استخدامات متعددة. قبل أن نركز على التجميع (Clustering)، نلاحظ الفرق الأساسي: نعطي النموذج جدول الخصائص X فقط، من دون عمود إجابة y.</p><table class="ml-table"><tr><th>العميل</th><th>طلبات شهريًا</th><th>متوسط السلة</th><th>استخدام العروض</th><th>الفئة الصحيحة</th></tr><tr><td>أ</td><td>8</td><td>220</td><td>منخفض</td><td>غير موجودة</td></tr><tr><td>ب</td><td>2</td><td>55</td><td>مرتفع</td><td>غير موجودة</td></tr><tr><td>ج</td><td>4</td><td>110</td><td>متوسط</td><td>غير موجودة</td></tr></table><div class="ml-grid"><div class="ml-card"><h3>ماذا يفعل؟</h3><p>يبحث عن سجلات تتشابه في خصائصها، أو اتجاهات تلخص البيانات، أو حالات تختلف عن الأغلبية.</p></div><div class="ml-card orange"><h3>ماذا لا يعرف؟</h3><p>لا يعرف مسبقًا أسماء المجموعات ولا أي تقسيم «صحيح». نحن نفسر النتيجة بعد أن يقترح البنية.</p></div></div><div class="ml-note dark">الخطوة التالية: سنختار Clustering من هذه الاستخدامات ونتتبّع رحلته كاملة.</div>'));
  insertAfter('كيف يعمل التجميع تقنيًا؟', content('ما معنى التشابه والمسافة؟', '<p class="ml-lead">تتعامل خوارزميات كثيرة مع كل سجل كنقطة. كلما كانت النقاط أقرب في الخصائص، عدّها النموذج أكثر تشابهًا.</p><table class="ml-table"><tr><th>العميل</th><th>الطلبات</th><th>السلة</th><th>الملاحظة</th></tr><tr><td>أ</td><td>8</td><td>220</td><td>قريب من ب</td></tr><tr><td>ب</td><td>7</td><td>205</td><td>قريب من أ</td></tr><tr><td>ج</td><td>1</td><td>48</td><td>بعيد عنهما</td></tr></table><div class="ml-grid"><div class="ml-card"><h3>المسافة الإقليدية (Euclidean Distance)</h3><p>تقيس المسافة المباشرة بين نقطتين بعد مقارنة الفروق في كل خاصية. مسافة صغيرة تعني تشابهًا أكبر.</p></div><div class="ml-card orange"><h3>هل المسافة تفهم المعنى؟</h3><p>لا. هي تقارن أرقامًا فقط؛ لذلك اختيار الخصائص وطريقة تحويلها يحددان معنى «التشابه».</p></div></div><div class="ml-note dark">قد يتشابه عميلان في قيمة السلة، لكن يختلفان في تكرار الطلب. النموذج يجمع أثر الخصائص كلها.</div>'));
  insertAfter('ما معنى التشابه والمسافة؟', content('كيف نختار خصائص التجميع؟', '<p class="ml-lead">نبدأ من الغرض العملي: <b>على أي أساس نريد أن يتشابه العملاء؟</b> ثم نختار أعمدة تصف هذا السلوك فعلًا.</p><table class="ml-table"><tr><th>السؤال</th><th>قرار الاختيار</th><th>مثال من منافذ</th></tr><tr><td>هل تصف الخاصية السلوك المطلوب؟</td><td>نستخدمها</td><td>عدد الطلبات، متوسط السلة، استخدام العروض</td></tr><tr><td>هل هي مجرد معرّف؟</td><td>نستبعدها</td><td>customer_id لا يصف تشابهًا سلوكيًا</td></tr><tr><td>هل تكشف نتيجة أو مستقبلًا؟</td><td>نستبعدها</td><td>churned_30d وnext_month_orders</td></tr><tr><td>هل تكرر معلومة موجودة تقريبًا؟</td><td>نختار الأوضح أو نختبر أثرها</td><td>إجمالي الإنفاق ومتوسط السلة قد يتداخلان</td></tr></table><div class="ml-grid"><div class="ml-card"><h3>مثال: شرائح تسويقية</h3><p>نختار تكرار الطلب، قيمة السلة، واستخدام العروض؛ لأنها تصف طريقة الشراء.</p></div><div class="ml-card orange"><h3>مثال: شرائح تشغيلية</h3><p>قد نختار وقت الطلب، نوع الخدمة، ومدة المعالجة؛ لأن السؤال أصبح عن نمط التشغيل.</p></div></div><div class="ml-note dark"><b>القاعدة:</b> لا توجد قائمة خصائص صحيحة لكل مشروع. السؤال العملي هو الذي يحدد معنى التشابه، ثم نفحص هل المجموعات الناتجة مستقرة ومفهومة ومفيدة.</div>'));
  insertAfter('ما معنى التشابه والمسافة؟', content('لماذا نحتاج التحجيم قبل التجميع؟', '<p class="ml-lead">إذا كانت خاصية أرقامها كبيرة جدًا، فقد تسيطر على حساب المسافة حتى لو لم تكن الأهم عمليًا.</p><table class="ml-table"><tr><th>الخاصية</th><th>نطاقها</th><th>ما المشكلة؟</th></tr><tr><td>متوسط السلة</td><td>20 إلى 500 ريال</td><td>فروق بالمئات</td></tr><tr><td>معدل استخدام العروض</td><td>0 إلى 1</td><td>فروق صغيرة جدًا</td></tr></table><div class="ml-grid"><div class="ml-card"><h3>قبل التحجيم</h3><p>قد ترى K-Means السلة فقط تقريبًا؛ لأن أرقامها أكبر، فتتجاهل أثر استخدام العروض.</p></div><div class="ml-card orange"><h3>بعد التحجيم (Scaling)</h3><p>نضع الخصائص على مقاييس متقاربة، فتشارك كل واحدة في حساب التشابه بصورة أكثر توازنًا.</p></div></div><div class="ml-note">التحجيم لا يجعل الخصائص مهمة تلقائيًا؛ بل يمنع حجم الرقم وحده من التحكم في المسافة.</div>'));
  insertAfter('لماذا نحتاج التحجيم قبل التجميع؟', content('كيف تعمل K-Means خطوة بخطوة؟', '<p class="ml-lead">نحن لا نضع مراكز المجموعات يدويًا في الاستخدام المعتاد. نحن نحدد البيانات وعدد المجموعات، ثم تبدأ الخوارزمية العمل.</p><table class="ml-table"><tr><th>من يحدد؟</th><th>ماذا يحدد؟</th></tr><tr><td>الإنسان</td><td>الخصائص المستخدمة، والتحجيم، وعدد المجموعات K</td></tr><tr><td>الخوارزمية</td><td>المراكز الأولية، ثم توزيع السجلات وتحديث المراكز</td></tr><tr><td>الإنسان بعد التدريب</td><td>تفسير المجموعات وتسميتها والتحقق من فائدتها</td></tr></table><div class="ml-grid"><div class="ml-card"><h3>كيف تختار المراكز الأولى؟</h3><p>غالبًا تستخدم طريقة (k-means++) لاختيار نقاط بداية متباعدة نسبيًا. الاختيار يحدث تلقائيًا داخل الخوارزمية.</p></div><div class="ml-card orange"><h3>هل المركز عميل حقيقي؟</h3><p>ليس بالضرورة. المركز (Centroid) هو متوسط خصائص أعضاء المجموعة، وقد لا يطابق سجلًا حقيقيًا.</p></div></div><div class="ml-note dark">في مثالنا سنفترض أن الخوارزمية بدأت عند 1 و3 فقط كي نرى كيف تتحرك المراكز؛ المستخدم لم يكتب هذين الرقمين.</div>'));
  insertAfter('كيف تعمل K-Means خطوة بخطوة؟', content('K-Means: الجولة الأولى', '<p class="ml-lead">في هذه الجولة التعليمية اختارت الخوارزمية مركزين أوليين عند 1 و3. هذا افتراض لشرح الحركة، وليس إدخالًا من المستخدم.</p><table class="ml-table"><tr><th>العميل</th><th>عدد الطلبات</th><th>الأقرب إلى</th><th>المجموعة المؤقتة</th></tr><tr><td>أ</td><td>1</td><td>المركز 1</td><td>الأولى</td></tr><tr><td>ب</td><td>2</td><td>المركز 1</td><td>الأولى</td></tr><tr><td>ج</td><td>3</td><td>المركز 3</td><td>الثانية</td></tr><tr><td>د، هـ، و</td><td>8، 9، 10</td><td>المركز 3</td><td>الثانية</td></tr></table><div class="ml-grid"><div class="ml-card"><h3>المجموعة الأولى</h3><p>القيم: 1 و2<br><b>المركز الجديد = 1.5</b></p></div><div class="ml-card orange"><h3>المجموعة الثانية</h3><p>القيم: 3 و8 و9 و10<br><b>المركز الجديد = 7.5</b></p></div></div><div class="ml-note">الخوارزمية توزع أولًا، ثم تحسب متوسط أعضاء كل مجموعة وتحرك المركز إليه.</div>'));

  insertAfter('كيف تعمل K-Means خطوة بخطوة؟', content('ماذا ندخل إلى K-Means وماذا تعيد؟', '<div class="ml-grid"><div class="ml-card"><h3>ما ندخله نحن</h3><ol><li>جدول الخصائص X بعد التجهيز.</li><li>عدد المجموعات K.</li><li>إعداد يثبت الاختيار العشوائي عند إعادة التجربة.</li></ol><table class="ml-table"><tr><th>العميل</th><th>الطلبات</th></tr><tr><td>أ</td><td>1</td></tr><tr><td>ب</td><td>2</td></tr><tr><td>ج</td><td>3</td></tr><tr><td>د</td><td>8</td></tr></table></div><div class="ml-card orange"><h3>ما تعيده الخوارزمية</h3><ul><li><b>Label:</b> رقم مجموعة لكل صف.</li><li><b>Centroid:</b> مركز كل مجموعة.</li></ul><table class="ml-table"><tr><th>العميل</th><th>رقم المجموعة</th></tr><tr><td>أ، ب، ج</td><td>0</td></tr><tr><td>د، هـ، و</td><td>1</td></tr></table></div></div><div class="ml-note dark">لا ندخل أسماء مثل «عملاء مميزون». هذه الأسماء نضعها بعد ظهور المجموعات وفحص خصائصها.</div>'));
  insertAfter('K-Means: الجولة الأولى', content('K-Means: نعيد التوزيع', '<p class="ml-lead">بعد انتقال المركزين إلى 1.5 و7.5، تعيد الخوارزمية سؤالها: أي مركز أصبح أقرب إلى كل عميل؟</p><table class="ml-table"><tr><th>القيمة</th><th>الأقرب الآن</th><th>المجموعة الجديدة</th></tr><tr><td>1، 2، 3</td><td>المركز 1.5</td><td>الأولى</td></tr><tr><td>8، 9، 10</td><td>المركز 7.5</td><td>الثانية</td></tr></table><div class="ml-grid"><div class="ml-card"><h3>نحدّث المراكز مرة أخرى</h3><p>المجموعة الأولى: (1 + 2 + 3) ÷ 3 = <b>2</b><br>المجموعة الثانية: (8 + 9 + 10) ÷ 3 = <b>9</b></p></div><div class="ml-card orange"><h3>متى نتوقف؟</h3><p>نعيد التوزيع باستخدام المركزين 2 و9. لن ينتقل أي عميل، إذن استقرت المجموعتان وتتوقف الخوارزمية.</p></div></div>' + flow([['مراكز أولية','1 و3'],['توزيع أول','حسب الأقرب'],['مراكز جديدة','1.5 و7.5'],['توزيع ثانٍ','1،2،3 / 8،9،10'],['استقرار','المركزان 2 و9']]) + '<div class="ml-note dark">هذه هي K-Means: توزيع على أقرب مركز ← حساب متوسط جديد ← إعادة التوزيع، حتى لا تتغير المجموعات.</div>'));
  insertAfter('كيف تعمل K-Means خطوة بخطوة؟', content('كيف نختار عدد المجموعات K؟', '<p class="ml-lead">لا توجد إجابة سحرية. نجرب عدة قيم ثم نوازن بين جودة الفصل وسهولة استخدام النتيجة عمليًا.</p><div class="ml-grid three"><div class="ml-card"><h3>طريقة الكوع (Elbow Method)</h3><p>نراقب انخفاض المسافات داخل المجموعات. نبحث عن نقطة يبدأ بعدها التحسن بالتباطؤ.</p></div><div class="ml-card orange"><h3>معامل السيلويت (Silhouette Score)</h3><p>يقارن قرب السجل من مجموعته ببعده عن المجموعات الأخرى. الأعلى أفضل عادةً.</p></div><div class="ml-card navy"><h3>المعنى العملي</h3><p>هل المجموعات مستقرة، مختلفة، ويمكن أن يتخذ الفريق قرارًا مناسبًا لكل واحدة؟</p></div></div><div class="ml-note">قد يعطي المقياس K = 5، لكن إذا لم يستطع الفريق تفسير المجموعات أو التعامل معها فقد لا يكون الاختيار مفيدًا.</div>'));
  insertAfter('كيف نختار عدد المجموعات K؟', content('كيف نفسر المجموعات؟', '<p class="ml-lead">نفسر المجموعات بعد انتهاء K-Means واستقرار المراكز، وليس قبل التدريب.</p>' + flow([['1. ينتهي التدريب','تستقر المراكز'],['2. نحصل على Label','رقم مجموعة لكل عميل'],['3. نلخص كل مجموعة','متوسطات ونسب'],['4. نفهم الفروق','ما الذي يميزها؟'],['5. نسميها','اسم بشري وصفي']]) + '<table class="ml-table"><tr><th>رقم المجموعة</th><th>ملخص الخصائص</th><th>الاسم الذي يضعه الإنسان</th></tr><tr><td>0</td><td>طلبات كثيرة، سلة مرتفعة، عروض قليلة</td><td>عملاء مرتفعو القيمة</td></tr><tr><td>1</td><td>طلبات قليلة، سلة منخفضة، عروض كثيرة</td><td>باحثون عن العروض</td></tr></table><div class="ml-grid"><div class="ml-card"><h3>ماذا تعطي الخوارزمية؟</h3><p>أرقامًا مثل 0 و1 ومراكز المجموعات. الرقم لا يحمل معنى «جيد» أو «سيئ».</p></div><div class="ml-card orange"><h3>ماذا يضيف الإنسان؟</h3><p>يراجع الخصائص وأمثلة العملاء، ثم يضع اسمًا مفهومًا ويتأكد أن المجموعة مفيدة للعمل.</p></div></div><div class="ml-note dark">التفسير خطوة بعد التدريب: الخوارزمية تكوّن المجموعات، والإنسان يشرح معناها.</div>'));
  insertAfter('كيف يعمل تقليل الأبعاد واكتشاف الشذوذ؟', content('كيف يعمل تقليل الأبعاد تقنيًا؟', '<p class="ml-lead">تقليل الأبعاد (Dimensionality Reduction) يحول خصائص كثيرة إلى عدد أقل من الأبعاد التي تحتفظ بأكبر قدر ممكن من الاختلاف.</p><div class="ml-grid"><div class="ml-card"><h3>مثال PCA</h3><p>قد يجمع عدد الطلبات ومتوسط السلة والقيمة السنوية في محور جديد يمثل «النشاط الشرائي»، ومحور آخر يمثل «الاعتماد على العروض».</p></div><div class="ml-card orange"><h3>هل يختار عمودًا موجودًا؟</h3><p>غالبًا لا. المكوّن الرئيسي (Principal Component) خليط من خصائص متعددة، ولكل خاصية وزن داخل المكوّن.</p></div></div>' + flow([['خصائص كثيرة','10 أعمدة'],['حساب الاتجاهات','أكبر اختلاف'],['مكونات جديدة','PC1 وPC2'],['تمثيل أبسط','رسم ثنائي الأبعاد']]) + '<div class="ml-note dark">يفيد في العرض والاستكشاف وتقليل التعقيد، لكن المكونات الجديدة قد تكون أصعب في التفسير.</div>'));
  insertAfter('كيف يعمل تقليل الأبعاد تقنيًا؟', content('كيف يعمل اكتشاف الشذوذ تقنيًا؟', '<p class="ml-lead">اكتشاف الشذوذ (Anomaly Detection) يتعلم شكل الحالات المعتادة ثم يعطي كل حالة درجة توضّح مدى بعدها عن هذا النمط.</p><table class="ml-table"><tr><th>المعاملة</th><th>القيمة</th><th>الوقت</th><th>الموقع</th><th>درجة الشذوذ</th></tr><tr><td>أ</td><td>120</td><td>2 ظهرًا</td><td>معتاد</td><td>منخفضة</td></tr><tr><td>ب</td><td>8,500</td><td>3 فجرًا</td><td>جديد</td><td>مرتفعة</td></tr></table><div class="ml-grid"><div class="ml-card"><h3>ماذا تعني الدرجة العالية؟</h3><p>الحالة مختلفة عن النمط المعتاد وتستحق المراجعة.</p></div><div class="ml-card orange"><h3>ماذا لا تعني؟</h3><p>لا تعني احتيالًا مؤكدًا. قد تكون عملية صحيحة لكنها نادرة.</p></div></div><div class="ml-note">القرار النهائي يحتاج قواعد عمل أو مراجعة بشرية؛ الخوارزمية تشير إلى غير المعتاد فقط.</div>'));
  insertAfter('كيف يعمل اكتشاف الشذوذ تقنيًا؟', content('حدود التعلم غير الخاضع للإشراف', '<div class="ml-grid three"><div class="ml-card"><h3>النتيجة ليست حقيقة مطلقة</h3><p>تغيير الخصائص أو المقياس أو K قد ينتج مجموعات مختلفة.</p></div><div class="ml-card orange"><h3>الأسماء لا تأتي تلقائيًا</h3><p>الخوارزمية تعطي أرقام مجموعات، والإنسان يفسرها بحذر.</p></div><div class="ml-card navy"><h3>القيم المتطرفة تؤثر</h3><p>قد تسحب مراكز K-Means أو تظهر كمجموعة صغيرة منفصلة.</p></div><div class="ml-card"><h3>البداية قد تغيّر النتيجة</h3><p>المراكز الأولية المختلفة قد تقود إلى حلول مختلفة؛ لذلك نكرر التشغيل.</p></div><div class="ml-card orange"><h3>ليس كل نمط مفيدًا</h3><p>وجود مجموعات رياضية لا يعني وجود قرار أعمال مناسب لها.</p></div><div class="ml-card navy"><h3>نبحث عن الاستقرار</h3><p>نكرر التحليل ونختبر هل تظهر أنماط متقاربة مع عينات أو إعدادات مختلفة.</p></div></div><div class="ml-note dark">نجاح التعلم غير الخاضع يُقاس بجودة البنية وفائدتها واستقرارها، لا بدقة مقابل إجابة صحيحة غير موجودة.</div>'));

  insertAfter('كيف يعمل التجميع تقنيًا؟', content('كيف يعمل تقليل الأبعاد واكتشاف الشذوذ؟', '<div class="ml-grid"><div class="ml-card"><h3>تقليل الأبعاد (Dimensionality Reduction)</h3><p>يبحث عن اتجاهات جديدة تلخص أكبر قدر من الاختلاف الموجود في أعمدة كثيرة.</p><p><b>مثال PCA:</b> قد يلخص الدخل ومتوسط السلة وعدد الطلبات في بُعد جديد يمثل «قوة النشاط الشرائي».</p><p>هو لا يحتفظ دائمًا باسم خاصية واحدة؛ بل قد يمزج عدة خصائص بأوزان.</p></div><div class="ml-card orange"><h3>اكتشاف الشذوذ (Anomaly Detection)</h3><p>يتعلم شكل الحالات المعتادة، ثم يعطي الحالات البعيدة عنها درجة شذوذ (Anomaly Score).</p><p><b>مثال:</b> عملية كبيرة جدًا وفي وقت وموقع غير معتادين تحصل على درجة أعلى وتُرسل للمراجعة.</p><p>الشذوذ يعني «غير معتاد»، وليس «احتيالًا مؤكدًا».</p></div></div><div class="ml-note dark">اختيار الخصائص وتوحيد مقاييسها يؤثران مباشرة في معنى المسافة والاختلاف الذي تراه هذه الخوارزميات.</div>'));

  insertAfter('كيف يتعلم الوكيل من المكافأة؟', content('كيف يتعلم التعلم المعزز تقنيًا؟', '<p class="ml-lead">يبني الوكيل (Agent) تقديرًا لقيمة كل فعل في كل حالة: أي فعل يتوقع أن يقوده إلى مكافأة أكبر الآن ولاحقًا؟</p>' + flow([['يرى الحالة','مثلاً ازدحام مرتفع'],['يختار فعلًا','يطيل الإشارة الخضراء'],['تتغير البيئة','ينخفض أو يزيد الانتظار'],['يستقبل مكافأة','جيدة أو سيئة'],['يحدّث سياسته','يرجح الفعل الأفضل لاحقًا']]) + '<div class="ml-grid"><div class="ml-card"><h3>الاستكشاف (Exploration)</h3><p>يجرب أفعالًا مختلفة حتى لا يبقى عالقًا في أول حل وجده.</p></div><div class="ml-card orange"><h3>الاستغلال (Exploitation)</h3><p>يستخدم أفضل فعل تعلمه حتى الآن للحصول على مكافأة جيدة.</p></div></div><div class="ml-note">التحدي هو الموازنة بين التجربة والاستفادة من المعرفة الحالية، وربط الفعل الحالي بمكافآت قد تظهر بعد عدة خطوات.</div>'));

  insertAfter('كيف يمكن للآلة أن تتعلم؟', content('رتّبوا رحلة التعلم الخاضع للإشراف', '<span class="ml-badge">مجموعات · 6 دقائق</span><p class="ml-lead">رتّبوا البطاقات التالية من البداية إلى النهاية، ثم اشرحوا الفرق بين التدريب والاستخدام.</p><div class="ml-grid three"><div class="ml-card"><h3>بطاقة أ</h3><p>توقع نتيجة حالة جديدة.</p></div><div class="ml-card orange"><h3>بطاقة ب</h3><p>مقارنة التوقع بالإجابة الصحيحة.</p></div><div class="ml-card navy"><h3>بطاقة ج</h3><p>جمع أمثلة سابقة.</p></div><div class="ml-card"><h3>بطاقة د</h3><p>تعديل أوزان النموذج لتقليل الخطأ.</p></div><div class="ml-card orange"><h3>بطاقة هـ</h3><p>تحويل كل مثال إلى خصائص.</p></div><div class="ml-card navy"><h3>بطاقة و</h3><p>حفظ النموذج بعد انتهاء التدريب.</p></div></div><div class="ml-note dark">التسليم: اكتبوا ترتيب الحروف، وحددوا عند أي بطاقة ينتهي التدريب ويبدأ استخدام النموذج.</div>', 'ml-activity'));

  insertAfter('رتّبوا رحلة التعلم الخاضع للإشراف', content('الحل: رحلة التعلم الخاضع للإشراف', '<p class="ml-lead"><b>الترتيب:</b> ج ← هـ ← ب ← د ← و ← أ</p>' + flow([['جمع الأمثلة','ج'],['إنشاء الخصائص','هـ'],['المقارنة والحساب','ب'],['تعديل الأوزان','د'],['حفظ النموذج','و'],['توقع جديد','أ']]) + '<div class="ml-grid"><div class="ml-card"><h3>مرحلة التدريب (Training)</h3><p>من جمع الأمثلة إلى تعديل الأوزان وحفظ النموذج. هنا نحتاج الإجابات الصحيحة كي يتعلم.</p></div><div class="ml-card orange"><h3>مرحلة الاستخدام (Inference)</h3><p>نعطي النموذج المحفوظ حالة جديدة فينتج توقعًا. الإجابة الحقيقية قد لا تكون معروفة بعد.</p></div></div>'));

  insertAfter('كيف يعمل الانحدار تقنيًا؟', content('محكمة الخصائص', '<span class="ml-badge">مجموعات · 8 دقائق</span><p class="ml-lead">الهدف: توقع توقف عميل منافذ خلال 30 يومًا. صنّفوا كل عمود إلى: مفيد محتمل، معرّف، تسرب من المستقبل، أو يحتاج دليلًا.</p><table class="ml-table"><tr><th>العمود</th><th>قرار المجموعة</th><th>السبب</th></tr><tr><td>days_since_last_order</td><td>……</td><td>……</td></tr><tr><td>avg_basket_sar</td><td>……</td><td>……</td></tr><tr><td>customer_id</td><td>……</td><td>……</td></tr><tr><td>next_month_orders</td><td>……</td><td>……</td></tr><tr><td>لون واجهة التطبيق المفضل</td><td>……</td><td>……</td></tr></table><div class="ml-note dark">التسليم: قرار وسبب لكل عمود. لا يكفي أن تقولوا «مفيد»؛ اربطوه بسلوك العميل وزمن التنبؤ.</div>', 'ml-activity'));

  insertAfter('محكمة الخصائص', content('الحكم: أي الخصائص نستخدم؟', '<table class="ml-table"><tr><th>العمود</th><th>الحكم</th><th>التفسير</th></tr><tr><td>days_since_last_order</td><td>مفيد محتمل</td><td>الغياب الطويل قد يرتبط بالتوقف</td></tr><tr><td>avg_basket_sar</td><td>مفيد محتمل</td><td>قد يعكس نمط الشراء وقيمة العميل</td></tr><tr><td>customer_id</td><td>معرّف</td><td>يميز الصف لكنه لا يصف سلوكًا قابلًا للتعميم</td></tr><tr><td>next_month_orders</td><td>تسرب من المستقبل</td><td>يكشف ما حدث خلال الفترة التي نحاول توقعها</td></tr><tr><td>لون الواجهة المفضل</td><td>يحتاج دليلًا</td><td>لا نفترض فائدته بلا منطق أو اختبار</td></tr></table><div class="ml-note orange"><b>مهم:</b> الأهمية (Feature Importance) تُقاس بعد التدريب، لكنها لا تجعل العمود آمنًا أو منطقيًا تلقائيًا. نراجع المعنى والزمن أولًا.</div>'));

  insertAfter('ما هو تعلم الآلة؟', content('الخوارزمية أم النموذج؟', '<div class="ml-grid"><div class="ml-card"><h3>الخوارزمية (Algorithm)</h3><p>طريقة أو خطوات رياضية للتعلم من البيانات.</p><p><b>مثال:</b> الانحدار اللوجستي يحدد كيف تُحسب الأوزان والاحتمالات.</p></div><div class="ml-card orange"><h3>النموذج (Model)</h3><p>النتيجة التي نحصل عليها بعد تشغيل الخوارزمية على بيانات معينة.</p><p><b>مثال:</b> الأوزان التي تعلمها نموذج توقف عملاء منافذ.</p></div></div>' + flow([['خوارزمية','طريقة التعلم'],['+ بيانات تدريب','أمثلة محددة'],['+ تدريب','تطبيق الطريقة'],['= نموذج','قاعدة متعلمة جاهزة']]) + '<div class="ml-note dark">الخوارزمية مثل وصفة عامة، والنموذج هو الناتج بعد تطبيق الوصفة على بياناتنا.</div>'));
  insertAfter('طرق تعلم الآلة الثلاث', content('التدريب مقابل الاستدلال', '<table class="ml-table"><tr><th>المرحلة</th><th>ماذا يحدث؟</th><th>هل تتغير الأوزان؟</th><th>مثال</th></tr><tr><td>التدريب (Training)</td><td>يتعلم النموذج من البيانات ويقلل الأخطاء</td><td>نعم</td><td>يتعلم من عملاء نعرف هل توقفوا</td></tr><tr><td>الاستدلال (Inference)</td><td>يستخدم النموذج المتعلم لإنتاج نتيجة جديدة</td><td>لا</td><td>يقدّر احتمال توقف عميل حالي</td></tr></table><div class="ml-grid"><div class="ml-card"><h3>أثناء التدريب</h3><p>ندخل أمثلة كثيرة، نحسب الخطأ، ونعدّل النموذج مرارًا.</p></div><div class="ml-card orange"><h3>أثناء الاستدلال</h3><p>ندخل حالة واحدة أو حالات جديدة، فنحصل على توقع بسرعة من دون إعادة التدريب.</p></div></div><div class="ml-note dark">الاستدلال يسمى أيضًا الاستخدام أو التنبؤ التشغيلي؛ وهو ما يحدث بعد نشر النموذج.</div>'));
  insertAfter('التدريب مقابل الاستدلال', content('ما معنى التعميم؟', '<p class="ml-lead">التعميم (Generalization) هو قدرة النموذج على النجاح مع حالات جديدة لم يرها أثناء التدريب.</p><div class="ml-grid"><div class="ml-card orange"><h3>الحفظ</h3><p>يتذكر النموذج تفاصيل عملاء التدريب ويجيب عنهم جيدًا، لكنه يفشل مع عملاء جدد.</p><p><b>هذه ليست الغاية.</b></p></div><div class="ml-card"><h3>التعميم</h3><p>يتعلم علاقة قابلة للتكرار، مثل ارتباط الغياب الطويل بانخفاض النشاط، ثم يستخدمها مع حالة جديدة.</p><p><b>هذه هي الغاية.</b></p></div></div><table class="ml-table"><tr><th>النتيجة</th><th>على أمثلة التدريب</th><th>على حالات جديدة</th></tr><tr><td>نموذج حافظ</td><td>جيد جدًا</td><td>ضعيف</td></tr><tr><td>نموذج يعمم</td><td>جيد</td><td>جيد وقريب من التدريب</td></tr></table><div class="ml-note">لهذا لا نحكم على النموذج من الأمثلة التي تعلم منها فقط.</div>'));
  insertAfter('ما معنى التعميم؟', content('كيف نعرف مبدئيًا أنه تعلم شيئًا مفيدًا؟', '<p class="ml-lead">قبل دراسة المقاييس بالتفصيل، نبحث عن ثلاثة مؤشرات منطقية.</p><div class="ml-grid three"><div class="ml-card"><h3>1. أفضل من تخمين بسيط</h3><p>يقارن بخط أساس (Baseline)، مثل توقع الفئة الأكثر شيوعًا دائمًا.</p></div><div class="ml-card orange"><h3>2. ينجح مع حالات جديدة</h3><p>لا نختبره على الأمثلة نفسها التي تدرب عليها.</p></div><div class="ml-card navy"><h3>3. أخطاؤه مفهومة</h3><p>نفحص أين يفشل، وهل النتائج منطقية وقابلة للاستخدام.</p></div></div><div class="ml-grid"><div class="ml-card"><h3>مثال خط أساس</h3><p>إذا كان 80% من العملاء مستمرين، فتوقع «مستمر» للجميع ينجح ظاهريًا في 80% من الحالات بلا تعلم حقيقي.</p></div><div class="ml-card orange"><h3>السؤال الصحيح</h3><p>هل أضاف النموذج معلومات أفضل من القاعدة البسيطة، وهل حافظ عليها مع بيانات لم يرها؟</p></div></div><div class="ml-note dark">سنقيس ذلك بدقة في يوم التقييم؛ المطلوب الآن فهم مبدأ المقارنة العادلة.</div>'));
  insertAfter('من الدرجة إلى احتمال ثم فئة', content('التوقع ليس هو القرار', '<div class="ml-grid"><div class="ml-card"><h3>التوقع (Prediction)</h3><p>معلومة ينتجها النموذج، مثل: احتمال التوقف = 0.62 أو مدة الإصلاح = 7 ساعات.</p></div><div class="ml-card orange"><h3>القرار (Decision)</h3><p>الإجراء الذي يتخذه الإنسان أو النظام باستخدام التوقع مع التكلفة والسياسة والقدرة التشغيلية.</p></div></div><table class="ml-table"><tr><th>التوقع نفسه</th><th>قرار محتمل 1</th><th>قرار محتمل 2</th></tr><tr><td>احتمال التوقف 62%</td><td>إرسال عرض تلقائي إذا تجاوز 50%</td><td>اتصال بشري فقط إذا تجاوز 80%</td></tr></table><div class="ml-note dark">النموذج لا يقرر وحده عادةً؛ العتبة وقواعد العمل تحوّل توقعه إلى إجراء.</div>'));
  insertAfter('التوقع ليس هو القرار', content('النتيجة تقدير وليست حقيقة مؤكدة', '<p class="ml-lead">عندما يعطي النموذج احتمالًا أو قيمة متوقعة، فهو يعبّر عن أفضل تقدير تعلّمه من البيانات المتاحة، وليس ضمانًا لما سيحدث.</p><div class="ml-grid three"><div class="ml-card"><h3>80% لا تعني اليقين</h3><p>قد يصنف العميل على أنه معرض للتوقف، لكنه يستمر فعلًا.</p></div><div class="ml-card orange"><h3>البيانات قد تتغير</h3><p>سلوك العملاء في موسم جديد قد يختلف عن أمثلة التدريب.</p></div><div class="ml-card navy"><h3>بعض المعلومات غير موجودة</h3><p>قد تؤثر أسباب لم نسجلها ضمن الخصائص.</p></div></div><div class="ml-note orange"><b>الصياغة الصحيحة:</b> «يقدّر النموذج احتمال التوقف بـ80%»، وليس «النموذج يعرف أن العميل سيتوقف».</div>'));
  insertAfter('كيف يعمل الانحدار تقنيًا؟', content('مثال انحدار: تقدير مدة الإصلاح', '<p class="ml-lead">نريد تقدير عدد ساعات إصلاح عطل جديد. لأن الناتج رقم له مقدار، فهذه مسألة انحدار (Regression).</p><table class="ml-table"><tr><th>الخاصية</th><th>قيمة العطل الجديد</th><th>تأثير محتمل</th></tr><tr><td>مستوى الضرر</td><td>4 من 5</td><td>يرفع مدة الإصلاح</td></tr><tr><td>عمر الجهاز</td><td>6 سنوات</td><td>قد يرفع المدة</td></tr><tr><td>خبرة الفني</td><td>8 سنوات</td><td>قد تخفض المدة</td></tr><tr><td>توفر القطعة</td><td>متوفرة</td><td>قد يخفض التأخير</td></tr></table><div class="ml-note dark">يدخل النموذج الخصائص ويخرج قيمة واحدة، مثل: المدة المتوقعة = 6.5 ساعات.</div>'));
  insertAfter('مثال انحدار: تقدير مدة الإصلاح', content('كيف يحسب الانحدار القيمة؟', '<p class="ml-lead">في نموذج خطي مبسط، يضرب كل خاصية في وزنها ثم يجمع النتائج مع قيمة ثابتة.</p><div class="ml-grid"><div class="ml-card"><h3>الفكرة الحسابية</h3><p>المدة = قيمة ثابتة + أثر الضرر + أثر العمر + أثر الخبرة + أثر توفر القطعة.</p><p>الوزن الموجب يزيد التوقع، والوزن السالب يخفضه.</p></div><div class="ml-card orange"><h3>مثال مبسط</h3><p>قيمة ثابتة 2 ساعة<br>+ أثر الضرر 4 ساعات<br>+ أثر العمر 1.5 ساعة<br>− أثر الخبرة 1 ساعة</p><p><b>التوقع = 6.5 ساعات</b></p></div></div><div class="ml-note">كما في التصنيف، يتعلم النموذج الأوزان من البيانات. الفرق أن الناتج هنا يبقى رقمًا ولا يتحول إلى فئة.</div>'));
  insertAfter('كيف يحسب الانحدار القيمة؟', content('كيف يتعلم الانحدار من الخطأ؟', '<p class="ml-lead">يقارن النموذج القيمة المتوقعة بالقيمة الحقيقية. الفرق بينهما يسمى الباقي أو الخطأ (Residual).</p><table class="ml-table"><tr><th>الحالة</th><th>التوقع</th><th>الحقيقة</th><th>الباقي</th><th>التفسير</th></tr><tr><td>عطل أ</td><td>6.5</td><td>8</td><td>+1.5</td><td>النموذج قلّل المدة</td></tr><tr><td>عطل ب</td><td>5</td><td>4</td><td>−1</td><td>النموذج بالغ في المدة</td></tr></table>' + flow([['يتوقع قيمة','6.5'],['يقارن بالحقيقة','8'],['يقيس حجم الخطأ','1.5'],['يعدل الأوزان','خطأ أقل'],['يكرر','على أمثلة كثيرة']]) + '<div class="ml-note dark">لا نريد فقط أن تتوازن الأخطاء الموجبة والسالبة؛ نريد أن تكون أحجام الأخطاء صغيرة قدر الإمكان.</div>'));

  revise('ملخص اليوم الأول', 'بَنينا خريطة واضحة لتعلم الآلة (Machine Learning): كيف يتعلم النموذج، وما الفرق بين التعلم الخاضع وغير الخاضع للإشراف والتعلم المعزز، ومتى نستخدم التصنيف أو الانحدار أو التجميع.','المخرج: تستطيع تحديد نوع التعلم ونوع المسألة من وصف حالة عملية، وصياغة هدف واضح قبل اختيار البيانات أو الخوارزمية.','في اليوم الثاني ننتقل إلى بيانات منافذ: نفهمها، ننظفها، نمنع التسرب، ثم نجهزها لبناء أول نموذج تصنيف.');

  const dayOneDivider = slides.findIndex(slide => slide.includes('خريطة تعلم الآلة'));
  const dayTwoDivider = slides.findIndex(slide => slide.includes('من البيانات الخام إلى أول نموذج'));
  const movedToDayTwoTitles = [
    'جودة البيانات قبل كمية البيانات','ما هي بيانات منافذ؟','مجموعة بيانات منافذ','الصف والعمود داخل البيانات','الخصائص والهدف','لقطات فعلية من ملف منافذ','ما البيانات غير النظيفة في ملف منافذ؟','خريطة المعالجة المسبقة للبيانات','الخطوة 1: قراءة البيانات وفهم شكلها','الخطوة 1ب: فحص أنواع البيانات','الخطوة 1ج: تحويل التواريخ','الخطوة 1د: تنظيف النصوص وتوحيد الفئات','Lab 1: اكتشف بيانات منافذ','الخطوة 2: قياس القيم المفقودة','اختر قرار المعالجة','الخطوة 3: معالجة المفقود دون تغيير المعنى','الخطوة 4أ: فحص الصفوف المكررة','الخطوة 4ب: فحص نطاق القيم','الخطوة 5: هل القيمة المرتفعة خطأ؟','كيف نفحص القيمة المرتفعة؟','كيف نعالج القيم المتطرفة؟','مثال تطبيقي: تحديد حد أعلى','Lab 2: نظّف بيانات منافذ','الخطوة 6: استبعاد المعرّف وتسرب المستقبل','محكمة الخصائص','الحكم: أي الخصائص نستخدم؟','اكتشف العمود الآمن','الترميز: كيف يفهم النموذج الفئات؟','التحجيم: متى نغيّر مقياس الأرقام؟','قاعدة مهمة: نتعلم المعالجة من التدريب فقط','قائمة التحقق قبل التدريب','نشاط تنظيف بيانات منافذ','نموذج حل نشاط تنظيف البيانات','Lab 3: جهّز X وy بأمان','زمن التنبؤ','الخطوة 7: الترميز والتحجيم داخل مسار آمن'
  ];
  const dayOneOrder = [
    'كيف بدأ الذكاء الاصطناعي؟',
    'خريطة مجالات الذكاء الاصطناعي',
    'تحت أي مجال تندرج الحالة؟',
    'ما هو تعلم الآلة؟',
    'الخوارزمية أم النموذج؟',
    'متى نستخدم تعلم الآلة؟',
    'كيف يمكن للآلة أن تتعلم؟',
    'طرق تعلم الآلة الثلاث',
    'التعلم الخاضع للإشراف',
    'التدريب مقابل الاستدلال',
    'ما معنى التعميم؟',
    'كيف نعرف مبدئيًا أنه تعلم شيئًا مفيدًا؟',
    'أنواع التعلم الخاضع للإشراف',
    'أمثلة على التعلم الخاضع للإشراف',
    'حدّد نوع المسألة',
    'مثال محلول: تصنيف بلاغات الدعم',
    'كيف يعمل التصنيف تقنيًا؟',
    'من الخصائص إلى درجة',
    'كيف يتعلم النموذج الأوزان؟',
    'ما معنى الدرجة الخام؟',
    'من الدرجة إلى احتمال ثم فئة',
    'التوقع ليس هو القرار',
    'ما هو الحد الفاصل؟',
    'النتيجة تقدير وليست حقيقة مؤكدة',
    'كيف تتحسن القاعدة أثناء التدريب؟',
    'رتّبوا رحلة التعلم الخاضع للإشراف',
    'الحل: رحلة التعلم الخاضع للإشراف',
    'شاهد الحد الفاصل',
    'كيف تختلف نماذج التصنيف؟',
    'ماذا لو كانت لدينا أكثر من فئتين؟',
    'كيف يعمل الانحدار تقنيًا؟',
    'مثال انحدار: تقدير مدة الإصلاح',
    'كيف يحسب الانحدار القيمة؟',
    'كيف يتعلم الانحدار من الخطأ؟',
    'طبّقها: حدّد X وy ونوع المسألة',
    'حل مقترح: تقدير مدة الإصلاح',
    'التعلم غير الخاضع للإشراف',
    'أنواع التعلم غير الخاضع للإشراف',
    'أمثلة على التعلم غير الخاضع للإشراف',
    'ماذا يرى النموذج بلا هدف؟',
    'كيف يعمل التجميع تقنيًا؟',
    'ما معنى التشابه والمسافة؟',
    'كيف نختار خصائص التجميع؟',
    'لماذا نحتاج التحجيم قبل التجميع؟',
    'ماذا ندخل إلى K-Means وماذا تعيد؟',
    'كيف تعمل K-Means خطوة بخطوة؟',
    'K-Means: الجولة الأولى',
    'K-Means: نعيد التوزيع',
    'كيف نختار عدد المجموعات K؟',
    'كيف نفسر المجموعات؟',
    'كيف يعمل تقليل الأبعاد واكتشاف الشذوذ؟',
    'كيف يعمل تقليل الأبعاد تقنيًا؟',
    'كيف يعمل اكتشاف الشذوذ تقنيًا؟',
    'حدود التعلم غير الخاضع للإشراف',
    'جرّب التجميع يدويًا',
    'حل ممكن: شرائح العملاء',
    'التعلم المعزز',
    'كيف يتعلم الوكيل من المكافأة؟',
    'كيف يتعلم التعلم المعزز تقنيًا؟',
    'أمثلة على التعلم المعزز',
    'طبّقها: صمّم المكافأة',
    'حل مقترح: مصعد يتعلم',
    'مقارنة طرق التعلم الثلاث',
    'حدّد طريقة التعلم',
    'تحدي الحالات الأربع',
    'حل تحدي الحالات الأربع',
    'صياغة مسألة تعلم آلة جيدة',
    'أي صياغة أفضل؟',
    'نشاط 1: حوّل تحديًا إلى مسألة تعلم آلة',
    'ملخص اليوم الأول'
  ];
  if (dayOneDivider >= 0 && dayTwoDivider > dayOneDivider) {
    const dayOneBody = slides.slice(dayOneDivider + 1, dayTwoDivider);
    const movedToDayTwo = movedToDayTwoTitles.map(title => {
      const marker = '<div class="slide-title">' + title + '<';
      return dayOneBody.find(slide => slide.includes(marker));
    }).filter(Boolean);
    const orderedDayOne = dayOneOrder.map(title => {
      const marker = '<div class="slide-title">' + title + '<';
      return dayOneBody.find(slide => slide.includes(marker));
    }).filter(Boolean);
    slides.splice(dayOneDivider + 1, dayTwoDivider - dayOneDivider - 1, ...orderedDayOne);
    const updatedDayTwoDivider = slides.findIndex(slide => slide.includes('من البيانات الخام إلى أول نموذج'));
    if (updatedDayTwoDivider >= 0) slides.splice(updatedDayTwoDivider + 1, 0, ...movedToDayTwo);
    const pipelineStepIndex = slides.findIndex(slide => slide.includes('<div class="slide-title">الخطوة 7: الترميز والتحجيم داخل مسار آمن<'));
    const splitStepIndex = slides.findIndex(slide => slide.includes('<div class="slide-title">تقسيم البيانات: ثلاثة أدوار مختلفة<'));
    if (pipelineStepIndex >= 0 && splitStepIndex >= 0 && pipelineStepIndex < splitStepIndex) {
      const [pipelineStep] = slides.splice(pipelineStepIndex, 1);
      const updatedSplitStepIndex = slides.findIndex(slide => slide.includes('<div class="slide-title">تقسيم البيانات: ثلاثة أدوار مختلفة<'));
      slides.splice(updatedSplitStepIndex + 1, 0, pipelineStep);
    }
  }

  // مسار الأيام التطبيقية: نبني كل خطوة على سابقتها من دون إعادة شرح اليوم الأول.
  const insertSequenceAfter = (title, newSlides) => {
    let anchor = slides.findIndex(slide => slide.includes('<div class="slide-title">' + title + '<'));
    if (anchor < 0) return;
    slides.splice(anchor + 1, 0, ...newSlides);
  };

  insertSequenceAfter('تقسيم البيانات: ثلاثة أدوار مختلفة', [
    content('خريطة اليوم الثاني: من جدول إلى نموذج', `${flow([['1. نثبت السؤال','X وy وزمن التنبؤ'],['2. نقسم','تدريب واختبار'],['3. نجهز','Preprocessing من التدريب'],['4. نبني','Baseline ثم نموذج'],['5. نختبر','على بيانات لم يرها']])}<div class="ml-note dark">اليوم الأول شرح معنى التصنيف والانحدار. اليوم لا نعيد التعريف؛ سنحوّل الفكرة إلى خطوات قابلة للتنفيذ.</div>`),
    content('ما الذي يحدث عندما نقسم البيانات؟', `<p class="ml-lead">التقسيم لا يغيّر الصفوف ولا ينظفها؛ هو فقط يضع كل صف في دور واضح قبل أن يتعلم النموذج أي شيء.</p><table class="ml-table"><tr><th>قبل التقسيم</th><th>بعد التقسيم</th></tr><tr><td>10,000 عميل في جدول واحد</td><td>8,000 للتدريب + 2,000 للاختبار</td></tr><tr><td>النموذج لم يبدأ التعلم</td><td>يتعلم من التدريب فقط</td></tr><tr><td>لا نعرف أداءه على الجديد</td><td>الاختبار يحاكي عملاء جددًا</td></tr></table><div class="ml-note orange"><b>الفكرة:</b> التدريب كتاب المذاكرة، والاختبار اختبار نهائي مختوم.</div>`),
    content('أي تقسيم نختار؟', `<table class="ml-table"><tr><th>شكل البيانات</th><th>التقسيم المناسب</th><th>السبب</th></tr><tr><td>تصنيف بلا ترتيب زمني حاكم</td><td>تقسيم طبقي (Stratified Split)</td><td>يحافظ على نسبة 0 و1 تقريبًا</td></tr><tr><td>نتنبأ بالمستقبل من الماضي</td><td>تقسيم زمني (Temporal Split)</td><td>يمنع تدريب النموذج على المستقبل</td></tr><tr><td>عدة صفوف للشخص نفسه</td><td>تقسيم بالمجموعة (Group Split)</td><td>يمنع ظهور الشخص نفسه في الطرفين</td></tr></table><div class="ml-note dark">اختيار التقسيم يتبع طريقة استخدام النموذج في الواقع، وليس اختيارًا عشوائيًا دائمًا.</div>`),
    content('كود التقسيم الطبقي وقراءة الناتج', `<div class="ml-demo-stack"><div class="ml-demo-top"><pre class="ml-code"><code>from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(
    X, y,
    test_size=0.20,
    stratify=y,
    random_state=42
)

print(X_train.shape, X_test.shape)
print(y_train.mean().round(3), y_test.mean().round(3))</code></pre><div class="ml-card orange"><h3>ماذا نتوقع؟</h3><p>80% من الصفوف للتدريب و20% للاختبار. تقارب متوسط y في الجزأين يعني أن نسبة الفئة 1 بقيت متقاربة.</p></div></div><div class="ml-output-example"><div class="ml-output-label">مثال على الناتج (Output)</div><pre class="ml-code"><code><span class="result">(8000, 12) (2000, 12)
0.184 0.184</span></code></pre></div></div>`)
  ]);

  insertSequenceAfter('الخطوة 7: الترميز والتحجيم داخل مسار آمن', [
    content('ما المقصود بالمعالجة المسبقة؟', `<p class="ml-lead">المعالجة المسبقة (Preprocessing) هي تحويل البيانات الخام إلى شكل يستطيع النموذج التعلم منه، مع المحافظة على المعنى ومنع التسريب.</p>${flow([['مفقود','نعوض أو نحفظ مؤشرًا'],['نصوص','نحوّل الفئات إلى أعمدة رقمية'],['أرقام','نقرب المقاييس عند الحاجة'],['تواريخ','نستخرج خصائص متاحة'],['Pipeline','نكرر الخطوات بأمان']])}<div class="ml-note orange">التنظيف يصحح أو يفسر البيانات. أما Preprocessing فيجهزها رياضيًا للنموذج. قد تتداخل المرحلتان، لكنهما ليستا الشيء نفسه.</div>`),
    content('fit وtransform: أين موقعهما؟', `<p class="ml-lead">يأتيان <b>بعد تقسيم البيانات</b> وداخل المعالجة المسبقة (Preprocessing)، قبل أن يتدرب النموذج.</p>${flow([['1. نقسم','X_train وX_test'],['2. fit','يتعلم قواعد التجهيز من X_train'],['3. transform','يجهز X_train بالقواعد المتعلمة'],['4. تدريب النموذج','يتعلم من التدريب المجهز'],['5. transform للاختبار','نفس القواعد بلا تعلم جديد']])}<div class="ml-grid"><div class="ml-card"><h3>fit = تعلّم القاعدة</h3><p>يتعلم مثلًا: وسيط السلة = 70، ومتوسط العمر = 30، والفئات الموجودة هي الرياض وجدة.</p></div><div class="ml-card orange"><h3>transform = تطبيق القاعدة</h3><p>يستخدم القيم التي تعلمها لتجهيز الصفوف، من دون حساب وسيط أو متوسط جديد.</p></div></div><div class="ml-note dark">الفائدة: التدريب والاختبار يمران بطريقة التجهيز نفسها، بينما لا يحصل الاختبار على فرصة لتعليمنا أي قيمة.</div>`),
    content('أي Scaler نستخدم؟', `<table class="ml-table"><tr><th>الأداة</th><th>ماذا تفعل؟</th><th>متى تفيد؟</th></tr><tr><td>StandardScaler</td><td>يجعل المتوسط 0 والانحراف قريبًا من 1</td><td>اختيار افتراضي جيد للنماذج المعتمدة على الأوزان أو المسافات</td></tr><tr><td>MinMaxScaler</td><td>يحوّل القيم غالبًا إلى نطاق 0–1</td><td>عندما نحتاج نطاقًا محددًا</td></tr><tr><td>RobustScaler</td><td>يعتمد على الوسيط والمدى الربيعي</td><td>عند وجود قيم متطرفة صحيحة تؤثر في المتوسط</td></tr></table><div class="ml-note orange">الأشجار لا تحتاج التحجيم عادةً، لكن KNN وK-Means والانحدار اللوجستي تتأثر به.</div>`),
    content('سلّم ترميز الفئات', `<table class="ml-table"><tr><th>الحالة</th><th>الخيار الأول</th><th>تنبيه</th></tr><tr><td>عدد فئات قليل مثل المدينة</td><td>One-Hot Encoding</td><td>استخدم handle_unknown="ignore"</td></tr><tr><td>فئات مرتبة مثل منخفض/متوسط/مرتفع</td><td>Ordinal Encoding</td><td>يجب أن يكون الترتيب حقيقيًا</td></tr><tr><td>آلاف الفئات مثل رمز منتج</td><td>تجميع النادر أو تمثيل متخصص</td><td>One-Hot قد ينتج آلاف الأعمدة</td></tr></table><div class="ml-note dark">لا نعطي الرياض=1 وجدة=2 والدمام=3؛ لأن الأرقام ستوحي بترتيب غير موجود.</div>`),
    content('هندسة خصائص مفيدة من الوقت والسلوك', `<div class="ml-grid three"><div class="ml-card"><h3>التاريخ والوقت</h3><p>اليوم، الشهر، نهاية الأسبوع، والفصل. للخصائص الدورية يمكن استخدام sin/cos حتى يصبح ديسمبر قريبًا من يناير.</p></div><div class="ml-card orange"><h3>RFM</h3><p><b>Recency:</b> حداثة آخر طلب<br><b>Frequency:</b> تكرار الطلب<br><b>Monetary:</b> القيمة المالية</p></div><div class="ml-card navy"><h3>السياق المحلي</h3><p>علم رمضان أو موسم الحج أو الإجازة، بشرط أن يكون معروفًا وقت التنبؤ.</p></div></div><div class="ml-note">الخاصية الجيدة تلخص معلومة مفيدة ومتاحة، ولا تكشف المستقبل.</div>`),
    content('كيف يحمي Pipeline الرحلة كاملة؟', `${flow([['بيانات خام','X_train'],['ColumnTransformer','رقمي + فئوي'],['النموذج','fit على التدريب'],['حالة جديدة','نفس التحويلات'],['نتيجة','predict / predict_proba']])}<div class="ml-grid"><div class="ml-card"><h3>بدون Pipeline</h3><p>قد ننسى خطوة، أو نستخدم متوسطًا مختلفًا، أو نسرّب الاختبار.</p></div><div class="ml-card orange"><h3>مع Pipeline</h3><p>تنتقل البيانات عبر الوصفة نفسها في التدريب والتحقق والاستخدام.</p></div></div>`),
    content('نوعان من خطوط الأساس قبل التدريب', `<p class="ml-lead"><b>خط الأساس (Baseline)</b> هو توقع بسيط جدًا نستخدمه كمرجع. إذا لم يستطع النموذج التفوق عليه، فالنموذج لم يضف فائدة حقيقية.</p><div class="ml-grid"><div class="ml-card"><h3>مثال واضح</h3><p>لدينا 100 عميل: 82 استمروا و18 توقفوا.</p><p>طريقة بسيطة تقول: <b>«سأتوقع أن الجميع سيستمر»</b>.</p><p class="ml-quote">ستصيب 82 من 100<br>من دون تعلّم أي علاقة</p></div><div class="ml-card orange"><h3>لماذا نقارنه بالنموذج؟</h3><p>إذا حقق نموذج معقد نتيجة 80% فقط، فهو أسوأ من الطريقة البسيطة التي حققت 82%.</p><p>إذن وجود رقم يبدو مرتفعًا لا يكفي؛ يجب أن نعرف: هل هو أفضل من المرجع البسيط؟</p></div></div><table class="ml-table"><tr><th>نوع خط الأساس</th><th>مثال</th></tr><tr><td>وهمي (Dummy Baseline)</td><td>يتوقع الفئة الأكثر شيوعًا للجميع</td></tr><tr><td>قاعدة عمل (Heuristic Baseline)</td><td>إذا تجاوز الغياب 45 يومًا نتوقع التوقف</td></tr></table><div class="ml-note dark"><b>Baseline ليس النموذج النهائي.</b> هو نقطة البداية التي يجب أن يتفوق عليها النموذج بصورة عادلة وثابتة.</div>`)
  ]);

  insertSequenceAfter('التصنيف اللوجستي', [
    content('من الاحتمال إلى predict_proba', `<p class="ml-lead">الانحدار اللوجستي لا يبدأ بقرار «متوقف». يبدأ بدرجة، يحولها عبر دالة Sigmoid إلى احتمال، ثم نختار العتبة لاحقًا.</p><pre class="ml-code"><code>model.fit(X_train, y_train)
probability = model.predict_proba(X_test)[:, 1]

print(probability[:4])</code></pre><div class="ml-output-example"><div class="ml-output-label">مثال على الناتج (Output)</div><pre class="ml-code"><code><span class="result">[0.08 0.73 0.41 0.91]</span></code></pre></div><div class="ml-note orange">هذه قائمة ترتيب للمخاطر قبل أن تكون تصنيفات. نستطيع اختيار أعلى الحالات حسب القدرة التشغيلية بدل استخدام 0.5 تلقائيًا. ولا نفترض أن 0.73 يعني 73% حرفيًا قبل فحص معايرة الاحتمالات (Probability Calibration).</div>`),
    content('كيف يتعلم Logistic Regression؟', `<div class="ml-grid"><div class="ml-card"><h3>التوقع</h3><p>يعطي احتمالًا لكل مثال، مثل 0.20 أو 0.85.</p></div><div class="ml-card orange"><h3>الخسارة (Log-loss)</h3><p>تعاقب النموذج بقوة عندما يكون واثقًا من إجابة خاطئة.</p></div></div><table class="ml-table"><tr><th>الحقيقة</th><th>توقع النموذج</th><th>المعنى</th></tr><tr><td>1</td><td>0.90</td><td>خطأ صغير</td></tr><tr><td>1</td><td>0.55</td><td>خطأ متوسط</td></tr><tr><td>1</td><td>0.01</td><td>خطأ كبير جدًا</td></tr></table><div class="ml-note dark">أثناء التدريب يعدّل الأوزان لتقليل متوسط Log-loss، وليس ليحفظ عتبة 0.5.</div>`)
  ]);

  insertSequenceAfter('شجرة القرار وفرط التخصيص', [
    content('كيف تختار شجرة القرار سؤالها؟', `<p class="ml-lead">تفحص الشجرة أسئلة محتملة، ثم تختار السؤال الذي يجعل المجموعات الناتجة أنقى من قبل.</p><table class="ml-table"><tr><th>المقياس</th><th>الفكرة</th></tr><tr><td>Gini</td><td>يقيس مقدار اختلاط الفئات داخل العقدة</td></tr><tr><td>Entropy</td><td>يقيس عدم اليقين أو الفوضى داخل العقدة</td></tr></table><div class="ml-grid"><div class="ml-card"><h3>قبل السؤال</h3><p>العقدة تحتوي مستمرين ومتوقفين معًا.</p></div><div class="ml-card orange"><h3>بعد سؤال جيد</h3><p>فرع يغلب عليه المستمرون وفرع يغلب عليه المتوقفون.</p></div></div><div class="ml-note">لا نحتاج حساب الصيغ يدويًا؛ نحتاج فهم أن الشجرة تبحث عن فصل يقلل الاختلاط.</div>`),
    content('أين يقع KNN في الخريطة؟', `<p class="ml-lead">تعرفنا في اليوم الأول على فكرة التشابه. KNN يستخدمها للتنبؤ: ينظر إلى أقرب K حالات معروفة ثم يجمع أصواتها أو قيمها.</p><table class="ml-table"><tr><th>التصنيف</th><th>الانحدار</th></tr><tr><td>يختار الفئة الأكثر شيوعًا بين الجيران</td><td>يأخذ متوسط قيم الجيران غالبًا</td></tr></table><div class="ml-grid"><div class="ml-card"><h3>نقطة قوة</h3><p>فكرته سهلة ويلتقط أنماطًا محلية.</p></div><div class="ml-card orange"><h3>نقطة ضعف</h3><p>يتأثر بالمقياس والخصائص غير المهمة، وقد يبطؤ مع البيانات الكبيرة.</p></div></div><div class="ml-note dark">لا نعيد شرح المسافة؛ نربط مفهوم اليوم الأول باستخدام تنبؤي جديد.</div>`)
  ]);

  insertSequenceAfter('مختبر اليوم الثاني', [
    content('Lab 4: ابنِ نموذج تصنيف من البداية للنهاية', `<span class="ml-badge">تطبيق فردي · 45 دقيقة</span><div class="ml-grid"><div class="ml-card"><h3>المسار</h3><ol><li>قسّم X وy تقسيمًا طبقيًا.</li><li>ابنِ ColumnTransformer.</li><li>ابدأ بـDummyClassifier.</li><li>درّب Logistic Regression داخل Pipeline.</li><li>اعرض أول عشرة احتمالات.</li><li>قارن النتيجة بخط الأساس.</li></ol></div><div class="ml-card orange"><h3>التسليم</h3><ul><li>حجم التدريب والاختبار.</li><li>Pipeline يعمل بلا تسريب.</li><li>نتيجة Baseline وLogistic Regression.</li><li>شرح حالة احتمالها مرتفع.</li></ul><a class="ml-download" href="downloads/SDA-AIE-111_Day2_Lab4_Classification.ipynb" download>تنزيل Lab 4</a></div></div><div class="ml-note dark">لا تختَر العتبة المثالية الآن؛ اليوم نبني الرحلة. اختيار المقياس والعتبة يأتي غدًا.</div>`, 'ml-activity'),
    content('Lab 5: حوّل المسار نفسه إلى انحدار', `<span class="ml-badge">تطبيق فردي · 40 دقيقة</span><p class="ml-lead">سنغيّر الهدف والنموذج فقط؛ التقسيم وPipeline ومنع التسريب تبقى كما هي.</p><div class="ml-grid"><div class="ml-card"><h3>المطلوب</h3><ol><li>اختر هدفًا رقميًا مثل قيمة السلة.</li><li>ابدأ بـDummyRegressor يتوقع الوسيط.</li><li>درّب LinearRegression.</li><li>اطبع خمسة توقعات مع الحقيقة.</li><li>احسب الباقي لكل حالة.</li></ol></div><div class="ml-card orange"><h3>الفكرة التي نثبتها</h3><p>التصنيف والانحدار فرعان من التعلم الخاضع للإشراف. تتغير طبيعة y والنموذج والمقياس، لكن سير العمل العام واحد.</p><a class="ml-download" href="downloads/SDA-AIE-111_Day2_Lab5_Regression.ipynb" download>تنزيل Lab 5</a></div></div>`, 'ml-activity')
  ]);

  insertSequenceAfter('مقاييس الانحدار باختصار', [
    content('اقرأ رسم البواقي قبل الثقة بالانحدار', `<table class="ml-table"><tr><th>الشكل</th><th>ماذا نرى؟</th><th>ماذا يعني؟</th></tr><tr><td>سحابة عشوائية حول الصفر</td><td>لا نمط واضح</td><td>إشارة جيدة مبدئيًا</td></tr><tr><td>قمع يتسع</td><td>الأخطاء تكبر مع التوقع</td><td>التباين غير ثابت</td></tr><tr><td>منحنى</td><td>نمط مقوس</td><td>علاقة غير خطية لم يلتقطها النموذج</td></tr><tr><td>نقاط بعيدة</td><td>حالات منفردة شديدة الخطأ</td><td>تحتاج فحصًا ولا تُحذف تلقائيًا</td></tr></table><div class="ml-note orange">المقياس يلخص الحجم، ورسم البواقي يكشف شكل الخطأ.</div>`),
    content('Ridge وLasso: تنظيم الانحدار', `<p class="ml-lead">التنظيم (Regularization) يضيف عقوبة على الأوزان الكبيرة حتى لا يعتمد النموذج بشدة على تفاصيل التدريب.</p><table class="ml-table"><tr><th>النموذج</th><th>العقوبة</th><th>الأثر المبسط</th></tr><tr><td>Ridge</td><td>L2</td><td>يصغّر الأوزان مع الاحتفاظ بها غالبًا</td></tr><tr><td>Lasso</td><td>L1</td><td>قد يدفع بعض الأوزان إلى صفر</td></tr></table><div class="ml-note dark">نستخدمهما عندما يتذبذب الانحدار أو توجد خصائص كثيرة مترابطة، ونختار قوة التنظيم داخل التحقق المتقاطع.</div>`)
  ]);

  insertSequenceAfter('عائلتان مفيدتان للبدء', [
    content('ما الاسم الأكاديمي للنماذج الخطية؟', `<p class="ml-lead">تُسمّى النماذج الخطية (Linear Models) لأنها تبني التوقع من مجموع موزون للخصائص. كلمة «خطي» تصف طريقة تركيب الخصائص، لا شكل البيانات الخام فقط.</p><div class="ml-grid"><div class="ml-card"><h3>الانحدار الخطي<br>(Linear Regression)</h3><p>هدفه قيمة رقمية مستمرة، مثل مدة الإنجاز أو قيمة السلة.</p><pre class="ml-code"><code>ŷ = b₀ + b₁x₁ + b₂x₂ + ...</code></pre></div><div class="ml-card orange"><h3>الانحدار اللوجستي<br>(Logistic Regression)</h3><p>يحسب مجموعًا خطيًا ثم يحوله إلى احتمال باستخدام Sigmoid.</p><pre class="ml-code"><code>p(y=1) = sigmoid(b₀ + Σbᵢxᵢ)</code></pre></div></div><div class="ml-note dark"><b>المعامل (Coefficient):</b> وزن تتعلمه الخوارزمية. إشارته توضّح اتجاه العلاقة، وحجمه لا يُقارن مباشرةً بين خصائص بمقاييس مختلفة.</div>`),
    content('كيف ترسم النماذج الخطية قرارها؟', `<div class="ml-grid"><div class="ml-card"><h3>الانحدار الخطي (Linear Regression)</h3><svg viewBox="0 0 500 270" style="width:100%;height:245px;background:#fff;border-radius:14px" role="img" aria-label="نقاط بيانات وخط انحدار"><line x1="55" y1="220" x2="460" y2="220" stroke="#243b78" stroke-width="3"/><line x1="55" y1="220" x2="55" y2="28" stroke="#243b78" stroke-width="3"/><text x="260" y="258" text-anchor="middle" fill="#243b78" font-size="16">عدد البلاغات</text><text x="18" y="125" text-anchor="middle" fill="#243b78" font-size="16" transform="rotate(-90 18 125)">مدة الإصلاح</text><line x1="80" y1="202" x2="435" y2="54" stroke="#243b78" stroke-width="6" stroke-linecap="round"/><circle cx="95" cy="190" r="8" fill="#ef7d00"/><circle cx="145" cy="176" r="8" fill="#ef7d00"/><circle cx="195" cy="158" r="8" fill="#ef7d00"/><circle cx="245" cy="132" r="8" fill="#ef7d00"/><circle cx="305" cy="122" r="8" fill="#ef7d00"/><circle cx="355" cy="82" r="8" fill="#ef7d00"/><circle cx="415" cy="65" r="8" fill="#ef7d00"/></svg><p><b>كل نقطة</b> حالة حقيقية، والخط يعطي قيمة رقمية متوقعة قريبة من النقاط.</p></div><div class="ml-card orange"><h3>التصنيف اللوجستي (Logistic Regression)</h3><svg viewBox="0 0 500 270" style="width:100%;height:245px;background:#fff;border-radius:14px" role="img" aria-label="فئتان يفصل بينهما حد قرار"><line x1="55" y1="220" x2="460" y2="220" stroke="#243b78" stroke-width="3"/><line x1="55" y1="220" x2="55" y2="28" stroke="#243b78" stroke-width="3"/><text x="260" y="258" text-anchor="middle" fill="#243b78" font-size="16">أيام الغياب</text><text x="18" y="125" text-anchor="middle" fill="#243b78" font-size="16" transform="rotate(-90 18 125)">عدد الطلبات</text><line x1="90" y1="205" x2="420" y2="42" stroke="#243b78" stroke-width="6" stroke-dasharray="12 8"/><circle cx="105" cy="68" r="9" fill="#14a39f"/><circle cx="145" cy="92" r="9" fill="#14a39f"/><circle cx="180" cy="62" r="9" fill="#14a39f"/><circle cx="210" cy="112" r="9" fill="#14a39f"/><circle cx="300" cy="175" r="9" fill="#ef7d00"/><circle cx="345" cy="145" r="9" fill="#ef7d00"/><circle cx="380" cy="188" r="9" fill="#ef7d00"/><circle cx="420" cy="155" r="9" fill="#ef7d00"/><text x="130" y="35" fill="#087f7b" font-size="15" font-weight="700">● مستمر</text><text x="390" y="235" fill="#c45f00" font-size="15" font-weight="700">● متوقف</text><text x="330" y="78" fill="#243b78" font-size="15" font-weight="700">حد القرار</text></svg><p>الخط المتقطع هو <b>حد القرار</b>: على أحد جانبيه «مستمر»، وعلى الجانب الآخر «متوقف».</p></div></div><div class="ml-note dark">الفرق: الانحدار الخطي يتوقع <b>رقمًا</b>، أما التصنيف اللوجستي فيستخدم حدًا خطيًا للفصل بين <b>فئتين</b>.</div>`),
    content('ما الاسم الأكاديمي للنماذج الشجرية؟', `<p class="ml-lead">شجرة القرار (Decision Tree) — ويشيع بناؤها بأسلوب CART: Classification and Regression Trees — تقسّم فضاء الخصائص إلى مناطق عبر أسئلة شرطية متتابعة.</p><div class="ml-grid"><div class="ml-card"><h3>شجرة تصنيف<br>(Classification Tree)</h3><p>ورقتها تعطي فئة أو احتمال فئة.</p><p><b>مثال:</b> متوقف / مستمر.</p></div><div class="ml-card orange"><h3>شجرة انحدار<br>(Regression Tree)</h3><p>ورقتها تعطي قيمة رقمية، غالبًا متوسط الحالات داخل الورقة.</p><p><b>مثال:</b> مدة الإنجاز المتوقعة.</p></div></div>${flow([['الجذر','هل الغياب > 30؟'],['فرع نعم','هل الطلبات < 2؟'],['ورقة 1','احتمال توقف 82%'],['فرع لا','نشاط جيد'],['ورقة 2','احتمال توقف 14%']])}<div class="ml-note dark">لا تضرب الشجرة الخصائص في أوزان كما يفعل النموذج الخطي؛ إنها تبني مناطق قرار عبر الانقسامات.</div>`),
    content('خطي أم شجري؟ مقارنة أعمق', `<table class="ml-table"><tr><th>البعد</th><th>النموذج الخطي</th><th>النموذج الشجري</th></tr><tr><td>العلاقة</td><td>يفترض أثرًا جمعيًا وخطيًا غالبًا</td><td>يلتقط علاقات غير خطية وتفاعلات</td></tr><tr><td>التحجيم</td><td>مهم في Logistic وRidge وLasso</td><td>غير ضروري غالبًا</td></tr><tr><td>القيم المتطرفة</td><td>قد تؤثر في المعاملات</td><td>أقل حساسية لبعضها</td></tr><tr><td>التفسير</td><td>معاملات واتجاهات</td><td>قواعد وانقسامات</td></tr><tr><td>الخطر المعتاد</td><td>نقص التعلّم إن كانت العلاقة معقدة</td><td>فرط التعلّم إن تعمقت الشجرة</td></tr></table><div class="ml-note orange">ليست منافسة فيها فائز دائم؛ نبدأ بخط أساس خطي ثم نختبر هل التعقيد الشجري يضيف تحسنًا ثابتًا.</div>`)
  ]);

  insertSequenceAfter('Random Forest ببساطة', [
    content('Random Forest: الاسم الأكاديمي وآلية العمل', `<p class="ml-lead">الغابة العشوائية (Random Forest) هي أسلوب تجميعي من نوع التعبئة (Bootstrap Aggregating — Bagging) يجمع أشجار قرار كثيرة لتقليل التباين.</p>${flow([['Bootstrap 1','عينة ببدائل'],['شجرة 1','خصائص عشوائية'],['Bootstrap 2','عينة مختلفة'],['شجرة 2','خصائص مختلفة'],['تجميع','تصويت أو متوسط']])}<div class="ml-grid"><div class="ml-card"><h3>مصدر التنوع الأول</h3><p>كل شجرة تتدرب على عينة Bootstrap مختلفة من الصفوف.</p></div><div class="ml-card orange"><h3>مصدر التنوع الثاني</h3><p>كل انقسام يرى مجموعة عشوائية من الخصائص، فلا تتشابه الأشجار تمامًا.</p></div></div>`),
    content('صورة ذهنية: كيف تصوّت الغابة؟', `<p class="ml-lead">عميل جديد مرّ على خمس أشجار. كل شجرة تعطي رأيًا مستقلًا نسبيًا.</p><div class="ml-grid three"><div class="ml-card"><h3>🌳 شجرة 1</h3><p class="ml-quote">متوقف</p></div><div class="ml-card orange"><h3>🌳 شجرة 2</h3><p class="ml-quote">مستمر</p></div><div class="ml-card"><h3>🌳 شجرة 3</h3><p class="ml-quote">متوقف</p></div><div class="ml-card orange"><h3>🌳 شجرة 4</h3><p class="ml-quote">متوقف</p></div><div class="ml-card"><h3>🌳 شجرة 5</h3><p class="ml-quote">متوقف</p></div><div class="ml-card navy"><h3>النتيجة</h3><p class="ml-quote">4 من 5<br>متوقف</p></div></div><div class="ml-note dark">في التصنيف تجمع الأصوات أو الاحتمالات، وفي الانحدار يُؤخذ متوسط توقعات الأشجار.</div>`)
  ]);

  insertSequenceAfter('Gradient Boosting ببساطة', [
    content('Gradient Boosting: الاسم الأكاديمي وآلية العمل', `<p class="ml-lead">التعزيز المتدرج (Gradient Boosting) يبني نموذجًا جمعيًا (Additive Model): كل متعلم ضعيف جديد يضاف لتقليل الخسارة المتبقية.</p>${flow([['نموذج 1','توقع أولي'],['نحسب الخطأ','Residual / Gradient'],['شجرة 2','تتعلم اتجاه التصحيح'],['نضيفها ببطء','Learning Rate'],['نكرر','حتى يتوقف التحسن']])}<div class="ml-note orange">كلمة Gradient تعني أننا نتحرك في الاتجاه الذي يقلل دالة الخسارة، وليس مجرد تصحيح عشوائي للأخطاء.</div>`),
    content('صورة ذهنية: التصحيح على جولات', `<table class="ml-table"><tr><th>الحالة</th><th>الحقيقة</th><th>الجولة الأولى</th><th>الخطأ المتبقي</th><th>بعد التصحيح</th></tr><tr><td>عميل أ</td><td>1</td><td>0.40</td><td>النموذج قلّل الخطر</td><td>0.62</td></tr><tr><td>عميل ب</td><td>0</td><td>0.70</td><td>النموذج بالغ في الخطر</td><td>0.48</td></tr><tr><td>عميل ج</td><td>1</td><td>0.75</td><td>خطأ صغير</td><td>0.81</td></tr></table><div class="ml-grid"><div class="ml-card"><h3>Random Forest</h3><p>الأشجار مستقلة ومتوازية، ثم تُجمع في النهاية.</p></div><div class="ml-card orange"><h3>Gradient Boosting</h3><p>الأشجار متسلسلة؛ كل واحدة تعتمد على أخطاء ما قبلها.</p></div></div>`)
  ]);

  insertSequenceAfter('ما الذي يضيف XGBoost؟', [
    content('XGBoost: ما اسمه وما الذي يميّزه؟', `<p class="ml-lead">XGBoost اختصار لـ <b>Extreme Gradient Boosting</b>. ليس عائلة مختلفة عن Boosting؛ بل تنفيذ محسّن ومنظّم للتعزيز المتدرج.</p><div class="ml-grid three"><div class="ml-card"><h3>Regularization</h3><p>عقوبات على تعقيد الأشجار تقلل فرط التعلم.</p></div><div class="ml-card orange"><h3>Shrinkage</h3><p>معدل تعلم (Learning Rate) يضيف كل شجرة بخطوة صغيرة.</p></div><div class="ml-card navy"><h3>Subsampling</h3><p>استخدام نسب من الصفوف والخصائص لزيادة التنوع.</p></div><div class="ml-card orange"><h3>Missing Values</h3><p>يتعلم اتجاهًا افتراضيًا للقيم المفقودة أثناء الانقسام.</p></div><div class="ml-card"><h3>Efficiency</h3><p>مصمم للتدريب الفعّال والمتوازي على البيانات الجدولية.</p></div><div class="ml-card orange"><h3>Early Stopping</h3><p>يتوقف عند غياب التحسن على بيانات التحقق.</p></div></div>`),
    content('Random Forest وGradient Boosting وXGBoost', `<table class="ml-table"><tr><th>السؤال</th><th>Random Forest</th><th>Gradient Boosting</th><th>XGBoost</th></tr><tr><td>طريقة البناء</td><td>أشجار متوازية</td><td>أشجار متتابعة</td><td>تعزيز متدرج محسّن</td></tr><tr><td>الهدف المعتاد</td><td>خفض التباين</td><td>خفض التحيز</td><td>أداء قوي مع تنظيم</td></tr><tr><td>الحساسية للضبط</td><td>متوسطة</td><td>مرتفعة نسبيًا</td><td>مرتفعة لكثرة المعاملات</td></tr><tr><td>التدريب</td><td>أسهل في التوازي</td><td>تتابعي</td><td>محسّن وسريع نسبيًا</td></tr><tr><td>نبدأ به متى؟</td><td>خط أساس شجري قوي</td><td>عند الحاجة لتحسين تدريجي</td><td>بعد وجود Pipeline وتقييم صحيحين</td></tr></table><div class="ml-note dark">XGBoost ليس «أفضل دائمًا». إذا كان الفرق صغيرًا، قد يكون Logistic Regression أوRandom Forest أبسط وأجدى.</div>`)
  ]);

  insertSequenceAfter('مصفوفة الالتباس: أين يخطئ المصنّف؟', [
    content('مصفوفة الالتباس بمثال 100 عميل', `<p class="ml-lead">اعتبر أن «إيجابي» يعني: العميل سيتوقف خلال 30 يومًا. اختبرنا النموذج على 100 عميل.</p><table class="ml-table"><tr><th></th><th>توقع: سيتوقف</th><th>توقع: سيستمر</th><th>المجموع</th></tr><tr><td><b>الحقيقة: توقف</b></td><td style="background:#e4f5f1"><b>TP = 18</b></td><td style="background:#fff0df"><b>FN = 7</b></td><td>25</td></tr><tr><td><b>الحقيقة: استمر</b></td><td style="background:#fff0df"><b>FP = 12</b></td><td style="background:#e4f5f1"><b>TN = 63</b></td><td>75</td></tr><tr><td><b>المجموع</b></td><td>30</td><td>70</td><td>100</td></tr></table><div class="ml-note dark">الأخضر قرار صحيح، والبرتقالي خطأ. لكن نوعي الخطأ لا يملكان التكلفة نفسها بالضرورة.</div>`),
    content('TP وTN: متى يكون القرار صحيحًا؟', `<div class="ml-grid"><div class="ml-card"><h3>إيجابي صحيح<br>(True Positive — TP)</h3><p><b>النموذج:</b> سيتوقف.<br><b>الحقيقة:</b> توقف فعلًا.</p><p><b>مثال:</b> رشّحنا العميل للتواصل، وكان فعلًا معرضًا للتوقف.</p><p class="ml-quote">18 عميلًا</p></div><div class="ml-card orange"><h3>سلبي صحيح<br>(True Negative — TN)</h3><p><b>النموذج:</b> سيستمر.<br><b>الحقيقة:</b> استمر فعلًا.</p><p><b>مثال:</b> لم نصرف حافزًا على عميل غير محتاج.</p><p class="ml-quote">63 عميلًا</p></div></div><div class="ml-note">True تعني أن التوقع وافق الحقيقة، وليس أن الفئة نفسها إيجابية.</div>`),
    content('FP وFN: خطآن بتكلفتين مختلفتين', `<div class="ml-grid"><div class="ml-card orange"><h3>إيجابي كاذب<br>(False Positive — FP)</h3><p><b>النموذج:</b> سيتوقف.<br><b>الحقيقة:</b> استمر.</p><p><b>التكلفة:</b> عرض أو اتصال غير ضروري.</p><p class="ml-quote">12 إنذارًا زائدًا</p></div><div class="ml-card"><h3>سلبي كاذب<br>(False Negative — FN)</h3><p><b>النموذج:</b> سيستمر.<br><b>الحقيقة:</b> توقف.</p><p><b>التكلفة:</b> فقدنا فرصة التدخل قبل التوقف.</p><p class="ml-quote">7 حالات فاتتنا</p></div></div><div class="ml-note dark">إذا كان FN أغلى نرفع Recall غالبًا. وإذا كانت مراجعة FP مكلفة جدًا نهتم أكثر بـPrecision.</div>`),
    content('نحسب Precision وRecall من المثال', `<div class="ml-grid"><div class="ml-card"><h3>Precision</h3><pre class="ml-code"><code>TP / (TP + FP)
18 / (18 + 12) = 60%</code></pre><p>من 30 عميلًا تواصلنا معهم، كان 18 فقط سيتوقفون فعلًا.</p></div><div class="ml-card orange"><h3>Recall</h3><pre class="ml-code"><code>TP / (TP + FN)
18 / (18 + 7) = 72%</code></pre><p>من 25 عميلًا توقفوا فعلًا، اكتشفنا 18 وفاتتنا 7.</p></div></div><div class="ml-note">Precision ينظر إلى قائمة الإنذارات، وRecall ينظر إلى جميع الحالات الإيجابية الحقيقية.</div>`)
  ]);

  insertSequenceAfter('اقرأ رسم البواقي قبل الثقة بالانحدار', [
    content('MAE: متوسط الخطأ المطلق', `<p class="ml-lead"><b>Mean Absolute Error (MAE)</b> يحسب متوسط المسافة المطلقة بين الحقيقة والتوقع، بوحدة الهدف نفسها.</p><table class="ml-table"><tr><th>الحقيقة</th><th>التوقع</th><th>الخطأ</th><th>|الخطأ|</th></tr><tr><td>10</td><td>8</td><td>2</td><td>2</td></tr><tr><td>20</td><td>25</td><td>−5</td><td>5</td></tr><tr><td>30</td><td>29</td><td>1</td><td>1</td></tr></table><pre class="ml-code"><code>MAE = (2 + 5 + 1) ÷ 3 = 2.67</code></pre><div class="ml-note dark">إذا كان الهدف «ساعات»، نقول: يخطئ النموذج في المتوسط بنحو 2.67 ساعة. سهل الشرح ولا يضخّم الخطأ الكبير بالتربيع.</div>`),
    content('RMSE: الأخطاء الكبيرة تؤلم أكثر', `<p class="ml-lead"><b>Root Mean Squared Error (RMSE)</b> يربّع الأخطاء، يأخذ متوسطها، ثم يعيد الجذر حتى يرجع إلى وحدة الهدف.</p><table class="ml-table"><tr><th>الخطأ</th><th>مربع الخطأ</th></tr><tr><td>2</td><td>4</td></tr><tr><td>−5</td><td>25</td></tr><tr><td>1</td><td>1</td></tr></table><pre class="ml-code"><code>RMSE = √((4 + 25 + 1) ÷ 3) = √10 = 3.16</code></pre><div class="ml-grid"><div class="ml-card"><h3>لماذا أكبر من MAE؟</h3><p>الخطأ 5 أصبح 25 بعد التربيع، فأخذ وزنًا أكبر.</p></div><div class="ml-card orange"><h3>متى نستخدمه؟</h3><p>عندما تكون الأخطاء الكبيرة مؤذية جدًا ونريد معاقبتها بقوة.</p></div></div>`),
    content('R²: كم تحسنّا عن توقع المتوسط؟', `<p class="ml-lead"><b>Coefficient of Determination (R²)</b> يقارن أخطاء النموذج بخط أساس يتوقع متوسط y للجميع.</p><table class="ml-table"><tr><th>القيمة</th><th>التفسير المبدئي</th></tr><tr><td>R² = 1</td><td>توقعات مثالية على هذه البيانات</td></tr><tr><td>R² = 0</td><td>لم نتفوق على توقع المتوسط</td></tr><tr><td>R² = 0.65</td><td>فسّر النموذج 65% من التباين مقارنة بخط الأساس</td></tr><tr><td>R² &lt; 0</td><td>أسوأ من توقع المتوسط</td></tr></table><div class="ml-note orange">R² بلا وحدة، ولا يخبرنا هل الخطأ 2 ريال أو 200 ريال؛ لذلك نقرأه مع MAE أو RMSE.</div>`),
    content('نموذجان: لماذا نحتاج أكثر من مقياس؟', `<table class="ml-table"><tr><th>النموذج</th><th>MAE</th><th>RMSE</th><th>R²</th><th>القراءة</th></tr><tr><td>أ</td><td>2.8 ساعة</td><td>3.6 ساعة</td><td>0.71</td><td>أخطاء معتدلة ومستقرة</td></tr><tr><td>ب</td><td>2.5 ساعة</td><td>6.9 ساعة</td><td>0.55</td><td>أفضل عادةً، لكنه يرتكب أخطاء كبيرة نادرة</td></tr></table><div class="ml-note dark">إذا كان تجاوز كبير واحد خطيرًا، قد نفضل النموذج أ رغم أن MAE للنموذج ب أقل.</div>`)
  ]);

  insertSequenceAfter('F1 وPR-AUC', [
    content('ROC-AUC أم PR-AUC؟', `<table class="ml-table"><tr><th>المقياس</th><th>السؤال</th><th>متى يفيد؟</th></tr><tr><td>ROC-AUC</td><td>هل يرتب الإيجابيات أعلى من السلبيات عبر العتبات؟</td><td>للمقارنة العامة، خصوصًا عندما لا تكون الفئة شديدة الندرة</td></tr><tr><td>PR-AUC</td><td>ما جودة اكتشاف الفئة الإيجابية بين الإنذارات؟</td><td>عندما تكون الفئة الإيجابية نادرة ومهمة</td></tr></table><div class="ml-note orange">قد يبدو ROC-AUC جيدًا رغم ضعف اكتشاف الفئة النادرة؛ لذلك نقرأه مع PR-AUC ومصفوفة الالتباس.</div>`),
    content('ما معنى Recall@k؟', `<p class="ml-lead">إذا كان الفريق يستطيع مراجعة عدد محدود فقط، نرتب الحالات بالاحتمال ونقيس كم حالة إيجابية وجدنا داخل أعلى k حالة.</p><table class="ml-table"><tr><th>القدرة اليومية</th><th>الحالات الحقيقية المكتشفة</th><th>Recall@k</th></tr><tr><td>مراجعة أعلى 100 عميل</td><td>45 من أصل 60 متوقفًا</td><td>45 ÷ 60 = 75%</td></tr></table><div class="ml-note dark">هنا k يمثل ميزانية التشغيل، ولذلك يكون المقياس أقرب للقرار من عتبة ثابتة.</div>`)
  ]);

  insertSequenceAfter('التحقق المتقاطع: مقارنة أكثر ثباتًا', [
    content('التحقق يجب أن يشمل Pipeline كاملًا', `<pre class="ml-code"><code>from sklearn.model_selection import cross_validate, StratifiedKFold

cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
scores = cross_validate(
    pipeline, X_train, y_train,
    cv=cv,
    scoring="average_precision"
)

print(scores["test_score"].mean())
print(scores["test_score"].std())</code></pre><div class="ml-note orange">في كل طية يتعلم التعويض والترميز والتحجيم من جزء التدريب الخاص بتلك الطية؛ هكذا لا تتسرب معلومات التحقق.</div>`),
    content('منحنى التعلم: هل نحتاج بيانات أكثر؟', `<table class="ml-table"><tr><th>المشهد</th><th>التدريب</th><th>التحقق</th><th>الاستنتاج</th></tr><tr><td>المنحنيان ضعيفان ومتقاربان</td><td>ضعيف</td><td>ضعيف</td><td>النموذج أو الخصائص أبسط من المطلوب</td></tr><tr><td>التدريب قوي والتحقق أضعف</td><td>قوي</td><td>أضعف</td><td>فرط تعلم؛ قد تساعد بيانات أكثر أو تنظيم أقوى</td></tr><tr><td>يتقاربان عند مستوى جيد</td><td>جيد</td><td>جيد</td><td>التعميم مستقر مبدئيًا</td></tr></table><div class="ml-note">منحنى التعلم يعرض الأداء مع زيادة حجم التدريب؛ لا يفترض أن جمع بيانات أكثر يحل كل مشكلة.</div>`)
  ]);

  insertSequenceAfter('النماذج الشجرية المجمعة', [
    content('Bagging مقابل Boosting', `<div class="ml-grid"><div class="ml-card"><h3>Bagging</h3><p>يدرّب نماذج كثيرة بصورة متوازية على عينات مختلفة ثم يجمعها.</p><p><b>مثال:</b> Random Forest<br><b>الهدف الغالب:</b> خفض التباين (Variance).</p></div><div class="ml-card orange"><h3>Boosting</h3><p>يدرّب النماذج بالتتابع، وكل نموذج يركز على أخطاء السابق.</p><p><b>مثال:</b> XGBoost<br><b>الهدف الغالب:</b> خفض التحيز (Bias) مع ضبط التعقيد.</p></div></div>`),
    content('خريطة معاملات Random Forest وXGBoost', `<table class="ml-table"><tr><th>المعامل</th><th>في أي نموذج؟</th><th>إذا زاد غالبًا</th></tr><tr><td>n_estimators</td><td>كلاهما</td><td>أشجار أكثر ووقت أطول</td></tr><tr><td>max_depth</td><td>كلاهما</td><td>مرونة أعلى وخطر فرط تعلم أكبر</td></tr><tr><td>min_samples_leaf</td><td>Random Forest</td><td>أوراق أكبر ونموذج أبسط</td></tr><tr><td>learning_rate</td><td>XGBoost</td><td>تعلم أسرع وقد يحتاج أشجارًا أقل</td></tr><tr><td>subsample</td><td>XGBoost</td><td>نسبة أكبر من الصفوف لكل جولة</td></tr></table><div class="ml-note dark">لا نبحث في كل شيء؛ نضبط المعاملات التي تجيب عن مشكلة لاحظناها.</div>`),
    content('الإيقاف المبكر (Early Stopping)', `<p class="ml-lead">في Boosting نراقب أداء مجموعة تحقق أثناء إضافة الأشجار، ونتوقف عندما لا يتحسن الأداء لعدد محدد من الجولات.</p>${flow([['شجرة 50','يتحسن'],['شجرة 80','يتحسن'],['شجرة 110','أفضل نتيجة'],['جولات لاحقة','لا تحسن'],['نتوقف','نحتفظ بالأفضل']])}<div class="ml-note orange">الإيقاف المبكر يقلل الوقت وخطر فرط التعلم، لكنه يحتاج مجموعة تحقق لا تكون مجموعة الاختبار النهائية.</div>`)
  ]);

  insertSequenceAfter('أهمية الخصائص بحذر', [
    content('ثلاث طرق لفهم النموذج', `<table class="ml-table"><tr><th>الطريقة</th><th>ماذا تقول؟</th><th>القيد</th></tr><tr><td>Impurity Importance</td><td>كم استفادت الأشجار من الخاصية في الانقسامات</td><td>قد تتحيز للخصائص كثيرة القيم</td></tr><tr><td>Permutation Importance</td><td>كم ينخفض الأداء عند خلط الخاصية</td><td>الخصائص المترابطة قد تتقاسم الأهمية</td></tr><tr><td>PDP</td><td>كيف يتغير متوسط التوقع عند تغيير خاصية</td><td>لا يثبت السببية وقد يخفي اختلاف الأفراد</td></tr></table><div class="ml-note dark">التفسير يصف اعتماد النموذج، ولا يثبت أن الخاصية تسبب النتيجة.</div>`)
  ]);

  insertSequenceAfter('ضبط المعلمات', [
    content('GridSearchCV أم RandomizedSearchCV؟', `<table class="ml-table"><tr><th></th><th>Grid Search</th><th>Randomized Search</th></tr><tr><td>الطريقة</td><td>يجرب جميع التركيبات المحددة</td><td>يجرب عينة بعدد محاولات نحدده</td></tr><tr><td>مناسب عندما</td><td>الخيارات قليلة وصغيرة</td><td>المساحة كبيرة والميزانية محدودة</td></tr><tr><td>الخطر</td><td>انفجار عدد التجارب</td><td>قد لا يجرب تركيبة جيدة إذا كانت الميزانية صغيرة</td></tr></table><div class="ml-note orange">الميزانية = عدد التركيبات × عدد الطيات × زمن تدريب كل نموذج.</div>`),
    content('أربع بوابات قبل أي ضبط', `<div class="ml-grid"><div class="ml-card"><h3>1. خط أساس مفيد</h3><p>هل النموذج الحالي يتفوق أصلًا على Dummy وقاعدة العمل؟</p></div><div class="ml-card orange"><h3>2. Pipeline صحيح</h3><p>هل منعنا التسريب وطبقنا المعالجة داخل الطيات؟</p></div><div class="ml-card"><h3>3. مقياس مناسب</h3><p>هل يعكس المقياس تكلفة الخطأ والقرار؟</p></div><div class="ml-card orange"><h3>4. فائدة متوقعة</h3><p>هل التحسن المحتمل يستحق الزمن والتعقيد؟</p></div></div><div class="ml-note dark">إذا فشلت بوابة، أصلحها قبل تشغيل البحث.</div>`),
    content('لماذا قد تكون درجة الفائز متفائلة؟', `<p class="ml-lead">كلما جربنا نماذج ومعاملات أكثر، زادت فرصة أن يفوز أحدها جزئيًا بسبب حظ الطيات، لا لأنه أفضل دائمًا.</p>${flow([['نجرّب كثيرًا','تركيبات متعددة'],['نختار الأعلى','على CV'],['قد نستفيد من الحظ','انحياز تفاؤلي'],['نجمّد القرار','نموذج ومعالجة وعتبة'],['نفتح الاختبار مرة','تقدير نهائي']])}<div class="ml-note orange">الاختبار ليس جولة ضبط إضافية. إذا عدنا وعدّلنا بعد رؤيته، لم يعد اختبارًا نهائيًا.</div>`),
    content('البطل مقابل المنافس', `<table class="ml-table"><tr><th>السؤال</th><th>البطل الحالي</th><th>المنافس الجديد</th></tr><tr><td>الأداء</td><td>PR-AUC = 0.61</td><td>PR-AUC = 0.63</td></tr><tr><td>الاستقرار</td><td>تشتت منخفض</td><td>تشتت أعلى</td></tr><tr><td>التفسير والتشغيل</td><td>بسيط وسريع</td><td>أبطأ وأعقد</td></tr></table><div class="ml-note dark">لا نعتمد المنافس لأن رقمه أعلى فقط؛ نسأل هل فرق القيمة يبرر كلفة التعقيد والمراقبة.</div>`),
    content('Lab 6: قارن واضبط دون لمس الاختبار', `<span class="ml-badge">تطبيق مجموعات · 60 دقيقة</span><div class="ml-grid"><div class="ml-card"><h3>المطلوب</h3><ol><li>قارن Logistic وRandom Forest وXGBoost بالطيات نفسها.</li><li>سجل المتوسط ± الانحراف.</li><li>اضبط نموذجًا واحدًا فقط.</li><li>اختر عتبة أو Recall@k حسب السيناريو.</li><li>حلل شريحتين من الأخطاء.</li></ol></div><div class="ml-card orange"><h3>التسليم</h3><ul><li>جدول مقارنة عادل.</li><li>سبب اختيار المقياس.</li><li>النموذج البطل والمنافس.</li><li>قرار موثق قبل فتح الاختبار.</li></ul><a class="ml-download" href="downloads/SDA-AIE-111_Day3_Model_Selection.ipynb" download>تنزيل Lab اليوم الثالث</a></div></div>`, 'ml-activity')
  ]);

  const dayFourUnsupervisedSlides = [
    content('كيف نقيس نجاحًا بلا y؟', `<p class="ml-lead">لا توجد «إجابة صحيحة» للعناقيد، لذلك نصعد من فحص رياضي إلى اختبار فائدة حقيقية.</p>${flow([['1. صلاحية البيانات','مقاييس مناسبة بلا تسريب'],['2. تماسك داخلي','Silhouette ونحوها'],['3. ثبات','هل تتكرر النتيجة؟'],['4. تفسير','هل الفروق مفهومة؟'],['5. فائدة خارجية','هل تحسن قرارًا أو تجربة؟']])}<div class="ml-note dark">أعلى السلم هو الفائدة الخارجية، وليس أجمل رسم للعناقيد.</div>`),
    content('PCA كميزانية تباين', `<p class="ml-lead">PCA ينشئ محاور جديدة تلخص أكبر قدر من التباين. نختار عدد المكونات حسب التباين المفسَّر والحاجة العملية.</p><table class="ml-table"><tr><th>عدد المكونات</th><th>التباين المفسَّر التراكمي</th><th>القرار</th></tr><tr><td>2</td><td>58%</td><td>مناسب للرسم، لكنه يفقد معلومات كثيرة</td></tr><tr><td>5</td><td>82%</td><td>توازن محتمل</td></tr><tr><td>9</td><td>95%</td><td>احتفاظ أعلى مع تلخيص أقل</td></tr></table><div class="ml-note orange">نُجري Scaling قبل PCA لأن الأعمدة الكبيرة رقميًا قد تسيطر على المحاور.</div>`),
    content('Lab 7: K-Means وPCA على بيانات منافذ', `<span class="ml-badge">تطبيق مجموعات · 55 دقيقة</span><div class="ml-grid"><div class="ml-card"><h3>المسار</h3><ol><li>اختر خصائص سلوكية بلا y.</li><li>طبّق التحجيم.</li><li>جرّب قيمًا مختلفة لـK.</li><li>قارن Elbow وSilhouette.</li><li>لخّص كل عنقود وسمّه.</li><li>استخدم PCA للرسم فقط.</li></ol></div><div class="ml-card orange"><h3>التسليم</h3><ul><li>سبب اختيار K.</li><li>جدول خصائص العناقيد.</li><li>رسم PCA.</li><li>استخدام عملي مقترح وحدّ واحد.</li></ul><a class="ml-download" href="downloads/SDA-AIE-111_Day2_KMeans.ipynb" download>تنزيل Lab التجميع</a></div></div>`, 'ml-activity'),
    content('بطاقة النموذج: التسليم الذي يجمع الرحلة', `<table class="ml-table"><tr><th>القسم</th><th>ما نكتبه؟</th></tr><tr><td>الغرض</td><td>المستخدم والقرار والاستخدام غير المناسب</td></tr><tr><td>البيانات</td><td>الوحدة والفترة والخصائص والاستبعادات</td></tr><tr><td>المنهجية</td><td>التقسيم وPipeline وخط الأساس والنماذج</td></tr><tr><td>التقييم</td><td>المقياس والعتبة والنتائج والشرائح</td></tr><tr><td>الحدود</td><td>مواطن الفشل والمخاطر وخطة المراقبة</td></tr></table><div class="ml-note dark">بهذه البطاقة يستطيع شخص لم يحضر التدريب فهم ما بُني، ولماذا، ومتى لا يستخدمه.</div>`)
  ];
  const dayFourUnsupervisedIndex = slides.findIndex(slide => slide.includes('<div class="slide-title">من الخريطة إلى التطبيق: التعلم غير الخاضع للإشراف<'));
  if (dayFourUnsupervisedIndex >= 0) {
    slides.splice(dayFourUnsupervisedIndex + 1, 0, ...dayFourUnsupervisedSlides);
  }

  // بعد إضافة الشرح المتعمق نحذف الشرائح المختصرة التي أصبحت تكرر المعنى نفسه.
  const redundantExpandedTitles = [
    'النماذج الشجرية المجمعة',
    'مصفوفة الالتباس: أين يخطئ المصنّف؟',
    'مقاييس الانحدار باختصار',
    'Precision بالتفصيل',
    'Recall بالتفصيل',
    'Random Forest ببساطة',
    'Gradient Boosting ببساطة',
    'ما الذي يضيف XGBoost؟',
    'فرط التعلّم وقلة التعلّم'
  ];
  redundantExpandedTitles.forEach(title => {
    const marker = '<div class="slide-title">' + title + '<';
    let index = slides.findIndex(slide => slide.includes(marker));
    while (index >= 0) {
      slides.splice(index, 1);
      index = slides.findIndex(slide => slide.includes(marker));
    }
  });

  const removeSlideTitles = titles => titles.forEach(title => {
    const marker = '<div class="slide-title">' + title + '<';
    let index = slides.findIndex(slide => slide.includes(marker));
    while (index >= 0) {
      slides.splice(index, 1);
      index = slides.findIndex(slide => slide.includes(marker));
    }
  });

  // إزالة الملخصات التي بقيت تكرر شرحًا أو تطبيقًا أكثر اكتمالًا.
  removeSlideTitles([
    'نشاط تنظيف بيانات منافذ',
    'نموذج حل نشاط تنظيف البيانات',
    'خط الأساس قبل النموذج المتقدم',
    'التقسيم المتوازن',
    'مختبر اليوم الثاني',
    'التحقق المتقاطع عمليًا',
    'أهمية الخصائص بحذر',
    'بطاقة النموذج',
    'مختبر اليوم الثالث',
    'ضبط المعلمات دون لمس الاختبار',
    'عتبة القرار ليست ثابتة'
  ]);

  // ترتيب اليوم الثاني: الخطة أولًا، ثم الفهم والتنظيف، ثم التقسيم، ثم التحويلات المتعلمة والنماذج.
  const dayTwoStart = slides.findIndex(slide => slide.includes('<div class="div-title">من البيانات الخام إلى أول نموذج<'));
  const dayThreeStartForOrder = slides.findIndex(slide => slide.includes('<div class="div-title">التقييم العادل والنماذج المجمعة<'));
  const dayTwoOrder = [
    'جودة البيانات قبل كمية البيانات','ما هي بيانات منافذ؟','مجموعة بيانات منافذ','الصف والعمود داخل البيانات','الخصائص والهدف','زمن التنبؤ','لقطات فعلية من ملف منافذ','ما البيانات غير النظيفة في ملف منافذ؟','ما المقصود بالمعالجة المسبقة؟','خريطة المعالجة المسبقة للبيانات',
    'الخطوة 1: قراءة البيانات وفهم شكلها','الخطوة 1ب: فحص أنواع البيانات','الخطوة 1ج: تحويل التواريخ','الخطوة 1د: تنظيف النصوص وتوحيد الفئات','Lab 1: اكتشف بيانات منافذ','الخطوة 2: قياس القيم المفقودة','اختر قرار المعالجة','الخطوة 3: معالجة المفقود دون تغيير المعنى','الخطوة 4أ: فحص الصفوف المكررة','الخطوة 4ب: فحص نطاق القيم','الخطوة 5: هل القيمة المرتفعة خطأ؟','كيف نفحص القيمة المرتفعة؟','كيف نعالج القيم المتطرفة؟','مثال تطبيقي: تحديد حد أعلى','Lab 2: نظّف بيانات منافذ','الخطوة 6: استبعاد المعرّف وتسرب المستقبل','محكمة الخصائص','الحكم: أي الخصائص نستخدم؟','اكتشف العمود الآمن','قائمة التحقق قبل التدريب','نشاط تنظيف بيانات منافذ','نموذج حل نشاط تنظيف البيانات','Lab 3: جهّز X وy بأمان',
    'تقسيم البيانات: ثلاثة أدوار مختلفة','خريطة اليوم الثاني: من جدول إلى نموذج','ما الذي يحدث عندما نقسم البيانات؟','أي تقسيم نختار؟','كود التقسيم الطبقي وقراءة الناتج','تسريب البيانات: أداء رائع ووهمي','الترميز: كيف يفهم النموذج الفئات؟','سلّم ترميز الفئات','التحجيم: متى نغيّر مقياس الأرقام؟','أي Scaler نستخدم؟','هندسة خصائص مفيدة من الوقت والسلوك','قاعدة مهمة: نتعلم المعالجة من التدريب فقط','fit وtransform: أين موقعهما؟','كيف يحمي Pipeline الرحلة كاملة؟','الخطوة 7: الترميز والتحجيم داخل مسار آمن','نوعان من خطوط الأساس قبل التدريب',
    'التصنيف اللوجستي','من الاحتمال إلى predict_proba','كيف يتعلم Logistic Regression؟','شجرة القرار وفرط التخصيص','كيف تختار شجرة القرار سؤالها؟','أين يقع KNN في الخريطة؟','Lab 4: ابنِ نموذج تصنيف من البداية للنهاية','Lab 5: حوّل المسار نفسه إلى انحدار','ملخص اليوم الثاني'
  ];
  if (dayTwoStart >= 0 && dayThreeStartForOrder > dayTwoStart) {
    const body = slides.slice(dayTwoStart + 1, dayThreeStartForOrder);
    const ordered = dayTwoOrder.map(title => body.find(slide => slide.includes('<div class="slide-title">' + title + '<'))).filter(Boolean);
    slides.splice(dayTwoStart + 1, dayThreeStartForOrder - dayTwoStart - 1, ...ordered);
  }

  insertSequenceAfter('كيف نعالج القيم المتطرفة؟', [
    content('ما معنى أن التوزيع منحرف؟', `<p class="ml-lead">التوزيع (Distribution) يصف كيف تنتشر قيم العمود. عندما تتجمع القيم في جهة ويمتد عدد قليل منها بعيدًا في جهة أخرى نسميه توزيعًا منحرفًا (Skewed Distribution).</p><div class="ml-grid"><div class="ml-card"><h3>توزيع متماثل تقريبًا</h3><svg viewBox="0 0 520 250" role="img" aria-label="رسم توزيع متماثل على شكل جرس" style="width:100%;height:230px"><line x1="35" y1="215" x2="495" y2="215" stroke="#203b70" stroke-width="4"/><rect x="65" y="190" width="42" height="25" rx="5" fill="#87d5cf"/><rect x="115" y="160" width="42" height="55" rx="5" fill="#59c3ba"/><rect x="165" y="105" width="42" height="110" rx="5" fill="#23aa9f"/><rect x="215" y="45" width="42" height="170" rx="5" fill="#0b8e86"/><rect x="265" y="45" width="42" height="170" rx="5" fill="#0b8e86"/><rect x="315" y="105" width="42" height="110" rx="5" fill="#23aa9f"/><rect x="365" y="160" width="42" height="55" rx="5" fill="#59c3ba"/><rect x="415" y="190" width="42" height="25" rx="5" fill="#87d5cf"/><text x="260" y="240" text-anchor="middle" fill="#203b70" font-size="20">القيم موزعة حول المنتصف</text></svg><p>الجانبان متقاربان، لذلك يبدو الرسم مثل جرس متوازن.</p></div><div class="ml-card orange"><h3>توزيع منحرف إلى اليمين</h3><svg viewBox="0 0 520 250" role="img" aria-label="رسم توزيع منحرف إلى اليمين" style="width:100%;height:230px"><line x1="35" y1="215" x2="495" y2="215" stroke="#203b70" stroke-width="4"/><rect x="55" y="45" width="48" height="170" rx="5" fill="#ef7d00"/><rect x="111" y="75" width="48" height="140" rx="5" fill="#f29132"/><rect x="167" y="120" width="48" height="95" rx="5" fill="#f5a65c"/><rect x="223" y="155" width="48" height="60" rx="5" fill="#f7bc84"/><rect x="279" y="178" width="48" height="37" rx="5" fill="#f9cfaa"/><rect x="335" y="192" width="48" height="23" rx="5" fill="#fbe0c9"/><rect x="391" y="202" width="48" height="13" rx="5" fill="#fcebdd"/><path d="M430 78 C465 88 480 115 478 165" fill="none" stroke="#0a315c" stroke-width="4" marker-end="url(#arrowSkew)"/><defs><marker id="arrowSkew" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#0a315c"/></marker></defs><text x="420" y="60" text-anchor="middle" fill="#0a315c" font-size="20">الذيل الطويل</text><text x="260" y="240" text-anchor="middle" fill="#203b70" font-size="20">قيم قليلة تمتد نحو اليمين</text></svg><p>معظم القيم صغيرة أو متوسطة، وقيم قليلة كبيرة تصنع الذيل.</p></div></div><div class="ml-note dark">اتجاه الانحراف يُسمّى حسب اتجاه الذيل، لا حسب مكان معظم الأعمدة.</div>`),
    content('مثال السلة: لماذا الذيل إلى اليمين؟', `<p class="ml-lead">في متوسط قيمة السلة (avg_basket_sar)، قد تكون معظم السلال بين 40 و120 ريالًا، بينما توجد سلال قليلة بقيم 250 أو 535 ريالًا.</p><svg viewBox="0 0 1000 310" role="img" aria-label="توزيع قيم السلة مع ذيل طويل نحو اليمين" style="width:92%;height:300px;margin:auto"><line x1="55" y1="245" x2="950" y2="245" stroke="#18396f" stroke-width="4"/><line x1="55" y1="40" x2="55" y2="245" stroke="#18396f" stroke-width="4"/><rect x="80" y="65" width="105" height="180" rx="9" fill="#0e9f96"/><rect x="200" y="92" width="105" height="153" rx="9" fill="#20b2a7"/><rect x="320" y="142" width="105" height="103" rx="9" fill="#64c9c1"/><rect x="440" y="185" width="105" height="60" rx="9" fill="#f08a29"/><rect x="560" y="210" width="105" height="35" rx="9" fill="#f5aa68"/><rect x="680" y="225" width="105" height="20" rx="9" fill="#f8c79b"/><rect x="800" y="234" width="105" height="11" rx="6" fill="#fbe1c8"/><text x="132" y="280" text-anchor="middle" font-size="20" fill="#203b70">40–80</text><text x="252" y="280" text-anchor="middle" font-size="20" fill="#203b70">80–120</text><text x="372" y="280" text-anchor="middle" font-size="20" fill="#203b70">120–180</text><text x="492" y="280" text-anchor="middle" font-size="20" fill="#203b70">180–250</text><text x="612" y="280" text-anchor="middle" font-size="20" fill="#203b70">250–350</text><text x="732" y="280" text-anchor="middle" font-size="20" fill="#203b70">350–450</text><text x="852" y="280" text-anchor="middle" font-size="20" fill="#203b70">450–550</text><text x="30" y="145" text-anchor="middle" font-size="20" fill="#203b70" transform="rotate(-90 30 145)">عدد العملاء</text></svg><div class="ml-grid"><div class="ml-card"><h3>اليسار</h3><p>أعمدة طويلة: عدد كبير من العملاء لديه سلة صغيرة أو متوسطة.</p></div><div class="ml-card orange"><h3>اليمين</h3><p>أعمدة قصيرة ممتدة: عدد قليل لديه سلة مرتفعة. هذه القيم ليست أخطاء تلقائيًا.</p></div></div>`),
    content('ماذا يفعل التحويل اللوغاريتمي؟', `<p class="ml-lead">التحويل اللوغاريتمي (Log Transformation) يغيّر المقياس: يضغط الفروق بين الأرقام الكبيرة أكثر من ضغطه للفروق بين الأرقام الصغيرة.</p><table class="ml-table"><tr><th>القيمة الأصلية x</th><th>بعد log1p(x)</th><th>ما الذي حدث؟</th></tr><tr><td>0</td><td>0.00</td><td>بقي الصفر صالحًا</td></tr><tr><td>10</td><td>2.40</td><td>انخفض المقياس</td></tr><tr><td>100</td><td>4.62</td><td>الفارق أصبح أصغر</td></tr><tr><td>500</td><td>6.22</td><td>القيمة الكبيرة لم تختفِ، لكنها انضغطت</td></tr></table><div class="ml-grid"><div class="ml-card"><h3>قبل التحويل</h3><p class="ml-quote" style="direction:ltr">0 ─ 10 ───────── 100 ───────────────── 500</p></div><div class="ml-card orange"><h3>بعد log1p</h3><p class="ml-quote" style="direction:ltr">0 ─── 2.4 ─── 4.6 ── 6.2</p></div></div><div class="ml-note dark"><b>لماذا log1p؟</b> لأنها تحسب log(1+x)، فتسمح بوجود الصفر. لكنها لا تصلح مباشرةً لقيم أقل من −1.</div>`),
    content('قبل التحويل وبعده: ماذا يتغير؟', `<div class="ml-grid"><div class="ml-card"><h3>قبل log1p</h3><svg viewBox="0 0 500 230" role="img" aria-label="توزيع منحرف قبل التحويل" style="width:100%;height:215px"><line x1="30" y1="195" x2="475" y2="195" stroke="#203b70" stroke-width="4"/><rect x="48" y="35" width="55" height="160" fill="#ef7d00"/><rect x="112" y="70" width="55" height="125" fill="#f18e2d"/><rect x="176" y="120" width="55" height="75" fill="#f4a458"/><rect x="240" y="153" width="55" height="42" fill="#f7bb82"/><rect x="304" y="174" width="55" height="21" fill="#fad2ae"/><rect x="368" y="184" width="55" height="11" fill="#fce7d5"/><text x="250" y="222" text-anchor="middle" font-size="19" fill="#203b70">الذيل طويل والقيم متباعدة</text></svg></div><div class="ml-card orange"><h3>بعد log1p</h3><svg viewBox="0 0 500 230" role="img" aria-label="توزيع أقل انحرافًا بعد التحويل" style="width:100%;height:215px"><line x1="30" y1="195" x2="475" y2="195" stroke="#203b70" stroke-width="4"/><rect x="48" y="165" width="55" height="30" fill="#8fd9d2"/><rect x="112" y="110" width="55" height="85" fill="#55c3b9"/><rect x="176" y="58" width="55" height="137" fill="#18a89e"/><rect x="240" y="45" width="55" height="150" fill="#0b8f87"/><rect x="304" y="90" width="55" height="105" fill="#37b7ad"/><rect x="368" y="145" width="55" height="50" fill="#79d0c8"/><text x="250" y="222" text-anchor="middle" font-size="19" fill="#203b70">الفروق مضغوطة والتوزيع أقل انحرافًا</text></svg></div></div><pre class="ml-code"><code>import numpy as np

df["avg_basket_log"] = np.log1p(df["avg_basket_sar"])</code></pre><div class="ml-note orange">لا نستبدل العمود تلقائيًا. نقارن النموذج بالخاصية الأصلية وبالخاصية المحوّلة باستخدام بيانات التحقق.</div>`),
    content('متى يفيد Log Transformation ومتى لا؟', `<table class="ml-table"><tr><th>الحالة</th><th>القرار</th><th>السبب</th></tr><tr><td>قيم موجبة وذيل أيمن طويل</td><td>نجرب log1p</td><td>قد يجعل العلاقة أسهل للنموذج ويقلل تأثير القيم الكبيرة</td></tr><tr><td>Linear / Logistic Regression أو نماذج تعتمد على المسافة</td><td>قد يفيد بوضوح</td><td>هذه النماذج تتأثر بالمقياس وشكل العلاقة</td></tr><tr><td>Decision Tree / Random Forest / XGBoost</td><td>ليس ضروريًا غالبًا</td><td>الانقسامات تعتمد على الترتيب والحدود أكثر من المسافة</td></tr><tr><td>القيمة المرتفعة خطأ إدخال</td><td>لا نستخدم log لإخفائها</td><td>نصحح الخطأ من المصدر أولًا</td></tr><tr><td>وجود قيم سالبة</td><td>لا نطبق log1p مباشرةً على ما دون −1</td><td>نحتاج معالجة أخرى وفهم معنى القيم</td></tr></table><div class="ml-note dark">النموذج لا يشترط دائمًا أن تكون الخصائص على شكل جرس طبيعي. هدف التحويل هو تحسين التمثيل والأداء، لا إجبار كل عمود على شكل محدد.</div>`)
  ]);

  insertSequenceAfter('أي تقسيم نختار؟', [
    content('اختر التقسيم بثلاثة أسئلة مرتبة', `<p class="ml-lead">لا نبدأ بالسؤال: «أي دالة أستخدم؟». نبدأ بالسؤال: كيف ستصل الحالات إلى النموذج بعد تشغيله؟</p>${flow([['1. هل الزمن مهم؟','هل سندرّب على الماضي ونستخدم النموذج على فترة لاحقة؟'],['نعم','استخدم تقسيمًا زمنيًا'],['لا: ما وحدة التعميم؟','هل نريد النجاح على عملاء أو أجهزة لم يرها النموذج؟'],['نعم','استخدم تقسيمًا بالمجموعة'],['لا','استخدم تقسيمًا عشوائيًا، وطبقيًا إذا كان الهدف فئات']])}<div class="ml-note dark"><b>ترتيب الأولوية:</b> الزمن أولًا، ثم وحدة التعميم، ثم المحافظة على نسب الفئات. لا نستخدم Stratified Split وحده إذا كان سيخلط المستقبل بالماضي أو لاختبار يفترض جهات جديدة.</div>`),
    content('الحالة 1: ملف العملاء الحالي', `<div class="ml-grid"><div class="ml-card"><h3>ماذا نعرف؟</h3><ul><li>كل صف يمثل عميلًا واحدًا عند تاريخ لقطة واحد.</li><li>الهدف churned_30d يساوي 0 أو 1.</li><li>لا يتكرر العميل داخل الجدول.</li></ul></div><div class="ml-card orange"><h3>الاختيار</h3><p class="ml-quote">Stratified Split</p><p>نريد أن تبقى نسبة المتوقفين قريبة في التدريب والاختبار.</p></div></div><table class="ml-table"><tr><th>الجزء</th><th>عدد العملاء</th><th>نسبة churned = 1</th></tr><tr><td>التدريب</td><td>38,400</td><td>18.4%</td></tr><tr><td>الاختبار</td><td>9,600</td><td>18.4%</td></tr></table><div class="ml-note">هذا هو الاختيار المستخدم في Lab التصنيف لأن الملف الحالي لقطة واحدة وصف واحد لكل عميل.</div>`),
    content('الحالة 2: طلبات مرتبة عبر الشهور', `<div class="ml-grid"><div class="ml-card"><h3>سيناريو الاستخدام</h3><p>لدينا طلبات من يناير إلى أكتوبر، وسنستخدم النموذج في نوفمبر لتوقع الطلبات الجديدة.</p></div><div class="ml-card orange"><h3>الاختيار</h3><p class="ml-quote">Temporal Split</p><p>التدريب من يناير إلى أغسطس، والتحقق في سبتمبر، والاختبار في أكتوبر.</p></div></div><div style="display:grid;grid-template-columns:6fr 1fr 1fr;gap:8px;direction:rtl;margin:25px auto;width:92%;text-align:center;font-weight:900"><div style="background:#0a315c;color:white;padding:25px;border-radius:12px">يناير ← أغسطس<br>تدريب</div><div style="background:#12a69d;color:white;padding:25px;border-radius:12px">سبتمبر<br>تحقق</div><div style="background:#ef7d00;color:white;padding:25px;border-radius:12px">أكتوبر<br>اختبار</div></div><div class="ml-note dark">التقسيم العشوائي هنا خاطئ؛ لأنه قد يضع طلبًا من أكتوبر في التدريب وطلبًا من مارس في الاختبار، فيصبح التقييم مختلفًا عن الاستخدام الحقيقي.</div>`),
    content('الحالة 3: نريد التعميم على عملاء جدد', `<div class="ml-grid"><div class="ml-card"><h3>المشكلة</h3><p>كل عميل لديه عدة طلبات، والهدف قياس الأداء على عميل لم يظهر أثناء التدريب. التقسيم العشوائي قد يوزع طلبات C001 على الطرفين.</p><p>حينها قد يتعرف النموذج إلى العميل نفسه بدل أن يعمم على عميل جديد.</p></div><div class="ml-card orange"><h3>الاختيار</h3><p class="ml-quote">Group Split</p><p>نستخدم customer_id كمجموعة؛ جميع صفوف العميل تذهب إلى جانب واحد فقط.</p></div></div><table class="ml-table"><tr><th>العميل</th><th>عدد الطلبات</th><th>مكان جميع صفوفه</th></tr><tr><td>C001</td><td>8</td><td>التدريب فقط</td></tr><tr><td>C002</td><td>5</td><td>الاختبار فقط</td></tr></table><div class="ml-note">إذا كان الاستخدام الحقيقي يتنبأ مستقبلًا للعملاء الحاليين أنفسهم، فقد يكون التقسيم الزمني أنسب من فصل العملاء بالكامل.</div>`),
    content('ماذا لو اجتمع الزمن وتكرار العميل؟', `<p class="ml-lead">أحيانًا تنطبق قاعدتان معًا: البيانات زمنية، وللعميل عدة صفوف. عندها لا نختار واحدة ونتجاهل الأخرى.</p><div class="ml-grid"><div class="ml-card"><h3>أولًا: احترم الزمن</h3><p>حدّد تاريخ الفصل حتى تكون بيانات التدريب أقدم من الاختبار.</p></div><div class="ml-card orange"><h3>ثانيًا: افحص المجموعات</h3><p>تأكد أن العميل أو الجهاز لا يعبر الحد بطريقة تكشف معلومات لا تتوفر عند الاستخدام.</p></div></div><div class="ml-note dark"><b>لا توجد دالة واحدة تناسب كل حالة.</b> قد نحتاج تقسيمًا مخصصًا زمنيًا حسب العميل. المعيار النهائي: هل يحاكي الاختبار حالات الاستخدام الحقيقية من دون تسريب؟</div><div class="ml-note orange"><b>قاعدة الحفظ:</b> مستقبل؟ Temporal. جهة تتكرر؟ Group. تصنيف عادي بلا القيدين؟ Stratified. لا زمن ولا مجموعات ولا فئات؟ Random Split.</div>`)
  ]);

  insertSequenceAfter('كود التقسيم الطبقي وقراءة الناتج', [
    content('كيف نقرأ ناتج التقسيم؟', `<p class="ml-lead">لنفترض أن لدينا 10,000 عميل. منهم 1,840 عميلًا قيمتهم <b>y = 1</b>، أي توقفوا، والبقية قيمتهم <b>y = 0</b>.</p><div class="ml-grid"><div class="ml-card"><h3>قبل التقسيم</h3><table class="ml-table"><tr><th>الفئة</th><th>العدد</th><th>النسبة</th></tr><tr><td>1 = متوقف</td><td>1,840</td><td>18.4%</td></tr><tr><td>0 = مستمر</td><td>8,160</td><td>81.6%</td></tr></table></div><div class="ml-card orange"><h3>ماذا تعني 0.184؟</h3><pre class="ml-code"><code>1,840 ÷ 10,000 = 0.184
0.184 × 100 = 18.4%</code></pre><p>إذن <b>0.184</b> طريقة عشرية لكتابة النسبة <b>18.4%</b>.</p></div></div><table class="ml-table"><tr><th>الجزء</th><th>الحجم</th><th>عدد الفئة 1 تقريبًا</th><th>نسبتها</th></tr><tr><td>التدريب</td><td>8,000 صف</td><td>1,472 متوقفًا</td><td>1,472 ÷ 8,000 = 18.4%</td></tr><tr><td>الاختبار</td><td>2,000 صف</td><td>368 متوقفًا</td><td>368 ÷ 2,000 = 18.4%</td></tr></table><div class="ml-note dark">هذا معنى ظهور <b>0.184 ثم 0.184</b>: نسبة المتوقفين متساوية تقريبًا في التدريب والاختبار. الرقم لا يمثل دقة النموذج؛ لم ندرّب نموذجًا بعد.</div>`)
  ]);

  insertSequenceAfter('fit وtransform: أين موقعهما؟', [
    content('مثال: تعويض قيمة مفقودة دون تسريب', `<p class="ml-lead">لدينا عمود قيمة السلة، وفي الاختبار قيمة مفقودة. من أين نأخذ قيمة التعويض؟</p><div class="ml-grid"><div class="ml-card"><h3>بيانات التدريب X_train</h3><pre class="ml-code"><code>50, 70, 90</code></pre><p><b>fit</b> يحسب وسيط التدريب:</p><pre class="ml-code"><code>median = 70</code></pre></div><div class="ml-card orange"><h3>بيانات الاختبار X_test</h3><pre class="ml-code"><code>NaN, 110</code></pre><p><b>transform</b> يستخدم 70 الذي تعلمه من التدريب:</p><pre class="ml-code"><code>70, 110</code></pre></div></div><div class="ml-note dark">لا نحسب وسيطًا جديدًا من الاختبار. الاختبار يمثل بيانات مستقبلية؛ نجهزه بالقواعد التي أصبحت لدينا وقت التدريب.</div>`),
    content('ماذا يعني fit_transform؟', `<div class="ml-grid"><div class="ml-card"><h3>على التدريب</h3><pre class="ml-code"><code>preprocessor.fit_transform(X_train)</code></pre><p>ينفذ خطوتين معًا:</p><ol><li>يتعلم الوسيط والفئات والمقياس.</li><li>يطبقها على X_train.</li></ol></div><div class="ml-card orange"><h3>على الاختبار</h3><pre class="ml-code"><code>preprocessor.transform(X_test)</code></pre><p>ينفذ خطوة واحدة فقط:</p><ol><li>يستخدم ما تعلمه من التدريب.</li><li>لا يعيد حساب أي قيمة.</li></ol></div></div><div class="ml-note orange"><b>القاعدة العملية:</b> التدريب يأخذ <b>fit_transform</b>، والاختبار يأخذ <b>transform</b> فقط.</div>`),
    content('كيف ينفذ Pipeline ذلك تلقائيًا؟', `<p class="ml-lead">عند استخدام Pipeline لا نحتاج استدعاء fit_transform وtransform يدويًا في كل مرة.</p><div class="ml-grid"><div class="ml-card"><h3>أثناء التدريب</h3><pre class="ml-code"><code>pipeline.fit(X_train, y_train)</code></pre>${flow([['Preprocessing.fit','يتعلم من X_train'],['Preprocessing.transform','يجهز X_train'],['Model.fit','يتعلم من البيانات المجهزة']])}</div><div class="ml-card orange"><h3>أثناء الاختبار</h3><pre class="ml-code"><code>pipeline.predict(X_test)</code></pre>${flow([['Preprocessing.transform','نفس قواعد التدريب'],['Model.predict','ينتج التوقع']])}</div></div><div class="ml-note dark">هذه فائدته الأساسية: يحفظ الترتيب الصحيح ويمنعنا من تنفيذ fit على الاختبار بالخطأ.</div>`)
  ]);

  insertSequenceAfter('سلّم ترميز الفئات', [
    content('هل 300 فئة تعني 300 عمود؟', `<p class="ml-lead">نعم، ترميز One-Hot ينشئ عادةً عمودًا لكل فئة تعلّمها من التدريب. إذا كان عمود country يحتوي 300 فئة، فقد ينتج قرابة 300 عمود.</p><div class="ml-grid"><div class="ml-card"><h3>صف واحد قبل الترميز</h3><table class="ml-table"><tr><th>customer_id</th><th>country</th></tr><tr><td>C001</td><td>Saudi Arabia</td></tr></table></div><div class="ml-card orange"><h3>الصف نفسه بعد الترميز</h3><pre class="ml-code"><code>country_Saudi = 1
country_UAE   = 0
country_Egypt = 0
... 297 قيمة أخرى = 0</code></pre></div></div><div class="ml-note dark">هذا لا يعني أن الجدول يمتلئ فعليًا بملايين الأصفار في الذاكرة؛ OneHotEncoder يعيد عادةً مصفوفة متناثرة (Sparse Matrix) تخزن المواقع غير الصفرية بكفاءة.</div>`),
    content('هل 300 عمود مشكلة؟', `<table class="ml-table"><tr><th>الحالة</th><th>القرار المبدئي</th><th>لماذا؟</th></tr><tr><td>48,000 صف و300 دولة متكررة بما يكفي</td><td>نجرب One-Hot أولًا</td><td>300 عمود متناثر قد يكون حجمًا مقبولًا</td></tr><tr><td>300 فئة لكن معظمها يظهر مرة أو مرتين</td><td>نجمع الفئات النادرة</td><td>الأعمدة النادرة لا تعطي النموذج أمثلة كافية للتعلم</td></tr><tr><td>عشرات الآلاف من رموز المنتجات أو المستخدمين</td><td>لا نبدأ بـOne-Hot كامل</td><td>عدد الأعمدة والذاكرة والتعقيد قد تصبح كبيرة جدًا</td></tr><tr><td>العمود معرّف فريد مثل customer_id</td><td>نستبعده غالبًا</td><td>قد يدفع النموذج للحفظ بدل التعميم</td></tr></table><div class="ml-note orange">لا نحدد حدًا سحريًا لعدد الأعمدة. ننظر إلى عدد الصفوف، وتكرار كل فئة، والذاكرة، وأداء التحقق.</div>`),
    content('ماذا نفعل مع الفئات الكثيرة؟', `<table class="ml-table" style="font-size:.82em"><tr><th>الطريقة</th><th>الفكرة</th><th>مثال</th><th>التنبيه</th></tr><tr><td>تجميع النادر (Rare Grouping)</td><td>الفئات قليلة الظهور تصبح Other</td><td>دولة ظهرت 8 مرات فقط ← Other</td><td>خيار بسيط ومفهوم</td></tr><tr><td>تجميع معرفي</td><td>نجمع الفئات وفق معنى يخدم السؤال</td><td>السعودية والإمارات والكويت ← دول الخليج</td><td>يجب ألا نفقد فرقًا مهمًا للعمل</td></tr><tr><td>Frequency Encoding</td><td>نستبدل الفئة بنسبة تكرارها في التدريب</td><td>الرياض تمثل 40% من الصفوف ← 0.40</td><td>لا يعبّر مباشرةً عن علاقتها بالهدف</td></tr><tr><td>Target Encoding</td><td>نستبدل الفئة بإحصاء مرتبط بـ y</td><td>متوسط التوقف لمدينة جدة 22% ← 0.22</td><td>يُحسب داخل طيات التدريب وإلا يسبب تسريبًا</td></tr><tr><td>Feature Hashing</td><td>يوزع الفئات على عدد ثابت من الأعمدة</td><td>10,000 رمز منتج ← 128 عمودًا</td><td>قد تتصادم فئات مختلفة في العمود نفسه</td></tr></table><div class="ml-note dark">نبدأ بالأبسط: One-Hot أو تجميع النادر. ننتقل للطرق المتقدمة فقط إذا أثبت القياس أن عدد الفئات يسبب مشكلة.</div>`),
    content('مثال: اجمع الدول النادرة تلقائيًا', `<p class="ml-lead">يمكن أن نجعل OneHotEncoder يجمع الدول التي ظهرت أقل من 50 مرة داخل عمود واحد بدل إنشاء عمود مستقل لكل دولة نادرة.</p><pre class="ml-code"><code>from sklearn.preprocessing import OneHotEncoder

encoder = OneHotEncoder(
    handle_unknown="infrequent_if_exist",
    min_frequency=50
)</code></pre><table class="ml-table"><tr><th>الدولة في بيانات التدريب</th><th>عدد مرات الظهور</th><th>ما الذي يحدث؟</th></tr><tr><td>السعودية</td><td>1,200</td><td>عمود مستقل</td></tr><tr><td>الإمارات</td><td>340</td><td>عمود مستقل</td></tr><tr><td>عُمان</td><td>18</td><td>تدخل في عمود الفئات النادرة</td></tr><tr><td>البحرين</td><td>12</td><td>تدخل في العمود نفسه</td></tr></table><div class="ml-grid"><div class="ml-card"><h3>عند تدريب المسار</h3><p>يعدّ Encoder ظهور الدول في <b>بيانات التدريب فقط</b>، ثم يتعلم أن السعودية والإمارات متكررتان، وعُمان والبحرين نادرتان.</p></div><div class="ml-card orange"><h3>عند وصول بيانات جديدة</h3><p>يطبق التقسيم الذي تعلمه. وإذا ظهرت دولة جديدة لم يرها، يضعها بأمان ضمن الفئات غير المتكررة.</p></div></div>`)
  ]);

  // ترتيب اليوم الثالث: نفهم التقييم أولًا، ثم الانحدار، ثم الثبات، ثم النماذج المجمعة والضبط.
  const dayThreeStart = slides.findIndex(slide => slide.includes('<div class="div-title">التقييم العادل والنماذج المجمعة<'));
  const dayFourStartForOrder = slides.findIndex(slide => slide.includes('<div class="div-title">التعلم غير الخاضع للإشراف واختيار النموذج<'));
  const dayThreeOrder = [
    'خطة اليوم الثالث — 210 دقائق تعليمية','عائلتان مفيدتان للبدء','ما الاسم الأكاديمي للنماذج الخطية؟','كيف ترسم النماذج الخطية قرارها؟','ما الاسم الأكاديمي للنماذج الشجرية؟','خطي أم شجري؟ مقارنة أعمق',
    'مصفوفة الالتباس بمثال 100 عميل','TP وTN: متى يكون القرار صحيحًا؟','FP وFN: خطآن بتكلفتين مختلفتين','لماذا لا تكفي Accuracy؟','نحسب Precision وRecall من المثال','اختيار المقياس حسب تكلفة الخطأ','F1 وPR-AUC','ROC-AUC أم PR-AUC؟','العتبة قرار تشغيلي','ما معنى Recall@k؟','نشاط 2: اختر المقياس وفسّر قرارك',
    'اقرأ رسم البواقي قبل الثقة بالانحدار','MAE: متوسط الخطأ المطلق','RMSE: الأخطاء الكبيرة تؤلم أكثر','R²: كم تحسنّا عن توقع المتوسط؟','نموذجان: لماذا نحتاج أكثر من مقياس؟','Ridge وLasso: تنظيم الانحدار',
    'التحقق المتقاطع: مقارنة أكثر ثباتًا','التحقق يجب أن يشمل Pipeline كاملًا','مقارنة عادلة بين النماذج','منحنى التعلم: هل نحتاج بيانات أكثر؟',
    'Bagging مقابل Boosting','Random Forest: الاسم الأكاديمي وآلية العمل','صورة ذهنية: كيف تصوّت الغابة؟','Gradient Boosting: الاسم الأكاديمي وآلية العمل','صورة ذهنية: التصحيح على جولات','XGBoost: ما اسمه وما الذي يميّزه؟','Random Forest وGradient Boosting وXGBoost','خريطة معاملات Random Forest وXGBoost','الإيقاف المبكر (Early Stopping)','نقص التخصيص','فرط التخصيص','تحليل الأخطاء حسب الشرائح','ثلاث طرق لفهم النموذج','ضبط المعلمات','GridSearchCV أم RandomizedSearchCV؟','أربع بوابات قبل أي ضبط','لماذا قد تكون درجة الفائز متفائلة؟','البطل مقابل المنافس','Lab 6: قارن واضبط دون لمس الاختبار','ملخص اليوم الثالث'
  ];
  if (dayThreeStart >= 0 && dayFourStartForOrder > dayThreeStart) {
    const body = slides.slice(dayThreeStart + 1, dayFourStartForOrder);
    const ordered = dayThreeOrder.map(title => body.find(slide => slide.includes('<div class="slide-title">' + title + '<'))).filter(Boolean);
    slides.splice(dayThreeStart + 1, dayFourStartForOrder - dayThreeStart - 1, ...ordered);
  }

  // النصف الثاني من اليوم الرابع مشروع مكثف، لا خمس ساعات إضافية.
  const oldProjectPlan = slides.findIndex(slide => slide.includes('<div class="slide-title">خطة اليوم الرابع — 5 ساعات<'));
  if (oldProjectPlan >= 0) {
    slides[oldProjectPlan] = content('خطة النصف الثاني من اليوم الرابع — 105 دقائق', `<table class="ml-table"><tr><th>المدة</th><th>عمل الفرق</th><th>نقطة التحقق</th></tr><tr><td>20 دقيقة</td><td>اعتماد المشكلة والهدف والتقسيم</td><td>C1: السؤال والزمن والخصائص واضحة</td></tr><tr><td>30 دقيقة</td><td>تشغيل Pipeline وخط الأساس وأول نموذج</td><td>C2: المسار يعمل بلا تسريب</td></tr><tr><td>30 دقيقة</td><td>مقارنة نموذج ثانٍ وتحليل الأخطاء</td><td>C3: مقارنة بالمقياس نفسه</td></tr><tr><td>25 دقيقة</td><td>تحديث Model Card وخطة عمل اليوم التالي</td><td>C4: الملفات والمهام جاهزة</td></tr></table><div class="ml-note dark">المشروع لا يُشترط أن ينتهي هنا؛ النصف الثاني يثبت المسار ويوزع العمل المنظم قبل يوم العروض.</div>`);
  }

  // إيقاع التطبيق: شرح قصير، تشغيل موجّه، ثم مختبر متكامل في نهاية اليوم.
  const insertAfterDivider = (dividerTitle, newSlide) => {
    const index = slides.findIndex(slide => slide.includes('<div class="div-title">' + dividerTitle + '<'));
    if (index >= 0) slides.splice(index + 1, 0, newSlide);
  };

  insertAfterDivider('من البيانات الخام إلى أول نموذج', content('كيف سنطبّق في اليوم الثاني؟', `<p class="ml-lead">لن نستمع إلى الشرح حتى نهاية اليوم ثم نبدأ التطبيق. سنفتح ملفات الـLab على ثلاث محطات، وكل محطة تستخدم فقط ما شُرح قبلها.</p><table class="ml-table"><tr><th>المحطة</th><th>بعد أي مفاهيم؟</th><th>ما الذي يفعله الطالب؟</th><th>المدة</th></tr><tr><td>تشغيل موجّه 1</td><td>قراءة البيانات وفهم الصف والأعمدة والأنواع</td><td>يفتح Lab 1 ويشغّل الفحص ويشرح ناتجًا واحدًا</td><td>15 دقيقة</td></tr><tr><td>تشغيل موجّه 2</td><td>الفقد والتكرار والنطاق والقيم المتطرفة</td><td>ينفذ Lab 2 ويتخذ قرارات تنظيف مبررة</td><td>20 دقيقة</td></tr><tr><td>تشغيل موجّه 3</td><td>X وy والتقسيم وPreprocessing وPipeline</td><td>ينفذ Lab 3 ثم يبني المسار الأول</td><td>20 دقيقة</td></tr><tr><td>مختبر ختامي</td><td>جميع مفاهيم اليوم</td><td>يبني نموذج تصنيف كاملًا من الملف الخام إلى الاحتمالات</td><td>50 دقيقة</td></tr></table><div class="ml-note dark">القاعدة: لا يحتوي التطبيق على خطوة لم تُشرح بعد. الشرح يوضح الفكرة، والـLab يجعل الطالب ينفذها ويقرأ الناتج بنفسه.</div>`));

  insertAfterDivider('التقييم العادل والنماذج المجمعة', content('كيف سنطبّق في اليوم الثالث؟', `<p class="ml-lead">يستخدم الطلاب دفتر اليوم الثالث نفسه طوال اليوم. بعد كل كتلة شرح ينتقلون إلى محطة محددة، وفي النهاية ينجزون المقارنة الكاملة.</p><table class="ml-table"><tr><th>المحطة</th><th>المفاهيم السابقة لها</th><th>التطبيق</th><th>المدة</th></tr><tr><td>تشغيل موجّه 1</td><td>Confusion Matrix وPrecision وRecall والعتبة</td><td>يغيّر العتبة ويلاحظ تغيّر FP وFN</td><td>20 دقيقة</td></tr><tr><td>تشغيل موجّه 2</td><td>Cross-Validation وRandom Forest وBoosting</td><td>يشغّل المقارنة بالطيات نفسها ويقرأ المتوسط ± الانحراف</td><td>20 دقيقة</td></tr><tr><td>مختبر ختامي</td><td>التقييم والضبط وتحليل الأخطاء</td><td>يختار البطل والمنافس ويبرر القرار دون لمس الاختبار أثناء الضبط</td><td>50 دقيقة</td></tr></table><div class="ml-note orange">لا نعيد بناء Pipeline في الشرح؛ نستخدم مسار اليوم الثاني ونضيف فوقه التقييم والمقارنة والضبط.</div>`));

  insertSequenceAfter('نشاط 2: اختر المقياس وفسّر قرارك', [
    content('تشغيل موجّه: غيّر العتبة وشاهد أثر القرار', `<span class="ml-badge">تطبيق ثنائي · 20 دقيقة</span><p class="ml-lead">افتح دفتر اليوم الثالث، وشغّل جزء الاحتمالات ثلاث مرات بعتبات مختلفة: 0.30 ثم 0.50 ثم 0.70.</p><table class="ml-table"><tr><th>ما الذي تسجله؟</th><th>السؤال الذي تجيب عنه</th></tr><tr><td>TP وFP وFN وTN لكل عتبة</td><td>أي نوع من الأخطاء زاد وأيها انخفض؟</td></tr><tr><td>Precision وRecall</td><td>ما المقايضة التي حدثت؟</td></tr><tr><td>عتبة مقترحة</td><td>أي عتبة تناسب قدرة الفريق وتكلفة الخطأ؟</td></tr></table><div class="ml-note dark">المطلوب تفسير التغيّر، وليس البحث عن رقم «مثالي» بلا سياق.</div>`, 'ml-activity')
  ]);

  insertSequenceAfter('منحنى التعلم: هل نحتاج بيانات أكثر؟', [
    content('تشغيل موجّه: قارن نموذجين بالطيات نفسها', `<span class="ml-badge">تطبيق مجموعات · 20 دقيقة</span><p class="ml-lead">شغّل Logistic Regression وRandom Forest باستخدام الطيات نفسها والمقياس نفسه.</p><div class="ml-grid"><div class="ml-card"><h3>نفّذ</h3><ol><li>شغّل Cross-Validation للنموذجين.</li><li>استخرج المتوسط والانحراف المعياري.</li><li>قارن زمن التدريب.</li></ol></div><div class="ml-card orange"><h3>فسّر</h3><ul><li>من الأعلى في المتوسط؟</li><li>من الأكثر ثباتًا؟</li><li>هل فرق الأداء يبرر فرق التعقيد؟</li></ul></div></div><div class="ml-note">هذه تجربة موجّهة قصيرة. قرار البطل النهائي يأتي في المختبر الختامي بعد إضافة الضبط وتحليل الأخطاء.</div>`, 'ml-activity')
  ]);

  insertAfterDivider('التعلم غير الخاضع للإشراف واختيار النموذج', content('كيف سنطبّق في اليوم الرابع؟', `<table class="ml-table"><tr><th>المحطة</th><th>المفاهيم</th><th>التطبيق</th><th>المدة</th></tr><tr><td>تشغيل موجّه</td><td>Scaling وK-Means واختيار K</td><td>يجرب الطلاب قيم K ويقرؤون Elbow وSilhouette</td><td>25 دقيقة</td></tr><tr><td>مختبر التجميع</td><td>التفسير وPCA والفائدة الخارجية</td><td>يبنون العناقيد، يفسرونها، ويسمونها بعد التدريب</td><td>45 دقيقة</td></tr><tr><td>المختبر المتكامل للمشروع</td><td>مفاهيم الأيام السابقة كلها</td><td>صياغة ← تقسيم ← Pipeline ← Baseline ← نموذج ← تقييم ← Model Card</td><td>النصف الثاني من اليوم</td></tr></table><div class="ml-note dark">بهذا لا يكون المشروع نشاطًا منفصلًا؛ بل هو المختبر الختامي الكبير الذي يعيد استخدام كل ما بناه الطالب خلال الدورة.</div>`));

  const finalDayTwoLab = slides.findIndex(slide => slide.includes('<div class="slide-title">Lab 4: ابنِ نموذج تصنيف من البداية للنهاية<'));
  if (finalDayTwoLab >= 0) {
    slides[finalDayTwoLab] = slides[finalDayTwoLab]
      .replace('Lab 4: ابنِ نموذج تصنيف من البداية للنهاية', 'المختبر الختامي لليوم الثاني: ابنِ نموذج تصنيف كاملًا')
      .replace('تطبيق فردي · 45 دقيقة', 'تطبيق فردي · 50 دقيقة');
  }

  const regressionLab = slides.findIndex(slide => slide.includes('<div class="slide-title">Lab 5: حوّل المسار نفسه إلى انحدار<'));
  if (regressionLab >= 0) {
    slides[regressionLab] = slides[regressionLab]
      .replace('Lab 5: حوّل المسار نفسه إلى انحدار', 'تحدٍ إضافي: حوّل المسار نفسه إلى انحدار')
      .replace('تطبيق فردي · 40 دقيقة', 'تحدٍ إثرائي · 25 دقيقة');
  }

  const finalDayThreeLab = slides.findIndex(slide => slide.includes('<div class="slide-title">Lab 6: قارن واضبط دون لمس الاختبار<'));
  if (finalDayThreeLab >= 0) {
    slides[finalDayThreeLab] = slides[finalDayThreeLab]
      .replace('Lab 6: قارن واضبط دون لمس الاختبار', 'المختبر الختامي لليوم الثالث: قارن واضبط دون لمس الاختبار')
      .replace('تطبيق مجموعات · 60 دقيقة', 'تطبيق مجموعات · 50 دقيقة');
  }

  // يبقى المختبر المتكامل آخر تطبيق في اليوم؛ التحدي الإثرائي يسبقه ولا يقطع الخاتمة.
  const dayTwoFinalIndex = slides.findIndex(slide => slide.includes('<div class="slide-title">المختبر الختامي لليوم الثاني:'));
  const dayTwoExtensionIndex = slides.findIndex(slide => slide.includes('<div class="slide-title">تحدٍ إضافي:'));
  if (dayTwoFinalIndex >= 0 && dayTwoExtensionIndex === dayTwoFinalIndex + 1) {
    const finalSlide = slides[dayTwoFinalIndex];
    slides[dayTwoFinalIndex] = slides[dayTwoExtensionIndex];
    slides[dayTwoExtensionIndex] = finalSlide;
  }

  // مراجعة الترابط النهائي: كل مفهوم يظهر عند الحاجة إليه، ولا يعاد افتتاحه في يوم لاحق.
  const moveTitlesAfter = (anchorTitle, titles) => {
    const selected = [];
    titles.forEach(title => {
      const index = slides.findIndex(slide => slide.includes('<div class="slide-title">' + title + '<'));
      if (index >= 0) selected.push(slides.splice(index, 1)[0]);
    });
    const anchor = slides.findIndex(slide => slide.includes('<div class="slide-title">' + anchorTitle + '<'));
    if (anchor >= 0 && selected.length) slides.splice(anchor + 1, 0, ...selected);
  };

  const moveTitlesBefore = (anchorTitle, titles) => {
    const selected = [];
    titles.forEach(title => {
      const index = slides.findIndex(slide => slide.includes('<div class="slide-title">' + title + '<'));
      if (index >= 0) selected.push(slides.splice(index, 1)[0]);
    });
    const anchor = slides.findIndex(slide => slide.includes('<div class="slide-title">' + anchorTitle + '<'));
    if (anchor >= 0 && selected.length) slides.splice(anchor, 0, ...selected);
  };

  // رحلة التعلم الخاضع تسبق التفاصيل التقنية للتصنيف، لا تأتي بعد الأوزان والخسارة.
  moveTitlesAfter('مثال محلول: تصنيف بلاغات الدعم', [
    'رتّبوا رحلة التعلم الخاضع للإشراف',
    'الحل: رحلة التعلم الخاضع للإشراف'
  ]);

  // خريطة اليوم تظهر قبل تنفيذ أول خطوة من الرحلة.
  moveTitlesAfter('كيف سنطبّق في اليوم الثاني؟', ['خريطة اليوم الثاني: من جدول إلى نموذج']);

  // التعمق الأكاديمي في العائلات الخطية والشجرية يسبق تدريب نماذج اليوم الثاني، ولا يعاد افتتاحه في اليوم الثالث.
  moveTitlesAfter('نوعان من خطوط الأساس قبل التدريب', [
    'عائلتان مفيدتان للبدء',
    'ما الاسم الأكاديمي للنماذج الخطية؟',
    'كيف ترسم النماذج الخطية قرارها؟',
    'ما الاسم الأكاديمي للنماذج الشجرية؟',
    'خطي أم شجري؟ مقارنة أعمق'
  ]);

  // نقص وفرط التعلّم يفسران سبب حاجتنا إلى التحقق قبل الانتقال إلى الضبط.
  moveTitlesBefore('التحقق المتقاطع: مقارنة أكثر ثباتًا', [
    'نقص التخصيص',
    'فرط التخصيص'
  ]);

  // شريحة الحماية العامة تكرر ما شرحته شريحة التنفيذ التلقائي للـPipeline.
  removeSlideTitles([
    'كيف يحمي Pipeline الرحلة كاملة؟',
    'هندسة خصائص مفيدة من الوقت والسلوك',
    'الخطوة 7: الترميز والتحجيم داخل مسار آمن',
    'خطة اليوم الثالث — 210 دقائق تعليمية'
  ]);

  insertSequenceAfter('كيف ينفذ Pipeline ذلك تلقائيًا؟', [
    content('من البيانات الجاهزة إلى التدريب', `<p class="ml-lead">مثالنا: نريد توقع هل سيتوقف العميل عن الطلب. بعد تقسيم البيانات أصبح لدينا جزء للتعلّم وجزء للاختبار.</p><table class="ml-table" style="font-size:.88em"><tr><th>الخطوة</th><th>ماذا تعني؟</th><th>مثال منافذ</th></tr><tr><td><b>1. X_train</b></td><td>خصائص العملاء التي سيتعلم منها النموذج</td><td>المدينة، عدد الطلبات، أيام الغياب، قيمة السلة</td></tr><tr><td><b>2. y_train</b></td><td>الإجابة الحقيقية لكل عميل في بيانات التدريب</td><td>1 = توقف، 0 = لم يتوقف</td></tr><tr><td><b>3. Baseline</b></td><td>توقع بسيط جدًا نستخدمه كمرجع</td><td>يتوقع «لم يتوقف» لجميع العملاء</td></tr><tr><td><b>4. model.fit(X_train, y_train)</b></td><td>ندرب النموذج ليتعلم العلاقة بين الخصائص والإجابة</td><td>يتعلم أن الغياب الطويل قد يرتبط بالتوقف</td></tr><tr><td><b>5. model.predict(X_test)</b></td><td>يستخدم ما تعلمه لإعطاء توقعات لعملاء لم يتدرب عليهم</td><td>[0، 1، 0، 1]</td></tr><tr><td><b>6. Evaluation</b></td><td>نقارن التوقعات بالإجابات الحقيقية y_test</td><td>كم حالة أصاب؟ وما الحالات التي أخطأ فيها؟</td></tr></table><div class="ml-note orange"><b>الخلاصة:</b> يتعلم النموذج من <b>X_train وy_train</b>، ثم نختبره باستخدام <b>X_test</b>، ونقارن توقعاته مع <b>y_test</b>.</div>`)
  ]);

  // نشرح Baseline قبل ظهوره داخل خطوات التدريب.
  moveTitlesAfter('كيف ينفذ Pipeline ذلك تلقائيًا؟', [
    'نوعان من خطوط الأساس قبل التدريب',
    'من البيانات الجاهزة إلى التدريب'
  ]);

  insertSequenceAfter('نوعان من خطوط الأساس قبل التدريب', [
    content('كيف نحسب خط الأساس؟', `<p class="ml-lead">نستخدم <b>DummyClassifier</b>: نموذج جاهز لا يبحث عن علاقات بين الخصائص، بل يطبق استراتيجية بسيطة مثل توقع الفئة الأكثر شيوعًا.</p><div class="ml-demo-stack"><div class="ml-demo-top"><pre class="ml-code"><code>from sklearn.dummy import DummyClassifier

baseline = DummyClassifier(
    strategy="most_frequent"
)

baseline.fit(X_train, y_train)
baseline_score = baseline.score(X_test, y_test)

print(baseline_score)</code></pre><div class="ml-card orange"><h3>ماذا حدث؟</h3><ol><li>نظر إلى <b>y_train</b>.</li><li>وجد أن الفئة 0 هي الأكثر.</li><li>توقع 0 لكل صف في X_test.</li><li>قارن توقعاته مع y_test.</li></ol></div></div><div class="ml-output-example"><div class="ml-output-label">مثال على الناتج (Output)</div><pre class="ml-code"><code><span class="result">0.816</span></code></pre></div></div><div class="ml-note dark"><b>0.816 = 81.6%</b>. هذا هو الرقم المرجعي. ندرب النموذج الحقيقي بعد ذلك ونقيّمه على البيانات نفسها وبالمقياس نفسه، ثم نسأل: هل تفوق على 81.6% فعلًا؟</div><div class="ml-note orange">هذه مقارنة أولية باستخدام Accuracy. في اليوم الثالث سنرى لماذا قد لا تكفي Accuracy عندما تكون إحدى الفئات قليلة.</div>`, 'ml-activity')
  ]);

  insertSequenceAfter('ما الاسم الأكاديمي للنماذج الشجرية؟', [
    content('كيف تتخذ شجرة القرار قرارها؟', `<p class="ml-lead">تبدأ الشجرة بسؤال واحد، ثم تنتقل مع كل إجابة إلى فرع جديد حتى تصل إلى ورقة تحتوي النتيجة النهائية.</p><svg viewBox="0 0 1000 500" style="width:100%;height:390px;background:#fff;border-radius:18px" role="img" aria-label="رسم شجرة قرار لتوقع توقف العميل"><defs><filter id="treeShadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="6" stdDeviation="7" flood-color="#223b78" flood-opacity=".14"/></filter></defs><path d="M500 120 L275 215" stroke="#243b78" stroke-width="6" fill="none"/><path d="M500 120 L725 215" stroke="#243b78" stroke-width="6" fill="none"/><path d="M725 300 L615 390" stroke="#243b78" stroke-width="6" fill="none"/><path d="M725 300 L835 390" stroke="#243b78" stroke-width="6" fill="none"/><text x="360" y="158" font-size="24" font-weight="800" fill="#0b8f88">لا</text><text x="640" y="158" font-size="24" font-weight="800" fill="#ef7d00">نعم</text><text x="648" y="350" font-size="22" font-weight="800" fill="#0b8f88">لا</text><text x="803" y="350" font-size="22" font-weight="800" fill="#ef7d00">نعم</text><rect x="340" y="35" width="320" height="90" rx="20" fill="#243b78" filter="url(#treeShadow)"/><text x="500" y="73" text-anchor="middle" fill="#fff" font-size="24" font-weight="900">هل أيام الغياب أكثر من 30؟</text><text x="500" y="103" text-anchor="middle" fill="#dfe8ff" font-size="18">الجذر: أول سؤال</text><rect x="125" y="215" width="300" height="105" rx="20" fill="#e7f7f5" stroke="#14a39f" stroke-width="4" filter="url(#treeShadow)"/><text x="275" y="255" text-anchor="middle" fill="#087f79" font-size="25" font-weight="900">مستمر</text><text x="275" y="288" text-anchor="middle" fill="#243b78" font-size="19">احتمال التوقف 14%</text><text x="275" y="311" text-anchor="middle" fill="#62708f" font-size="16">ورقة نهائية</text><rect x="575" y="215" width="300" height="90" rx="20" fill="#fff3e5" stroke="#ef7d00" stroke-width="4" filter="url(#treeShadow)"/><text x="725" y="253" text-anchor="middle" fill="#9c4e00" font-size="24" font-weight="900">هل عدد الطلبات أقل من 2؟</text><text x="725" y="282" text-anchor="middle" fill="#62708f" font-size="17">سؤال ثانٍ للحالات ذات الغياب الطويل</text><rect x="475" y="390" width="280" height="90" rx="20" fill="#e7f7f5" stroke="#14a39f" stroke-width="4" filter="url(#treeShadow)"/><text x="615" y="428" text-anchor="middle" fill="#087f79" font-size="24" font-weight="900">مستمر</text><text x="615" y="458" text-anchor="middle" fill="#243b78" font-size="18">احتمال التوقف 38%</text><rect x="765" y="390" width="200" height="90" rx="20" fill="#fff0e4" stroke="#ef7d00" stroke-width="4" filter="url(#treeShadow)"/><text x="865" y="428" text-anchor="middle" fill="#c45f00" font-size="24" font-weight="900">متوقف</text><text x="865" y="458" text-anchor="middle" fill="#243b78" font-size="18">احتمال التوقف 82%</text></svg><div class="ml-grid"><div class="ml-card"><h3>كيف نقرأ حالة؟</h3><p>عميل غاب 45 يومًا ولديه طلب واحد: <b>نعم ← نعم ← متوقف 82%</b>.</p></div><div class="ml-card orange"><h3>من أين جاءت الأسئلة؟</h3><p>أثناء التدريب جرّبت الشجرة انقسامات كثيرة واختارت الأسئلة التي تفصل الفئات بصورة أفضل.</p></div></div><div class="ml-note dark">كل صف يسلك مسارًا واحدًا من الجذر إلى ورقة. الورقة تعطي الفئة أو الاحتمال، وفي شجرة الانحدار تعطي قيمة رقمية.</div>`)
  ]);

  revise('كيف تتخذ شجرة القرار قرارها؟', `<p class="ml-lead">اتبع الإجابات من أعلى إلى أسفل. كل مسار ينتهي بنتيجة واحدة واضحة.</p><div style="max-width:1180px;margin:16px auto 0"><div style="max-width:500px;margin:0 auto;background:#243b78;color:#fff!important;border-radius:18px;padding:20px 28px;text-align:center"><b style="font-size:1.18em;color:#fff!important">هل أيام الغياب أكثر من 30 يومًا؟</b><div style="color:#fff!important;opacity:.82;margin-top:5px">الجذر — أول سؤال</div></div><div style="display:grid;grid-template-columns:1fr 1.35fr;gap:60px;margin-top:18px;align-items:start"><div><div style="text-align:center;color:#0b8f88!important;font-weight:900;font-size:1.12em">↓ لا</div><div style="background:#e8f7f5;border:3px solid #14a39f;border-radius:18px;padding:22px;text-align:center;color:#243b78!important"><h3 style="margin:0;color:#087f79!important">مستمر</h3><p style="margin:8px 0 0;color:#243b78!important">احتمال التوقف: <b style="color:#243b78!important">14%</b></p><small style="color:#53627e!important">ورقة نهائية</small></div></div><div><div style="text-align:center;color:#ef7d00!important;font-weight:900;font-size:1.12em">↓ نعم</div><div style="background:#fff3e5;border:3px solid #ef7d00;border-radius:18px;padding:20px;text-align:center;color:#243b78!important"><h3 style="margin:0;color:#9c4e00!important">هل عدد الطلبات أقل من 2؟</h3><small style="color:#53627e!important">السؤال الثاني</small></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:22px;margin-top:14px"><div><div style="text-align:center;color:#0b8f88!important;font-weight:900">↓ لا</div><div style="background:#e8f7f5;border:3px solid #14a39f;border-radius:16px;padding:16px;text-align:center;color:#243b78!important"><b style="color:#087f79!important;font-size:1.1em">مستمر</b><br>احتمال التوقف: 38%</div></div><div><div style="text-align:center;color:#ef7d00!important;font-weight:900">↓ نعم</div><div style="background:#fff0e4;border:3px solid #ef7d00;border-radius:16px;padding:16px;text-align:center;color:#243b78!important"><b style="color:#c45f00!important;font-size:1.1em">متوقف</b><br>احتمال التوقف: 82%</div></div></div></div></div></div><div class="ml-note dark"><b>مثال:</b> عميل غاب 45 يومًا ولديه طلب واحد → نعم في السؤال الأول → نعم في السؤال الثاني → <b>متوقف باحتمال 82%</b>.</div><div class="ml-note orange">الشجرة اختارت هذه الأسئلة أثناء التدريب لأنها فصلت العملاء المستمرين عن المتوقفين بصورة أفضل.</div>`);

  // نكمل كل عائلة قبل الانتقال إلى الأخرى، ثم نقارن بينهما.
  moveTitlesAfter('عائلتان مفيدتان للبدء', [
    'ما الاسم الأكاديمي للنماذج الخطية؟',
    'كيف ترسم النماذج الخطية قرارها؟',
    'التصنيف اللوجستي',
    'من الاحتمال إلى predict_proba',
    'كيف يتعلم Logistic Regression؟',
    'ما الاسم الأكاديمي للنماذج الشجرية؟',
    'كيف تتخذ شجرة القرار قرارها؟',
    'كيف تختار شجرة القرار سؤالها؟',
    'شجرة القرار وفرط التخصيص',
    'خطي أم شجري؟ مقارنة أعمق',
    'أين يقع KNN في الخريطة؟'
  ]);

  // ربط اليوم الأول بالثاني وتصحيح وعود التطبيق بحيث لا تسبق الشرح.
  revise('خريطة اليوم الثاني: من جدول إلى نموذج', `<div class="ml-grid"><div class="ml-card"><h3>ماذا نحمل من اليوم الأول؟</h3><ul><li>نعرف الفرق بين التصنيف والانحدار والتجميع.</li><li>نعرف أن <b>X</b> هي الخصائص و<b>y</b> هي الإجابة.</li><li>نعرف أن التدريب يختلف عن استخدام النموذج على حالة جديدة.</li></ul></div><div class="ml-card orange"><h3>ماذا سنفعل اليوم؟</h3><ol><li>نفهم جدول منافذ وننظفه.</li><li>نجهز X وy ونقسم البيانات.</li><li>نبني Preprocessing وPipeline.</li><li>نقارن Baseline بنموذجين للتصنيف.</li></ol></div></div>${flow([['سؤال واضح','من اليوم الأول'],['بيانات منافذ','نفهم وننظف'],['تدريب واختبار','نقسم بأمان'],['Pipeline','نجهز بالطريقة نفسها'],['أول نموذج','ننتج توقعات']])}<div class="ml-note dark">اليوم الأول أجاب: <b>ما نوع المسألة وكيف يتعلم النموذج؟</b> اليوم الثاني يجيب: <b>كيف ننفذ الرحلة فعليًا على البيانات؟</b></div>`);

  revise('كيف سنطبّق في اليوم الثاني؟', `<p class="ml-lead">افتح دفتر اليوم مرة واحدة واتركه مفتوحًا. بعد كل مجموعة مفاهيم نعود إلى المحطة التالية، ثم نختم اليوم ببناء نموذج كامل.</p><a class="ml-download" href="downloads/SDA-AIE-111_Day2_Full_Day_Lab.ipynb" download>تنزيل دفتر اليوم الثاني الكامل</a><table class="ml-table"><tr><th>المحطة</th><th>تأتي بعد</th><th>ما الذي ينفذه الطالب؟</th><th>المدة</th></tr><tr><td>المحطة 1</td><td>شكل الجدول والأنواع والتواريخ والنصوص</td><td>يقرأ الملف ويفهم الأعمدة ويكتشف المشكلات الأولية</td><td>15 دقيقة</td></tr><tr><td>المحطة 2</td><td>الفقد والتكرار والنطاق والقيم المتطرفة</td><td>ينظف نسخة من البيانات ويوثق قراراته</td><td>20 دقيقة</td></tr><tr><td>المحطة 3</td><td>الهدف والخصائص والتسرب</td><td>ينشئ X وy ويستبعد الأعمدة الممنوعة</td><td>15 دقيقة</td></tr><tr><td>المحطتان 4 و5</td><td>التقسيم وPipeline والنماذج</td><td>يقارن Baseline وLogistic Regression وDecision Tree</td><td>50 دقيقة</td></tr></table><div class="ml-note dark">هذا ملف واحد مستمر من بداية اليوم إلى نهايته. لا تشغّل محطة قبل شرحها، ولا تبدأ ملفًا جديدًا عند الانتقال بين الموضوعات.</div>`);

  revise('قاعدة مهمة: نتعلم المعالجة من التدريب فقط', '<p class="ml-lead">بعض خطوات المعالجة تحتاج أن تتعلم قيمة من البيانات. نحسب هذه القيم من مجموعة التدريب فقط حتى لا تتسرب معلومات الاختبار.</p><table class="ml-table"><tr><th>التحويل</th><th>ماذا يتعلم؟</th><th>التطبيق الصحيح</th></tr><tr><td>تعويض المفقود (Imputation)</td><td>الوسيط أو الفئة الأكثر شيوعًا</td><td>يتعلمها من التدريب ثم يطبقها على الاختبار</td></tr><tr><td>الترميز (Encoding)</td><td>الفئات الموجودة وأعمدتها</td><td>يتعلم الفئات من التدريب ويتعامل مع الجديدة بأمان</td></tr><tr><td>التحجيم (Scaling)</td><td>المتوسط والانحراف المعياري</td><td>يحسبهما من التدريب ثم يستخدمهما للاختبار</td></tr></table><div class="ml-note dark">بعد قليل سنحوّل هذه القاعدة إلى كود باستخدام <b>fit</b> و<b>transform</b> و<b>Pipeline</b>.</div>');

  revise('المختبر الختامي لليوم الثاني: ابنِ نموذج تصنيف كاملًا', `<span class="ml-badge">تطبيق فردي · 50 دقيقة</span><p class="ml-lead">طبّق رحلة اليوم كاملة على بيانات منافذ، ثم قارن ثلاثة مستويات من الحل.</p><div class="ml-grid"><div class="ml-card"><h3>المسار</h3><ol><li>أنشئ X وy واستبعد التسرب.</li><li>نفذ التقسيم الطبقي.</li><li>ابنِ ColumnTransformer وPipeline.</li><li>شغّل Dummy Baseline.</li><li>درّب Logistic Regression.</li><li>درّب Decision Tree محدودة العمق.</li></ol></div><div class="ml-card orange"><h3>التسليم</h3><ul><li>أحجام التدريب والاختبار.</li><li>نتيجة أولية للنماذج الثلاثة.</li><li>عشرة احتمالات من Logistic Regression.</li><li>جملة تشرح لماذا لا نختار الفائز النهائي اليوم.</li></ul><a class="ml-download" href="downloads/SDA-AIE-111_Day2_Lab4_Classification.ipynb" download>تنزيل المختبر الختامي</a></div></div><div class="ml-note dark">نستخدم نسبة النتائج الصحيحة كفحص أولي فقط. في اليوم الثالث نتعلم المقاييس المناسبة ونقارن النماذج بصورة عادلة.</div>`, 'ml-activity');

  const dayTwoDividerForReview = slides.findIndex(slide => slide.includes('<div class="div-title">من البيانات الخام إلى أول نموذج<'));
  if (dayTwoDividerForReview >= 0) {
    slides[dayTwoDividerForReview] = slides[dayTwoDividerForReview]
      .replace('فهم بيانات منافذ ومعالجتها بأمان، ثم تقسيمها وبناء نموذج تصنيف ونموذج انحدار', 'نحوّل مفاهيم اليوم الأول إلى رحلة عملية: نفهم البيانات ونجهزها ثم نبني أول نموذج تصنيف')
      .replace('تطبيق التصنيف والانحدار', 'Baseline وLogistic Regression وDecision Tree');
  }

  const unsupervisedTypesIndex = slides.findIndex(slide => slide.includes('<div class="slide-title">أنواع التعلم غير الخاضع للإشراف<'));
  if (unsupervisedTypesIndex >= 0) {
    slides[unsupervisedTypesIndex] = slides[unsupervisedTypesIndex]
      .replace('سنتعلم التجميع (Clustering) عمليًا في اليوم الثالث.', 'سنطبّق التجميع (Clustering) عمليًا في اليوم الثاني بعد تجهيز البيانات وتطبيق Scaling.');
  }

  insertAfterDivider('خريطة تعلم الآلة', content('دفتر اليوم الأول: افتحه الآن', `<p class="ml-lead">هذا دفتر مفاهيمي تفاعلي يبقى مفتوحًا طوال اليوم. لا يحتوي تدريب نماذج أو معالجة بيانات؛ بل يحول كل جزء من الشرح إلى قرار يكتبه الطالب ويبرره.</p><div class="ml-grid"><div class="ml-card"><h3>المحطات أثناء اليوم</h3><ol><li>هل نحتاج تعلم الآلة؟</li><li>تصنيف أم انحدار؟ وما X وy؟</li><li>التوقع مقابل القرار.</li><li>التجميع بلا هدف.</li><li>الحالة والفعل والمكافأة.</li></ol></div><div class="ml-card orange"><h3>التحدي الختامي</h3><p>صياغة مسألة تعلم آلة كاملة: المستخدم، القرار، الوحدة، الخصائص، الهدف، وطريقة استخدام النتيجة.</p><a class="ml-download" href="downloads/SDA-AIE-111_Day1_Interactive_Workbook.ipynb" download>تنزيل دفتر اليوم الأول</a></div></div><div class="ml-note dark">بعد كل قسم سيقول العرض: طبّق الآن. عندها انتقل إلى المحطة المطابقة داخل الدفتر، ثم عد إلى الشرائح.</div>`, 'ml-activity'));

  const continuousDayTwoLab = 'downloads/SDA-AIE-111_Day2_Full_Day_Lab.ipynb';
  const dayTwoLabLinks = [
    ['Lab 1: اكتشف بيانات منافذ', 'SDA-AIE-111_Day2_Lab1_Explore.ipynb', 'فتح دفتر اليوم الثاني — المحطة 1'],
    ['Lab 2: نظّف بيانات منافذ', 'SDA-AIE-111_Day2_Lab2_Clean.ipynb', 'فتح دفتر اليوم الثاني — المحطة 2'],
    ['Lab 3: جهّز X وy بأمان', 'SDA-AIE-111_Day2_Lab3_Prepare_X_y.ipynb', 'فتح دفتر اليوم الثاني — المحطة 3'],
    ['المختبر الختامي لليوم الثاني: ابنِ نموذج تصنيف كاملًا', 'SDA-AIE-111_Day2_Lab4_Classification.ipynb', 'فتح دفتر اليوم الثاني — المحطتان 4 و5']
  ];
  dayTwoLabLinks.forEach(([title, oldFile, label]) => {
    const index = slides.findIndex(slide => slide.includes('<div class="slide-title">' + title + '<'));
    if (index < 0) return;
    slides[index] = slides[index]
      .replace('downloads/' + oldFile, continuousDayTwoLab)
      .replace(/>تنزيل Lab [1234]</, '>' + label + '<')
      .replace('>تنزيل المختبر الختامي<', '>' + label + '<');
  });

  // رابط واحد في بداية اليوم، وما بعده محطات داخل الدفتر نفسه وليست Labs منفصلة.
  const dayTwoStations = [
    ['Lab 1: اكتشف بيانات منافذ', 'محطة التطبيق 1: افهم بيانات منافذ'],
    ['Lab 2: نظّف بيانات منافذ', 'محطة التطبيق 2: افحص البيانات ونظّفها'],
    ['Lab 3: جهّز X وy بأمان', 'محطة التطبيق 3: جهّز X وy بأمان'],
    ['المختبر الختامي لليوم الثاني: ابنِ نموذج تصنيف كاملًا', 'المحطة الختامية لليوم الثاني: ابنِ نموذج تصنيف كاملًا']
  ];
  dayTwoStations.forEach(([oldTitle, newTitle]) => {
    const index = slides.findIndex(slide => slide.includes('<div class="slide-title">' + oldTitle + '<'));
    if (index < 0) return;
    slides[index] = slides[index]
      .replace(oldTitle, newTitle)
      .replace(/<a class="ml-download"[^>]*>.*?<\/a>/, '');
  });

  const dayThreeHowIndex = slides.findIndex(slide => slide.includes('<div class="slide-title">كيف سنطبّق في اليوم الثالث؟<'));
  if (dayThreeHowIndex >= 0 && !slides[dayThreeHowIndex].includes('SDA-AIE-111_Day3_Model_Selection.ipynb')) {
    slides[dayThreeHowIndex] = slides[dayThreeHowIndex].replace(
      '<table class="ml-table">',
      '<a class="ml-download" href="downloads/SDA-AIE-111_Day3_Model_Selection.ipynb" download>تنزيل دفتر اليوم الثالث الكامل</a><table class="ml-table">'
    );
  }
  const dayThreeFinalIndexForLink = slides.findIndex(slide => slide.includes('<div class="slide-title">المختبر الختامي لليوم الثالث:'));
  if (dayThreeFinalIndexForLink >= 0) {
    slides[dayThreeFinalIndexForLink] = slides[dayThreeFinalIndexForLink]
      .replace('المختبر الختامي لليوم الثالث: قارن واضبط دون لمس الاختبار', 'المحطة الختامية لليوم الثالث: قارن واضبط دون لمس الاختبار')
      .replace(/<a class="ml-download"[^>]*>.*?<\/a>/, '');
  }

  const dayFourHowIndex = slides.findIndex(slide => slide.includes('<div class="slide-title">كيف سنطبّق في اليوم الرابع؟<'));
  if (dayFourHowIndex >= 0 && !slides[dayFourHowIndex].includes('SDA-AIE-111_Day2_KMeans.ipynb')) {
    slides[dayFourHowIndex] = slides[dayFourHowIndex].replace(
      '<table class="ml-table">',
      '<a class="ml-download" href="downloads/SDA-AIE-111_Day2_KMeans.ipynb" download>تنزيل دفتر اليوم الرابع</a><table class="ml-table">'
    );
  }
  const dayFourLabIndex = slides.findIndex(slide => slide.includes('<div class="slide-title">Lab 7: K-Means وPCA على بيانات منافذ<'));
  if (dayFourLabIndex >= 0) {
    slides[dayFourLabIndex] = slides[dayFourLabIndex]
      .replace('Lab 7: K-Means وPCA على بيانات منافذ', 'محطة التطبيق: K-Means وPCA على بيانات منافذ')
      .replace(/<a class="ml-download"[^>]*>.*?<\/a>/, '');
  }

  const regressionStationIndex = slides.findIndex(slide => slide.includes('<div class="slide-title">تحدٍ إضافي: حوّل المسار نفسه إلى انحدار<'));
  if (regressionStationIndex >= 0) {
    slides[regressionStationIndex] = slides[regressionStationIndex]
      .replace('تحدٍ إضافي: حوّل المسار نفسه إلى انحدار', 'محطة التطبيق: ابنِ نموذج انحدار')
      .replace('تحدٍ إثرائي · 25 دقيقة', 'تطبيق داخل دفتر اليوم الثالث · 25 دقيقة')
      .replace(/<a class="ml-download"[^>]*>.*?<\/a>/, '')
      .replace('الفكرة التي نثبتها', 'ما الذي نثبته؟');
  }
  moveTitlesAfter('نموذجان: لماذا نحتاج أكثر من مقياس؟', ['محطة التطبيق: ابنِ نموذج انحدار']);

  insertSequenceAfter('كيف سنطبّق في اليوم الثالث؟', [
    content('من التوقعات إلى التقييم', `<p class="ml-lead">أنهينا اليوم الثاني بنموذج ينتج توقعات. اليوم لا نسأل فقط: «كم نتيجة صحيحة؟»، بل نسأل: ما نوع الخطأ؟ وكم يكلف؟ وهل تتكرر النتيجة على عينات مختلفة؟</p>${flow([['توقعات النموذج','فئات أو أرقام'],['نوع الخطأ','FP / FN أو بواقي'],['مقياس مناسب','مرتبط بالهدف'],['تحقق متقاطع','ثبات النتيجة'],['قرار','بطل ومنافس']])}`)
  ]);

  insertSequenceAfter('تشغيل موجّه: غيّر العتبة وشاهد أثر القرار', [
    content('التقييم يتغير حسب نوع المسألة', `<div class="ml-grid"><div class="ml-card"><h3>إذا كان الهدف فئة</h3><p>نستخدم مصفوفة الالتباس وPrecision وRecall وPR-AUC، لأن السؤال هو: أي فئة اختار النموذج؟</p></div><div class="ml-card orange"><h3>إذا كان الهدف رقمًا</h3><p>نقيس المسافة بين الرقم الحقيقي والمتوقع باستخدام MAE وRMSE وR²، ثم نفحص البواقي.</p></div></div><div class="ml-note dark">انتهينا الآن من تقييم التصنيف. الشرائح التالية تطبق الفكرة نفسها على الانحدار، لكن بمقاييس تناسب الأرقام.</div>`)
  ]);

  // تحدي الانحدار يصبح مدخلًا عمليًا لمقاييس الانحدار، بدل أن يقطع ختام يوم التصنيف.
  moveTitlesAfter('التقييم يتغير حسب نوع المسألة', ['تحدٍ إضافي: حوّل المسار نفسه إلى انحدار']);

  insertSequenceAfter('تشغيل موجّه: قارن نموذجين بالطيات نفسها', [
    content('من نموذج واحد إلى نماذج مجمّعة', `<p class="ml-lead">بعد أن أصبح لدينا تقييم عادل، نستطيع سؤالًا جديدًا: هل جمع عدة أشجار يعطينا نتيجة أكثر ثباتًا أو دقة من شجرة واحدة؟</p><table class="ml-table"><tr><th>حتى الآن</th><th>الخطوة التالية</th></tr><tr><td>Logistic Regression أو Decision Tree منفردة</td><td>نستخدم عدة أشجار بدل شجرة واحدة</td></tr><tr><td>نقيس نموذجًا واحدًا</td><td>نقارن Random Forest وBoosting بالطيات نفسها</td></tr><tr><td>نفهم الخطأ</td><td>نقرر هل التحسن يبرر التعقيد</td></tr></table>`)
  ]);

  const dayFourDivider = slides.findIndex(slide => slide.includes('<div class="div-title">التعلم غير الخاضع للإشراف واختيار النموذج<'));
  if (dayFourDivider >= 0) {
    slides[dayFourDivider] = slides[dayFourDivider]
      .replace('اليوم الرابع — النصف الأول', 'اليوم الرابع')
      .replace('التعلم غير الخاضع للإشراف واختيار النموذج', 'التعلم غير الخاضع للإشراف والمشروع المتكامل')
      .replace('نطبّق التعلم غير الخاضع للإشراف ونغلق قرارات الاختيار قبل بدء المشروع', 'نطبّق التجميع عمليًا، ثم نجمع رحلة الدورة كلها في المشروع');
  }

  // المراجعة المنهجية النهائية: تُقدَّم المقاييس كحاجة تنشأ من عيب المقياس السابق،
  // لا كقائمة مصطلحات منفصلة. يبدأ الطالب بالسؤال الأبسط ثم يوسّع التقييم خطوةً خطوة.
  revise('لماذا لا تكفي Accuracy؟', `<p class="ml-lead">نبدأ بالدقة العامة (Accuracy) لأنها تجيب عن أبسط سؤال: <b>من جميع الحالات، كم توقعًا كان صحيحًا؟</b></p><div class="ml-grid"><div class="ml-card"><h3>مثال متوازن نسبيًا</h3><p>إذا أصاب النموذج 80 حالة من أصل 100:</p><p class="ml-quote">Accuracy = 80 ÷ 100 = 80%</p><p>هنا الرقم يعطي صورة أولية مفيدة.</p></div><div class="ml-card orange"><h3>أين تظهر المشكلة؟</h3><p>لدينا 1,000 معاملة: 990 سليمة و10 احتيالية. نموذج يقول «سليمة» للجميع يحقق:</p><p class="ml-quote">990 ÷ 1000 = 99%</p><p>لكنّه لم يكتشف أي حالة احتيال.</p></div></div><div class="ml-note dark"><b>النتيجة:</b> Accuracy تخبرنا بعدد الإجابات الصحيحة، لكنها لا تخبرنا <b>أي نوع من الحالات أخطأنا فيه</b>. لذلك نحتاج أولًا إلى مصفوفة الالتباس (Confusion Matrix).</div>`);

  revise('مصفوفة الالتباس بمثال 100 عميل', `<p class="ml-lead">بعد أن عرفنا أن Accuracy قد تخفي الفئة المهمة، نفتح النتيجة إلى أربعة أجزاء. اعتبر أن «إيجابي» يعني: العميل سيتوقف خلال 30 يومًا.</p><table class="ml-table"><tr><th></th><th>توقع: سيتوقف</th><th>توقع: سيستمر</th><th>المجموع</th></tr><tr><th>الحقيقة: توقف</th><td style="background:#def4ef"><b>TP = 18</b><br>اكتشفناه</td><td style="background:#fff0df"><b>FN = 7</b><br>فاتتنا الحالة</td><td>25</td></tr><tr><th>الحقيقة: استمر</th><td style="background:#fff0df"><b>FP = 12</b><br>إنذار زائد</td><td style="background:#def4ef"><b>TN = 63</b><br>استبعدناه صحيحًا</td><td>75</td></tr><tr><th>المجموع</th><td>30</td><td>70</td><td>100</td></tr></table><div class="ml-grid"><div class="ml-card"><h3>ماذا أضافت؟</h3><p>لم نعد نعرف عدد الأخطاء فقط؛ أصبحنا نعرف هل الخطأ <b>إنذار زائد FP</b> أم <b>حالة فاتتنا FN</b>.</p></div><div class="ml-card orange"><h3>لماذا نحتاج الخطوة التالية؟</h3><p>إذا أردنا قياس جودة قائمة الإنذارات نحتاج Precision، وإذا أردنا معرفة كم حالة حقيقية اكتشفنا نحتاج Recall.</p></div></div>`);

  revise('F1 وPR-AUC', `<p class="ml-lead">بعد حساب Precision وRecall قد نجد أن أحدهما مرتفع والآخر منخفض. نحتاج رقمًا يلخص التوازن بينهما؛ هنا تظهر درجة <b>F1</b>.</p><div class="ml-grid"><div class="ml-card"><h3>F1 Score</h3><p>متوسط توافقي بين Precision وRecall. لا تصبح مرتفعة إلا إذا كان الاثنان جيدين.</p><p class="ml-quote">Precision = 60% · Recall = 72%<br>F1 ≈ 65%</p><p>تفيد عندما نريد مقياسًا واحدًا يوازن بين الإنذارات الزائدة والحالات الفائتة.</p></div><div class="ml-card orange"><h3>لكن F1 تخص عتبة واحدة</h3><p>إذا غيّرنا العتبة من 0.50 إلى 0.30 ستتغير Precision وRecall وF1.</p><p>للمقارنة بين النماذج عبر <b>جميع العتبات</b> نستخدم منحنيات مثل PR وROC ومساحتها AUC.</p></div></div><div class="ml-note dark">إذن التسلسل هو: مصفوفة الالتباس تكشف الأخطاء ← Precision وRecall يقيسان نوعين مختلفين ← F1 يوازن بينهما عند عتبة محددة ← AUC يقارن الترتيب عبر عتبات كثيرة.</div>`);
  const f1StoryIndex = slides.findIndex(slide => slide.includes('<div class="slide-title">F1 وPR-AUC<'));
  if (f1StoryIndex >= 0) {
    slides[f1StoryIndex] = slides[f1StoryIndex].replace('F1 وPR-AUC', 'لماذا نحتاج F1؟');
  }

  revise('ROC-AUC أم PR-AUC؟', `<p class="ml-lead">لماذا ظهرت مقاييس AUC؟ لأن نتيجة النموذج الأصلية غالبًا احتمال، والعتبة التي تحول الاحتمال إلى فئة قد تتغير حسب القرار. نريد قياس قدرة النموذج على <b>ترتيب الحالات</b> عبر عتبات كثيرة، لا عند 0.50 فقط.</p><table class="ml-table"><tr><th>المقياس</th><th>ماذا يغيّر عبر الرسم؟</th><th>متى يكون أوضح؟</th></tr><tr><td><b>ROC-AUC</b></td><td>يقارن True Positive Rate مع False Positive Rate عبر العتبات</td><td>مقارنة عامة عندما الفئات ليست شديدة الاختلال</td></tr><tr><td><b>PR-AUC</b></td><td>يقارن Precision مع Recall عبر العتبات</td><td>عندما الفئة الإيجابية نادرة وهي محور القرار</td></tr></table><div class="ml-note orange"><b>لماذا لا نعتمد ROC-AUC دائمًا؟</b> مع فئة نادرة جدًا قد يبدو جيدًا بسبب كثرة السلبيات. لذلك نقرأ PR-AUC ومصفوفة الالتباس، ثم نختار عتبة تناسب تكلفة الخطأ وقدرة الفريق.</div>`);

  revise('نحسب Precision وRecall من المثال', `<p class="ml-lead">لنفترض أن نموذجًا يساعد في فرز صور فحص سرطان الثدي. «إيجابي» هنا يعني أن الصورة تحتاج مراجعة طبية إضافية. النموذج أداة مساعدة ولا يستبدل تشخيص الطبيب.</p><div class="ml-grid"><div class="ml-card"><h3>Precision: هل إنذارات النموذج دقيقة؟</h3><p>من جميع الصور التي صنفها النموذج «مشتبه بها»، كم حالة كانت مصابة فعلًا؟</p><p class="ml-quote">TP ÷ (TP + FP)<br>18 ÷ (18 + 12) = 60%</p><p><b>Precision = 60%</b> تعني أن 18 من أصل 30 إنذارًا كانت حالات مصابة فعلًا، و12 كانت إنذارات زائدة احتاجت مراجعة.</p></div><div class="ml-card orange"><h3>Recall: هل اكتشفنا المصابات؟</h3><p>من جميع الحالات المصابة فعلًا، كم حالة اكتشفها النموذج؟</p><p class="ml-quote">TP ÷ (TP + FN)<br>18 ÷ (18 + 7) = 72%</p><p><b>Recall = 72%</b> تعني أننا اكتشفنا 18 من 25 حالة مصابة، لكن فاتتنا 7 حالات.</p></div></div><div class="ml-note dark"><b>في الفحص الأولي نهتم غالبًا برفع Recall:</b> لأن مراجعة إنذار زائد بواسطة الطبيب أخف ضررًا عادةً من أن تمر حالة مصابة من دون تنبيه. لكن رفع Recall قد يزيد FP، لذلك نراقب Precision والقدرة الاستيعابية أيضًا.</div>`);

  revise('اختيار المقياس حسب تكلفة الخطأ', `<table class="ml-table"><tr><th>الحالة</th><th>الخطأ الأخطر</th><th>الأولوية المبدئية</th><th>لماذا؟</th></tr><tr><td>فرز صور فحص سرطان الثدي</td><td>FN: حالة مصابة صنفها النموذج سليمة</td><td><b>Recall</b></td><td>نريد اكتشاف أكبر عدد ممكن من الحالات المصابة، حتى لو راجع الطبيب بعض الإنذارات الزائدة</td></tr><tr><td>إرسال فريق ميداني لكل إنذار</td><td>FP: إنذار غير صحيح يستهلك زيارة مكلفة</td><td><b>Precision</b></td><td>نريد أن تكون الحالات التي نتحرك لها صحيحة قدر الإمكان</td></tr><tr><td>نحتاج موازنة النوعين</td><td>FP وFN كلاهما مهم</td><td><b>F1</b></td><td>يلخص التوازن بين Precision وRecall عند عتبة محددة</td></tr></table><div class="ml-note orange">لا يوجد مقياس «أفضل دائمًا». نحدد المقياس بعد معرفة أثر FP وFN في الحالة الواقعية.</div>`);

  revise('العتبة قرار تشغيلي', `<p class="ml-lead">نعرف أن Recall أو Precision ارتفعا بمقارنة قيمتهما عند عتبات مختلفة. المثال التالي يستخدم 25 حالة مصابة فعلًا و75 حالة سليمة.</p><table class="ml-table"><tr><th>العتبة</th><th>TP<br>اكتشفناها</th><th>FN<br>فاتتنا</th><th>FP<br>إنذار زائد</th><th>Recall</th><th>Precision</th></tr><tr><td><b>0.70</b></td><td>12</td><td>13</td><td>4</td><td>12 ÷ 25 = <b>48%</b></td><td>12 ÷ 16 = <b>75%</b></td></tr><tr><td><b>0.50</b></td><td>18</td><td>7</td><td>12</td><td>18 ÷ 25 = <b>72%</b></td><td>18 ÷ 30 = <b>60%</b></td></tr><tr><td><b>0.30</b></td><td>23</td><td>2</td><td>27</td><td>23 ÷ 25 = <b>92%</b></td><td>23 ÷ 50 = <b>46%</b></td></tr></table><div class="ml-grid"><div class="ml-card"><h3>خفضنا العتبة</h3><p>النموذج ينبه على حالات أكثر: زاد TP وقل FN، لذلك ارتفع <b>Recall</b>. لكن زاد FP، فانخفض <b>Precision</b>.</p></div><div class="ml-card orange"><h3>رفعنا العتبة</h3><p>النموذج أصبح أكثر تحفظًا: قل FP، لذلك ارتفع <b>Precision</b>. لكنه فوّت حالات أكثر، فانخفض <b>Recall</b>.</p></div></div><div class="ml-note dark"><b>تبرير جاهز:</b> «اخترنا عتبة 0.30 لأنها رفعت Recall من 72% إلى 92% وخفّضت الحالات الفائتة من 7 إلى حالتين. قبلنا انخفاض Precision وزيادة الإنذارات لأن تفويت حالة مصابة أعلى ضررًا، ولأن الفريق يستطيع مراجعة 50 إنذارًا».</div>`);

  // ترتيب قصة تقييم التصنيف: كل مفهوم يحل مشكلة ظهرت في المفهوم السابق.
  moveTitlesAfter('من التوقعات إلى التقييم', [
    'لماذا لا تكفي Accuracy؟',
    'مصفوفة الالتباس بمثال 100 عميل',
    'TP وTN: متى يكون القرار صحيحًا؟',
    'FP وFN: خطآن بتكلفتين مختلفتين',
    'نحسب Precision وRecall من المثال',
    'لماذا نحتاج F1؟',
    'اختيار المقياس حسب تكلفة الخطأ',
    'العتبة قرار تشغيلي',
    'ROC-AUC أم PR-AUC؟',
    'ما معنى Recall@k؟',
    'نشاط 2: اختر المقياس وفسّر قرارك',
    'تشغيل موجّه: غيّر العتبة وشاهد أثر القرار',
    'التقييم يتغير حسب نوع المسألة'
  ]);

  // إزالة خطط التوقيت التي تقطع القصة؛ يبقى رابط الدفتر ومحطات التطبيق داخل السياق.
  removeSlideTitles([
    'خطة النصف الأول من اليوم الرابع — 105 دقائق',
    'خطة النصف الثاني من اليوم الرابع — 105 دقائق',
    'كيف سنطبّق في اليوم الثالث؟',
    'نشاط 2: اختر المقياس وفسّر قرارك'
  ]);

  // تفاصيل اليوم الأول المتقدمة تُدرَّس في يوم التطبيق، فلا نكررها قبل أوانها.
  removeSlideTitles([
    'كيف نختار K؟',
    'كيف يعمل تقليل الأبعاد واكتشاف الشذوذ؟',
    'كيف يعمل تقليل الأبعاد تقنيًا؟',
    'كيف يعمل اكتشاف الشذوذ تقنيًا؟'
  ]);

  revise('ملخص اليوم الأول', 'بَنينا خريطة تعلم الآلة: بدأنا بالتعريف العام، ثم رأينا كيف تختلف طريقة التعلم باختلاف نوع الإجابة المتاحة. بعد ذلك فهمنا التصنيف والانحدار، ثم التجميع بلا هدف، وأخيرًا التعلم المعزز بالمكافأة.','المخرج: تستطيع تحديد نوع التعلم ونوع المسألة، وشرح الفرق بين الخصائص X والهدف y، وبين التوقع والقرار.','في اليوم الثاني نأخذ مسألة تصنيف واحدة ونسير بها عمليًا: نفهم البيانات، ننظفها، نقسمها، ثم نبني أول نموذج داخل Pipeline.');

  revise('ملخص اليوم الثاني', 'حوّلنا سؤال اليوم الأول إلى أول نموذج يعمل: فهمنا جدول منافذ، عالجنا مشكلات الجودة، حددنا X وy، قسمنا البيانات، ثم وضعنا المعالجة والنموذج داخل Pipeline.','المخرج: Baseline وLogistic Regression وDecision Tree تعمل على التقسيم نفسه، وتنتج توقعات أولية على بيانات لم تُستخدم في التدريب.','لم نختر النموذج الأفضل بعد؛ اليوم الثالث يبدأ بالسؤال: ما نوع الخطأ المهم، وما المقياس الذي يكشفه، وهل النتيجة ثابتة؟');

  revise('ملخص اليوم الثالث', 'بدأنا بـAccuracy واكتشفنا أنها قد تخفي الفئة المهمة، ففتحنا الأخطاء بمصفوفة الالتباس، ثم استخدمنا Precision وRecall وF1 وAUC وفق القرار. بعد ذلك قيّمنا الانحدار، واستخدمنا Cross-Validation للمقارنة العادلة، ثم انتقلنا إلى النماذج المجمّعة والضبط.','المخرج: نموذج مرشح مع مقياس وعتبة مبررين، ومتوسط أداء عبر الطيات، وتحليل أخطاء، ومقارنة بين بطل ومنافس.','في اليوم الرابع تستخدم الفرق جميع قرارات الدورة لبناء المشروع المتكامل؛ فقد طُبّق التعلم غير الخاضع للإشراف في اليوم الثاني.');

  insertSequenceAfter('ROC-AUC أم PR-AUC؟', [
    content('كيف أعرف أي منحنى أفضل؟', `<style>.auc-compare{display:grid;grid-template-columns:1fr 1fr;gap:22px}.auc-compare-panel{background:#f6f8fc;color:#243b78;border-radius:17px;padding:12px 16px}.auc-compare-panel svg{width:100%;height:270px}.ac-axis{stroke:#243b78;stroke-width:3}.ac-base{stroke:#8e9ab4;stroke-width:3;stroke-dasharray:8 7;fill:none}.ac-a{stroke:#159d91;stroke-width:7;fill:none;stroke-linecap:round}.ac-b{stroke:#ef7d00;stroke-width:6;fill:none;stroke-linecap:round}.ac-label{fill:#243b78;font-size:16px;font-weight:800}.auc-legend{display:flex;gap:22px;justify-content:center;flex-wrap:wrap;margin-top:5px}.auc-legend span::before{content:"";display:inline-block;width:26px;height:6px;border-radius:4px;margin-left:7px;vertical-align:middle}.auc-legend .model-a::before{background:#159d91}.auc-legend .model-b::before{background:#ef7d00}@media(max-width:850px){.auc-compare{grid-template-columns:1fr}.auc-compare-panel svg{height:230px}}</style><p class="ml-lead">نقارن نموذجين على <b>البيانات نفسها وبالمقياس نفسه</b>. النموذج الذي يحافظ على منحنى أعلى ومساحة أكبر يكون أفضل في ترتيب الحالات عبر العتبات.</p><div class="auc-compare"><div class="auc-compare-panel"><h3>في ROC: الأعلى والأيسر أفضل</h3><svg viewBox="0 0 470 300" role="img" aria-label="مقارنة منحنيي ROC لنموذجين"><line class="ac-axis" x1="60" y1="245" x2="435" y2="245"/><line class="ac-axis" x1="60" y1="245" x2="60" y2="25"/><line class="ac-base" x1="60" y1="245" x2="435" y2="25"/><path class="ac-a" d="M60 245 C72 105,125 48,220 34 S365 27,435 25"/><path class="ac-b" d="M60 245 C110 175,175 125,255 88 S365 45,435 25"/><text class="ac-label" x="245" y="286" text-anchor="middle">الإنذارات الزائدة FPR ←</text><text class="ac-label" x="18" y="145" text-anchor="middle" transform="rotate(-90 18 145)">الاكتشاف Recall ↑</text><text class="ac-label" x="190" y="53">A = 0.90</text><text class="ac-label" x="292" y="112">B = 0.72</text></svg><div class="auc-legend"><span class="model-a">النموذج A</span><span class="model-b">النموذج B</span></div><p><b>A أفضل:</b> يكتشف حالات أكثر مقابل إنذارات زائدة أقل، وROC-AUC لديه أكبر.</p></div><div class="auc-compare-panel"><h3>في PR: الأعلى أفضل</h3><svg viewBox="0 0 470 300" role="img" aria-label="مقارنة منحنيي Precision Recall لنموذجين"><line class="ac-axis" x1="60" y1="245" x2="435" y2="245"/><line class="ac-axis" x1="60" y1="245" x2="60" y2="25"/><line class="ac-base" x1="60" y1="205" x2="435" y2="205"/><path class="ac-a" d="M65 42 C145 43,225 58,300 88 S385 130,430 158"/><path class="ac-b" d="M65 90 C145 105,220 135,300 165 S385 194,430 205"/><text class="ac-label" x="245" y="286" text-anchor="middle">Recall: الحالات المكتشفة ←</text><text class="ac-label" x="18" y="145" text-anchor="middle" transform="rotate(-90 18 145)">Precision: دقة الإنذارات ↑</text><text class="ac-label" x="300" y="77">A = 0.68</text><text class="ac-label" x="315" y="183">B = 0.42</text></svg><div class="auc-legend"><span class="model-a">النموذج A</span><span class="model-b">النموذج B</span></div><p><b>A أفضل:</b> يحافظ على Precision أعلى بينما يرتفع Recall، وPR-AUC لديه أكبر.</p></div></div><div class="ml-grid"><div class="ml-card"><h3>قاعدة سريعة</h3><p><b>ROC:</b> اقترب من أعلى اليسار.<br><b>PR:</b> ابقَ في الأعلى واتجه إلى اليمين.<br><b>AUC:</b> الأكبر أفضل عند المقارنة الصحيحة.</p></div><div class="ml-card orange"><h3>خطأ شائع</h3><p>لا نقول إن ROC-AUC = 0.90 أفضل من PR-AUC = 0.68؛ فهما يقيسان شيئين مختلفين. نقارن ROC-AUC بين النماذج، أو PR-AUC بين النماذج، على البيانات نفسها.</p></div></div>`)
  ]);

  revise('العتبة قرار تشغيلي', `<style>
    .threshold-sim{max-width:1180px;margin:0 auto}.threshold-control{display:grid;grid-template-columns:150px 1fr 90px;gap:18px;align-items:center;margin:16px 0 22px}.threshold-control input{width:100%;accent-color:#ef7d00}.threshold-value{background:#243b78;color:#fff!important;border-radius:14px;padding:12px;text-align:center;font-weight:900}.threshold-chart{display:grid;gap:14px}.threshold-row{display:grid;grid-template-columns:190px 1fr 115px;gap:14px;align-items:center}.threshold-track{height:52px;display:flex;overflow:hidden;border-radius:14px;background:#edf1f8}.threshold-part{display:flex;align-items:center;justify-content:center;font-weight:900;transition:width .35s ease;min-width:0}.threshold-tp{background:#159d91;color:#fff}.threshold-fn{background:#ef7d00;color:#fff}.threshold-fp{background:#f2a35d;color:#243b78}.threshold-tn{background:#cfd9ec;color:#243b78}.threshold-metrics{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:20px}.threshold-metric{padding:15px 20px;border-radius:16px;background:#eef2fa;text-align:center;color:#243b78}.threshold-metric strong{display:block;font-size:1.7em;color:#243b78}.threshold-explain{margin-top:14px;background:#243b78;color:#fff!important;border-radius:14px;padding:14px 20px;text-align:center;font-weight:800}@media(max-width:850px){.threshold-control,.threshold-row{grid-template-columns:1fr}.threshold-metrics{grid-template-columns:1fr}.threshold-row-label,.threshold-row-total{text-align:center}}
  </style><p class="ml-lead">حرّك العتبة ولاحظ المقايضة. المثال يحتوي <b>25 حالة مصابة</b> و<b>75 حالة سليمة</b>.</p><div class="threshold-sim" data-threshold-sim><div class="threshold-control"><b>عتبة القرار</b><input type="range" min="30" max="70" step="20" value="50" aria-label="غيّر عتبة القرار بين 0.30 و0.70"><output class="threshold-value" aria-live="polite">0.50</output></div><div class="threshold-chart"><div class="threshold-row"><div class="threshold-row-label"><b>الحالات المصابة فعلًا</b><br><small>25 حالة</small></div><div class="threshold-track" role="img" aria-label="تقسيم الحالات المصابة إلى مكتشفة وفائتة"><div class="threshold-part threshold-tp" data-bar="tp">TP 18</div><div class="threshold-part threshold-fn" data-bar="fn">FN 7</div></div><div class="threshold-row-total">المكتشف: <b data-value="tp">18</b></div></div><div class="threshold-row"><div class="threshold-row-label"><b>الحالات السليمة فعلًا</b><br><small>75 حالة</small></div><div class="threshold-track" role="img" aria-label="تقسيم الحالات السليمة إلى إنذارات زائدة واستبعاد صحيح"><div class="threshold-part threshold-fp" data-bar="fp">FP 12</div><div class="threshold-part threshold-tn" data-bar="tn">TN 63</div></div><div class="threshold-row-total">إنذار زائد: <b data-value="fp">12</b></div></div></div><div class="threshold-metrics"><div class="threshold-metric"><span>Recall — كم مصابة اكتشفنا؟</span><strong data-metric="recall">72%</strong><small>TP ÷ جميع الحالات المصابة</small></div><div class="threshold-metric"><span>Precision — كم إنذارًا كان صحيحًا؟</span><strong data-metric="precision">60%</strong><small>TP ÷ جميع الإنذارات</small></div></div><div class="threshold-explain" data-explain aria-live="polite">عند 0.50: اكتشفنا 18 حالة، وفاتتنا 7، وأصدرنا 12 إنذارًا زائدًا.</div></div>`);

  revise('ROC-AUC أم PR-AUC؟', `<style>.auc-plots{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:12px}.auc-panel{background:#f5f7fc;border-radius:18px;padding:14px 18px;color:#243b78}.auc-panel svg{width:100%;height:260px}.auc-axis{stroke:#243b78;stroke-width:3}.auc-grid{stroke:#cfd7e8;stroke-width:1}.auc-curve{fill:none;stroke:#ef7d00;stroke-width:7;stroke-linecap:round}.auc-base{fill:none;stroke:#8b98b6;stroke-width:3;stroke-dasharray:9 8}.auc-label{fill:#243b78;font-size:18px;font-weight:800}.auc-dot{fill:#159d91;stroke:#fff;stroke-width:4}@media(max-width:850px){.auc-plots{grid-template-columns:1fr}.auc-panel svg{height:220px}}</style><p class="ml-lead">كلا الرسمين يغيّر العتبة من الصارمة إلى المتساهلة، لكن كل واحد يراقب سؤالًا مختلفًا.</p><div class="auc-plots"><div class="auc-panel"><h3>ROC Curve</h3><svg viewBox="0 0 460 300" role="img" aria-label="منحنى ROC يقارن معدل الاكتشاف بمعدل الإنذارات الكاذبة"><line class="auc-axis" x1="55" y1="245" x2="430" y2="245"/><line class="auc-axis" x1="55" y1="245" x2="55" y2="25"/><line class="auc-base" x1="55" y1="245" x2="430" y2="25"/><path class="auc-curve" d="M55 245 C75 120,145 63,235 43 S375 28,430 25"/><circle class="auc-dot" cx="150" cy="62" r="9"/><text class="auc-label" x="235" y="286" text-anchor="middle">False Positive Rate</text><text class="auc-label" x="18" y="145" text-anchor="middle" transform="rotate(-90 18 145)">Recall / TPR</text><text class="auc-label" x="172" y="92">عتبة مختارة</text></svg><p><b>السؤال:</b> هل يرتب النموذج الإيجابيات أعلى من السلبيات؟ الخط القطري أداء عشوائي.</p></div><div class="auc-panel"><h3>Precision–Recall Curve</h3><svg viewBox="0 0 460 300" role="img" aria-label="منحنى Precision Recall يوضح المقايضة بينهما"><line class="auc-axis" x1="55" y1="245" x2="430" y2="245"/><line class="auc-axis" x1="55" y1="245" x2="55" y2="25"/><line class="auc-base" x1="55" y1="205" x2="430" y2="205"/><path class="auc-curve" d="M65 40 C145 42,205 58,255 90 S340 160,425 205"/><circle class="auc-dot" cx="255" cy="90" r="9"/><text class="auc-label" x="235" y="286" text-anchor="middle">Recall</text><text class="auc-label" x="18" y="145" text-anchor="middle" transform="rotate(-90 18 145)">Precision</text><text class="auc-label" x="278" y="73">عتبة مختارة</text></svg><p><b>السؤال:</b> عندما نزيد اكتشاف الإيجابيات، كم تبقى إنذاراتنا دقيقة؟ أوضح مع الفئة النادرة.</p></div></div><div class="ml-note dark"><b>AUC</b> هي المساحة تحت المنحنى. كلما اقترب المنحنى من الزاوية العليا كانت قدرة الترتيب أفضل، لكن اختيار العتبة النهائي يبقى قرارًا تشغيليًا.</div>`);

  revise('اقرأ رسم البواقي قبل الثقة بالانحدار', `<style>.residual-gallery{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}.residual-card{background:#f5f7fc;border-radius:16px;padding:10px;color:#243b78;text-align:center}.residual-card svg{width:100%;height:185px}.res-axis{stroke:#7e8baa;stroke-width:2}.res-zero{stroke:#ef7d00;stroke-width:3;stroke-dasharray:7 6}.res-dot{fill:#159d91}.res-dot.bad{fill:#ef7d00}@media(max-width:950px){.residual-gallery{grid-template-columns:repeat(2,1fr)}}</style><p class="ml-lead">الباقي (Residual) = الحقيقة − التوقع. نرسمه حول خط الصفر: الشكل الذي تصنعه النقاط يخبرنا ما الذي لم يتعلمه النموذج.</p><div class="residual-gallery"><div class="residual-card"><h3>سحابة سليمة</h3><svg viewBox="0 0 240 190" role="img" aria-label="بواقي موزعة عشوائيًا حول الصفر"><line class="res-axis" x1="25" y1="160" x2="225" y2="160"/><line class="res-zero" x1="25" y1="90" x2="225" y2="90"/><g class="res-dot"><circle cx="45" cy="70" r="6"/><circle cx="65" cy="105" r="6"/><circle cx="88" cy="82" r="6"/><circle cx="110" cy="115" r="6"/><circle cx="135" cy="67" r="6"/><circle cx="157" cy="98" r="6"/><circle cx="181" cy="78" r="6"/><circle cx="205" cy="108" r="6"/></g></svg><p>لا نمط واضح: إشارة جيدة مبدئيًا.</p></div><div class="residual-card"><h3>قمع</h3><svg viewBox="0 0 240 190" role="img" aria-label="تشتت البواقي يزداد مع التوقع"><line class="res-axis" x1="25" y1="160" x2="225" y2="160"/><line class="res-zero" x1="25" y1="90" x2="225" y2="90"/><g class="res-dot"><circle cx="45" cy="86" r="6"/><circle cx="65" cy="95" r="6"/><circle cx="90" cy="78" r="6"/><circle cx="115" cy="108" r="6"/><circle cx="140" cy="60" r="6"/><circle cx="165" cy="123" r="6"/><circle cx="190" cy="38" r="6"/><circle cx="210" cy="143" r="6"/></g></svg><p>الخطأ يكبر: التباين غير ثابت.</p></div><div class="residual-card"><h3>منحنى</h3><svg viewBox="0 0 240 190" role="img" aria-label="البواقي تصنع نمطًا منحنيًا"><line class="res-axis" x1="25" y1="160" x2="225" y2="160"/><line class="res-zero" x1="25" y1="90" x2="225" y2="90"/><g class="res-dot"><circle cx="40" cy="45" r="6"/><circle cx="65" cy="72" r="6"/><circle cx="90" cy="105" r="6"/><circle cx="115" cy="125" r="6"/><circle cx="140" cy="112" r="6"/><circle cx="165" cy="80" r="6"/><circle cx="195" cy="48" r="6"/></g></svg><p>علاقة غير خطية لم يلتقطها النموذج.</p></div><div class="residual-card"><h3>قيمة شاذة</h3><svg viewBox="0 0 240 190" role="img" aria-label="نقطة واحدة بعيدة عن بقية البواقي"><line class="res-axis" x1="25" y1="160" x2="225" y2="160"/><line class="res-zero" x1="25" y1="90" x2="225" y2="90"/><g class="res-dot"><circle cx="45" cy="82" r="6"/><circle cx="72" cy="101" r="6"/><circle cx="100" cy="75" r="6"/><circle cx="130" cy="107" r="6"/><circle cx="160" cy="84" r="6"/><circle cx="190" cy="98" r="6"/></g><circle class="res-dot bad" cx="210" cy="28" r="9"/></svg><p>حالة بعيدة تحتاج فحصًا، لا حذفًا تلقائيًا.</p></div></div>`);

  revise('التحقق المتقاطع: مقارنة أكثر ثباتًا', `<style>.cv-sim{max-width:1120px;margin:auto}.cv-folds{display:grid;grid-template-columns:repeat(5,1fr);gap:12px;margin:24px 0}.cv-fold{padding:28px 8px;border-radius:15px;background:#dfe6f3;color:#243b78;text-align:center;font-weight:900;transition:.25s}.cv-fold.is-validation{background:#ef7d00;color:#fff}.cv-control{display:grid;grid-template-columns:170px 1fr 100px;gap:16px;align-items:center}.cv-control input{width:100%;accent-color:#ef7d00}.cv-output{background:#243b78;color:#fff!important;padding:11px;border-radius:12px;text-align:center;font-weight:900}.cv-caption{text-align:center;background:#eef2fa;color:#243b78;border-radius:14px;padding:14px;margin-top:18px;font-weight:800}@media(max-width:760px){.cv-control{grid-template-columns:1fr}.cv-folds{gap:5px}.cv-fold{padding:22px 4px}}</style><p class="ml-lead">بدل الاعتماد على تقسيم تحقق واحد، نغيّر الجزء المستخدم للتحقق حتى يحصل كل جزء على دوره. مجموعة الاختبار النهائي تبقى مغلقة.</p><div class="cv-sim" data-cv-sim><div class="cv-control"><b>اختر الجولة</b><input type="range" min="1" max="5" value="1" step="1" aria-label="اختر طية التحقق"><output class="cv-output" aria-live="polite">الجولة 1</output></div><div class="cv-folds"><div class="cv-fold is-validation">الطية 1<br><small>تحقق</small></div><div class="cv-fold">الطية 2<br><small>تدريب</small></div><div class="cv-fold">الطية 3<br><small>تدريب</small></div><div class="cv-fold">الطية 4<br><small>تدريب</small></div><div class="cv-fold">الطية 5<br><small>تدريب</small></div></div><div class="cv-caption" aria-live="polite">ندرب على الطيات 2–5، ونقيّم على الطية 1.</div></div><div class="ml-note dark">بعد خمس جولات نحصل على خمس درجات، ثم نعرض <b>المتوسط ± الانحراف المعياري</b>. المتوسط يصف الأداء المعتاد، والانحراف يوضح مدى ثباته.</div>`);

  // شرح تكوّن المنحنى قبل مقارنة مساحته؛ كل عتبة تتحول إلى نقطة واضحة.
  revise('ROC-AUC أم PR-AUC؟', `<style>.auc-story{max-width:1180px;margin:auto}.auc-steps{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:12px 0 18px}.auc-step{background:#eef2fa;color:#243b78;border-radius:14px;padding:12px;text-align:center}.auc-step b{display:block;color:#ef7d00;font-size:1.15em}.auc-story-plots{display:grid;grid-template-columns:1fr 1fr;gap:18px}.auc-story-plot{background:#f7f8fc;border-radius:16px;padding:10px;color:#243b78}.auc-story-plot svg{width:100%;height:250px}.as-axis{stroke:#243b78;stroke-width:3}.as-grid{stroke:#d6ddec;stroke-width:1}.as-line{fill:none;stroke:#ef7d00;stroke-width:6;stroke-linecap:round;stroke-linejoin:round}.as-dot{fill:#159d91;stroke:#fff;stroke-width:4}.as-text{fill:#243b78;font-size:16px;font-weight:800}.as-threshold{fill:#9b4d00;font-size:15px;font-weight:900}@media(max-width:850px){.auc-story-plots,.auc-steps{grid-template-columns:1fr}.auc-story-plot svg{height:220px}}</style><p class="ml-lead"><b>الفكرة أولًا:</b> النموذج لم يعطنا منحنى جاهزًا. نحن نغيّر العتبة؛ كل عتبة تنتج قيمتين، فنضع نقطة على الرسم. عندما نصل نقاط عتبات كثيرة يظهر المنحنى.</p><div class="auc-story"><div class="auc-steps"><div class="auc-step"><b>عتبة 0.70</b>Recall 48% · Precision 75%<br>إنذارات قليلة ومحافظة</div><div class="auc-step"><b>عتبة 0.50</b>Recall 72% · Precision 60%<br>نقطة وسطية</div><div class="auc-step"><b>عتبة 0.30</b>Recall 92% · Precision 46%<br>اكتشاف أكبر وإنذارات أكثر</div></div><div class="auc-story-plots"><div class="auc-story-plot"><h3>ROC: ماذا يحدث للسليم والمصاب؟</h3><svg viewBox="0 0 470 285" role="img" aria-label="ثلاث نقاط ROC ناتجة عن ثلاث عتبات"><line class="as-axis" x1="65" y1="235" x2="435" y2="235"/><line class="as-axis" x1="65" y1="235" x2="65" y2="25"/><line class="as-grid" x1="65" y1="130" x2="435" y2="130"/><line class="as-grid" x1="250" y1="235" x2="250" y2="25"/><path class="as-line" d="M88 134 L124 84 L198 42"/><circle class="as-dot" cx="88" cy="134" r="9"/><circle class="as-dot" cx="124" cy="84" r="9"/><circle class="as-dot" cx="198" cy="42" r="9"/><text class="as-threshold" x="96" y="158">0.70</text><text class="as-threshold" x="132" y="107">0.50</text><text class="as-threshold" x="207" y="64">0.30</text><text class="as-text" x="250" y="274" text-anchor="middle">نسبة الإنذارات الزائدة بين السليمات ←</text><text class="as-text" x="20" y="135" text-anchor="middle" transform="rotate(-90 20 135)">نسبة المصابات المكتشفات ↑</text></svg><p><b>النقطة الأفضل تتجه للأعلى واليسار:</b> نكتشف مصابات أكثر مع إنذارات زائدة أقل.</p></div><div class="auc-story-plot"><h3>PR: ماذا يحدث لجودة قائمة الإنذارات؟</h3><svg viewBox="0 0 470 285" role="img" aria-label="ثلاث نقاط Precision Recall ناتجة عن ثلاث عتبات"><line class="as-axis" x1="65" y1="235" x2="435" y2="235"/><line class="as-axis" x1="65" y1="235" x2="65" y2="25"/><line class="as-grid" x1="65" y1="130" x2="435" y2="130"/><line class="as-grid" x1="250" y1="235" x2="250" y2="25"/><path class="as-line" d="M243 78 L331 109 L405 139"/><circle class="as-dot" cx="243" cy="78" r="9"/><circle class="as-dot" cx="331" cy="109" r="9"/><circle class="as-dot" cx="405" cy="139" r="9"/><text class="as-threshold" x="216" y="64">0.70</text><text class="as-threshold" x="305" y="96">0.50</text><text class="as-threshold" x="379" y="128">0.30</text><text class="as-text" x="250" y="274" text-anchor="middle">Recall: نسبة المصابات المكتشفات ←</text><text class="as-text" x="20" y="135" text-anchor="middle" transform="rotate(-90 20 135)">Precision: دقة الإنذارات ↑</text></svg><p><b>هنا نرى المقايضة مباشرة:</b> كلما اكتشفنا مصابات أكثر، دخلت إنذارات زائدة فانخفض Precision.</p></div></div><div class="ml-note dark"><b>ما معنى AUC؟</b> نجرّب عتبات كثيرة، نصل نقاطها، ثم نحسب المساحة تحت المنحنى. مساحة أكبر تعني أن النموذج يرتب الحالات جيدًا عبر عتبات متعددة؛ لكنها لا تختار العتبة التشغيلية بدلًا عنا.</div><div class="ml-note orange"><b>متى أستخدم أيهما؟</b> ROC-AUC يعطي مقارنة عامة. عندما تكون الحالات الإيجابية نادرة ومهمة، يكون PR-AUC أوضح لأنه يركز على Recall وPrecision ولا تخفيه كثرة الحالات السليمة.</div></div>`);

  const rocExampleIndex = slides.findIndex(slide => slide.includes('<div class="slide-title">ROC-AUC أم PR-AUC؟<'));
  if (rocExampleIndex >= 0) {
    slides[rocExampleIndex] = slides[rocExampleIndex].replace('ROC-AUC أم PR-AUC؟', 'مثال: كيف تتكوّن منحنيات ROC وPR؟');
  }

  insertSequenceAfter('مثال: كيف تتكوّن منحنيات ROC وPR؟', [
    content('كيف أقرأ المعلومات من المنحنى؟', `<style>.curve-read{display:grid;grid-template-columns:1fr 1fr;gap:20px}.curve-read-panel{background:#f6f8fc;color:#243b78;border-radius:17px;padding:12px 16px}.curve-read-panel svg{width:100%;height:270px}.cr-axis{stroke:#243b78;stroke-width:3}.cr-curve{fill:none;stroke:#ef7d00;stroke-width:6}.cr-guide{stroke:#159d91;stroke-width:3;stroke-dasharray:7 6}.cr-dot{fill:#159d91;stroke:#fff;stroke-width:4}.cr-text{fill:#243b78;font-size:16px;font-weight:800}.cr-value{fill:#087f79;font-size:18px;font-weight:900}@media(max-width:850px){.curve-read{grid-template-columns:1fr}.curve-read-panel svg{height:235px}}</style><p class="ml-lead">نقرأ <b>نقطة واحدة</b> تمثل عتبة محددة. نسقط منها خطًا إلى المحور الأفقي وخطًا إلى المحور الرأسي، ثم نفسر الرقمين معًا.</p><div class="curve-read"><div class="curve-read-panel"><h3>قراءة نقطة من ROC عند العتبة 0.50</h3><svg viewBox="0 0 470 300" role="img" aria-label="قراءة نقطة ROC بإسقاطها على المحورين"><line class="cr-axis" x1="65" y1="245" x2="435" y2="245"/><line class="cr-axis" x1="65" y1="245" x2="65" y2="25"/><path class="cr-curve" d="M65 245 C80 125,130 78,220 48 S370 29,435 25"/><line class="cr-guide" x1="124" y1="92" x2="124" y2="245"/><line class="cr-guide" x1="65" y1="92" x2="124" y2="92"/><circle class="cr-dot" cx="124" cy="92" r="10"/><text class="cr-value" x="124" y="270" text-anchor="middle">FPR = 16%</text><text class="cr-value" x="58" y="86" text-anchor="end">Recall = 72%</text><text class="cr-text" x="150" y="76">عتبة 0.50</text></svg><p><b>التفسير:</b> اكتشف النموذج 72% من الحالات المصابة، لكنه أعطى إنذارًا خاطئًا لـ16% من الحالات السليمة.</p></div><div class="curve-read-panel"><h3>قراءة نقطة من PR عند العتبة 0.50</h3><svg viewBox="0 0 470 300" role="img" aria-label="قراءة نقطة Precision Recall بإسقاطها على المحورين"><line class="cr-axis" x1="65" y1="245" x2="435" y2="245"/><line class="cr-axis" x1="65" y1="245" x2="65" y2="25"/><path class="cr-curve" d="M70 42 C150 45,225 62,330 118 S400 165,435 190"/><line class="cr-guide" x1="331" y1="119" x2="331" y2="245"/><line class="cr-guide" x1="65" y1="119" x2="331" y2="119"/><circle class="cr-dot" cx="331" cy="119" r="10"/><text class="cr-value" x="331" y="270" text-anchor="middle">Recall = 72%</text><text class="cr-value" x="58" y="113" text-anchor="end">Precision = 60%</text><text class="cr-text" x="345" y="100">عتبة 0.50</text></svg><p><b>التفسير:</b> اكتشف النموذج 72% من الحالات المصابة، و60% من إنذاراته كانت حالات مصابة فعلًا.</p></div></div><div class="ml-grid"><div class="ml-card"><h3>ماذا أستخرج من كل نقطة؟</h3><ol><li>العتبة المستخدمة.</li><li>قيمة المحور الأفقي.</li><li>قيمة المحور الرأسي.</li><li>المقايضة المقبولة للعمل.</li></ol></div><div class="ml-card orange"><h3>ماذا لا يخبرني AUC؟</h3><p>AUC يلخص جودة المنحنى كاملًا، لكنه لا يقول: استخدم عتبة 0.30 أو 0.50. لاختيار العتبة نرجع إلى النقاط وتكلفة FP وFN وقدرة الفريق.</p></div></div>`)
  ]);

  insertSequenceAfter('العتبة قرار تشغيلي', [
    content('ما معنى ROC-AUC وPR-AUC؟ ولماذا نستخدمهما؟', `<p class="ml-lead">عند عتبة واحدة مثل 0.50 نحصل على Precision وRecall واحدين فقط. لكن النموذج يعطي احتمالات، ويمكن أن نختار عتبات كثيرة. نحتاج طريقة تلخص جودة النموذج عبر هذه العتبات.</p><div class="ml-grid"><div class="ml-card"><h3>ROC Curve</h3><p><b>ROC</b> اختصار لـ <b>Receiver Operating Characteristic</b>.</p><p>يرسم العلاقة بين:</p><ul><li><b>Recall / True Positive Rate:</b> كم حالة إيجابية اكتشفنا؟</li><li><b>False Positive Rate:</b> كم حالة سلبية أعطيناها إنذارًا خاطئًا؟</li></ul><p><b>فكرته:</b> هل يستطيع النموذج فصل الإيجابيات عن السلبيات عبر عتبات مختلفة؟</p></div><div class="ml-card orange"><h3>Precision–Recall Curve</h3><p><b>PR</b> اختصار لـ <b>Precision–Recall</b>.</p><p>يرسم العلاقة بين:</p><ul><li><b>Recall:</b> كم حالة إيجابية اكتشفنا؟</li><li><b>Precision:</b> كم إنذارًا أصدرناه كان صحيحًا؟</li></ul><p><b>فكرته:</b> ماذا يحدث لدقة الإنذارات عندما نحاول اكتشاف حالات إيجابية أكثر؟</p></div></div><div class="ml-grid"><div class="ml-card"><h3>ما معنى AUC؟</h3><p><b>Area Under the Curve</b>، أي المساحة تحت المنحنى. تحول المنحنى كاملًا إلى رقم واحد للمقارنة بين النماذج. الأعلى أفضل عادةً.</p></div><div class="ml-card orange"><h3>لماذا لا تكفي عتبة واحدة؟</h3><p>قد يبدو نموذج أفضل عند 0.50، لكنه أسوأ عند عتبة تناسب قدرة الفريق. AUC يقارن قدرة الترتيب عبر عتبات كثيرة، ثم نختار العتبة التشغيلية بصورة منفصلة.</p></div></div><div class="ml-note dark"><b>قاعدة مبسطة:</b> نبدأ بـROC-AUC للمقارنة العامة. إذا كانت الفئة الإيجابية نادرة ومهمة—مثل مرض نادر أو احتيال—نركز أكثر على PR-AUC لأنه يُظهر Precision وRecall مباشرة.</div>`)
  ]);


  // ربط المقاييس بالقرار التشغيلي: بعد مقارنة النموذج ننتقل إلى قيد قدرة الفريق.
  revise('ما معنى Recall@k؟', `<style>.rk-flow{display:grid;grid-template-columns:1fr auto 1fr auto 1fr;gap:12px;align-items:center;margin:16px 0}.rk-box{background:#eef2fa;color:#243b78;border-radius:16px;padding:16px;text-align:center}.rk-box strong{display:block;font-size:1.4em;color:#243b78}.rk-arrow{font-size:2em;color:#ef7d00;font-weight:900}.rk-ranked{display:grid;grid-template-columns:3fr 2fr;gap:10px;margin:18px 0}.rk-top,.rk-rest{border-radius:16px;padding:16px;color:#243b78}.rk-top{background:#e5f6f3}.rk-rest{background:#fff0df}.rk-bar{display:flex;height:48px;border-radius:12px;overflow:hidden;margin-top:10px}.rk-found{width:45%;background:#159d91;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900}.rk-other{width:55%;background:#cfd9e9;color:#243b78;display:flex;align-items:center;justify-content:center;font-weight:900}@media(max-width:850px){.rk-flow{grid-template-columns:1fr}.rk-arrow{transform:rotate(90deg)}.rk-ranked{grid-template-columns:1fr}}</style><p class="ml-lead">استخدمنا ROC-AUC أو PR-AUC لمقارنة قدرة النماذج على ترتيب الحالات. الآن نريد استخدام هذا الترتيب في الواقع، لكن الفريق لا يستطيع مراجعة الجميع.</p><div class="rk-flow"><div class="rk-box"><strong>النموذج يرتب الحالات</strong>من أعلى احتمال إلى أقل احتمال</div><div class="rk-arrow">←</div><div class="rk-box"><strong>قدرة الفريق = k</strong>يمكن مراجعة أعلى 100 حالة فقط</div><div class="rk-arrow">←</div><div class="rk-box"><strong>Recall@100</strong>كم حالة إيجابية حقيقية وجدنا داخل أعلى 100؟</div></div><div class="rk-ranked"><div class="rk-top"><h3>أعلى 100 حالة — هذه هي k</h3><div class="rk-bar"><div class="rk-found">45 حالة حقيقية</div><div class="rk-other">55 حالة أخرى</div></div><p>النموذج وضع 45 حالة إيجابية حقيقية داخل القائمة التي يستطيع الفريق مراجعتها.</p></div><div class="rk-rest"><h3>خارج أعلى 100</h3><p><b>15 حالة إيجابية حقيقية</b> لم تدخل قائمة المراجعة.</p><p>إجمالي الحالات الإيجابية في البيانات = 60.</p></div></div><div class="ml-grid"><div class="ml-card"><h3>الحساب</h3><p class="ml-quote">Recall@100 = 45 ÷ 60 = 75%</p><p>استطعنا تغطية 75% من جميع الحالات الإيجابية ضمن قدرة مراجعة 100 حالة.</p></div><div class="ml-card orange"><h3>لماذا نحتاجه؟</h3><p>لأن بعض القرارات لها ميزانية ثابتة: عدد اتصالات، أطباء، مفتشين، أو زيارات يومية. <b>Recall@k</b> يقيس قيمة ترتيب النموذج عند هذه القدرة الفعلية.</p></div></div><div class="ml-note dark"><b>الفرق:</b> Recall العادي يعتمد على عتبة ويقيس جميع التوقعات الإيجابية. أما Recall@k فيأخذ أعلى <b>k</b> حالات فقط، حتى لو كانت احتمالاتها لا تتجاوز عتبة ثابتة.</div><div class="ml-note orange"><b>لا نستخدمه دائمًا:</b> إذا كان النظام سيتعامل مع كل حالة تتجاوز عتبة، نستخدم Recall العادي. نستخدم Recall@k عندما تكون القدرة محدودة بعدد معروف.</div>`);
  const recallAtKIndex = slides.findIndex(slide => slide.includes('<div class="slide-title">ما معنى Recall@k؟<'));
  if (recallAtKIndex >= 0) {
    slides[recallAtKIndex] = slides[recallAtKIndex].replace('ما معنى Recall@k؟', 'عندما لا نستطيع مراجعة الجميع: Recall@k');
  }
  revise('عندما لا نستطيع مراجعة الجميع: Recall@k', `<style>.rk-simple{max-width:1100px;margin:auto}.rk-simple-flow{display:grid;grid-template-columns:1fr 60px 1fr 60px 1fr;align-items:center;gap:8px;margin:22px 0}.rk-simple-box{background:#eef2fa;color:#243b78;border-radius:14px;padding:13px;text-align:center;min-height:92px;display:flex;flex-direction:column;justify-content:center}.rk-simple-box b{color:#243b78;font-size:1.1em}.rk-simple-arrow{text-align:center;color:#ef7d00;font-size:2em;font-weight:900}.rk-simple-bar{display:grid;grid-template-columns:45fr 55fr;height:58px;border-radius:14px;overflow:hidden;margin:18px 0 10px}.rk-simple-found,.rk-simple-other{display:flex;align-items:center;justify-content:center;font-weight:900}.rk-simple-found{background:#159d91;color:#fff}.rk-simple-other{background:#d9e1ef;color:#243b78}.rk-simple-result{display:grid;grid-template-columns:1fr 1fr;gap:16px}.rk-simple-result>div{border-radius:14px;padding:14px;text-align:center}.rk-simple-calc{background:#243b78;color:#fff!important}.rk-simple-why{background:#fff0df;color:#243b78}@media(max-width:820px){.rk-simple-flow{grid-template-columns:1fr}.rk-simple-arrow{transform:rotate(90deg)}.rk-simple-result{grid-template-columns:1fr}}</style><p class="ml-lead">النموذج يعطي كل حالة <b>احتمالًا</b>، ثم نرتب الحالات من أعلى احتمال إلى أقل احتمال. إذا كان الفريق يستطيع مراجعة عدد محدد فقط، نأخذ أول <b>k</b> حالات.</p><div class="rk-simple"><div class="rk-simple-flow"><div class="rk-simple-box"><b>1. احتمالات النموذج</b>0.94 · 0.91 · 0.87 · 0.82 …</div><div class="rk-simple-arrow">←</div><div class="rk-simple-box"><b>2. نرتبها</b>من الأعلى خطرًا إلى الأقل</div><div class="rk-simple-arrow">←</div><div class="rk-simple-box"><b>3. نأخذ أعلى k</b>الفريق يستطيع مراجعة 100 حالة</div></div><h3>ماذا وجدنا داخل أعلى 100 حالة؟</h3><div class="rk-simple-bar"><div class="rk-simple-found">45 حالة إيجابية حقيقية</div><div class="rk-simple-other">55 حالة أخرى</div></div><p>في البيانات كلها توجد <b>60 حالة إيجابية حقيقية</b>؛ وجدنا 45 منها داخل القائمة التي يستطيع الفريق مراجعتها.</p><div class="rk-simple-result"><div class="rk-simple-calc"><b>Recall@100</b><br>45 ÷ 60 = <b>75%</b></div><div class="rk-simple-why"><b>لماذا نستخدمه؟</b><br>لقياس كم حالة مهمة التقطنا ضمن قدرة الفريق الفعلية.</div></div></div><div class="ml-note dark"><b>k</b> هو عدد الحالات التي نستطيع التعامل معها، مثل 100 اتصال أو 50 فحصًا يوميًا.</div>`);

  insertSequenceAfter('التقييم يتغير حسب نوع المسألة', [
    content('ما هي البواقي (Residuals)؟', `<p class="ml-lead">في مسائل الانحدار نتوقع رقمًا، مثل مدة الإصلاح. <b>الباقي</b> هو مقدار الخطأ واتجاهه في حالة واحدة.</p><div class="ml-note dark" style="font-size:1.2em;text-align:center"><b>الباقي = القيمة الحقيقية − القيمة التي توقعها النموذج</b></div><table class="ml-table"><tr><th>الحقيقة</th><th>توقع النموذج</th><th>الباقي</th><th>ماذا يعني؟</th></tr><tr><td>8 ساعات</td><td>6.5 ساعات</td><td><b>+1.5</b></td><td>النموذج أعطى مدة أقل من الحقيقة بمقدار 1.5 ساعة</td></tr><tr><td>4 ساعات</td><td>5 ساعات</td><td><b>−1</b></td><td>النموذج أعطى مدة أكبر من الحقيقة بساعة</td></tr><tr><td>6 ساعات</td><td>6 ساعات</td><td><b>0</b></td><td>التوقع مطابق للحقيقة</td></tr></table><div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;margin-top:18px;text-align:center"><div class="ml-card"><h3>باقٍ موجب</h3><p>الحقيقة أكبر من التوقع.<br>النموذج <b>قلّل</b> القيمة.</p></div><div class="ml-card orange"><h3>باقٍ يساوي صفرًا</h3><p>الحقيقة تساوي التوقع.<br>لا يوجد خطأ في هذه الحالة.</p></div><div class="ml-card"><h3>باقٍ سالب</h3><p>الحقيقة أصغر من التوقع.<br>النموذج <b>بالغ</b> في القيمة.</p></div></div><div class="ml-note orange">لا نحكم من باقٍ واحد. نرسم بواقي جميع الحالات لنبحث عن نمط متكرر؛ وهنا تأتي الشريحة التالية.</div>`)
  ]);

  insertSequenceAfter('ما هي البواقي (Residuals)؟', [
    content('كيف يتحول الباقي إلى نقطة على الرسم؟', `<style>.res-bridge{display:grid;grid-template-columns:.9fr 1.25fr;gap:24px;align-items:center}.res-bridge svg{width:100%;height:390px;background:#f6f8fc;border-radius:18px}.rb-axis{stroke:#243b78;stroke-width:4}.rb-grid{stroke:#d5dcea;stroke-width:1}.rb-zero{stroke:#ef7d00;stroke-width:4;stroke-dasharray:9 7}.rb-guide{stroke:#159d91;stroke-width:2;stroke-dasharray:5 5}.rb-point{fill:#159d91;stroke:#fff;stroke-width:5}.rb-text{fill:#243b78;font-size:17px;font-weight:800}.rb-value{fill:#087f79;font-size:18px;font-weight:900}@media(max-width:900px){.res-bridge{grid-template-columns:1fr}.res-bridge svg{height:330px}}</style><p class="ml-lead">كل حالة تصبح نقطة واحدة. نأخذ <b>توقع النموذج</b> للمحور الأفقي، ونأخذ <b>الباقي = الحقيقة − التوقع</b> للمحور الرأسي.</p><div class="res-bridge"><div><table class="ml-table"><tr><th>الحالة</th><th>التوقع x</th><th>الباقي y</th></tr><tr><td>أ</td><td>6.5</td><td>+1.5</td></tr><tr><td>ب</td><td>5</td><td>−1</td></tr><tr><td>ج</td><td>6</td><td>0</td></tr></table><div class="ml-card"><h3>كيف أحدد مكان النقطة؟</h3><p><b>الحالة أ:</b> أتحرك أفقيًا إلى توقع 6.5، ثم أصعد إلى باقي +1.5.</p><p><b>الحالة ب:</b> أتحرك إلى توقع 5، ثم أنزل إلى باقي −1.</p><p><b>الحالة ج:</b> باقيها صفر، فتقع على خط الصفر.</p></div></div><svg viewBox="0 0 620 410" role="img" aria-label="رسم يوضح موقع ثلاثة بواقي موجبة وسالبة وصفرية"><line class="rb-axis" x1="75" y1="350" x2="575" y2="350"/><line class="rb-axis" x1="75" y1="45" x2="75" y2="350"/><line class="rb-zero" x1="75" y1="205" x2="575" y2="205"/><line class="rb-grid" x1="75" y1="105" x2="575" y2="105"/><line class="rb-grid" x1="75" y1="305" x2="575" y2="305"/><line class="rb-guide" x1="420" y1="105" x2="420" y2="350"/><line class="rb-guide" x1="270" y1="305" x2="270" y2="350"/><line class="rb-guide" x1="370" y1="205" x2="370" y2="350"/><circle class="rb-point" cx="420" cy="105" r="12"/><circle class="rb-point" cx="270" cy="305" r="12"/><circle class="rb-point" cx="370" cy="205" r="12"/><text class="rb-value" x="440" y="95">أ: +1.5</text><text class="rb-value" x="288" y="298">ب: −1</text><text class="rb-value" x="388" y="197">ج: 0</text><text class="rb-text" x="325" y="394" text-anchor="middle">توقع النموذج بالساعات ←</text><text class="rb-text" x="24" y="205" text-anchor="middle" transform="rotate(-90 24 205)">الباقي: الحقيقة − التوقع</text><text class="rb-text" x="67" y="98" text-anchor="end">موجب</text><text class="rb-text" x="67" y="211" text-anchor="end">صفر</text><text class="rb-text" x="67" y="312" text-anchor="end">سالب</text></svg></div><div class="ml-note dark">عندما نرسم بواقي جميع الحالات، لا نقرأ كل نقطة وحدها؛ نبحث عن <b>الشكل العام</b>: هل النقاط عشوائية حول الصفر، أم تصنع قمعًا أو منحنى؟</div>`)
  ]);

  revise('MAE: متوسط الخطأ المطلق', `<p class="ml-lead">رسم البواقي يساعدنا على رؤية <b>شكل الأخطاء</b>، لكننا نحتاج أيضًا رقمًا واحدًا يلخص: كم يبتعد توقع النموذج عن الحقيقة عادةً؟ هنا نصل إلى <b>MAE</b>.</p><div class="ml-grid"><div class="ml-card"><h3>1. لدينا بواقي كثيرة</h3><p class="ml-quote">+2 · −5 · +1</p><p>كل رقم يمثل خطأ حالة واحدة.</p></div><div class="ml-card orange"><h3>2. لماذا لا نأخذ متوسطها مباشرة؟</h3><p class="ml-quote">(+2 − 5 + 1) ÷ 3 = −0.67</p><p>الموجب والسالب ألغى بعضهما بعضًا، مع أن لدينا خطأ حجمه 5.</p></div><div class="ml-card"><h3>3. نزيل الإشارة ثم نأخذ المتوسط</h3><p class="ml-quote">|+2|، |−5|، |+1| = 2، 5، 1</p><p>وهذا هو معنى <b>الخطأ المطلق</b>.</p></div></div><div class="ml-note dark" style="text-align:center;font-size:1.15em"><b>MAE = (2 + 5 + 1) ÷ 3 = 2.67</b></div><table class="ml-table"><tr><th>الحقيقة</th><th>التوقع</th><th>الباقي</th><th>الخطأ المطلق</th></tr><tr><td>10</td><td>8</td><td>+2</td><td>2</td></tr><tr><td>20</td><td>25</td><td>−5</td><td>5</td></tr><tr><td>30</td><td>29</td><td>+1</td><td>1</td></tr></table><div class="ml-note orange">إذا كان الهدف «ساعات»، نقول: يبتعد توقع النموذج عن الحقيقة في المتوسط بنحو <b>2.67 ساعة</b>. MAE يعطينا حجم الخطأ، بينما رسم البواقي يكشف نمطه واتجاهه.</div>`);
  const maeStoryIndex = slides.findIndex(slide => slide.includes('<div class="slide-title">MAE: متوسط الخطأ المطلق<'));
  if (maeStoryIndex >= 0) {
    slides[maeStoryIndex] = slides[maeStoryIndex].replace('MAE: متوسط الخطأ المطلق', 'من البواقي إلى MAE: متوسط حجم الخطأ');
  }
  revise('من البواقي إلى MAE: متوسط حجم الخطأ', `<style>.mae-short{display:grid;grid-template-columns:1fr auto 1fr auto 1fr;gap:12px;align-items:center;margin:30px 0}.mae-short-box{background:#eef2fa;color:#243b78;border-radius:15px;padding:16px;text-align:center;min-height:125px;display:flex;flex-direction:column;justify-content:center}.mae-short-box b{color:#243b78;font-size:1.1em}.mae-short-arrow{color:#ef7d00;font-size:2em;font-weight:900}.mae-formula{max-width:760px;margin:20px auto;background:#243b78;color:#fff!important;border-radius:16px;padding:18px;text-align:center;font-size:1.25em;font-weight:900}@media(max-width:850px){.mae-short{grid-template-columns:1fr}.mae-short-arrow{transform:rotate(90deg)}}</style><p class="ml-lead">البواقي تصف أخطاء الحالات واحدةً واحدة. نحتاج رقمًا واحدًا يلخص <b>حجم الخطأ المعتاد</b>.</p><div class="mae-short"><div class="mae-short-box"><b>البواقي</b><span>+2 · −5 · +1</span></div><div class="mae-short-arrow">←</div><div class="mae-short-box"><b>نزيل الإشارة</b><span>2 · 5 · 1</span><small>حتى لا يلغي الموجب السالب</small></div><div class="mae-short-arrow">←</div><div class="mae-short-box"><b>نحسب المتوسط</b><span>(2 + 5 + 1) ÷ 3</span></div></div><div class="mae-formula">MAE = 2.67</div><div class="ml-note orange">إذا كان الهدف بالساعات: يبتعد توقع النموذج عن الحقيقة في المتوسط بنحو <b>2.67 ساعة</b>.</div>`);

  revise('RMSE: الأخطاء الكبيرة تؤلم أكثر', `<p class="ml-lead">أعطانا MAE متوسط حجم الخطأ، لكنه يزيد بصورة خطية. ماذا لو كان الخطأ الكبير مؤذيًا أكثر بكثير من عدة أخطاء صغيرة؟ هنا نحتاج <b>RMSE</b>.</p><div class="ml-grid"><div class="ml-card"><h3>MAE: وزن خطي</h3><p class="ml-quote">الأخطاء: 2 · 5 · 1</p><p>الخطأ 5 يأخذ قيمة 5 فقط.</p><p><b>MAE = 2.67</b></p></div><div class="ml-card orange"><h3>RMSE: يضخّم الخطأ الكبير</h3><p class="ml-quote">المربعات: 4 · 25 · 1</p><p>الخطأ 5 أصبح 25، فأصبح تأثيره أكبر.</p><p><b>RMSE = √10 = 3.16</b></p></div></div><div class="ml-note dark"><b>لماذا نأخذ الجذر في النهاية؟</b> لأن التربيع غيّر الوحدة إلى «ساعة²». الجذر يعيد النتيجة إلى الساعات حتى نستطيع تفسيرها.</div><table class="ml-table"><tr><th>إذا كان القرار يهتم بـ…</th><th>نبدأ بـ…</th></tr><tr><td>الخطأ المعتاد بطريقة سهلة التفسير</td><td><b>MAE</b></td></tr><tr><td>معاقبة الأخطاء الكبيرة بقوة</td><td><b>RMSE</b></td></tr></table><div class="ml-note orange">كلاهما: <b>الأقل أفضل</b>. لا نختار RMSE لأنه «أحدث»، بل لأن تكلفة الخطأ الكبير في المشكلة تبرر تضخيمه.</div>`);
  const rmseStoryIndex = slides.findIndex(slide => slide.includes('<div class="slide-title">RMSE: الأخطاء الكبيرة تؤلم أكثر<'));
  if (rmseStoryIndex >= 0) {
    slides[rmseStoryIndex] = slides[rmseStoryIndex].replace('RMSE: الأخطاء الكبيرة تؤلم أكثر', 'لماذا نحتاج RMSE بعد MAE؟');
  }

  revise('R²: كم تحسنّا عن توقع المتوسط؟', `<p class="ml-lead">MAE وRMSE يخبراننا بحجم الخطأ، لكنهما لا يجيبان: <b>هل النموذج أفضل من تخمين بسيط؟</b> يستخدم R² توقع المتوسط كخط أساس للمقارنة.</p><div class="ml-grid"><div class="ml-card"><h3>الخط الأساسي: توقع المتوسط للجميع</h3><p>المدد الحقيقية: <b>10، 20، 30 ساعة</b></p><p>متوسطها = <b>20 ساعة</b></p><p>التوقع الساذج: <b>20، 20، 20</b></p><p class="ml-quote">مجموع مربعات الأخطاء = 200</p></div><div class="ml-card orange"><h3>نموذجنا</h3><p>توقعاته: <b>12، 18، 27 ساعة</b></p><p>أصبح أقرب إلى كل حالة بدل إعطاء الجميع 20.</p><p class="ml-quote">مجموع مربعات الأخطاء = 17</p></div></div><div class="ml-note dark" style="text-align:center;font-size:1.16em"><b>R² = 1 − (خطأ النموذج ÷ خطأ توقع المتوسط)</b><br>R² = 1 − (17 ÷ 200) = <b>0.915</b></div><div class="ml-grid"><div class="ml-card"><h3>كيف أقرأ النتيجة؟</h3><ul><li><b>R² = 1:</b> توقع مثالي.</li><li><b>R² = 0:</b> لم نتفوق على توقع المتوسط.</li><li><b>R² أقل من 0:</b> أسوأ من توقع المتوسط.</li></ul></div><div class="ml-card orange"><h3>ماذا تعني 0.915؟</h3><p>النموذج قلّل الخطأ كثيرًا مقارنة بتوقع 20 للجميع. نقول إنه يفسر نحو <b>91.5%</b> من الاختلاف مقارنة بخط الأساس.</p><p>ولا تعني أن توقعاته صحيحة بنسبة 91.5%.</p></div></div>`);
  const r2StoryIndex = slides.findIndex(slide => slide.includes('<div class="slide-title">R²: كم تحسنّا عن توقع المتوسط؟<'));
  if (r2StoryIndex >= 0) {
    slides[r2StoryIndex] = slides[r2StoryIndex].replace('R²: كم تحسنّا عن توقع المتوسط؟', 'لماذا نحتاج R² بعد قياس حجم الخطأ؟');
  }
  revise('لماذا نحتاج R² بعد قياس حجم الخطأ؟', `<style>.r2-simple{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin:22px 0}.r2-simple-box{border-radius:17px;padding:20px;text-align:center;color:#243b78}.r2-baseline{background:#eef2fa}.r2-model{background:#e5f6f3}.r2-simple-box strong{display:block;font-size:1.25em;color:#243b78;margin-bottom:10px}.r2-scale{display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-top:22px}.r2-score{border-radius:15px;padding:18px;text-align:center;background:#eef2fa;color:#243b78}.r2-score b{display:block;font-size:1.6em;color:#243b78}.r2-score.good{background:#e5f6f3}.r2-score.bad{background:#fff0df}@media(max-width:800px){.r2-simple,.r2-scale{grid-template-columns:1fr}}</style><p class="ml-lead"><b>R² درجة مقارنة فقط:</b> هل نموذجنا أفضل من طريقة بسيطة تتوقع المتوسط نفسه للجميع؟</p><div class="r2-simple"><div class="r2-simple-box r2-baseline"><strong>الطريقة البسيطة</strong><p>الحقيقة: 10، 20، 30 ساعة</p><p>نتوقع للجميع المتوسط: <b>20، 20، 20</b></p><p>هذه هي نقطة المقارنة.</p></div><div class="r2-simple-box r2-model"><strong>نموذجنا</strong><p>توقع: <b>12، 18، 27</b></p><p>توقعاته أقرب إلى الحقائق من إعطاء الجميع 20.</p><p>إذن R² سيكون قريبًا من 1.</p></div></div><div class="r2-scale"><div class="r2-score good"><b>R² = 1</b>توقع مثالي</div><div class="r2-score"><b>R² = 0</b>مثل توقع المتوسط</div><div class="r2-score bad"><b>R² سالب</b>أسوأ من توقع المتوسط</div></div><div class="ml-note dark"><b>مثال: R² = 0.92</b> يعني أن النموذج أفضل بكثير من توقع المتوسط. لا يعني أن «دقته 92%».</div>`);

  revise('نموذجان: لماذا نحتاج أكثر من مقياس؟', `<style>.metric-choice{display:grid;grid-template-columns:1fr 1fr;gap:22px;margin:24px 0}.metric-model{border-radius:18px;padding:20px;text-align:center;color:#243b78}.metric-model.a{background:#e5f6f3}.metric-model.b{background:#fff0df}.metric-model h3{color:#243b78;margin-top:0}.metric-number{font-size:1.25em;font-weight:900;margin:9px 0}.metric-verdict{max-width:850px;margin:20px auto;background:#243b78;color:#fff!important;border-radius:16px;padding:18px;text-align:center;font-weight:900}@media(max-width:780px){.metric-choice{grid-template-columns:1fr}}</style><p class="ml-lead">لدينا نموذجان لتقدير مدة الإصلاح. لا نبحث عن أصغر رقم فقط؛ نسأل: <b>أي نوع من الخطأ يهمنا؟</b></p><div class="metric-choice"><div class="metric-model a"><h3>النموذج أ: أكثر استقرارًا</h3><div class="metric-number">MAE = 2.8 ساعة</div><div class="metric-number">RMSE = 3.6 ساعة</div><p>الرقمان متقاربان، لذلك لا تظهر أخطاء ضخمة كثيرة.</p></div><div class="metric-model b"><h3>النموذج ب: أفضل غالبًا، لكنه يخاطر</h3><div class="metric-number">MAE = 2.5 ساعة</div><div class="metric-number">RMSE = 6.9 ساعة</div><p>خطؤه المعتاد أقل قليلًا، لكن RMSE الكبير يكشف وجود أخطاء كبيرة مؤذية.</p></div></div><div class="metric-verdict">إذا كان الخطأ الكبير خطرًا أو مكلفًا، نختار النموذج أ. إذا كان المهم هو تقليل الخطأ المعتاد فقط، فقد نختار النموذج ب.</div><div class="ml-note orange"><b>الخلاصة:</b> MAE يصف الخطأ المعتاد، وRMSE ينبهنا إلى الأخطاء الكبيرة. نختار حسب تكلفة الخطأ في العمل.</div>`);
  const metricChoiceIndex = slides.findIndex(slide => slide.includes('<div class="slide-title">نموذجان: لماذا نحتاج أكثر من مقياس؟<'));
  if (metricChoiceIndex >= 0) {
    slides[metricChoiceIndex] = slides[metricChoiceIndex].replace('نموذجان: لماذا نحتاج أكثر من مقياس؟', 'أي نموذج نختار؟ مثال بسيط');
  }

  revise('Ridge وLasso: تنظيم الانحدار', `<p class="ml-lead">أحيانًا يعطي الانحدار وزنًا كبيرًا جدًا لبعض الخصائص، فيتعلق بتفاصيل بيانات التدريب ويضعف مع الحالات الجديدة. <b>التنظيم (Regularization)</b> يشجعه على استخدام أوزان أصغر وأبسط.</p><div class="ml-grid"><div class="ml-card"><h3>Ridge — تنظيم L2</h3><p><b>يصغّر جميع الأوزان</b>، لكنه يحتفظ بالخصائص غالبًا.</p><p class="ml-quote">قبل: 12، −9، 3<br>بعد: 5، −4، 1</p><p>مناسب كبداية عندما نتوقع أن معظم الخصائص قد تكون مفيدة بدرجات مختلفة.</p></div><div class="ml-card orange"><h3>Lasso — تنظيم L1</h3><p><b>يصغّر الأوزان</b>، وقد يجعل وزن بعض الخصائص يساوي صفرًا.</p><p class="ml-quote">قبل: 12، −9، 3<br>بعد: 6، −4، 0</p><p>قد يساعد على استبعاد خصائص ضعيفة، لكنه قد يختار واحدة فقط من خصائص متشابهة.</p></div></div><div class="ml-note dark"><b>الفكرة في سطر:</b> Ridge يقول «استخدم الخصائص بهدوء»، وLasso يقول «استخدم المهم وقد تجاهل الضعيف».</div><div class="ml-note orange">لا نختار بينهما بالتخمين. نضعهما داخل Pipeline، ونقارن أداءهما على بيانات التحقق أو Cross-Validation.</div>`);
  const regularizationIndex = slides.findIndex(slide => slide.includes('<div class="slide-title">Ridge وLasso: تنظيم الانحدار<'));
  if (regularizationIndex >= 0) {
    slides[regularizationIndex] = slides[regularizationIndex].replace('Ridge وLasso: تنظيم الانحدار', 'كيف نجعل الانحدار أبسط؟ Ridge وLasso');
  }
  revise('كيف نجعل الانحدار أبسط؟ Ridge وLasso', `<p class="ml-lead"><b>التنظيم (Regularization)</b> طريقة تقلل اعتماد النموذج المبالغ فيه على خصائص أو أوزان معينة. Ridge وLasso طريقتان شائعتان للتنظيم.</p><p><b>مثال:</b> نريد توقع مدة إصلاح جهاز باستخدام مستوى الضرر، عمر الجهاز، خبرة الفني، ويوم الأسبوع.</p><div class="ml-grid"><div class="ml-card"><h3>Ridge — يصغّر الأهمية</h3><p>إذا بالغ النموذج في أثر عمر الجهاز، يقلل Ridge هذا الأثر، لكنه يحتفظ بجميع الخصائص غالبًا.</p><ul><li>مستوى الضرر: مهم.</li><li>عمر الجهاز: أثر أصغر.</li><li>خبرة الفني: مهمة.</li><li>يوم الأسبوع: أثر صغير.</li></ul></div><div class="ml-card orange"><h3>Lasso — قد يتجاهل خاصية</h3><p>إذا لم يساعد يوم الأسبوع في التوقع، قد يجعل Lasso وزنه صفرًا.</p><ul><li>مستوى الضرر: يستخدمه.</li><li>عمر الجهاز: يستخدمه.</li><li>خبرة الفني: يستخدمها.</li><li>يوم الأسبوع: قد يستبعده.</li></ul></div></div><div class="ml-note dark"><b>الخلاصة:</b> Ridge يخفف الأوزان، وLasso قد يجعل بعض الأوزان صفرًا. كلاهما Regularization يساعد على تقليل Overfitting.</div>`);

  // تبسيط بقية اليوم الثالث والرابع: الحاجة أولًا، ثم تعريف قصير، ثم مثال واقعي.
  revise('نقص التخصيص', `<p class="ml-lead"><b>نقص التخصيص (Underfitting)</b> يعني أن النموذج أبسط من المشكلة، لذلك لا يتعلم النمط حتى من بيانات التدريب.</p><div class="ml-grid"><div class="ml-card"><h3>مثال</h3><p>نستخدم خطًا مستقيمًا لتوقع علاقة منحنية بين سرعة المركبة واستهلاك الوقود.</p><p>النتيجة: أخطاء كبيرة على التدريب وعلى البيانات الجديدة.</p></div><div class="ml-card orange"><h3>كيف أعرفه؟</h3><p><b>أداء التدريب ضعيف</b> و<b>أداء التحقق ضعيف</b>.</p><p>الحل المحتمل: خصائص أفضل أو نموذج أكثر مرونة.</p></div></div><div class="ml-note dark">المشكلة هنا ليست أن النموذج حفظ البيانات؛ المشكلة أنه لم يتعلمها أصلًا.</div>`);

  revise('فرط التخصيص', `<p class="ml-lead"><b>فرط التخصيص (Overfitting)</b> يعني أن النموذج حفظ تفاصيل التدريب، لكنه لا ينجح بنفس المستوى مع حالات جديدة.</p><div class="ml-grid"><div class="ml-card"><h3>مثال</h3><p>شجرة عميقة تحفظ استثناءات كل عميل في التدريب.</p><p>التدريب: <b>99%</b> · التحقق: <b>72%</b></p></div><div class="ml-card orange"><h3>كيف أعرفه؟</h3><p>أداء التدريب قوي، لكن أداء التحقق أضعف بكثير.</p><p>الحل المحتمل: تبسيط النموذج، تنظيمه، أو جمع بيانات مفيدة.</p></div></div><div class="ml-note dark">الفرق الكبير بين التدريب والتحقق هو علامة الإنذار الأساسية.</div>`);

  revise('نقص التخصيص', `<style>.fit-simple{display:grid;grid-template-columns:1fr 1fr;gap:22px;margin:22px 0}.fit-scene{border-radius:18px;padding:22px;text-align:center;color:#243b78;background:#eef2fa}.fit-score{font-size:1.25em;font-weight:900;margin:14px 0;color:#243b78}.fit-meter{height:22px;background:#d8e0ed;border-radius:12px;overflow:hidden;margin-top:8px}.fit-meter span{display:block;height:100%;background:#ef7d00;border-radius:12px}@media(max-width:800px){.fit-simple{grid-template-columns:1fr}}</style><p class="ml-lead"><b>Underfitting</b> يعني: النموذج <b>لم يفهم النمط بما يكفي</b>.</p><div class="fit-simple"><div class="fit-scene"><h3>تشبيه الطالب</h3><p>طالب لم يفهم الدرس، لذلك أخطأ في تمارين المذاكرة وفي الاختبار الجديد.</p><div class="fit-score">المذاكرة 58% · الاختبار 55%</div></div><div class="fit-scene"><h3>مثال نموذج</h3><p>نموذج بسيط يستخدم «المدينة» فقط لتوقع توقف العميل، ويتجاهل الطلبات وأيام الغياب.</p><div class="fit-score">التدريب 60% · التحقق 57%</div></div></div><div class="ml-note dark"><b>كيف أعرفه؟</b> الأداء ضعيف في التدريب والتحقق معًا؛ أي أن النموذج لم يتعلم حتى أمثلة التدريب جيدًا.</div><div class="ml-note orange"><b>ماذا نفعل؟</b> نضيف خصائص مفيدة أو نستخدم نموذجًا أقدر على تعلم العلاقة.</div>`);
  const underfitIndex = slides.findIndex(slide => slide.includes('<div class="slide-title">نقص التخصيص<'));
  if (underfitIndex >= 0) slides[underfitIndex] = slides[underfitIndex].replace('نقص التخصيص', 'Underfitting: النموذج لم يتعلم بما يكفي');

  revise('فرط التخصيص', `<style>.overfit-simple{display:grid;grid-template-columns:1fr 1fr;gap:22px;margin:22px 0}.overfit-scene{border-radius:18px;padding:22px;text-align:center;color:#243b78;background:#fff0df}.overfit-score{font-size:1.25em;font-weight:900;margin:14px 0;color:#243b78}@media(max-width:800px){.overfit-simple{grid-template-columns:1fr}}</style><p class="ml-lead"><b>Overfitting</b> يعني: النموذج <b>حفظ أمثلة التدريب بدل أن يتعلم قاعدة عامة</b>.</p><div class="overfit-simple"><div class="overfit-scene"><h3>تشبيه الطالب</h3><p>طالب حفظ إجابات تمارين المذاكرة، لكنه لم يفهم الفكرة؛ لذلك فشل عندما تغيرت الأسئلة.</p><div class="overfit-score">المذاكرة 99% · الاختبار 65%</div></div><div class="overfit-scene"><h3>مثال نموذج</h3><p>شجرة عميقة تحفظ تفاصيل عملاء التدريب، لكنها تخطئ مع عملاء جدد.</p><div class="overfit-score">التدريب 99% · التحقق 72%</div></div></div><div class="ml-note dark"><b>كيف أعرفه؟</b> التدريب ممتاز، لكن التحقق أضعف بكثير. الفجوة الكبيرة تعني أن النموذج لا يعمم جيدًا.</div><div class="ml-note orange"><b>ماذا نفعل؟</b> نبسّط النموذج، نستخدم Regularization، أو نجمع بيانات أكثر تنوعًا.</div>`);
  const overfitIndex = slides.findIndex(slide => slide.includes('<div class="slide-title">فرط التخصيص<'));
  if (overfitIndex >= 0) slides[overfitIndex] = slides[overfitIndex].replace('فرط التخصيص', 'Overfitting: النموذج حفظ التدريب');

  revise('التحقق يجب أن يشمل Pipeline كاملًا', `<p class="ml-lead">في كل جولة من التحقق المتقاطع يجب أن يتعلم <b>التنظيف والترميز والتحجيم والنموذج</b> من طيات التدريب فقط.</p>${flow([['طيات التدريب','تعلم الوسيط والفئات والمقياس'],['طية التحقق','تطبيق القواعد فقط'],['النموذج','تدريب ثم تقييم'],['الجولة التالية','نغيّر طية التحقق']])}<div class="ml-grid"><div class="ml-card"><h3>لماذا Pipeline؟</h3><p>ينفذ هذا الترتيب تلقائيًا في كل جولة، فلا يتعلم التجهيز من طية التحقق.</p></div><div class="ml-card orange"><h3>مثال خطأ</h3><p>حساب متوسط جميع البيانات قبل Cross-Validation يجعل طية التحقق تؤثر في التدريب؛ وهذا تسريب.</p></div></div><div class="ml-note dark">بعد فهم الفكرة نستخدم <b>cross_validate(pipeline, ...)</b>؛ لا يحتاج الطالب إلى تشغيل fit وtransform يدويًا لكل طية.</div>`);

  revise('مقارنة عادلة بين النماذج', `<p class="ml-lead">حتى تكون المقارنة عادلة، نغيّر <b>النموذج فقط</b> ونثبت بقية الشروط.</p><table class="ml-table"><tr><th>ما الذي نثبته؟</th><th>مثال</th></tr><tr><td>البيانات والطيات</td><td>Logistic وRandom Forest يريان الحالات نفسها</td></tr><tr><td>المعالجة</td><td>Pipeline نفسها</td></tr><tr><td>المقياس</td><td>PR-AUC للنموذجين</td></tr></table><div class="ml-note orange">إذا غيّرنا البيانات أو المقياس مع النموذج، فلن نعرف هل التحسن سببه النموذج أم اختلاف التجربة.</div>`);

  revise('منحنى التعلم: هل نحتاج بيانات أكثر؟', `<p class="ml-lead">منحنى التعلم يعيد تدريب النموذج مع كميات متزايدة من البيانات، ثم يقارن أداء التدريب والتحقق.</p><div class="ml-grid"><div class="ml-card"><h3>كلاهما ضعيف</h3><p>التدريب ضعيف والتحقق ضعيف.</p><p><b>المعنى:</b> النموذج أو الخصائص أبسط من المطلوب؛ بيانات أكثر وحدها قد لا تكفي.</p></div><div class="ml-card orange"><h3>التدريب قوي والتحقق أضعف</h3><p>توجد فجوة واضحة.</p><p><b>المعنى:</b> فرط تخصيص؛ قد تساعد بيانات أكثر أو تنظيم أقوى.</p></div><div class="ml-card"><h3>يتقاربان عند مستوى جيد</h3><p>النتيجتان جيدتان ومتقاربتان.</p><p><b>المعنى:</b> التعميم مستقر مبدئيًا.</p></div></div>`);

  revise('Bagging مقابل Boosting', `<p class="ml-lead">الطريقتان تجمعان عدة أشجار، لكنهما تعملان بطريقة مختلفة.</p><div class="ml-grid"><div class="ml-card"><h3>Bagging: آراء مستقلة</h3><p>ندرب أشجارًا كثيرة على عينات مختلفة، ثم نجمع أصواتها.</p><p><b>مثال:</b> خمسة خبراء يحللون الحالة كلٌ على حدة، ثم نأخذ رأي الأغلبية.</p><p>أشهر مثال: <b>Random Forest</b>.</p></div><div class="ml-card orange"><h3>Boosting: تصحيح متتابع</h3><p>نبني الأشجار واحدة بعد الأخرى؛ كل شجرة تحاول إصلاح أخطاء ما قبلها.</p><p><b>مثال:</b> خبير أول يجيب، والثاني يراجع أخطاءه، والثالث يكمل التصحيح.</p><p>أشهر مثال: <b>XGBoost</b>.</p></div></div>`);

  revise('Random Forest: الاسم الأكاديمي وآلية العمل', `<p class="ml-lead"><b>Random Forest</b> غابة من أشجار القرار. بدل الاعتماد على شجرة واحدة قد تخطئ، نبني أشجارًا متنوعة ثم نجمع نتائجها.</p>${flow([['عينات مختلفة','كل شجرة ترى جزءًا مختلفًا'],['خصائص مختلفة','الأسئلة لا تتطابق تمامًا'],['توقعات متعددة','كل شجرة تعطي رأيًا'],['النتيجة','تصويت للتصنيف أو متوسط للانحدار']])}<div class="ml-note orange"><b>مثال:</b> أربع أشجار تقول «سيتوقف العميل» وشجرة تقول «سيستمر»؛ النتيجة النهائية «سيتوقف».</div>`);

  revise('Gradient Boosting: الاسم الأكاديمي وآلية العمل', `<p class="ml-lead"><b>Gradient Boosting</b> يبني الأشجار بالتتابع. كل شجرة جديدة تركز على الحالات التي لم يتعامل معها النموذج جيدًا.</p>${flow([['توقع أولي','قد يكون ضعيفًا'],['نحدد الأخطاء','أين بالغ أو قلّل؟'],['شجرة جديدة','تتعلم جزءًا من التصحيح'],['نجمع التصحيحات','يتحسن التوقع تدريجيًا']])}<div class="ml-note orange"><b>مثال:</b> إذا قلّل النموذج خطر العملاء كثيري الغياب، تركز الجولة التالية على تصحيح هذه الحالات.</div><div class="ml-note dark">لا تمحو الشجرة الجديدة ما قبلها؛ تضيف تصحيحًا صغيرًا إليه.</div>`);

  revise('XGBoost: ما اسمه وما الذي يميّزه؟', `<p class="ml-lead"><b>XGBoost</b> اختصار لـExtreme Gradient Boosting. هو تطبيق عملي ومحسّن لفكرة Boosting، وليس نوع تعلم مختلفًا.</p><div class="ml-grid"><div class="ml-card"><h3>ماذا يضيف؟</h3><ul><li>تنظيم يقلل تعقيد الأشجار.</li><li>معدل تعلم يجعل التصحيح تدريجيًا.</li><li>استخدام جزء من الصفوف والخصائص.</li><li>إيقاف مبكر عند توقف التحسن.</li></ul></div><div class="ml-card orange"><h3>متى نجربه؟</h3><p>بعد وجود Pipeline وتقييم صحيح وخط أساس واضح، ونريد اختبار هل التعقيد الإضافي يعطي تحسنًا ثابتًا.</p><p><b>ليس أفضل دائمًا.</b></p></div></div>`);

  revise('Random Forest وGradient Boosting وXGBoost', `<table class="ml-table"><tr><th>النموذج</th><th>الفكرة ببساطة</th><th>متى أبدأ به؟</th></tr><tr><td><b>Random Forest</b></td><td>أشجار مستقلة تصوّت</td><td>خط أساس شجري قوي وسهل نسبيًا</td></tr><tr><td><b>Gradient Boosting</b></td><td>أشجار متتابعة تصحح الأخطاء</td><td>عندما نحتاج تحسينًا تدريجيًا</td></tr><tr><td><b>XGBoost</b></td><td>Boosting محسّن مع تنظيم وأدوات إضافية</td><td>عندما يبرر التحسن المتوقع زيادة الضبط والتعقيد</td></tr></table><div class="ml-note dark">نقارنها بالطيات والمقياس نفسيهما؛ لا نختار الاسم الأشهر تلقائيًا.</div>`);

  revise('خريطة معاملات Random Forest وXGBoost', `<p class="ml-lead">المعامل الفائق (Hyperparameter) اختيار نحدده قبل التدريب ليغيّر مرونة النموذج.</p><table class="ml-table"><tr><th>المعامل</th><th>معناه البسيط</th><th>إذا زاد</th></tr><tr><td>n_estimators</td><td>عدد الأشجار</td><td>وقت أطول، وقد يصبح الأداء أكثر ثباتًا</td></tr><tr><td>max_depth</td><td>عمق كل شجرة</td><td>تفاصيل أكثر وخطر فرط تخصيص أكبر</td></tr><tr><td>learning_rate</td><td>حجم تصحيح كل جولة في XGBoost</td><td>تعلم أسرع، لكن قد نتجاوز الحل الأفضل</td></tr></table><div class="ml-note orange"><b>مثال:</b> شجرة بعمق 2 تسأل أسئلة قليلة، وعمق 15 يسمح بسلسلة طويلة من الأسئلة وقد يحفظ التدريب.</div>`);

  revise('الإيقاف المبكر (Early Stopping)', `<p class="ml-lead">في Boosting نضيف أشجارًا جولة بعد جولة. نتوقف عندما لا يتحسن أداء التحقق؛ لأن إضافة أشجار أخرى قد تهدر الوقت وتزيد فرط التخصيص.</p>${flow([['50 شجرة','الأداء يتحسن'],['80 شجرة','ما زال يتحسن'],['110 أشجار','أفضل نتيجة'],['بعدها','لا تحسن'],['القرار','نحتفظ بالجولة 110']])}<div class="ml-note orange">نراقب مجموعة تحقق، وليس مجموعة الاختبار النهائي.</div>`);

  revise('تحليل الأخطاء حسب الشرائح', `<p class="ml-lead">النتيجة العامة قد تبدو جيدة، لكنها قد تخفي ضعفًا في مجموعة محددة. لذلك نقسم النتائج إلى <b>شرائح (Slices)</b>.</p><table class="ml-table"><tr><th>الشريحة</th><th>Recall</th><th>ماذا نلاحظ؟</th></tr><tr><td>الرياض</td><td>82%</td><td>أداء جيد</td></tr><tr><td>جدة</td><td>79%</td><td>قريب من المتوسط</td></tr><tr><td>المدن الأقل تمثيلًا</td><td>51%</td><td>ضعف يحتاج فحص البيانات</td></tr></table><div class="ml-note orange">المتوسط وحده لا يكفي؛ نسأل دائمًا: أين يخطئ النموذج، ومن يتأثر؟</div>`);

  revise('ضبط المعلمات', `<p class="ml-lead"><b>ضبط المعلمات (Hyperparameter Tuning)</b> يعني تجربة إعدادات محددة للنموذج واختيار الأفضل على بيانات التحقق.</p><div class="ml-grid"><div class="ml-card"><h3>مثال</h3><p>نجرب عمق شجرة 3 ثم 6 ثم 10، ونقارن PR-AUC بالطيات نفسها.</p></div><div class="ml-card orange"><h3>ما الذي لا نفعله؟</h3><p>لا نفتح الاختبار بعد كل تجربة؛ نحتفظ به للتقييم النهائي مرة واحدة.</p></div></div><div class="ml-note dark">الضبط لا يصلح بيانات سيئة أو مقياسًا خاطئًا؛ يأتي بعد صحة المسار الأساسي.</div>`);

  revise('GridSearchCV أم RandomizedSearchCV؟', `<div class="ml-grid"><div class="ml-card"><h3>Grid Search</h3><p>يجرب كل التركيبات التي كتبناها.</p><p><b>مثال:</b> 3 أعماق × عددين من الأشجار = 6 تجارب.</p><p>مناسب عندما الخيارات قليلة.</p></div><div class="ml-card orange"><h3>Randomized Search</h3><p>يجرب عددًا محددًا من التركيبات عشوائيًا.</p><p><b>مثال:</b> نطلب 20 تجربة من مساحة فيها مئات الاحتمالات.</p><p>مناسب عندما الخيارات كثيرة والوقت محدود.</p></div></div><div class="ml-note dark">مع 5 طيات: 20 تركيبة تعني تدريب 100 نموذج. لهذا نحدد ميزانية البحث قبل التشغيل.</div>`);

  revise('لماذا قد تكون درجة الفائز متفائلة؟', `<p class="ml-lead">إذا جربنا إعدادات كثيرة جدًا، قد يفوز أحدها بسبب حظ طيات التحقق، لا لأنه الأفضل دائمًا.</p>${flow([['نجرب إعدادات كثيرة','فرص أكثر للحظ'],['نختار أعلى نتيجة','قد تكون متفائلة'],['نثبت النموذج والعتبة','لا نعدّل بعدها'],['نفتح الاختبار مرة','تقدير نهائي']])}<div class="ml-note orange"><b>مثال:</b> الطالب الذي يحل عشرات نماذج الاختبار ويحفظها قد يبدو ممتازًا فيها، لكنه لم يثبت أداءه على اختبار جديد.</div>`);

  revise('البطل مقابل المنافس', `<p class="ml-lead">البطل (Champion) هو النموذج المستخدم حاليًا، والمنافس (Challenger) نموذج جديد نختبره قبل الاستبدال.</p><table class="ml-table"><tr><th></th><th>البطل</th><th>المنافس</th></tr><tr><td>PR-AUC</td><td>0.61</td><td>0.63</td></tr><tr><td>التشغيل</td><td>سريع وبسيط</td><td>أبطأ وأعقد</td></tr><tr><td>الثبات</td><td>مستقر</td><td>تشتته أعلى</td></tr></table><div class="ml-note dark">لا نستبدل البطل لتحسن 0.02 تلقائيًا؛ نسأل هل التحسن ثابت ويستحق كلفة التعقيد؟</div>`);

  revise('كيف نقيس نجاحًا بلا y؟', `<p class="ml-lead">في التجميع لا توجد إجابة صحيحة جاهزة، لذلك لا نسأل «كم فئة أصبنا؟». نسأل تدريجيًا هل المجموعات متماسكة ومفهومة ومفيدة.</p><div class="ml-grid"><div class="ml-card"><h3>1. متماسكة</h3><p>هل أفراد المجموعة متشابهون؟ مثال: Silhouette أعلى.</p></div><div class="ml-card orange"><h3>2. مفهومة</h3><p>هل نستطيع وصف المجموعة؟ مثال: عملاء متكررون وسلة مرتفعة.</p></div><div class="ml-card"><h3>3. مفيدة</h3><p>هل تغير قرارًا؟ مثال: تصميم عرض مختلف لكل شريحة.</p></div></div><div class="ml-note dark">أفضل عدد عناقيد ليس صاحب الرقم الأعلى فقط؛ يجب أن يكون قابلًا للتفسير والاستخدام.</div>`);

  revise('PCA كميزانية تباين', `<p class="ml-lead"><b>PCA</b> يضغط أعمدة كثيرة في محاور جديدة قليلة. كلما استخدمنا محاور أكثر احتفظنا بمعلومات أكثر، لكن التلخيص يصبح أقل.</p><table class="ml-table"><tr><th>عدد المحاور</th><th>المعلومات المحتفظ بها</th><th>الاستخدام</th></tr><tr><td>2</td><td>58%</td><td>سهل للرسم، لكنه يفقد كثيرًا</td></tr><tr><td>5</td><td>82%</td><td>توازن محتمل</td></tr><tr><td>9</td><td>95%</td><td>معلومات أكثر وتلخيص أقل</td></tr></table><div class="ml-note orange"><b>مثال:</b> بدل رسم 10 خصائص للعميل، نستخدم محورين جديدين للرؤية والاستكشاف. المحوران خليط من الخصائص وليسا عمودين أصليين.</div><div class="ml-note dark">نطبق Scaling قبل PCA حتى لا يسيطر عمود أرقامه كبيرة على المحاور.</div>`);

  revise('ثلاث طرق لفهم النموذج', `<p class="ml-lead">بعد اختيار النموذج نسأل: <b>على أي خصائص يعتمد؟</b> هذه الأدوات تشرح سلوك النموذج، لكنها لا تثبت أن الخاصية تسبب النتيجة.</p><div class="ml-grid"><div class="ml-card"><h3>أهمية الشجرة</h3><p>كم استخدمت الأشجار الخاصية في الانقسامات؟</p><p><b>مثال:</b> أيام الغياب ظهرت في أسئلة كثيرة.</p></div><div class="ml-card orange"><h3>Permutation Importance</h3><p>نخلط قيم خاصية ونرى كم ينخفض الأداء.</p><p><b>مثال:</b> عند خلط أيام الغياب انخفض PR-AUC كثيرًا؛ إذن النموذج يعتمد عليها.</p></div><div class="ml-card"><h3>PDP</h3><p>نغيّر خاصية ونراقب متوسط التوقع.</p><p><b>مثال:</b> يزداد خطر التوقف مع زيادة أيام الغياب.</p></div></div><div class="ml-note dark">هذه الأدوات تقول «النموذج يعتمد على أيام الغياب»، ولا تقول «الغياب يسبب التوقف».</div>`);
  const explainModelIndex = slides.findIndex(slide => slide.includes('<div class="slide-title">ثلاث طرق لفهم النموذج<'));
  if (explainModelIndex >= 0) slides[explainModelIndex] = slides[explainModelIndex].replace('ثلاث طرق لفهم النموذج', 'كيف نفهم ما الذي يعتمد عليه النموذج؟');

  revise('من الخريطة إلى التطبيق: التعلم غير الخاضع للإشراف', `<p class="ml-lead">في اليوم الأول عرفنا أن التعلم غير الخاضع لا يملك هدفًا y. الآن سنستخدمه لتقسيم العملاء إلى مجموعات سلوكية.</p>${flow([['نختار الخصائص','الطلبات، السلة، العروض'],['نوحّد المقاييس','حتى لا يسيطر عمود'],['نشغّل K-Means','يجمع المتشابهين'],['نختار K','قياس + معنى عملي'],['نفسّر المجموعات','نسميها بعد رؤية خصائصها']])}<div class="ml-note orange"><b>مثال نتيجة:</b> مجموعة تطلب كثيرًا بسلة مرتفعة، ومجموعة قليلة الطلب وتستخدم العروض بكثرة. الخوارزمية تعطي أرقام المجموعات، ونحن نفسر معناها بعد ذلك.</div>`);

  revise('بطاقة النموذج: التسليم الذي يجمع الرحلة', `<p class="ml-lead">بطاقة النموذج (Model Card) مثل بطاقة تعريف مختصرة: تساعد شخصًا لم يحضر المشروع على فهم ما بُني ومتى يمكن استخدامه.</p><table class="ml-table"><tr><th>القسم</th><th>مثال مختصر</th></tr><tr><td>الغرض</td><td>ترتيب العملاء المحتمل توقفهم للتواصل</td></tr><tr><td>البيانات</td><td>سلوك الطلب قبل تاريخ اللقطة فقط</td></tr><tr><td>المنهجية</td><td>تقسيم طبقي + Pipeline + Random Forest</td></tr><tr><td>التقييم</td><td>PR-AUC والعتبة المختارة وتكلفة FP وFN</td></tr><tr><td>الحدود</td><td>لا يستخدم خارج المدن والفترة التي دُرّب عليها دون فحص</td></tr></table><div class="ml-note dark">الهدف ليس كتابة تقرير طويل؛ المطلوب صفحة واحدة تجيب: ماذا يفعل النموذج؟ كيف قُيّم؟ ومتى لا نثق به؟</div>`);

  removeSlideTitles([
    'Underfitting: النموذج لم يتعلم بما يكفي',
    'Overfitting: النموذج حفظ التدريب',
    'كيف يمر النموذج على البيانات أثناء التدريب؟'
  ]);
  insertSequenceAfter('كيف نجعل الانحدار أبسط؟ Ridge وLasso', [
    content('Underfitting وOverfitting في رسم واحد', `<style>.fit-three{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.fit-plot{background:#f6f8fc;color:#243b78;border-radius:16px;padding:10px;text-align:center}.fit-plot svg{width:100%;height:230px}.ft-axis{stroke:#7d8aa8;stroke-width:2}.ft-point{fill:#243b78}.ft-new{fill:#ef7d00;stroke:#fff;stroke-width:4}.ft-under{stroke:#ef7d00;stroke-width:6;fill:none}.ft-good{stroke:#159d91;stroke-width:6;fill:none}.ft-over{stroke:#a14c9a;stroke-width:5;fill:none}.ft-label{fill:#243b78;font-size:16px;font-weight:800}@media(max-width:950px){.fit-three{grid-template-columns:1fr}.fit-plot svg{height:210px}}</style><p class="ml-lead">النقاط الزرقاء بيانات التدريب، والنقطة البرتقالية حالة جديدة. المطلوب ليس لمس كل نقطة؛ المطلوب تعلم <b>الاتجاه العام</b> الذي ينجح مع الحالة الجديدة.</p><div class="fit-three"><div class="fit-plot"><h3>Underfitting — أبسط من اللازم</h3><svg viewBox="0 0 330 235" role="img" aria-label="نموذج بسيط لا يلتقط اتجاه البيانات"><line class="ft-axis" x1="35" y1="205" x2="310" y2="205"/><line class="ft-axis" x1="35" y1="25" x2="35" y2="205"/><g class="ft-point"><circle cx="65" cy="175" r="7"/><circle cx="100" cy="145" r="7"/><circle cx="140" cy="105" r="7"/><circle cx="185" cy="68" r="7"/><circle cx="230" cy="52" r="7"/><circle cx="275" cy="48" r="7"/></g><circle class="ft-new" cx="205" cy="60" r="10"/><path class="ft-under" d="M48 125 L295 105"/><text class="ft-label" x="165" y="226" text-anchor="middle">يفوّت الاتجاه</text></svg><p>الخط بعيد عن معظم النقاط.<br><b>ضعيف في التدريب والجديد.</b></p></div><div class="fit-plot"><h3>تعلّم مناسب — الاتجاه العام</h3><svg viewBox="0 0 330 235" role="img" aria-label="منحنى بسيط يلتقط الاتجاه العام"><line class="ft-axis" x1="35" y1="205" x2="310" y2="205"/><line class="ft-axis" x1="35" y1="25" x2="35" y2="205"/><g class="ft-point"><circle cx="65" cy="175" r="7"/><circle cx="100" cy="145" r="7"/><circle cx="140" cy="105" r="7"/><circle cx="185" cy="68" r="7"/><circle cx="230" cy="52" r="7"/><circle cx="275" cy="48" r="7"/></g><circle class="ft-new" cx="205" cy="60" r="10"/><path class="ft-good" d="M50 190 C90 165,120 120,155 90 S225 47,295 46"/><text class="ft-label" x="165" y="226" text-anchor="middle">يفهم النمط</text></svg><p>قريب من النقاط ويلتقط الاتجاه.<br><b>ينجح مع الحالة الجديدة.</b></p></div><div class="fit-plot"><h3>Overfitting — حفظ التفاصيل</h3><svg viewBox="0 0 330 235" role="img" aria-label="منحنى متعرج يحفظ نقاط التدريب ولا يعمم"><line class="ft-axis" x1="35" y1="205" x2="310" y2="205"/><line class="ft-axis" x1="35" y1="25" x2="35" y2="205"/><g class="ft-point"><circle cx="65" cy="175" r="7"/><circle cx="100" cy="145" r="7"/><circle cx="140" cy="105" r="7"/><circle cx="185" cy="68" r="7"/><circle cx="230" cy="52" r="7"/><circle cx="275" cy="48" r="7"/></g><circle class="ft-new" cx="205" cy="60" r="10"/><path class="ft-over" d="M55 195 L65 175 L82 72 L100 145 L120 185 L140 105 L160 34 L185 68 L205 155 L230 52 L252 115 L275 48 L298 92"/><text class="ft-label" x="165" y="226" text-anchor="middle">يحفظ النقاط</text></svg><p>يمر بنقاط التدريب لكنه يبتعد عن الجديدة.<br><b>تدريب ممتاز، تعميم ضعيف.</b></p></div></div><div class="ml-note dark"><b>قاعدة الحفظ:</b> Underfitting = لم يتعلم. Overfitting = حفظ. النموذج المناسب = فهم الاتجاه العام.</div>`)
  ]);

  insertSequenceAfter('كيف نجعل الانحدار أبسط؟ Ridge وLasso', [
    content('كيف يمر النموذج على البيانات أثناء التدريب؟', `<p class="ml-lead">النموذج يتعلم من <b>بيانات التدريب فقط</b>. يتوقع، يقارن بالحقيقة، ثم يعدّل نفسه إذا كانت الخوارزمية تكرارية.</p>${flow([['دفعة من X_train','خصائص الحالات'],['توقع','فئة أو رقم'],['مقارنة مع y_train','حساب الخطأ'],['تعديل النموذج','تقليل الخطأ'],['إعادة المحاولة','حسب نوع الخوارزمية']])}<div class="ml-grid"><div class="ml-card"><h3>ما هو Epoch؟</h3><p><b>Epoch</b> مرور كامل واحد على جميع بيانات التدريب.</p><p>إذا مرّت شبكة عصبية على الملف كاملًا 10 مرات، نقول تدربت 10 Epochs.</p></div><div class="ml-card orange"><h3>هل كل نموذج لديه Epochs؟</h3><p><b>لا.</b> يظهر المصطلح مع الشبكات العصبية وبعض الخوارزميات التكرارية.</p><p>شجرة القرار وRandom Forest لا نصف تدريبهما عادةً بعدد Epochs.</p></div></div><div class="ml-note dark"><b>بيانات التحقق:</b> لا يتعلم منها النموذج. نستخدمها بعد التدريب أو بين الجولات لنعرف هل يتحسن مع حالات لم يتعلم منها.</div><div class="ml-note orange"><b>بيانات الاختبار:</b> تبقى مغلقة حتى نثبت النموذج والقرارات، ثم نفتحها مرة واحدة للتقييم النهائي.</div>`)
  ]);

  insertSequenceAfter('Underfitting وOverfitting في رسم واحد', [
    content('ماذا نفعل عند Underfitting أو Overfitting؟', `<p class="ml-lead">نحدد المشكلة أولًا من أداء التدريب والتحقق، ثم نختار العلاج المناسب. العلاج الخاطئ قد يزيد المشكلة.</p><table class="ml-table"><tr><th>المشكلة</th><th>كيف تظهر؟</th><th>ما الذي نجربه؟</th></tr><tr><td><b>Underfitting</b><br>لم يتعلم</td><td>التدريب ضعيف<br>التحقق ضعيف</td><td>خصائص مفيدة أكثر، نموذج أكثر مرونة، تقليل التنظيم الزائد، أو تدريب الخوارزمية التكرارية حتى تتقارب</td></tr><tr><td><b>Overfitting</b><br>حفظ التدريب</td><td>التدريب ممتاز<br>التحقق أضعف بكثير</td><td>تبسيط النموذج، زيادة Regularization، تقليل عمق الشجرة، Early Stopping، أو بيانات أكثر تنوعًا</td></tr></table><div class="ml-grid"><div class="ml-card"><h3>مثال Underfitting</h3><p>شجرة بعمق 1 لا تستطيع تمثيل المشكلة.</p><p><b>نجرب:</b> عمقًا أكبر أو خصائص أفضل.</p></div><div class="ml-card orange"><h3>مثال Overfitting</h3><p>شجرة بعمق 30 تحفظ تفاصيل التدريب.</p><p><b>نجرب:</b> تحديد العمق مثل 5 أو زيادة min_samples_leaf.</p></div></div><div class="ml-note dark">زيادة عدد Epochs قد تعالج نموذجًا لم يكتمل تدريبه، لكنها ليست حلًا عامًا لـUnderfitting، وقد تزيد Overfitting إذا استمر التدريب أكثر من اللازم.</div>`)
  ]);
  insertSequenceAfter('ماذا نفعل عند Underfitting أو Overfitting؟', [
    content('لماذا لا نكتفي بتقسيم واحد للبيانات؟', `<p class="ml-lead">إذا قسمنا البيانات مرة واحدة، قد تكون مجموعة التحقق سهلة أو صعبة بالمصادفة، فتعطينا حكمًا غير ثابت على النموذج.</p><div class="ml-grid"><div class="ml-card"><h3>تقسيم محظوظ</h3><p>وقعت الحالات السهلة في التحقق.</p><p class="ml-quote">النتيجة = 88%</p><p>قد نظن أن النموذج ممتاز.</p></div><div class="ml-card orange"><h3>تقسيم صعب</h3><p>وقعت حالات أصعب في التحقق.</p><p class="ml-quote">النتيجة = 70%</p><p>قد نظن أن النموذج ضعيف.</p></div></div><div class="ml-note dark"><b>الحل:</b> نكرر التدريب والفحص على تقسيمات متعددة، ثم ننظر إلى متوسط النتائج. هذه الطريقة تسمى <b>التحقق المتقاطع (Cross-Validation)</b>.</div>`)
  ]);
  insertSequenceAfter('ماذا نفعل عند Underfitting أو Overfitting؟', [
    content('قبل Cross-Validation: ما تقسيم البيانات (Data Splitting)؟', `<p class="ml-lead">لدينا في البداية <b>جدول واحد</b>. لو درّبنا النموذج واختبرناه على الصفوف نفسها، فقد يحفظها وتبدو النتيجة ممتازة. لذلك نفصل البيانات إلى أجزاء لها أدوار مختلفة.</p><div style="display:grid;grid-template-columns:4fr 1fr;gap:14px;margin:24px 0;text-align:center"><div style="background:#243b78;color:#fff!important;border-radius:16px;padding:22px"><b style="color:#fff!important;font-size:1.15em">80% بيانات تطوير (Development Set)</b><br>نتعلم ونقارن النماذج داخلها</div><div style="background:#ef7d00;color:#fff!important;border-radius:16px;padding:22px"><b style="color:#fff!important;font-size:1.15em">20% اختبار نهائي (Final Test Set)</b><br>يبقى مغلقًا</div></div><div class="ml-grid"><div class="ml-card"><h3>داخل بيانات التطوير</h3><p>نحتاج بيانات تدريب <b>(Training Set)</b> يتعلم منها النموذج، وبيانات تحقق <b>(Validation Set)</b> نفحص عليها هل ينجح مع حالات لم يتعلمها.</p></div><div class="ml-card orange"><h3>من أين جاء التحقق المتقاطع (Cross-Validation)؟</h3><p>بدل اختيار جزء تحقق واحد داخل الـ80%، نقسمها إلى مجموعات، وكل مجموعة تأخذ دور التحقق مرة.</p></div></div><div class="ml-note dark"><b>المهم:</b> Cross-Validation يحدث داخل بيانات التطوير. لا يفتح مجموعة الاختبار النهائي ولا يستخدمها في اختيار النموذج.</div>`)
  ]);

  revise('التحقق المتقاطع: مقارنة أكثر ثباتًا', `<style>.cv-sim{max-width:1120px;margin:auto}.cv-folds{display:grid;grid-template-columns:repeat(5,1fr);gap:12px;margin:24px 0}.cv-fold{padding:24px 8px;border-radius:15px;background:#dfe6f3;color:#243b78;text-align:center;font-weight:900;transition:.25s}.cv-fold.is-validation{background:#ef7d00;color:#fff}.cv-control{display:grid;grid-template-columns:170px 1fr 100px;gap:16px;align-items:center}.cv-control input{width:100%;accent-color:#ef7d00}.cv-output{background:#243b78;color:#fff!important;padding:11px;border-radius:12px;text-align:center;font-weight:900}.cv-caption{text-align:center;background:#eef2fa;color:#243b78;border-radius:14px;padding:14px;margin-top:18px;font-weight:800}@media(max-width:760px){.cv-control{grid-template-columns:1fr}.cv-folds{gap:5px}.cv-fold{padding:18px 3px}}</style><p class="ml-lead">نقسم <b>بيانات التدريب</b> إلى خمس مجموعات. في كل جولة ندرّب على أربع مجموعات، ونستخدم المجموعة الخامسة للفحص. ثم نبدّل الأدوار.</p><div class="cv-sim" data-cv-sim><div class="cv-control"><b>حرّك بين الجولات</b><input type="range" min="1" max="5" value="1" step="1" aria-label="اختر جولة التحقق المتقاطع"><output class="cv-output" aria-live="polite">الجولة 1</output></div><div class="cv-folds"><div class="cv-fold is-validation">المجموعة 1<br><small>فحص</small></div><div class="cv-fold">المجموعة 2<br><small>تدريب</small></div><div class="cv-fold">المجموعة 3<br><small>تدريب</small></div><div class="cv-fold">المجموعة 4<br><small>تدريب</small></div><div class="cv-fold">المجموعة 5<br><small>تدريب</small></div></div><div class="cv-caption" aria-live="polite">ندرب على المجموعات 2–5، ونفحص الأداء على المجموعة 1.</div></div><div class="ml-grid"><div class="ml-card"><h3>بعد خمس جولات</h3><p class="ml-quote">78% · 81% · 76% · 80% · 79%</p><p>نأخذ المتوسط: <b>78.8%</b>.</p></div><div class="ml-card orange"><h3>ماذا استفدنا؟</h3><p>كل حالة شاركت في الفحص مرة واحدة، وأصبح حكمنا أقل اعتمادًا على تقسيم واحد محظوظ.</p></div></div><div class="ml-note dark">كل مجموعة تسمى <b>طية (Fold)</b>. أما مجموعة الاختبار النهائي فتبقى خارج هذه العملية ومغلقة حتى النهاية.</div>`);
  removeSlideTitles(['كيف يمر النموذج على البيانات أثناء التدريب؟']);

  removeSlideTitles([
    'لماذا لا نكتفي بتقسيم واحد للبيانات؟',
    'التحقق المتقاطع: مقارنة أكثر ثباتًا',
    'التحقق يجب أن يشمل Pipeline كاملًا',
    'منحنى التعلم: هل نحتاج بيانات أكثر؟',
    'تشغيل موجّه: قارن نموذجين بالطيات نفسها',
    'تشغيل موجّه: قارن نموذجين بعدل',
    'من نموذج واحد إلى نماذج مجمّعة',
    'كيف نفهم ما الذي يعتمد عليه النموذج؟',
    'ثلاث طرق لفهم النموذج',
    'تحليل الأخطاء حسب الشرائح',
    'أربع بوابات قبل أي ضبط',
    'لماذا قد تكون درجة الفائز متفائلة؟',
    'البطل مقابل المنافس'
  ]);

  revise('قبل Cross-Validation: ما تقسيم البيانات (Data Splitting)؟', `<p class="ml-lead">لدينا في البداية <b>جدول واحد</b>. لو درّبنا النموذج واختبرناه على الصفوف نفسها، فقد يحفظها وتبدو النتيجة ممتازة. لذلك نفصل البيانات إلى ثلاثة أجزاء.</p><div style="display:grid;grid-template-columns:3fr 1fr 1fr;gap:14px;margin:26px 0;text-align:center"><div style="background:#243b78;color:#fff!important;border-radius:16px;padding:22px"><b style="color:#fff!important">بيانات التدريب (Training Set)</b><br>يتعلم منها النموذج</div><div style="background:#159d91;color:#fff!important;border-radius:16px;padding:22px"><b style="color:#fff!important">بيانات التحقق (Validation Set)</b><br>نقارن ونختار</div><div style="background:#ef7d00;color:#fff!important;border-radius:16px;padding:22px"><b style="color:#fff!important">الاختبار النهائي (Test Set)</b><br>نفتحه في النهاية</div></div><div class="ml-grid"><div class="ml-card"><h3>مثال من 1,000 حالة</h3><p>700 للتدريب، 150 للتحقق، و150 للاختبار النهائي.</p></div><div class="ml-card orange"><h3>لماذا ثلاثة أجزاء؟</h3><p>نتعلم من جزء، نختار النموذج بجزء مختلف، ثم نقيس النتيجة النهائية على جزء لم يؤثر في الاختيار.</p></div></div><div class="ml-note dark">نستخدم مجموعة التحقق نفسها عند مقارنة النماذج حتى تكون المقارنة عادلة.</div>`);
  const simpleSplitIndex = slides.findIndex(slide => slide.includes('<div class="slide-title">قبل Cross-Validation: ما تقسيم البيانات (Data Splitting)؟<'));
  if (simpleSplitIndex >= 0) slides[simpleSplitIndex] = slides[simpleSplitIndex].replace('قبل Cross-Validation: ما تقسيم البيانات (Data Splitting)؟', 'ما تقسيم البيانات (Data Splitting)؟');

  revise('مقارنة عادلة بين النماذج', `<p class="ml-lead">حتى تكون المقارنة عادلة، نغيّر <b>النموذج فقط</b> ونثبت بقية الشروط.</p><table class="ml-table"><tr><th>ما الذي نثبته؟</th><th>مثال</th></tr><tr><td>بيانات التدريب والتحقق</td><td>Logistic وRandom Forest يريان الحالات نفسها</td></tr><tr><td>المعالجة</td><td>Pipeline نفسها</td></tr><tr><td>المقياس</td><td>PR-AUC للنموذجين</td></tr></table><div class="ml-note orange">إذا غيّرنا البيانات أو المقياس مع النموذج، فلن نعرف هل التحسن سببه النموذج أم اختلاف التجربة.</div>`);

  revise('تشغيل موجّه: قارن نموذجين بالطيات نفسها', `<span class="ml-badge">تطبيق مجموعات · 15 دقيقة</span><p class="ml-lead">شغّل Logistic Regression وRandom Forest على بيانات التدريب نفسها، ثم قارن النتيجة على مجموعة التحقق نفسها.</p><div class="ml-grid"><div class="ml-card"><h3>نفّذ</h3><ol><li>درّب النموذجين.</li><li>احسب المقياس نفسه.</li><li>سجل زمن التدريب.</li></ol></div><div class="ml-card orange"><h3>فسّر</h3><ul><li>أي نموذج حقق نتيجة أعلى؟</li><li>هل الفرق كبير؟</li><li>هل يستحق زيادة التعقيد؟</li></ul></div></div>`, 'ml-activity');
  const guidedCompareIndex = slides.findIndex(slide => slide.includes('<div class="slide-title">تشغيل موجّه: قارن نموذجين بالطيات نفسها<'));
  if (guidedCompareIndex >= 0) slides[guidedCompareIndex] = slides[guidedCompareIndex].replace('تشغيل موجّه: قارن نموذجين بالطيات نفسها', 'تشغيل موجّه: قارن نموذجين بعدل');

  revise('GridSearchCV أم RandomizedSearchCV؟', `<div class="ml-grid"><div class="ml-card"><h3>Grid Search</h3><p>يجرب كل التركيبات التي كتبناها.</p><p><b>مثال:</b> 3 أعماق × عددين من الأشجار = 6 تجارب.</p><p>مناسب عندما الخيارات قليلة.</p></div><div class="ml-card orange"><h3>Randomized Search</h3><p>يجرب عددًا محددًا من التركيبات عشوائيًا.</p><p><b>مثال:</b> نجرب 20 تركيبة من مئات الاحتمالات.</p><p>مناسب عندما الخيارات كثيرة والوقت محدود.</p></div></div><div class="ml-note dark">نختار الإعداد الأفضل باستخدام بيانات التحقق، ثم نثبت القرار قبل فتح الاختبار النهائي.</div>`);
  const searchTitleIndex = slides.findIndex(slide => slide.includes('<div class="slide-title">GridSearchCV أم RandomizedSearchCV؟<'));
  if (searchTitleIndex >= 0) slides[searchTitleIndex] = slides[searchTitleIndex].replace('GridSearchCV أم RandomizedSearchCV؟', 'Grid Search أم Randomized Search؟');

  slides.forEach((slide, index) => {
    slides[index] = slide
      .replace(/Cross-Validation/g, 'بيانات التحقق')
      .replace(/الطيات نفسها/g, 'بيانات التحقق نفسها')
      .replace(/متوسط ± الانحراف/g, 'نتيجة التحقق')
      .replace(/متوسط وتشتت التحقق المتقاطع/g, 'نتيجة بيانات التحقق');
  });

  // أبقِ النسخة الأساسية من الدورة بسيطة: مقارنة واحدة على بيانات تحقق مستقلة.
  // أزيلت جميع إشارات التحقق المتقاطع والطيات من المحتوى النهائي.
  slides.forEach((slide, index) => {
    slides[index] = slide
      .replace(/التحقق المتقاطع/g, 'المقارنة على بيانات التحقق')
      .replace('المقاييس المناسبة، التحقق المتقاطع، تحليل الأخطاء، وفرط التخصيص ونقصه وتسرب البيانات.', 'المقاييس المناسبة، وتحليل الأخطاء، وفرط التخصيص ونقصه وتسرب البيانات.')
      .replace('المقاييس والتحقق المتقاطع وتحليل الأخطاء وضبط المعلمات.', 'المقاييس وتحليل الأخطاء وضبط المعلمات.')
      .replace('يُحسب داخل طيات التدريب وإلا يسبب تسريبًا', 'يُحسب من بيانات التدريب فقط وإلا يسبب تسريبًا')
      .replace('2 التحقق المتقاطع وتحليل الشرائح', '2 مقارنة النماذج وتحليل الشرائح')
      .replace('نقارنها بالطيات والمقياس نفسيهما؛ لا نختار الاسم الأشهر تلقائيًا.', 'نقارنها على بيانات التحقق وبالمقياس نفسه؛ لا نختار الاسم الأشهر تلقائيًا.')
      .replace('هل منعنا التسريب وطبقنا المعالجة داخل الطيات؟', 'هل منعنا التسريب وتعلمت المعالجة من بيانات التدريب فقط؟')
      .replace('إذا جربنا إعدادات كثيرة جدًا، قد يفوز أحدها بسبب حظ طيات التحقق، لا لأنه الأفضل دائمًا.', 'إذا جربنا إعدادات كثيرة جدًا على بيانات التحقق نفسها، قد يفوز أحدها بسبب المصادفة، لا لأنه الأفضل دائمًا.')
      .replace('ما خط الأساس؟ وهل قارنتُم النماذج بالطيات والمقياس نفسيهما؟', 'ما خط الأساس؟ وهل قارنتُم النماذج على بيانات التحقق نفسها وبالمقياس نفسه؟');
  });

  // عنوان اليوم الثالث يعكس موضوعه الرئيس، لا أداة تقييم واحدة داخله.
  const dayThreeDividerIndex = slides.findIndex(slide => slide.includes('<div class="div-kicker">اليوم الثالث</div>'));
  if (dayThreeDividerIndex >= 0) {
    slides[dayThreeDividerIndex] = slides[dayThreeDividerIndex]
      .replace('<div class="div-title">التقييم العادل والنماذج المجمعة</div>', '<div class="div-title">التعلم الخاضع للإشراف</div>')
      .replace('<div class="div-theme">قارن النماذج ببيانات التحقق نفسها وحلّل مواضع الخطأ</div>', '<div class="div-theme">نبني نماذج التصنيف والانحدار، ونقيّمها، ثم نتعرّف على النماذج الشجرية المجمّعة</div>')
      .replace('<span>المقاييس ومصفوفة الالتباس وPR-AUC</span>', '<span>التصنيف ومقاييس تقييمه</span>')
      .replace('<span>المقارنة على بيانات التحقق وتحليل الشرائح</span>', '<span>الانحدار ومقاييس تقييمه</span>')
      .replace('<span>Random Forest وGradient Boosting والتفسير</span>', '<span>Random Forest وGradient Boosting وXGBoost</span>');
  }

  // اليوم الرابع: قصة واحدة تبدأ بالسؤال وتنتهي بتطبيق يمكن تفسيره.
  removeSlideTitles(['كيف سنطبّق في اليوم الرابع؟']);

  const dayFourDividerIndex = slides.findIndex(slide => slide.includes('<div class="div-kicker">اليوم الرابع</div>'));
  if (dayFourDividerIndex >= 0) {
    slides[dayFourDividerIndex] = slides[dayFourDividerIndex]
      .replace('<div class="div-title">التعلم غير الخاضع للإشراف والمشروع المتكامل</div>', '<div class="div-title">التعلم غير الخاضع للإشراف <span dir="ltr">(Unsupervised Learning)</span></div>')
      .replace('<div class="div-theme">نطبّق التجميع عمليًا، ثم نجمع رحلة الدورة كلها في المشروع</div>', '<div class="div-theme">نكتشف مجموعات داخل البيانات من دون عمود هدف، ثم نحوّلها إلى وصف وفائدة عملية</div>')
      .replace('<span>K-Means واختيار عدد العناقيد</span>', '<span>من البيانات بلا y إلى عناقيد مفهومة</span>')
      .replace('<span>PCA للتمثيل البصري</span>', '<span>اختيار K وتفسير المجموعات</span>')
      .replace('<span>RandomizedSearchCV وفتح الاختبار مرة واحدة</span>', '<span>PCA للرسم ثم التطبيق العملي</span>');
  }

  revise('من الخريطة إلى التطبيق: التعلم غير الخاضع للإشراف', `<p class="ml-lead">في التعلم الخاضع كان لدينا هدف <b>y</b> نريد توقعه. هنا لا يوجد هدف جاهز؛ لدينا خصائص <b>X فقط</b> ونريد اكتشاف عملاء متشابهين.</p><div class="ml-grid"><div class="ml-card"><h3>السؤال</h3><p>هل توجد أنماط سلوكية مختلفة بين العملاء؟</p><p><b>مثال خصائص:</b> عدد الطلبات، متوسط السلة، واستخدام العروض.</p></div><div class="ml-card orange"><h3>الناتج</h3><p>رقم مجموعة لكل عميل، مثل 0 أو 1 أو 2.</p><p>الخوارزمية لا تعطي اسمًا أو حكمًا؛ نحن نفسر كل مجموعة بعد التدريب.</p></div></div>${flow([['نختار X','خصائص تعبّر عن السلوك'],['نطبّق Scaling','حتى لا يسيطر عمود'],['نشغّل K-Means','يجمع الحالات المتشابهة'],['نختار K','قياس + معنى عملي'],['نفسّر','نصف كل مجموعة ونسميها']])}<div class="ml-note dark"><b>الفرق الأساسي:</b> لا نسأل «هل أصاب النموذج الفئة الصحيحة؟»؛ لأنه لا توجد فئات صحيحة مسبقًا.</div>`);

  revise('كيف نقيس نجاحًا بلا y؟', `<p class="ml-lead">لأننا لا نملك إجابة صحيحة <b>y</b>، نقيم التجميع بثلاثة أسئلة مرتبة.</p><div class="ml-grid three"><div class="ml-card"><h3>1. هل المجموعة متماسكة؟</h3><p>هل أفرادها متشابهون وقريبون من بعضهم؟</p><p><b>أداة مساعدة:</b> Silhouette Score.</p></div><div class="ml-card orange"><h3>2. هل تختلف عن غيرها؟</h3><p>هل نستطيع رؤية فرق واضح بين المجموعات؟</p><p><b>مثال:</b> كثيرة الطلب مقابل قليلة الطلب.</p></div><div class="ml-card"><h3>3. هل لها فائدة؟</h3><p>هل سيغيّر الفريق قرارًا أو خدمة بناءً عليها؟</p><p><b>مثال:</b> عرض مختلف لكل شريحة.</p></div></div><div class="ml-note dark">ارتفاع المقياس وحده لا يكفي. مجموعة لا نستطيع وصفها أو استخدامها ليست نتيجة جيدة عمليًا.</div>`);

  insertSequenceAfter('كيف نقيس نجاحًا بلا y؟', [
    content('كيف نختار عدد المجموعات K؟', `<p class="ml-lead"><b>K</b> هو عدد المجموعات الذي نطلب من K-Means تكوينه. لا تعرف الخوارزمية العدد المناسب وحدها، لذلك نجرب أكثر من قيمة.</p><table class="ml-table"><tr><th>القيمة</th><th>ماذا قد نرى؟</th><th>السؤال</th></tr><tr><td>K = 2</td><td>مجموعتان عامتان جدًا</td><td>هل دمجنا سلوكيات مختلفة؟</td></tr><tr><td>K = 3</td><td>ثلاث شرائح واضحة</td><td>هل لكل شريحة وصف وفائدة؟</td></tr><tr><td>K = 6</td><td>مجموعات صغيرة ومتقاربة</td><td>هل أصبح التقسيم معقدًا بلا فائدة؟</td></tr></table><div class="ml-grid"><div class="ml-card"><h3>طريقة الكوع (Elbow Method)</h3><p>نبحث عن النقطة التي يصبح بعدها التحسن صغيرًا. هي اقتراح وليست إجابة قطعية.</p></div><div class="ml-card orange"><h3>معامل السيلويت (Silhouette Score)</h3><p>يقيس تماسك كل مجموعة وانفصالها عن غيرها. الأعلى أفضل عادةً.</p></div></div><div class="ml-note dark"><b>القرار النهائي:</b> نختار K يحقق قياسًا جيدًا ويعطي مجموعات يمكن تفسيرها واستخدامها.</div>`)
  ]);

  revise('PCA كميزانية تباين', `<p class="ml-lead">بعد التجميع قد تكون لدينا أعمدة كثيرة لا نستطيع رسمها معًا. نستخدم <b>تحليل المكونات الرئيسية (Principal Component Analysis — PCA)</b> لتلخيصها في محورين يمكن رسمهما.</p><div class="ml-grid"><div class="ml-card"><h3>قبل PCA</h3><p>كل عميل موصوف بعدة خصائص: الطلبات، السلة، العروض، التقييم، والغياب.</p><p>لا نستطيع رؤية خمسة محاور في رسم واحد.</p></div><div class="ml-card orange"><h3>بعد PCA</h3><p>ينشئ محورين جديدين: PC1 وPC2، وكل محور خليط رياضي من الخصائص الأصلية.</p><p>نرسم العملاء ونلوّنهم حسب المجموعة.</p></div></div>${flow([['خصائص كثيرة','يصعب رسمها'],['Scaling','نوحّد المقاييس'],['PCA','يلخّص الاتجاهات'],['محوران','PC1 وPC2'],['رسم','نفحص تداخل العناقيد']])}<div class="ml-note dark"><b>مهم:</b> PCA لا يكوّن المجموعات ولا يسميها. نستخدمه هنا للمشاهدة فقط، وقد يفقد الرسم جزءًا من المعلومات الأصلية.</div>`);

  revise('محطة التطبيق: K-Means وPCA على بيانات منافذ', `<span class="ml-badge">تطبيق مجموعات · 55 دقيقة</span><p class="ml-lead">طبّقوا القصة نفسها على بيانات منافذ، خطوة بخطوة.</p><div class="ml-grid"><div class="ml-card"><h3>نفّذوا</h3><ol><li>اختاروا خصائص سلوكية فقط، من دون y.</li><li>طبّقوا Scaling.</li><li>جرّبوا K = 2 إلى K = 6.</li><li>اقرؤوا Elbow وSilhouette.</li><li>اختاروا K وفسّروا كل مجموعة.</li><li>استخدموا PCA لرسم النتيجة.</li></ol></div><div class="ml-card orange"><h3>سلّموا</h3><ul><li>سبب اختيار الخصائص وK.</li><li>جدول متوسطات كل مجموعة.</li><li>اسم وصفي لكل مجموعة.</li><li>رسم PCA مع تفسير بسيط.</li><li>استخدام عملي واحد وحدّ واحد للنتيجة.</li></ul><a class="ml-download" href="downloads/SDA-AIE-111_Day2_KMeans.ipynb" download>تنزيل Lab اليوم الرابع</a></div></div>`, 'ml-activity');

  revise('اليوم الرابع — النصف الثاني', `<p class="ml-lead">انتهينا من تطبيق التعلم غير الخاضع للإشراف. الآن نعود إلى رحلة الدورة كاملة ونبني مشروعًا متكاملًا من سؤال العمل حتى التوصية.</p>${flow([['1. المشكلة','قرار واضح ومستخدم محدد'],['2. البيانات','X وy ومنع التسريب'],['3. البناء','Pipeline وBaseline ونموذج'],['4. التقييم','مقياس يناسب الخطأ'],['5. التسليم','Model Card وعرض مختصر']])}<div class="ml-note dark">التجميع جزء تعلم مستقل في النصف الأول. المشروع المتكامل يبدأ الآن ويستخدم ما تعلمناه في الأيام السابقة.</div>`);
  const projectBridgeIndex = slides.findIndex(slide => slide.includes('<div class="slide-title">اليوم الرابع — النصف الثاني<'));
  if (projectBridgeIndex >= 0) slides[projectBridgeIndex] = slides[projectBridgeIndex].replace('اليوم الرابع — النصف الثاني', 'من التجميع إلى المشروع المتكامل');

  moveTitlesAfter('محطة التطبيق: K-Means وPCA على بيانات منافذ', [
    'من التجميع إلى المشروع المتكامل',
    'المشروع الختامي',
    'بطاقة النموذج: التسليم الذي يجمع الرحلة',
    'قبل الإطلاق: ستة أسئلة',
    'أسئلة مراجعة الفريق قبل التسليم',
    'قائمة تسليم نهاية اليوم الرابع'
  ]);

  const projectDividerIndex = slides.findIndex(slide => slide.includes('<div class="div-kicker">اليوم الرابع — النصف الثاني</div>'));
  if (projectDividerIndex >= 0) {
    const projectDivider = slides.splice(projectDividerIndex, 1)[0]
      .replace('<div class="div-kicker">اليوم الرابع — النصف الثاني</div>', '<div class="div-kicker">اليوم الرابع — الجزء الثاني</div>')
      .replace('<div class="div-title">مختبر المشروع المتكامل</div>', '<div class="div-title">من التجميع إلى المشروع المتكامل</div>')
      .replace('<div class="div-theme">تبدأ الفرق البناء بعد إغلاق المفاهيم الأساسية في النصف الأول</div>', '<div class="div-theme">نغلق تطبيق التجميع، ثم نستخدم رحلة الأيام السابقة لبناء مشروع من البداية إلى النهاية</div>');
    const labIndex = slides.findIndex(slide => slide.includes('<div class="slide-title">محطة التطبيق: K-Means وPCA على بيانات منافذ<'));
    if (labIndex >= 0) slides.splice(labIndex + 1, 0, projectDivider);
  }

  // التطبيق الإلزامي للتعلم غير الخاضع ينتقل إلى اليوم الثاني بعد التحجيم.
  moveTitlesAfter('التحجيم: متى نغيّر مقياس الأرقام؟', [
    'من الخريطة إلى التطبيق: التعلم غير الخاضع للإشراف',
    'PCA كميزانية تباين',
    'محطة التطبيق: K-Means وPCA على بيانات منافذ'
  ]);
  const unsupervisedPracticeIndex = slides.findIndex(slide => slide.includes('<div class="slide-title">من الخريطة إلى التطبيق: التعلم غير الخاضع للإشراف<'));
  if (unsupervisedPracticeIndex >= 0) {
    slides[unsupervisedPracticeIndex] = slides[unsupervisedPracticeIndex]
      .replace('من الخريطة إلى التطبيق: التعلم غير الخاضع للإشراف', 'تطبيق التعلم غير الخاضع للإشراف (Unsupervised Learning)')
      .replace('في التعلم الخاضع كان لدينا هدف <b>y</b> نريد توقعه. هنا لا يوجد هدف جاهز؛ لدينا خصائص <b>X فقط</b> ونريد اكتشاف عملاء متشابهين.', 'بعد أن جهّزنا الأعمدة وتعلمنا التحجيم، سنطبّق الآن التعلم غير الخاضع للإشراف. لا يوجد هدف <b>y</b>؛ نستخدم خصائص <b>X فقط</b> لاكتشاف عملاء متشابهين.');
  }

  // اليوم الرابع للمشروع فقط: نحذف افتتاحية وإعادة شرح Unsupervised من هذا الموضع.
  const repeatedDayFourIndex = slides.findIndex(slide => slide.includes('<div class="div-kicker">اليوم الرابع</div>') && slide.includes('Unsupervised Learning'));
  const projectOnlyDividerIndex = slides.findIndex(slide => slide.includes('<div class="div-kicker">اليوم الرابع — الجزء الثاني</div>'));
  if (repeatedDayFourIndex >= 0 && projectOnlyDividerIndex > repeatedDayFourIndex) {
    slides.splice(repeatedDayFourIndex, projectOnlyDividerIndex - repeatedDayFourIndex);
  }
  const finalProjectDividerIndex = slides.findIndex(slide => slide.includes('<div class="div-kicker">اليوم الرابع — الجزء الثاني</div>'));
  if (finalProjectDividerIndex >= 0) {
    slides[finalProjectDividerIndex] = slides[finalProjectDividerIndex]
      .replace('<div class="div-kicker">اليوم الرابع — الجزء الثاني</div>', '<div class="div-kicker">اليوم الرابع</div>')
      .replace('<div class="div-title">من التجميع إلى المشروع المتكامل</div>', '<div class="div-title">المشروع المتكامل</div>')
      .replace('<div class="div-theme">نغلق تطبيق التجميع، ثم نستخدم رحلة الأيام السابقة لبناء مشروع من البداية إلى النهاية</div>', '<div class="div-theme">تطبّق الفرق رحلة تعلم الآلة كاملة من صياغة المشكلة إلى التقييم والتوصية</div>');
  }

  // نسخة Fundamental: نحتفظ بالمسار التطبيقي ونحذف التفاصيل المتقدمة أو المكررة.
  removeSlideTitles([
    'تحت أي مجال تندرج الحالة؟',
    'رتّبوا رحلة التعلم الخاضع للإشراف',
    'الحل: رحلة التعلم الخاضع للإشراف',
    'ما معنى الدرجة الخام؟',
    'كيف تتحسن القاعدة أثناء التدريب؟',
    'شاهد الحد الفاصل',
    'ماذا لو كانت لدينا أكثر من فئتين؟',
    'كيف يحسب الانحدار القيمة؟',
    'كيف يتعلم الانحدار من الخطأ؟',
    'K-Means: الجولة الأولى',
    'K-Means: نعيد التوزيع',
    'كيف يتعلم الوكيل من المكافأة؟',
    'كيف يتعلم التعلم المعزز تقنيًا؟',
    'طبّقها: صمّم المكافأة',
    'حل مقترح: مصعد يتعلم',
    'حدّد طريقة التعلم',
    'حل تحدي الحالات الأربع',
    'كيف نفحص القيمة المرتفعة؟',
    'مثال السلة: لماذا الذيل إلى اليمين؟',
    'ماذا يفعل التحويل اللوغاريتمي؟',
    'قبل التحويل وبعده: ماذا يتغير؟',
    'متى يفيد Log Transformation ومتى لا؟',
    'مثال تطبيقي: تحديد حد أعلى',
    'الحالة 1: ملف العملاء الحالي',
    'الحالة 2: طلبات مرتبة عبر الشهور',
    'الحالة 3: نريد التعميم على عملاء جدد',
    'ماذا لو اجتمع الزمن وتكرار العميل؟',
    'كيف نقرأ ناتج التقسيم؟',
    'سلّم ترميز الفئات',
    'هل 300 عمود مشكلة؟',
    'ماذا نفعل مع الفئات الكثيرة؟',
    'مثال: اجمع الدول النادرة تلقائيًا',
    'أي Scaler نستخدم؟',
    'ماذا يعني fit_transform؟',
    'ما الاسم الأكاديمي للنماذج الخطية؟',
    'كيف ترسم النماذج الخطية قرارها؟',
    'خطي أم شجري؟ مقارنة أعمق',
    'أين يقع KNN في الخريطة؟',
    'TP وTN: متى يكون القرار صحيحًا؟',
    'مثال: كيف تتكوّن منحنيات ROC وPR؟',
    'كيف أقرأ المعلومات من المنحنى؟',
    'كيف أعرف أي منحنى أفضل؟',
    'عندما لا نستطيع مراجعة الجميع: Recall@k',
    'كيف يتحول الباقي إلى نقطة على الرسم؟',
    'لماذا نحتاج RMSE بعد MAE؟',
    'لماذا نحتاج R² بعد قياس حجم الخطأ؟',
    'أي نموذج نختار؟ مثال بسيط',
    'ما تقسيم البيانات (Data Splitting)؟',
    'مقارنة عادلة بين النماذج',
    'صورة ذهنية: كيف تصوّت الغابة؟',
    'صورة ذهنية: التصحيح على جولات',
    'خريطة معاملات Random Forest وXGBoost',
    'الإيقاف المبكر (Early Stopping)',
    'Grid Search أم Randomized Search؟',
    'قبل الإطلاق: ستة أسئلة',
    'أسئلة مراجعة الفريق قبل التسليم',
    'أسئلة المناقشة بعد كل عرض',
    'PCA كميزانية تباين'
  ]);

  revise('محطة التطبيق: K-Means وPCA على بيانات منافذ', `<span class="ml-badge">تطبيق موجّه · 35 دقيقة</span><p class="ml-lead">بعد فهم Scaling شغّلوا مثال K-Means المحلول على بيانات منافذ من دون هدف y.</p><div class="ml-grid"><div class="ml-card"><h3>ما الذي ستشاهدونه؟</h3><ol><li>اختيار خصائص سلوكية فقط.</li><li>تعويض المفقود وتطبيق Scaling.</li><li>مقارنة K = 2 إلى K = 6.</li><li>اختيار K = 3 كمثال تعليمي.</li><li>تفسير متوسطات كل مجموعة.</li></ol></div><div class="ml-card orange"><h3>دور الطالب</h3><p>شغّل الخلايا بالترتيب، واقرأ الناتج والتفسير. جميع الأكواد والنتائج المطلوبة مكتملة.</p><a class="ml-download" href="downloads/SDA-AIE-111_Day2_KMeans.ipynb" download>فتح تطبيق K-Means لليوم الثاني</a></div></div>`, 'ml-activity');
  const fundamentalClusteringLabIndex = slides.findIndex(slide => slide.includes('<div class="slide-title">محطة التطبيق: K-Means وPCA على بيانات منافذ<'));
  if (fundamentalClusteringLabIndex >= 0) {
    slides[fundamentalClusteringLabIndex] = slides[fundamentalClusteringLabIndex].replace('محطة التطبيق: K-Means وPCA على بيانات منافذ', 'محطة التطبيق: K-Means على بيانات منافذ');
  }

  revise('المحطة الختامية لليوم الثالث: قارن واضبط دون لمس الاختبار', `<span class="ml-badge">تطبيق مجموعات · 50 دقيقة</span><div class="ml-grid"><div class="ml-card"><h3>المطلوب</h3><ol><li>شغّل Logistic Regression وRandom Forest.</li><li>قارنهما على بيانات التحقق نفسها وبـPR-AUC.</li><li>غيّر عتبة Logistic Regression ولاحظ Precision وRecall.</li><li>ابنِ نموذج Linear Regression وقِس MAE وRMSE وR².</li><li>اختر نموذج التصنيف ثم افتح الاختبار مرة واحدة.</li></ol></div><div class="ml-card orange"><h3>التسليم</h3><ul><li>جدول أثر العتبات.</li><li>جدول مقارنة نموذجي التصنيف.</li><li>نتائج نموذج الانحدار.</li><li>سبب اختيار النموذج النهائي.</li></ul><a class="ml-download" href="downloads/SDA-AIE-111_Day3_Model_Selection.ipynb" download>تنزيل دفتر اليوم الثالث الكامل</a></div></div>`, 'ml-activity');
  const finalDayThreeLabIndex = slides.findIndex(slide => slide.includes('<div class="slide-title">المحطة الختامية لليوم الثالث: قارن واضبط دون لمس الاختبار<'));
  if (finalDayThreeLabIndex >= 0) {
    slides[finalDayThreeLabIndex] = slides[finalDayThreeLabIndex].replace('المحطة الختامية لليوم الثالث: قارن واضبط دون لمس الاختبار', 'المحطة الختامية لليوم الثالث: طبّق وقارن النماذج');
  }

  revise('دفتر اليوم الأول: افتحه الآن', `<p class="ml-lead">في نهاية اليوم سنشغّل جولة عملية قصيرة على بيانات منافذ لنرى الفرق بين مخرجات أنواع التعلم. جميع الأكواد مكتملة وجاهزة.</p><div class="ml-grid"><div class="ml-card"><h3>ماذا ستشاهد؟</h3><ol><li>جدول بيانات حقيقي وخصائص X.</li><li>تصنيفًا يعطي فئة.</li><li>انحدارًا يعطي رقمًا.</li><li>K-Means يعطي مجموعات بلا y.</li></ol></div><div class="ml-card orange"><h3>ماذا يفعل الطالب؟</h3><p>يشغّل الخلايا بالترتيب ويقرأ الشرح الموجود تحت كل ناتج فقط. لا توجد كتابة أو أكواد ناقصة أو تسليم مطلوب.</p><a class="ml-download" href="downloads/SDA-AIE-111_Day1_Interactive_Workbook.ipynb" download>تنزيل دفتر اليوم الأول</a></div></div><div class="ml-note dark">هذا عرض تنفيذي تمهيدي. سنتعلم بناء الخطوات بأنفسنا في الأيام التالية.</div>`, 'ml-activity');
  const dayOnePracticalIndex = slides.findIndex(slide => slide.includes('<div class="slide-title">دفتر اليوم الأول: افتحه الآن<'));
  if (dayOnePracticalIndex >= 0) {
    slides[dayOnePracticalIndex] = slides[dayOnePracticalIndex]
      .replace('دفتر اليوم الأول: افتحه الآن', 'تطبيق نهاية اليوم الأول: شاهد أنواع التعلم على بيانات منافذ')
      .replace('في نهاية اليوم سنشغّل', 'بعد أن فهمنا الأنواع الثلاثة، سنشغّل');
  }

  // مزامنة التطبيق مع الشرح: لا يظهر دفتر اليوم الأول قبل شرح الأنواع الثلاثة.
  const dayOneDemoIndex = slides.findIndex(slide => slide.includes('<div class="slide-title">تطبيق نهاية اليوم الأول:'));
  const threeWaysComparisonIndex = slides.findIndex(slide => slide.includes('<div class="slide-title">مقارنة طرق التعلم الثلاث<'));
  if (dayOneDemoIndex >= 0 && threeWaysComparisonIndex >= 0) {
    const [dayOneDemo] = slides.splice(dayOneDemoIndex, 1);
    const updatedComparisonIndex = slides.findIndex(slide => slide.includes('<div class="slide-title">مقارنة طرق التعلم الثلاث<'));
    slides.splice(updatedComparisonIndex + 1, 0, dayOneDemo);
  }

  revise('محطة التطبيق 1: افهم بيانات منافذ', `<span class="ml-badge">تطبيق موجّه · 15 دقيقة</span><p class="ml-lead">افتح دفتر اليوم الثاني وشغّل الخلايا من البداية حتى نهاية المحطة 1. كل الأكواد مكتملة.</p><div class="ml-grid"><div class="ml-card"><h3>شغّل بالترتيب</h3><ol><li>استيراد pandas.</li><li>تحديد رابط ملف منافذ.</li><li>قراءة الملف.</li><li>عرض حجم الجدول.</li><li>مشاهدة أول خمسة صفوف.</li><li>عرض أسماء الأعمدة وأنواعها.</li></ol></div><div class="ml-card orange"><h3>ما الذي ستشاهده؟</h3><ul><li>عدد الصفوف والأعمدة.</li><li>شكل حالة واحدة داخل الجدول.</li><li>أسماء الأعمدة.</li><li>الفرق بين الأعمدة الرقمية والنصية.</li></ul></div></div><div class="ml-note dark">لا يوجد تسليم ولا أسئلة ناقصة. شغّل كل خلية، واقرأ الشرح والناتج، ثم عُد إلى العرض.</div>`, 'ml-activity');

  revise('محطة التطبيق 2: افحص البيانات ونظّفها', `<span class="ml-badge">تطبيق موجّه · 20 دقيقة</span><p class="ml-lead">تابع في الدفتر نفسه وشغّل خلايا المحطة 2 واحدة بعد الأخرى.</p><div class="ml-grid"><div class="ml-card"><h3>شغّل بالترتيب</h3><ol><li>عدّ القيم المفقودة وحساب نسبتها.</li><li>إنشاء نسخة للتنظيف.</li><li>إنشاء مؤشر لغياب التقييم.</li><li>تعويض القيم المفقودة.</li><li>فحص التكرار والنطاق.</li><li>عرض أعلى قيم السلة.</li></ol></div><div class="ml-card orange"><h3>ما الذي ستفهمه؟</h3><ul><li>لماذا لا نعوض كل مفقود بصفر.</li><li>كيف نحافظ على معنى غياب التقييم.</li><li>كيف نكتشف التكرار والقيم غير المنطقية.</li><li>لماذا نفحص القيمة المرتفعة قبل حذفها.</li></ul></div></div><div class="ml-note dark">جميع قرارات التنظيف محلولة داخل الدفتر؛ المطلوب تشغيل الخطوات وفهم أثر كل خطوة.</div>`, 'ml-activity');

  revise('محطة التطبيق 3: جهّز X وy بأمان', `<span class="ml-badge">تطبيق موجّه · 15 دقيقة</span><p class="ml-lead">تابع إلى المحطة 3 لتفصل الخصائص عن الهدف وتمنع تسرب البيانات.</p><div class="ml-grid"><div class="ml-card"><h3>شغّل بالترتيب</h3><ol><li>حفظ الهدف في y.</li><li>تحديد المعرّف وأعمدة المستقبل.</li><li>إنشاء X باستخدام drop().</li><li>عرض حجم X وحجم y.</li></ol></div><div class="ml-card orange"><h3>ما الذي ستفهمه؟</h3><ul><li>لماذا لا يدخل الهدف داخل X.</li><li>لماذا نستبعد المعرّف.</li><li>كيف تسبب معلومات المستقبل تسريبًا.</li><li>أن df الأصلي يبقى موجودًا بعد إنشاء X.</li></ul></div></div><div class="ml-note dark">لا يوجد تسليم. في نهاية المحطة سيكون X وy جاهزين للانتقال إلى التقسيم والتدريب.</div>`, 'ml-activity');

  const addLabButton = (title, file, label, instruction) => {
    const index = slides.findIndex(slide => slide.includes('<div class="slide-title">' + title + '<'));
    if (index < 0 || slides[index].includes(`href="downloads/${file}"`)) return;
    const block = `<a class="ml-download ml-station-link" href="downloads/${file}" download>${label}</a><p class="ml-station-hint">${instruction}</p>`;
    const cardBoundary = '</div></div><div class="ml-note';
    slides[index] = slides[index].includes(cardBoundary)
      ? slides[index].replace(cardBoundary, block + cardBoundary)
      : slides[index].replace('<div class="slide-footer"></div>', block + '<div class="slide-footer"></div>');
  };

  addLabButton('محطة التطبيق 1: افهم بيانات منافذ', 'SDA-AIE-111_Day2_Full_Day_Lab.ipynb', 'فتح محطة 1 في دفتر اليوم الثاني', 'شغّل من البداية حتى نهاية «المحطة 1 — افهم الجدول»، ثم عُد إلى العرض.');
  addLabButton('محطة التطبيق 2: افحص البيانات ونظّفها', 'SDA-AIE-111_Day2_Full_Day_Lab.ipynb', 'فتح محطة 2 في دفتر اليوم الثاني', 'تابع «المحطة 2 — افحص الجودة ونظّف نسخة من البيانات»، ثم عُد إلى العرض.');
  addLabButton('محطة التطبيق 3: جهّز X وy بأمان', 'SDA-AIE-111_Day2_Full_Day_Lab.ipynb', 'فتح محطة 3 في دفتر اليوم الثاني', 'تابع «المحطة 3 — جهّز X وy ومنع التسريب»، ثم عُد إلى العرض.');
  addLabButton('المحطة الختامية لليوم الثاني: ابنِ نموذج تصنيف كاملًا', 'SDA-AIE-111_Day2_Full_Day_Lab.ipynb', 'فتح المحطتين 4 و5 في دفتر اليوم الثاني', 'أكمل التقسيم وPipeline وBaseline ثم نموذج التصنيف.');
  addLabButton('تشغيل موجّه: غيّر العتبة وشاهد أثر القرار', 'SDA-AIE-111_Day3_Model_Selection.ipynb', 'فتح محطة العتبات في Colab', 'شغّل المحطتين 1 و2 فقط، ولا تنتقل إلى الانحدار بعد.');
  addLabButton('محطة التطبيق: ابنِ نموذج انحدار', 'SDA-AIE-111_Day3_Model_Selection.ipynb', 'فتح محطة الانحدار في Colab', 'شغّل «المحطة 3 — ابنِ نموذج انحدار»، ثم عُد إلى العرض.');

  removeSlideTitles(['كيف سنطبّق في اليوم الثاني؟']);

  const colabBase = 'https://colab.research.google.com/github/hanenalmayouf/FAML/blob/main/public/downloads/';
  const colabNotebooks = [
    'SDA-AIE-111_Day1_Interactive_Workbook.ipynb',
    'SDA-AIE-111_Day2_Full_Day_Lab.ipynb',
    'SDA-AIE-111_Day3_Model_Selection.ipynb',
    'SDA-AIE-111_Day2_KMeans.ipynb'
  ];
  slides.forEach((slide, index) => {
    colabNotebooks.forEach(file => {
      slides[index] = slides[index]
        .replace(`href="downloads/${file}" download`, `href="${colabBase}${file}" target="_blank" rel="noopener"`)
        .replace(/>تنزيل دفتر اليوم الأول</g, '>فتح تطبيق اليوم الأول في Google Colab<')
        .replace(/>تنزيل دفتر اليوم الثاني الكامل</g, '>فتح دفتر اليوم الثاني في Google Colab<')
        .replace(/>تنزيل دفتر اليوم الثالث الكامل</g, '>فتح دفتر اليوم الثالث في Google Colab<')
        .replace(/>تنزيل Lab التجميع</g, '>فتح Lab K-Means في Google Colab<');
    });
  });

  // اجعل قصة Clustering متصلة: كل شريحة تبدأ من السؤال الذي تركته السابقة.
  const clusteringLeads = [
    ['كيف يعمل التجميع تقنيًا؟', 'اخترنا الآن التجميع (Clustering) من بين أنواع التعلم غير الخاضع للإشراف. لدينا خصائص X بلا إجابة y؛ والمطلوب تكوين مجموعات من السجلات المتشابهة. فكيف يقرر النموذج أن سجلين متشابهان؟'],
    ['ما معنى التشابه والمسافة؟', 'قلنا إن Clustering يجمع السجلات المتشابهة. تقنيًا نمثل كل سجل كنقطة، ثم نستخدم المسافة: كلما اقتربت نقطتان في الخصائص عدّهما النموذج أكثر تشابهًا.'],
    ['كيف نختار خصائص التجميع؟', 'عرفنا أن المسافة تقارن الأرقام التي نعطيها للنموذج، لذلك يصبح السؤال الأهم: أي خصائص نختار حتى تعبّر كلمة «متشابه» عن الغرض العملي الصحيح؟'],
    ['لماذا نحتاج التحجيم قبل التجميع؟', 'اخترنا الخصائص التي تعبّر عن السلوك المطلوب، لكن بقيت مشكلة: إذا كان أحد الأعمدة بأرقام كبيرة جدًا فسيسيطر على المسافة. لذلك نحتاج التحجيم (Scaling) قبل تشغيل الخوارزمية.'],
    ['ماذا ندخل إلى K-Means وماذا تعيد؟', 'بعد اختيار الخصائص وتطبيق Scaling أصبحت البيانات جاهزة. سنستخدم K-Means، لكن قبل تشغيلها يجب أن نعرف بالضبط ماذا نعطيها وماذا ستعيد إلينا.'],
    ['كيف تعمل K-Means خطوة بخطوة؟', 'عرفنا أن مدخلاتنا هي X وعدد المجموعات K، وأن المخرجات أرقام مجموعات ومراكز. الآن نفتح الصندوق ونرى كيف تصل K-Means إلى هذه النتيجة خطوة بخطوة.'],
    ['كيف نختار عدد المجموعات K؟', 'عرفنا كيف تعمل K-Means، لكننا ما زلنا مطالبين بإعطائها عدد المجموعات K. لذلك نجرب أكثر من قيمة ونوازن بين جودة الفصل وسهولة تفسير النتيجة.'],
    ['كيف نفسر المجموعات؟', 'بعد اختيار K وتشغيل الخوارزمية نحصل على أرقام مثل 0 و1 و2. هذه الأرقام ليست أسماء مفهومة؛ لذلك تبدأ الآن خطوة تفسير كل مجموعة وتسميتها.']
  ];
  slides.forEach((slide, index) => {
    const transition = clusteringLeads.find(([title]) => slide.includes(`<div class="slide-title">${title}<`));
    if (transition) {
      slides[index] = slide.replace(/<p class="ml-lead">.*?<\/p>/, `<p class="ml-lead">${transition[1]}</p>`);
    }
  });

  const englishFirstTerms = [
    ['التعلم الخاضع للإشراف (Supervised Learning)', '<span dir="ltr">Supervised Learning</span> (التعلم الخاضع للإشراف)'],
    ['التعلم غير الخاضع للإشراف (Unsupervised Learning)', '<span dir="ltr">Unsupervised Learning</span> (التعلم غير الخاضع للإشراف)'],
    ['الانحدار الخطي (Linear Regression)', '<span dir="ltr">Linear Regression</span> (الانحدار الخطي)'],
    ['الانحدار اللوجستي (Logistic Regression)', '<span dir="ltr">Logistic Regression</span> (الانحدار اللوجستي)'],
    ['شجرة القرار (Decision Tree)', '<span dir="ltr">Decision Tree</span> (شجرة القرار)'],
    ['الغابة العشوائية (Random Forest)', '<span dir="ltr">Random Forest</span> (الغابة العشوائية)'],
    ['التعزيز المتدرج (Gradient Boosting)', '<span dir="ltr">Gradient Boosting</span> (التعزيز المتدرج)'],
    ['الترميز الأحادي (One-Hot Encoding)', '<span dir="ltr">One-Hot Encoding</span> (الترميز الأحادي)'],
    ['تعويض المفقود (Imputation)', '<span dir="ltr">Imputation</span> (تعويض القيم المفقودة)'],
    ['التحجيم (Scaling)', '<span dir="ltr">Scaling</span> (التحجيم)']
  ];
  slides.forEach((slide, index) => {
    slides[index] = englishFirstTerms.reduce(
      (updated, [arabicFirst, englishFirst]) => updated.replaceAll(arabicFirst, englishFirst),
      slide
    );
  });

  deck.innerHTML = slides.join('');
  const thresholdStates = {
    30: {tp:23, fn:2, fp:27, tn:48, recall:92, precision:46},
    50: {tp:18, fn:7, fp:12, tn:63, recall:72, precision:60},
    70: {tp:12, fn:13, fp:4, tn:71, recall:48, precision:75}
  };
  const updateThresholdSim = sim => {
    const input = sim.querySelector('input[type="range"]');
    const state = thresholdStates[input.value];
    if (!state) return;
    sim.querySelector('.threshold-value').textContent = (Number(input.value) / 100).toFixed(2);
    ['tp','fn','fp','tn'].forEach(key => {
      const bar = sim.querySelector(`[data-bar="${key}"]`);
      const total = key === 'tp' || key === 'fn' ? 25 : 75;
      bar.style.width = `${state[key] / total * 100}%`;
      bar.textContent = `${key.toUpperCase()} ${state[key]}`;
    });
    sim.querySelector('[data-value="tp"]').textContent = state.tp;
    sim.querySelector('[data-value="fp"]').textContent = state.fp;
    sim.querySelector('[data-metric="recall"]').textContent = `${state.recall}%`;
    sim.querySelector('[data-metric="precision"]').textContent = `${state.precision}%`;
    const direction = input.value === '30' ? 'خفض العتبة رفع Recall، لكنه زاد الإنذارات الزائدة.' : input.value === '70' ? 'رفع العتبة رفع Precision، لكنه فوّت حالات مصابة أكثر.' : 'هذه نقطة وسطية للمقارنة، وليست عتبة صحيحة دائمًا.';
    sim.querySelector('[data-explain]').textContent = `عند ${(Number(input.value) / 100).toFixed(2)}: اكتشفنا ${state.tp} حالة، وفاتتنا ${state.fn}، وأصدرنا ${state.fp} إنذارًا زائدًا. ${direction}`;
  };
  deck.querySelectorAll('[data-threshold-sim]').forEach(updateThresholdSim);
  deck.addEventListener('input', event => {
    const sim = event.target.closest('[data-threshold-sim]');
    if (sim) updateThresholdSim(sim);
    const cvSim = event.target.closest('[data-cv-sim]');
    if (cvSim) {
      const fold = Number(event.target.value);
      cvSim.querySelector('.cv-output').textContent = `الجولة ${fold}`;
      cvSim.querySelectorAll('.cv-fold').forEach((item, index) => {
        const validation = index + 1 === fold;
        item.classList.toggle('is-validation', validation);
        item.querySelector('small').textContent = validation ? 'فحص' : 'تدريب';
      });
      const training = [1,2,3,4,5].filter(value => value !== fold).join('، ');
      cvSim.querySelector('.cv-caption').textContent = `ندرب على المجموعات ${training}، ونفحص الأداء على المجموعة ${fold}.`;
    }
  });
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
  document.documentElement.classList.remove('course-loading');
})();
