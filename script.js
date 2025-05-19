document.getElementById("examForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const stream = document.getElementById("stream").value;
  const marks = parseFloat(document.getElementById("marks").value);
  const resultBox = document.getElementById("resultBox");
  let eligibleExams = [];

  if (!stream || isNaN(marks)) {
    resultBox.innerHTML = "Please fill all the fields properly.";
    return;
  }

  if (stream === "engineering") {
    if (marks >= 60) {
      eligibleExams.push("JEE Mains", "BITSAT", "VITEEE", "WBJEE", "COMEDK");
    } else {
      eligibleExams.push("State-level engineering entrance exams");
    }
  } else if (stream === "medical") {
    if (marks >= 50) {
      eligibleExams.push("NEET", "AIIMS", "JIPMER");
    }
  } else if (stream === "commerce") {
    if (marks >= 55) {
      eligibleExams.push("CUET", "IPMAT", "CLAT", "CPT", "NCHMCT");
    }
  } else if (stream === "arts") {
    if (marks >= 50) {
      eligibleExams.push("CUET", "NIFT", "NID", "CLAT", "TISS BAT");
    }
  }

  if (eligibleExams.length === 0) {
    resultBox.innerHTML = "Sorry, no major exams found for your score.";
  } else {
    resultBox.innerHTML = "<strong>You're eligible for:</strong><ul><li>" + eligibleExams.join("</li><li>") + "</li></ul>";
  }
});
