/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/
(function () {
    // Global variables
    const navbar = document.getElementById('navbar__list');

    // For loop constructor for HTML elements
    for (let i = 1; i < 7; i++) {
        // Create Section Element
        document.getElementById('s' + i).innerHTML =
            `<div class='landing__container id="div${i}'>
        <h2>Section ${i}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
        <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
        </div>`;

        // Create Li elements, onclick jump to section
        const liElements = `<li><a id="anchor${i}">Section ${i}</a></li>`;
        navbar.insertAdjacentHTML('beforeend', liElements);

        // onclcick smooth scroll
        document.getElementById(`anchor${i}`).addEventListener('click', function () {
            const elementToScrollTo = document.getElementById(`s${i}`)
            elementToScrollTo.scrollIntoView({ block: 'start', behavior: 'smooth' })
        });
    }

})();