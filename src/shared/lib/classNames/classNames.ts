type Mods = Record<string, string | boolean>

export function classNames (cls: string, mods: Mods = {}, additional: string[] = []): string {
    return [
        cls,
        ...Object.entries(mods)
            .filter(([className, mode]) => Boolean(mode))
            .map(([className]) => className),
        ...additional.filter(Boolean)
    ].join(' ')
}
