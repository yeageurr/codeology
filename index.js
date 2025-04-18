function buttonFocus(element) {
  const navigations = document.querySelectorAll('.header_lesson');

  navigations.forEach(i => {
    i.style.borderBottom = '2px solid transparent';
  });

  element.style.borderBottom = '2px solid #fff';
};

function displaySideNavigation(content) {
  document.querySelector('.side_navigation').style.padding = '0';
  const mylessons = document.querySelectorAll('.lessons');
  mylessons.forEach(i => {
    i.style.display = 'none';
  });

  document.querySelector('.side_navigation').style.padding = '25px 0 45px 0';
  document.querySelector('.side_navigation').style.width = '20%';
  content.style.display = 'block';
}

function displayMainContent(topic) {
  const topics = document.querySelectorAll('.topics');

  topics.forEach(i => {
    i.style.display = 'none';
  });

  topic.style.display = 'block';
  document.querySelector('.homepage').style.display = 'none';
  document.querySelector('.about_page').style.display = 'none';
  document.querySelector('.activities').style.display = 'flex';
  document.querySelector('.main-section').style.width = '98%';
}

function sideButtonFocus(button) {
  const side_buttons = document.querySelectorAll('.side_btn');

  side_buttons.forEach(i=>{
    i.style.padding = '5px 25px';
    i.style.backgroundColor = '#141ff9';
  })

  button.style.paddingLeft = '35px';
  button.style.backgroundColor = '#2c36fa';
}

let flag = 0;

document.querySelector('.toggle').addEventListener('click', ()=> {
  if (flag === 0) {
    document.querySelector('.activities').style.width = "13%";
    document.querySelector('.toggle').style.transform = "rotate(180deg)";
    document.querySelector('.toggle').style.color = "#fff";
    flag++;
  } else {
    document.querySelector('.activities').style.width = "0%";
    document.querySelector('.toggle').style.transform = "rotate(0deg)";
    document.querySelector('.toggle').style.color = "#000";
    flag--;
  }
})
// ------------------------------------------------- //
document.getElementById('home_btn').addEventListener('click', ()=> {
  const topics = document.querySelectorAll('.topics');
  const mylessons = document.querySelectorAll('.lessons');
  const home_nav = document.querySelector('.home');

  mylessons.forEach(i => {
    i.style.display = 'none';
  });
  
  topics.forEach(i => {
    i.style.display = 'none';
  });

  document.querySelector('.side_navigation').style.width = '0';
  document.querySelector('.homepage').style.display = 'flex';
  document.querySelector('.activities').style.display = 'none';
  document.querySelector('.main-section').style.width = '100%';
  document.querySelector('.about_page').style.display = 'none';
  buttonFocus(home_nav);
});

document.getElementById('about_btn').addEventListener('click', ()=> {
  const topics = document.querySelectorAll('.topics');
  const mylessons = document.querySelectorAll('.lessons');
  const about_nav = document.querySelector('.about');

  mylessons.forEach(i => {
    i.style.display = 'none';
  });
  
  topics.forEach(i => {
    i.style.display = 'none';
  });

  document.querySelector('.side_navigation').style.width = '0';
  document.querySelector('.homepage').style.display = 'none';
  document.querySelector('.activities').style.display = 'none';
  document.querySelector('.main-section').style.width = '100%';
  document.querySelector('.about_page').style.display = 'block';
  buttonFocus(about_nav);
});
// -------------------------------------------------- //


// ----------------- HTML Elements ------------------ //
document.getElementById('html_btn').addEventListener('click', ()=>{
  const html_block = document.querySelector('#html');
  const html_content = document.querySelector('#html_default');
  const html_nav = document.querySelector('.html_nav');
  const htmlIntro = document.querySelector('.intro');
  
  sideButtonFocus(htmlIntro);
  buttonFocus(html_nav);
  displaySideNavigation(html_block);
  displayMainContent(html_content)
});

document.getElementById('html_introduction').addEventListener('click', ()=>{
  const html_content = document.querySelector('#html_default');
  const htmlIntro = document.querySelector('.intro');
  sideButtonFocus(htmlIntro);
  displayMainContent(html_content);
});

document.getElementById('html__basics').addEventListener('click', ()=>{
  const html_content = document.querySelector('#html_basics');
  const htmltags = document.querySelector('.tags');
  sideButtonFocus(htmltags);
  displayMainContent(html_content);
});

document.getElementById('html__comments').addEventListener('click', ()=>{
  const html_content = document.querySelector('#html_comments');
  const htmlComments = document.querySelector('.comments');
  sideButtonFocus(htmlComments);
  displayMainContent(html_content);
});

document.getElementById('html__textF').addEventListener('click', ()=>{
  const html_content = document.querySelector('#html_textF');
  const htmlTextFormatting = document.querySelector('.texts');
  sideButtonFocus(htmlTextFormatting);
  displayMainContent(html_content);
});

document.getElementById('html__semantics').addEventListener('click', ()=>{
  const html_content = document.querySelector('#html_semantics');
  const htmlSemantic = document.querySelector('.semantic');
  sideButtonFocus(htmlSemantic);
  displayMainContent(html_content);
});

document.querySelector('.html-container').addEventListener('click', ()=>{
  const html_page = document.querySelector('#html');
  const html_content = document.querySelector('#html_default');
  const html_nav = document.querySelector('.html_nav');
  const html_intro = document.querySelector('.intro');

  buttonFocus(html_nav);
  sideButtonFocus(html_intro);
  displaySideNavigation(html_page);
  displayMainContent(html_content)
});
// ----------------- HTML Elements ------------------ //


// ----------------- JavaScript Elements ------------------ //
document.getElementById('js_btn').addEventListener('click', ()=>{
  const js_block = document.querySelector('#javascript');
  const js_nav = document.querySelector('.js_nav');
  const js_content = document.querySelector('#js_default');
  const js_intro = document.querySelector('.js_intro');

  buttonFocus(js_nav);
  sideButtonFocus(js_intro);
  displaySideNavigation(js_block);
  displayMainContent(js_content);
});

document.getElementById('js__introduction').addEventListener('click', ()=>{
  const js_content = document.querySelector('#js_default');
  const jsIntro = document.querySelector('.js_intro');
  sideButtonFocus(jsIntro);
  displayMainContent(js_content);
});

document.getElementById('js__syntax').addEventListener('click', ()=>{
  const js_content = document.querySelector('#js_syntax');
  const jsIntro = document.querySelector('.js_syntax');
  sideButtonFocus(jsIntro);
  displayMainContent(js_content);
});

document.getElementById('js__dataTypes').addEventListener('click', ()=>{
  const js_content = document.querySelector('#js_dataTypes');
  const jsIntro = document.querySelector('.js_dataTypes');
  sideButtonFocus(jsIntro);
  displayMainContent(js_content);
});

document.getElementById('js__variables').addEventListener('click', ()=>{
  const js_content = document.querySelector('#js_variables');
  const jsIntro = document.querySelector('.js_variables');
  sideButtonFocus(jsIntro);
  displayMainContent(js_content);
});

document.getElementById('js__operators').addEventListener('click', ()=>{
  const js_content = document.querySelector('#js_operators');
  const jsIntro = document.querySelector('.js_operators');
  sideButtonFocus(jsIntro);
  displayMainContent(js_content);
});

document.getElementById('js__conditionals').addEventListener('click', ()=>{
  const js_content = document.querySelector('#js_conditionals');
  const jsIntro = document.querySelector('.js_conditionals');
  sideButtonFocus(jsIntro);
  displayMainContent(js_content);
});

document.querySelector('.js-container').addEventListener('click', ()=>{
  const js_page = document.querySelector('#javascript');
  const js_nav = document.querySelector('.js_nav');
  const js_content = document.querySelector('#js_default');
  const js_intro = document.querySelector('.js_intro');

  buttonFocus(js_nav);
  sideButtonFocus(js_intro);
  displaySideNavigation(js_page);
  displayMainContent(js_content);
});

document.getElementById('blue').addEventListener('click', ()=>{
  document.querySelector('.demo').style.backgroundColor = '#4018f1';
  document.querySelector('.demo').style.transition = '.2s ease-in-out';
});
document.getElementById('red').addEventListener('click', ()=>{
  document.querySelector('.demo').style.backgroundColor = '#f11818';
  document.querySelector('.demo').style.transition = '.2s ease-in-out';
});
document.getElementById('green').addEventListener('click', ()=>{
  document.querySelector('.demo').style.backgroundColor = '#18f11f';
  document.querySelector('.demo').style.transition = '.2s ease-in-out';
});
document.getElementById('purple').addEventListener('click', ()=>{
  document.querySelector('.demo').style.backgroundColor = '#840e88';
  document.querySelector('.demo').style.transition = '.2s ease-in-out';
});
// ----------------- JavaScript Elements ------------------ //


// ----------------- PHP Elements ------------------ //
document.getElementById('php_btn').addEventListener('click', ()=>{
  const sideNavigations = document.querySelector('#php');
  const headerbtnFocus = document.querySelector('.php_nav');
  const sidebtnFocus = document.querySelector('.php_introduction');
  const mainContent = document.querySelector('#php_default');

  sideButtonFocus(sidebtnFocus);
  buttonFocus(headerbtnFocus);
  displaySideNavigation(sideNavigations);
  displayMainContent(mainContent);
});

document.getElementById('php__introduction').addEventListener('click', ()=>{
  const mainContent = document.querySelector('#php_default');
  const sidebtnFocus = document.querySelector('.php_introduction');

  sideButtonFocus(sidebtnFocus);
  displayMainContent(mainContent);
});

document.getElementById('php__syntax').addEventListener('click', ()=>{
  const content = document.querySelector('#php_syntax');
  const intro = document.querySelector('.php_syntax');
  sideButtonFocus(intro);
  displayMainContent(content);
});

document.getElementById('php__dataTypes').addEventListener('click', ()=>{
  const content = document.querySelector('#php_dataTypes');
  const intro = document.querySelector('.php_dataTypes');
  sideButtonFocus(intro);
  displayMainContent(content);
});

document.getElementById('php__variables').addEventListener('click', ()=>{
  const content = document.querySelector('#php_variables');
  const intro = document.querySelector('.php_variables');
  sideButtonFocus(intro);
  displayMainContent(content);
});

document.getElementById('php__operators').addEventListener('click', ()=>{
  const content = document.querySelector('#php_operators');
  const intro = document.querySelector('.php_operators');
  sideButtonFocus(intro);
  displayMainContent(content);
});

document.getElementById('php__conditionals').addEventListener('click', ()=>{
  const content = document.querySelector('#php_conditionals');
  const intro = document.querySelector('.php_conditionals');
  sideButtonFocus(intro);
  displayMainContent(content);
});

document.querySelector('.php-container').addEventListener('click', ()=>{
  const sideNavigations = document.querySelector('#php');
  const headerbtnFocus = document.querySelector('.php_nav');
  const mainContent = document.querySelector('#php_default');
  const sidebtnFocus = document.querySelector('.php_introduction');

  buttonFocus(headerbtnFocus);
  sideButtonFocus(sidebtnFocus);
  displaySideNavigation(sideNavigations);
  displayMainContent(mainContent);
});
// ----------------- PHP Elements ------------------ //


// ----------------- Python Elements ------------------ //
document.getElementById('python_btn').addEventListener('click', ()=>{
  const sideNavigations = document.querySelector('#python');
  const headerbtnFocus = document.querySelector('.python_nav');
  const mainContent = document.querySelector('#python_default');
  const sidebtnFocus = document.querySelector('.python_introduction');

  buttonFocus(headerbtnFocus);
  sideButtonFocus(sidebtnFocus);
  displaySideNavigation(sideNavigations);
  displayMainContent(mainContent);
});

document.querySelector('.python-container').addEventListener('click', ()=>{
  const sideNavigations = document.querySelector('#python');
  const headerbtnFocus = document.querySelector('.python_nav');
  const mainContent = document.querySelector('#python_default');
  const sidebtnFocus = document.querySelector('.python_introduction');

  buttonFocus(headerbtnFocus);
  sideButtonFocus(sidebtnFocus);
  displaySideNavigation(sideNavigations);
  displayMainContent(mainContent);
});

document.getElementById('python__introduction').addEventListener('click', ()=>{
  const sidenav_button = document.querySelector('.python_introduction');
  const mainContent = document.querySelector('#python_default');

  sideButtonFocus(sidenav_button);
  displayMainContent(mainContent);
});

document.getElementById('python__syntax').addEventListener('click', ()=>{
  const sidenav_button = document.querySelector('.python_syntax');
  const mainContent = document.querySelector('#python_syntax');

  sideButtonFocus(sidenav_button);
  displayMainContent(mainContent);
});

document.getElementById('python__dataTypes').addEventListener('click', ()=>{
  const sidenav_button = document.querySelector('.python_dataTypes');
  const mainContent = document.querySelector('#python_dataTypes');

  sideButtonFocus(sidenav_button);
  displayMainContent(mainContent);
});

document.getElementById('python__variables').addEventListener('click', ()=>{
  const sidenav_button = document.querySelector('.python_variables');
  const mainContent = document.querySelector('#python_variables');

  sideButtonFocus(sidenav_button);
  displayMainContent(mainContent);
});

document.getElementById('python__operators').addEventListener('click', ()=>{
  const sidenav_button = document.querySelector('.python_operators');
  const mainContent = document.querySelector('#python_operators');

  sideButtonFocus(sidenav_button);
  displayMainContent(mainContent);
});

document.getElementById('python__conditionals').addEventListener('click', ()=>{
  const sidenav_button = document.querySelector('.python_conditionals');
  const mainContent = document.querySelector('#python_conditionals');

  sideButtonFocus(sidenav_button);
  displayMainContent(mainContent);
});
// ----------------- Python Elements ------------------ //

document.getElementById('cLang_btn').addEventListener('click', ()=>{
  const c_block = document.querySelector('#cLang');
  const c_nav = document.querySelector('.c_nav');
  const mainContent = document.querySelector('#c_default');
  const topic = document.querySelector('.c_introduction');

  displayMainContent(mainContent);
  buttonFocus(c_nav);
  displaySideNavigation(c_block);
  sideButtonFocus(topic);
});

document.querySelector('.c-container').addEventListener('click', ()=>{
  const sideNavigations = document.querySelector('#cLang');
  const headerButton = document.querySelector('.c_nav');
  const mainContent = document.querySelector('#c_default');
  const topic = document.querySelector('.c_introduction');

  displayMainContent(mainContent);
  buttonFocus(headerButton);
  displaySideNavigation(sideNavigations);
  sideButtonFocus(topic);
});

document.getElementById('c__introduction').addEventListener('click', ()=>{
  const mainContent = document.querySelector('#c_default');
  const topic = document.querySelector('.c_introduction');

  displayMainContent(mainContent);
  sideButtonFocus(topic);
});

document.getElementById('c__syntax').addEventListener('click', ()=>{
  const mainContent = document.querySelector('#c_syntax');
  const topic = document.querySelector('.c_syntax');

  displayMainContent(mainContent);
  sideButtonFocus(topic);
});

document.getElementById('c__dataTypes').addEventListener('click', ()=>{
  const mainContent = document.querySelector('#c_dataTypes');
  const topic = document.querySelector('.c_dataTypes');

  displayMainContent(mainContent);
  sideButtonFocus(topic);
});

document.getElementById('c__variables').addEventListener('click', ()=>{
  const mainContent = document.querySelector('#c_variables');
  const topic = document.querySelector('.c_variables');

  displayMainContent(mainContent);
  sideButtonFocus(topic);
});

document.getElementById('c__conditionals').addEventListener('click', ()=>{
  const mainContent = document.querySelector('#c_conditionals');
  const topic = document.querySelector('.c_conditionals');

  displayMainContent(mainContent);
  sideButtonFocus(topic);
});

document.getElementById('c__loops').addEventListener('click', ()=>{
  const mainContent = document.querySelector('#c_loops');
  const topic = document.querySelector('.c_loops');

  displayMainContent(mainContent);
  sideButtonFocus(topic);
});