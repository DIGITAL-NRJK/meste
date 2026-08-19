/** Two-digit editorial index used across the numbered compositions: 01, 02, 03. */
export function editorialIndex(index: number): string {
  return String(index + 1).padStart(2, '0')
}
