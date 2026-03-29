const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    const target = parseFloat(counter.getAttribute("data-target"));
    const prefix = counter.getAttribute("data-prefix") || "";
    const suffix = counter.getAttribute("data-suffix") || "";

    let count = 0;
    const increment = target / 100;

    const update = () => {
        count += increment;

        if (count < target) {
            counter.innerText = formatValue(count, target, prefix, suffix);
            requestAnimationFrame(update);
        } else {
            counter.innerText = formatValue(target, target, prefix, suffix);
        }
    };

    update();
});

function formatValue(value, target, prefix, suffix) {
    if (target >= 1000) {
        return prefix + (value / 1000).toFixed(1) + suffix;
    } else {
        return prefix + value.toFixed(2) + suffix;
    }
}