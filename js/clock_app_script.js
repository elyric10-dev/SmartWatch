//Open clock app
const click_to_open_clock = document.querySelectorAll('.clock_icon_sides');
const clock_app = document.getElementById('clock_app_container');
const back_button = document.querySelector('.back_button');

click_to_open_clock.forEach((item) => item.addEventListener("click", open_clock_app));


function open_clock_app() {
    clock_app.classList.add('active');
}

back_button.addEventListener("click", back_clock_app);

//If back button was clicked while creating alarm and was active

function back_clock_app() {
    (create_alarm_container.classList.contains('active') && clock_app.classList.contains('')) ? create_alarm_container.classList.remove('active'): create_alarm_container.classList.remove('active');
    (create_alarm_container.classList.contains('active') && clock_app.classList.contains('')) ? add_alarm_symbol.classList.remove('active'): add_alarm_symbol.classList.remove('active');
    clock_app.classList.remove('active');
}



//Click to add menu line effect
const menus = document.querySelectorAll('.menu');
menus.forEach((item) => item.addEventListener("click", add_menu_line));

function add_menu_line() {
    menus.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}



//Pages slide effect
const clock_pages = document.querySelectorAll('.clock_page');
const pages_movement_value = 100;
let slide_result = 0;
slide = (direction) => {
    (direction === 'alarm_click') ? slide_result = 00: slide_result = slide_result;
    (direction === 'clock_click') ? slide_result = -100: slide_result = slide_result;
    (direction === 'stopwatch_click') ? slide_result = -200: slide_result = slide_result;
    (direction === 'timer_click') ? slide_result = -300: slide_result = slide_result;

    clock_pages.forEach((item) => item.style.transform = `translateX(${slide_result}%)`);
}



//Active Set checkbox

const alarm_clock_day = document.querySelectorAll('.alarm_clock_day');

const set_alarm = document.querySelector('.set_alarm');
const set_alarm2 = document.querySelector('.set_alarm2');
const set_alarm3 = document.querySelector('.set_alarm3');
const set_alarm4 = document.querySelector('.set_alarm4');

const set_checkbox = document.querySelector('.set_checkbox');
const set_checkbox2 = document.querySelector('.set_checkbox2');
const set_checkbox3 = document.querySelector('.set_checkbox3');
const set_checkbox4 = document.querySelector('.set_checkbox4');


set_checkbox.addEventListener("click", set_checkbox_to_active);
set_checkbox2.addEventListener("click", set_checkbox2_to_active);
set_checkbox3.addEventListener("click", set_checkbox3_to_active);
set_checkbox4.addEventListener("click", set_checkbox4_to_active);

function set_checkbox_to_active() {
    (set_checkbox.classList.contains('active')) ? set_checkbox.classList.remove('active'): set_checkbox.classList.add('active');
    (set_checkbox.classList.contains('active')) ? set_alarm.classList.add('active'): set_alarm.classList.remove('active');
    //Set day highlight when active switch
    for (var i = 0; i < alarm_clock_day.length; i++) {
        (set_checkbox.classList.contains('active') && (alarm_clock_day[i].classList.contains('active')) ? alarm_clock_day[i].classList.add('highlight') : alarm_clock_day[i].classList.remove('highlight'));
    }
}

function set_checkbox2_to_active() {
    (set_checkbox2.classList.contains('active')) ? set_checkbox2.classList.remove('active'): set_checkbox2.classList.add('active');
    (set_checkbox2.classList.contains('active')) ? set_alarm2.classList.add('active'): set_alarm2.classList.remove('active');
}

function set_checkbox3_to_active() {
    (set_checkbox3.classList.contains('active')) ? set_checkbox3.classList.remove('active'): set_checkbox3.classList.add('active');
    (set_checkbox3.classList.contains('active')) ? set_alarm3.classList.add('active'): set_alarm3.classList.remove('active');
}

function set_checkbox4_to_active() {
    (set_checkbox4.classList.contains('active')) ? set_checkbox4.classList.remove('active'): set_checkbox4.classList.add('active');
    (set_checkbox4.classList.contains('active')) ? set_alarm4.classList.add('active'): set_alarm4.classList.remove('active');
}


//addition symbol size increase
//Create Alarm onclick show panel

const create_alarm_container = document.querySelector('.create_alarm_container');
const add_alarm_symbol = document.querySelector('.add_alarm');
add_alarm_symbol.addEventListener("click", increase_add_symbol);



function increase_add_symbol() {
    add_alarm_symbol.classList.contains('active') ? add_alarm_symbol.classList.remove('active') : add_alarm_symbol.classList.add('active');
    add_alarm_symbol.classList.contains('active') ? create_alarm_container.classList.add('active') : create_alarm_container.classList.remove('active');
}

//Selecting days for alarm
const create_alarm_days = document.querySelectorAll('.create_alarm_days');
create_alarm_days.forEach((item) => item.addEventListener("click", select_day_for_alarm));

function select_day_for_alarm() {
    create_alarm_days.forEach((item) => "");
    (this.classList.contains('active') ? this.classList.remove('active') : this.classList.add('active'));





    //Days every click to variables and highlight
    for (var i = 0; i < create_alarm_days.length; i++) {
        create_alarm_days[i].classList.contains('active') ? alarm_clock_day[i].classList.add('active') : alarm_clock_day[i].classList.remove('active');
    }
}
const repeat_all_alarm_day = document.querySelectorAll('.create_alarm_days');
const repeat_alarm_ul = document.querySelector('.repeat_alarm_ul');
const repeat_alarm_all_day_set = document.querySelectorAll('.alarm_clock_day');

repeat_alarm_ul.addEventListener("click", function() {
    if (repeat_alarm_ul.classList.contains('active')) {
        repeat_alarm_ul.classList.remove('active');
        for (var i = 0; i < repeat_all_alarm_day.length; i++) {
            repeat_all_alarm_day[i].classList.remove('active');
        }
        for (var i = 0; i < alarm_clock_day.length; i++) {
            alarm_clock_day[i].classList.remove('active');
        }
    } else {
        repeat_alarm_ul.classList.add('active');
        for (var i = 0; i < repeat_all_alarm_day.length; i++) {
            repeat_all_alarm_day[i].classList.add('active');
        }
        for (var i = 0; i < alarm_clock_day.length; i++) {
            alarm_clock_day[i].classList.add('active');
        }
    }
});