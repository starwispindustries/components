export function getInitials(name) {
  if (!name) return "";
  const names = name.split(" ");
  const initials = names.map((name) => name[0]).join("");

  if (initials.length > 2) {
    return initials.slice(0, 2);
  }

  return initials;
}

export const hexToRgbString = (hex, alpha = 1) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
        result[3],
        16
      )}, ${alpha})`
    : null;
};
