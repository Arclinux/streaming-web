// Add JS here// Mute/Unmute Semua Video
const videos = document.querySelectorAll("video");
const muteButton = document.getElementById("muteAll");

muteButton.addEventListener("click", () => {
  videos.forEach((video) => {
    video.muted = !video.muted;
  });
  muteButton.innerText = videos[0].muted ? "Unmute Semua" : "Mute Semua";
});

// Pause/Play Semua Video
const pauseButton = document.getElementById("pauseAll");

pauseButton.addEventListener("click", () => {
  videos.forEach((video) => {
    if (!video.paused) {
      video.pause();
    } else {
      video.play();
    }
  });
  pauseButton.innerText = videos[0].paused ? "Play Semua" : "Pause Semua";
});

// Tracking Lokasi IP
const locationInfo = document.getElementById("locationInfo");
fetch("https://api.ipify.org?format=json")
  .then((response) => response.json())
  .then((data) => {
    locationInfo.innerText = `IP Anda: ${data.ip}`;
  })
  .catch(() => {
    locationInfo.innerText = "Gagal memuat lokasi.";
  });
