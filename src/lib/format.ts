const dateFormatter = new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeZone: "UTC",
})

export function formatDate(isoDate: string): string {
    return dateFormatter.format(new Date(isoDate));
}