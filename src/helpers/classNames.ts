type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods, additional: string[]): string {
	const modsStr = Object.entries(mods)
		.filter(([, value]) => !!value)
		.map(([item]) => item);

	return [cls, ...modsStr, ...additional,].join(' ');
}
