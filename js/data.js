const user = {
  name: "Artem",
  surname: "Levurdiak",
  userPhoto: "images.png",
  qrQode: "qr-code.svg",
  dreams: [
    { src: "Macbook.jpg", alt: "Комп'ютер моєї мрії" },
    { src: "USA.png.webp", alt: "Подорож до США" },
    { src: "Ukraine.jpg", alt: "Мрія про мир" },
  ],
};

// arr це середня місячна платня по рокам
const arr = [
  560,
  900,
  1000,
  1300,
  1500,
  1700,
  2000,
  2300,
  2700,
  2900,
  3400,
  3900,
];

const necessaryExpenses = 800;

const todo = [
  { month: "Червень", skill: "Front-end" },
  { month: "Липень", skill: "Комплексне рішення проблем" },
  { month: "Серпень", skill: "Python" },
  { month: "Вересень", skill: "обгрунтовувати свою думку" },
  { month: "Жовтень", skill: "Критичне мислення" },
  { month: "Листопад", skill: "Вміння вести переговори" },
  { month: "Грудень", skill: "Взаємодія з людьми" },
  { month: "Січень", skill: "Зосередженість" },
  { month: "Лютий", skill: "Якісно приймати рішення" },
  { month: "Березень", skill: "Особистий бізнес" },
  { month: "Квітень", skill: "Формування власної думки" },
  { month: "Травень", skill: "Стресостійкість" },
];

export { user, arr, necessaryExpenses, todo };
