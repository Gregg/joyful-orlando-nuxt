<script setup lang="ts">
import { onMounted } from "vue";

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

const formSubmitted = ref(false);
const captchaShown = ref(false);

onMounted(() => {
        (function (w, d, t, h, s, n) {
                w.FlodeskObject = n;
                const fn = function () {
                        (w[n].q = w[n].q || []).push(arguments);
                };
                w[n] = w[n] || fn;
                const f = d.getElementsByTagName(t)[0];
                const v = "?v=" + Math.floor(new Date().getTime() / (120 * 1000)) * 60;
                const sm = d.createElement(t);
                sm.async = true;
                sm.type = "module";
                sm.src = h + s + ".mjs" + v;
                f.parentNode.insertBefore(sm, f);
                const sn = d.createElement(t);
                sn.async = true;
                sn.noModule = true;
                sn.src = h + s + ".js" + v;
                f.parentNode.insertBefore(sn, f);
        })(window, document, "script", "https://assets.flodesk.com", "/universal", "fd");
        window.fd("form:handle", {
                formId: "68000160305e6b614244935a",
                rootEl: ".ff-transfer-form",
        });

        const observer = new MutationObserver(() => {
                const container = document.querySelector(".ff-transfer-form");
                if (!container) return;

                if (container.querySelector(".fd-has-captcha") || container.classList.contains("fd-has-captcha")) {
                        captchaShown.value = true;
                }

                if (container.getAttribute("data-ff-stage") === "success") {
                        formSubmitted.value = true;
                        setTimeout(() => {
                                if (event.value?.url) {
                                        window.location.href = event.value.url;
                                }
                        }, 2000);
                }
        });

        const container = document.querySelector(".ff-transfer-form");
        if (container) {
                observer.observe(container, { attributes: true, subtree: true, attributeFilter: ["class", "data-ff-stage"] });
        }
});
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
                                                <div v-show="!formSubmitted" class="ff-transfer-form transfer-form-wrapper" :class="{ 'form-fields-hidden': captchaShown }">
                                                        <div
                                                                data-ff-el="config"
                                                                data-ff-config="eyJ0cmlnZ2VyIjp7Im1vZGUiOiJpbW1lZGlhdGVseSIsInZhbHVlIjowfSwib25TdWNjZXNzIjp7Im1vZGUiOiJtZXNzYWdlIiwibWVzc2FnZSI6IiIsInJlZGlyZWN0VXJsIjoiIn0sImNvaSI6ZmFsc2UsInNob3dGb3JSZXR1cm5WaXNpdG9ycyI6dHJ1ZSwibm90aWZpY2F0aW9uIjpmYWxzZX0="
                                                                style="display: none" />
                                                        <div class="ff-transfer-form__container">
                                                                <form
                                                                        class="ff-68000160305e6b614244935a__form"
                                                                        action="https://form.flodesk.com/forms/68000160305e6b614244935a/submit"
                                                                        method="post"
                                                                        data-ff-el="form">
                                                                        <div
                                                                                class="ff-68000160305e6b614244935a__content fd-form-content"
                                                                                data-ff-el="content">
                                                                                <div class="transfer-form-fields">
                                                                                        <div class="transfer-input-box">
                                                                                                <img
                                                                                                        src="/images/profile.webp"
                                                                                                        alt="">
                                                                                                <input
                                                                                                        id="transfer-firstName"
                                                                                                        class="ff-68000160305e6b614244935a__control fd-form-control form-control"
                                                                                                        type="text"
                                                                                                        maxlength="255"
                                                                                                        name="firstName"
                                                                                                        placeholder="First name"
                                                                                                        data-ff-tab="firstName::lastName"
                                                                                                        required>
                                                                                        </div>

                                                                                        <div class="transfer-input-box">
                                                                                                <img
                                                                                                        src="/images/sms.webp"
                                                                                                        alt="">
                                                                                                <input
                                                                                                        id="transfer-email"
                                                                                                        class="ff-68000160305e6b614244935a__control fd-form-control form-control"
                                                                                                        type="email"
                                                                                                        maxlength="255"
                                                                                                        name="email"
                                                                                                        placeholder="Email address"
                                                                                                        data-ff-tab="email:lastName:submit"
                                                                                                        required>
                                                                                        </div>

                                                                                        <input
                                                                                                type="text"
                                                                                                maxlength="255"
                                                                                                name="confirm_email_address"
                                                                                                style="display: none">

                                                                                        <button
                                                                                                type="submit"
                                                                                                class="ff-68000160305e6b614244935a__button fd-btn btn transfer-submit-btn"
                                                                                                data-ff-el="submit"
                                                                                                data-ff-tab="submit">
                                                                                                Sign Up & Continue
                                                                                        </button>
                                                                                </div>

                                                                                <div
                                                                                        class="ff-68000160305e6b614244935a__success fd-form-success"
                                                                                        data-ff-el="success">
                                                                                </div>
                                                                                <div
                                                                                        class="ff-68000160305e6b614244935a__error fd-form-error"
                                                                                        data-ff-el="error" />
                                                                        </div>
                                                                </form>
                                                        </div>
                                                </div>
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

</style>

<style>
.ff-transfer-form .fd-has-captcha .fd-form-content > *:not(.fd-form-captcha),
.ff-transfer-form.fd-has-captcha .fd-form-content > *:not(.fd-form-captcha) {
        display: none !important;
}

.ff-transfer-form.form-fields-hidden .transfer-form-fields {
        display: none !important;
}

.ff-transfer-form.form-fields-hidden .fd-form-success {
        display: none !important;
}

.ff-transfer-form.form-fields-hidden .fd-form-error {
        display: none !important;
}

.ff-transfer-form .fd-form-captcha,
[data-ff-el="root"] .fd-form-captcha {
        position: relative !important;
        top: auto !important;
        left: auto !important;
        width: 100% !important;
        height: auto !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        min-height: 70px !important;
        margin-top: 16px !important;
        padding: 16px 24px !important;
        background: #eafaf0 !important;
        border: 2px solid #01A652 !important;
        border-radius: 8px !important;
        opacity: 1 !important;
        visibility: visible !important;
        z-index: 10 !important;
}

.ff-transfer-form .fd-form-captcha *,
[data-ff-el="root"] .fd-form-captcha * {
        color: #222 !important;
        opacity: 1 !important;
        visibility: visible !important;
}

.ff-transfer-form .fd-form-captcha label,
[data-ff-el="root"] .fd-form-captcha label {
        color: #222 !important;
        font-size: 18px !important;
        font-weight: 600 !important;
        opacity: 1 !important;
        visibility: visible !important;
        cursor: pointer !important;
        display: flex !important;
        align-items: center !important;
        gap: 12px !important;
        margin: 0 !important;
}

.ff-transfer-form .fd-form-captcha input[type="checkbox"],
[data-ff-el="root"] .fd-form-captcha input[type="checkbox"] {
        width: 24px !important;
        height: 24px !important;
        min-width: 24px !important;
        min-height: 24px !important;
        opacity: 1 !important;
        visibility: visible !important;
        cursor: pointer !important;
        accent-color: #01A652 !important;
        -webkit-appearance: checkbox !important;
        appearance: checkbox !important;
}
</style>
