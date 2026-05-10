import heroClinic from "@/assets/hero-clinic.jpg";
import treatmentRoom from "@/assets/treatment-room.jpg";
import servicesImg from "@/assets/services.jpg";
import smileImg from "@/assets/smile.jpg";
import diagnosticsImg from "@/assets/diagnostics.jpg";
import { useState } from "react";
import { toast } from "sonner";

const PHONE = "8 (499) 246-73-05";
const PHONE_TEL = "+74992467305";
const ADDRESS = "Зубовский б-р, Москва, 119034";

const services = [
  { title: "Терапия и лечение кариеса", desc: "Лечение под микроскопом, бесшумная анестезия, реставрация зуба за один визит.", price: "от 4 500 ₽" },
  { title: "Профессиональная гигиена", desc: "Чистка Air Flow, ультразвук, полировка и фторирование. Рекомендуется раз в 6 месяцев.", price: "от 5 900 ₽" },
  { title: "Имплантация", desc: "Импланты Straumann и Osstem. Гарантия, рассрочка, поэтапная оплата.", price: "от 35 000 ₽" },
  { title: "Протезирование", desc: "Коронки E-max, виниры, съёмные и несъёмные конструкции по слепку и 3D-сканеру.", price: "от 18 000 ₽" },
  { title: "Ортодонтия", desc: "Брекеты и элайнеры. Бесплатная консультация и план лечения с прогнозом.", price: "от 90 000 ₽" },
  { title: "Детская стоматология", desc: "Спокойный приём, лечение в игровой форме, серебрение и герметизация фиссур.", price: "от 2 800 ₽" },
];

const reviews = [
  { name: "Ольга К.", text: "Очень внимательный доктор, всё объяснили по снимку, лечение прошло безболезненно. Клиника аккуратная, в центре." },
  { name: "Дмитрий М.", text: "Делал гигиену и пломбу — приняли вовремя, без навязывания лишнего. Цены прозрачные." },
  { name: "Анна С.", text: "Ходим всей семьёй уже третий год. Спасибо за корректное отношение к ребёнку, дочка идёт без слёз." },
];

const steps = [
  { n: "01", t: "Звонок или заявка", d: "Подбираем удобное время в течение дня обращения." },
  { n: "02", t: "Осмотр и снимок", d: "Диагностика, КТ при необходимости, прозрачный план лечения и смета." },
  { n: "03", t: "Лечение", d: "Современные материалы, контроль комфорта, фиксированная стоимость." },
  { n: "04", t: "Сопровождение", d: "Напоминание о профилактике, гарантия на работы." },
];

const Index = () => {
  const [form, setForm] = useState({ name: "", phone: "", service: "Консультация" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Укажите имя и телефон");
      return;
    }
    toast.success("Заявка отправлена. Перезвоним в течение 15 минут.");
    setForm({ name: "", phone: "", service: "Консультация" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-background/80 border-b border-border">
        <div className="container-tight flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <ToothMark className="h-7 w-7 text-primary" />
            <span className="font-display">На&nbsp;Зубовском</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground">Услуги</a>
            <a href="#reviews" className="hover:text-foreground">Отзывы</a>
            <a href="#cases" className="hover:text-foreground">Работы</a>
            <a href="#process" className="hover:text-foreground">Как мы работаем</a>
            <a href="#contacts" className="hover:text-foreground">Контакты</a>
          </nav>
          <a href={`tel:${PHONE_TEL}`} className="hidden sm:inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition">
            {PHONE}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="container-tight pt-10 sm:pt-16 pb-12 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary-soft text-primary px-3 py-1.5 rounded-full text-xs font-medium mb-5">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              Принимаем сегодня · Зубовский бульвар
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] mb-5">
              Стоматология <span className="text-primary">На&nbsp;Зубовском</span> — лечение в центре Москвы
            </h1>
            <p className="text-lg text-muted-foreground mb-7 max-w-lg">
              Семейная клиника на Зубовском бульваре. Терапия, гигиена, имплантация и протезирование. Запись в день обращения, прозрачный план лечения и фиксированная смета.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <a href="#request" className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3.5 rounded-full font-medium shadow-soft hover:translate-y-[-1px] transition">
                Записаться на приём
              </a>
              <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center justify-center bg-secondary text-foreground px-6 py-3.5 rounded-full font-medium hover:bg-muted transition">
                {PHONE}
              </a>
            </div>

            <div className="flex items-center gap-5 text-sm">
              <div className="flex items-center gap-2 bg-card border border-border rounded-full px-3.5 py-2 shadow-card">
                <span className="text-accent font-semibold">★ 4,8</span>
                <span className="text-muted-foreground">· 36 отзывов на Яндекс Картах</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-muted-foreground">
                <span>5 лет на карте</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={heroClinic}
              alt="Интерьер стоматологии На Зубовском"
              width={1536}
              height={1024}
              className="rounded-3xl shadow-soft w-full h-[420px] sm:h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -left-3 sm:left-6 bg-card border border-border rounded-2xl shadow-soft p-4 flex items-center gap-3 max-w-[260px]">
              <div className="w-11 h-11 rounded-full bg-primary-soft flex items-center justify-center text-primary">
                <ClockIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-semibold">Сегодня свободно</div>
                <div className="text-xs text-muted-foreground">14:30 · 16:00 · 18:15</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container-tight py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            ["4,8", "рейтинг на Яндексе"],
            ["36", "отзывов пациентов"],
            ["5 лет", "на Зубовском бульваре"],
            ["в день", "обращения принимаем"],
          ].map(([a, b]) => (
            <div key={b}>
              <div className="text-2xl sm:text-3xl font-bold text-primary font-display">{a}</div>
              <div className="text-sm text-muted-foreground">{b}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="container-tight py-16 sm:py-24">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <div className="text-sm text-primary font-medium mb-2">Услуги клиники</div>
            <h2 className="text-3xl sm:text-4xl font-bold max-w-xl">Полный спектр стоматологии для взрослых и детей</h2>
          </div>
          <a href="#request" className="text-sm font-medium text-primary hover:underline">Уточнить стоимость →</a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <article key={s.title} className="bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-soft transition">
              <div className="w-10 h-10 rounded-xl bg-primary-soft text-primary flex items-center justify-center mb-4 font-semibold">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
              <div className="text-sm font-semibold text-foreground">{s.price}</div>
            </article>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-5">
          <img src={servicesImg} alt="Работа врача-стоматолога" loading="lazy" width={1280} height={896} className="rounded-2xl object-cover h-64 w-full" />
          <img src={diagnosticsImg} alt="Диагностика и КТ-снимок" loading="lazy" width={1280} height={896} className="rounded-2xl object-cover h-64 w-full" />
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="bg-secondary/40 border-y border-border py-16 sm:py-24">
        <div className="container-tight">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <div className="text-sm text-primary font-medium mb-2">Отзывы</div>
              <h2 className="text-3xl sm:text-4xl font-bold">Нас рекомендуют пациенты</h2>
              <p className="text-muted-foreground mt-2">4,8 на Яндекс Картах · 36 отзывов</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {reviews.map((r) => (
              <div key={r.name} className="bg-card border border-border rounded-2xl p-6 shadow-card">
                <div className="text-accent mb-3">★★★★★</div>
                <p className="text-sm leading-relaxed text-foreground/90 mb-4">«{r.text}»</p>
                <div className="text-sm font-medium">{r.name}</div>
                <div className="text-xs text-muted-foreground">Яндекс Карты</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases / Before-After */}
      <section id="cases" className="container-tight py-16 sm:py-24">
        <div className="text-sm text-primary font-medium mb-2">Наши работы</div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 max-w-2xl">Результат, который видно</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-card">
            <img src={smileImg} alt="Эстетическая реставрация" loading="lazy" width={1280} height={896} className="w-full h-72 object-cover" />
            <div className="p-6">
              <div className="text-xs text-muted-foreground mb-1">Эстетическая реставрация</div>
              <h3 className="font-semibold mb-1">Виниры E-max, верхняя линия</h3>
              <p className="text-sm text-muted-foreground">Цвет подобран по шкале Vita, фиксация за два визита.</p>
            </div>
          </div>
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-card">
            <img src={treatmentRoom} alt="Лечебный кабинет" loading="lazy" width={1280} height={896} className="w-full h-72 object-cover" />
            <div className="p-6">
              <div className="text-xs text-muted-foreground mb-1">Имплантация</div>
              <h3 className="font-semibold mb-1">Установка импланта Straumann</h3>
              <p className="text-sm text-muted-foreground">Хирургический шаблон, контроль КТ, гарантия.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process with SVG animation */}
      <section id="process" className="bg-secondary/40 border-y border-border py-16 sm:py-24">
        <div className="container-tight grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-sm text-primary font-medium mb-2">Как мы работаем</div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 max-w-md">Прозрачный путь от звонка до результата</h2>
            <ol className="space-y-5">
              {steps.map((s) => (
                <li key={s.n} className="flex gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">{s.n}</div>
                  <div>
                    <h3 className="font-semibold mb-1">{s.t}</h3>
                    <p className="text-sm text-muted-foreground">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <ProcessAnimation />
        </div>
      </section>

      {/* Request form */}
      <section id="request" className="container-tight py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 bg-card border border-border rounded-3xl p-6 sm:p-10 shadow-soft">
          <div>
            <div className="text-sm text-primary font-medium mb-2">Запись на приём</div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Перезвоним в течение 15 минут</h2>
            <p className="text-muted-foreground mb-6">Оставьте номер — администратор подберёт удобное время и расскажет о стоимости. Без автообзвона и спама.</p>
            <ul className="space-y-2 text-sm text-foreground/90">
              <li>· Бесплатная первичная консультация ортодонта</li>
              <li>· Рассрочка 0% на имплантацию и протезирование</li>
              <li>· Принимаем в день обращения</li>
            </ul>
          </div>
          <form onSubmit={submit} className="space-y-4">
            <div>
              <label className="text-sm font-medium block mb-1.5">Ваше имя</label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-background border border-input rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-ring/30 focus:border-primary transition"
                placeholder="Как к вам обращаться"
              />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1.5">Телефон</label>
              <input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                inputMode="tel"
                className="w-full bg-background border border-input rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-ring/30 focus:border-primary transition"
                placeholder="+7 (___) ___-__-__"
              />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1.5">Услуга</label>
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full bg-background border border-input rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-ring/30 focus:border-primary transition"
              >
                <option>Консультация</option>
                <option>Лечение кариеса</option>
                <option>Гигиена</option>
                <option>Имплантация</option>
                <option>Протезирование</option>
                <option>Ортодонтия</option>
                <option>Детский приём</option>
              </select>
            </div>
            <button type="submit" className="w-full bg-primary text-primary-foreground rounded-xl py-3.5 font-medium shadow-soft hover:opacity-95 transition">
              Записаться
            </button>
            <p className="text-xs text-muted-foreground">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.</p>
          </form>
        </div>
      </section>

      {/* Contacts + Map */}
      <section id="contacts" className="container-tight pb-20">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 bg-card border border-border rounded-2xl p-6 shadow-card">
            <h3 className="text-xl font-semibold mb-4">Контакты</h3>
            <div className="space-y-4 text-sm">
              <div>
                <div className="text-muted-foreground mb-1">Адрес</div>
                <div className="font-medium">{ADDRESS}</div>
              </div>
              <div>
                <div className="text-muted-foreground mb-1">Телефон</div>
                <a href={`tel:${PHONE_TEL}`} className="font-medium text-primary">{PHONE}</a>
              </div>
              <div>
                <div className="text-muted-foreground mb-1">Время работы</div>
                <div className="font-medium">Пн–Сб: 9:00 — 21:00<br />Вс: 10:00 — 18:00</div>
              </div>
              <div>
                <div className="text-muted-foreground mb-1">Метро</div>
                <div className="font-medium">Парк культуры · Смоленская</div>
              </div>
            </div>
            <a href={`tel:${PHONE_TEL}`} className="mt-6 inline-flex w-full justify-center bg-primary text-primary-foreground rounded-xl py-3 font-medium hover:opacity-95 transition">
              Позвонить
            </a>
          </div>
          <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-border shadow-card min-h-[360px]">
            <iframe
              title="Карта: Зубовский бульвар"
              src="https://yandex.ru/map-widget/v1/?ll=37.587%2C55.736&z=16&pt=37.587%2C55.736%2Cpm2rdm&l=map"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 360 }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container-tight flex flex-col sm:flex-row justify-between gap-4 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} Стоматология На Зубовском</div>
          <div>{ADDRESS} · {PHONE}</div>
        </div>
      </footer>
    </div>
  );
};

/* --- Inline SVG illustrations --- */

function ToothMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 3c-2.5 0-4 1.8-4 4 0 2.2 1 3 1.4 5.4.5 2.7.4 7.6 2.6 7.6 1.7 0 1.6-3 3-3s1.3 3 3 3c2.2 0 2.1-4.9 2.6-7.6C16 10 17 9.2 17 7c0-2.2-1.5-4-4-4-1.6 0-2 1-3 1S8.6 3 7 3z" />
    </svg>
  );
}

function ClockIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function ProcessAnimation() {
  return (
    <div className="relative bg-card border border-border rounded-3xl p-8 shadow-card">
      <svg viewBox="0 0 400 320" className="w-full h-auto">
        {/* Path between steps */}
        <path
          d="M 60 80 Q 200 40 340 80 Q 200 160 60 240 Q 200 280 340 240"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeDasharray="6 8"
          opacity="0.35"
        />

        {/* Pulse rings around tooth */}
        <g transform="translate(200 160)">
          <circle r="38" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.4">
            <animate attributeName="r" from="38" to="80" dur="2.4s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.5" to="0" dur="2.4s" repeatCount="indefinite" />
          </circle>
          <circle r="38" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.3">
            <animate attributeName="r" from="38" to="80" dur="2.4s" begin="1.2s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.5" to="0" dur="2.4s" begin="1.2s" repeatCount="indefinite" />
          </circle>

          {/* Tooth */}
          <g style={{ transformOrigin: "center", animation: "tooth-pulse 2.4s ease-in-out infinite" }}>
            <circle r="34" fill="hsl(var(--primary-soft))" />
            <path
              d="M -10 -16 c -7 0 -11 5 -11 11 0 6 3 8 4 15 1 7 1 20 7 20 5 0 4 -8 8 -8 s 3 8 8 8 c 6 0 6 -13 7 -20 1 -7 4 -9 4 -15 0 -6 -4 -11 -11 -11 -4 0 -6 3 -8 3 s -4 -3 -8 -3 z"
              fill="hsl(var(--primary))"
              transform="scale(1.15)"
            />
          </g>
        </g>

        {/* Step nodes */}
        {[
          { x: 60, y: 80, n: "1" },
          { x: 340, y: 80, n: "2" },
          { x: 60, y: 240, n: "3" },
          { x: 340, y: 240, n: "4" },
        ].map((s, i) => (
          <g key={s.n}>
            <circle cx={s.x} cy={s.y} r="22" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />
            <circle cx={s.x} cy={s.y} r="22" fill="none" stroke="hsl(var(--accent))" strokeWidth="2"
              strokeDasharray="138" strokeDashoffset="138"
              style={{ animation: `draw 1.5s ease-out ${i * 0.4}s forwards` }} />
            <text x={s.x} y={s.y + 5} textAnchor="middle" fontSize="14" fontWeight="700" fill="hsl(var(--primary))" fontFamily="Manrope, sans-serif">{s.n}</text>
          </g>
        ))}
      </svg>
      <div className="text-center text-sm text-muted-foreground mt-2">От первого звонка до здоровой улыбки</div>
    </div>
  );
}

export default Index;
