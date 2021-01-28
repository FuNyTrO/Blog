$(document).ready(function() {
    $('.head__burger').click(function(event){
        $('.head__burger, .head__menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
})


$(document).ready(function() {

    $('.head__langButton-ru').on('click', function() {
       var r = $('.localization').each(function() {
          var el = $(this);
          var key = (el.attr('caption'));
          el.text(rus[key]);
       });
    });
 
 
    $('.head__langButton-eng').on('click', function() {
       var r = $('.localization').each(function() {
          var el = $(this);
          var key = (el.attr('caption'));
          el.text(eng[key]);
       });
    });
 
 
 
    var rus = {
       home: 'Гланая',
       about: 'Обо мне',
       skills: 'Навыки',
       portfolio: 'Портфолио',
       contact: 'Контакты',
       Fname: 'Денис',
        Lname: 'Новик',
        des: 'UX | UI дизайнер',
        info: '24 года, Минск',
        about: 'Обо мне',
       Hi: 'Привет, Я Денис - UX/UI дизайнер из Минска',
       Im: 'Мне нравится дизайн и всё, что с ним связано.',
       Study: 'Я учусь на курсах "Веб и мобильный дизайн',
       Inter: 'интерфейсов" в IT-академии.',
       Ready: 'Готов осуществить отличный проект',
       With: 'с удивительными людьми.',
       skill: 'Навыки',
       I: 'Я работаю в таких программах, как',
       PortfolioN: 'Портфолио',
       Portfolio1: 'Online fashion store - Домашняя страница',
       Portfolio2: 'Reebok Store - Концепт',
       Portfolio3: 'Braun Landing Page - Концепт',
       contacts: 'Контакты',
       Want: 'Хотите узнать больше или просто пообщаться?',
       You: 'Вам всегда рады!',
       Send: 'Отправить сообщение',
       Like: 'Оцените меня в'
    };
    var eng = {
       home: 'Home',
       about: 'About me',
       skills: 'Skills',
       portfolio: 'Portfopio',
       contact: 'Contacts',
       Fname: 'Denis',
       Lname: 'Novik',
       des: 'UX | UI designer',
       info: '24 years old, Minsk',
       about: 'About me',
       Hi: "Hi, I'm Denis – UX/UI designer from Minsk.",
       Im: "I'm interested in design and everything connected with it.",
       Study: "I'm studying at courses 'Web and mobile design",
       Inter: "interfaces' in IT-Academy.",
       Ready: 'Ready to implement excellent projects',
       With: 'with wonderful people.',
       skill: 'Skills',
       I: 'I work in such programs as',
       PortfolioN: 'Portfolio',
       Portfolio1: 'Online fashion store - Homepage',
       Portfolio2: 'Reebok Store - Concept',
       Portfolio3: 'Braun Landing Page - Concept',
       contacts: 'Contacts',
       Want: 'Want to know more or just chat?',
       You: 'You are welcome!',
       Send: 'Send message',
       Like: 'Like me on'
    };
 
 
 
 
 
 });
 