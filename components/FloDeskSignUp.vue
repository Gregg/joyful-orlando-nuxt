<script setup lang="js">
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
						<h2>Get access to curated events delivered to your mailbox twice a month</h2>
						<p>Joyful Orlando is on a mission to spotlight conscious & wellness events that help you slow down, show up, and feel actually good (not just “pretend good” for Instagram). Joyful Orlando is on a mission to spotlight conscious & </p>
					</div>
				</div>
				<div class="row">
					<!-- tpl {% block config %} tpl -->
					<div
						data-ff-el="config"
						data-ff-config="eyJ0cmlnZ2VyIjp7Im1vZGUiOiJpbW1lZGlhdGVseSIsInZhbHVlIjowfSwib25TdWNjZXNzIjp7Im1vZGUiOiJtZXNzYWdlIiwibWVzc2FnZSI6IiIsInJlZGlyZWN0VXJsIjoiIn0sImNvaSI6ZmFsc2UsInNob3dGb3JSZXR1cm5WaXNpdG9ycyI6dHJ1ZSwibm90aWZpY2F0aW9uIjpmYWxzZX0="
						style="display: none" />
					<!-- tpl {% endblock %} tpl -->
					<div class="ff-68000160305e6b614244935a__container">
						<form
							class="ff-68000160305e6b614244935a__form"
							action="https://form.flodesk.com/forms/68000160305e6b614244935a/submit"
							method="post"
							data-ff-el="form">
							<div class="ff-68000160305e6b614244935a__title">
								<div style="word-break:break-word">
									Subscribe
								</div>
							</div>
							<div class="ff-68000160305e6b614244935a__subtitle">
								<div style="word-break:break-word">
									Sign up with your email address to receive news and updates.
								</div>
							</div>
							<div
								class="ff-68000160305e6b614244935a__content fd-form-content"
								data-ff-el="content">
								<div
									class="ff-68000160305e6b614244935a__fields"
									data-ff-el="fields">
									<!-- tpl {% block fields %} tpl -->

									<div class="ff-68000160305e6b614244935a__field fd-form-group">
										<input
											id="ff-68000160305e6b614244935a-firstName"
											class="ff-68000160305e6b614244935a__control fd-form-control"
											type="text"
											maxlength="255"
											name="firstName"
											placeholder="First name"
											data-ff-tab="firstName::lastName">
										<label
											for="ff-68000160305e6b614244935a-firstName"
											class="ff-68000160305e6b614244935a__label fd-form-label">
											<div>
												<div>First name</div>
											</div>
										</label>
									</div>

									<div class="ff-68000160305e6b614244935a__field fd-form-group">
										<input
											id="ff-68000160305e6b614244935a-lastName"
											class="ff-68000160305e6b614244935a__control fd-form-control"
											type="text"
											maxlength="255"
											name="lastName"
											placeholder="Last name"
											data-ff-tab="lastName:firstName:email">
										<label
											for="ff-68000160305e6b614244935a-lastName"
											class="ff-68000160305e6b614244935a__label fd-form-label">
											<div>
												<div>Last name</div>
											</div>
										</label>
									</div>

									<div class="ff-68000160305e6b614244935a__field fd-form-group">
										<input
											id="ff-68000160305e6b614244935a-email"
											class="ff-68000160305e6b614244935a__control fd-form-control"
											type="text"
											maxlength="255"
											name="email"
											placeholder="Email address"
											data-ff-tab="email:lastName:submit"
											required>
										<label
											for="ff-68000160305e6b614244935a-email"
											class="ff-68000160305e6b614244935a__label fd-form-label">
											<div>
												<div>Email address</div>
											</div>
										</label>
									</div>

									<input
										type="text"
										maxlength="255"
										name="confirm_email_address"
										style="display: none">
									<!-- tpl {% endblock %} tpl -->
								</div>

								<div
									class="ff-68000160305e6b614244935a__footer"
									data-ff-el="footer">
									<button
										type="submit"
										class="ff-68000160305e6b614244935a__button fd-btn"
										data-ff-el="submit"
										data-ff-tab="submit">
										<span>Subscribe</span>
									</button>
								</div>
							</div>
							<div
								class="ff-68000160305e6b614244935a__success fd-form-success"
								data-ff-el="success">
								<div class="ff-68000160305e6b614244935a__success-message">
									<div>
										<div>
											<div data-paragraph="true">
												Thank you for subscribing!
											</div>
										</div>
									</div>
								</div>
							</div>
							<div
								class="ff-68000160305e6b614244935a__error fd-form-error"
								data-ff-el="error" />
						</form>
					</div>
				</div>
			</div>
			<div class="row">
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
									data-ff-tab="firstName::lastName">
							</div>

							<!-- div class="ff-68000160305e6b614244935a__field fd-form-group input-box">
										<input
											id="ff-68000160305e6b614244935a-lastName"
											class="ff-68000160305e6b614244935a__control fd-form-control form-control"
											type="text"
											maxlength="255"
											name="lastName"
											placeholder="Last name"
											data-ff-tab="lastName:firstName:email">
									</div -->

							<div class="ff-68000160305e6b614244935a__field fd-form-group input-box">
								<img
									src="/images/sms.webp"
									alt="">
								<input
									id="ff-68000160305e6b614244935a-email"
									class="ff-68000160305e6b614244935a__control fd-form-control form-control"
									type="text"
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
						<!-- div
								class="ff-68000160305e6b614244935a__success fd-form-success"
								data-ff-el="success">
								<div class="ff-68000160305e6b614244935a__success-message">
									<div>
										<div>
											<div data-paragraph="true">
												Thank you for subscribing!
											</div>
										</div>
									</div>
								</div>
							</div -->
						<div
							class="ff-68000160305e6b614244935a__error fd-form-error"
							data-ff-el="error" />
					</form>
				</div>
			</div>
			<div class="row">
				<div class="col-xl-12">
					<form
						action=""
						class="form-input">
						<div class="input-box">
							<img
								src="/images/profile.webp"
								alt="">
							<input
								id=""
								class="form-control"
								type="text"
								name=""
								placeholder="First name">
						</div>
						<div class="input-box">
							<img
								src="/images/sms.webp"
								alt="">
							<input
								id=""
								class="form-control"
								type="text"
								name=""
								placeholder="Email">
						</div>
						<a
							href="#"
							class="btn btn-dark"
							type="button">Join Now</a>
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

<style scoped>

</style>
