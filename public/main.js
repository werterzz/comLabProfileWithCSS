class detail
{
    constructor(subject, massage, gender, email, phone)
    {
        this.subject = subject;
        this.massage = massage;
        this.gender = gender;
        this.email = email;
        this.phone = phone;
    }
}

function displayCard(detail)
{
    const address = document.querySelector('.container.center');
    const newDiv = document.createElement('div');

    newDiv.innerHTML = 
    `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5>${detail.subject}</h5>
                <h5>${detail.massage}</h5>
                <h5>${detail.gender}</h5>
                <h5>${detail.email}</h5>
                <h5>${detail.phone}</h5>
                <a  class="btn btn-danger btn-sm delete"> X </a>
            </div>
        </div>
    `;
    address.appendChild(newDiv);
}



function init()
{
    if(JSON.parse(localStorage.getItem('detail')) == null)
    {
        localStorage.setItem('detail', 0);
        // console.log("hello man");
        
    }
}

//seed
// localStorage.setItem('detail', 0);

document.querySelector('#contactForm').addEventListener('submit', () =>
{
    let subject = document.querySelector('#subject').value;
    let massage = document.querySelector('#massage').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let email = document.querySelector('#email').value;
    let phone = document.querySelector('#phone').value;

    // console.log(subject);

    var user = new detail(subject, massage, gender, email, phone);
    // console.log(user);
    let temp;
    if(JSON.parse(localStorage.getItem('detail')) == 0)
    {
        temp = [];
        temp.push(user);
    }
    else
    {
        temp = JSON.parse(localStorage.getItem('detail'));
        temp.push(user);
    }
    localStorage.setItem('detail', JSON.stringify(temp));
    console.log(JSON.parse(localStorage.getItem('detail')));
});

document.addEventListener('DOMContentLoaded', () => 
{
    console.log( JSON.parse(localStorage.getItem('detail')));
    init();
    let temp = JSON.parse(localStorage.getItem('detail'));
    temp.forEach( getDetail => {
        console.log(getDetail.subject);
        displayCard(getDetail);
    });
});

document.querySelector('.container.center').addEventListener('click', (e) =>
{

    console.log(e.target.parentElement.children[4].innerHTML);

    if (e.target.classList.contains('delete'))
    {
        e.target.parentElement.parentElement.parentElement.remove();
    }

    const detail = JSON.parse(localStorage.getItem('detail'));

    detail.forEach((temp, index) => {
      if(temp.phone === e.target.parentElement.children[4].innerHTML) {
        detail.splice(index, 1);
      }
    });

    localStorage.setItem('detail', JSON.stringify(detail));
});