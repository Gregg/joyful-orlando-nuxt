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
        link: [
                { rel: "preload", href: "https://assets.flodesk.com/flodesk-sans.css", as: "style" },
                { rel: "stylesheet", href: "https://assets.flodesk.com/flodesk-sans.css" },
        ],
});

const formSubmitted = ref(false);

onMounted(() => {
        const loadFlodesk = () => {
                const w = window as any;
                const d = document;
                w.FlodeskObject = "fd";
                const fn = function () {
                        (w.fd.q = w.fd.q || []).push(arguments);
                };
                w.fd = w.fd || fn;
                const f = d.getElementsByTagName("script")[0];
                const v = "?v=" + Math.floor(new Date().getTime() / (120 * 1000)) * 60;
                const sm = d.createElement("script");
                sm.async = true;
                sm.type = "module";
                sm.src = "https://assets.flodesk.com/universal.mjs" + v;
                f.parentNode?.insertBefore(sm, f);
                const sn = d.createElement("script");
                sn.async = true;
                sn.noModule = true;
                sn.src = "https://assets.flodesk.com/universal.js" + v;
                f.parentNode?.insertBefore(sn, f);
        };

        loadFlodesk();

        (window as any).fd("form:handle", {
                formId: "68000160305e6b614244935a",
                rootEl: ".ff-68000160305e6b614244935a",
        });

        const observer = new MutationObserver(() => {
                const root = document.querySelector(".ff-68000160305e6b614244935a");
                if (root && root.getAttribute("data-ff-stage") === "success") {
                        formSubmitted.value = true;
                        observer.disconnect();
                        setTimeout(() => {
                                if (event.value?.url) {
                                        window.location.href = event.value.url;
                                }
                        }, 2000);
                }
        });

        const root = document.querySelector(".ff-68000160305e6b614244935a");
        if (root) {
                observer.observe(root, { attributes: true, attributeFilter: ["data-ff-stage"] });
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

                                                <div
                                                        class="ff-68000160305e6b614244935a"
                                                        data-ff-el="root"
                                                        data-ff-version="3"
                                                        data-ff-type="inline"
                                                        data-ff-name="ribbonBanner"
                                                        data-ff-stage="default">
                                                        <div
                                                                data-ff-el="config"
                                                                data-ff-config="eyJ0cmlnZ2VyIjp7Im1vZGUiOiJpbW1lZGlhdGVseSIsInZhbHVlIjowfSwib25TdWNjZXNzIjp7Im1vZGUiOiJtZXNzYWdlIiwibWVzc2FnZSI6IiIsInJlZGlyZWN0VXJsIjoiIn0sImNvaSI6ZmFsc2UsInNob3dGb3JSZXR1cm5WaXNpdG9ycyI6dHJ1ZSwibm90aWZpY2F0aW9uIjpmYWxzZSwiZ2RwciI6eyJhY2NlcHRzTWFya2V0aW5nIjpmYWxzZSwicHJpdmFjeVBvbGljeSI6eyJlbmFibGVkIjpmYWxzZSwibWFuZGF0b3J5IjpmYWxzZX19LCJ0cmFja2luZ0NvbmZpZyI6eyJtZXRhUGl4ZWxJZCI6IiIsImNvb2tpZUJhbm5lckVuYWJsZWQiOmZhbHNlLCJnb29nbGVBbmFseXRpY3NJZCI6IiJ9fQ=="
                                                                style="display: none" />
                                                        <div class="ff-68000160305e6b614244935a__container">
                                                                <form
                                                                        class="ff-68000160305e6b614244935a__form"
                                                                        action="https://form.flodesk.com/forms/68000160305e6b614244935a/submit"
                                                                        method="post"
                                                                        data-ff-el="form">
                                                                        <div
                                                                                class="ff-68000160305e6b614244935a__content fd-form-content"
                                                                                data-ff-el="content">
                                                                                <div
                                                                                        class="ff-68000160305e6b614244935a__fields"
                                                                                        data-ff-el="fields">
                                                                                        <div class="ff-68000160305e6b614244935a__field fd-form-group">
                                                                                                <div class="transfer-input-box">
                                                                                                        <img
                                                                                                                src="/images/profile.webp"
                                                                                                                alt="">
                                                                                                        <input
                                                                                                                id="ff-68000160305e6b614244935a-firstName"
                                                                                                                class="ff-68000160305e6b614244935a__control fd-form-control form-control transfer-input"
                                                                                                                type="text"
                                                                                                                maxlength="255"
                                                                                                                name="firstName"
                                                                                                                placeholder="First name"
                                                                                                                data-ff-tab="firstName::email"
                                                                                                                required>
                                                                                                </div>
                                                                                        </div>

                                                                                        <div class="ff-68000160305e6b614244935a__field fd-form-group">
                                                                                                <div class="transfer-input-box">
                                                                                                        <img
                                                                                                                src="/images/sms.webp"
                                                                                                                alt="">
                                                                                                        <input
                                                                                                                id="ff-68000160305e6b614244935a-email"
                                                                                                                class="ff-68000160305e6b614244935a__control fd-form-control form-control transfer-input"
                                                                                                                type="text"
                                                                                                                maxlength="255"
                                                                                                                name="email"
                                                                                                                placeholder="Email address"
                                                                                                                data-ff-tab="email:firstName:submit"
                                                                                                                required>
                                                                                                </div>
                                                                                        </div>

                                                                                        <input
                                                                                                type="text"
                                                                                                maxlength="255"
                                                                                                name="confirm_email_address"
                                                                                                style="display: none">
                                                                                </div>

                                                                                <div
                                                                                        class="ff-68000160305e6b614244935a__footer"
                                                                                        data-ff-el="footer">
                                                                                        <button
                                                                                                type="submit"
                                                                                                class="ff-68000160305e6b614244935a__button fd-btn btn transfer-submit-btn"
                                                                                                data-ff-el="submit"
                                                                                                data-ff-tab="submit">
                                                                                                <span>Sign Up & Continue</span>
                                                                                        </button>
                                                                                </div>
                                                                        </div>
                                                                        <div
                                                                                class="ff-68000160305e6b614244935a__success fd-form-success"
                                                                                data-ff-el="success" />
                                                                        <div
                                                                                class="ff-68000160305e6b614244935a__error fd-form-error"
                                                                                data-ff-el="error" />
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
        z-index: 1;
}

.transfer-input {
        padding-left: 50px !important;
        width: 100%;
        height: 50px;
        border-radius: 5px !important;
        border: 1px solid #ccc !important;
}

.transfer-submit-btn {
        background-color: #01A652 !important;
        border-color: #01A652 !important;
        color: #fff !important;
        padding: 15px 30px !important;
        font-size: 1.1em !important;
        width: 100% !important;
        margin-top: 16px;
}

.transfer-submit-btn:hover {
        background-color: #018a45 !important;
        border-color: #018a45 !important;
        color: #fff !important;
}
</style>
