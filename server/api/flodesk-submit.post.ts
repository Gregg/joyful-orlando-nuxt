export default defineEventHandler(async (event) => {
        const body = await readBody(event);

        if (!body.firstName || !body.email) {
                throw createError({
                        statusCode: 400,
                        statusMessage: "First name and email are required",
                });
        }

        const formData = new URLSearchParams();
        formData.append("firstName", body.firstName);
        formData.append("email", body.email);

        const response = await fetch("https://form.flodesk.com/forms/68000160305e6b614244935a/submit", {
                method: "POST",
                headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                },
                body: formData.toString(),
        });

        if (!response.ok) {
                throw createError({
                        statusCode: response.status,
                        statusMessage: "Failed to submit to Flodesk",
                });
        }

        return { success: true };
});
