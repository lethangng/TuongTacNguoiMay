const btn = document.querySelector('.dropdown');
const list = document.querySelector('.list');
btn.addEventListener('click', () => {
    list.classList.toggle('active');
})

const listRoomBooked = [
    {
        nameRoom: 'Phòng mang phong cách cổ điển',
        checkin: "10/10/2020",
        nameCustomer: 'VŨ CHÍ THÀNH',
        roomNumber: 2,
        numberOfPeople: 5,
        checkout: '12/10/2020',
        service: 'Mát xa toàn thân',
        endow: 'Miễn phí bể bơi 4 mùa',
        total: '4.800.000đ'
    },
    {
        nameRoom: 'Phòng mang phong cách cổ điển',
        checkin: "10/10/2020",
        nameCustomer: 'VŨ CHÍ THÀNH',
        roomNumber: 2,
        numberOfPeople: 5,
        checkout: '12/10/2020',
        service: 'Mát xa toàn thân',
        endow: 'Miễn phí bể bơi 4 mùa',
        total: '4.800.000đ'

    },
    {
        nameRoom: 'Phòng mang phong cách cổ điển',
        checkin: "10/10/2020",
        nameCustomer: 'VŨ CHÍ THÀNH',
        roomNumber: 2,
        numberOfPeople: 5,
        checkout: '12/10/2020',
        service: 'Mát xa toàn thân',
        endow: 'Miễn phí bể bơi 4 mùa',
        total: '4.800.000đ'
    }
]

function showAlert(message, type) {
    const alert = document.createElement("div");
    const icon = document.createElement("img");
    icon.src = "../icon/5402431_done_success_tick_valid_approve_icon 1.png"
    alert.className = `alert ${type}`;
    const div1 = document.createElement("div");
    div1.appendChild(icon);
    iconClose = document.createElement("img");
    iconClose.src = "../icon/9110796_x_icon 4.png";
    iconClose.className = 'icon-close';
    const div2 = document.createElement("div");
    div2.appendChild(iconClose);
    alert.appendChild(div1);
    alert.appendChild(document.createTextNode(message));
    alert.appendChild(div2);

    document.body.appendChild(alert);
    setTimeout(() => {
        alert.remove();
    }, 2500);
    div2.addEventListener("click", () => {
        alert.remove();
    })
}

let modalIndex = 0;



const openModalBtn = document.querySelectorAll(".btnCancel");
const closeModalBtn = document.querySelectorAll(".closeModalBtn");
const modal = document.getElementById("modal");


openModalBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        modal.style.display = "block";
        modalIndex = index;
    });
})

closeModalBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        modal.style.display = "none";
    });
})


window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

const containerName = document.querySelectorAll('.myListRoom');
const btnCancel = document.querySelector('.acceptModal');

btnCancel.addEventListener('click', () => {
    console.log();
    containerName[modalIndex].remove();
    modal.style.display = "none";
    showAlert("Xóa thành công", "success");
})
