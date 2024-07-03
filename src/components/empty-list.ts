export function EmptyList(text: string): HTMLDivElement {
  const container = document.createElement("div");
  container.classList.add("empty-list");

  const description = document.createElement("h1");

  description.innerHTML = text;
  container.appendChild(description);

  return container;
}
