<script setup lang="ts">
definePageMeta({
        layout: "transfer",
});

const route = useRoute();
const slug = route.params.slug as string;

const { data: event } = await useFetch(`/api/event/${slug}`);

if (!event.value) {
        throw createError({
                statusCode: 404,
                statusMessage: "Event not found",
                message: "The event you are looking for does not exist.",
        });
}

useHead({
        title: `You're almost there! | ${event.value?.name}`,
});

const firstName = ref("");
const email = ref("");
const formSubmitted = ref(false);
const formError = ref("");
const submitting = ref(false);

async function handleSubmit() {
        formError.value = "";
        submitting.value = true;

        try {
                const formData = new FormData();
                formData.append("firstName", firstName.value);
                formData.append("email", email.value);

                const response = await fetch("https://form.flodesk.com/forms/68000160305e6b614244935a/submit", {
                        method: "POST",
                        body: formData,
                });

                if (response.ok) {
                        formSubmitted.value = true;
                        setTimeout(() => {
                                if (event.value?.url) {
                                        window.location.href = event.value.url;
                                }
                        }, 2000);
                } else {
                        formError.value = "Something went wrong. Please try again.";
                }
        } catch {
                formError.value = "Something went wrong. Please try again.";
        } finally {
                submitting.value = false;
        }
}
</script>

<template>
        <div>
                <section
                        class="innpage-hero-section"
                        style="background-color: #9F64FC;">
                        <img
                                src="/images/cloudwhite.webp"
                                class="hero-left-shape"
                                alt="">
                        <div class="container">
                                <div class="row align-items-center gx-0 mt-40">
                                        <div class="col-xl-12">
                                                <div class="hero-content text-center">
                                                        <h1>You're almost there!</h1>
                                                </div>
                                                <img
                                                        src="/images/white-star.webp"
                                                        class="hero-star-shape"
                                                        alt="">
                                        </div>
                                </div>
                        </div>
                        <img
                                src="/images/colorscloud.webp"
                                class="hero-right-shape"
                                alt="">
                </section>

                <section class="sec-padding">
                        <div class="container">
                                <div class="row justify-content-center">
                                        <div class="col-lg-8 text-center">
                                                <p class="transfer-message">
                                                        We love that you're interested in <strong>{{ event?.name }}</strong>, but we want to make sure you're part of the Joyful Orlando mailing list so you don't miss out on events like this. Enter your info below, and we'll send you to <strong>{{ event?.name }}</strong>'s webpage.
                                                </p>
                                        </div>
                                </div>

                                <div class="row justify-content-center mt-4">
                                        <div class="col-lg-6">
                                                <div
                                                        v-if="formSubmitted"
                                                        class="text-center">
                                                        <h3 style="color: #01A652;">Thank you!</h3>
                                                        <p style="font-size: 18px;">Redirecting you to {{ event?.name }}...</p>
                                                </div>
                                                <form
                                                        v-else
                                                        class="transfer-form-wrapper"
                                                        @submit.prevent="handleSubmit">
                                                        <div class="transfer-form-fields">
                                                                <div class="transfer-input-box">
                                                                        <img
                                                                                src="/images/profile.webp"
                                                                                alt="">
                                                                        <input
                                                                                v-model="firstName"
                                                                                type="text"
                                                                                maxlength="255"
                                                                                placeholder="First name"
                                                                                class="form-control"
                                                                                required>
                                                                </div>

                                                                <div class="transfer-input-box">
                                                                        <img
                                                                                src="/images/sms.webp"
                                                                                alt="">
                                                                        <input
                                                                                v-model="email"
                                                                                type="email"
                                                                                maxlength="255"
                                                                                placeholder="Email address"
                                                                                class="form-control"
                                                                                required>
                                                                </div>

                                                                <input
                                                                        type="text"
                                                                        maxlength="255"
                                                                        name="confirm_email_address"
                                                                        style="display: none">

                                                                <button
                                                                        type="submit"
                                                                        class="btn transfer-submit-btn"
                                                                        :disabled="submitting">
                                                                        {{ submitting ? 'Submitting...' : 'Sign Up & Continue' }}
                                                                </button>

                                                                <p
                                                                        v-if="formError"
                                                                        class="text-danger text-center mt-2">
                                                                        {{ formError }}
                                                                </p>
                                                        </div>
                                                </form>
                                        </div>
                                </div>
                        </div>
                </section>
        </div>
</template>

<style scoped>
.transfer-message {
        font-size: 18px;
        line-height: 1.8;
        color: #444;
}

.transfer-form-wrapper {
        background: #f9f9f9;
        border-radius: 12px;
        padding: 32px;
}

.transfer-form-fields {
        display: flex;
        flex-direction: column;
        gap: 16px;
}

.transfer-input-box {
        position: relative;
        display: flex;
        align-items: center;
}

.transfer-input-box img {
        position: absolute;
        left: 15px;
        width: 20px;
        height: 20px;
        pointer-events: none;
}

.transfer-input-box input {
        padding-left: 50px;
        width: 100%;
        height: 50px;
        border-radius: 5px;
        border: 1px solid #ccc;
}

.transfer-submit-btn {
        background-color: #01A652;
        border-color: #01A652;
        color: #fff;
        padding: 15px 30px;
        font-size: 1.1em;
        width: 100%;
}

.transfer-submit-btn:hover {
        background-color: #018a45;
        border-color: #018a45;
        color: #fff;
}

.transfer-submit-btn:disabled {
        opacity: 0.7;
        cursor: not-allowed;
}
</style>
