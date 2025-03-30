document.addEventListener("DOMContentLoaded", function () {
  const videos = document.querySelectorAll(".background-video .video");
  let currentVideoIndex = 0;

  function playNextVideo() {
    // Hide the previous video
    if (currentVideoIndex > 0) {
      videos[currentVideoIndex - 1].classList.remove("active");
      videos[currentVideoIndex - 1].pause();
      videos[currentVideoIndex - 1].currentTime = 0;
    }

    // Show and play the current video
    if (currentVideoIndex < videos.length) {
      const currentVideo = videos[currentVideoIndex];
      currentVideo.classList.add("active");
      currentVideo.play();

      // Move to the next video when the current one ends
      currentVideo.onended = function () {
        currentVideoIndex++;
        playNextVideo();
      };
    } else {
      // Optionally loop back to the first video or stop playback
      currentVideoIndex = 0;
      playNextVideo();
    }
  }

  // Start playing the first video
  playNextVideo();
});
