let currentStage = 1;

const nextStage = () => {
  if (currentStage == 1) {
    document.getElementById("prevBtn").classList.add("activeBtn");
  }
  if (currentStage == 3) {
    document.getElementById("nextBtn").classList.remove("activeBtn");
  }
  if (currentStage !== 4) {
    document.getElementById(`line${currentStage}`).classList.remove("deActive");

    currentStage += 1;
    document
      .getElementById(`stage${currentStage}`)
      .classList.add("activeStage");
  }
};

const prevStage = () => {
  if (currentStage == 4) {
    document.getElementById("nextBtn").classList.add("activeBtn");
  }
  if (currentStage == 2) {
    document.getElementById("prevBtn").classList.remove("activeBtn");
  }
  if (currentStage !== 1) {
    document
      .getElementById(`line${currentStage - 1}`)
      .classList.add("deActive");

    document
      .getElementById(`stage${currentStage}`)
      .classList.remove("activeStage");
    currentStage -= 1;
  }
};
