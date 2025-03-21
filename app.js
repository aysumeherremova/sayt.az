const data = {
    "costStatic": [{
        "id": 5,
        "name": "Page",
        "price": 100,
        "type": "static_page"
    }],
    "costDesign": [{
        "id": 10,
        "name": "Medium",
        "price": 2,
        "type": "design_complexity"
    }, {
        "id": 12,
        "name": "Simple",
        "price": 1,
        "type": "design_complexity"
    }, {
        "id": 13,
        "name": "Custom",
        "price": 3,
        "type": "design_complexity"
    }],
    "costLogo": [{
        "id": 7,
        "name": "Custom",
        "price": 200,
        "type": "logo_design"
    }, {
        "id": 15,
        "name": "No need",
        "price": 0,
        "type": "logo_design"
    }, {
        "id": 20,
        "name": "Simple",
        "price": 100,
        "type": "logo_design"
    }],
    "costAddon": [{
        "id": 1,
        "name": "Blog",
        "price": 200,
        "type": "website_addons"
    }, {
        "id": 2,
        "name": "Member login \/\u200d\u200d\u200d Profiles",
        "price": 400,
        "type": "website_addons"
    }, {
        "id": 8,
        "name": "Responsive",
        "price": 100,
        "type": "website_addons"
    }, {
        "id": 22,
        "name": "Forum",
        "price": 400,
        "type": "website_addons"
    }, {
        "id": 23,
        "name": "Messaging",
        "price": 50,
        "type": "website_addons"
    }, {
        "id": 24,
        "name": "Live Chat",
        "price": 50,
        "type": "website_addons"
    }, {
        "id": 25,
        "name": "Gallery",
        "price": 100,
        "type": "website_addons"
    }, {
        "id": 26,
        "name": "Contact Form",
        "price": 100,
        "type": "website_addons"
    }, {
        "id": 27,
        "name": "On-site Search",
        "price": 100,
        "type": "website_addons"
    }, {
        "id": 28,
        "name": "Map Data \/ Geolocation",
        "price": 100,
        "type": "website_addons"
    }, {
        "id": 29,
        "name": "Booking",
        "price": 400,
        "type": "website_addons"
    }, {
        "id": 30,
        "name": "Social Media integration",
        "price": 50,
        "type": "website_addons"
    }, {
        "id": 31,
        "name": "Analytics \/ Tracking",
        "price": 50,
        "type": "website_addons"
    }, {
        "id": 36,
        "name": "Admin Panel",
        "price": 300,
        "type": "website_addons"
    }],
    "costSeo": [{
        "id": 3,
        "name": "Titles & Meta",
        "price": 200,
        "type": "seo_addons"
    }, {
        "id": 32,
        "name": "Keyword research",
        "price": 300,
        "type": "seo_addons"
    }, {
        "id": 33,
        "name": "+20 Advanced techniques",
        "price": 300,
        "type": "seo_addons"
    }, {
        "id": 34,
        "name": "Header Tags",
        "price": 100,
        "type": "seo_addons"
    }, {
        "id": 35,
        "name": "Sitemap",
        "price": 100,
        "type": "seo_addons"
    }],
    "costSetting": [{
        "id": 18,
        "name": "min",
        "price": 450,
        "type": "setting"
    }, {
        "id": 19,
        "name": "page",
        "price": 20,
        "type": "setting"
    }],
    "costEcommerce": [{
        "id": 38,
        "name": "Payment",
        "price": 200,
        "type": "ecommerce"
    }, {
        "id": 39,
        "name": "Add to cart",
        "price": 500,
        "type": "ecommerce"
    }, {
        "id": 40,
        "name": "Products",
        "price": 300,
        "type": "ecommerce"
    }, {
        "id": 41,
        "name": "Favourite",
        "price": 300,
        "type": "ecommerce"
    }, {
        "id": 42,
        "name": "Filter",
        "price": 300,
        "type": "ecommerce"
    }, {
        "id": 43,
        "name": "Description",
        "price": 200,
        "type": "ecommerce"
    }]
}

const vebSayt = document.getElementById('vebSayt')
const vebValues = document.getElementById('vebValues')
const searchOpt = document.getElementById("searchOpt")
const searchMotorValues = document.getElementById("searchMotorValues")
const ecommerce = document.getElementById("ecommerce")
const elektronCost = document.getElementById("elektronCost")

function vebDizaynSayt() {
    data.costAddon.map(item => {
        vebSayt.innerHTML +=
            `
          <label 
             class="inline-flex items-center justify-between space-x-4 cursor-pointer dark:text-gray-800">
             <div class="w-3/4">
                 <span class="text-sm font-medium text-gray-900">${item.name}</span>
             </div>
          <div class="relative">
                 <input value="${item.price}" type="checkbox" class="hidden peer" onclick="calcVeb()" name="${item.name}">
                 <div
                     class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full
                      peer-checked:after:border-white after:content-[''] after:absolute  after:top-0.5 
                       after:right-[22px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 
                     after:w-5 after:transition-all duration-300 after:duration-300 peer-checked:bg-[#a271f2]">
                 </div>
             </div>
         </label>
        `
    });


    data.costSeo.map(item => {
        searchOpt.innerHTML +=
            `
    <div class="inline-flex items-center">
                            <label class="relative flex items-center mr-2 rounded-full cursor-pointer"
                                for="${item.name}">
                                <input id="${item.name}" value="${item.price}" class="border relative border-gray-400 rounded-md cursor-pointer checked:border-[#a271f2] appearance-none h-5 w-5 transition-all duration-500 checked:bg-[#a271f2]
                                   before:content[''] peer before:absolute before:top-2/4 before:left-2/4 before:block before:h-8 before:w-8
                                   before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity 
                                   checked:before:bg-[#a271f2] hover:before:opacity-40" type="checkbox"
                                    name="${item.name}" onclick="searchMotor()">
                                <div
                                    class="absolute text-white transition-opacity opacity-0 top-2/4 left-2/4 peer-checked:opacity-100 pointer-events-none -translate-y-2/4 -translate-x-2/4">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20"
                                        fill="currentColor" stroke="currentColor" stroke-width="1">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z">
                                        </path>
                                    </svg>
                                </div>
                            </label>
                  <label for="${item.name}" class="select-none cursor-pointer">${item.name}</label>
     </div>`
    })

    data.costEcommerce.map(item => {
        ecommerce.innerHTML += `
         <label for="${item.name}"
            class="relative xl:items-center gap-x-2 flex cursor-pointer justify-between">
                                <div class="w-3/4">
                                    <span class="text-sm font-medium text-gray-900">${item.name}</span>
                                </div>
                                <div class="relative">
                                    <input id="${item.name}" value ="${item.price}" type="checkbox" class="hidden peer" onclick="elektronValues()">
                                    <div
                                        class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full
                                     peer-checked:after:border-white after:content-[''] after:absolute  after:top-0.5 
                                      after:right-[22px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 
                                    after:w-5 after:transition-all duration-300 after:duration-300 peer-checked:bg-[#a271f2]">
                                    </div>
                                </div>
             </label>
        `
    })

}
vebDizaynSayt()
const numberOfPage = document.getElementById("numberOfPage");
const designOfPage = document.getElementById("designOfPage");
const staticPages = document.getElementById("staticPages");
const cost = document.getElementById("cost");
let totalPages = 0; 

function calculate() {
    totalPages = numberOfPage.value * designOfPage.value; 
    cost.innerHTML = `${numberOfPage.value / 100} sehife /  ₼ ${totalPages}`;
    staticPages.innerHTML = ` ₼ ${totalPages}`;
    totalCost()
}
window.onload = calculate;


const logoCost = document.getElementById("logoCost");
const logoId = document.getElementById("logoId");
const logoInp = document.querySelector("#logoInp input");
let totalLogo = 0; 

function logoValues() {
    totalLogo = parseFloat(logoInp.value) || 0; 
    logoCost.innerHTML = `₼ ${totalLogo}`;
    logoId.innerHTML = `₼ ${totalLogo}`;
    totalCost()
}

const elaveler = document.getElementById("elaveler");
let totalVeb = 0; 

function calcVeb() {
    let inputs = document.querySelectorAll("#vebSayt input");
    totalVeb = 0; 
    inputs.forEach(item => {
        if (item.checked) totalVeb += +item.value;
    });
    vebValues.innerHTML = `₼ ${totalVeb}`;
    elaveler.innerHTML = `₼ ${totalVeb}`;
    totalCost()
}

const seo = document.getElementById("seo");
let totalMotor = 0; 

function searchMotor() {
    let inputs = document.querySelectorAll("#searchOpt input");
    totalMotor = 0;
    inputs.forEach(item => {
        if (item.checked) totalMotor += +item.value;
    });
    searchMotorValues.innerHTML = `₼ ${totalMotor}`;
    seo.innerHTML = `₼ ${totalMotor}`;
    totalCost()
}

const eticaret = document.getElementById("eticaret");
let totalCommerce = 0; 

function elektronValues() {
    let inputs = document.querySelectorAll("#ecommerce input");
    totalCommerce = 0; 
    inputs.forEach(item => {
        if (item.checked) totalCommerce += +item.value;
    });
    elektronCost.innerHTML = `₼ ${totalCommerce}`;
    eticaret.innerHTML = `₼ ${totalCommerce}`;
    totalCost()
}

const totalDeyer = document.getElementById("totalDeyer");
function totalCost() {
    const minDeyer = 450
    const total = totalPages + totalLogo + totalVeb + totalMotor + totalCommerce;
    totalDeyer.textContent = `₼ ${total > minDeyer ? total : minDeyer}`
}
