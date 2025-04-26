import { fixture, test, Selector } from "testcafe";

fixture("homepage").page("./");

test("testing", async (t) => {
	await t.click(Selector("[data-test=\"join-now-button\"]"));
});
