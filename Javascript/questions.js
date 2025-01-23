// Array of questions grouped by category (25 questions each)

const questions = [
  {
    category: "HTML",
    questions: [
      // 1
      {
        question: "HTML nima?",
        options: ["Dasturlash tili", "HyperText Markup Language", 'Style yaratish tili', "Ma'lumotlar bazasi tili"],
        correctAnswer: 1,
      },
      // 2
      {
        question: "<h1> tegining vazifasi nima?",
        options: ["Havolalar yaratish", "Eng katta sarlavha yaratish", 'Paragraf yaratish', "Rasm qo'shish"],
        correctAnswer: 1,
      },
      // 3
      {
        question: "<a> tegi nimani anglatadi?",
        options: ["Audio", "Video", "Havola (link)", "Rasmlar"],
        correctAnswer: 2,
      },
      // 4
      {
        question: "HTMLda matnni qalin ko'rinishda qilish uchun qaysi teg ishlatiladi?",
        options: ["<b>", "<i>", "<u>", "<p>"],
        correctAnswer: 0,
      },
      // 5
      {
        question: "HTMLda tasvirni qo'shish uchun qaysi teg ishlatiladi?",
        options: ["<img>", "<image>", "<picture>", "<photo>"],
        correctAnswer: 0,
      },
      // 6
      {
        question: "HTMLda qaysi teg jadval yaratish uchun ishlatiladi?",
        options: ["<tr>", "<td>", "<th>", "<table>"],
        correctAnswer: 3,
      },
      // 7
      {
        question: "HTMLda qaysi atribut havola manzilini ko'rsatadi?",
        options: ["href", "src", "alt", "title"],
        correctAnswer: 0,
      },
      // 8
      {
        question: "<ul> tegi nimani anglatadi?",
        options: ["Belgili ro'yxat", "Jadval", "Belgisiz ro'yxat", "Havola"],
        correctAnswer: 2,
      },
      // 9
      {
        question: "HTMLda yangi qatorga o'tish uchun qaysi teg ishlatiladi?",
        options: ["<p>", "<br>", "<hr>", "<div>"],
        correctAnswer: 1,
      },
      // 10
      {
        question: "HTMLda bo'sh joyni ko'rsatish uchun qaysi teg ishlatiladi?",
        options: ["&nbsp;", "<space>", "<tab>", "&br;"],
        correctAnswer: 0,
      },
      // 11
      {
        question: "HTMLda <!DOCTYPE> nimani anglatadi?",
        options: ["CSS ulash", "Rasm yuklash", "Faylni bosma shaklda chiqarish", "HTML faylning versiyasini aniqlash"],
        correctAnswer: 3,
      },
      // 12
      {
        question: "HTML hujjati qaysi teg bilan boshlanadi?",
        options: ["<html>", "<body>", "<head>", "<meta>"],
        correctAnswer: 0,
      },
      // 13
      {
        question: "Qaysi teg matnni qiyshaytirib yozadi?",
        options: ["<u>", "<b>", "<i>", "<p>"],
        correctAnswer: 2,
      },
      // 14
      {
        question: "HTMLda rasmning alternativ matnini ko'rsatish uchun qaysi atribut ishlatiladi?",
        options: ["src", "alt", "title", "href"],
        correctAnswer: 1,
      },
      // 15
      {
        question: "HTMLda qaysi teg gorizontal chiziq chizadi?",
        options: ["<hr>", "<br>", "<div>", "<h>"],
        correctAnswer: 0,
      },
      // 16
      {
        question: "<title> tegi qayerda ishlatiladi?",
        options: ["Body ichida", "Head ichida", "Footer ichida", "Jadval ichida"],
        correctAnswer: 1,
      },
      // 17
      {
        question: "HTML hujjatida qaysi teg kontentni ajratib turadi?",
        options: ["<div>", "<span>", "<section>", "Barchasi"],
        correctAnswer: 3,
      },
      // 18
      {
        question: "<meta> tegi qayerda ishlatiladi?",
        options: ["Body", "Head", "Footer", "Rasm tagida"],
        correctAnswer: 1,
      },
      // 19
      {
        question: "HTMLda qaysi teg oddiy matn sarlavhasini aniqlaydi?",
        options: ["<h>", "<header>", "<h1>", "<head>"],
        correctAnswer: 2,
      },
      // 20
      
      // 21
      {
        question: "HTML hujjatining asosiy qismi qaysi teg ichida yoziladi?",
        options: ["<body>", "<main>", "<article>", "<section>"],
        correctAnswer: 0,
      },
      // 22
      {
        question: "Qaysi teg matnning ustiga o'qib bo'lmaydigan qilib chizib qo'yadi?",
        options: ["strike", "del", "text-decoration: line-through", "None"],
        correctAnswer: 1,
      },
      // 23
      {
        question: "Faviconni HTMLga qanday qo'shish mumkin?",
        options: ["<img> orqali", "<link> orqali", "<meta> orqali", "<title> orqali"],
        correctAnswer: 1,
      },
      // 24
      {
        question: "<iframe> tegi nimani anglatadi?",
        options: ["Rasmni qo'yish", "Hujjatni ichiga qo'yish", "Video yuklash", "Matn yozish"],
        correctAnswer: 2,
      },
      // 25
     
      // 26
      {
        question: "HTMLda qaysi atribut shaklning jo'natiladigan manzilini belgilaydi?",
        options: ["action", "method", "enctype", "name"],
        correctAnswer: 0,
      },
      // 27
      {
        question: "<strong> tegi HTMLda qanday vazifani bajaradi?",
        options: ["Matnni chiroyli qilish", "Matnni muhimligini ko'rsatish", "Matnni yon tomonga egish", "Matnni ustiga chizish"],
        correctAnswer: 1,
      },
      // 28
      
      // 29
      {
        question: "HTMLda qaysi atribut kiritilgan ma'lumotni cheklash uchun ishlatiladi?",
        options: ["minlength", "maxlength", "size", "placeholder"],
        correctAnswer: 1,
      },
      // 30
      {
        question: "HTMLda <mark> tegining vazifasi nima?",
        options: ["Matnni belgilash (ajratib ko'rsatish)", "Matnni yashirish", "Matnni katta qilish", "Matnni bo'sh joy bilan ajratish"],
        correctAnswer: 0,
      },
      // 31
      {
        question: "<nav> tegi HTMLda qanday maqsadda ishlatiladi?",
        options: [" Sayt bo'ylab harakatlanish (navigatsiya)", "Matnni chiroyli ko'rsatish", "Videoni qo'yish", "Rasmlarni qo'shish"],
        correctAnswer: 0,
      },
      // 32
      {
        question: "HTMLda <fieldset> tegi nima uchun ishlatiladi?",
        options: ["Shaklni birlashtirish uchun", "Shakldagi elementlarni guruhlash uchun", "Ma'lumotlar bazasini ulash uchun", "Jadvalni sarlavhasini o'zgartirish uchun"],
        correctAnswer: 1,
      },
      // 33
      {
        question: "HTMLda <legend> tegi qayerda ishlatiladi?",
        options: ["<fieldset> ichida", "<form> ichida", "<table> ichida", "<section> ichida"],
        correctAnswer: 0,
      },
      // 34
      {
        question: "Qaysi teg audio faylni HTML sahifasida qo'shadi?",
        options: ["<audio>", "<sound>", "<music>", "<play>"],
        correctAnswer: 0,
      },
      // 35
      {
        question: "HTMLda <canvas> tegi nimani anglatadi?",
        options: ["Grafika chizish joyi", "Matnni o'zgartirish joyi", "Ma'lumotlar joyi", "Audio o'ynash"],
        correctAnswer: 0,
      },
      // 36
      {
        question: "HTMLda qanday qilib tugmani yaratish mumkin?",
        options: ["<btn>", "<button>", "<input>", "<click>"],
        correctAnswer: 1,
      },
      // 37
      {
        question: "HTMLda atributlar qayerda yoziladi?",
        options: ["Teg ichida", "Teg tashqarisida", "Body qismining ichida", "Faqat HTML5da mavjud"],
        correctAnswer: 0,
      },
      // 38
      {
        question: "HTMLda giperhavola yaratish uchun qaysi teg ishlatiladi?",
        options: ["<a>", "<link>", "<href>", "<nav>"],
        correctAnswer: 0,
      },
      // 39
      {
        question: "<a> tegi uchun target='_blank' atributining vazifasi nima?",
        options: ["Havolani shu sahifada yangilash", "Havolani yangi oynada ochish", "Havolani yashirish", "Havolani faqat mobil qurilmalarda ochish"],
        correctAnswer: 1,
      },
      // 40
      {
        question: "HTMLda sahifa ichidagi ma'lum bir joyga havola qilish uchun nima ishlatiladi?",
        options: ['<a href="#id">', '<a id="id">', '<a link="id">', '<a name="id">'],
        correctAnswer: 0,
      },
      // 41
      {
        question: "<link> tegi odatda nimani belgilash uchun ishlatiladi?",
        options: ["Sahifadagi havolani", "Tashqi resursni ulash", "Matnni qalin qilish", "JavaScript fayllarni ulash"],
        correctAnswer: 1,
      },
      // 42
      {
        question: "Tashqi CSS faylni ulash uchun qaysi teg ishlatiladi?",
        options: ["<style>", "<link>", "<a>", "<css>"],
        correctAnswer: 1,
      },
      // 43
      {
        question: "Media querylar qaysi CSS qoidasi uchun ishlatiladi?",
        options: ["Statik dizaynni yaratish uchun", "Sahifani bosib chiqarish uchun", "Turli qurilmalar uchun moslashuvchan dizayn yaratish uchun", "Matnni qalin qilish uchun"],
        correctAnswer: 2,
      },
      // 44
      {
        question: "Quyidagi media query qaysi ekran uchun ishlatiladi?@media (max-width: 480px) { ... } ",
        options: ["kompyuterlar", "Printerlar", "planshetlar", "Mobil qurilmalar"],
        correctAnswer: 3,
      },
        

    ],
  },

  {
    category: "CSS",
    questions: [
      // 1
      {
        question: "CSS qaysi maqsadda ishlatiladi?",
        options: ['HTML hujjatiga stil berish uchun', 'JavaScriptni bajarish uchun', 'Brauzerda fayllarni yuklash uchun', 'Boshqa saytlardan havola olish uchun'],
        correctAnswer: 0,
      },
      // 2
      {
        question: "Inline CSS qanday ishlatiladi?",
        options: ['<style> tegi ichida', 'HTML teglari uchun style atributida', '.css faylida', '<link> orqali'],
        correctAnswer: 1,
      },
      // 3
      {
        question: "CSS qoidasi qanday tuziladi?",
        options: ['<selector> { property: value; }', '<selector> { value: property; }', '{ selector: property; value;}', '{ value: selector; property; }'],
        correctAnswer: 0,
      },
      // 4
      {
        question: "Quyidagi kodni ko‘rib chiqing, nima noto‘g‘ri?  body {background-color blue;}",
        options: ['body noto‘g‘ri selector ishlatilgan', 'Property ishlatilmagan', 'Property va qiymat orasida : yetishmaydi', 'Tugatilmagan ; belgisi bor'],
        correctAnswer: 2,
      },
      // 5
      {
        question: "CSS qoidalarining ustuvorligi qanday tartibda?",
        options: ['Inline CSS > Ichki CSS > Tashqi CSS', 'Tashqi CSS > Ichki CSS > Inline CSS', 'Inline CSS > Tashqi CSS > Ichki CSS', 'Ichki CSS > Inline CSS > Tashqi CSS'],
        correctAnswer: 0,
      },
      // 6
      {
        question: "Matnni qalin qilish uchun qaysi property ishlatiladi?",
        options: ['font-weight', 'font-style', 'font-size', 'text-style'],
        correctAnswer: 0,
      },
      // 7
      {
        question: "Matnni markazga yo‘naltirish uchun qaysi property ishlatiladi?",
        options: ['align-content', 'justify-text', 'text-align', 'center-text'],
        correctAnswer: 2,
      },
      // 8
      {
        question: "Quyidagilardan qaysi biri shrift o‘lchamini o‘rnatadi?",
        options: ['font-size', 'font-height', 'text-height', 'text-size'],
        correctAnswer: 0,
      },
      // 9
      {
        question: "Matnga chiziq chizish uchun qaysi property ishlatiladi?",
        options: ['text-decoration', 'text-line', 'line-decoration', 'line-through'],
        correctAnswer: 0,
      },
      // 10
     
      // 11
       {
        question: "CSSda padding nima qiladi?",
        options: ['Tashqi bo‘shliqni belgilaydi', 'Ichki bo‘shliqni belgilaydi', 'Chegarani belgilaydi', 'Rasmni kengaytiradi'],
        correctAnswer: 1,
      },
      // 12
      {
        question: "Borderning kengligini belgilash uchun qaysi property ishlatiladi?",
        options: ['border-size', 'border-width', 'border-style', 'border-height'],
        correctAnswer: 1,
      },
      // 13
      {
        question: "Elementga qo‘shimcha tashqi bo‘shliq berish uchun qaysi property ishlatiladi?",
        options: ['margin', 'padding', 'border', 'gap'],
        correctAnswer: 0,
      },
      // 14
      {
        question: "Qaysi property yordamida elementning kengligi belgilanadi?",
        options: ['max-width', 'content-width', 'outer-width', 'width'],
        correctAnswer: 3,
      },
      // 15
      {
        question: "Quyidagi borderni belgilash uchun to‘g‘ri kodni toping: Qalin, qizil, chiziqli.",
        options: ['border: solid red 5px;', 'border: red solid 5px;', 'border: 5px solid red;', 'border: 5px red solid;'],
        correctAnswer: 2,
      },
      // 16
      {
        question: "Elementning fon rangi uchun qaysi property ishlatiladi?",
        options: ['color', 'background', 'background-color', 'color-background'],
        correctAnswer: 2,
      },
      // 17
      {
        question: "Quyidagi kod nima qiladi? color: #ffffff;",
        options: ['Matnni qora rangga o‘zgartiradi', 'Matnni oq rangga o‘zgartiradi', 'Matnni shaffof qiladi', 'Matn rangini o‘zgartirmaydi'],
        correctAnswer: 1,
      },
      // 18
      {
        question: "RGBAda alfa nimani ifodalaydi?",
        options: ['Rang darajasini', 'Rang shaffofligini', 'Rang kontrastini', 'Rang hajmini'],
        correctAnswer: 1,
      },
      // 19
      {
        question: "Fonga rasm qo‘shish uchun qaysi property ishlatiladi?",
        options: ['background-image', 'background-picture', 'image-background', 'picture-background'],
        correctAnswer: 0,
      },
      // 20
      {
        question: "Gradients uchun to‘g‘ri sintaksisni toping:",
        options: ['background-color: gradient(to right, red, blue);', 'background: linear-gradient(to right, red, blue);', 'gradient: linear-gradient(to right, red, blue);', 'color-gradient: linear-gradient(to right, red, blue);'],
        correctAnswer: 1,
      },
        // 21
      {
        question: "Flexboxda asosiy o‘qni belgilash uchun qaysi property ishlatiladi?",
        options: ['flex-direction', 'justify-content', 'align-items', 'order'],
        correctAnswer: 0,
      },
      // 22
      {
        question: "Flexboxda joylashishni markazlashtirish uchun to‘g‘ri kodni toping: display: flex; justify-content: center; align-items: ____ ; ",
        options: ['flex-start', 'center', 'baseline', 'flex-end'],
        correctAnswer: 1,
      },
      // 23
      {
        question: "Grid tizimida qatorlar orasidagi bo‘shliqni belgilash uchun qaysi property ishlatiladi?",
        options: ['grid-gap', 'row-gap', 'column-gap', 'grid-template-gap'],
        correctAnswer: 1,
      },
      // 24
      {
        question: "Quyidagi kodda nima noto‘g‘ri? display: grid; grid-template-columns: 100px, 200px",
        options: ['grid-template-columns noto‘g‘ri ishlatilgan', ', o‘rniga (bo‘sh joy) ishlatilishi kerak', 'Kengliklar noto‘g‘ri', 'Grid faollashtirilmagan'],
        correctAnswer: 1,
      },
      // 25
      {
        question: "Flexboxda elementlarni asosiy o‘q bo‘ylab bo‘lish uchun qaysi property ishlatiladi?",
        options: ['align-content', 'align-items', 'justify-content', 'flex-grow'],
        correctAnswer: 2,
      },
      // 26
      {
        question: "Static pozitsiya nima?",
        options: ['Elementning standart pozitsiyasi', 'Elementni absolyut joylashuvga o‘tkazadi', 'Elementni boshqa joyga siljitadi', 'Elementni markazlashtiradi'],
        correctAnswer: 0,
      },
      // 27
      {
        question: "position: relative qaysi holatda ishlatiladi?",
        options: ['Elementni boshqa elementga nisbatan joylashtirish uchun', 'Elementni standart joylashtirish uchun', 'Elementni asosiy o‘qqa bog‘lash uchun', 'Elementni boshqa elementdan ajratish uchun'],
        correctAnswer: 1,
      },
      // 28
      {
        question: "z-index qaysi maqsadda ishlatiladi?",
        options: ['Elementni boshqa element ustiga yoki ostiga joylashtirish uchun', 'Elementni markazlashtirish uchun', 'Rangni o‘zgartirish uchun', 'Elementning kengligini o‘zgartirish uchun'],
        correctAnswer: 0,
      },
      // 29
      {
        question: "Quyidagi kodda element qayerda joylashadi? position:fixed; top:10px; left:20px;",
        options: ['Sahifaning yuqori chap burchagida', 'Brauzerning yuqori chap burchagida', 'O‘rtada joylashadi', 'Hech qayerda ko‘rinmaydi'],
        correctAnswer: 1,
      },
      // 30
      {
        question: "absolute pozitsiyadagi element qaysi elementga nisbatan joylashadi?",
        options: ['relative bo‘lgan eng yaqin ajdodga', 'Hujjatning yuqori chap burchagiga', 'Brauzerning chap burchagiga', 'Har doim boshqa elementga bog‘liq emas'],
        correctAnswer: 0,
      },
       // 31
       {
        question: "Elementni aylantirish uchun qaysi property ishlatiladi?",
        options: ['transform', 'rotate', 'translate', 'scale'],
        correctAnswer: 0,
      },
      // 32
      {
        question: "Transformlar qaysi birliklarda ishlaydi?",
        options: ['Pixel yoki foiz', 'Faqat foiz', 'Gradus (deg), px, foiz', 'Faqat pixel'],
        correctAnswer: 2,
      },
      // 33
      {
        question: "CSS animatsiya yaratish uchun qaysi qoida ishlatiladi?",
        options: ['@animation', '@transition', '@transform', '@keyframes'],
        correctAnswer: 3,
      },
      // 34
      {
        question: "CSSda animatsiya davomiyligini belgilash uchun qaysi property ishlatiladi?",
        options: ['animation-time', 'animation-duration', 'transition-time', 'duration'],
        correctAnswer: 1,
      },
      // 35
      {
        question: "transition qachon ishlatiladi?",
        options: ['Bir elementdan boshqasiga o‘tishda', 'Elementni pozitsiyalash uchun', 'Faqat hover effekti uchun', 'Elementlar ustida o‘tish animatsiyalarini yaratish uchun'],
        correctAnswer: 3,
      },
      // 36
      {
        question: "Media query qanday maqsadda ishlatiladi?",
        options: ["Faqat ranglarni o'zgartirish uchun", "Faqat shrift o'lchamlarini belgilash uchun", "Har xil ekran o'lchamlari uchun stil yozish uchun", 'Animatsiyalar yaratish uchun'],
        correctAnswer: 2,
      },
      // 37
      {
        question: "Quyidagi kod nima qiladi? @media (max-width: 768px) { body  {background-color: lightblue; }}",
        options: ["Ekran kengligi 768px yoki kichik bo'lsa, fonni och ko‘k rangga o‘zgartiradi", "Ekran kengligi faqat 768px bo'lganda fonni o'zgartiradi", "Har doim fonni o'zgartiradi", "Ekran kengligi 768px dan katta bo'lsa, fonni o'zgartiradi"],
        correctAnswer: 0,
      },
      // 38
      {
        question: "Quyidagi media query uchun to‘g‘ri sintaksisni toping:",
        options: ['@media (max-screen: 500px)', '@media (max-width: 500px)', '@media [max-width: 500px]', '@media {max-width: 500px}'],
        correctAnswer: 1,
      },
      // 39
      {
        question: "@media (min-width: 1200px) kodi nimani anglatadi?",
        options: ['Ekran kengligi 1200px dan kichik bo‘lsa, kod ishlaydi', 'Faqat mobil qurilmalar uchun ishlaydi', 'Har doim ishlaydi', 'Ekran kengligi 1200px dan katta yoki teng bo‘lsa, kod ishlaydi'],
        correctAnswer: 3,
      },
      // 40
      {
        question: "Quyidagi kod nima uchun ishlatiladi? @media (orientation: landscape) { body {font-size: 18px;} }",
        options: ["Portret rejimida shrift o'lchamini o'zgartirish uchun", "Landshaft rejimida shrift o'lchamini o'zgartirish uchun", "Barcha qurilmalar uchun shrift o'lchamini belgilash uchun", "Landshaft rejimida fon rangini o'zgartirish uchun"],
        correctAnswer: 1,
      }, 
      // 41
       {
        question: "Matnni qaysi property yordamida o'rtaga joylashtirish mumkin?",
        options: ["align-text", "text-align", "text-center", "text-position"],
        correctAnswer: 1,
      }, 
       // 42
      {
        question: "Matn ostiga chiziq chizish uchun qaysi property ishlatiladi?",
        options: ["text-line", "line-style", "underline", "text-decoration"],
        correctAnswer: 3,
      },
      // 43
      {
        question: "Matnning harflar orasidagi bo'shliqni qanday property bilan sozlash mumkin?",
        options: ["text-spacing", "letter-spacing", "word-spacing", "text-spacing-horizontal"],
        correctAnswer: 1,
      },
      // 44
      {
        question: "Quyidagi kod nima qiladi? font-weight: bold;",
        options: ["Shriftni ingichka qiladi", "Shrift rangini o'zgartiradi", "Matnni kursivga o'zgartiradi", "Shriftni qalin qiladi"],
        correctAnswer: 3,
      },
      // 45
      {
        question: "Shriftning hajmini qanday property bilan o'zgartirish mumkin?",
        options: ["text-size", "font-size", "font-weight", "text-font"],
        correctAnswer: 1,
      }, 
       // 46
      {
        question: "padding nima uchun ishlatiladi?",
        options: ["Elementlar orasidagi bo'shliqni sozlash uchun", "Element va uning chegarasi orasidagi bo'shliqni sozlash uchun", "Element hajmini o'zgartirish uchun", "Rangni o'zgartirish uchun"],
        correctAnswer: 1,
      },
      // 47
      {
        question: "margin va padding orasidagi farq nima?",
        options: ["margin elementning ichki bo'shlig‘ini sozlaydi, padding tashqi bo‘shliqni sozlaydi", "margin tashqi bo‘shliqni sozlaydi, padding ichki bo‘shliqni sozlaydi", "Ikkalasi ham bir xil vazifani bajaradi", "Faqat biri ishlatiladi"],
        correctAnswer: 1,
      },
      // 48
      {
        question: "Elementga chegarani qo‘shish uchun qaysi property ishlatiladi?",
        options: ["border", "border-size", "margin", "padding"],
        correctAnswer: 0,
      }, 
     // 49
     {
      question: "Quyidagi kod nima qiladi? margin: 10px 20px 30px 40px;",
      options: ["Hamma tomonga 10px bo'shliq beradi", "Yuqoriga 10px, o'ngga 20px, pastga 30px, chapga 40px bo'shliq beradi", "O‘ng va chapga 20px, yuqori va pastga 10px bo‘shliq beradi", "O‘ng va chapga 40px, yuqori va pastga 30px bo‘shliq beradi"],
      correctAnswer: 1,
    },
    // 50
    {
      question: "Elementning kengligini hisoblashda box-sizing: border-box; qanday ta’sir ko‘rsatadi?",
      options: ["Faqat content hajmini hisoblaydi", "Kenglikni hisoblashda padding va borderni ham qo‘shadi", "Faqat borderni hisoblaydi", "Element hajmini o‘zgartirmaydi"],
      correctAnswer: 1,
    },
   // 51
   {
    question: "Element fon rangini o'zgartirish uchun qaysi property ishlatiladi?",
    options: ["background-color", "color", "background", "font-color"],
    correctAnswer: 0,
  }, 
   // 52
  {
    question: "rgba(255, 0, 0, 0.5) kodi nimani bildiradi?",
    options: ["To‘q qizil rangni", "Oq rangni shaffof holda", "Qizil rangni 50% shaffoflik bilan", "Rangni o‘zgartirmaydi"],
    correctAnswer: 2,
  },
  // 53
  {
    question: "Element uchun tasvirni fon sifatida o‘rnatish qaysi property orqali amalga oshiriladi?",
    options: ["background-image", "background", "image", "img-bg"],
    correctAnswer: 0,
  },
  // 54
  {
    question: "Quyidagi kod nima qiladi? background-repeat: no-repeat;",
    options: ["Fon rasmni takrorlaydi", "Fon rasmni takrorlamaydi", "Har bir element uchun alohida fon rasm yaratadi", "Faqat teksturali fon rasm ishlatiladi"],
    correctAnswer: 1,
  },
  // 55
  {
    question: "Quyidagi background-position: center center; kodi nimani anglatadi?",
    options: ["Fon rasmini markazga joylashtiradi", "Rasmlarni o‘ngga joylashtiradi", "Fonni yuqoriga joylashtiradi", "Rasmlarni chapga joylashtiradi"],
    correctAnswer: 0,
  }, 
   // 56
  {
    question: "background-attachment: fixed; qanday maqsadda ishlatiladi?",
    options: ["Fon rasmini ekranda harakatsiz qiladi", "Fon rasmini harakatlantiradi", "Element ichida faqat tasvir joylashtiradi", "Shrift rangini o'zgartiradi"],
    correctAnswer: 0,
  },
  // 57
  {
    question: "Elementni aylantirish uchun qaysi property ishlatiladi?",
    options: ["rotate", "animation", "transform", "transition"],
    correctAnswer: 2,
  },
  // 58
  {
    question: "Quyidagi kod nima qiladi? transform: scale(1.5);",
    options: ["Elementni siljitadi", "Elementni aylanadi", "Elementni kichiklashtiradi", "Elementni kattalashtiradi"],
    correctAnswer: 3,
  }, 
 // 59
 {
  question: "Animatsiya davomiyligini o‘rnatish uchun qaysi property ishlatiladi?",
  options: ["animation-speed", "transition-time", "animation-duration", "animation-timing"],
  correctAnswer: 2,
},
// 60
{
  question: "@keyframes nimani ifodalaydi?",
  options: ["Matnlarni joylashtirish qoidasi", "Animatsiya bosqichlarini belgilash qoidasi", "Ranglar o‘zgarishini belgilaydi", "Faqat transformatsiyalarni belgilaydi"],
  correctAnswer: 1,
}, 
// 61
{
  question: "Quyidagi kodda animatsiya qaysi yo‘nalishda ishlaydi? animation-direction: reverse;",
  options: ["Oddiy yo‘nalishda", "Teskarisiga", "Har ikki yo‘nalishda", "Faqat bitta marta"],
  correctAnswer: 1,
}, 
 // 62
{
  question: "Flexboxning asosiy o‘qi qanday belgilanadi?",
  options: ["justify-content", "align-items", "flex-direction", "display"],
  correctAnswer: 2,
},
// 63
{
  question: "Flex konteyner ichidagi elementlarni o‘rtaga joylashtirish uchun qaysi property ishlatiladi?",
  options: ["align-items: center;", "justify-content: center;", "a va b javob to'g'ri", "flex-wrap: center;"],
  correctAnswer: 2,
},
// 64
{
  question: "Quyidagi kod nima qiladi? flex-wrap: wrap;",
  options: ["Elementlarni o‘ramaydi", "Elementlarni yangi qatorga o‘tkazadi", "Elementlarni bir qatorga joylashtiradi", "Faqat katta ekranlar uchun ishlaydi"],
  correctAnswer: 1,
},
// 65
{
  question: "Flexboxda asosiy o‘q bo‘yicha bo‘shliqni qanday sozlash mumkin?",
  options: ["justify-content", "align-content", "flex-direction", "order"],
  correctAnswer: 0,
}, 
 // 66
{
  question: "Flex element tartibini o‘zgartirish uchun qaysi property ishlatiladi?",
  options: ["order", "z-index", "align-items", "position"],
  correctAnswer: 0,
},
// 67
{
  question: "Grid tizimini yoqish uchun qaysi property ishlatiladi?",
  options: ["grid-align", "grid-template", "display: flex;", "display: grid;"],
  correctAnswer: 3,
},
// 68
{
  question: "grid-template-columns nima qiladi?",
  options: ["Ustunlar sonini belgilaydi", "Qatorlar sonini belgilaydi", "Ranglarni belgilaydi", "Elementlar o‘rtasidagi bo‘shliqni belgilaydi"],
  correctAnswer: 0,
}, 
// 69
{
question: "Grid elementlarni joylashtirish uchun qaysi property ishlatiladi?",
options: ["grid-column va grid-row", "justify-content va align-items", "order va z-index", "grid-index"],
correctAnswer: 0,
},
// 70
{
question: "Quyidagi kod nima qiladi? grid-gap: 10px;",
options: ["Faqat ustunlar orasiga 10px qo‘shadi", "Qatorlar orasiga 10px qo‘shadi", "Grid elementlari orasiga 10px bo‘shliq qo‘shadi", "Bo‘shliqni o‘zgartirmaydi"],
correctAnswer: 2,
},
// 71
{
question: "Grid tizimida elementni ikkita ustunni egallash uchun qanday yoziladi? grid-column: 1 / 3;",
options: ["1-ustun va 3-ustun o'rtasida joylashadi", "Faqat 1-ustunni egallaydi", "1 va 2-ustunlarni egallaydi", "Faqat 3-ustunni egallaydi"],
correctAnswer: 2,
}, 
// 72
{
question: "grid-auto-rows nima uchun ishlatiladi?",
options: ["Avtomatik ustun kengligini belgilaydi", "Avtomatik qator balandligini belgilaydi", "Ustun va qatorlar o'rtasidagi bo‘shliqni belgilaydi", "Elementlarni tartiblaydi"],
correctAnswer: 1,
},
// 73
{
question: "Grid elementlarni asosiy o‘q bo‘yicha o‘rtalash uchun qaysi property ishlatiladi?",
options: ["justify-content", "align-content", "grid-gap", "grid-area"],
correctAnswer: 0,
},
// 74
{
question: 'Quyidagi kod qaysi maqsadda ishlatiladi? grid-template-areas:"header header""sidebar content""footer footer";',
options: ["Elementlar o‘rtasidagi bo‘shliqni belgilash", "Flex elementlarini tartibga solish", "Grid maydonlarini belgilash", "Rasm joylashtirish"],
correctAnswer: 2,
},
// 75
{
question: "Elementni grid maydoni ichida qanday qilib joylashtiramiz?",
options: ["grid-area", "grid-align", "order", "grid-gap"],
correctAnswer: 0,
}, 
// 76
{
question: "Media qoidasi yordamida ekran kengligini qanday belgilash mumkin?",
options: ["@media (max-width: 768px)", "@screen (max-width: 768px)", "@responsive (768px)", "@device (768px)"],
correctAnswer: 0,
},
// 77
{
question: "Quyidagi kod nima qiladi? @media (min-width: 1024px) { body { background-color: lightblue; } }",
options: ["Rasmni o‘zgartiradi", "Har qanday ekranda fon rangini o‘zgartiradi", "Faqat kichik ekranlar uchun fon rangini o‘zgartiradi", "1024px va undan katta ekranlar uchun fon rangini o‘zgartiradi"],
correctAnswer: 3,
},
// 78
{
question: 'Quyidagi kodda viewport nimani anglatadi? <meta name="viewport" content="width=device-width, initial-scale=1.0">',
options: ["Rasm kengligi", "Matn hajmi", "Brauzerning ko‘rish maydoni kengligi va kattalashuvi", "Veb-sayt fon rangi"],
correctAnswer: 2,
}, 
// 79
{
question: "Media qoidalar yordamida bir qatorni ustunlarga aylantirish qaysi property bilan amalga oshiriladi?",
options: ["display: grid;", "grid-auto-flow: row;", "flex-direction: column;", "align-content: center;"],
correctAnswer: 2,
},
// 80
{
question: "Quyidagi kod nima qiladi? transition: all 0.3s ease-in-out;",
options: ["Faqat ranglarni o‘zgartiradi", "Rasmni aylantiradi", "Barcha o‘zgarishlarni 0.3 soniyada amalga oshiradi", "Tekstni o‘zgartiradi"],
correctAnswer: 2,
},   
// 81
{
  question: "Quyidagi kodda transition qaysi element uchun ishlaydi? transition-property: background-color;",
  options: ["Bo‘shliq o‘zgarishida", "Margin o‘zgarishida", "Shrift o‘lchamida", "Fon rangi o‘zgarishida"],
  correctAnswer: 3,
}, 
 // 82
{
  question: "CSS transition davomiyligini sozlash uchun qaysi property ishlatiladi?",
  options: ["transition-duration", "transition-time", "animation-duration", "transition-speed"],
  correctAnswer: 0,
},

    ],
  },

  {
    category: "JavaScript",
    questions: [
      // 1
      {
        question: "JavaScript nima?",
        options: ["Dasturlash tili", "Ma'lumotlar bazasi", "Operatsion tizim", "Veb-server"],
        correctAnswer: 0,
      },
      // 2
      {
        question: "'var' kalit so'zi JavaScriptda nima uchun ishlatiladi?",
        options: ["O'zgaruvchi e'lon qilish uchun", "Funksiya yaratish uchun", "Ma'lumotlarni o'chirish uchun", "Stil qo'shish uchun"],
        correctAnswer: 0,
      },
      // 3
      {
        question: "JavaScriptda qaysi belgi orqali komment yoziladi?",
        options: ["//", "/* */", "*/ /*", "#"],
        correctAnswer: 0,
      },
      // 4
      {
        question: "JavaScriptda arrayni qanday yaratish mumkin?",
        options: ["let arr = {};", "let arr = ();", "let arr = <>;", "let arr = [];"],
        correctAnswer: 3,
      },
      // 5
      {
        question: "JavaScriptda ekranga matn qanday chiqariladi?",
        options: ["print()", "console.log", "echo", "document. Write()"],
        correctAnswer: 1,
      },
      // 6
      {
        question: "'typeof' operatori nima uchun ishlatiladi?",
        options: ["O'zgaruvchi turini aniqlash uchun", "O'zgaruvchi qiymatini o'zgartirish uchun", "Ma'lumotlarni o'chirish uchun", "Massiv uzunligini topish uchun"],
        correctAnswer: 0,
      },
      // 7
      {
        question: "JavaScriptda 'let' bilan 'const' orasidagi asosiy farq nima?",
        options: ["'const' faqat massivlar uchun ishlatiladi", "'let' faqat funksiyalar uchun ishlatiladi", "'const' qiymati o'zgarmaydi, 'let' qiymati o'zgaradi", "'let' qayta e'lon qilinishi mumkin, 'const' esa yo'q"],
        correctAnswer: 2,
      },
      // 8
      {
        question: "JavaScriptda "===" operatori nimani anglatadi?",
        options: ["Qo'shish operatori", "Bo'lish operatori", " Faqat qiymatni solishtiradi", "Solishtirishni (qiymat va turini) tekshiradi"],
        correctAnswer: 3,
      },
      // 9
      {
        question: "JavaScriptda 'null' nimani bildiradi?",
        options: ["Funksiyani", "Ob'yektni", "hech qanday qiymat mavjud emasligini", "Nolinchi qiymatni"],
        correctAnswer: 2,
      },
      // 10
       {
        question: "'NaN' nimani anglatadi?",
        options: ["Number and Null", "Not a Number", "No additional Numbers", "Null and Number"],
        correctAnswer: 1,
      }
      ,
      // 11
       {
        question: "JavaScriptda funksiyani qanday yaratish mumkin?",
        options: ["function myFunc() {}", "create function myFunc() {}", "def myFunc() {}", "new Function() {}"],
        correctAnswer: 0,
      },
     // 12
     {
      question: "JavaScriptda 'if' shart operatorining to'g'ri sintaksisi qaysi?",
      options: ["if (shart) { kod }", "if shart { kod }", "if: shart { kod }", "if [shart] { kod }"],
      correctAnswer: 0,
    },
    // 13
     {
      question: "JavaScriptda 'for' siklining to'g'ri yozilishi qaysi?",
      options: ["for (let i; i < 10; i++) { kod }", "for let i = 0; i < 10; { kod }", "for (i = 0; i < 10; i--) { kod }", "for (let i = 0; i < 10; i++){ kod }"],
      correctAnswer: 3,
    },
     // 14
     {
      question: "JavaScriptda 'event' nima?",
      options: ["Bu funksiyaning bir turi", "Bu biror hodisa (masalan, tugmani bosish)", "Bu ma'lumotlar turi", "Bu massiv"],
      correctAnswer: 1,
    }
    ,
    // 15
     {
      question: "DOM nima uchun ishlatiladi?",
      options: ["HTML elementlari bilan ishlash uchun", "CSS o'zgartirish uchun", "Faqat ma'lumotlarni saqlash uchun", "Funksiyalarni chaqirish uchun"],
      correctAnswer: 0,
    },
     // 16
     {
      question: "JavaScriptda 'JSON' nima?",
      options: ["Veb-sahifa dizayn tili", "Operatsion tizim", "Ma'lumotlarni almashish formati", "JavaScript funksiyasi"],
      correctAnswer: 2,
    }
    ,
    // 17
     {
      question: "JavaScriptda 'window.alert()' funksiyasi nima qiladi?",
      options: ["Stil qo'shadi", "HTMLni o'zgartiradi", "Konsolda ma'lumot chiqaradi", "Bildirishnoma chiqaradi"],
      correctAnswer: 3,
    },
     // 18
     {
      question: "JavaScriptda 'isNaN()' funksiyasi nima uchun ishlatiladi?",
      options: ["Qiymat raqam emasligini tekshirish uchun", "Qiymat satr ekanligini aniqlash uchun", "Qiymat massiv ekanligini aniqlash uchun", "Qiymat ob'ekt ekanligini aniqlash"],
      correctAnswer: 0,
    }
    ,
    // 19
     {
      question: "JavaScriptda 'splice()' metodi nima qiladi?",
      options: ["Massivdan elementlarni o'chiradi yoki qo'shadi", "Massivni boshqaradi", "Massivni boshqa massivga aylantiradi", "Massivni saralaydi"],
      correctAnswer: 0,
    },
    // 20
     {
      question: "JavaScriptda 'addEventListener' metodi nima uchun ishlatiladi?",
      options: ["Massivga yangi element qo'shish uchun", "Elementga hodisa qo'shish uchun", "Elementni o'chirish uchun", "Konsolga ma'lumot chiqarish uchun"],
      correctAnswer: 1,
    },      
    // 21
    {
      question: "JavaScriptda 'Math.random()' funksiyasi nima uchun ishlatiladi?",
      options: ["Sonlarni kamaytirish uchun", "Sonlarni qo'shish uchun", "Tasodifiy son yaratish uchun", "Sonlarni butun son qilish uchun"],
      correctAnswer: 2,
    },
   // 22
   {
    question: "JavaScriptda 'setTimeout()' funksiyasi nima qiladi?",
    options: ["Hodisalarni qayd qiladi", "Ma'lumotlarni tozalaydi", "Funksiyani bekor qiladi", "Funksiyani kechiktirib bajaradi"],
    correctAnswer: 3,
  }
  ,
  // 23
   {
    question: "JavaScriptda 'reduce()' metodi nima uchun ishlatiladi?",
    options: ["massivdagi ma'lumotlarni yig‘indiga yoki yakuniy qiymatga birlashtiradi", "Massiv uzunligini o'zgartirish uchun", "Elementlarni ajratib olish uchun", "Massiv elementlarini tartiblash uchun"],
    correctAnswer: 0,
  },
   // 24
   {
    question: "JavaScriptda 'Promise' nima?",
    options: ["CSSni boshqarish vositasi", "DOMni boshqarish vositasi", "Massivlarni boshqarish vositasi", "Asinxron operatsiyalarni boshqarish vositasi"],
    correctAnswer: 3,
  }
  ,
  // 25
   {
    question: "JavaScriptda 'arrow function' qanday yoziladi?",
    options: ["() => {}", "function => {}", "def => {}", "new Function() {}"],
    correctAnswer: 0,
  },
   // 26
   {
    question: "JavaScriptda 'filter()' metodi nima uchun ishlatiladi?",
    options: ["Massivlarni tartiblash uchun", "DOMni boshqarish uchun", "massivdagi elementlarni berilgan shart asosida filtrlab, yangi massivni hosil qilish", "Elementlarni ajratib olish uchun"],
    correctAnswer: 2,
  }
  ,
  // 27
   {
    question: "JavaScriptda 'map()' metodi nima qiladi?",
    options: ["Hodisalarni boshqarish uchun", "massivning har bir elementiga tegishli operatsiyani bajarib, yangi massivni hosil qilish", "Elementlarni ajratish uchun", "Elementlarni o'chirish uchun"],
    correctAnswer: 1,
  },
   // 28
   {
    question: "JavaScriptda 'try...catch' bloki nima uchun ishlatiladi?",
    options: ["DOM elementlarini o'zgartirish uchun", "O'zgaruvchini o'chirish uchun", "Xatolarni ushlash va boshqarish uchun", "Eventlarni qo'shish uchun"],
    correctAnswer: 2,
  }
  ,
  // 29
   {
    question: "JavaScriptda 'parseInt()' funksiyasi nima qiladi?",
    options: ["Satrdan butun son ajratib oladi", "Satrdan massiv hosil qiladi", "DOM elementlarini o'chiradi", "Sonlarni satrga o'zgartiradi"],
    correctAnswer: 0,
  },
  // 30
   {
    question: "JavaScriptda 'includes()' metodi nima uchun ishlatiladi?",
    options: ["DOM elementini qo'shish uchun", "Satrdan yoki massivdan ma'lum qiymatni qidirish uchun", "Elementlarni saralash uchun", "Funksiyani chaqirish uchun"],
    correctAnswer: 1,
  },
  // 31
  {
    question: "",
    options: ["", "", "", ""],
    correctAnswer: 1,
  },
 // 32
 {
  question: "",
  options: ["", "", "", ""],
  correctAnswer: 1,
}
,
// 33
 {
  question: "",
  options: ["", "", "", ""],
  correctAnswer: 1,
},
 // 34
 {
  question: "",
  options: ["", "", "", ""],
  correctAnswer: 1,
}
,
// 35
 {
  question: "",
  options: ["", "", "", ""],
  correctAnswer: 1,
},
 // 36
 {
  question: "",
  options: ["", "", "", ""],
  correctAnswer: 1,
}
,
// 37
 {
  question: "",
  options: ["", "", "", ""],
  correctAnswer: 1,
},
 // 38
 {
  question: "",
  options: ["", "", "", ""],
  correctAnswer: 1,
}
,
// 39
 {
  question: "",
  options: ["", "", "", ""],
  correctAnswer: 1,
},
// 40
 {
  question: "",
  options: ["", "", "", ""],
  correctAnswer: 1,
},      
// 41
{
  question: "",
  options: ["", "", "", ""],
  correctAnswer: 1,
},
// 42
{
question: "",
options: ["", "", "", ""],
correctAnswer: 1,
}
,
// 43
{
question: "",
options: ["", "", "", ""],
correctAnswer: 1,
},
// 44
{
question: "",
options: ["", "", "", ""],
correctAnswer: 1,
}
,
// 45
{
question: "",
options: ["", "", "", ""],
correctAnswer: 1,
},
// 46
{
question: "",
options: ["", "", "", ""],
correctAnswer: 1,
}
,
// 47
{
question: "",
options: ["", "", "", ""],
correctAnswer: 1,
},
// 48
{
question: "",
options: ["", "", "", ""],
correctAnswer: 1,
}
,
// 49
{
question: "",
options: ["", "", "", ""],
correctAnswer: 1,
},
// 50
{
question: "",
options: ["", "", "", ""],
correctAnswer: 1,
},
// 61
{
  question: "",
  options: ["", "", "", ""],
  correctAnswer: 1,
},
// 62
{
question: "",
options: ["", "", "", ""],
correctAnswer: 1,
}
,
// 63
{
question: "",
options: ["", "", "", ""],
correctAnswer: 1,
},
// 64
{
question: "",
options: ["", "", "", ""],
correctAnswer: 1,
}
,
// 65
{
question: "",
options: ["", "", "", ""],
correctAnswer: 1,
},
// 66
{
question: "",
options: ["", "", "", ""],
correctAnswer: 1,
}
,
// 67
{
question: "",
options: ["", "", "", ""],
correctAnswer: 1,
},
// 68
{
question: "",
options: ["", "", "", ""],
correctAnswer: 1,
}
,
// 69
{
question: "",
options: ["", "", "", ""],
correctAnswer: 1,
},
// 70
{
question: "",
options: ["", "", "", ""],
correctAnswer: 1,
},      
// 71
{
question: "",
options: ["", "", "", ""],
correctAnswer: 1,
},
// 72
{
question: "",
options: ["", "", "", ""],
correctAnswer: 1,
}
,
// 73
{
question: "",
options: ["", "", "", ""],
correctAnswer: 1,
},
// 74
{
question: "",
options: ["", "", "", ""],
correctAnswer: 1,
}
,
// 75
{
question: "",
options: ["", "", "", ""],
correctAnswer: 1,
},
// 76
{
question: "",
options: ["", "", "", ""],
correctAnswer: 1,
}
,
// 77
{
question: "",
options: ["", "", "", ""],
correctAnswer: 1,
},
// 78
{
question: "",
options: ["", "", "", ""],
correctAnswer: 1,
}
,
// 79
{
question: "",
options: ["", "", "", ""],
correctAnswer: 1,
},
// 80
{
question: "",
options: ["", "", "", ""],
correctAnswer: 1,
},
// 81
{
question: "",
options: ["", "", "", ""],
correctAnswer: 1,
},
// 82
{
question: "",
options: ["", "", "", ""],
correctAnswer: 1,
}
,
// 83
{
question: "",
options: ["", "", "", ""],
correctAnswer: 1,
},
// 84
{
question: "",
options: ["", "", "", ""],
correctAnswer: 1,
}
,
// 85
{
question: "",
options: ["", "", "", ""],
correctAnswer: 1,
},
// 86
{
question: "",
options: ["", "", "", ""],
correctAnswer: 1,
}
,
// 87
{
question: "",
options: ["", "", "", ""],
correctAnswer: 1,
},
// 88
{
question: "",
options: ["", "", "", ""],
correctAnswer: 1,
}
,
// 89
{
question: "",
options: ["", "", "", ""],
correctAnswer: 1,
},
// 90
{
question: "",
options: ["", "", "", ""],
correctAnswer: 1,
},      
// 91
{
question: "",
options: ["", "", "", ""],
correctAnswer: 1,
},
// 92
{
question: "",
options: ["", "", "", ""],
correctAnswer: 1,
}
,
// 93
{
question: "",
options: ["", "", "", ""],
correctAnswer: 1,
},
// 94
{
question: "",
options: ["", "", "", ""],
correctAnswer: 1,
}
,
// 95
{
question: "",
options: ["", "", "", ""],
correctAnswer: 1,
},
// 96
{
question: "",
options: ["", "", "", ""],
correctAnswer: 1,
}
,
// 97
{
question: "",
options: ["", "", "", ""],
correctAnswer: 1,
},
// 98
{
question: "",
options: ["", "", "", ""],
correctAnswer: 1,
}
,
// 99
{
question: "",
options: ["", "", "", ""],
correctAnswer: 1,
},
// 100
{
question: "",
options: ["", "", "", ""],
correctAnswer: 1,
},
    
    ],
  },

  {
    category: "Umumiy",
    questions: [
      {
        question: "Who won the Academy Award for Best Actor in 2022?",
        options: ["Leonardo DiCaprio", "Will Smith", "Joaquin Phoenix", "Matthew McConaughey"],
        correctAnswer: 1,
      },
      {
        question: "Which movie won the Academy Award for Best Picture in 2021?",
        options: ["Parasite", "1917", "The Shape of Water", "Nomadland"],
        correctAnswer: 3,
      },
      {
        question: "Who played the character of Jack Dawson in the movie Titanic?",
        options: ["Leonardo DiCaprio", "Brad Pitt", "Johnny Depp", "Tom Hanks"],
        correctAnswer: 0,
      },
      {
        question: "Which TV show featured the characters Daenerys Targaryen and Jon Snow?",
        options: ["Breaking Bad", "Game of Thrones", "The Witcher", "Vikings"],
        correctAnswer: 1,
      },
      {
        question: "Who is known as the 'King of Pop'?",
        options: ["Michael Jackson", "Prince", "Whitney Houston", "Elvis Presley"],
        correctAnswer: 0,
      },
      {
        question: "Which superhero is known for saying, 'I am Iron Man'?",
        options: ["Black Panther", "Captain America", "Thor", "Iron Man"],
        correctAnswer: 3,
      },
      {
        question: "Which movie franchise includes a character named Luke Skywalker?",
        options: ["Guardians of the Galaxy", "Star Wars", "The Matrix", "Star Trek"],
        correctAnswer: 1,
      },
      {
        question: "Who played the character of Hermione Granger in the Harry Potter film series?",
        options: ["Emma Watson", "Anne Hathaway", "Maggie Smith", "Natalie Portman"],
        correctAnswer: 0,
      },
      {
        question: "Who directed the movie 'Inception'?",
        options: ["James Cameron", "Steven Spielberg", "Christopher Nolan", "Martin Scorsese"],
        correctAnswer: 2,
      },
      {
        question: "Which artist released the album 'Lover' in 2019?",
        options: ["Billie Eilish", "Taylor Swift", "Ed Sheeran", "Ariana Grande"],
        correctAnswer: 1,
      },
      {
        question: "What was the first video game to feature Mario?",
        options: ["Mario Kart", "Super Mario Bros.", "Donkey Kong", "The Legend of Zelda"],
        correctAnswer: 2,
      },
      {
        question: "Which movie features the famous line, 'Here's looking at you, kid'?",
        options: ["Casablanca", "Citizen Kane", "The Godfather", "Gone with the Wind"],
        correctAnswer: 0,
      },
      {
        question: "Which country won the FIFA World Cup in 2018?",
        options: ["France", "Germany", "Argentina", "Brazil"],
        correctAnswer: 0,
      },
      {
        question: "Who created the comic book character Spider-Man?",
        options: ["Jack Kirby", "Stan Lee", "Steve Ditko", "John Romita"],
        correctAnswer: 1,
      },
      {
        question: "In which movie did Heath Ledger portray the Joker?",
        options: ["The Dark Knight", "Batman Begins", "The Dark Knight Rises", "Joker"],
        correctAnswer: 0,
      },
      {
        question: "Which band is known for the hit song 'Bohemian Rhapsody'?",
        options: ["The Rolling Stones", "Led Zeppelin", "Queen", "The Beatles"],
        correctAnswer: 2,
      },
      {
        question: "Which actress starred as Katniss Everdeen in 'The Hunger Games'?",
        options: ["Kristen Stewart", "Shailene Woodley", "Jennifer Lawrence", "Emma Stone"],
        correctAnswer: 2,
      },
      {
        question: "Who played the role of the Joker in the 2019 movie 'Joker'?",
        options: ["Heath Ledger", "Johnny Depp", "Joaquin Phoenix", "Jared Leto"],
        correctAnswer: 2,
      },
      {
        question: "Which Disney animated film features the song 'A Whole New World'?",
        options: ["Cinderella", "Aladdin", "Beauty and the Beast", "The Little Mermaid"],
        correctAnswer: 1,
      },
      {
        question: "Which TV series features the characters of Walter White and Jesse Pinkman?",
        options: ["Narcos", "Better Call Saul", "The Sopranos", "Breaking Bad"],
        correctAnswer: 3,
      },
      {
        question: "Who sang the hit song 'Shape of You'?",
        options: ["Justin Bieber", "Ariana Grande", "Sam Smith", "Ed Sheeran"],
        correctAnswer: 3,
      },
      {
        question: "Which film won the Academy Award for Best Picture in 2020?",
        options: ["The Irishman", "Once Upon a Time in Hollywood", "Parasite", "1917"],
        correctAnswer: 2,
      },
      {
        question: "What year did the movie 'The Matrix' release?",
        options: ["1997", "1998", "2000", "1999"],
        correctAnswer: 3,
      },
      {
        question: "Which actor played Tony Stark/Iron Man in the Marvel Cinematic Universe?",
        options: ["Mark Ruffalo", "Chris Evans", "Robert Downey Jr.", "Chris Hemsworth"],
        correctAnswer: 2,
      },
      {
        question: "Which singer is known as the 'Queen of Pop'?",
        options: ["Mariah Carey", "Lady Gaga", "Whitney Houston", "Madonna"],
        correctAnswer: 3,
      },
    ],
  },
];
