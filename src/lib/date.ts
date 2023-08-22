export function dateNow() {
    const now = new Date();
    let day = now.getDate();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();

    let format1 = year + "/" + month + "/" + day;
    return format1;
}
