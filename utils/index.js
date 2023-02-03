import axios from "axios";

const readFile = (file, regex, binary = false) =>
	new Promise((res, rej) => {
		const reader = new FileReader();
		console.log({ name: file.name, r: regex });

		if (!regex.test(file.name) && file.name) throw Error("files not supported ");
		reader.addEventListener("load", () => res(reader.result));
		reader.addEventListener("error", () => rej(reader.error));
		if (binary) {
			reader.readAsArrayBuffer(file);
		} else reader.readAsDataURL(file);
	});

async function parseImagesB64(files, regex, count, size = 0) {
	if (files.length > count)
		throw Error(`Only a maximum of ${count} ${count === 1 ? "file is" : "files are"} allowed`);
	console.log({ ffile: files });
	const processedFiles = [];
	for (let file of files) {
		try {
			if (size && file?.size > size) {
				throw Error(`Each file should have a maximum size of ${size / 1024 / 1024}MB`);
			}
			const b64File = await readFile(file, regex);
			processedFiles.push(b64File);
		} catch (error) {
			throw error;
		}
	}
	return processedFiles;
}
const searchJson = (JsonArray, searchKey) => {
	searchKey = searchKey.trim().replace(/\W/g, (e) => (e === " " ? " " : ""));

	if (!searchKey || !JsonArray.length) return JsonArray;
	const searchRes = [];

	for (let i = 0; i < JsonArray.length; i++) {
		searchKey = new RegExp(searchKey, "ig");
		let el = JsonArray[i];
		if (searchKey.test(JSON.stringify(Object.values(el)))) searchRes.push(el);
		else continue;
	}

	return searchRes;
};

function getRemoteFile(url, clb) {
	let img = new Image();

	img.setAttribute("crossOrigin", "anonymous");
	return new Promise((res, rej) => {
		img.onload = function () {
			let canvas = document.createElement("canvas");
			canvas.width = this.width;
			canvas.height = this.height;

			let ctx = canvas.getContext("2d");
			ctx.drawImage(this, 0, 0);

			let dataURL = canvas.toDataURL();
			res(dataURL);
		};

		img.src = url;
	});
}

const formatDigits = (number) => {
	let str = number.toString().split("").reverse().join("");
	return str
		.replace(/(\d{3})(?!$)/g, (_, b) => b + ",")
		.split("")
		.reverse()
		.join("");
};

const processOffset = (gmtOffset) => {
	if (!gmtOffset) return 0;
	const sign = gmtOffset.charAt(0);
	let [hr, min] = gmtOffset.slice(1).split(":");
	hr = hr * 60 * 60 * 1000;
	min = min * 60 * 1000;

	if (sign === "+") return hr + min;
	return -(hr + min);
};
const parseDateTime = (data, offset) => {
	data = new Date(data).getTime() + processOffset(offset);
	data = new Date(data).toISOString();
	const chunk = data.replace(/[tz]/gi, " ").split(" ");
	return {
		d: chunk[0].replace(/-/g, "/"),
		t: chunk[1].match(/^\d+?:\d{1,2}/)[0],
	};
};

const cleanDataURI = (data) => data.map((img) => img.replace(/^data:image\/(jpeg|png|jpg|webp);base64,/i, ""));

const cap = (text) => (text ? text[0].toUpperCase() + text.slice(1) : "");

const getInitials = (str = "") => {
	str = str.split(" ");
	const res = [];
	for (let i = 0; i < 2; i++) {
		if (!str[i]) continue;
		res.push(str[i].charAt(0).toUpperCase());
	}
	return res;
};

const parseDateToNum = (clb) => (chunk) => {
	let { payload } = chunk;
	payload = new Date(payload).getTime();

	chunk.payload = payload;
	clb(chunk);
};

const parseNumToDate = (timeStamp) => (timeStamp === 0 ? "" : new Date(timeStamp).toLocaleDateString("fr-CA"));

const compressImage = async (dataURI) => {
	const blob = await imageCompression.getFilefromDataUrl(dataURI);

	const compressedFile = await imageCompression(blob, {
		maxWidthOrHeight: 1000,
		useWebWorker: true,
		// fileType: 'JPEG',
	});

	console.log({
		diff: blob.size - compressedFile.size,
	});
	const newdataURI = await imageCompression.getDataUrlFromFile(compressedFile);

	return newdataURI;
};

export {
	compressImage,
	parseImagesB64,
	processOffset,
	searchJson,
	getRemoteFile,
	formatDigits,
	readFile,
	parseDateTime,
	cleanDataURI,
	cap,
	getInitials,
	parseDateToNum,
	parseNumToDate,
};
