export function scrollToIndex(index: number) {
  return window.scroll({
    top: index * window.innerHeight,
  });
}
