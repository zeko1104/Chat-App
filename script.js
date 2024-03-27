const users =document.querySelectorAll('.user');
const toggle=document.getElementById('toggle');
const chatArea = document.querySelector('.chat-area');
const messageList = document.querySelector('.message-list');



users.forEach(function(user){
    user.addEventListener('click', function(){
        users.forEach(function(u) {
            u.classList.remove('active');
        });
        user.classList.add('active');
    })
})


toggle.addEventListener('click', () => {
    messageList.classList.toggle('dark-mode');
});