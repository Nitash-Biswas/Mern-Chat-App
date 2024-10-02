export function extractTime(dateString) {
	const date = new Date(dateString);
	const hours = padZero(date.getHours());
	const minutes = padZero(date.getMinutes());
	return `${hours}:${minutes}`;
}

export function extractDate(dateString) {
	const date = new Date(dateString);
	const day = padZero(date.getDate());
	const month = padZero(date.getMonth() + 1); // Months are 0-based, so add 1
	const year = date.getFullYear();
	return `${day}/${month}/${year}`;
  }

// Helper function to pad single-digit numbers with a leading zero
function padZero(number) {
	return number.toString().padStart(2, "0");
}
