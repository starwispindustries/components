export function getInitials(name) {
  if (!name) return "";
  const names = name.split(" ");
  const initials = names.map((name) => name[0]).join("");

  if (initials.length > 2) {
    return initials.slice(0, 2);
  }

  return initials;
}
