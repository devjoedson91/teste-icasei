export function CardFooter(videoTitle: string): HTMLDivElement {
  const cardFooter = document.createElement("div");
  const title = document.createElement("h1");
  const btnIcon = document.createElement("button");
  const starIcon = document.createElement("i");

  cardFooter.classList.add("card-footer");

  title.innerHTML = videoTitle;

  starIcon.classList.add("ph-bold");
  starIcon.classList.add("ph-star");

  btnIcon.appendChild(starIcon);

  cardFooter.appendChild(title);
  cardFooter.appendChild(btnIcon);

  return cardFooter;
}
