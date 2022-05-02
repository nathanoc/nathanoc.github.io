const links = {
    // Desmos
    gravity3d: "https://www.desmos.com/calculator/pmyjtfum2s",
    gravity2d: "https://www.desmos.com/calculator/w81uxb0gn5",
    derivatives: "https://www.desmos.com/calculator/wq8qyrwg3x",
    antiderivatives: "https://www.desmos.com/calculator/dvrinxldbg"
};

window.onload = function()  // Function to fill in every href and src in the document
{
    let els = document.getElementsByClassName("fillLink");
    for (let i = 0; i < els.length; i++)
    {
        let el = els[i];
        el.href = links[el.id];
    }

    els = document.getElementsByClassName("fillSrc");
    for (let i = 0; i < els.length; i++)
    {
        let el = els[i];
        el.src = links[el.id];
    }
}