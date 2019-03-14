"use strict";

import {
	encoding,
	millisPerSecond,
	nl,
	sp,
	regexEmail,
	regexNumber,
	regexURL,
	regexUUID
} from "./index";

test("Verify constant values", () => {
	expect(encoding).toBe("utf8");
	expect(millisPerSecond).toBe(1000);
	expect(nl).toBe("\n");
	expect(sp).toBe("\u200b");
});

test("Email regex string", () => {
	const addrs: string[] = [
		"email@example.com",
		"firstname.lastname@example.com",
		"email@subdomain.example.com",
		"firstname+lastname@example.com",
		"email@123.123.123.123",
		"1234567890@example.com",
		"email@example-one.com",
		"email@example.name",
		"email@example.museum",
		"email@example.co.jp",
		"firstname-lastname@example.com"
	];

	expect(regexEmail).toBeTruthy();

	for (const addr of addrs) {
		expect(addr).toMatch(regexEmail);
	}
});

test("URL regex string", () => {
	const urls: string[] = [
		"http://example.com",
		"http://google.com",
		"http://something.org"
	];

	expect(regexURL).toBeTruthy();

	for (const url of urls) {
		expect(url).toMatch(regexURL);
	}
});

test("UUID regex string", () => {
	const uuids: string[] = [
		"a19c0def-29c1-48d7-8229-08a51cbdc287",
		"7e922c13-1c02-47bc-bc0e-48f25c9524f5",
		"8d8b1da2-c874-412f-a7b3-a875766e8c28",
		"8609b5d8-ae91-4fbb-80a5-61c4694c8c20",
		"2c69a57c-6930-487c-8c2e-154fcff66f19"
	];

	expect(regexUUID).toBeTruthy();

	for (const uuid of uuids) {
		expect(uuid).toMatch(regexUUID);
	}
});

test("creating a string with non-breaking space (sp)", () => {
	const spaces: string = sp + sp + sp;

	expect(spaces).toBeTruthy();
	expect(spaces.length).toBe(3);
});

test("Test matching a number with regex", () => {
	expect("123abc".match(regexNumber)[0]).toBe("123");
	expect("1.23abc".match(regexNumber)[0]).toBe("1.23");
	expect("+1.23abc".match(regexNumber)[0]).toBe("+1.23");
	expect("-1.23abc".match(regexNumber)[0]).toBe("-1.23");
	expect("abc-1.23abc".match(regexNumber)[0]).toBe("-1.23");
	expect("abc+1.23abc".match(regexNumber)[0]).toBe("+1.23");
});
