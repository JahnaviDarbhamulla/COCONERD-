// constant to store all the questions and answers
const questions = {
  question0: {
    question: "How many people live in your house?",
    option0: {
      type: "string",
      content:"Just Me",
      personality: "Naturalist"
    },
    option1: {
      type: "string",
      content:"Less than 4 people",
      personality: "Conscious"
    },
    option2: {
      type: "string",
      content:"4 people",
      personality: "Negligent"
    },
    option3: {
      type: "string",
      content:"More than 4 people",
      personality: "Unaware"
    }
  },
  question1: {
    question: "Do you use low flow faucets and shower heads in your house ?",
    option0: {
      type: "string",
      content: "YES",
      personality: "Naturalist"
    },
    option1: {
      type: "string",
      content: "For some of them",
      personality: "Negligent"
    },
    option2: {
      type: "string",
      content: "No",
      personality: "Unaware"
    },
    option3: {
      type: "string",
      content: "Most of them",
      personality: "Conscious"
    }
  },
  question2: {
    question: "Do you have a greywater system installed in your home?",
    option0: {
      type: "string",
      content: "Heck Yes!",
      personality: "Naturalist"
    },
    option1: {
      type: "string",
      content: "What is that ?",
      personality: "Unaware"
    },
    option2: {
      type: "string",
      content: "No",
      personality: "Negligent"
    },
    option3: {
      type: "string",
      content: "I will think about it",
      personality: "Conscious"
    }
  },
  question3: {
    question:
      "Do you recycle Paper and Plastic ?",
    option0: {
      type: "string",
      content:
        "yes",
      personality: "Conscious"
    },
    option1: {
      type: "string",
      content:
        "No",
      personality: "Unaware"
    },
    option2: {
      type: "string",
      content: "Sometimes",
      personality: "Negligent"
    },
    option3: {
      type: "string",
      content:
        "Most of the time",
      personality: "Naturalist"
    }
  },
  question4: {
    question:
      "Do you donate or re-use old clothing, sheets, blankets and towels?",
    option0: {
      type: "string",
      content: "Yes",
      personality: "Conscious"
    },
    option1: {
      type: "string",
      content: "No",
      personality: "Negligent"
    },
    option2: {
      type: "string",
      content: "Ocassionally",
      personality: "UnawareS"
    },
    option3: {
      type: "string",
      content: "Almost everytime",
      personality: "Naturalist"
    }

  },
	question5: {
		question:
			"Do you donate or re-use old clothing, sheets, blankets wsfecEWand towels?",
		option0: {
			type: "string",
			content: "Yes",
			personality: "Naturalist"
		},
		option1: {
			type: "string",
			content: "No",
			personality: "Unaware"
		},
		option2: {
			type: "string",
			content: "Ocassionally",
			personality: "Negligent"
		},
		option3: {
			type: "string",
			content: "Most of the time",
			personality: "Conscious"
		}

	},
	question6: {
		question:
			"What’s your diet?",
		option0: {
			type: "string",
			content: "Vegan",
			personality: "Naturalist"
		},
		option1: {
			type: "string",
			content: "Vegetarian",
			personality: "Conscious"
		},
		option2: {
			type: "string",
			content: "Ocassional Non-Vegetarian",
			personality: "Negligent"
		},
		option3: {
			type: "string",
			content: "Regular Non Vegetarian",
			personality: "Unaware"
		}

	},
	question7: {
		question:
			"Do you have a well or any source of culinary (drinking) water other than city water?",
		option0: {
			type: "string",
			content: "Yes",
			personality: "Naturalist"
		},
		option1: {
			type: "string",
			content: "No",
			personality: "Conscious"
		},
		option2: {
			type: "string",
			content: "Its there but we dont use it",
			personality: "Negligent"
		},
		option3: {
			type: "string",
			content: "I dont know",
			personality: "Unaware"
		}

	},
	question8: {
		question:
			"How do you water your yard?",
		option0: {
			type: "string",
			content: "Drip irrigation",
			personality: "Naturalist"
		},
		option1: {
			type: "string",
			content: "spriklers (switch off on specific time)",
			personality: "Conscious"
		},
		option2: {
			type: "string",
			content: "water hose",
			personality: "Unaware"
		},
		option3: {
			type: "string",
			content: "Rotor systems",
			personality: "Negligent"
		}

	},
	question9: {
		question:
			"Do you donate or re-use old clothing, sheets, blankets wsfecEWand towels?",
		option0: {
			type: "string",
			content: "Yes",
			personality: "Naturalist"
		},
		option1: {
			type: "string",
			content: "No",
			personality: "Unaware"
		},
		option2: {
			type: "string",
			content: "Ocassionally",
			personality: "Negligent"
		},
		option3: {
			type: "string",
			content: "Hitting the flea market",
			personality: "Conscious"
		}

	},
	question10: {
		question:
			"Do you donate or re-use old clothing, sheets, blankets wsfecEWand towels?",
		option0: {
			type: "string",
			content: "Yes",
			personality: "Naturalist"
		},
		option1: {
			type: "string",
			content: "No",
			personality: "Conscious"
		},
		option2: {
			type: "string",
			content: "Ocassionally",
			personality: "Negligent"
		},
		option3: {
			type: "string",
			content: "Hitting the flea market",
			personality: "Unaware"
		}

	}

};

// constant to store the description for each type of traveller
const result = {
	Naturalist: [
    "You love nature and you are very well aware of the consequences of water consumption.",
    "You not only know about it but you also preach and practice it.Your goal is to educate the Unaware about the need of maintaining the ecological balance and the conservation of the environment and how we can do it.",
    "Few of the recommended books for you are: Conservation Psychology by Susan Clayton and The nature of nature by Enric sala"
  ],
  Conscious: [
		"You make sure you buy eco friendly products and you follow the 3R's(reduce, reuse, recycle) diligently.",
		"You know the rights and consequences of but there might be a few facts and stats you might be Unaware of. ",
		"I recommend you to watch two documentaries seaspiracy and cowspiracy to really analyse and understand the market and the real play behind it. "
  ],
	Negligent: [
		"You know the consequences that will take place but you are lazy and not really intrested to help save the environment.",
		"You need to realise that there can be adverse efects to not contributing in saving the world.Start with something small and easy and work your way up.Even a small contribution by can make a big chnage. ",
		"I recommend you to watch two documentaries seaspiracy and cowspiracy to understand how commercial fishing and plastic can ruin the ecosystem. "
	],
	Unaware: [
    "You are completely Unaware about the adversities.",
    "You definetly know about water pollution and sonsumption but you are not sure about how you can contribute.",
    "I wuld recommend you to start by segeregating waste, using less plastic, and reducing the consumption of fish."
  ]
};

// for keeping track of the score
var score = {
  Naturalist: 0,
  Conscious: 0,
  Negligent: 0,
  Unaware: 0
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
    // assume that the highest score is the Naturalist personality
    // and go through each of the personality type, and update the highest score and personality
    var highestScore = score["Naturalist"];
    var highestPersonality = "Naturalist";
    if (highestScore < score["Negligent"]) {
      highestScore = score["Negligent"];
      highestPersonality = "Negligent";
    }
    if (highestScore < score["Conscious"]) {
      highestScore = score["Conscious"];
      highestPersonality = "Conscious";
    }
    if (highestScore < score["Unaware"]) {
      highestScore = score["Unaware"];
      highestPersonality = "Unaware";
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
    if (highestPersonality == "Conscious"){
      showImg(0)
    }
    if (highestPersonality == "Naturalist"){
      showImg(1)
    }
    if (highestPersonality == "Unaware"){
      showImg(2)
    }
    if (highestPersonality == "Negligent"){
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
