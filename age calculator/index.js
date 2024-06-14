let birthdayEl = document.querySelector('.inputbirthday');
let buttonEl = document.querySelector('button');
const spanEl = document.querySelector('.target');

buttonEl.addEventListener('click', () => {
    let age = birthdayEl.value;
    let currentdate = new Date();
    
    function getAge(birthDateString) {
        let birthDate = new Date(birthDateString);
        let currentYear = currentdate.getFullYear();
        let birthYear = birthDate.getFullYear();
        let age = currentYear - birthYear;
        
        // Adjust if the birthday hasn't occurred yet this year
        let currentMonth = currentdate.getMonth();
        let birthMonth = birthDate.getMonth();
        let currentDay = currentdate.getDate();
        let birthDay = birthDate.getDate();
        
        if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
            age--;
        }
        
        return age;
    }

    let calculatedAge = getAge(age);
    spanEl.textContent = `Your age is ${calculatedAge}`;
});
