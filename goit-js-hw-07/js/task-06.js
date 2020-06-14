// Напиши скрипт, который бы при потере фокуса на инпуте,
//  проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его
//  атрибуте data-length.
// Если введено подходящее количество, то border инпута
// становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

  const inputRef = document.querySelector('#validation-input');
  console.log(inputRef);
  
//   inputRef.addEventListener('focus', handleInputFocus);
//   inputRef.addEventListener('blur', handleInputBlur);
  inputRef.addEventListener('change', handleLicenseChange);

// function handleInputFocus(event) {
// // console.log('yes');
// };
// function handleInputBlur(event) {
// // console.log('no');
// };

function handleLicenseChange(event) {
    console.log(this.value.length);
    if (this.getAttribute('data-length') > this.value.length) { 
              this.classList.remove('valid');
              this.classList.add('invalid');
            } 
            else {
              this.classList.remove('invalid');
              this.classList.add('valid');
            }
};
