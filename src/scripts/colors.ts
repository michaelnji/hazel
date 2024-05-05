import chroma from "chroma-js";
import tinycolor from "tinycolor2";

export function createRandomColor() {
	let color = tinycolor(chroma.random().mix(chroma.random().hex(), 10).hex());
	if (color.getBrightness() > 150) color = color.darken(80);
	else if (color.isDark()) color = color.lighten();

	return color.toHex();
}

export function generatePalette(color1: string) {
	let baseColor = tinycolor(color1);
	const baseToRGB = baseColor.toRgb();
	baseToRGB.r = baseToRGB.r * 1.618;
	baseToRGB.g = baseToRGB.g * 1.618;
	baseToRGB.b = baseToRGB.b * 1.618;
	baseColor = tinycolor(baseToRGB);
	let primaryColor = baseColor.desaturate(40).toHexString();
	const isLight = baseColor.isLight();
	const isDark = baseColor.isDark();
	let secondaryColor: tinycolor.Instance | string = tinycolor(baseColor);
	if (isDark) {
		secondaryColor = secondaryColor.lighten(20);
		const temp = tinycolor(secondaryColor).spin(240).toRgb();
		temp.r = temp.r * 1.618;
		temp.g = temp.g * 1.618;
		temp.b = temp.b * 1.618;

		secondaryColor = tinycolor(temp).desaturate(40).toHexString();
	}
	if (isLight) {
		secondaryColor = tinycolor(secondaryColor).spin(240).darken(20);
		const temp = tinycolor(secondaryColor).toRgb();
		temp.r = temp.r * 1.618;
		temp.g = temp.g * 1.618;
		temp.b = temp.b * 1.618;
		secondaryColor = tinycolor(temp).desaturate(40).toHexString();
	}
	let complementaryColor = tinycolor(baseColor)
		.spin(240)
		.desaturate(40)
		.toHexString();
	let complementaryColor2 = tinycolor(secondaryColor)
		.spin(-80 * 1.618)
		.toHexString();

	if (tinycolor(primaryColor).getLuminance() > 200)
		primaryColor = tinycolor(primaryColor).darken(80).toHexString();
	if (tinycolor(primaryColor).getLuminance() < 40)
		primaryColor = tinycolor(primaryColor).lighten(10).toHexString();

	if (tinycolor(secondaryColor).getLuminance() > 200)
		secondaryColor = tinycolor(secondaryColor).darken(80).toHexString();
	if (tinycolor(secondaryColor).getLuminance() < 40)
		secondaryColor = tinycolor(secondaryColor).lighten(10).toHexString();

	if (tinycolor(complementaryColor).getLuminance() > 200)
		complementaryColor = tinycolor(complementaryColor).darken(80).toHexString();
	if (tinycolor(complementaryColor).getLuminance() < 40)
		complementaryColor = tinycolor(complementaryColor)
			.lighten(10)
			.toHexString();

	if (tinycolor(complementaryColor2).getLuminance() > 200)
		complementaryColor2 = tinycolor(complementaryColor2)
			.darken(80)
			.toHexString();
	if (tinycolor(complementaryColor2).getLuminance() < 40)
		complementaryColor2 = tinycolor(complementaryColor2)
			.lighten(10)
			.toHexString();

	return [
		primaryColor,
		secondaryColor,
		complementaryColor,
		complementaryColor2,
	];
}

export function colorToHex(color: tinycolor.ColorInput | string) {
	return tinycolor(color).toHexString();
}