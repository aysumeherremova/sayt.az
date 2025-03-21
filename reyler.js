const testimonials = [
  {
    text: "Web saytımı hazırlamaq üçün Sayt.az-ı seçmək biznesim üçün verdiyim ən yaxşı qərar idi.",
    img: "img/people1.jpg",
    name: "Hikmat Taghiyev",
    role: "Accountant",
  },
  {
    text: "Sayt-az saytımın hazırlanmasında gözələntilərimi aşdı !",
    img: "img/people2.jpg",
    name: "Bahman Ahmadlı",
    role: "CEO",
  },
  {
    text: "Ən yaxşı MENTOR olduğum üçün özümə minnətdaram!",
    img: "img/xezer-novruz.jpg",
    name: "Xəzər Novruz",
    role: "Developer",
  },
];

let currentIndex = 0;
const textEl = document.getElementById("testimonial-text");
const imgEl = document.getElementById("testimonial-img");
const nameEl = document.getElementById("testimonial-name");
const roleEl = document.getElementById("testimonial-role");
const dots = document.querySelectorAll(".dot");

function updateTestimonial(index) {
  textEl.textContent = testimonials[index].text;
  imgEl.src = testimonials[index].img;
  nameEl.textContent = testimonials[index].name;
  roleEl.textContent = testimonials[index].role;

  dots.forEach((dot, i) => {
    dot.classList.toggle("bg-purple-500", i === index);
    dot.classList.toggle("bg-gray-300", i !== index);
  });
}

document.getElementById("prev-btn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  updateTestimonial(currentIndex);
});

document.getElementById("next-btn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updateTestimonial(currentIndex);
});
