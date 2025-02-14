
export function navigateToSection(event, href, pathname, router) {
    event.preventDefault();
    const targetId = href.replace("#", "");

    const scrollToTarget = () => {
        setTimeout(() => {
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        }, 300);
    };

    if (pathname === "/") {
        scrollToTarget();
    } else {
        router.push("/");

        setTimeout(() => {
            scrollToTarget();
        }, 500);
    }
}
