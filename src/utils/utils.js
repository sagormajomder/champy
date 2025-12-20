// Calculate days remaining
export function daysRemainingFunc(deadline) {
  return Math.ceil((new Date(deadline) - new Date()) / (1000 * 60 * 60 * 24));
}
