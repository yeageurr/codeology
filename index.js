function hideLessons() {
  const topics = document.querySelectorAll('.topics');
  const mylessons = document.querySelectorAll('.lessons');

  mylessons.forEach(i => {
    i.style.display = 'none';
  });
  
  topics.forEach(i => {
    i.style.display = 'none';
  });

  document.querySelector('.side_navigation').style.width = '23%';
};

function displaySideNavigation(content) {
  document.querySelector('.side_navigation').style.padding = '0';
  const mylessons = document.querySelectorAll('.lessons');
  mylessons.forEach(i => {
    i.style.display = 'none';
  });

  document.querySelector('.side_navigation').style.padding = '25px 0 45px 0';
  document.querySelector('.side_navigation').style.width = '24.5%';
  content.style.display = 'block';
}

function displayMainContent(topic) {
  const topics = document.querySelectorAll('.topics');

  topics.forEach(i => {
    i.style.display = 'none';
  });

  topic.style.display = 'block';
}

document.getElementById('html_btn').addEventListener('click', ()=>{
  const html_block = document.querySelector('#html');
  const html_content = document.querySelector('#html_default');
  displaySideNavigation(html_block);
  displayMainContent(html_content)
});

document.getElementById('html_introduction').addEventListener('click', ()=>{
  const html_content = document.querySelector('#html_default');
  displayMainContent(html_content)
});

document.getElementById('html__basics').addEventListener('click', ()=>{
  const html_content = document.querySelector('#html_basics');
  displayMainContent(html_content);
});

document.getElementById('html__metadata').addEventListener('click', ()=>{
  const html_content = document.querySelector('#html_metadata');
  displayMainContent(html_content);
});

document.getElementById('html__textF').addEventListener('click', ()=>{
  const html_content = document.querySelector('#html_textF');
  displayMainContent(html_content);
});

document.getElementById('html__semantics').addEventListener('click', ()=>{
  const html_content = document.querySelector('#html_semantics');
  displayMainContent(html_content);
});

document.getElementById('html__links').addEventListener('click', ()=>{
  const html_content = document.querySelector('#html_links');
  displayMainContent(html_content);
});

document.getElementById('html__media').addEventListener('click', ()=>{
  const html_content = document.querySelector('#html_media');
  displayMainContent(html_content);
});

document.getElementById('html__forms').addEventListener('click', ()=>{
  const html_content = document.querySelector('#html_forms');
  displayMainContent(html_content);
});

document.getElementById('html__tables').addEventListener('click', ()=>{
  const html_content = document.querySelector('#html_tables');
  displayMainContent(html_content);
});

document.getElementById('html__lists').addEventListener('click', ()=>{
  const html_content = document.querySelector('#html_list');
  displayMainContent(html_content);
});

document.getElementById('html__layout').addEventListener('click', ()=>{
  const html_content = document.querySelector('#html_layout');
  displayMainContent(html_content);
});

document.getElementById('html__colors').addEventListener('click', ()=>{
  const html_content = document.querySelector('#html_colors');
  displayMainContent(html_content);
});

document.getElementById('html__css').addEventListener('click', ()=>{
  const html_content = document.querySelector('#html_css');
  displayMainContent(html_content);
});

document.getElementById('js_btn').addEventListener('click', ()=>{
  const js_block = document.querySelector('#javascript');
  displaySideNavigation(js_block);
});

document.getElementById('php_btn').addEventListener('click', ()=>{
  const php_block = document.querySelector('#php');
  displaySideNavigation(php_block);
});

document.getElementById('python_btn').addEventListener('click', ()=>{
  const python_block = document.querySelector('#python');
  displaySideNavigation(python_block);
});

document.getElementById('cLang_btn').addEventListener('click', ()=>{
  const c_block = document.querySelector('#cLang');
  displaySideNavigation(c_block);
});

