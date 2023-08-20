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
    date: '2023 / 12 / 12',
    Amount: 980000,
    status: "approved",
  },
  {
    id: 2,
    img: "https://marketplace.canva.com/EAFP9iKtGOw/1/0/1600w/canva-grey-modern-linkedin-profile-picture-na-7L7OnPaY.jpg",
    customer: "Mehdi Naseri",
    date: '2023 / 12 / 11',
    Amount: 1999,
    status: "pending",
  },
  {
    id: 3,
    img: "images/Screenshot 2023-07-11 105616.png",
    customer: "M.Hesam Moradian",
    date: '2023 / 12 / 8',
    Amount: 1000000,
    status: "regected",
    
  },
  {
    id: 4,
    img: "https://marketplace.canva.com/EAFQud1wRig/1/0/1600w/canva-professional-linkedin-profile-picture-QDDX6c-STKE.jpg",
    customer: "Mehdi Vatani",
    date: '2023 / 11 / 29',
    Amount: 8000,
    status: "approved",
  },
];
export { chartdata, SmWidgetData, transActions };
