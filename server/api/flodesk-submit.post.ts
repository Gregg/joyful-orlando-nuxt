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

        const submitResponse = await fetch("https://form.flodesk.com/forms/68000160305e6b614244935a/submit", {
                method: "POST",
                headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                },
                body: formData.toString(),
                redirect: "manual",
        });

        console.log(`Flodesk submit: status=${submitResponse.status}`);

        if (submitResponse.status === 302 || submitResponse.status === 301) {
                const verifyUrl = submitResponse.headers.get("location");
                console.log(`Flodesk verify URL: ${verifyUrl}`);

                if (verifyUrl) {
                        const verifyResponse = await fetch(verifyUrl, {
                                method: "GET",
                                redirect: "follow",
                        });
                        console.log(`Flodesk verify: status=${verifyResponse.status}`);
                }

                return { success: true };
        }

        if (submitResponse.status === 200) {
                return { success: true };
        }

        const responseText = await submitResponse.text();
        console.error(`Flodesk submit failed: status=${submitResponse.status}, body=${responseText}`);

        throw createError({
                statusCode: submitResponse.status,
                statusMessage: "Failed to submit to Flodesk",
        });
});
