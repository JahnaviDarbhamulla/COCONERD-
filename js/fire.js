// constant to store all the questions and answers
const questions = {
  question0: {
    question: "How many refrigerators do you have?",
    option0: {
      type: "string",
      content:"One",
      personality: "kwh_2420"
    },
    option1: {
      type: "string",
      content:"Two",
      personality: "kwh_3221"
    },
    option2: {
      type: "string",
      content:"None",
      personality: "kwh_1121"
    },
    option3: {
      type: "string",
      content:"More than 2",
      personality: "kwh_5000"
    }
  },
  question1: {
    question: "How many geysers do you have?",
    option0: {
      type: "string",
      content:"One",
      personality: "kwh_2420"
    },
    option1: {
      type: "string",
      content:"Two",
      personality: "kwh_3221"
    },
    option2: {
      type: "string",
      content:"None",
      personality: "kwh_1121"
    },
    option3: {
      type: "string",
      content:"More than 2",
      personality: "kwh_5000"
    }
  },
  question2: {
    question: "Number of Dishwashers you use:",
    option0: {
      type: "string",
      content:"One",
      personality: "kwh_2420"
    },
    option1: {
      type: "string",
      content:"Two",
      personality: "kwh_3221"
    },
    option2: {
      type: "string",
      content:"None",
      personality: "kwh_1121"
    },
    option3: {
      type: "string",
      content:"More than 2",
      personality: "kwh_5000"
    }

  },
  question3: {
    question: "Number of Television systems:",
    option0: {
      type: "string",
      content:"One",
      personality: "kwh_2420"
    },
    option1: {
      type: "string",
      content:"Two",
      personality: "kwh_3221"
    },
    option2: {
      type: "string",
      content:"None",
      personality: "kwh_1121"
    },
    option3: {
      type: "string",
      content:"More than 2",
      personality: "kwh_5000"
    }
  },
  question4: {
    question: "Home desktops:",
    option0: {
      type: "string",
      content:"One",
      personality: "kwh_2420"
    },
    option1: {
      type: "string",
      content:"Two",
      personality: "kwh_3221"
    },
    option2: {
      type: "string",
      content:"None",
      personality: "kwh_1121"
    },
    option3: {
      type: "string",
      content:"More than 2",
      personality: "kwh_5000"
    }
  },
  question5: {
    question: "Do you have a pool?",
    option0: {
      type: "string",
      content:"One",
      personality: "kwh_2420"
    },
    option1: {
      type: "string",
      content:"Two",
      personality: "kwh_3221"
    },
    option2: {
      type: "string",
      content:"None",
      personality: "kwh_1121"
    },
    option3: {
      type: "string",
      content:"More than 2",
      personality: "kwh_5000"
    }
  },
  question6: {
    question: "Total count of ceiling lights:",
    option0: {
      type: "string",
      content:"One",
      personality: "kwh_2420"
    },
    option1: {
      type: "string",
      content:"Two",
      personality: "kwh_3221"
    },
    option2: {
      type: "string",
      content:"None",
      personality: "kwh_1121"
    },
    option3: {
      type: "string",
      content:"More than 2",
      personality: "kwh_5000"
    }
  },
  question7: {
    question: "How many Washing Machines do you have?",
    option0: {
      type: "string",
      content:"One",
      personality: "kwh_2420"
    },
    option1: {
      type: "string",
      content:"Two",
      personality: "kwh_3221"
    },
    option2: {
      type: "string",
      content:"None",
      personality: "kwh_1121"
    },
    option3: {
      type: "string",
      content:"More than 2",
      personality: "kwh_5000"
    }
  },
  question8: {
    question: "Do you have any Gaming consoles?If so how many?",
    option0: {
      type: "string",
      content:"One",
      personality: "kwh_2420"
    },
    option1: {
      type: "string",
      content:"Two",
      personality: "kwh_3221"
    },
    option2: {
      type: "string",
      content:"None",
      personality: "kwh_1121"
    },
    option3: {
      type: "string",
      content:"More than 2",
      personality: "kwh_5000"
    }
  },
  question9: {
    question: "Number of hair straigteners and blow dryers?",
    option0: {
      type: "string",
      content:"One",
      personality: "kwh_2420"
    },
    option1: {
      type: "string",
      content:"Two",
      personality: "kwh_3221"
    },
    option2: {
      type: "string",
      content:"None",
      personality: "kwh_1121"
    },
    option3: {
      type: "string",
      content:"More than 2",
      personality: "kwh_5000"
    }
  },
    question10: {
      question: "Number of hair straigteners and blow dryers?",
      option0: {
        type: "string",
        content:"One",
        personality: "kwh_2420"
      },
      option1: {
        type: "string",
        content:"Two",
        personality: "kwh_3221"
      },
      option2: {
        type: "string",
        content:"None",
        personality: "kwh_1121"
      },
      option3: {
        type: "string",
        content:"More than 2",
        personality: "kwh_5000"
      }
    }
	};

// constant to store the description for each type of traveller
const result = {
	kwh_1121: [
    "You love nature and you are very well aware of the consequences of water consumption.",
    "You not only know about it but you also preach and practice it.Your goal is to educate the kwh_5000 about the need of maintaining the ecological balance and the conservation of the environment and how we can do it.",
    "Few of the recommended books for you are: Conservation Psychology by Susan Clayton and The nature of nature by Enric sala"
  ],
  kwh_2420: [
		"You make sure you buy eco friendly products and you follow the 3R's(reduce, reuse, recycle) diligently.",
		"You know the rights and consequences of but there might be a few facts and stats you might be kwh_5000 of. ",
		"I recommend you to watch two documentaries seaspiracy and cowspiracy to really analyse and understand the market and the real play behind it. "
  ],
	kwh_3221: [
		"You know the consequences that will take place but you are lazy and not really intrested to help save the environment.",
		"You need to realise that there can be adverse efects to not contributing in saving the world.Start with something small and easy and work your way up.Even a small contribution by can make a big chnage. ",
		"I recommend you to watch two documentaries seaspiracy and cowspiracy to understand how commercial fishing and plastic can ruin the ecosystem. "
	],
	kwh_5000: [
    "You are completely kwh_5000 about the adversities.",
    "You definetly know about water pollution and sonsumption but you are not sure about how you can contribute.",
    "I wuld recommend you to start by segeregating waste, using less plastic, and reducing the consumption of fish."
  ]
};

// for keeping track of the score
var score = {
  kwh_1121: 0,
  kwh_2420: 0,
  kwh_3221: 0,
  kwh_5000: 0
};

// for keep track of the current question
var currentQn = 0;

// for setting up each of the questions
function setupQuestion() {
  // find out the current percentage of completion and updates the css
  var progress = 10 + currentQn * 10;
  var progressbar = document.getElementById("progress");
  progressbar.style.width = progress + "%";
  progressbar.innerText = currentQn + 1 + "/10";

  // get the current questions content
  var qn = questions["question" + currentQn];
  var qnText = document.getElementById("question");
  qnText.innerText = qn.question;

  // updates each of the options for the current question
  for (var i = 0; i < 10; i++) {
    var option = document.getElementById("option" + i);
    var content = option.getElementsByClassName("content")[0];
    var qnOption = qn["option" + i];
    if (qnOption.type == "image") {
      var htmlStr = "<img src='" + qnOption.content + "'>";
      content.innerHTML = htmlStr;
    } else {
      var htmlStr = "<p>" + qnOption.content + "</p>";
      content.innerHTML = htmlStr;
    }
  }
}

// to unselect all of the options
function resetOptions() {
  var btn = document.getElementsByTagName("input");
  btn[0].checked = false;
  btn[1].checked = false;
  btn[2].checked = false;
  btn[3].checked = false;
}

// to select the option that is clicked
function select(element) {
  var btn = element.getElementsByTagName("input")[0];
  btn.checked = true;
  next();
}

// get the next questions, or display result if all questions were answered
function next() {
  // get the current select option
  var ans = $("input[name=answer]:checked").val();
  var qn = questions["question" + currentQn];
  // get the personality type for the option selected
  var personality = qn["option" + ans].personality;
  // increase the score of the personality by one
  score[personality]++;
  // increase the question count by 1
  currentQn = currentQn + 1;
  // unselect all options
  resetOptions();
  // check if quiz is completed
  if (currentQn < 10) {
    // if quiz not completed, setup the next question
    setupQuestion();
  } else {
    // else quiz is completed
    // assume that the highest score is the kwh_1121 personality
    // and go through each of the personality type, and update the highest score and personality
    var highestScore = score["kwh_1121"];
    var highestPersonality = "kwh_1121";
    if (highestScore < score["kwh_3221"]) {
      highestScore = score["kwh_3221"];
      highestPersonality = "kwh_3221";
    }
    if (highestScore < score["kwh_2420"]) {
      highestScore = score["kwh_2420"];
      highestPersonality = "kwh_2420";
    }
    if (highestScore < score["kwh_5000"]) {
      highestScore = score["kwh_5000"];
      highestPersonality = "kwh_5000";
    }

    // get the description of the personality and update the result page
    var personalityResult = result[highestPersonality];
    document.getElementById("personality-type").innerText =
      highestPersonality + " Per Month";
    document.getElementById("personality-part-1").innerText =
      personalityResult[0];
    document.getElementById("personality-part-2").innerText =
      personalityResult[1];
    document.getElementById("personality-recommended").innerText =
      personalityResult[2];
    // set question count to 0 so that when the user wishes to retry, the quiz is on the right question count
    currentQn = 0;
    showPage(1);
    if (highestPersonality == "kwh_2420"){
      showImg(0)
    }
    if (highestPersonality == "kwh_1121"){
      showImg(1)
    }
    if (highestPersonality == "kwh_5000"){
      showImg(2)
    }
    if (highestPersonality == "kwh_3221"){
      showImg(3)
    }

  }
}

// bring the particular page into view.
// page 0: start page
// page 1: result page
// page 2: quiz
function showPage(num) {
  var pages = document.getElementsByClassName("container");
  pages[0].style.display = "none";
  pages[1].style.display = "none";
  pages[2].style.display = "none";
  pages[num].style.display = "block";
}

function change_color(id, color){
	let svg = document.getElementById();
	svg.style.fill=color;

}
function showImg(num) {
  var pages = document.getElementsByClassName("container1");
  pages[0].style.display = "none";
  pages[1].style.display = "none";
  pages[2].style.display = "none";
  pages[3].style.display = "none";
  pages[4].style.display = "none";
  pages[num].style.display = "block";
}
