const editButton = document.querySelector('.profile__edit-button');
const modalActive = document.querySelector('.popup');
const modalClose = document.querySelector('.popup__close');
const UnderlineActive = document.querySelector('.header');


editButton.addEventListener('click', () => {
  modalActive.classList.add('popup_active');
  UnderlineActive.classList.add('header__underline-active');

});

modalClose.addEventListener('click', () => {
  modalActive.classList.remove('popup_active');
  UnderlineActive.classList.remove('header__underline-active');
});


const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const form = document.querySelector('.popup__form');
const inputName = document.querySelector('.popup__input-name');
const inputJob = document.querySelector('.popup__input-job')


form.onsubmit = () => {
  profileName.textContent = inputName.value,
  profileJob.textContent = inputJob.value;

}










