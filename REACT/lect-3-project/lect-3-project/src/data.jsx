const Data = [
  {
    id: 1,
    name: "Agra",
    info: "Agra, a city nestled in the northern state of Uttar Pradesh, India, stands as a testament to the grandeur of Mughal architecture and the enduring symbol of love, the Taj Mahal. This city, with its rich history and cultural heritage, draws millions of visitors annually, eager to immerse themselves in the splendor of its iconic landmarks. ",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fagra&psig=AOvVaw1N8BfKGHQYRVscnKfBIlcY&ust=1708282360948000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCOjc_e6Fs4QDFQAAAAAdAAAAABAE",
    price: "35,555",
  },
  {
    id: 2,
    name: "Mumbai",
    info: "Mumbai, the financial and entertainment capital of India, is a bustling metropolis. The Gateway of India, Chhatrapati Shivaji Maharaj Terminus, and Marine Drive are iconic landmarks. The city is also home to Bollywood, and visitors can explore the vibrant street life, markets, and diverse culinary scene.",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.india-briefing.com%2Fnews%2Feconomy-mumbai-india-commercial-hub-6704.html%2F&psig=AOvVaw2-CTfaz1h4V7NP8ZKPtb_6&ust=1708282910078000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMjZpvSHs4QDFQAAAAAdAAAAABAE",
    price: "50,555",
  },
  {
    id: 3,
    name: "Varanasi",
    info: "Varanasi, one of the oldest continuously inhabited cities, is a sacred destination for Hindus. Ghats along the Ganges River, such as Dashashwamedh Ghat and Manikarnika Ghat, are integral to spiritual rituals. Temples like Kashi Vishwanath and Sarnath, where Buddha gave his first sermon, are significant.",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fvaranasi&psig=AOvVaw0MiG0EvvJJFj1T1Ng5YgMY&ust=1708282575995000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMiK09WGs4QDFQAAAAAdAAAAABAE",
    price: "25,000",
  },
  {
    id: 4,
    name: "Rishikesh",
    info: "Rishikesh, nestled in the foothills of the Himalayas, is known for its spiritual ambiance, yoga retreats, and the iconic Lakshman Jhula bridge across the Ganges.",
    image:
      "https://www.google.com/imgres?imgurl=http%3A%2F%2Frishikeshdaytour.com%2Fblog%2Fwp-content%2Fuploads%2F2019%2F03%2FRishikesh-Uttarakhand-India.jpg&tbnid=ZBiXEHoeO_Kz5M&vet=12ahUKEwiluIuAiLOEAxUZp2MGHXsLA04QMygCegQIARB4..i&imgrefurl=https%3A%2F%2Frishikeshdaytour.com%2Fblog%2Frishikesh-uttarakhand-india%2F&docid=EH-U7A4FTcDGVM&w=1000&h=666&q=rishikesh&ved=2ahUKEwiluIuAiLOEAxUZp2MGHXsLA04QMygCegQIARB4",
    price: "32,000",
  },
  {
    id: 5,
    name: "Mysuru",
    info: "Mysuru, in Karnataka, is famous for its grand Mysore Palace, intricate sandalwood crafts, and the vibrant Dasara festival celebrated with a majestic procession.",
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fkarnatakatourism.org%2Fwp-content%2Fuploads%2F2020%2F06%2F40_2018_Mysore-Palace-3.jpg&tbnid=_hUtYW-fxql7QM&vet=12ahUKEwiyu5GRiLOEAxWomGMGHbpZArMQMygBegQIARB2..i&imgrefurl=https%3A%2F%2Fwww.karnatakatourism.org%2Ftour-item%2Fmysuru%2F&docid=NNoAqVExFGFwIM&w=1920&h=1100&q=mysuru&ved=2ahUKEwiyu5GRiLOEAxWomGMGHbpZArMQMygBegQIARB2",
    price: "36,000",
  },
  {
    id: 6,
    name: "Kochi",
    info: "Kochi, a coastal city in Kerala, combines colonial influences with traditional Kerala culture. It features Chinese fishing nets, Fort Kochi, and serene backwaters.",
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.savaari.com%2Fblog%2Fwp-content%2Fuploads%2F2023%2F07%2Fkochi_21.webp&tbnid=D2TYzTYAEvTyXM&vet=12ahUKEwiX-cGciLOEAxUE06ACHaRsBykQMygCegQIARB4..i&imgrefurl=https%3A%2F%2Fwww.savaari.com%2Fblog%2Fthings-to-do-in-kochi%2F&docid=0XJ61ioIn5QfOM&w=1344&h=757&q=kochi&ved=2ahUKEwiX-cGciLOEAxUE06ACHaRsBykQMygCegQIARB4",
    price: "45,000",
  },
  {
    id: 7,
    name: "Jaipur",
    info: "Jaipur, the 'Pink City' of Rajasthan, is known for its vibrant culture, majestic palaces like Hawa Mahal and City Palace, and the iconic Amer Fort.",
    image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.bruisedpassports.com%2Fwp-content%2Fuploads%2F2018%2F09%2FFairmont-Jaipur-things-to-do-in-Jaipur.jpg&tbnid=QaqYvIDBcz4r6M&vet=12ahUKEwjshbyoiLOEAxV_rWMGHR88AnQQMygeegUIARC2AQ..i&imgrefurl=https%3A%2F%2Fwww.bruisedpassports.com%2Findia%2Fthings-to-do-jaipur-golden-triangle&docid=aP3Lhz04PCijaM&w=1366&h=912&q=jaipur&hl=en-GB&ved=2ahUKEwjshbyoiLOEAxV_rWMGHR88AnQQMygeegUIARC2AQ",
    price: "40,000",
  },
];

export default Data;
