const QUIZ_QUESTIONS = [
  /* ===== Pakistan / GK ===== */
  { q: "Pakistan ka darul hukumat (capital) kaunsa hai?", options: ["Karachi", "Lahore", "Islamabad", "Peshawar"], answer: 2 },
  { q: "Pakistan kab azaad hua?", options: ["1945", "1946", "1947", "1948"], answer: 2 },
  { q: "Quaid-e-Azam ka pura naam kya tha?", options: ["Muhammad Ali Jinnah", "Allama Iqbal", "Liaquat Ali Khan", "Ayub Khan"], answer: 0 },
  { q: "Pakistan mein kitne soobe (provinces) hain?", options: ["3", "4", "5", "6"], answer: 1 },
  { q: "Pakistan ki currency ka naam kya hai?", options: ["Dollar", "Rupee", "Taka", "Dinar"], answer: 1 },
  { q: "Pakistan ka qaumi phool kaunsa hai?", options: ["Rose", "Jasmine", "Tulip", "Sunflower"], answer: 1 },
  { q: "Pakistan ka qaumi janwar kaunsa hai?", options: ["Lion", "Tiger", "Markhor", "Deer"], answer: 2 },
  { q: "Pakistan ka sab se bara shehar kaunsa hai?", options: ["Lahore", "Karachi", "Islamabad", "Faisalabad"], answer: 1 },
  { q: "Pakistan ki qaumi zaban kaunsi hai?", options: ["Punjabi", "Sindhi", "Urdu", "Pashto"], answer: 2 },
  { q: "Pakistan ka qaumi parindah kaunsa hai?", options: ["Eagle", "Chukar", "Parrot", "Peacock"], answer: 1 },

  /* ===== Science ===== */
  { q: "Pani ka chemical formula kya hai?", options: ["CO2", "H2O", "O2", "NaCl"], answer: 1 },
  { q: "Insaan ke dil mein kitne chambers hote hain?", options: ["2", "3", "4", "5"], answer: 2 },
  { q: "Sooraj ke sab se qareeb khalai jism kaunsa hai?", options: ["Venus", "Earth", "Mercury", "Mars"], answer: 2 },
  { q: "Oxygen ka chemical symbol kya hai?", options: ["O", "Ox", "O2", "Og"], answer: 0 },
  { q: "Photosynthesis mein paudhe kaunsi gas chhorte hain?", options: ["CO2", "Nitrogen", "Oxygen", "Hydrogen"], answer: 2 },
  { q: "Khoon ka rang laal kis wajah se hota hai?", options: ["Iron", "Hemoglobin", "Chlorophyll", "Plasma"], answer: 1 },
  { q: "Insaan ki sab se lambi haddi kaunsi hai?", options: ["Femur", "Tibia", "Humerus", "Spine"], answer: 0 },
  { q: "Roshanee (light) ki speed kitni hai?", options: ["3×10^6 m/s", "3×10^8 m/s", "3×10^10 m/s", "3×10^5 m/s"], answer: 1 },
  { q: "Duniya ka sab se bara janwar kaunsa hai?", options: ["Elephant", "Blue Whale", "Giraffe", "Hippo"], answer: 1 },
  { q: "Newton ka teesra qanoon kya hai?", options: ["Action-reaction", "Gravity", "F=ma", "Inertia"], answer: 0 },

  /* ===== Math ===== */
  { q: "15 + 27 = ?", options: ["40", "41", "42", "43"], answer: 2 },
  { q: "12 × 5 = ?", options: ["50", "55", "60", "65"], answer: 2 },
  { q: "144 ÷ 12 = ?", options: ["10", "11", "12", "13"], answer: 2 },
  { q: "81 ka square root kya hai?", options: ["7", "8", "9", "10"], answer: 2 },
  { q: "7² = ?", options: ["14", "42", "47", "49"], answer: 3 },
  { q: "100 - 45 = ?", options: ["55", "65", "45", "60"], answer: 0 },
  { q: "200 ka 25% kya hai?", options: ["25", "40", "50", "75"], answer: 2 },
  { q: "3/4 + 1/4 = ?", options: ["1/2", "1", "3/8", "2"], answer: 1 },
  { q: "Ek square ka perimeter kya hoga jis ki side 5 hai?", options: ["10", "15", "20", "25"], answer: 2 },
  { q: "Ek rectangle 6×4 ka area kya hai?", options: ["10", "20", "24", "28"], answer: 2 },

  /* ===== History ===== */
  { q: "Pehli World War kab shuru hui?", options: ["1912", "1914", "1916", "1918"], answer: 1 },
  { q: "Doosri World War kab khatam hui?", options: ["1943", "1944", "1945", "1946"], answer: 2 },
  { q: "Taj Mahal kis ne banwaya?", options: ["Akbar", "Shah Jahan", "Aurangzeb", "Babur"], answer: 1 },
  { q: "America kab azaad hua?", options: ["1774", "1776", "1780", "1789"], answer: 1 },
  { q: "Chand pe pehla insaan kaun gaya?", options: ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "Michael Collins"], answer: 1 },

  /* ===== Islamic ===== */
  { q: "Quran Majeed mein kitni Surah hain?", options: ["100", "110", "114", "120"], answer: 2 },
  { q: "5 waqt ki namaz mein total kitni rakat Farz hoti hain?", options: ["10", "12", "15", "17"], answer: 3 },
  { q: "Islam ke pehle Khalifa kaun thay?", options: ["Umar (R.A)", "Abu Bakr (R.A)", "Usman (R.A)", "Ali (R.A)"], answer: 1 },
  { q: "Ramzan ul Mubarak Islamic calendar ka kaunsa mahina hai?", options: ["7th", "8th", "9th", "10th"], answer: 2 },
  { q: "Kaaba Sharif kahan hai?", options: ["Madinah", "Makkah", "Jerusalem", "Taif"], answer: 1 },

  /* ===== Computer ===== */
  { q: "CPU ka pura naam kya hai?", options: ["Central Processing Unit", "Computer Personal Unit", "Central Program Unit", "Control Processing Unit"], answer: 0 },
  { q: "1 KB mein kitne bytes hote hain?", options: ["1000", "1024", "512", "2048"], answer: 1 },
  { q: "Google ke founders kaun hain?", options: ["Bill Gates & Paul Allen", "Larry Page & Sergey Brin", "Steve Jobs & Wozniak", "Mark & Eduardo"], answer: 1 },
  { q: "HTML ka pura naam kya hai?", options: ["HyperText Markup Language", "High Text Markup Language", "Hyperlink Text Mode Language", "Home Tool Markup Language"], answer: 0 },
  { q: "WWW ka pura naam kya hai?", options: ["World Web Wide", "World Wide Web", "Web World Wide", "Wide World Web"], answer: 1 },

  /* ===== General ===== */
  { q: "Rainbow mein kitne rang hote hain?", options: ["5", "6", "7", "8"], answer: 2 },
  { q: "Duniya ka sab se bara samundar kaunsa hai?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: 3 },
  { q: "Duniya ka sab se lamba darya kaunsa hai?", options: ["Amazon", "Nile", "Indus", "Yangtze"], answer: 1 },
  { q: "Cricket ki ek team mein kitne players hote hain?", options: ["9", "10", "11", "12"], answer: 2 },
  { q: "Olympic Games kitne saal ke baad hote hain?", options: ["2", "3", "4", "5"], answer: 2 }
];