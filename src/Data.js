const chartdata = [
  { month: "Jan", sale: 70_000 },
  { month: "Feb", sale: 120_000 },
  { month: "Mar", sale: 100_000 },
  { month: "Apr", sale: 90_000 },
  { month: "May", sale: 120_000 },
  { month: "June", sale: 84_000 },
  { month: "July", sale: 70_000 },
  { month: "Aug", sale: 100_000 },
  { month: "Sept", sale: 80_000 },
  { month: "Oct", sale: 110_000 },
  { month: "Nov", sale: 114_000 },
  { month: "Dec", sale: 94_000 },
];
const SmWidgetData = [
  {
    img: "images/Screenshot 2023-07-11 105616.png",
    name: "M.Hesam Moradian",
    job: "Front-End",
  },
  {
    img: "https://marketplace.canva.com/EAFQud1wRig/1/0/1600w/canva-professional-linkedin-profile-picture-QDDX6c-STKE.jpg",
    name: "Mehdi Vatani",
    job: "desiner",
  },
  {
    img: "https://marketplace.canva.com/EAFP9iKtGOw/1/0/1600w/canva-grey-modern-linkedin-profile-picture-na-7L7OnPaY.jpg",
    name: "Mehdi Naseri",
    job: "back-end ",
  },
];
const transActions = [
  {
    id: 1,
    img: "images/Screenshot 2023-07-11 105616.png",
    customer: "M.Hesam Moradian",
    date: "2023 / 12 / 12",
    Amount: 980000,
    status: "approved",
  },
  {
    id: 2,
    img: "https://marketplace.canva.com/EAFP9iKtGOw/1/0/1600w/canva-grey-modern-linkedin-profile-picture-na-7L7OnPaY.jpg",
    customer: "Mehdi Naseri",
    date: "2023 / 12 / 11",
    Amount: 1999,
    status: "pending",
  },
  {
    id: 3,
    img: "images/Screenshot 2023-07-11 105616.png",
    customer: "M.Hesam Moradian",
    date: "2023 / 12 / 8",
    Amount: 1000000,
    status: "regected",
  },
  {
    id: 4,
    img: "https://marketplace.canva.com/EAFQud1wRig/1/0/1600w/canva-professional-linkedin-profile-picture-QDDX6c-STKE.jpg",
    customer: "Mehdi Vatani",
    date: "2023 / 11 / 29",
    Amount: 8000,
    status: "approved",
  },
];
const UsertsList = [
  {
    ID: 1,
    Name: "M.Hesam Moradian",
    img: "images/Screenshot 2023-07-11 105616.png",
    status: "Active",
    Gmail: "m.hesam.moradian@gmail.com",
  },
  {
    ID: 2,
    Name: "Mehdi Vatani",
    img: "https://marketplace.canva.com/EAFQud1wRig/1/0/1600w/canva-professional-linkedin-profile-picture-QDDX6c-STKE.jpg",
    status: "Active",
    Gmail: "Mehdi.Vatani@gmail.com",
  },
  {
    ID: 3,
    Name: "Mehdi Naseri",
    img: "https://marketplace.canva.com/EAFP9iKtGOw/1/0/1600w/canva-grey-modern-linkedin-profile-picture-na-7L7OnPaY.jpg",
    status: "deActive",
    Gmail: "Mehdi_Naseri1381@gmail.com",
  },
  {
    ID: 4,
    Name: "noshin khanbabaii",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8pd4f-ZTyp4Fdlqw7f9YzoGj55o4Q9ST4taMlI8QqU0Y-KNxNHoZGR0ru6GG9Z8HN3ZQ&usqp=CAU",
    status: "Active",
    Gmail: "noshiwx@gmail.com",
  },
];
const productList = [
  {
    ID: 1,
    Name: "Asus X515",
    img: "https://dkstatics-public.digikala.com/digikala-products/5d4faccb05aebbf5bbcd6eb170a79107e446533e_1646218643.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
    count: 20,
    price: 499,
  },
  {
    ID: 2,
    Name: "lenovo Yoga 6",
    img: "https://lenovo.ws/wp-content/uploads/2020/10/lenovo-laptop-yoga9-.jpg",
    count: 13,
    price: 698,
  },
  {
    ID: 3,
    Name: "Dell xe123",
    img: "https://cdnfa.com/aralap/455a/files/4822886.webp",
    count: 30,
    price: 99,
  },
];
export { chartdata, SmWidgetData, transActions, UsertsList, productList };
