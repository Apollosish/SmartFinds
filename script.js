/*
========================================
SMARTFINDS PRODUCT SYSTEM
========================================

Each product has its own information
and its own affiliate tracking link.

When Glitchy gives us the real links,
we only change them here.
*/


const products = {

    jobhunt: {
        name: "JobHuntSimplified",
        link: "https://linkthem.net/aff_c?offer_id=2989&aff_id=203819"
    },

    fan: {
        name: "Portable Rechargeable Fan",
        link: "#"
    },

    watch: {
        name: "Smartwatch",
        link: "#"
    },

    earbuds: {
        name: "Wireless Earbuds",
        link: "#"
    }
};


const buttons = document.querySelectorAll(".offer-btn");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        const productId = button.dataset.product;
        const product = products[productId];

        if (!product) {
            console.error("Product not found:", productId);
            return;
        }

        if (product.link === "#") {
            alert(
                product.name +
                " is currently being prepared. Please check back soon."
            );
            return;
        }

        window.location.href = product.link;

    });

});


/*
========================================
PRODUCT BUTTONS
========================================
*/

const buttons = document.querySelectorAll(".offer-btn");


buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        const productId = button.dataset.product;

        const product = products[productId];


        if (!product) {

            console.error("Product not found:", productId);

            return;
        }


        /*
        Don't send visitors anywhere until
        the real affiliate link exists.
        */

        if (product.link === "#") {

            alert(
                product.name +
                " is currently being prepared. Please check back soon."
            );

            return;
        }


        /*
        Send visitor to the correct offer.
        */

        window.location.href = product.link;

    });

});