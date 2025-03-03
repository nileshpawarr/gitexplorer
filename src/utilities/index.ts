export const copyToClipboard = async (text: string) => {
	// Try the modern Clipboard API first
	if (navigator.clipboard && navigator.clipboard.writeText) {
		try {
			await navigator.clipboard.writeText(text)
			return true // Success
		} catch (err) {
			console.error("Clipboard API failed: ", err)
			// Fallback to the deprecated method
		}
	}

	// Fallback to the deprecated execCommand method
	const textArea = document.createElement("textarea")
	textArea.value = text
	textArea.style.position = "fixed" // Avoid scrolling to bottom
	document.body.appendChild(textArea)
	textArea.focus()
	textArea.select()

	let success = false
	try {
		success = document.execCommand("copy")
	} catch (err) {
		console.error("execCommand failed: ", err)
		success = false
	}

	document.body.removeChild(textArea)
	return success
}