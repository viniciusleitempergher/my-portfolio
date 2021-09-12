export function appear(node: Element | null) {
  if (node)
    node.classList.toggle("hidden")
}