<script setup lang="js">
import { useRouter } from 'vue-router';
import { onMounted, nextTick } from 'vue';

const router = useRouter();

const handleEventsClick = async (event) => {
  // If we're already on the events page
  if (router.currentRoute.value.path === '/events') {
    event.preventDefault(); // Prevent default navigation
    // Use nextTick to ensure DOM is ready
    await nextTick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

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
		rootEl: ".ff-68000160305e6b614244935a",
	});
});
</script>

<template>
	<section
		id="signupform"
		class="sec-padding news-letter">
		<div class="container">
			<div class="sec-heading sec-head-has-shape sec-head-center">
				<div class="row">
					<div class="col-xl-12">
						<div class="news-star">
							<img
								src="/images/newsstar.png"
								alt="">
						</div>
					</div>
				</div>
				<div class="row justify-content-center">
					<div class="col-xl-8">
						<h2>Get access to curated events that feed your soul — twice a month</h2>
						<p>We’ll send you the best of Orlando — no spam, just joyful connection and inspiration.</p>
					</div>
				</div>
			</div>
			<div class="row ff-68000160305e6b614244935a">
				<!-- tpl {% block config %} tpl -->
				<div
					data-ff-el="config"
					data-ff-config="eyJ0cmlnZ2VyIjp7Im1vZGUiOiJpbW1lZGlhdGVseSIsInZhbHVlIjowfSwib25TdWNjZXNzIjp7Im1vZGUiOiJtZXNzYWdlIiwibWVzc2FnZSI6IiIsInJlZGlyZWN0VXJsIjoiIn0sImNvaSI6ZmFsc2UsInNob3dGb3JSZXR1cm5WaXNpdG9ycyI6dHJ1ZSwibm90aWZpY2F0aW9uIjpmYWxzZX0="
					style="display: none" />
				<!-- tpl {% endblock %} tpl -->
				<div class="ff-68000160305e6b614244935a__container col-xl-12">
					<form
						class="ff-68000160305e6b614244935a__form"
						action="https://form.flodesk.com/forms/68000160305e6b614244935a/submit"
						method="post"
						data-ff-el="form">
						<div
							class="ff-68000160305e6b614244935a__content fd-form-content form-input"
							data-ff-el="content">
							<!-- tpl {% block fields %} tpl -->
							<div class="form-fields">
								<div class="ff-68000160305e6b614244935a__field fd-form-group input-box">
									<img
										src="/images/profile.webp"
										alt="">
									<input
										id="ff-68000160305e6b614244935a-firstName"
										class="ff-68000160305e6b614244935a__control fd-form-control form-control"
										type="text"
										maxlength="255"
										name="firstName"
										placeholder="First name"
										data-ff-tab="firstName::lastName"
										required>
								</div>

								<div class="ff-68000160305e6b614244935a__field fd-form-group input-box">
									<img
										src="/images/sms.webp"
										alt="">
									<input
										id="ff-68000160305e6b614244935a-email"
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
								<!-- tpl {% endblock %} tpl -->

								<button
									type="submit"
									class="ff-68000160305e6b614244935a__button fd-btn btn btn-dark"
									data-ff-el="submit"
									data-ff-tab="submit">
									Join Now
								</button>
							</div>

							<div
								class="ff-68000160305e6b614244935a__success fd-form-success"
								data-ff-el="success">
								<div class="ff-68000160305e6b614244935a__success-message">
									<div>
										<div>
											<div data-paragraph="true">
												<p>Thank you for joining!</p>
												<br>
												<h3>We just sent you a confirmation email, please take a moment to confirm your subscription. 🙏</h3>
												<p><br>If you don't see it, maybe check your spam folder and mark it as not spam to make sure you get our emails!</p>
												<div class="text-center mt-4">
													<NuxtLink
														to="/events"
														class="btn btn-dark btn-lg"
														@click="handleEventsClick">
														View Latest Events
													</NuxtLink>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div
								class="ff-68000160305e6b614244935a__error fd-form-error"
								data-ff-el="error" />
						</div>
					</form>
				</div>
			</div>
		</div>
		<div class="newsbg-image">
			<img
				src="/images/news-background.png"
				alt="">
		</div>
	</section>
</template>

<style>
.fd-form-check__label {
	color: white;
	font-size: 1.5em;
}

.fd-form-check__input {
    width: 20px;
    height: 20px;
}

.fd-form-success {
	display: none;
	color: white;
}

.fd-has-success .fd-form-success {
	display: block;
	color: white;
}

.ff-68000160305e6b614244935a .fd-form-feedback {
    margin: 5px 5px 0;
    font-size: 0.8em;
}

.ff-68000160305e6b614244935a .fd-form-group.fd-has-success .fd-form-feedback,
.ff-68000160305e6b614244935a .fd-form-group.fd-has-success .fd-form-check {
    color: #02dba8 !important;
}

.ff-68000160305e6b614244935a .fd-form-group.fd-has-success .fd-form-control {
    color: #02dba8 !important;
    border-color: #02dba8 !important;
}

.ff-68000160305e6b614244935a .fd-form-group.fd-has-error .fd-form-feedback,
.ff-68000160305e6b614244935a .fd-form-group.fd-has-error .fd-form-check {
    color: #000 !important;
}

.ff-68000160305e6b614244935a .fd-form-group.fd-has-error .fd-form-control {
    color: #000 !important;
    border-color: #000 !important;
}

.ff-68000160305e6b614244935a .fd-form-group.fd-has-error .fd-form-feedback {
    display: block;
}

.ff-68000160305e6b614244935a .fd-has-captcha .fd-form-content>*:not(.fd-form-captcha) {
    display: none;
}

.ff-68000160305e6b614244935a .fd-form-captcha {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.ff-68000160305e6b614244935a .fd-form-error {
    display: none;
}

.ff-68000160305e6b614244935a .fd-has-error .fd-form-error {
    display: block;
}

.ff-68000160305e6b614244935a[data-ff-stage="success"] .form-fields {
    display: none;
}

.input-box {
	position: relative;
	display: flex;
	align-items: center;
}

.input-box img {
	position: absolute;
	left: 15px;
	width: 20px;
	height: 20px;
	pointer-events: none;
}

.input-box input {
	padding-left: 50px;
	width: 100%;
	height: 50px;
	border-radius: 5px;
	border: 1px solid #ccc;
}

.form-fields {
	display: flex;
	flex-direction: column;
	gap: 20px;
}

.fd-btn {
	padding: 15px 30px;
	font-size: 1.1em;
}
</style>