'use strict';

import test from 'ava';
import {
	regexEmail,
	regexURL,
	regexUUID,
	sp
} from './index';

test('Test Email regex string', t => {
	const addrs: string[] = [
		'email@example.com',
		'firstname.lastname@example.com',
		'email@subdomain.example.com',
		'firstname+lastname@example.com',
		'email@123.123.123.123',
		'1234567890@example.com',
		'email@example-one.com',
		'email@example.name',
		'email@example.museum',
		'email@example.co.jp',
		'firstname-lastname@example.com'
	];

	t.truthy(regexEmail);

	for (const addr of addrs) {
		t.regex(addr, regexEmail);
	}
});

test('Test URL regex string', t => {
	const urls: string[] = [
		'http://example.com',
		'http://google.com',
		'http://something.org'
	];

	t.truthy(regexURL);

	for (const url of urls) {
		t.regex(url, regexURL);
	}
});

test('Test UUID regex string', t => {
	const uuids: string[] = [
		'a19c0def-29c1-48d7-8229-08a51cbdc287',
		'7e922c13-1c02-47bc-bc0e-48f25c9524f5',
		'8d8b1da2-c874-412f-a7b3-a875766e8c28',
		'8609b5d8-ae91-4fbb-80a5-61c4694c8c20',
		'2c69a57c-6930-487c-8c2e-154fcff66f19'
	];

	t.truthy(regexUUID);

	for (const uuid of uuids) {
		t.regex(uuid, regexUUID);
	}
});

test('Test creating a string with non-breaking space (sp)', t => {
	const spaces: string = sp + sp + sp;

	t.truthy(spaces);
	t.is(spaces.length, 3);
});
