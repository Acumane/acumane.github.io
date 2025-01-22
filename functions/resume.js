// Serve Resume.pdf from R2 bucket @ /resume

export async function onRequest(context) {
	try {
		const object = await context.env.RESUME.get("Resume.pdf")

		if (!object) return new Response("Content not found", { status: 404 })

		const headers = new Headers({
			"Content-Type": "application/pdf",
			"Content-Disposition": 'inline; filename="Resume.pdf"',
			"Cache-Control": "public, max-age=3600",
			...(object.size && { "Content-Length": object.size }),
		})
		return new Response(object.body, { headers: headers })

	} catch (error) {
		console.error("Error serving content:", error)
		return new Response("Internal server error", { status: 500 })
	}
}
