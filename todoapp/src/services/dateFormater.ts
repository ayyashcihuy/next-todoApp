export function dateFormater(date: Date): string {
    return date.toLocaleString("en", { weekday: "long" });
}