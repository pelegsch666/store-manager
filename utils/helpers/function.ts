export const arrangeDate = () => {
    const dateNow = new Date();
    const aWeekFromNow = new Date(dateNow.getTime() + 7 * 24 * 60 * 60 * 1000);
    return aWeekFromNow;
}