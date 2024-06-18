      window.onload = function () {
        const infoModal = document.getElementById("infoModal");
        const algorithmModal = document.getElementById("algorithmModal");
        const cancelModalButton = document.getElementById("cancelModalButton");
        const closeAlgorithmModalButton = document.getElementById(
          "closeAlgorithmModalButton"
        );
        const settingsButton = document.getElementById("settingsButton");
        const infoButton = document.getElementById("infoButton");

        const stages = document.querySelectorAll(".breadcrumb ul li");
        const stageContents = document.querySelectorAll(".stage-content");

        // Open the info modal on page load
        infoModal.classList.add("is-active");

        // When "Let's go" is clicked, close the info modal and open the algorithm modal
        cancelModalButton.addEventListener("click", () => {
          infoModal.classList.remove("is-active");
          algorithmModal.classList.add("is-active");
        });

        // When "Close" is clicked in the algorithm modal, close it
        closeAlgorithmModalButton.addEventListener("click", () => {
          algorithmModal.classList.remove("is-active");
        });

        // When settings icon is clicked, open the info modal
        settingsButton.addEventListener("click", () => {
          infoModal.classList.add("is-active");
        });

        // When info icon is clicked, open the algorithm modal
        infoButton.addEventListener("click", () => {
          algorithmModal.classList.add("is-active");
        });

        // Add event listeners to each breadcrumb item
        stages.forEach((stage, index) => {
          stage.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default link behavior

            // Remove 'is-active' class from all stages
            stages.forEach((s) => s.classList.remove("is-active"));
            // Add 'is-active' class to the clicked stage
            stage.classList.add("is-active");

            // Hide all stage contents
            stageContents.forEach((content) =>
              content.classList.add("is-hidden")
            );
            // Show the content for the clicked stage
            stageContents[index].classList.remove("is-hidden");
          });
        });
      };