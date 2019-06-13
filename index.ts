export const encoding = "utf8";
export const failure: number = 127;
export const millisPerSecond = 1000;
export const nl: string = "\n";
export const sp: string = "\u200b"; // zero width, non breaking space
export const success: number = 0;

// Uses a regex that will catch 99.99% of email addresses in use today.  It is not perfect
// http://www.regular-expressions.info/email.html
export const regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

export const regexNumber = /[+-]?(\d*\.)?\d+/gim;

export const regexURL = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

export const regexUUID = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i;
