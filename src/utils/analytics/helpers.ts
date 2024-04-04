export function createEventId() {
  return Math.random().toString(36).substring(2, 15);
}
