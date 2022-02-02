let hideText_btn = document.getElementById('hideText_btn');

let hideText = document.getElementById('hideText');

hideText_btn.addEventListener('click', toggleText);

function toggleText() 
{
    hideText.classList.toggle('showM');

    if (hideText.classList.contains('showM'))
    {
        hideText_btn.innerHTML = 'Leer Menos';
    }
    else
    {
        hideText_btn.innerHTML = 'Leer más';
    }
}