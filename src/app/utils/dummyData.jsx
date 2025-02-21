export const sideBarLinks = [
  {
    id: 1,
    name: "Branches",
    path: "/",
    icon: "/pics/e.png"
  },
  {
    id: 2,
    name: "Roles",
    path: "/",
    icon: "/pics/e.png"
  },
  {
    id: 3,
    name: "Users",
    path: "/",
    icon: "/pics/e.png"
  },
  {
    id: 4,
    name: "Card Scheme",
    path: "/",
    icon: "/pics/e.png"
  },
  {
    id: 5,
    name: "Card Profile",
    path: "/profile",
    icon: "/pics/e.png"
  },
  {
    id: 6,
    name: "Card Request",
    path: "/card",
    icon: "/pics/e.png"
  },
  {
    id: 7,
    name: "Stock",
    path: "/",
    icon: "/pics/e.png"
  },
  {
    id: 8,
    name: "Cards",
    path: "/",
    icon: "/pics/e.png"
  },
  {
    id: 9,
    name: "Authorization List",
    path: "/",
    icon: "/pics/e.png"
  },
  {
    id: 10,
    name: "Authorization Queued",
    path: "/",
    icon: "/pics/e.png"
  },
  {
    id: 11,
    name: "Trail",
    path: "/",
    icon: "/pics/e.png"
  },
  {
    id: 12,
    name: "Account",
    path: "/",
    icon: "/pics/e.png"
  }
]

export const cardRequst = [
  {
    id: 1,
    name: "Corperate",
    status: "Pending",
    qty: "10",
    type: "Instant"
  },
  {
    id: 2,
    name: "Corperate",
    status: "Pending",
    qty: "10",
    type: "Instant"
  },
  {
    id: 3,
    name: "Corperate",
    status: "Pending",
    qty: "10",
    type: "Instant"
  },
  {
    id: 4,
    name: "Corperate",
    status: "Pending",
    qty: "10",
    type: "Instant"
  }
]

export const dataIncome = {
  datasets: [{
    data: [0, 20, 40, 60, 80, 100],
    borderColor: "#4DAF01"
  }],
  labels: [
    "Mon",
    "Tue",
    "Wed",
    "Thur",
    "Fri",
    "Sat",
    "Sun",
  ]
}

export const monthIncome = {
  datasets: [{
    label: "Personalized",
    data: [10, 25, 45, 50, 70, 90],
    borderColor: "#CCE2FF",
    backgroundColor: "#4DAF01"
  }, {
    label: "Income",
    data: [30, 70 , 20, 40, 60, 80, 100],
    borderColor: "#4DAF01",
    backgroundColor: "#CCE2FF"
  }],
  labels: [
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
  ]
}

export const doughnutData = {
  labels: [
    'Active',
    'Expired',
    'Inactive',
    'Blocked',
    'Lost'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 400, 200, 50, 100],
    backgroundColor: [
      '#00984C',
      '#FFBA24',
      '#014DAF',
      '#8020E7',
      '#FF4457',
    ],
    borderRadius: 10,
    weight: 40,
    padding: 100
  }]
};