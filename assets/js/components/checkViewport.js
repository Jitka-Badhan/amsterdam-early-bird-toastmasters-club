const checkViewport = () => {
    const vw = window.innerWidth;
    const breakpoint = 1180;
    const isDesktopSize = vw >= breakpoint ? true : false;

    return isDesktopSize;
}

export default checkViewport;