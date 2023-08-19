const sr = ScrollReveal({
    distance: "35px",
    duration: 2400,
    reset: true,
  });
  sr.reveal(".site-logo", {
    delay: 110,
  });
  sr.reveal(".header-button-back", {
    delay: 200,
    origin: "top"
  });
  sr.reveal("#home", {
    delay: 450,
    origin: "left",
  });
  sr.reveal(".video-text", {
    delay: 450,
    origin: "right",
  });
  sr.reveal(".video-text > span", {
    delay: 450,
    origin: "bottom",
  });