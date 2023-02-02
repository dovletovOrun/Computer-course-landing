// FIRST MODAL WINDOW SCRIPT STARTS BELOW

document.addEventListener('DOMContentLoaded', () => {
    const firstBtn = document.getElementById('btn-cabinet');

    const cabElement = document.querySelector('.modal-window-cab');

    const closeXBtn = document.getElementById('modal-close-cab');

    const closeBtn = document.getElementById('close-btn');

    firstBtn.onclick =  (e) => {
        e.preventDefault();
        cabElement.classList.add('modal_active');
        document.body.classList.add('_hidden');
    };

    closeXBtn.onclick =  (e) => {
        e.preventDefault();
        cabElement.classList.remove('modal_active');
        document.body.classList.remove('_hidden');
    }
    closeBtn.onclick = (e) => {
        e.preventDefault();
        cabElement.classList.remove('modal_active');
        document.body.classList.remove('_hidden');
    }
});

// SECOND MODAL WINDOW SCRIPT STARTS BELOW

document.addEventListener('DOMContentLoaded', () => {
    const secondBtn = document.getElementById('btn-order');

    const orderElement = document.querySelector('.modal-window-cab2');

    const closeXBtn2 = document.getElementById('modal-close-cab2');

    const submitBtn = document.getElementById('submit-btn');

    secondBtn.onclick = (e) => {
        e.preventDefault();
        orderElement.classList.add('modal_active');
        document.body.classList.add('_hidden');
    };

    closeXBtn2.onclick = (e) => {
        e.preventDefault();
        orderElement.classList.remove('modal_active');
        document.body.classList.remove('_hidden');
    }
    submitBtn.onclick = (e) => {
        e.preventDefault();
        orderElement.classList.remove('modal_active');
        document.body.classList.remove('_hidden');
    }
});

const headerBurger = document.querySelector('.header__burger');
const headerList = document.querySelector('.header__list__list');
// const firstBtnBurger = document.getElementById('btn-cabinet');
if(headerBurger){
    headerBurger.addEventListener("click", (e) => {
        headerBurger.classList.toggle('_active');
        // firstBtnBurger.classList.toggle('_active');
        headerList.classList.toggle('_active');
        document.body.classList.toggle('_lock');
    })
};

// window scroll to section
const headerLinks = document.querySelectorAll(".header__list__itam")
if(headerLinks.length > 0){
    headerLinks.forEach(headerLink => {
        headerLink.addEventListener("click", onHeaderLinkClick);
    });

    function onHeaderLinkClick(e){
        const headerLink = e.target;
        if(headerLink.dataset.goto && document.querySelector(headerLink.dataset.goto)){
            const goToBlock = document.querySelector(headerLink.dataset.goto)
            const gotoBlockValue = goToBlock.getBoundingClientRect().top + pageYOffset - document.querySelector("header").offsetHeight;

            if(headerBurger.classList.contains("_active")){
                document.body.classList.remove("_lock")
                headerBurger.classList.remove("_active");
                headerList.classList.remove("_active");
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}


//timer
const countDown = () => {
    const countDate = new Date ("August 24, 2023 00:00:00").getTime();
    
    const now = new Date().getTime();
    const gap = countDate - now;
    
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector('.days').innerHTML = textDay;
    document.querySelector('.hours').innerHTML = textHour;
    document.querySelector('.minutes').innerHTML = textMinute;
    document.querySelector('.seconds').innerHTML = textSecond;
}
setInterval(countDown, 1000);

function updateTextInput(val){
    document.querySelector(".rangeValue").textContent = val;
}

// biography items
const teachText = document.querySelectorAll(".teachers__item");

teachText.forEach( (text) => {
    const teacherBtn = text.querySelector(".teach__btn");
    teacherBtn.addEventListener("click", () => {
        teachText.forEach( (item) => {
        if (item !== text){
            item.classList.remove("teach__text__show");
        };
        });
        text.classList.toggle("teach__text__show")
    });
});

// footer submit letter
const footerInput = document.querySelector(".input__email");
const footerSubmit = document.querySelector(".footer__btn");
const footerText = document.querySelector(".hidden-thank");

footerSubmit.addEventListener("click", () => {
    const value = footerInput.value;
    if(value){
       displayItem("Спасибо за подписку", "success");
       footerInput.value = "";
    }
    else{
        displayItem("Пожалуйста введите ваш Email", "danger");
    }
})
// display text for email
let displayItem = (text, action) => {
    footerText.textContent = text;
    footerText.classList.add(`action-${action}`);
    
    setTimeout(() => {
        footerText.textContent = ""
        footerText.classList.remove(`action-${action}`);
    }, 1500);
}


// Footer year
const year = document.getElementById("footer-year");
year.innerHTML = new Date().getFullYear();





