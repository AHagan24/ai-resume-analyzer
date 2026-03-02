export const formatSize = (bytes: number): string => {
  if (!Number.isFinite(bytes) || bytes <= 0) return "0 KB";

  const units = ["KB", "MB", "GB"];
  let size = bytes / 1024;
  let unitIndex = 0;

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex += 1;
  }

  const rounded = size >= 10 ? size.toFixed(1) : size.toFixed(2);

  return `${parseFloat(rounded)} ${units[unitIndex]}`;
};