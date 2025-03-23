document.addEventListener("DOMContentLoaded", function () {
    const aylıqBtn = document.getElementById("ayliqBtn");
    const illikBtn = document.getElementById("illikBtn");
    const aylıqKartlar = document.getElementById("ayliqKartlar");
    const illikKartlar = document.getElementById("illikKartlar");

    aylıqBtn.addEventListener("click", function () {
        aylıqKartlar.style.display = "grid";
        illikKartlar.style.display = "none";
        aylıqBtn.classList.add("bg-mainLightPurple", "text-white");
        aylıqBtn.classList.remove("text-[#94A3B8]", "bg-white");
        illikBtn.classList.add("text-[#94A3B8]", "bg-white");
        illikBtn.classList.remove("bg-mainLightPurple", "text-white");
    });

    illikBtn.addEventListener("click", function () {
        aylıqKartlar.style.display = "none";
        illikKartlar.style.display = "grid";
        illikBtn.classList.add("bg-mainLightPurple", "text-white");
        illikBtn.classList.remove("text-[#94A3B8]", "bg-white");
        aylıqBtn.classList.add("text-[#94A3B8]", "bg-white");
        aylıqBtn.classList.remove("bg-mainLightPurple", "text-white");
    });
    aylıqKartlar.style.display = "grid";
    illikKartlar.style.display = "none";
});
